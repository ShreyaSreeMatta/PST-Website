import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy a Home in Silicon Valley — Hoi Wing Ng',
  description: 'Browse Silicon Valley and Bay Area homes by neighborhood with expert guidance from Hoi Wing Ng.',
};

const features = [
  { label: 'Home search', text: 'RealScout-powered discovery matched to your lifestyle and financial goals.' },
  { label: 'Neighborhood insight', text: 'Honest, local guidance on schools, commutes, and long-term value.' },
  { label: 'Offer strategy', text: 'Competitive, well-structured offers with the best chance of success.' },
  { label: 'Multilingual', text: 'Guidance in English, Mandarin, and Cantonese for families making major decisions.' },
];

const communities = [
  { name: 'Cupertino', slug: 'cupertino', county: 'Santa Clara County' },
  { name: 'Palo Alto', slug: 'palo-alto', county: 'Santa Clara County' },
  { name: 'Saratoga', slug: 'saratoga', county: 'Santa Clara County' },
  { name: 'Los Altos', slug: 'los-altos', county: 'Santa Clara County' },
  { name: 'Los Gatos', slug: 'los-gatos', county: 'Santa Clara County' },
  { name: 'Mountain View', slug: 'mountain-view', county: 'Santa Clara County' },
  { name: 'Menlo Park', slug: 'menlo-park', county: 'San Mateo County' },
  { name: 'Atherton', slug: 'atherton', county: 'San Mateo County' },
  { name: 'Redwood City', slug: 'redwood-city', county: 'San Mateo County' },
  { name: 'Burlingame', slug: 'burlingame', county: 'San Mateo County' },
];

export default function BuyPage() {
  return (
    <div className="space-y-24 py-16">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] uppercase tracking-[0.45em] text-brand-accent/70">Powered by RealScout</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Search Silicon Valley homes
        </h1>
        <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/50">
          Browse active listings by neighborhood — each page shows live RealScout data with
          local pricing insight, school data, and guidance you won't find on Zillow.
        </p>
      </section>

      {/* Browse by community */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.45em] text-brand-accent/70">Browse by neighborhood</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Select a community to see live listings
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {communities.map(({ name, slug, county }) => (
            <Link
              key={slug}
              href={`/communities/${slug}`}
              className="group flex flex-col bg-[#0e1113] p-6 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">{county}</p>
              <p className="mt-2 text-[15px] font-medium text-white/80 transition-colors duration-200 group-hover:text-brand-accent">
                {name}
              </p>
              <p className="mt-3 text-[12px] text-brand-accent/40 transition-all duration-200 group-hover:text-brand-accent group-hover:translate-x-0.5">
                View listings →
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-white/30">
          More communities available in the{' '}
          <span className="text-brand-accent/60">Communities</span> nav menu above
        </p>
      </section>

      {/* Buyer services */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.45em] text-brand-accent/70">How Hoi helps buyers</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            More than a search — a full advisory
          </h2>
        </div>
        <div className="grid gap-px bg-white/[0.06] overflow-hidden rounded-2xl sm:grid-cols-2">
          {features.map(({ label, text }) => (
            <div key={label} className="bg-[#0e1113] p-8 transition-colors hover:bg-white/[0.03]">
              <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/70">{label}</p>
              <p className="mt-3 text-[13px] leading-7 text-white/50">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-12 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 lg:grid-cols-[1fr_380px] lg:items-start lg:p-12">
          <div className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-brand-accent/70">Ready to make a move?</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Let's find your next home together
            </h2>
            <p className="text-[14px] leading-7 text-white/50">
              Share what you're looking for and Hoi will send you a personalized shortlist with
              local context, pricing analysis, and a clear path to an offer.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:4088253814" className="flex gap-3 text-white/50 transition hover:text-white">
                <span className="text-brand-accent/60">Phone</span> 408-825-3814
              </a>
              <a href="mailto:hng@intero.com" className="flex gap-3 text-white/50 transition hover:text-white">
                <span className="text-brand-accent/60">Email</span> hng@intero.com
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">Send a message</p>
            <ContactForm contextLabel="Buy" compact />
          </div>
        </div>
      </section>
    </div>
  );
}
