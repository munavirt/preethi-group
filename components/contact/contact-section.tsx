'use client';

import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-32 md:py-48 border-t border-border">
      <div className="site-container">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <Reveal as="span" className="eyebrow mb-8 block uppercase tracking-widest text-brand-red font-medium text-sm">
            Contact
          </Reveal>
          
          <Reveal as="h2" className="text-balance text-5xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl lg:text-[80px]">
            Let&apos;s start
            <br />
            a conversation.
          </Reveal>
          
          <Reveal as="p" className="mt-8 max-w-lg text-pretty text-lg md:text-xl leading-relaxed text-muted-foreground">
            Have a question, business enquiry or simply want to connect?
          </Reveal>

          <Reveal className="mt-14" delay={0.1}>
            <a
              href="/contact"
              className="group inline-flex h-16 items-center justify-center rounded-full bg-brand-red px-10 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-105"
            >
              <span>Get in touch</span>
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
