'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

export function StoryCta() {
  return (
    <section className="bg-background py-20 pb-32 md:py-32 md:pb-40">
      <div className="site-container">
        <div className="flex flex-col items-center text-center">
          <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
            Be part of what's next.
          </Reveal>
          
          <Reveal as="p" className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg mb-12">
            Explore the businesses behind the story or get in touch with Preethi Group.
          </Reveal>
          
          <Reveal delay={0.1} className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="/businesses"
              className="group inline-flex h-14 items-center justify-center bg-brand-red px-8 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-brand-red/90 uppercase"
            >
              OUR BUSINESSES
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            
            <a
              href="/#contact"
              className="link-arrow group inline-flex items-center text-sm font-semibold tracking-widest text-foreground hover:text-brand-red uppercase"
            >
              <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red">
                GET IN TOUCH
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
