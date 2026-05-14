'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/sell', label: 'Sell' },
  { href: '/buy', label: 'Buy' },
  { href: '/downsizing', label: 'Downsizing' },
  { href: '/sold-portfolio', label: 'Sold Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const counties = [
  {
    name: 'Santa Clara County',
    cities: [
      'Campbell', 'Cupertino', 'Gilroy', 'Los Altos', 'Los Gatos',
      'Milpitas', 'Morgan Hill', 'Mountain View', 'Palo Alto',
      'San Jose', 'Santa Clara', 'Saratoga', 'Sunnyvale',
    ],
  },
  {
    name: 'San Mateo County',
    cities: [
      'Atherton', 'Burlingame', 'Foster City', 'Half Moon Bay',
      'Hillsborough', 'Menlo Park', 'Millbrae', 'Redwood City',
      'San Carlos', 'San Mateo', 'South San Francisco', 'Woodside',
    ],
  },
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [commOpen, setCommOpen] = useState(false);
  const [expandedCounty, setExpandedCounty] = useState<string | null>(null);
  const commRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (commRef.current && !commRef.current.contains(e.target as Node)) {
        setCommOpen(false);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#0a0c0e]/95 backdrop-blur-2xl">
      {/* ── Desktop bar — fixed 74px height ── */}
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-8">

        {/* Logo — brightness-0 invert renders it white directly on the dark nav */}
        <Link href="/" className="group shrink-0 transition-opacity duration-200 hover:opacity-85">
          <Image
            src="/Logo.png"
            alt="Hoi Group Real Estate"
            width={200}
            height={64}
            className="h-[46px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav — 36px gaps, 14px text */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 text-[14px] tracking-wide transition-colors duration-200 hover:text-white ${
                pathname === link.href ? 'font-medium text-brand-accent' : 'text-white/60'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-[18px] left-0 right-0 h-px bg-brand-accent/70" />
              )}
            </Link>
          ))}

          {/* Communities dropdown */}
          <div ref={commRef} className="relative">
            <button
              type="button"
              onClick={() => setCommOpen((v) => !v)}
              className={`flex items-center gap-1.5 py-1 text-[14px] tracking-wide transition-colors duration-200 hover:text-white ${
                commOpen ? 'text-brand-accent' : 'text-white/60'
              }`}
            >
              Communities
              <span className={`transition-transform duration-200 ${commOpen ? 'rotate-180' : ''}`}>
                <ChevronDown />
              </span>
            </button>

            {commOpen && (
              <div className="absolute left-0 top-full z-30 mt-3 flex w-[540px] gap-1 rounded-2xl border border-white/10 bg-[#0c0f11] p-4 shadow-panel">
                {counties.map((county) => (
                  <div key={county.name} className="flex-1">
                    <p className="mb-2 px-3 text-[10px] uppercase tracking-[0.3em] text-brand-accent/80">
                      {county.name}
                    </p>
                    <div className="flex flex-col">
                      {county.cities.map((city) => (
                        <Link
                          key={city}
                          href={`/communities/${toSlug(city)}`}
                          onClick={() => setCommOpen(false)}
                          className="rounded-lg px-3 py-2 text-[13px] text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                        >
                          {city}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Contact Us — desktop */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setContactOpen((v) => !v)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[14px] font-medium transition-all duration-200 ${
                contactOpen
                  ? 'border-brand-accent/60 bg-brand-accent/12 text-brand-accent'
                  : 'border-white/20 bg-white/[0.07] text-white hover:border-brand-accent/40 hover:bg-white/[0.1]'
              }`}
            >
              Contact Us
              <span className={`transition-transform duration-200 ${contactOpen ? 'rotate-180' : ''}`}>
                <ChevronDown />
              </span>
            </button>

            {contactOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setContactOpen(false)} />
                <div className="absolute right-0 top-full z-20 mt-2 w-72 rounded-2xl border border-white/10 bg-[#0c0f11] p-2 shadow-panel">
                  {[
                    { label: 'Phone / Text', value: '408-825-3814', href: 'tel:4088253814' },
                    { label: 'Email', value: 'hng@intero.com', href: 'mailto:hng@intero.com' },
                    { label: 'Website', value: 'sellmyhomefortopdollars.com', href: 'https://www.sellmyhomefortopdollars.com/', external: true },
                  ].map(({ label, value, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                      className="flex flex-col rounded-xl px-4 py-3 transition hover:bg-white/[0.08]"
                      onClick={() => setContactOpen(false)}
                    >
                      <span className="text-[10px] uppercase tracking-[0.25em] text-brand-accent">{label}</span>
                      <span className="mt-0.5 text-sm text-white">{value}</span>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Hamburger — mobile */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="border-t border-white/10 bg-[#0a0c0e]/98 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-[15px] transition hover:bg-white/[0.07] hover:text-brand-accent ${
                  pathname === link.href ? 'font-semibold text-brand-accent' : 'text-white/75'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Communities accordion */}
            <div className="mt-2">
              <p className="px-4 pb-2 pt-1 text-[10px] uppercase tracking-[0.3em] text-brand-accent/70">
                Communities
              </p>
              {counties.map((county) => (
                <div key={county.name}>
                  <button
                    type="button"
                    onClick={() => setExpandedCounty((v) => (v === county.name ? null : county.name))}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[15px] text-white/70 transition hover:bg-white/[0.07]"
                  >
                    {county.name}
                    <span className={`transition-transform duration-200 ${expandedCounty === county.name ? 'rotate-180' : ''}`}>
                      <ChevronDown />
                    </span>
                  </button>
                  {expandedCounty === county.name && (
                    <div className="ml-4 mb-1 flex flex-col border-l border-white/10 pl-4">
                      {county.cities.map((city) => (
                        <Link
                          key={city}
                          href={`/communities/${toSlug(city)}`}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2.5 text-[14px] text-white/50 transition hover:text-brand-accent"
                        >
                          {city}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile contact */}
          <div className="mt-4 space-y-1 border-t border-white/10 pt-4">
            <p className="px-4 pb-1 text-[10px] uppercase tracking-[0.25em] text-brand-accent">Contact</p>
            {[
              { label: 'Phone / Text', value: '408-825-3814', href: 'tel:4088253814' },
              { label: 'Email', value: 'hng@intero.com', href: 'mailto:hng@intero.com' },
              { label: 'Website', value: 'sellmyhomefortopdollars.com', href: 'https://www.sellmyhomefortopdollars.com/', external: true },
            ].map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="flex flex-col rounded-xl px-4 py-3 text-[14px] transition hover:bg-white/[0.07]"
              >
                <span className="text-xs text-white/40">{label}</span>
                <span className="text-white">{value}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
