'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { buildMapBounds, type MapBounds } from './geo-projection';
import { LocationMarker } from './location-marker';
import { LocationLabel } from './location-label';
import { presenceLocations, type PresenceLocation } from '@/lib/data/locations';

type LabelPlacement = {
    dx: number;
    dy: number;
    anchor: 'start' | 'middle' | 'end';
};

// Carefully tuned label positions to prevent overlap and ensure optimal optical spacing.
const labelPlacements: Record<string, LabelPlacement> = {
    Kuttiady: { dx: -18, dy: -6, anchor: 'end' },
    Calicut: { dx: -18, dy: -4, anchor: 'end' },
    Kondotty: { dx: 18, dy: -14, anchor: 'start' },
    Feroke: { dx: -18, dy: 14, anchor: 'end' },
    Malappuram: { dx: 18, dy: 6, anchor: 'start' },
    Palakkad: { dx: 18, dy: 6, anchor: 'start' },
    UAE: { dx: 0, dy: -24, anchor: 'middle' },
};

const VIEWBOX_W = 1100;
const VIEWBOX_H = 580;

export function PresenceMap() {
    const reduce = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const bounds: MapBounds = useMemo(
        () => buildMapBounds(VIEWBOX_W, VIEWBOX_H),
        []
    );

    const points = useMemo(() => {
        return presenceLocations
            .map((loc) => {
                const region = loc.region === 'uae' ? 'uae' : 'malabar';
                const p = bounds.project(loc.coordinates, region as 'malabar' | 'uae');
                return p ? { loc, point: p } : null;
            })
            .filter((x): x is { loc: PresenceLocation; point: { x: number; y: number } } => x !== null);
    }, [bounds]);

    // Curved connection route from UAE to Malabar (to the Calicut area).
    const connectionPath = useMemo(() => {
        const uaePoint = points.find((p) => p.loc.region === 'uae');
        const malabarPoint = points.find((p) => p.loc.name === 'Calicut');
        if (!uaePoint || !malabarPoint) return '';
        const x1 = uaePoint.point.x;
        const y1 = uaePoint.point.y;
        const x2 = malabarPoint.point.x;
        const y2 = malabarPoint.point.y;
        // Gentle cubic bezier sweeping upward across the whitespace.
        const cx1 = (x1 + (x2 - x1) * 0.35).toFixed(2);
        const cy1 = (y1 - 40).toFixed(2);
        const cx2 = (x1 + (x2 - x1) * 0.65).toFixed(2);
        const cy2 = (y2 - 50).toFixed(2);
        const sx1 = x1.toFixed(2);
        const sy1 = y1.toFixed(2);
        const sx2 = x2.toFixed(2);
        const sy2 = y2.toFixed(2);
        return `M ${sx1} ${sy1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${sx2} ${sy2}`;
    }, [points]);

    // Generate faint contour-like lines across the Malabar region.
    const contourLines = useMemo(() => {
        const { malabarBounds: mb } = bounds;
        const lines: string[] = [];
        const step = 18;
        const startX = mb.x - 10;
        const endX = mb.x + mb.width + 10;
        for (let y = mb.y - 10; y < mb.y + mb.height + 10; y += step) {
            // Slightly wavy horizontal line for subtle topographic feel.
            const wave = Math.sin(y * 0.04) * 6;
            const midX = (startX + endX) / 2;
            lines.push(`M ${startX.toFixed(2)} ${y.toFixed(2)} Q ${midX.toFixed(2)} ${(y + wave).toFixed(2)} ${endX.toFixed(2)} ${y.toFixed(2)}`);
        }
        return lines;
    }, [bounds]);

    return (
        <div ref={containerRef} className="relative w-full">
            <svg
                viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
                className="w-full"
                style={{ display: 'block' }}
                role="img"
                aria-label="Map showing Preethi Group locations across the Malabar region of Kerala and the UAE"
            >
                <defs>
                    {/* Very soft inner tonal shadow effect */}
                    <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#3a322c" floodOpacity="0.04" />
                    </filter>
                    
                    {/* Subtle warm stone/greige fill for Kerala */}
                    <linearGradient id="keralaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(40 10% 86%)" />
                        <stop offset="100%" stopColor="hsl(40 8% 83%)" />
                    </linearGradient>

                    {/* Slightly lighter stone fill for UAE */}
                    <linearGradient id="uaeFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(40 12% 90%)" />
                        <stop offset="100%" stopColor="hsl(40 10% 86%)" />
                    </linearGradient>

                    {/* Clip paths for contour lines so they only show within land */}
                    <clipPath id="malabarClip">
                        <path d={bounds.malabarOutline} />
                    </clipPath>
                    <clipPath id="uaeClip">
                        <path d={bounds.uaeOutline} />
                    </clipPath>
                </defs>

                {/* ===== UAE (LEFT) ===== */}
                <motion.g
                    initial={reduce ? undefined : { opacity: 0 }}
                    whileInView={reduce ? undefined : { opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* UAE land fill */}
                    <path
                        d={bounds.uaeOutline}
                        fill="url(#uaeFill)"
                        stroke="hsl(40 10% 72%)"
                        strokeWidth={0.8}
                        strokeLinejoin="round"
                        filter="url(#mapShadow)"
                    />
                    {/* UAE faint contour texture */}
                    <g clipPath="url(#uaeClip)" opacity={0.5}>
                        {contourLines.slice(0, 8).map((d, i) => (
                            <path
                                key={`uae-c-${i}`}
                                d={d}
                                fill="none"
                                stroke="hsl(40 10% 88%)"
                                strokeWidth={0.5}
                            />
                        ))}
                    </g>
                    {/* UAE coastline emphasis */}
                    <path
                        d={bounds.uaeOutline}
                        fill="none"
                        stroke="hsl(200 15% 80%)"
                        strokeWidth={0.6}
                        strokeLinejoin="round"
                        opacity={0.6}
                    />
                </motion.g>

                {/* ===== MALABAR (RIGHT) ===== */}
                <motion.g
                    initial={reduce ? undefined : { opacity: 0 }}
                    whileInView={reduce ? undefined : { opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    {/* Malabar land fill */}
                    <path
                        d={bounds.malabarOutline}
                        fill="url(#keralaFill)"
                        stroke="hsl(40 10% 72%)"
                        strokeWidth={1}
                        strokeLinejoin="round"
                        filter="url(#mapShadow)"
                    />
                    {/* Malabar faint contour texture */}
                    <g clipPath="url(#malabarClip)" opacity={0.5}>
                        {contourLines.map((d, i) => (
                            <path
                                key={`mal-c-${i}`}
                                d={d}
                                fill="none"
                                stroke="hsl(40 10% 88%)"
                                strokeWidth={0.5}
                            />
                        ))}
                    </g>
                    {/* District boundaries */}
                    {bounds.malabarDistricts.map((dist, i) => (
                        <path
                            key={dist.name}
                            d={dist.d}
                            fill="none"
                            stroke="hsl(40 10% 72%)"
                            strokeWidth={0.25}
                            strokeLinejoin="round"
                            opacity={0.3}
                        />
                    ))}
                    {/* Coastline emphasis */}
                    <path
                        d={bounds.malabarOutline}
                        fill="none"
                        stroke="hsl(200 15% 78%)"
                        strokeWidth={0.7}
                        strokeLinejoin="round"
                        opacity={0.5}
                    />
                </motion.g>

                {/* ===== UAE → MALABAR CONNECTION ROUTE ===== */}
                {connectionPath && (
                    <motion.path
                        d={connectionPath}
                        fill="none"
                        stroke="#E32626"
                        strokeWidth={0.3}
                        strokeLinecap="round"
                        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
                        whileInView={reduce ? undefined : {
                            pathLength: 1,
                            opacity: 0.15,
                        }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.6 }}
                        style={{
                            transition: 'opacity 0.3s',
                        }}
                    />
                )}

                {/* ===== LOCATION MARKERS + LABELS ===== */}
                {mounted && points.map(({ loc, point }, idx) => {
                    const placement = labelPlacements[loc.name] ?? { dx: 16, dy: -4, anchor: 'start' as const };
                    const isHovered = hovered === loc.name;
                    const labelX = point.x + placement.dx;
                    const labelY = point.y + placement.dy;
                    const isUaeRoute = hovered === 'UAE' && loc.region === 'uae';

                    return (
                        <g key={loc.name}>
                            {/* Leader line */}
                            <motion.line
                                x1={point.x}
                                y1={point.y}
                                x2={labelX}
                                y2={labelY}
                                stroke={isHovered ? 'hsl(var(--brand-red) / 0.5)' : 'hsl(0 0% 78%)'}
                                strokeWidth={isHovered ? 1 : 0.5}
                                initial={reduce ? undefined : { opacity: 0 }}
                                whileInView={reduce ? undefined : { opacity: 1 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
                            />

                            {/* Marker */}
                            <LocationMarker
                                loc={loc}
                                point={point}
                                index={idx}
                                isHovered={isHovered || isUaeRoute}
                                onHover={(name) => setHovered(name)}
                                reduce={!!reduce}
                            />

                            {/* Label */}
                            <LocationLabel
                                loc={loc}
                                x={labelX}
                                y={labelY}
                                anchor={placement.anchor}
                                index={idx}
                                isHovered={isHovered}
                                reduce={!!reduce}
                            />
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}