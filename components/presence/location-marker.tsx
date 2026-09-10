'use client';

import { motion } from 'framer-motion';
import type { PresenceLocation } from '@/lib/data/locations';

type Props = {
    loc: PresenceLocation;
    point: { x: number; y: number };
    index: number;
    isHovered: boolean;
    onHover: (name: string | null) => void;
    reduce: boolean;
};

export function LocationMarker({ loc, point, index, isHovered, onHover, reduce }: Props) {
    const coreR = 2.5;
    const ringR = 9;
    const ringOpacity = isHovered ? 0.3 : 0.15;
    const mapUrl = loc.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.business + ' ' + loc.name)}`;

    return (
        <motion.g
            initial={reduce ? undefined : { opacity: 0, scale: 0.6 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 1.0 + index * 0.1, ease: 'easeOut' }}
            onMouseEnter={() => onHover(loc.name)}
            onMouseLeave={() => onHover(null)}
            onFocus={() => onHover(loc.name)}
            onBlur={() => onHover(null)}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`${loc.name} — ${loc.business}`}
        >
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ outline: 'none' }}>
                {/* Invisible larger hit area */}
                <circle cx={point.x} cy={point.y} r={18} fill="transparent" />

                {/* Outer ring (animates once on entry) */}
                <motion.circle
                    cx={point.x}
                    cy={point.y}
                    fill="none"
                    stroke="#E32626"
                    strokeWidth={0.5}
                    initial={reduce ? { r: ringR, opacity: ringOpacity } : { r: coreR, opacity: 0 }}
                    whileInView={reduce ? undefined : { r: ringR, opacity: ringOpacity }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.2, delay: 1.2 + index * 0.1, ease: 'easeOut' }}
                />

                {/* Core point */}
                <circle
                    cx={point.x}
                    cy={point.y}
                    r={coreR}
                    fill="#E32626"
                />
            </a>
        </motion.g>
    );
}