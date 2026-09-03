'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Determine if text should be light (white) based on page and scroll
  const isLightText = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="site-container flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className={cn(
            'text-[15px] font-bold tracking-[0.04em] transition-colors',
            isLightText ? 'text-white' : 'text-brand-red'
          )}
          aria-label="Preethi Group home"
        >
          PREETHI GROUP
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith('/#') && isHome);
            // We highlight 'ABOUT' if we are on /about
            // But if we are on /, we don't necessarily highlight all hash links unless we scroll (not implemented here yet)
            // For now, if we are exactly on the href, it's active.
            const exactActive = pathname === link.href;

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-[13px] font-medium tracking-wide transition-colors',
                    exactActive
                      ? 'text-foreground'
                      : isLightText
                      ? 'text-white/80 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/#contact"
          className={cn(
            'hidden items-center gap-1.5 text-[13px] font-semibold tracking-wide transition-colors hover:text-brand-red md:inline-flex',
            isLightText ? 'text-white' : 'text-foreground'
          )}
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex items-center justify-center md:hidden transition-colors',
            isLightText ? 'text-white' : 'text-foreground'
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-[max-height] duration-400 ease-out md:hidden',
          open ? 'max-h-[480px]' : 'max-h-0'
        )}
      >
        <div className="site-container flex flex-col py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const exactActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block py-3 text-base font-medium',
                      exactActive ? 'text-brand-red' : 'text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-red"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
