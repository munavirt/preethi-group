'use client';

import { Reveal } from '@/components/motion/reveal';

export function BusinessesIntro() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal as="span" className="eyebrow mb-6 inline-block">
              OUR PORTFOLIO
            </Reveal>
            <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Built independently.<br />
              Growing together.
            </Reveal>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal as="p" className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each business within Preethi Group has its own character, customers and way of creating value. Together, they represent the group's continuing journey of building strong and meaningful businesses.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
