'use client';

import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { PresenceMap } from '@/components/presence/presence-map';

export function PresencePreview() {
  return (
    <section className="bg-muted/30 py-20 md:py-32 overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal as="span" className="eyebrow mb-6">
              Our Presence
            </Reveal>

            <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Rooted in Kerala.<br />
              Reaching further.
            </Reveal>
            
            <Reveal as="p" className="mb-10 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.1}>
              From our beginnings in the Malabar region to our expanding footprint in the UAE, our locations are chosen thoughtfully to stay close to the communities we serve.
            </Reveal>

            <Reveal delay={0.15}>
              <a href="/#presence" className="link-arrow group inline-flex items-center text-foreground hover:text-brand-red">
                <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red font-medium tracking-wide">
                  Explore our presence
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Map Preview */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] w-full">
            <Reveal delay={0.2} className="h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none scale-110 lg:scale-125 transform-gpu translate-x-[5%] lg:translate-x-[15%]">
                <PresenceMap />
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
