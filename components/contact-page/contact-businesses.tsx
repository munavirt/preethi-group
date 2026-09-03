'use client';

import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

export function ContactBusinesses() {
  return (
    <section className="bg-muted/30 py-24 md:py-32 border-b border-border">
      <div className="site-container">
        <div className="flex flex-col mb-16 md:mb-24">
          <Reveal as="span" className="eyebrow mb-6 inline-block">
            LOOKING FOR ONE OF OUR BUSINESSES?
          </Reveal>
          <Reveal as="p" className="max-w-xl text-pretty text-lg md:text-xl text-muted-foreground">
            Explore the businesses that are part of Preethi Group.
          </Reveal>
        </div>

        <div className="flex flex-col border-t border-border">
          {/* Preethi Silks Link */}
          <a href="/businesses" className="group block py-10 md:py-16 border-b border-border hover:bg-background transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <Reveal className="flex items-baseline gap-6 md:gap-12">
                <span className="text-sm font-medium text-muted-foreground font-mono">01</span>
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground group-hover:text-brand-red transition-colors duration-300">
                  Preethi Silks
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="inline-flex items-center text-sm font-semibold tracking-widest text-muted-foreground uppercase group-hover:text-brand-red transition-colors duration-300">
                  Explore Business
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Reveal>
            </div>
          </a>

          {/* Calicut Fashion Bazar Link */}
          <a href="/businesses" className="group block py-10 md:py-16 border-b border-border hover:bg-background transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <Reveal className="flex items-baseline gap-6 md:gap-12">
                <span className="text-sm font-medium text-muted-foreground font-mono">02</span>
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground group-hover:text-brand-red transition-colors duration-300">
                  Calicut Fashion Bazar
                </h3>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="inline-flex items-center text-sm font-semibold tracking-widest text-muted-foreground uppercase group-hover:text-brand-red transition-colors duration-300">
                  Explore Business
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Reveal>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
