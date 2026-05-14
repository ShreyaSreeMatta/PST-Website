import { SectionHeader } from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Insights — Hoi Wing Ng | Silicon Valley Real Estate',
  description: 'Bay Area and Silicon Valley real estate market insights, pricing trends, and buyer demand analysis from Hoi Wing Ng.',
};

export default function MarketInsightsPage() {
  return (
    <div className="space-y-20 py-16">
      <section className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Market intelligence"
          title="Bay Area real estate market insights"
          description="Data-driven analysis of pricing trends, inventory signals, and buyer demand to help you make confident decisions."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { area: 'Silicon Valley', text: 'Home values, inventory signals, and timing for sellers in the South Bay. Includes Cupertino, Sunnyvale, San Jose, and surrounding communities.' },
            { area: 'South Bay', text: 'Market conditions for homeowners considering a right-sized move within the South Bay, including pricing and absorption rate data.' },
            { area: 'South Beach SF', text: 'Condo market dynamics, buyer demand, and pricing trends in the South Beach and Mission Bay neighborhoods of San Francisco.' },
            { area: 'Buyer relocation', text: 'Guidance for families and professionals relocating to Silicon Valley — neighborhood comparisons, school districts, and commute corridors.' },
          ].map(({ area, text }) => (
            <article key={area} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-panel">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">{area}</p>
              <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[28px] border border-brand-accent/20 bg-brand-accent/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Get a personalized market report</p>
          <p className="mt-3 text-sm leading-7 text-white/70">
            For a customized analysis of your specific neighborhood and property type, contact Hoi directly at{' '}
            <a href="tel:4088253814" className="text-white hover:text-brand-accent">408-825-3814</a> or{' '}
            <a href="mailto:hng@intero.com" className="text-white hover:text-brand-accent">hng@intero.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
