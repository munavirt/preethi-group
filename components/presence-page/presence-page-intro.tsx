'use client';

import { Reveal } from '@/components/motion/reveal';

export function PresencePageIntro() {
  return (
    <section className="bg-background pb-16 md:pb-24">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal as="span" className="eyebrow mb-6 inline-block">
              WHERE WE ARE
            </Reveal>
            <Reveal as="h2" className="font-serif text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Close to home.<br />
              Connected beyond.
            </Reveal>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal as="p" className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our businesses have grown across locations while remaining connected to the people, communities and relationships that shaped the group.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
