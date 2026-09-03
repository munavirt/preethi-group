'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { stats } from '@/lib/data/stats';

export function StatsSection() {
  return (
    <section className="border-y border-border bg-background py-16 md:py-24">
      <div className="site-container">
        <Stagger className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? 'md:border-r md:border-border' : ''
              }`}
            >
              <span className="text-5xl font-bold tracking-[-0.02em] text-foreground sm:text-6xl lg:text-7xl">
                {stat.value}
              </span>
              <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
