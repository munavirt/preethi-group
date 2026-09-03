'use client';

import { Reveal } from '@/components/motion/reveal';
import { ArrowRight } from 'lucide-react';

export function PresenceLegend() {
    return (
        <div className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <Reveal className="flex items-center gap-8" delay={0.1}>
                <div className="flex items-center gap-2.5">
                    <span className="block h-2.5 w-2.5 rounded-full bg-brand-red" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Preethi Silks
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <span className="block h-2.5 w-2.5 rounded-full border-2 border-brand-red" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Calicut Fashion Bazar
                    </span>
                </div>
            </Reveal>

            <Reveal delay={0.15}>
                <a href="/our-presence" className="link-arrow group text-foreground hover:text-brand-red">
                    <span className="border-b border-foreground pb-1 text-sm font-semibold transition-colors group-hover:border-brand-red">
                        Explore our presence
                    </span>
                    <ArrowRight className="h-4 w-4" />
                </a>
            </Reveal>
        </div>
    );
}