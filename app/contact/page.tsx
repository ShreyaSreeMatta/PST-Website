import { ContactForm } from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Hoi Wing Ng | Silicon Valley Real Estate',
  description: 'Book a free consultation or request a home valuation with Hoi Wing Ng, Silicon Valley real estate advisor.',
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_500px] lg:items-start">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-brand-accent">Get in touch</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let's talk about your real estate goals
            </h1>
            <p className="max-w-lg text-base leading-8 text-white/70">
              Whether you are thinking about selling, downsizing, buying, or simply want to understand what your home is worth, Hoi is here for a confidential, no-pressure conversation.
            </p>
            <div className="space-y-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Phone / Text</p>
                <a href="tel:4088253814" className="mt-2 block text-lg font-semibold text-white hover:text-brand-accent">
                  408-825-3814
                </a>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Email</p>
                <a href="mailto:hng@intero.com" className="mt-2 block text-lg font-semibold text-white hover:text-brand-accent">
                  hng@intero.com
                </a>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Brokerage</p>
                <p className="mt-2 text-sm text-white/70">Intero Real Estate, A Berkshire Hathaway Affiliate</p>
                <p className="text-sm text-white/50">CalBRE# 01999466</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Send a message</p>
            <ContactForm contextLabel="Contact page" />
          </div>
        </div>
      </section>
    </div>
  );
}
