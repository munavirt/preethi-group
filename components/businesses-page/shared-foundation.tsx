'use client';

import { Reveal } from '@/components/motion/reveal';

export function SharedFoundation() {
  return (
    <section className="bg-background py-20 md:py-32 border-b border-border">
      <div className="site-container flex flex-col items-center text-center">
        <Reveal as="span" className="eyebrow mb-6 inline-block">
          ONE GROUP
        </Reveal>
        
        <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8">
          Different identities.<br />
          A shared foundation.
        </Reveal>
        
        <Reveal as="p" className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.1}>
          While our businesses serve different customers and purposes, they remain connected through the shared values and operational excellence of Preethi Group.
        </Reveal>
      </div>
    </section>
  );
}
