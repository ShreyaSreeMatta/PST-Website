interface FeaturedListingCardProps {
  title: string;
  price: string;
  details: string;
  description: string;
}

export function FeaturedListingCard({ title, price, details, description }: FeaturedListingCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-panel transition hover:border-brand-accent/40 hover:bg-white/10">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-accent/90" />
      <div className="relative space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-accent/95">{title}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-semibold text-white">{price}</p>
          <p className="text-sm text-white/70">{details}</p>
        </div>
        <p className="text-sm leading-7 text-white/70">{description}</p>
      </div>
    </article>
  );
}
