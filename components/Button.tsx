import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  target?: string;
}

export function Button({ children, href, onClick, variant = 'primary', className = '' , target}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold text-[15px] tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/40 min-h-[50px] px-10 min-w-[190px]';

  const styles = {
    primary:
      'bg-brand-accent text-[#0e1113] border-2 border-brand-accent hover:bg-[#c9a961] hover:border-[#c9a961] shadow-[0_4px_22px_rgba(184,145,88,0.35)] hover:shadow-[0_6px_30px_rgba(184,145,88,0.5)]',
    ghost:
      'bg-transparent text-white border-2 border-white/25 hover:border-brand-accent/70 hover:bg-brand-accent/10 hover:text-brand-accent',
  };

  const cls = `${base} ${styles[variant]} ${className}`;
  const isExternal = href?.startsWith('http');

  if (href) {
    return isExternal
      ? <a href={href} target={target} rel="noreferrer" className={cls}>{children}</a>
      : <Link href={href} className={cls}>{children}</Link>;
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
