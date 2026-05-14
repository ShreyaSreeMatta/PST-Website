import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Home — Hoi Wing Ng | Silicon Valley Real Estate',
  description: 'Premium home selling strategy for Silicon Valley homeowners. Smart pricing, luxury marketing, and proven negotiation with Hoi Wing Ng.',
};

export default function SellPage() {
  return (
    <div className="space-y-20 py-16">
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeader
              eyebrow="Sell with strategy"
              title="Sell your Silicon Valley home for maximum value"
              description="Hoi Wing Ng brings premium marketing, precise pricing, and deep local knowledge to every listing — from preparation through close."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Pricing strategy', text: 'Data-driven pricing that attracts serious buyers while protecting your equity.' },
                { label: 'Premium marketing', text: 'Professional photography, staging, and targeted digital campaigns.' },
                { label: 'Buyer targeting', text: 'Leverage RealScout and local networks to reach qualified buyers fast.' },
                { label: 'Negotiation', text: 'Firm, experienced representation from offer through closing.' },
              ].map(({ label, text }) => (
                <div key={label} className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-panel">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Request a selling consultation</p>
            <ContactForm contextLabel="Sell" />
          </div>
        </div>
      </section>
    </div>
  );
}
