import { FeaturedListingCard } from '@/components/FeaturedListingCard';
import { SectionHeader } from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sold Portfolio — Hoi Wing Ng | Silicon Valley Real Estate',
  description: 'Recent sold listings and case studies from Hoi Wing Ng across Silicon Valley and San Francisco Bay Area.',
};

export default function SoldPortfolioPage() {
  return (
    <div className="space-y-20 py-16">
      <section className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Sold portfolio"
          title="Recent results across Silicon Valley and the Bay Area"
          description="Each transaction represents a tailored strategy — precise pricing, premium presentation, and disciplined negotiation."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FeaturedListingCard
            title="The Infinity | South Beach, San Francisco"
            price="$1,218,000"
            details="2 Bed | 2 Bath | 1,167 sqft"
            description="Smart pricing, luxury presentation, and targeted buyer positioning in the SF condo market."
          />
          <FeaturedListingCard
            title="Silicon Valley Luxury Sale"
            price="Coming soon"
            details="Premium single-family strategy"
            description="A strategic sale for a long-term homeowner seeking maximum value and a seamless transition."
          />
        </div>
      </section>
    </div>
  );
}
