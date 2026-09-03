'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/32673642/pexels-photo-32673642.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Image — left */}
          <div className="order-1 lg:order-2 md:col-span-5">
            <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={ABOUT_IMAGE}
                alt="An artisan weaving traditional Indian textiles at a loom"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          {/* Text — right */}
          <div className="flex flex-col justify-center md:col-span-7 md:pl-8 lg:pl-16">
            <Reveal as="span" className="eyebrow mb-6">
              The Group
            </Reveal>

            <Reveal as="h2" className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
              Built around people.
              <br />
              Growing with purpose.
            </Reveal>

            <Reveal as="p" className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.05}>
              Preethi Group is a growing collection of businesses rooted in
              fashion and retail. What started as a single store has grown into a
              group that serves families across Kerala — bringing quality,
              craftsmanship and a genuine sense of care to everything we do.
            </Reveal>

            <Reveal as="p" className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" delay={0.1}>
              Our philosophy is simple. We believe in honest retail, lasting
              relationships and growing alongside the communities we serve.
            </Reveal>

            <Reveal className="mt-10" delay={0.15}>
              <a href="#story" className="link-arrow group text-foreground hover:text-brand-red">
                <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red">
                  Read our story
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
