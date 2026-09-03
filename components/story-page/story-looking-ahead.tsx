'use client';

import { Reveal } from '@/components/motion/reveal';

export function StoryLookingAhead() {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="site-container flex flex-col items-center text-center">
        <Reveal as="span" className="eyebrow mb-6 inline-block">
          WHAT COMES NEXT
        </Reveal>
        <Reveal as="h2" className="font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
          The story is still being written.
        </Reveal>
        
        <Reveal as="p" className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl" delay={0.1}>
          There is more to build, more to learn and more opportunities ahead. The next chapter will continue to be shaped by the people, relationships and ideas that move Preethi Group forward.
        </Reveal>
      </div>
    </section>
  );
}
