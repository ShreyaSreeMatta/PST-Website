interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-accent/90">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-sm leading-7 text-white/70">{description}</p> : null}
    </div>
  );
}
