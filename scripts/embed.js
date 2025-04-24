// scripts/embedProducts.js
import { PrismaClient } from '../prisma/app/generated/prisma/client'; // Sets up WebSocket connections, which enables Neon to use WebSocket communication.
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

// Load environment variables (especially GOOGLE_API_KEY or GEMINI_API_KEY)
dotenv.config();

const prisma = new PrismaClient();

// --- Use the correct environment variable name ---
const apiKey = process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    'Missing Gemini API Key in environment variables (GEMINI_API_KEY or GOOGLE_API_KEY)'
  );
}
const genAI = new GoogleGenerativeAI(apiKey);
// -------------------------------------------------

const model = genAI.getGenerativeModel({ model: 'embedding-001' });

const BATCH_SIZE = 50; // How many products to process in one DB query
const DELAY_MS = 1100; // Delay between API calls (Gemini free tier limit is often 60 QPM)

/**
 * Creates a comprehensive text representation of a product for embedding,
 * including all relevant fields.
 * Uses the product name as the title for RETRIEVAL_DOCUMENT task type.
 * @param {object} product - The product object from Prisma, including all fields selected below.
 * @returns {{text: string, title: string}} - The text content and title for embedding
 */
function createProductTextForEmbedding(product) {
  const name = product.name || 'Unnamed Product';

  const parts = [];

  // --- Add all relevant fields ---
  parts.push(`Product Name: ${name}`); // Include name explicitly in the text body too
  if (product.category) parts.push(`Category: ${product.category}`);
  if (product.brand) parts.push(`Brand: ${product.brand}`);
  if (product.description) parts.push(`Description: ${product.description}`);

  // Format numeric and boolean fields
  if (product.stock !== null && product.stock !== undefined) {
    parts.push(
      `Stock Availability: ${
        product.stock > 0 ? product.stock + ' available' : 'Out of stock'
      }`
    );
  }
  if (product.price !== null && product.price !== undefined) {
    // Prisma Decimal needs toString()
    parts.push(`Price: ${product.price.toString()}`);
  }
  if (product.rating !== null && product.rating !== undefined) {
    const reviewCount = product.numReviews || 0;
    // Prisma Decimal needs toString()
    parts.push(
      `Average Rating: ${product.rating.toString()} (based on ${reviewCount} reviews)`
    );
  } else if (product.numReviews !== null && product.numReviews !== undefined) {
    parts.push(`Reviews: ${product.numReviews} reviews`); // Add review count even if rating is 0 or null
  }

  parts.push(`Featured: ${product.isFeatured ? 'Yes' : 'No'}`);
  // --- End of added fields ---

  // Filter out any parts that might be empty if a field was null/empty
  // and join them with newlines.
  const text = parts
    .filter((part) => part && part.split(':')[1]?.trim())
    .join('\n');

  if (!text.trim()) {
    console.warn(
      `Generated empty text for product ID ${product.id}. Check product data.`
    );
  }

  return { text, title: name }; // Use product name as the separate title parameter
}

/**
 * Fetches products without embeddings, generates embeddings using Gemini,
 * and updates the database.
 */
async function generateAndStoreEmbeddings() {
  console.log('Starting embedding generation process...');
  let processedCount = 0;
  let skip = 0;
  let productsToProcess = [];

  try {
    do {
      // Fetch a batch of products that don't have an embedding yet
      console.log(`Fetching batch starting from index ${skip}...`);
      productsToProcess = await prisma.product.findMany({
        where: {
          embedding: {}, // Only fetch products without an embedding
        },
        take: BATCH_SIZE,
        skip: skip,
        select: {
          // --- Select ALL fields needed by createProductTextForEmbedding ---
          id: true,
          name: true,
          slug: true,
          images: true,
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

          // slug, images, banner, createdAt, etc. are not selected as they aren't used for the text
          // ---------------------------------------------------------------
        },
      });

      console.log(`Found ${productsToProcess.length} products in this batch.`);

      if (productsToProcess.length === 0) {
        console.log('No more products to process.');
        break; // Exit loop if no products found
      }

      for (const product of productsToProcess) {
        try {
          const { text, title } = createProductTextForEmbedding(product);

          // Add extra check here in case createProductTextForEmbedding logic yields empty text
          if (!text || !text.trim()) {
            console.warn(
              `Skipping product ID ${product.id} ("${
                product.name || 'N/A'
              }") due to effectively empty generated text content.`
            );
            continue;
          }

          console.log(`Embedding product ID: ${product.id} ("${title}")...`);

          // Generate embedding using Gemini API
          const result = await model.embedContent({
            content: text,
            taskType: 'retrieval_document', // Use for embedding documents to be searched
            title: title, // Provide title for better retrieval quality
          });

          const embeddingVector = result.embedding.values; // Get the actual array of numbers

          // Quick validation of the embedding vector
          if (!Array.isArray(embeddingVector) || embeddingVector.length === 0) {
            console.error(
              `  Failed to generate a valid embedding vector for product ID: ${product.id}. Skipping update.`
            );
            continue; // Skip updating this product
          }

          // Update the product in the database with the new embedding
          await prisma.product.update({
            where: { id: product.id },
            data: {
              embedding: embeddingVector, // Prisma handles JSON serialization
            },
          });

          processedCount++;
          console.log(
            `  Successfully embedded and updated product ID: ${product.id}`
          );

          // --- IMPORTANT: Add a delay to avoid rate limiting ---
          await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
          // -----------------------------------------------------
        } catch (error) {
          // Check for specific API errors if needed
          if (error.message && error.message.includes('429')) {
            console.warn(
              `Rate limit likely hit. Consider increasing DELAY_MS. Error for product ID ${product.id}:`,
              error.message
            );
            // Optionally add a longer delay here before continuing or break
          } else {
            console.error(
              `Error processing product ID ${product.id} ("${
                product.name || 'N/A'
              }"):`,
              error.message || error
            );
          }
          // Optional: Decide if you want to skip or retry on error
        }
      } // End loop for products in batch

      // Prepare for the next batch
      skip += productsToProcess.length; // Move the starting point for the next fetch
    } while (productsToProcess.length > 0); // Continue if the last batch had products

    console.log(
      `\nEmbedding generation finished. Total products processed: ${processedCount}`
    );
  } catch (error) {
    console.error(
      'An error occurred during the batch fetching or database operation:',
      error
    );
  } finally {
    await prisma.$disconnect();
    console.log('Database connection closed.');
  }
}

// Run the main function
generateAndStoreEmbeddings();
