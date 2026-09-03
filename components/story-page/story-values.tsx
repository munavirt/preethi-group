'use client';

import { Reveal } from '@/components/motion/reveal';

export function StoryValues() {
  return (
    <section className="bg-muted/30 py-24 md:py-32 border-y border-border">
      <div className="site-container">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Some things change.<br />
            Some things stay.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div className="flex flex-col items-center text-center">
            <Reveal as="h3" className="text-xl font-bold tracking-widest text-foreground uppercase mb-4">
              TRUST
            </Reveal>
            <Reveal as="p" className="text-base text-muted-foreground" delay={0.1}>
              Built over time. Carried forward.
            </Reveal>
          </div>

          <div className="flex flex-col items-center text-center">
            <Reveal as="h3" className="text-xl font-bold tracking-widest text-foreground uppercase mb-4" delay={0.1}>
              PEOPLE
            </Reveal>
            <Reveal as="p" className="text-base text-muted-foreground" delay={0.2}>
              The relationships behind every chapter.
            </Reveal>
          </div>

          <div className="flex flex-col items-center text-center">
            <Reveal as="h3" className="text-xl font-bold tracking-widest text-foreground uppercase mb-4" delay={0.2}>
              PURPOSE
            </Reveal>
            <Reveal as="p" className="text-base text-muted-foreground" delay={0.3}>
              Growing without losing sight of why we began.
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
