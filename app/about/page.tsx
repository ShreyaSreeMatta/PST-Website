import Image from 'next/image';
import { TrustBar } from '@/components/TrustBar';
import { Button } from '@/components/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Hoi Wing Ng — Silicon Valley Real Estate Advisor',
  description: 'Meet Hoi Wing Ng — Top 1% Silicon Valley real estate advisor with multilingual expertise in English, Mandarin, and Cantonese.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 py-16">
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[360px_1fr] lg:items-start">
          {/* Headshot column */}
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-panel">
              <Image
                src="/hoi-headshot.png"
                alt="Hoi Wing Ng — Silicon Valley Real Estate Advisor"
                width={360}
                height={460}
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-6 pt-12">
                <p className="text-base font-semibold text-white">Hoi Wing Ng</p>
                <p className="text-sm text-brand-accent">Silicon Valley Real Estate Advisor</p>
              </div>
            </div>
            <div className="w-full rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-panel">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Credentials</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-white/70">
                <li>Intero Real Estate, A Berkshire Hathaway Affiliate</li>
                <li>CalBRE# 01999466</li>
                <li>Top 1% Nationwide Realtor®</li>
                <li>English · Mandarin · Cantonese</li>
              </ul>
            </div>
          </div>

          {/* Bio column */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">About Hoi</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Hoi Wing Ng
              </h1>
            </div>
            <div className="space-y-4 text-sm leading-7 text-white/70">
              <p>
                Hoi Wing Ng is a Silicon Valley real estate advisor with Intero Real Estate, a Berkshire Hathaway affiliate. With a reputation built on calm, strategic guidance and deep market expertise, Hoi specializes in helping long-term homeowners, downsizers, relocating families, and estate decision makers navigate complex real estate transitions.
              </p>
              <p>
                Recognized among the top 1% of realtors nationwide, Hoi brings a uniquely deliberate, no-pressure approach to every client relationship — prioritizing long-term value over rushed transactions.
              </p>
              <p>
                Fluent in English, Mandarin, and Cantonese, Hoi serves the diverse communities of Silicon Valley and the broader Bay Area with cultural sensitivity and clear communication.
              </p>
            </div>
            <TrustBar />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">Book a Consultation</Button>
              <Button href="tel:4088253814" variant="secondary">Call 408-825-3814</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
