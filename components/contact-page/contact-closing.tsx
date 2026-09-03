'use client';

import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

export function ContactClosing() {
  return (
    <section className="bg-background py-24 md:py-40">
      <div className="site-container flex flex-col items-center text-center">
        <Reveal as="span" className="eyebrow mb-6 inline-block">
          WE'RE LISTENING
        </Reveal>
        <Reveal as="h2" className="font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Every conversation begins somewhere.
        </Reveal>
        
        <Reveal as="p" className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl" delay={0.1}>
          Start with a message. We'll take it from there.
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          {/* We scroll back up to the form */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex h-14 items-center justify-center rounded-full bg-brand-red px-8 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-brand-red/90 uppercase"
          >
            GET IN TOUCH
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
