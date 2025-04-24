import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';

// --- Interfaces (Type Definitions) ---

// Describes the expected structure of the incoming request body
interface ChatRequestBody {
  message: string;
  // History is crucial for context-aware conversations
  history?: GeminiContent[]; // Array of previous user/model messages
}

// Standard Gemini content block
interface GeminiContent {
  parts: { text: string }[];
  role: 'user' | 'model'; // Role is essential for multi-turn chat
}

// Structure for the request payload sent TO Gemini
interface GeminiRequestPayload {
  contents: GeminiContent[];
  // Optional: Add safetySettings, generationConfig etc. if needed
  // safetySettings?: ...
  // generationConfig?: ...
}

// Structure for a successful response FROM Gemini
interface GeminiSuccessResponse {
  candidates: {
    content: GeminiContent; // The actual response content from the model
    // ... other fields like finishReason, safetyRatings
  }[];
  // promptFeedback?: ...
}

// Structure for an error response FROM Gemini
interface GeminiErrorResponse {
  error: {
    code: number;
    message: string;
    status: string;
  };
}

// --- API Route Handler ---

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  // --- 1. Check for API Key ---
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY environment variable not set.');
    return NextResponse.json(
      { error: 'API key not configured.' },
      { status: 500 }
    );
  }

  // --- 2. Fetch Product Data (Consider Efficiency) ---
  // Note: Fetching data on *every* chat request might be inefficient for large catalogs.
  // Consider caching or alternative strategies if performance becomes an issue.
  const BATCH_SIZE = 50; // Limit the amount of data injected into the prompt
  const skip = 0;       // Or implement pagination if needed later
  let productsToProcess = [];
  try {
    productsToProcess = await prisma.product.findMany({
      take: BATCH_SIZE,
      skip: skip,
      select: { // Select all fields needed for the AI's knowledge
        id: true,
        name: true,
        slug: true, // Crucial for the link format
        images: true, // MUST contain image URLs for the new format
        banner: true,
        createdAt: true,
        category: true,
        brand: true,
        description: true,
        stock: true,
        price: true,
        rating: true,
        numReviews: true,
        isFeatured: true,
      },
    });
    console.log(`Fetched ${productsToProcess.length} products for context.`);

    // Pre-process products slightly for clarity in the prompt, ensuring 'images' is an array
     productsToProcess = productsToProcess.map(p => ({
       ...p,
       images: Array.isArray(p.images) ? p.images : [], // Ensure images is always an array
     }));

  } catch (dbError) {
      console.error("Error fetching products from database:", dbError);
      // Decide if you want to proceed without product data or return an error
      // return NextResponse.json({ error: "Failed to load product data." }, { status: 500 });
      // Or continue with an empty product list, the AI might respond less effectively
  }


  // --- 3. Parse Incoming Request Body ---
  let userMessage: string;
  let conversationHistory: GeminiContent[] = []; // Default to empty history

  try {
    const body: ChatRequestBody = await request.json();

    // Validate message
    if (!body.message || typeof body.message !== 'string' || body.message.trim() === '') {
      return NextResponse.json(
        { error: 'Invalid request: "message" field is required and must be a non-empty string.' },
        { status: 400 }
      );
    }
    userMessage = body.message;

    // Validate and use history if provided
    if (body.history && Array.isArray(body.history)) {
      // Optional: Add more validation for the structure of history items
      conversationHistory = body.history.filter(item =>
        item && item.role && item.parts && Array.isArray(item.parts) && item.parts.length > 0 && item.parts[0].text
      ); // Basic validation
    }

  } catch (error) {
    console.error('Error parsing request body:', error);
    return NextResponse.json(
      { error: 'Invalid request body. Expected JSON.' },
      { status: 400 }
    );
  }

  // --- 4. Prepare Request for Gemini API ---
  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`; // Use latest flash model

  // --- Construct the 'contents' array including history ---

  // Define the system prompt/persona ONCE.
  const systemPrompt: GeminiContent = {
    role: 'model', // Often, the initial system instructions are treated as the first 'model' turn
    parts: [{
      text: `You are a proactive and highly skilled Customer Advocate AI for EStore, embodying our core values of Helpfulness, Integrity, and Customer Focus.

Your mission is to deliver exceptional customer experiences by not just answering questions, but anticipating needs related to shopping products, services, and policies. You should strive to resolve issues on the first contact whenever possible.

**Mandatory Approach:**
*   **Tone:** Enthusiastic, empathetic, professional, and solution-oriented.
*   **Accuracy:** Rely *exclusively* on the verified knowledge base provided below. If information is unavailable, state it transparently. Never speculate.
*   **Clarity:** Communicate complex information simply. Summarize key points and next steps.
*   **Efficiency:** Respect the customer's time. Get to the core of the issue quickly but politely.
*   **Empathy:** Validate customer feelings. Phrases like "I can see why that would be concerning" or "Let's get this sorted out for you" are encouraged.

