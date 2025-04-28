/* eslint-disable jsx-a11y/alt-text */
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircleMoreIcon, XIcon, SendHorizonalIcon } from 'lucide-react';
import Link from 'next/link';
import {
  useState,
  useRef,
  useEffect,
  ClassAttributes,
  HTMLAttributes,
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
} from 'react';
import ReactMarkdown, { ExtraProps } from 'react-markdown';
// --- Types ---
// Interface for Gemini conversation turns (matches backend)
interface GeminiContent {
  parts: { text: string }[];
  role: 'user' | 'model';
}

// Interface for the API response structure from your /api/chat endpoint
interface ChatApiResponse {
  reply: string; // The plain text reply
  responseContent: GeminiContent; // The full Gemini content object for history
}

// Interface for API error response
interface ChatApiErrorResponse {
  error: string;
  details?: string; // Optional details
}

// Define types for custom components props
type AnchorProps = ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ExtraProps;
type ParagraphProps = ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps;

type ImageProps = ClassAttributes<HTMLImageElement> &
  ImgHTMLAttributes<HTMLImageElement> & // Use correct attribute type
  ExtraProps;

export function ChatBox() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // --- State Change: Use GeminiContent for messages ---
  const [messages, setMessages] = useState<GeminiContent[]>([
    // Initial message from the assistant
    { role: 'model', parts: [{ text: 'Hello! How can I help you today?' }] },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Scroll to bottom effect
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]); // Trigger effect when messages change

  const handleSendMessage = async () => {
    const userMessageText = inputValue.trim();
    if (!userMessageText || isLoading) return; // Prevent sending empty or during load

    setIsLoading(true); // Set loading state

    // --- History Integration: Format user message ---
    const userMessageContent: GeminiContent = {
      role: 'user',
      parts: [{ text: userMessageText }],
    };

    // --- History Integration: Prepare history to send ---
    // Send the state *before* adding the new user message
    const historyToSend = [...messages];

    // --- Optimistic UI Update ---
    // Add the user's message immediately to the UI
    setMessages((prevMessages) => [...prevMessages, userMessageContent]);
    setInputValue(''); // Clear input after adding message

    try {
      const response = await fetch('/api/chatbot', {
        // Ensure this matches your API route file name (e.g., /api/chat/route.ts)
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // --- History Integration: Send message and history ---
        body: JSON.stringify({
          message: userMessageText, // The new message text
          history: historyToSend, // The conversation history up to this point
        }),
      });

      if (!response.ok) {
        let errorData: ChatApiErrorResponse = { error: 'Unknown API error' };
        try {
          errorData = await response.json();
        } catch {
          // Handle cases where the error response isn't valid JSON
          errorData = {
            error: `API Error: ${response.status} ${response.statusText}`,
          };
        }
        console.error('API Error:', errorData);

        // Add an error message to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: 'model', // Use 'model' role for system/error messages
            parts: [
              { text: `Sorry, I encountered an error: ${errorData.error}` },
            ],
          },
        ]);
        // --- Optional: Remove optimistic user message on error ---
        // setMessages(prev => prev.slice(0, -1)); // Uncomment to remove user message if API fails
        return; // Stop processing on error
      }

      const data: ChatApiResponse = await response.json();

      // --- History Integration: Use responseContent ---
      if (data.responseContent && data.responseContent.role === 'model') {
        // Add the valid model response to the messages state
        setMessages((prevMessages) => [...prevMessages, data.responseContent]);
      } else {
        console.error('API response missing valid responseContent:', data);
        // Add an error message if the format is wrong
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: 'model',
            parts: [
              {
                text: 'Sorry, I received an unexpected response from the server.',
              },
            ],
          },
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch chat response:', error);
      // Add a generic network error message
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: 'model',
          parts: [
            {
              text: "Sorry, I couldn't connect to the chat service. Please check your connection.",
            },
          ],
        },
      ]);
      // --- Optional: Remove optimistic user message on error ---
      // setMessages(prev => prev.slice(0, -1)); // Uncomment to remove user message if fetch fails
    } finally {
      setIsLoading(false); // Turn off loading indicator regardless of success/failure
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4'>
      {isOpen && (
        <Card className='w-80 sm:w-96 h-[500px] bg-card border rounded-lg shadow-xl flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 ease-out'>
          <CardHeader className='flex flex-row items-center justify-between p-3 border-b bg-card-foreground/5'>
            <CardTitle className='text-base font-semibold text-card-foreground'>
              Chat Support
            </CardTitle>
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleChat}
              className='rounded-full h-8 w-8 text-muted-foreground hover:bg-muted/50'
              aria-label='Close chat'
            >
              <XIcon className='h-4 w-4' />
            </Button>
          </CardHeader>

          <CardContent className='flex-1 p-4 overflow-y-auto space-y-4 bg-card'>
            {/* --- Rendering Change: Adapt to GeminiContent --- */}
            {messages.map(
              (
                msg,
                index // Use index for key if no unique ID is available in GeminiContent
              ) => (
                <div
                  key={index} // Consider adding unique IDs if needed for more complex state updates
                  className={`flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start' // Use role
                  }`}
                >
                  <div
                    className={`prose prose-sm dark:prose-invert max-w-[80%] rounded-lg px-3 py-2 text-sm break-words ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground prose-p:text-primary-foreground prose-strong:text-primary-foreground prose-em:text-primary-foreground prose-a:text-primary-foreground prose-li:text-primary-foreground prose-code:text-primary-foreground prose-blockquote:text-primary-foreground'
                        : 'bg-muted text-muted-foreground prose-p:text-muted-foreground prose-strong:text-muted-foreground prose-em:text-muted-foreground prose-a:text-muted-foreground prose-li:text-muted-foreground prose-code:text-muted-foreground prose-blockquote:text-muted-foreground'
                    }`}
                  >
                    <ReactMarkdown
                      components={{
                        // Use _node to indicate the variable is intentionally unused
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        a: ({ node: _node, ...props }: AnchorProps) => (
                          <Link
                            // --- Ensure href is correctly passed ---
                            href={props.href || '#'} // Provide a default href if none exists
                            {...props}
                            target='_blank' // Open product links in new tab typically
                            rel='noopener noreferrer' // Security best practice for target="_blank"
                            // Rely on prose-a styles, add specific overrides if needed
                            className='underline hover:text-blue-500' // Example override
                          />
                        ),
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        p: ({ node: _node, ...props }: ParagraphProps) => (
                          <p {...props} className='mb-2 last:mb-0' />
                        ),
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        img: ({ node: _node, ...props }: ImageProps) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            {...props} // Pass down src, alt, etc.
                            // Apply Tailwind classes for border, padding, rounded corners, background, shadow
                            className='border border-stone-300 dark:border-stone-600 p-1 rounded bg-white shadow-sm my-1 inline-block'
                            style={{ maxWidth: '100%' }} // Prevent overflow
                            // Alt text comes from the markdown ![Product Name](...)
                          />
                        ),
                        // Add rendering for image links generated by the backend
                        // Ensure your markdown generation format `[![...](...)](...)` is correct
                        // ReactMarkdown might handle nested markdown (link around image) directly
                        // Or you might need a custom image component if specific logic is needed
                      }}
                    >
                      {/* Access text from parts array */}
                      {msg.parts[0].text}
                    </ReactMarkdown>
                  </div>
                </div>
              )
            )}
            {/* Display loading indicator */}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='prose prose-sm dark:prose-invert max-w-[80%] rounded-lg px-3 py-2 text-sm break-words bg-muted text-muted-foreground animate-pulse'>
                  ... thinking ...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} /> {/* For scrolling */}
          </CardContent>

          <CardFooter className='p-3 border-t bg-card-foreground/5'>
            <div className='flex w-full items-center gap-2'>
              <Input
                type='text'
                placeholder='Type a message...'
                className='flex-grow bg-card focus-visible:ring-1 focus-visible:ring-primary'
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                aria-label='Chat message input'
                disabled={isLoading} // Disable input while loading
              />
              <Button
                size='icon'
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading} // Disable button if input empty or loading
                aria-label='Send message'
              >
                <SendHorizonalIcon className='h-5 w-5' />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}

      <Button
        variant='default'
        size='icon'
        className='rounded-full w-14 h-14 shadow-lg hover:scale-105 transition-transform duration-200 ease-out'
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        aria-expanded={isOpen}
      >
        <MessageCircleMoreIcon className='h-6 w-6' />
      </Button>
    </div>
  );
}
