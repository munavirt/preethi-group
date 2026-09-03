'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { businesses } from '@/lib/data/businesses';

export function BusinessesSection() {
  return (
    <section id="businesses" className="bg-brand-cream py-20 md:py-32">
      <div className="site-container">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <Reveal as="span" className="eyebrow mb-6 block">
            Our Businesses
          </Reveal>
          <Reveal as="h2" className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            Two businesses.
            <br />
            One growing group.
          </Reveal>
        </div>

        {/* Business features */}
        <div className="flex flex-col gap-20 md:gap-32">
          {businesses.map((biz, i) => {
            const textLeft = i % 2 === 0;
            return (
              <div
                key={biz.number}
                id={biz.name.toLowerCase().replace(/\s+/g, '-')}
                className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8"
              >
                {/* Text */}
                <Stagger
                  className={textLeft ? 'md:col-span-5 md:order-1' : 'md:col-span-5 md:order-2 md:col-start-8'}
                  delay={0.05}
                >
                  <StaggerItem as="span" className="block font-serif text-5xl font-medium text-brand-red md:text-6xl">
                    {biz.number}
                  </StaggerItem>
                  <StaggerItem as="h3" className="mt-5 text-3xl font-bold tracking-[-0.01em] text-foreground sm:text-4xl">
                    {biz.name}
                  </StaggerItem>
                  <StaggerItem as="p" className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {biz.tagline}
                  </StaggerItem>
                  <StaggerItem as="p" className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                    {biz.description}
                  </StaggerItem>
                  <StaggerItem className="mt-8">
                    <a href={biz.href} className="link-arrow group text-foreground hover:text-brand-red">
                      <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red">
                        Explore {biz.name}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </StaggerItem>
                </Stagger>

                {/* Image */}
                <Reveal
                  className={textLeft ? 'md:col-span-7 md:order-2' : 'md:col-span-6 md:order-1 md:col-start-1'}
                >
                  <div className="group relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={biz.image}
                      alt={biz.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
