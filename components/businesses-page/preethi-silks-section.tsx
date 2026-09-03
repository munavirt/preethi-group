'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { businesses } from '@/lib/data/businesses';

export function PreethiSilksSection() {
  const business = businesses[0]; // Preethi Silks

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-center">
          
          {/* Image - Left Side */}
          <div className="order-1 lg:order-2">
            <Reveal className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={business.image}
                alt={business.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </Reveal>
          </div>

          {/* Content - Right Side */}
          <div className="flex flex-col justify-center lg:col-span-5 order-1 lg:order-2">
            <Reveal as="span" className="eyebrow mb-6 inline-block text-brand-red">
              01 / {business.name.toUpperCase()}
            </Reveal>

            <Reveal as="h2" className="font-serif mb-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {business.name}
            </Reveal>

            <Reveal as="p" className="mb-8 text-xl font-medium leading-relaxed text-foreground" delay={0.1}>
              A fashion and textile business built around quality, tradition and the experience of its customers.
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
                <span className="block text-sm font-medium text-foreground">Fashion & Textiles</span>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <a href={business.href} className="link-arrow group inline-flex items-center text-sm font-semibold tracking-widest text-foreground hover:text-brand-red">
                <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red uppercase">
                  EXPLORE {business.name}
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
