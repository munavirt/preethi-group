'use client';

import { Reveal } from '@/components/motion/reveal';

export function PresenceBeyondBorders() {
  return (
    <section className="bg-muted/30 py-24 md:py-32 border-y border-border relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative lg:pr-12">
            <Reveal as="span" className="eyebrow mb-6 inline-block">
              BEYOND BORDERS
            </Reveal>
            <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              One foundation.<br />
              Different places.
            </Reveal>
            {/* Visual connecting element on desktop */}
            <div className="hidden lg:block absolute right-0 top-1/2 w-[1px] h-32 bg-border -translate-y-1/2" />
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:pl-12">
            <Reveal as="p" className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our presence may span different markets and communities, but the foundation remains the same — building trusted relationships and creating businesses that people can rely on.
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
