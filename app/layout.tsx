import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import SnowBackground from '@/components/SnowBackground';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Family or Flying Solo? | Living Arrangements Blog',
  description: 'Exploring the pros and cons of living with family vs living on your own',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={inter.className}>
        <SnowBackground />
        {children}
      </body>
    </html>
  );
}