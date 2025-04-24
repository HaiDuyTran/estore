import Header from '@/components/shared/header';
import Footer from '@/components/footer';
import { ChatBox } from '@/components/shared/chatbox/chatbox';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <ChatBox />
      <Header />
      <main className='flex-1 wrapper'>{children}</main>

      <Footer />
    </div>
  );
}
