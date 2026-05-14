import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ title, description, href = '/contact' }: ServiceCardProps) {
  return (
    <article className="group flex flex-col rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-brand-accent/40 hover:bg-white/10">
      <h3 className="text-xl font-semibold text-white transition group-hover:text-brand-accent">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-white/70">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent/80 transition hover:text-brand-accent"
      >
        Talk to Hoi
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
