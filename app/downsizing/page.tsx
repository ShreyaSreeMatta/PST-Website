import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downsizing — Hoi Wing Ng | Silicon Valley Real Estate',
  description: 'Expert downsizing guidance for long-term Silicon Valley homeowners. Protect equity, reduce disruption, and plan your transition confidently.',
};

export default function DownsizingPage() {
  return (
    <div className="space-y-20 py-16">
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeader
              eyebrow="Downsize with confidence"
              title="Transition to the right-sized home while protecting what you've built"
              description="Downsizing is one of the most emotionally and financially significant moves a homeowner makes. Hoi provides a calm, structured process that protects your equity and minimizes disruption."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Equity protection', text: 'Ensure your sale timeline and pricing strategy locks in maximum value.' },
                { label: 'Transition planning', text: 'Coordinate the sale and purchase to minimize gaps and stress.' },
                { label: 'Right-size search', text: 'Find a home that fits your next chapter — lifestyle, location, and cost.' },
                { label: 'Family coordination', text: 'Support for conversations with family members and estate planning context.' },
              ].map(({ label, text }) => (
                <div key={label} className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-panel">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Plan your transition</p>
            <ContactForm contextLabel="Downsize" />
          </div>
        </div>
      </section>
    </div>
  );
}
