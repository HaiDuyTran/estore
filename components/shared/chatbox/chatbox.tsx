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
} from 'react'; // Import necessary types
import ReactMarkdown, { ExtraProps } from 'react-markdown'; // Import ExtraProps if needed for components type safety

// Define types for custom components props for clarity, though often inferred
type AnchorProps = ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ExtraProps;
type ParagraphProps = ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps;

export function ChatBox() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState([
    // Example messages state with Markdown
    { id: 1, text: 'How can i help you ?', sender: 'other' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessageText = inputValue;
      const newUserMessage = {
        id: Date.now(),
        text: userMessageText,
        sender: 'me',
      };

      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputValue('');

      const typingIndicatorId = Date.now() + 1;
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: typingIndicatorId, text: '...', sender: 'other' },
      ]);

      try {
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessageText }),
        });

        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== typingIndicatorId)
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error('API Error:', errorData.error);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: Date.now() + 2,
              text: `Error: ${errorData.error || 'Failed to get reply.'}`,
              sender: 'other',
            },
          ]);
          return;
        }

        const data = await response.json();

        if (data.reply) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { id: Date.now() + 3, text: data.reply, sender: 'other' },
          ]);
        } else {
          console.error('API response missing reply:', data);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: Date.now() + 4,
              text: 'Received an empty reply.',
              sender: 'other',
            },
          ]);
        }
      } catch (error) {
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== typingIndicatorId)
        );

        console.error('Failed to fetch chat response:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now() + 5,
            text: 'Error contacting the chat service.',
            sender: 'other',
          },
        ]);
      }
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
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === 'me' ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* --- CORRECTION START --- */}
                {/* Move prose styles and conditional color styles to the container div */}
                <div
                  className={`prose prose-sm dark:prose-invert max-w-[80%] rounded-lg px-3 py-2 text-sm break-words ${
                    msg.sender === 'me'
                      ? 'bg-primary text-primary-foreground prose-p:text-primary-foreground prose-strong:text-primary-foreground prose-em:text-primary-foreground prose-a:text-primary-foreground prose-li:text-primary-foreground prose-code:text-primary-foreground prose-blockquote:text-primary-foreground' // Styles for 'me' bubble
                      : 'bg-muted text-muted-foreground prose-p:text-muted-foreground prose-strong:text-muted-foreground prose-em:text-muted-foreground prose-a:text-muted-foreground prose-li:text-muted-foreground prose-code:text-muted-foreground prose-blockquote:text-muted-foreground' // Styles for 'other' bubble
                  }`}
                >
                  {/* Remove className from ReactMarkdown */}
                  <ReactMarkdown
                    components={{
                      // Use _node to indicate the variable is intentionally unused
                      a: ({ _node, ...props }: AnchorProps) => (
                        <Link
                          className=' text-xl font-bold underline text-blue-400'
                          href={
                            props.href ||
                            '/product/calvin-klein-slim-fit-stretch-shirt'
                          }
                          {...props}
                          target='_self'
                          rel='noopener noreferrer'
                          // You can keep specific styling here or rely on prose-a: styles above
                          // className="underline hover:text-blue-500"
                          // Important: prose-a:text-... above will likely override this unless you use !important or more specific selectors
                        />
                      ),
                      p: ({ _node, ...props }: ParagraphProps) => (
                        // Keep specific paragraph styling if needed
                        <p {...props} className='mb-2 last:mb-0' />
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
                {/* --- CORRECTION END --- */}
              </div>
            ))}
            <div ref={messagesEndRef} />
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
              />
              <Button
                size='icon'
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
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
