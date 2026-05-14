interface BlogCardProps {
  title: string;
  summary: string;
  category: string;
  href?: string;
}

export function BlogCard({ title, summary, category, href = '#' }: BlogCardProps) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-panel transition hover:border-brand-accent/40 hover:bg-white/10">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">{category}</p>
      <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-brand-accent">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{summary}</p>
      <a href={href} className="mt-6 inline-flex text-sm font-semibold text-brand-accent hover:text-white">
        Read more
      </a>
    </article>
  );
}
