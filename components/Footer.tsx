const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/hoi_realtor/' },
  { label: 'Facebook', href: 'https://www.facebook.com/HoiWingNgRealtor/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hoiwingngrealtor/' },
  { label: 'Zillow', href: 'https://www.zillow.com/profile/Hoi%20Wing%20Ng' },
  { label: 'Yelp', href: 'https://www.yelp.com/biz/hoi-wing-ng-intero-real-estate-cupertino-2' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0b0d0f] py-14 text-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">Hoi Wing Ng</p>
            <p className="text-sm text-white/50 leading-6">
              Top 1% Silicon Valley Realtor®<br />
              Intero Real Estate · Berkshire Hathaway Affiliate<br />
              CalBRE# 01999466
            </p>
            <p className="text-xs text-white/30">English · Mandarin · Cantonese</p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
            <div className="space-y-2 text-sm">
              <a href="tel:4088253814" className="block text-white/60 transition hover:text-white">408-825-3814</a>
              <a href="mailto:hng@intero.com" className="block text-white/60 transition hover:text-white">hng@intero.com</a>
              <a href="https://www.sellmyhomefortopdollars.com" target="_blank" rel="noreferrer" className="block text-white/60 transition hover:text-white">
                sellmyhomefortopdollars.com ↗
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Connect</p>
            <div className="space-y-2 text-sm">
              {socials.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="block text-white/60 transition hover:text-white">
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-6 text-xs text-white/30 sm:flex-row sm:justify-between">
          <p>Information provided is for general purposes only and does not constitute legal, tax, or financial advice.</p>
          <p className="shrink-0">© {new Date().getFullYear()} Hoi Wing Ng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
