'use client';

import { Reveal } from '@/components/motion/reveal';

export function OurApproach() {
  return (
    <section className="bg-muted/30 py-20 md:py-32 border-y border-border">
      <div className="site-container">
        <Reveal as="span" className="eyebrow mb-12 inline-block">
          Our Approach
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Large Statement */}
          <div className="lg:col-span-6 relative lg:pr-8">
            <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build with purpose.<br />
              Grow with perspective.
            </Reveal>
            {/* Subtle divider between columns on desktop */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[1px] bg-border" />
          </div>

          {/* Right Column - Paragraphs */}
          <div className="flex flex-col justify-end lg:col-span-6 lg:pl-4 lg:pt-2">
            <Reveal as="p" className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We approach business with a long-term view. That means understanding the people we serve, respecting the foundations we've built and remaining open to new opportunities.
            </Reveal>
            
            <Reveal as="p" className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.1}>
              For us, growth is not simply about becoming bigger. It is about becoming stronger, creating better experiences and building businesses that can continue to evolve with the people around them.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
