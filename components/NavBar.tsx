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

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [commOpen, setCommOpen] = useState(false);
  const [expandedCounty, setExpandedCounty] = useState<string | null>(null);
  const commRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close communities dropdown on outside click
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
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 text-sm text-white">

        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 pr-6 border-r border-white/[0.08] transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Hoi Group Real Estate"
            width={110}
            height={36}
            className="h-9 w-auto object-contain mix-blend-screen brightness-110"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 text-[13px] tracking-wide transition-colors duration-200 hover:text-white ${
                pathname === link.href
                  ? 'text-brand-accent font-medium'
                  : 'text-white/60'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-[13px] left-0 right-0 h-px bg-brand-accent/70" />
              )}
            </Link>
          ))}

          {/* Communities mega dropdown */}
          <div ref={commRef} className="relative">
            <button
              type="button"
              onClick={() => setCommOpen((v) => !v)}
              className={`flex items-center gap-1 py-1 text-[13px] tracking-wide transition-colors duration-200 hover:text-white ${
                commOpen ? 'text-brand-accent' : 'text-white/60'
              }`}
            >
              Communities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${commOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
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

        <div className="flex items-center gap-3">
          {/* Contact Us dropdown — desktop */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setContactOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition ${
                contactOpen
                  ? 'border-brand-accent/50 bg-brand-accent/10 text-brand-accent'
                  : 'border-white/15 bg-white/8 text-white hover:border-white/25 hover:bg-white/12'
              }`}
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${contactOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {contactOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setContactOpen(false)} />
                <div className="absolute right-0 top-full z-20 mt-2 w-72 rounded-2xl border border-white/10 bg-[#0c0f11] p-2 shadow-panel">
                  <a
                    href="tel:4088253814"
                    className="flex flex-col rounded-xl px-4 py-3 transition hover:bg-white/8"
                    onClick={() => setContactOpen(false)}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-accent">Phone / Text</span>
                    <span className="mt-0.5 text-sm text-white">408-825-3814</span>
                  </a>
                  <a
                    href="mailto:hng@intero.com"
                    className="flex flex-col rounded-xl px-4 py-3 transition hover:bg-white/8"
                    onClick={() => setContactOpen(false)}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-accent">Email</span>
                    <span className="mt-0.5 text-sm text-white">hng@intero.com</span>
                  </a>
                  <a
                    href="https://www.sellmyhomefortopdollars.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col rounded-xl px-4 py-3 transition hover:bg-white/8"
                    onClick={() => setContactOpen(false)}
                  >
                    <span className="text-xs uppercase tracking-[0.25em] text-brand-accent">Website</span>
                    <span className="mt-0.5 text-sm text-white">sellmyhomefortopdollars.com</span>
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Hamburger — mobile */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-5 bg-white transition-all duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/8 hover:text-brand-accent ${
                  pathname === link.href ? 'font-semibold text-brand-accent' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Communities in mobile */}
            <div className="mt-1">
              <p className="px-3 pb-1 pt-2 text-[10px] uppercase tracking-[0.3em] text-brand-accent/70">
                Communities
              </p>
              {counties.map((county) => (
                <div key={county.name}>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCounty((v) => (v === county.name ? null : county.name))
                    }
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/8"
                  >
                    {county.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${expandedCounty === county.name ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {expandedCounty === county.name && (
                    <div className="ml-3 mb-1 flex flex-col border-l border-white/10 pl-3">
                      {county.cities.map((city) => (
                        <Link
                          key={city}
                          href={`/communities/${toSlug(city)}`}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-3 py-2 text-[13px] text-white/50 transition hover:text-brand-accent"
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

          {/* Contact block in mobile drawer */}
          <div className="mt-4 space-y-1 border-t border-white/10 pt-4">
            <p className="px-3 pb-1 text-xs uppercase tracking-[0.25em] text-brand-accent">Contact</p>
            <a href="tel:4088253814" className="flex flex-col rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/8">
              <span className="text-white/50 text-xs">Phone / Text</span>
              <span className="text-white">408-825-3814</span>
            </a>
            <a href="mailto:hng@intero.com" className="flex flex-col rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/8">
              <span className="text-white/50 text-xs">Email</span>
              <span className="text-white">hng@intero.com</span>
            </a>
            <a
              href="https://www.sellmyhomefortopdollars.com/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/8"
            >
              <span className="text-white/50 text-xs">Website</span>
              <span className="text-white">sellmyhomefortopdollars.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
