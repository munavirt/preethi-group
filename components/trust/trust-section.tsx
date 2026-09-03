'use client';

import { Reveal } from '@/components/motion/reveal';

export function TrustSection() {
  return (
    <section id="trust" className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal as="span" className="eyebrow mb-8 block">
            Trusted by our customers
          </Reveal>

          <Reveal
            as="blockquote"
            className="text-balance font-serif text-3xl font-medium leading-[1.25] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            &ldquo;Every customer who walks in is a relationship we want to keep.
            That belief has shaped everything Preethi Group has become.&rdquo;
          </Reveal>

          <Reveal as="p" className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground" delay={0.1}>
            The Preethi Group philosophy
          </Reveal>
        </div>
      </div>
    </section>
  );
}
