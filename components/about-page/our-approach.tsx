'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';

const approachPrinciples = [
  {
    number: '01',
    title: 'QUALITY WITHOUT COMPROMISE',
    description: 'Sourcing, curating and delivering only what we would proudly choose for ourselves.',
  },
  {
    number: '02',
    title: 'COMMUNITY FOCUS',
    description: 'Treating every customer as a neighbor, because our growth is intrinsically linked to theirs.',
  },
  {
    number: '03',
    title: 'ADAPTABLE VISION',
    description: 'Honoring our traditional roots while embracing the agility needed for modern retail.',
  },
];

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
            <Reveal as="p" className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              We approach business with a long-term view. That means balancing the foundations we've built with a constant openness to new opportunities.
            </Reveal>
            {/* Subtle divider between columns on desktop */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[1px] bg-border" />
          </div>

          {/* Right Column - Principles */}
          <div className="flex flex-col justify-center lg:col-span-6 lg:pl-4">
            <Stagger className="flex flex-col gap-10">
              {approachPrinciples.map((principle) => (
                <StaggerItem key={principle.number} className="flex flex-col border-l-2 border-brand-red/30 pl-6 py-1">
                  <span className="text-xs font-bold tracking-widest text-brand-red mb-3 font-mono">
                    {principle.number}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                    {principle.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
