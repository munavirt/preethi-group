'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import type { Business } from '@/lib/data/businesses';

type BusinessDetailSectionProps = {
  business: Business;
  index: number;
};

export function BusinessDetailSection({ business, index }: BusinessDetailSectionProps) {
  // Use a subtle alternating background color if desired, or keep it consistent.
  // The original Calicut section used bg-muted/30, Preethi used bg-background.
  // Let's alternate based on index.
  const bgClass = index % 2 === 1 ? 'bg-muted/30' : 'bg-background';

  return (
    <section id={business.href.replace('#', '')} className={`${bgClass} py-20 md:py-32`}>
      <div className="site-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-center">

          {/* Content */}
          <div className={`flex flex-col justify-center lg:col-span-5 ${index % 2 === 1 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
            <Reveal as="span" className="eyebrow mb-6 inline-block text-brand-red uppercase">
              {business.number} / {business.name}
            </Reveal>

            <Reveal as="h2" className="font-serif mb-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {business.name}
            </Reveal>

            <Reveal as="p" className="mb-8 text-xl font-medium leading-relaxed text-foreground" delay={0.1}>
              {business.shortIntro}
            </Reveal>

            <Reveal as="p" className="mb-12 max-w-md text-pretty text-base leading-relaxed text-muted-foreground" delay={0.15}>
              {business.description}
            </Reveal>

            {/* Metadata */}
            <Reveal delay={0.2} className="mb-12 flex flex-col gap-4 border-l border-border pl-6">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Business</span>
                <span className="block text-sm font-medium text-foreground">{business.name}</span>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Category</span>
                <span className="block text-sm font-medium text-foreground">{business.category}</span>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <a href={business.href} className="link-arrow group inline-flex items-center text-sm font-semibold tracking-widest text-foreground hover:text-brand-red">
                <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red uppercase">
                  {index === 0 ? 'EXPLORE PREETHI SILKS' : 'LEARN MORE'}
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Image */}
          <div className={`lg:col-span-7 w-full ${index % 2 === 1 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
            <Reveal className="relative w-full overflow-hidden rounded-2xl bg-muted aspect-[4/5]">
              {business.image ? (
                <Image
                  src={business.image}
                  alt={business.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  <span className="text-muted-foreground text-sm uppercase tracking-widest">Image Unavailable</span>
                </div>
              )}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