**Database (Current Products): You can access this and answer client questions based ONLY on this data. Note the 'images' field contains an array of image URLs.**
${JSON.stringify(productsToProcess, null, 2)}

**Specific Actions:**
*   Greet users warmly.
*   Ask clarifying questions to ensure full understanding, especially if the query is ambiguous.
*   Provide accurate information about products, services, policies (returns, shipping, etc.) *based on the data provided*.
*   Guide users through troubleshooting steps for common issues related to EStore (e.g., 'checking order status', 'finding a product').
*   If unable to resolve using the provided data, clearly explain *why* (e.g., "I don't have information on X in my current dataset") and provide the *best* next step (e.g., "For detailed order tracking, please visit your account page: [link]" or "I recommend contacting our support team via [method] for that specific issue.").
*   **VERY IMPORTANT: When mentioning a specific product from the database:**
    *   **If the product has images (the 'images' array is not empty):** Display its first image as a clickable link using this EXACT Markdown format: \`[![Product Name](image_url)](/product/{slug})\`.
        *   Replace \`Product Name\` with the actual 'name' from the product data.
        *   Replace \`image_url\` with the *first* URL string found in the product's 'images' array.
        *   Replace \`{slug}\` with the actual 'slug' value from the product data.
        *   Style product properties with markdown if needed
    *   **If the product has NO images (the 'images' array is empty or missing):** Provide only a standard text link using the Markdown format: \`[Product Name](/product/{slug})\`. Replace \`Product Name\` and \`{slug}\` as described above.
    *   Use this format consistently whenever referring to a product in your response. Ensure the generated markdown is valid.

**Critical Boundaries:**
*   No guessing. If you don't know based on the provided data, say so.
*   No collection of sensitive PII (passwords, full payment details).
*   Stay strictly within the scope of EStore's products, services, and policies as represented in the provided data.
*   Always represent EStore professionally.`
    }],
  };

  // Combine system prompt, history, and the new user message
  const combinedContents: GeminiContent[] = [
    systemPrompt, // Start with the system instructions
    ...conversationHistory, // Add all previous turns
    {
      role: 'user', // The latest message from the user
      parts: [{ text: userMessage }],
    },
  ];

  const geminiPayload: GeminiRequestPayload = {
    contents: combinedContents,
    // Optional: Add generationConfig or safetySettings if needed
    // generationConfig: { temperature: 0.7, maxOutputTokens: 1000 },
    // safetySettings: [...]
  };

  // --- 5. Call the Gemini API ---
  try {
    // console.log("Sending payload to Gemini:", JSON.stringify(geminiPayload, null, 2)); // Log payload for debugging - can be very large

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiPayload),
    });

    // --- 6. Handle Gemini API Response ---
    if (!geminiRes.ok) {
      let errorDetails: GeminiErrorResponse | { error: string } = { error: 'Unknown Gemini API error' };
      try {
        errorDetails = await geminiRes.json();
      } catch (parseError) {
        // Avoid logging the potentially huge request body in the error response here
        errorDetails = { error: `Gemini API Error: ${geminiRes.status} ${geminiRes.statusText}. Failed to parse error response body.` };
      }
      console.error('Gemini API Error:', errorDetails);
      return NextResponse.json(
        { error: 'Failed to get response from AI.', details: errorDetails },
        { status: geminiRes.status || 502 } // Use 502 Bad Gateway if status is 0 or unclear
      );
    }

    const data: GeminiSuccessResponse = await geminiRes.json();
    // console.log("Received response from Gemini:", JSON.stringify(data, null, 2)); // Log response for debugging

    // Extract the text response - checking structure carefully
    const botReplyContent = data.candidates?.[0]?.content;

    if (!botReplyContent || botReplyContent.role !== 'model' || !botReplyContent.parts?.[0]?.text) {
      console.error('Error: Could not extract valid text content from Gemini response:', data);
      return NextResponse.json(
        { error: 'AI response format was unexpected or empty.' },
        { status: 500 }
      );
    }

    const botReplyText = botReplyContent.parts[0].text;

    // --- 7. Send Response Back to Client ---
    // The response includes the AI's text reply AND the full Gemini content object
    // which includes the 'model' role, useful for the client to update history.
    return NextResponse.json(
      {
        reply: botReplyText, // The extracted text message (now potentially containing image markdown)
        responseContent: botReplyContent // The full content object { role: 'model', parts: [...] }
      },
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error during API route execution:', error);
    // Avoid logging potentially large payload in general errors
    if (error instanceof Error) {
        console.error(error.message);
        if (error.stack) {
             console.error(error.stack);
        }
    }
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}