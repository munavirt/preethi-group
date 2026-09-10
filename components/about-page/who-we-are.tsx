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
              A group of businesses, connected by a common foundation.
            </Reveal>
          </div>

          {/* Right Column - Paragraphs */}
          <div className="flex flex-col justify-end lg:col-span-6 lg:pt-2">
            <Reveal as="p" className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Preethi Group unites multiple businesses across retail and fashion under a shared philosophy. While each brand maintains its own unique identity and market presence, they are all guided by the same core principles.
            </Reveal>
            
            <Reveal as="p" className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.1}>
              We believe in taking a long-term view. This means building thoughtfully, respecting the foundations we've established, and continuously evolving to better support the communities we operate in.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
