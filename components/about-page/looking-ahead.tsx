'use client';

import { Reveal } from '@/components/motion/reveal';

export function LookingAhead() {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="site-container flex flex-col items-center text-center">
        <Reveal as="span" className="eyebrow mb-6 inline-block">
          Looking Ahead
        </Reveal>
        <Reveal as="h2" className="font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
          The journey is still unfolding.
        </Reveal>
        
        <Reveal as="p" className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl" delay={0.1}>
          Preethi Group continues to look ahead — building on the relationships, experiences and foundations that have shaped us so far, while exploring what comes next.
        </Reveal>
        
        <Reveal as="p" className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl md:text-2xl" delay={0.2}>
          The goal is not simply to grow, but to grow with purpose.
        </Reveal>
      </div>
    </section>
  );
}
