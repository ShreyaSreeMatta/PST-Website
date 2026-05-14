import { ContactForm } from '@/components/ContactForm';
import { RealScoutCityListings } from '@/components/RealScoutListings';
import type { Metadata } from 'next';

function toTitle(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = toTitle(params.city);
  return {
    title: `${city} Homes for Sale — Hoi Wing Ng`,
    description: `Browse homes for sale in ${city} with Hoi Wing Ng, Silicon Valley's top-ranked realtor.`,
  };
}

export default function CommunityPage({ params }: { params: { city: string } }) {
  const city = toTitle(params.city);

  return (
    <div className="space-y-20 py-16">

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-[11px] uppercase tracking-[0.45em] text-brand-accent/70">
          Silicon Valley Real Estate
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Homes for sale in {city}
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/50">
          Live MLS listings in {city} curated by Hoi Wing Ng — with local pricing insight
          and neighborhood guidance you won't find on Zillow.
        </p>
      </section>

      {/* City-filtered RealScout iframe */}
      <section className="mx-auto max-w-7xl px-6">
        <RealScoutCityListings city={city} />
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-12 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 lg:grid-cols-[1fr_380px] lg:items-start lg:p-12">
          <div className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.45em] text-brand-accent/70">
              Buying or selling in {city}?
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Talk to Hoi about {city}
            </h2>
            <p className="text-[14px] leading-7 text-white/50">
              Get a confidential market analysis, pricing strategy, or a personalized shortlist
              curated specifically for {city}.
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
            <ContactForm contextLabel={`Community — ${city}`} compact />
          </div>
        </div>
      </section>
    </div>
  );
}
