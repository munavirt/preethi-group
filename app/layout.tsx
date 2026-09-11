import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Preethi Group | Building Businesses, Growing Together',
  description:
    'Preethi Group is a growing collection of businesses rooted in fashion and retail across Kerala — including Preethi Silks and Calicut Fashion Bazar.',
  openGraph: {
    title: 'Preethi Group | Building Businesses, Growing Together',
    description:
      'A growing group of businesses built around fashion, retail and the people we serve.',
    type: 'website',
  },
};

import { Preloader } from '@/components/preloader/preloader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`} data-scroll-behavior="smooth">
      <body className="relative bg-background text-foreground font-sans antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
