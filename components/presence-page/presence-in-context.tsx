'use client';

import Image from 'next/image';
import { Reveal } from '@/components/motion/reveal';
import { businesses } from '@/lib/data/businesses';

export function PresenceInContext() {
  // Use a strong interior/customer image from our business data
  const contextImage = businesses[0].image; 
  const contextImageAlt = businesses[0].imageAlt;

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 items-center">
          
          {/* Image - Left Side */}
          <div className="lg:col-span-7">
            <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={contextImage}
                alt={contextImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </Reveal>
          </div>

          {/* Content - Right Side */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal as="h2" className="font-serif mb-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Every location is a relationship.
            </Reveal>

            <Reveal as="p" className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Behind every location are customers, communities, teams and relationships that make each business part of something larger.
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
