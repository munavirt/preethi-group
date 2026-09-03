'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { businesses } from '@/lib/data/businesses';

export function BusinessesPreview() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
          <Reveal as="span" className="eyebrow mb-6 inline-block">
            Our Businesses
          </Reveal>
          <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl max-w-3xl">
            Different businesses.<br />
            A shared foundation.
          </Reveal>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {businesses.map((business, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={business.name}
                className={`flex flex-col gap-10 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={business.image}
                      alt={business.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </Reveal>
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <Reveal delay={0.1}>
                    <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                      {business.name}
                    </h3>
                    <p className="mb-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {business.description}
                    </p>
                    <a href={`/#businesses`} className="link-arrow group inline-flex items-center text-foreground hover:text-brand-red">
                      <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red font-medium tracking-wide">
                        Explore {business.name}
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
