'use client';

import { useEffect, useRef, useState } from 'react';

function Counter({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (now: number) => {
            const t = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setVal(parseFloat((ease * target).toFixed(decimals)));
            if (t < 1) requestAnimationFrame(tick);
            else setVal(target);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

const stats = [
  { prefix: '$', value: 40, suffix: 'M+', decimals: 0, label: 'Sales Volume 2024' },
  { prefix: '',  value: 30, suffix: '+',  decimals: 0, label: 'Families Helped 2024' },
  { prefix: '',  value: 1,  suffix: '%',  decimals: 0, label: 'Nationwide Realtor®', display: 'Top 1%' },
  { prefix: '★ ', value: 5.0, suffix: '', decimals: 1, label: 'Zillow & Yelp Rating' },
];

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/[0.07] pt-9 sm:grid-cols-4">
      {stats.map(({ prefix, value, suffix, decimals, label, display }) => (
        <div key={label} className="group">
          <p className="text-[22px] font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-accent">
            {display ? display : (
              <>
                {prefix}<Counter target={value} decimals={decimals} />{suffix}
              </>
            )}
          </p>
          <p className="mt-1 text-[11px] leading-snug text-white/40">{label}</p>
        </div>
      ))}
    </div>
  );
}
