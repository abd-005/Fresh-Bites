import { Poppins, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${lora.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}