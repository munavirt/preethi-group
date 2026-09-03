'use client';

import { Reveal } from '@/components/motion/reveal';

export function BusinessesLookingAhead() {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="site-container flex flex-col items-center text-center">
        <Reveal as="span" className="eyebrow mb-6 inline-block">
          WHAT'S NEXT
        </Reveal>
        <Reveal as="h2" className="font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
          And this is only the beginning.
        </Reveal>
        
        <Reveal as="p" className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl" delay={0.1}>
          As Preethi Group continues to grow, the portfolio may evolve with new ideas, new opportunities and new ways to create lasting value.
        </Reveal>
      </div>
    </section>
  );
}
