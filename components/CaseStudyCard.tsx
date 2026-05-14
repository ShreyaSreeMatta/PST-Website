interface CaseStudyCardProps {
  title: string;
  soldPrice: string;
  specs: string;
  summary: string;
}

export function CaseStudyCard({ title, soldPrice, specs, summary }: CaseStudyCardProps) {
  return (
    <article className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-panel transition hover:border-brand-accent/40 hover:bg-white/10">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">{title}</p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-2xl font-semibold text-white">{soldPrice}</p>
        <p className="text-sm text-white/70">{specs}</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/70">{summary}</p>
    </article>
  );
}
