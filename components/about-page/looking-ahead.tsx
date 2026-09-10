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
          The next chapter is taking shape.
        </Reveal>
        
        <Reveal as="p" className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl" delay={0.1}>
          We continue to build upon our foundations while remaining open to new opportunities. As we look to the future, our focus remains on thoughtful expansion that honors the communities we serve.
        </Reveal>
      </div>
    </section>
  );
}
