import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm';
import { FeaturedListingCard } from '@/components/FeaturedListingCard';
import { AnimatedStats } from '@/components/AnimatedStats';

const marqueeItems = [
  '★ 5.0 Zillow', 'Top 1% Nationwide', '$40M+ Volume 2024',
  '30+ Families Served', '★ 5.0 Yelp', 'Intero Real Estate',
  'Berkshire Hathaway Affiliate', 'English · Mandarin · Cantonese',
  '★ 5.0 Zillow', 'Top 1% Nationwide', '$40M+ Volume 2024',
  '30+ Families Served', '★ 5.0 Yelp', 'Intero Real Estate',
  'Berkshire Hathaway Affiliate', 'English · Mandarin · Cantonese',
];

const services = [
  {
    num: '01',
    title: 'Sell for Maximum Value',
    description: 'Premium staging, precise pricing, and targeted marketing to attract serious buyers and protect your equity.',
    href: '/sell',
  },
  {
    num: '02',
    title: 'Downsize with Confidence',
    description: 'A calm, structured transition to the right-sized home — protecting what you\'ve built over decades.',
    href: '/downsizing',
  },
  {
    num: '03',
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
    <div className="space-y-24 lg:space-y-32">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden">

        {/* ── Mobile photo (in normal flow, above text) ── */}
        <div className="relative h-[420px] w-full lg:hidden">
          <Image
            src="/hoi-headshot.png"
            alt="Hoi Wing Ng"
            fill
            className="object-cover object-[50%_8%]"
            priority
          />
          {/* gradient dissolve at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0e1113] to-transparent" />
        </div>

        {/* ── Desktop photo — absolutely positioned, fills right 55% ── */}
        <div
          className="absolute right-0 top-0 hidden h-full lg:block"
          style={{ width: '55%' }}
        >
          {/* Warm glow on figure */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,_rgba(184,145,88,0.09),_transparent)]" />
          {/* Left dissolve — wide, soft */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-60 bg-gradient-to-r from-[#0e1113] via-[#0e1113]/70 to-transparent" />
          {/* Top + bottom edge fades */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-[#0e1113] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#0e1113] to-transparent" />

          <Image
            src="/hoi-headshot.png"
            alt="Hoi Wing Ng — Silicon Valley Real Estate Advisor"
            fill
            className="animate-fade-in delay-200 object-contain object-top"
            priority
          />

          {/* Credential card — at 58% down, floating where torso would be */}
          <div
            className="animate-pulse-glow animate-fade-up delay-500 absolute left-6 z-20"
            style={{ top: '58%' }}
          >
            <div className="rounded-2xl border border-white/[0.12] bg-black/75 px-5 py-4 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-brand-accent" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-brand-accent">Top 1% Nationwide</span>
              </div>
              <p className="text-[15px] font-semibold text-white">Hoi Wing Ng</p>
              <p className="mt-0.5 text-[11px] text-white/40">Intero Real Estate · BH Affiliate</p>
            </div>
          </div>
        </div>

        {/* ── Text column — 45% on desktop, full on mobile ── */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <div
            className="flex flex-col justify-center py-12 lg:py-28"
            style={{ maxWidth: 'min(100%, 560px)' }}
          >
            {/* Eyebrow */}
            <div className="animate-fade-up delay-0 flex items-center gap-3">
              <span className="h-px w-6 shrink-0 bg-brand-accent/50" />
              <p className="text-[12px] uppercase tracking-[0.45em] text-brand-accent/80">
                Silicon Valley Real Estate Advisory
              </p>
            </div>

            {/* Headline — 56-64px per brief */}
            <h1 className="animate-fade-up delay-100 mt-6 text-[46px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[54px] lg:text-[62px]">
              Sell smarter.<br />
              <span className="text-white/55">Move forward</span><br />
              with confidence.
            </h1>

            {/* Body — 17px */}
            <p className="animate-fade-up delay-200 mt-7 text-[17px] leading-[1.8] text-white/55">
              Hoi Wing Ng helps long-term Bay Area homeowners sell, downsize, and transition — with premium strategy, deep local expertise, and multilingual guidance.
            </p>

            {/* Buttons — side by side, 50px height per brief */}
            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">Get a Free Home Valuation</Button>
              <Button href="/contact" variant="ghost">Book a Consultation</Button>
            </div>

            {/* Animated stat counters */}
            <div className="animate-fade-up delay-400 mt-14">
              <AnimatedStats />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MARQUEE TRUST STRIP
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative overflow-hidden border-y border-white/[0.06] py-4">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-8 text-[11px] uppercase tracking-[0.3em] text-white/30">
              {i % 2 === 0 ? item : <><span className="mr-8 text-brand-accent/40">·</span>{item}</>}
            </span>
          ))}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SERVICES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-brand-accent/80">How Hoi helps</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Expert guidance at every stage
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-7 text-white/40">
            Every plan focuses on durable value — not a rushed transaction.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] lg:grid-cols-3">
          {services.map(({ num, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col overflow-hidden bg-[#0e1113] p-9 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <span className="pointer-events-none absolute -right-2 -top-4 select-none text-[96px] font-bold leading-none text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.07]">
                {num}
              </span>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-brand-accent/50 transition-colors duration-300 group-hover:text-brand-accent/80">
                {num}
              </p>
              <h3 className="text-[16px] font-semibold text-white/90 transition-colors duration-300 group-hover:text-brand-accent">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-7 text-white/45">{description}</p>
              <p className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-accent/50 transition-all duration-300 group-hover:gap-3 group-hover:text-brand-accent">
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-white/25">
          Also: Estate & legacy planning · Equity access strategy · Inherited property · Multilingual family support
        </p>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED RESULT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-accent/80">Featured sold</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Strategy in action</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <FeaturedListingCard
            title="The Infinity | South Beach, San Francisco"
            price="$1,218,000"
            details="2 Bed · 2 Bath · 1,167 sqft"
            description="Smart pricing, luxury presentation, and targeted buyer positioning in the SF condo market delivered a premium result."
          />
          <div className="flex flex-col justify-center rounded-2xl border border-white/[0.07] bg-white/[0.02] p-9">
            <p className="text-[11px] uppercase tracking-[0.35em] text-brand-accent/80">2024 at a glance</p>
            <div className="mt-6 space-y-5">
              {[
                { label: 'Total sales volume', value: '$40M+' },
                { label: 'Families served',    value: '30+'   },
                { label: 'Nationwide ranking', value: 'Top 1%' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-baseline justify-between border-b border-white/[0.07] pb-5 last:border-0 last:pb-0">
                  <span className="text-[15px] text-white/55">{label}</span>
                  <span className="text-xl font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TESTIMONIALS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-accent/80">Client reviews</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">What clients say</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ quote, author, source }) => (
            <figure
              key={source}
              className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-accent/25 hover:bg-white/[0.04]"
            >
              <p className="text-4xl leading-none text-brand-accent/35 select-none transition-colors duration-300 group-hover:text-brand-accent/65">"</p>
              <blockquote className="mt-3 flex-1 text-[15px] leading-[1.75] text-white/65">{quote}</blockquote>
              <figcaption className="mt-7 border-t border-white/[0.07] pt-5">
                <p className="text-[13px] font-semibold text-white">{author}</p>
                <p className="mt-0.5 text-[12px] text-white/35">{source}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-white/30">
          <a href="https://www.zillow.com/profile/Hoi%20Wing%20Ng" target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">View Zillow reviews ↗</a>
          <span className="text-white/15">·</span>
          <a href="https://www.yelp.com/biz/hoi-wing-ng-intero-real-estate-cupertino-2" target="_blank" rel="noreferrer" className="transition hover:text-brand-accent">View 34 Yelp reviews ↗</a>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONTACT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-7xl px-6 pb-28 sm:px-10" id="contact">
        <div className="grid gap-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-9 lg:grid-cols-[1fr_400px] lg:items-start lg:p-14">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-brand-accent/80">Get in touch</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let's talk about your home's potential
            </h2>
            <p className="text-[16px] leading-[1.8] text-white/50">
              A confidential, no-pressure conversation about your property, goals, and next steps in Silicon Valley real estate.
            </p>
            <div className="space-y-4 text-[15px]">
              {[
                { label: 'Phone', value: '408-825-3814', href: 'tel:4088253814' },
                { label: 'Email', value: 'hng@intero.com', href: 'mailto:hng@intero.com' },
                { label: 'Web', value: 'sellmyhomefortopdollars.com ↗', href: 'https://www.sellmyhomefortopdollars.com', external: true },
              ].map(({ label, value, href, external }) => (
                <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 text-white/60 transition hover:text-white">
                  <span className="w-10 text-[10px] uppercase tracking-[0.25em] text-brand-accent/70">{label}</span>
                  {value}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-white/35">Send a message</p>
            <ContactForm contextLabel="Homepage" compact />
          </div>
        </div>
      </section>

    </div>
  );
}
