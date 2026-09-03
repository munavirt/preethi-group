'use client';

import { Reveal } from '@/components/motion/reveal';

export function WhoWeAre() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="site-container">
        <Reveal as="span" className="eyebrow mb-12 inline-block">
          Who We Are
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Large Statement */}
          <div className="lg:col-span-6">
            <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A group with a simple belief.
            </Reveal>
          </div>

          {/* Right Column - Paragraphs */}
          <div className="flex flex-col justify-end lg:col-span-6 lg:pt-2">
            <Reveal as="p" className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe lasting businesses are built on more than growth alone. They are built on trust, strong relationships and a genuine understanding of the people they serve.
            </Reveal>
            
            <Reveal as="p" className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.1}>
              Preethi Group brings together businesses that share this approach — each with its own identity, while connected by a common commitment to quality, people and long-term growth.
            </Reveal>
            
            <Reveal as="p" className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.2}>
              As the group continues to grow, our focus remains simple: build thoughtfully, serve responsibly and create something that lasts.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
