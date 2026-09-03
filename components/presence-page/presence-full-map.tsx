'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { buildMapBounds, type MapBounds } from '@/components/presence/geo-projection';
import { LocationMarker } from '@/components/presence/location-marker';
import { LocationLabel } from '@/components/presence/location-label';
import { presenceLocations, type PresenceLocation } from '@/lib/data/locations';

type LabelPlacement = {
    dx: number;
    dy: number;
    anchor: 'start' | 'middle' | 'end';
};

const labelPlacements: Record<string, LabelPlacement> = {
    Kuttiady: { dx: -16, dy: -6, anchor: 'end' },
    Calicut: { dx: -16, dy: 12, anchor: 'end' },
    Kondotty: { dx: 16, dy: -12, anchor: 'start' },
    Feroke: { dx: -24, dy: 6, anchor: 'end' },
    Malappuram: { dx: 16, dy: -2, anchor: 'start' },
    Palakkad: { dx: 16, dy: 6, anchor: 'start' },
    UAE: { dx: 0, dy: -22, anchor: 'middle' },
};

const VIEWBOX_W = 1100;
const VIEWBOX_H = 580;

export function PresenceFullMap() {
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

    const uaePoints = points.filter(p => p.loc.region === 'uae');
    const malabarPoints = points.filter(p => p.loc.region !== 'uae');

    const connectionPath = useMemo(() => {
        const uaePoint = points.find((p) => p.loc.region === 'uae');
        const malabarPoint = points.find((p) => p.loc.name === 'Calicut');
        if (!uaePoint || !malabarPoint) return '';
        const x1 = uaePoint.point.x;
        const y1 = uaePoint.point.y;
        const x2 = malabarPoint.point.x;
        const y2 = malabarPoint.point.y;
        const cx1 = x1 + (x2 - x1) * 0.35;
        const cy1 = y1 - 40;
        const cx2 = x1 + (x2 - x1) * 0.65;
        const cy2 = y2 - 50;
        return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
    }, [points]);

    const contourLines = useMemo(() => {
        const { malabarBounds: mb } = bounds;
        const lines: string[] = [];
        const step = 18;
        const startX = mb.x - 10;
        const endX = mb.x + mb.width + 10;
        for (let y = mb.y - 10; y < mb.y + mb.height + 10; y += step) {
            const wave = Math.sin(y * 0.04) * 6;
            const midX = (startX + endX) / 2;
            lines.push(`M ${startX} ${y} Q ${midX} ${y + wave} ${endX} ${y}`);
        }
        return lines;
    }, [bounds]);

    // Common defs shared between SVGs
    const MapDefs = () => (
        <defs>
            <linearGradient id="landFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(40 25% 96%)" />
                <stop offset="100%" stopColor="hsl(40 15% 93%)" />
            </linearGradient>
            <clipPath id="malabarClip">
                <path d={bounds.malabarOutline} />
            </clipPath>
            <clipPath id="uaeClip">
                <path d={bounds.uaeOutline} />
            </clipPath>
        </defs>
    );

    const UaeMapGroup = () => (
        <motion.g
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ opacity: hovered && hovered !== 'UAE' ? 0.3 : 1, transition: 'opacity 0.3s ease' }}
        >
            <path
                d={bounds.uaeOutline}
                fill="url(#landFill)"
                stroke="hsl(0 0% 82%)"
                strokeWidth={1}
                strokeLinejoin="round"
            />
            <g clipPath="url(#uaeClip)" opacity={0.5}>
                {contourLines.slice(0, 8).map((d, i) => (
                    <path key={`uae-c-${i}`} d={d} fill="none" stroke="hsl(40 10% 88%)" strokeWidth={0.5} />
                ))}
            </g>
            <path
                d={bounds.uaeOutline}
                fill="none"
                stroke="hsl(200 15% 80%)"
                strokeWidth={0.6}
                strokeLinejoin="round"
                opacity={0.6}
            />
        </motion.g>
    );

    const MalabarMapGroup = () => (
        <motion.g
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ opacity: hovered && hovered === 'UAE' ? 0.4 : 1, transition: 'opacity 0.3s ease' }}
        >
            <path
                d={bounds.malabarOutline}
                fill="url(#landFill)"
                stroke="hsl(0 0% 80%)"
                strokeWidth={1.2}
                strokeLinejoin="round"
            />
            <g clipPath="url(#malabarClip)" opacity={0.5}>
                {contourLines.map((d, i) => (
                    <path key={`mal-c-${i}`} d={d} fill="none" stroke="hsl(40 10% 88%)" strokeWidth={0.5} />
                ))}
            </g>
            {bounds.malabarDistricts.map((dist) => (
                <path
                    key={dist.name}
                    d={dist.d}
                    fill="none"
                    stroke="hsl(0 0% 85%)"
                    strokeWidth={0.5}
                    strokeDasharray="2 3"
                    strokeLinejoin="round"
                    opacity={0.7}
                />
            ))}
            <path
                d={bounds.malabarOutline}
                fill="none"
                stroke="hsl(200 15% 78%)"
                strokeWidth={0.7}
                strokeLinejoin="round"
                opacity={0.5}
            />
        </motion.g>
    );

    const MarkersGroup = ({ pointsList, delayStart = 1.2 }: { pointsList: typeof points, delayStart?: number }) => (
        <>
            {mounted && pointsList.map(({ loc, point }, idx) => {
                const placement = labelPlacements[loc.name] ?? { dx: 16, dy: -4, anchor: 'start' };
                const isHovered = hovered === loc.name;
                const labelX = point.x + placement.dx;
                const labelY = point.y + placement.dy;
                const isUaeRoute = hovered === 'UAE' && loc.region === 'uae';

                return (
                    <g key={loc.name}>
                        {/* Leader line - show on hover to emphasize exact point */}
                        <motion.line
                            x1={point.x}
                            y1={point.y}
                            x2={labelX}
                            y2={labelY}
                            stroke={isHovered ? 'hsl(var(--brand-red) / 0.5)' : 'hsl(0 0% 78%)'}
                            strokeWidth={isHovered ? 1 : 0.5}
                            initial={reduce ? undefined : { opacity: 0 }}
                            whileInView={reduce ? undefined : { opacity: isHovered ? 1 : 0.5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                        />
                        <LocationMarker
                            loc={loc}
                            point={point}
                            index={idx}
                            isHovered={isHovered || isUaeRoute}
                            onHover={(name) => setHovered(name)}
                            reduce={!!reduce}
                        />
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
        </>
    );

    return (
        <section className="bg-background py-16 md:py-24 border-b border-border overflow-hidden">
            <div className="site-container relative w-full" ref={containerRef}>
                
                {/* Desktop View: Combined Map */}
                <div className="hidden md:block">
                    <svg viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`} className="w-full" style={{ display: 'block' }}>
                        <MapDefs />
                        <UaeMapGroup />
                        <MalabarMapGroup />
                        
                        {connectionPath && (
                            <motion.path
                                d={connectionPath}
                                fill="none"
                                stroke="hsl(var(--brand-red) / 0.3)"
                                strokeWidth={1}
                                strokeDasharray="3 6"
                                strokeLinecap="round"
                                initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
                                whileInView={reduce ? undefined : { pathLength: 1, opacity: hovered === 'UAE' ? 0.8 : 0.3 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 1.6, ease: 'easeInOut', delay: 1.0 }}
                                style={{
                                    opacity: hovered === 'UAE' ? 0.8 : undefined,
                                    transition: 'opacity 0.3s',
                                }}
                            />
                        )}
                        <MarkersGroup pointsList={points} />
                    </svg>
                </div>

                {/* Mobile View: Stacked Maps */}
                <div className="block md:hidden flex flex-col gap-12">
                    {/* KERALA MOBILE MAP */}
                    <div className="relative w-full">
                        <span className="eyebrow mb-4 block text-center">KERALA</span>
                        {/* Adjust viewBox to frame just the Malabar area bounds */}
                        <svg viewBox={`${bounds.malabarBounds.x - 40} ${bounds.malabarBounds.y - 40} ${bounds.malabarBounds.width + 80} ${bounds.malabarBounds.height + 80}`} className="w-full" style={{ display: 'block' }}>
                            <MapDefs />
                            <MalabarMapGroup />
                            <MarkersGroup pointsList={malabarPoints} delayStart={0} />
                        </svg>
                    </div>

                    {/* UAE MOBILE MAP */}
                    <div className="relative w-full">
                        <span className="eyebrow mb-4 block text-center">UNITED ARAB EMIRATES</span>
                        {/* Adjust viewBox to frame just the UAE bounds */}
                        <svg viewBox={`${bounds.uaeBounds.x - 40} ${bounds.uaeBounds.y - 40} ${bounds.uaeBounds.width + 80} ${bounds.uaeBounds.height + 80}`} className="w-full" style={{ display: 'block' }}>
                            <MapDefs />
                            <UaeMapGroup />
                            <MarkersGroup pointsList={uaePoints} delayStart={0} />
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    );
}
