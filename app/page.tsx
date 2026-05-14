import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { FeaturedListingCard } from '@/components/FeaturedListingCard';

const stats = [
  { value: '$40M+', label: 'Sales Volume 2024' },
  { value: '30+', label: 'Families Helped 2024' },
  { value: 'Top 1%', label: 'Nationwide Realtor®' },
  { value: '★ 5.0', label: 'Zillow & Yelp Rating' },
];

const services = [
  {
    title: 'Sell for Maximum Value',
    description: 'Premium staging, precise pricing, and targeted marketing to attract serious buyers and protect your equity.',
    href: '/sell',
  },
  {
    title: 'Downsize with Confidence',
    description: 'A calm, structured transition to the right-sized home — protecting what you\'ve built over decades.',
    href: '/downsizing',
  },
  {
    title: 'Buy with Expert Guidance',
    description: 'RealScout-powered search, neighborhood expertise, and competitive offer strategy across Silicon Valley.',
    href: '/buy',
  },
];

const testimonials = [
  {
    quote: "We bought our first home with Hoi! He's a kind, experienced and extremely patient realtor. He was flexible with our schedule, offered thoughtful opinions, and kept us in the loop every step of the way.",
    author: 'First-Time Buyer',
    source: 'Zillow · Verified',
  },
  {
    quote: "Hoi was AMAZING! He is timely, kind and always attentive to his clients' needs. Very sharp — he understands the market, negotiations, and building relationships.",
    author: 'Verified Client',
    source: 'reach150 · Verified',
  },
  {
    quote: "From house hunting, mortgage prep until closing the deal, whenever we had any issue, Hoi was there helping us out promptly.",
    author: 'Verified Buyer',
    source: 'Yelp · 5 Stars',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-28">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Layered background ambiance */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_75%_50%,_rgba(184,145,88,0.08),_transparent)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[500px] bg-[radial-gradient(ellipse_at_top_right,_rgba(184,145,88,0.06),_transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:min-h-[700px] lg:grid-cols-[1fr_460px]">

            {/* ── Text column ── */}
            <div className="flex flex-col justify-center py-28 lg:py-0 lg:pr-16">
              <p className="animate-fade-up delay-0 text-[11px] uppercase tracking-[0.45em] text-brand-accent/70">
                Silicon Valley Real Estate Advisory
              </p>

              <h1 className="animate-fade-up delay-100 mt-5 text-[42px] font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[56px]">
                Sell smarter.<br />
                <span className="text-white/80">Move forward</span><br />
                with confidence.
              </h1>

              <p className="animate-fade-up delay-200 mt-6 max-w-[480px] text-[15px] leading-[1.8] text-white/50">
                Hoi Wing Ng helps long-term Bay Area homeowners sell, downsize, and transition — with premium strategy, deep local expertise, and multilingual guidance.
              </p>

              <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary">Get a Free Home Valuation</Button>
                <Button href="/contact" variant="ghost">Book a Consultation</Button>
              </div>

              {/* Stats */}
              <div className="animate-fade-up delay-400 mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/[0.08] pt-8 sm:grid-cols-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="group">
                    <p className="text-[22px] font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-accent">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Image column ── */}
            <div className="relative hidden lg:block">
              {/* Ambient gold glow behind figure */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 h-[480px] w-[380px] -translate-x-1/2 rounded-full bg-brand-accent/[0.07] blur-[90px]" />

              {/* Left edge blend into background */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-36 bg-gradient-to-r from-[#0e1113] to-transparent" />
              {/* Top edge blend — subtle, doesn't cover face */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#0e1113] to-transparent" />
              {/* Subtle right edge */}
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0e1113] to-transparent" />

              <Image
                src="/hoi-headshot.png"
                alt="Hoi Wing Ng — Silicon Valley Real Estate Advisor"
                fill
                className="animate-fade-in delay-300 object-contain object-top"
                priority
              />
            </div>
          </div>

          {/* Trust strip */}
          <div className="animate-fade-up delay-600 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-white/[0.07] pb-10 pt-5 text-[11px] text-white/30">
            <span>Intero Real Estate · Berkshire Hathaway Affiliate</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>CalBRE# 01999466</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>English · Mandarin · Cantonese</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <a href="https://www.sellmyhomefortopdollars.com" target="_blank" rel="noreferrer"
              className="transition-colors duration-200 hover:text-brand-accent/80">
              sellmyhomefortopdollars.com ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-accent/80">How Hoi helps</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Expert guidance at every stage
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
            Every plan focuses on durable value and a smooth transition — not a rushed transaction.
          </p>
        </div>

        <div className="grid gap-px bg-white/[0.06] rounded-2xl overflow-hidden lg:grid-cols-3">
          {services.map(({ title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col bg-[#0e1113] p-8 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <h3 className="text-[15px] font-semibold text-white/90 transition-colors duration-300 group-hover:text-brand-accent">{title}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-7 text-white/40">{description}</p>
              <p className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-accent/50 transition-all duration-300 group-hover:gap-2.5 group-hover:text-brand-accent">
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-5 text-xs text-white/30 text-center">
          Also: Estate & legacy planning · Equity access strategy · Inherited property · Multilingual family support
        </p>
      </section>

      {/* ── FEATURED RESULT ── */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-accent/80">Featured sold</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Strategy in action
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <FeaturedListingCard
            title="The Infinity | South Beach, San Francisco"
            price="$1,218,000"
            details="2 Bed · 2 Bath · 1,167 sqft"
            description="Smart pricing, luxury presentation, and targeted buyer positioning in the SF condo market delivered a premium result."
          />
          <div className="flex flex-col justify-center rounded-2xl border border-white/8 bg-white/3 p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-accent/80">2024 at a glance</p>
            <div className="mt-6 space-y-5">
              <div className="flex items-baseline justify-between border-b border-white/8 pb-5">
                <span className="text-sm text-white/60">Total sales volume</span>
                <span className="text-xl font-semibold text-white">$40M+</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-white/8 pb-5">
                <span className="text-sm text-white/60">Families served</span>
                <span className="text-xl font-semibold text-white">30+</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-white/60">Nationwide ranking</span>
                <span className="text-xl font-semibold text-white">Top 1%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-brand-accent/80">Client reviews</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What clients say
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map(({ quote, author, source }) => (
            <figure key={source} className="flex flex-col">
              <p className="text-3xl leading-none text-brand-accent/60 select-none">"</p>
              <blockquote className="mt-2 flex-1 text-sm leading-7 text-white/70">{quote}</blockquote>
              <figcaption className="mt-6 border-t border-white/8 pt-4">
                <p className="text-xs font-semibold text-white">{author}</p>
                <p className="mt-0.5 text-xs text-white/40">{source}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-xs text-white/30">
          <a href="https://www.zillow.com/profile/Hoi%20Wing%20Ng" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition">View Zillow reviews ↗</a>
          <span>·</span>
          <a href="https://www.yelp.com/biz/hoi-wing-ng-intero-real-estate-cupertino-2" target="_blank" rel="noreferrer" className="hover:text-brand-accent transition">View 34 Yelp reviews ↗</a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="mx-auto max-w-7xl px-6 pb-24" id="contact">
        <div className="grid gap-16 rounded-2xl border border-white/8 bg-white/3 p-8 lg:grid-cols-[1fr_380px] lg:items-start lg:p-12">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-accent/80">Get in touch</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let's talk about your home's potential
            </h2>
            <p className="text-sm leading-7 text-white/50">
              A confidential, no-pressure conversation about your property, goals, and next steps in Silicon Valley real estate.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:4088253814" className="flex items-center gap-3 text-white/70 transition hover:text-white">
                <span className="text-brand-accent/60">Phone</span>
                408-825-3814
              </a>
              <a href="mailto:hng@intero.com" className="flex items-center gap-3 text-white/70 transition hover:text-white">
                <span className="text-brand-accent/60">Email</span>
                hng@intero.com
              </a>
              <a href="https://www.sellmyhomefortopdollars.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 transition hover:text-white">
                <span className="text-brand-accent/60">Web</span>
                sellmyhomefortopdollars.com ↗
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/40">Send a message</p>
            <ContactForm contextLabel="Homepage" compact />
          </div>
        </div>
      </section>

    </div>
  );
}
