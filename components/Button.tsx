import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  target?: string;
}

export function Button({ children, href, onClick, variant = 'primary', className = '', target }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-accent/40';
  const styles = {
    primary: 'bg-brand-accent text-brand border-brand-accent shadow-glow hover:bg-[#c49d69] hover:border-[#c49d69]',
    secondary: 'bg-white/8 text-white border-white/15 hover:bg-white/12',
    ghost: 'bg-transparent text-white border-white/10 hover:border-white/20 hover:bg-white/5',
  };

  const isExternal = href?.startsWith('http');

  if (href) {
    if (isExternal) {
      return (
        <a href={href} target={target} rel="noreferrer" className={`${base} ${styles[variant]} ${className}`}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${base} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
