export type LocationType = 'preethi' | 'calicut-fashion-bazar';
export type LocationRegion = 'malabar' | 'uae';

export type PresenceLocation = {
  name: string;
  business: string;
  type: LocationType;
  region: LocationRegion;
  coordinates: [number, number]; // [longitude, latitude]
};

export const presenceLocations: PresenceLocation[] = [
  {
    name: 'Kondotty',
    business: 'Preethi Silks',
    type: 'preethi',
    region: 'malabar',
    coordinates: [75.96, 11.20],
  },
  {
    name: 'Feroke',
    business: 'Preethi Silks',
    type: 'preethi',
    region: 'malabar',
    coordinates: [75.83, 11.19],
  },
  {
    name: 'Kuttiady',
    business: 'Preethi Silks',
    type: 'preethi',
    region: 'malabar',
    coordinates: [75.88, 11.60],
  },
  {
    name: 'Palakkad',
    business: 'Preethi Silks',
    type: 'preethi',
    region: 'malabar',
    coordinates: [76.6548, 10.7867],
  },
  {
    name: 'Malappuram',
    business: 'Preethi Silks',
    type: 'preethi',
    region: 'malabar',
    coordinates: [76.0711, 11.0510],
  },
  {
    name: 'Calicut',
    business: 'Calicut Fashion Bazar',
    type: 'calicut-fashion-bazar',
    region: 'malabar',
    coordinates: [75.80, 11.35],
  },
  {
    name: 'UAE',
    business: 'Preethi Silks',
    type: 'preethi',
    region: 'uae',
    coordinates: [54.0, 24.0],
  },
];