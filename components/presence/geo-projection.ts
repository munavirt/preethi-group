import type { GeoProjection } from 'd3-geo';
import { geoMercator, geoPath } from 'd3-geo';
import malabarGeo from '@/lib/data/geo/malabar.geo.json';
import uaeGeo from '@/lib/data/geo/uae.geo.json';

export type ProjectedPoint = { x: number; y: number };

function roundPath(d: string): string {
    return d.replace(/-?\d+\.\d+/g, (m) => parseFloat(m).toFixed(2));
}

export type DistrictPath = {
    name: string;
    d: string;
};

export type MapBounds = {
    width: number;
    height: number;
    malabarOutline: string;
    malabarDistricts: DistrictPath[];
    uaeOutline: string;
    project: (coords: [number, number], region?: 'malabar' | 'uae') => ProjectedPoint | null;
    malabarBounds: { x: number; y: number; width: number; height: number };
    uaeBounds: { x: number; y: number; width: number; height: number };
};

/**
 * Builds geographic projections for two regions:
 * - UAE on the LEFT (smaller)
 * - Malabar / North Kerala on the RIGHT (larger, dominant)
 *
 * Both are projected independently and positioned on the same SVG canvas.
 */
export function buildMapBounds(width: number, height: number): MapBounds {
    const allowedDistricts = ['Kannur', 'Kozhikode', 'Wayanad', 'Malappuram', 'Palakkad', 'Thrissur'];
    const malabarFC: GeoJSON.FeatureCollection = {
        ...malabarGeo,
        features: malabarGeo.features.filter(f => allowedDistricts.includes((f.properties as { district?: string }).district ?? '')),
    } as GeoJSON.FeatureCollection;
    const uaeFC = uaeGeo as GeoJSON.FeatureCollection;

    // --- UAE projection (LEFT, smaller) ---
    const uaeProjection: GeoProjection = geoMercator();
    uaeProjection.fitExtent(
        [
            [width * 0.03, height * 0.12],
            [width * 0.30, height * 0.62],
        ],
        uaeFC
    );
    const uaePathBuilder = geoPath(uaeProjection);
    const uaeOutline = roundPath(uaePathBuilder(uaeFC) ?? '');
    const uaeBounds = uaePathBuilder.bounds(uaeFC);

    // --- Malabar projection (RIGHT, larger, dominant) ---
    const malabarProjection: GeoProjection = geoMercator();
    malabarProjection.fitExtent(
        [
            [width * 0.36, height * 0.06],
            [width * 0.98, height * 0.94],
        ],
        malabarFC
    );
    const malabarPathBuilder = geoPath(malabarProjection);
    const malabarOutline = roundPath(malabarPathBuilder(malabarFC) ?? '');
    const malabarBounds = malabarPathBuilder.bounds(malabarFC);

    // Individual district paths
    const malabarDistricts: DistrictPath[] = malabarFC.features.map((f) => ({
        name: (f.properties as { district?: string }).district ?? 'Unknown',
        d: roundPath(malabarPathBuilder(f) ?? ''),
    }));

    // Unified project function
    const project = (
        coords: [number, number],
        region?: 'malabar' | 'uae'
    ): ProjectedPoint | null => {
        const proj = region === 'uae' ? uaeProjection : malabarProjection;
        const p = proj(coords);
        return p ? { x: p[0], y: p[1] } : null;
    };

    return {
        width,
        height,
        malabarOutline,
        malabarDistricts,
        uaeOutline,
        project,
        malabarBounds: {
            x: malabarBounds[0][0],
            y: malabarBounds[0][1],
            width: malabarBounds[1][0] - malabarBounds[0][0],
            height: malabarBounds[1][1] - malabarBounds[0][1],
        },
        uaeBounds: {
            x: uaeBounds[0][0],
            y: uaeBounds[0][1],
            width: uaeBounds[1][0] - uaeBounds[0][0],
            height: uaeBounds[1][1] - uaeBounds[0][1],
        },
    };
}