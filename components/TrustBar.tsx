export function TrustBar() {
  const items = [
    'Top 1% Nationwide Realtor®',
    'Silicon Valley Real Estate Expert',
    'English | Mandarin | Cantonese',
    'Intero Real Estate, A Berkshire Hathaway Affiliate',
  ];

  return (
    <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 md:grid-cols-4 md:text-center">
      {items.map((item) => (
        <div key={item} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0 md:border-b-0 md:border-r md:pb-0 md:last:border-r-0 md:pr-6">
          {item}
        </div>
      ))}
    </div>
  );
}
