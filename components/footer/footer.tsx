import { navLinks, footerBusinessLinks, groupContact } from '@/lib/data/site';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#top" className="text-[15px] font-bold tracking-[0.04em] text-foreground">
              PREETHI GROUP
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              A growing group of businesses built around fashion, retail and the
              people we serve.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Businesses */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Businesses
            </h3>
            <ul className="mt-5 space-y-3">
              {footerBusinessLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-brand-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground">
              <li>{groupContact.generalEmail}</li>
              <li>{groupContact.phone}</li>
              <li className="text-muted-foreground">{groupContact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Preethi Group. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & Developed by <a href="https://promocraft.in" target="_blank" rel="noopener noreferrer"><b>Promocraft</b></a>
          </p>
        </div>
      </div>
    </footer>
  );
}
