import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Raihan Ahmad | Digital Marketer & Vibe Coder',
  description: 'Portfolio of Raihan Ahmad, showcasing expertise in Digital Marketing, SEO, AI, Vibe Coding, and Design.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-[#F5F5F5] text-[#1E1E1E] antialiased selection:bg-[#FDB515] selection:text-[#1E1E1E] relative min-h-screen">
        {/* Background Decorative Elements */}
        <div className="fixed top-[-100px] right-[-100px] w-80 h-80 rounded-full border-[1px] border-[#FDB515] opacity-20 z-[-1] pointer-events-none"></div>
        <div className="fixed bottom-[10%] left-[20%] w-60 h-60 bg-[#FDB515] rounded-full blur-[120px] opacity-20 z-[-1] pointer-events-none"></div>
        <div className="fixed top-[20%] left-[5%] opacity-10 z-[-1] pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 100 100"><circle cx="2" cy="2" r="2" fill="currentColor"/><circle cx="22" cy="2" r="2" fill="currentColor"/><circle cx="42" cy="2" r="2" fill="currentColor"/><circle cx="2" cy="22" r="2" fill="currentColor"/><circle cx="22" cy="22" r="2" fill="currentColor"/><circle cx="42" cy="22" r="2" fill="currentColor"/><circle cx="2" cy="42" r="2" fill="currentColor"/><circle cx="22" cy="42" r="2" fill="currentColor"/><circle cx="42" cy="42" r="2" fill="currentColor"/></svg>
        </div>
        <div className="fixed top-[40%] right-[10%] w-96 h-96 bg-[#1E1E1E] rounded-full blur-[150px] opacity-5 z-[-1] pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
