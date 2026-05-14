'use client';

import Script from 'next/script';

const REALSCOUT_AGENT_ID = 'QWdlbnQtMTY4NjM=';

// ─────────────────────────────────────────────────────────────
// For city-filtered listings (like jordanmott.com uses):
// Log into RealScout → look for a "Home Search" or "Hosted Search"
// URL — it looks like https://[NAME].realscout.com/homesearch
// Paste just the [NAME] part here.
// ─────────────────────────────────────────────────────────────
const REALSCOUT_SUBDOMAIN: string = 'hoing';

export const CITY_GEO_IDS: Record<string, string> = {
  // Santa Clara County
  'Campbell':      '0610345',
  'Cupertino':     '0617000',
  'Gilroy':        '0629504',
  'Los Altos':     '0643280',
  'Los Gatos':     '0643294',
  'Milpitas':      '0647766',
  'Morgan Hill':   '0649187',
  'Mountain View': '0649670',
  'Palo Alto':     '0655282',
  'San Jose':      '0668000',
  'Santa Clara':   '0669084',
  'Saratoga':      '0670280',
  'Sunnyvale':     '0677000',
  // San Mateo County
  'Atherton':            '0603386',
  'Burlingame':          '0609066',
  'Foster City':         '0626000',
  'Half Moon Bay':       '0631960',
  'Hillsborough':        '0633714',
  'Menlo Park':          '0646898',
  'Millbrae':            '0647444',
  'Redwood City':        '0660102',
  'San Carlos':          '0667042',
  'San Mateo':           '0668084',
  'South San Francisco': '0673262',
  'Woodside':            '0686440',
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-your-listings': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
        'include-co-listings'?: string;
        'include-seller-listings'?: string;
      };
      'realscout-simple-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
      };
      'realscout-advanced-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'agent-encoded-id'?: string;
      };
    }
  }
}

function RealScoutScript() {
  return (
    <Script
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      strategy="afterInteractive"
      type="module"
    />
  );
}

/** Agent's listings — exact embed from Hoi's RealScout dashboard */
export function RealScoutListings() {
  return (
    <>
      <RealScoutScript />
      <style>{`
        realscout-your-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          width: 100%;
        }
      `}</style>
      <realscout-your-listings
        agent-encoded-id={REALSCOUT_AGENT_ID}
        sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
        listing-status="For Sale,For Rent,In Contract,Sold,Rented"
        property-types="SFR,MF,TC,LAL,MOBILE,OTHER"
      />
    </>
  );
}

/** Simple keyword search bar */
export function RealScoutSearch() {
  return (
    <>
      <RealScoutScript />
      <realscout-simple-search
        agent-encoded-id={REALSCOUT_AGENT_ID}
        className="w-full"
      />
    </>
  );
}

/** Full MLS search form with location/price/bed filters */
export function RealScoutAdvancedSearch() {
  return (
    <>
      <RealScoutScript />
      <realscout-advanced-search
        agent-encoded-id={REALSCOUT_AGENT_ID}
        className="w-full"
      />
    </>
  );
}

/**
 * City-filtered iframe — same approach as jordanmott.com.
 * Requires REALSCOUT_SUBDOMAIN to be set above.
 */
export function RealScoutCityListings({ city }: { city: string }) {
  const geoId = CITY_GEO_IDS[city];
  const isReady = REALSCOUT_SUBDOMAIN !== 'PASTE_SUBDOMAIN_HERE';

  if (!isReady || !geoId) {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-dashed border-brand-accent/30 bg-brand-accent/5 text-center p-10">
        <p className="text-sm font-semibold text-brand-accent">
          {!isReady ? 'City listings — one more step to activate' : `No geo ID for "${city}"`}
        </p>
        {!isReady && (
          <p className="mt-3 max-w-sm text-xs leading-6 text-white/50">
            In your RealScout dashboard, look for a <strong className="text-white/70">Home Search</strong> or{' '}
            <strong className="text-white/70">Hosted Search</strong> URL — it will look like{' '}
            <code className="text-brand-accent/70">https://[name].realscout.com/homesearch</code>.
            Paste the <code className="text-white/60">[name]</code> part into{' '}
            <code className="text-white/60">REALSCOUT_SUBDOMAIN</code> in{' '}
            <code className="text-white/60">components/RealScoutListings.tsx</code>
          </p>
        )}
      </div>
    );
  }

  const src = `https://${REALSCOUT_SUBDOMAIN}.realscout.com/homesearch/map?geo_type=city&geo_id=${geoId}&for_sale=1&for_rent=0`;

  return (
    <iframe
      src={src}
      title={`Homes for sale in ${city}`}
      className="w-full rounded-2xl border border-white/[0.07]"
      style={{ height: '720px', minHeight: '480px' }}
      allowFullScreen
    />
  );
}
