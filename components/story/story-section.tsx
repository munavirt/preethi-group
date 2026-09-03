'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { storyMoments } from '@/lib/data/story';

export function StorySection() {
  return (
    <section id="story" className="bg-brand-cream py-20 md:py-32">
      <div className="site-container">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <Reveal as="span" className="eyebrow mb-6 block">
            Our Story
          </Reveal>
          <Reveal as="h2" className="max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl">
            From where we began
            <br />
            to where we&apos;re going.
          </Reveal>
        </div>

        {/* Story moments */}
        <Stagger className="grid grid-cols-1 gap-px bg-border overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-5">
          {storyMoments.map((moment) => (
            <StaggerItem
              key={moment.number}
              className="flex flex-col bg-brand-cream p-8 lg:p-10"
            >
              <span className="font-serif text-4xl font-medium text-brand-red">
                {moment.number}
              </span>
              <h3 className="mt-6 text-xl font-bold tracking-[-0.01em] text-foreground">
                {moment.title}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {moment.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
