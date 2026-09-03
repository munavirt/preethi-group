'use client';

import { Reveal } from '@/components/motion/reveal';

export function PresenceIntro() {
    return (
        <div className="mb-10 md:mb-14">
            <Reveal as="span" className="eyebrow mb-5 block">
                Our Presence
            </Reveal>
            <Reveal as="h2" className="max-w-2xl text-balance text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
                Rooted here.
                <br />
                Reaching beyond.
            </Reveal>
            <Reveal as="p" className="mt-5 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base" delay={0.05}>
                Our businesses continue to grow across Kerala, with Preethi Silks
                extending its presence beyond the region into the UAE.
            </Reveal>
        </div>
    );
}