'use client';

import { motion } from 'framer-motion';
import type { PresenceLocation } from '@/lib/data/locations';

type Props = {
    loc: PresenceLocation;
    x: number;
    y: number;
    anchor: 'start' | 'middle' | 'end';
    index: number;
    isHovered: boolean;
    reduce: boolean;
};

export function LocationLabel({ loc, x, y, anchor, index, isHovered, reduce }: Props) {
    const mapUrl = loc.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.business + ' ' + loc.name)}`;

    return (
        <motion.g
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 1.3 + index * 0.1, ease: 'easeOut' }}
            style={{ pointerEvents: 'none' }}
        >
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" style={{ pointerEvents: 'auto', cursor: 'pointer' }}>
                <text
                    x={x}
                    y={y}
                    textAnchor={anchor}
                    className="font-sans hover:underline"
                    fontSize={isHovered ? 12 : 11}
                    fontWeight={500}
                    letterSpacing="-0.01em"
                    fill={isHovered ? '#1A1A1A' : '#333333'}
                    style={{ transition: 'font-size 0.3s ease, fill 0.3s ease' }}
                >
                    {loc.name}
                </text>
            </a>
        </motion.g>
    );
}