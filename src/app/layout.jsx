import { Poppins, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/themes/theme-provider';
import Navbar from '@/components/shareable/Navbar';
import Footer from '@/components/shareable/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${lora.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar></Navbar>
          <main className="w-11/12 py-8 mx-auto">
            {children}
          </main>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}