'use client';

import { Reveal } from '@/components/motion/reveal';
import { ArrowRight } from 'lucide-react';

export function PresenceLegend() {
    return (
        <div className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <Reveal className="flex items-center gap-8" delay={0.1}>
                <div className="flex items-center gap-2.5">
                    <div className="relative flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-red/15">
                        <span className="block h-[5px] w-[5px] rounded-full bg-brand-red" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Preethi Silks
                    </span>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="relative flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand-red/15">
                        <span className="block h-[5px] w-[5px] rounded-full border-[1.2px] border-brand-red" />
                    </div>
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