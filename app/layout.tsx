import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hoi Wing Ng — Silicon Valley Real Estate Advisor',
  description:
    'Premium Silicon Valley real estate guidance for homeowners, buyers, downsizers, and families. Request a free valuation or consultation today.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/*
          Analytics placeholders:
          - Google Analytics / GA4
          - Meta Pixel
          - Google Search Console
          - Form conversion tracking
          - Click tracking for phone and email links
        */}
        <div className="min-h-screen text-white">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
