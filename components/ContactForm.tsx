'use client';

import { useState } from 'react';

const inputClass = 'mt-1.5 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-accent/60 placeholder:text-white/30';

interface ContactFormProps {
  contextLabel?: string;
  compact?: boolean;
}

export function ContactForm({ contextLabel = 'Free consultation', compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const entries = new FormData(form);
    console.log('Contact form submission:', Object.fromEntries(entries), { context: contextLabel });
    setStatus('submitted');
    form.reset();
  }

  if (status === 'submitted') {
    return (
      <div className="rounded-2xl border border-brand-accent/30 bg-brand-accent/8 p-6 text-center">
        <p className="text-sm font-semibold text-brand-accent">Message received</p>
        <p className="mt-1 text-sm text-white/60">Hoi will follow up with you shortly.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
            Name
            <input name="name" required placeholder="Your name" className={inputClass} />
          </label>
          <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
            Phone
            <input name="phone" required placeholder="Your number" className={inputClass} />
          </label>
        </div>
        <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
          I want to
          <select name="inquiry" className={inputClass}>
            <option>Sell my home</option>
            <option>Downsize</option>
            <option>Buy a home</option>
            <option>Get a home valuation</option>
            <option>Just exploring</option>
          </select>
        </label>
        <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand transition hover:bg-[#c49d69]">
          Request a Free Consultation
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
          Name
          <input name="name" required placeholder="Your name" className={inputClass} />
        </label>
        <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
          Email
          <input type="email" name="email" required placeholder="your@email.com" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
          Phone
          <input name="phone" required placeholder="Your number" className={inputClass} />
        </label>
        <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
          I want to
          <select name="inquiry" className={inputClass}>
            <option>Sell my home</option>
            <option>Downsize</option>
            <option>Buy a home</option>
            <option>Get a home valuation</option>
            <option>Estate / inherited property</option>
            <option>Just exploring</option>
          </select>
        </label>
      </div>
      <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
        Timeline
        <select name="timeline" className={inputClass}>
          <option>As soon as possible</option>
          <option>1-3 months</option>
          <option>3-6 months</option>
          <option>Just exploring</option>
        </select>
      </label>
      <label className="block text-xs uppercase tracking-[0.2em] text-white/50">
        Message (optional)
        <textarea name="message" rows={3} placeholder="Anything you would like Hoi to know..." className={inputClass} />
      </label>
      <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand transition hover:bg-[#c49d69]">
        Send Message
      </button>
    </form>
  );
}
