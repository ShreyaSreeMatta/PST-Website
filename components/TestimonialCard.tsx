interface TestimonialCardProps {
  headline: string;
  text: string;
  note: string;
}

export function TestimonialCard({ headline, text, note }: TestimonialCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-panel">
      <div className="flex items-center gap-3 text-sm text-brand-accent">
        <span>★★★★★</span>
        <span>{headline}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/70">{text}</p>
      <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/50">{note}</p>
    </article>
  );
}
