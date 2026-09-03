'use client';

import { Reveal } from '@/components/motion/reveal';

const principles = [
  {
    number: '01',
    title: 'PEOPLE',
    description:
      'People are at the heart of every business we build.',
  },
  {
    number: '02',
    title: 'TRUST',
    description:
      'Strong relationships are built through consistency, honesty and time.',
  },
  {
    number: '03',
    title: 'GROWTH',
    description:
      'We believe in growing thoughtfully while staying grounded in what matters.',
  },
  {
    number: '04',
    title: 'PURPOSE',
    description:
      'Every step forward should contribute to something meaningful and lasting.',
  },
];

export function WhatWeBelieve() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="mb-16 md:mb-24">
          <Reveal as="span" className="eyebrow mb-6 inline-block">
            What We Believe
          </Reveal>
          <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            The principles behind how we grow.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <div 
              key={principle.number} 
              className="group relative border-t border-border py-8 pr-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pr-4"
            >
              {/* Subtle hover line effect */}
              <div className="absolute inset-x-0 top-0 h-[1px] w-0 bg-foreground transition-all duration-500 group-hover:w-full lg:inset-y-0 lg:left-0 lg:h-0 lg:w-[1px] lg:group-hover:h-full lg:group-hover:w-[1px]" />
              
              <Reveal delay={index * 0.1}>
                <span className="block text-sm font-medium text-brand-red mb-8">
                  {principle.number}
                </span>
                <h3 className="mb-4 text-xl font-bold tracking-tight text-foreground">
                  {principle.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {principle.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
