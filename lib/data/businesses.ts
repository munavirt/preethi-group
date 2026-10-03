export type Business = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  shortIntro: string;
  category: string;
  location?: string;
};

export const businesses: Business[] = [
  {
    number: '01',
    name: 'Preethi Silks',
    tagline: 'Heritage in every weave',
    description:
      'A destination for premium silk and traditional Indian fashion. Preethi Silks brings together craftsmanship, bridal collections and everyday elegance — serving customers who value fabric, finish and a personal touch.',
    image: '/images/preethi-silks.webp',
    imageAlt:
      'A traditional Indian saree with golden bangles displayed in a premium silk showroom',
    href: '#preethi-silks',
    shortIntro: 'A fashion and textile business built around quality, tradition and the experience of its customers.',
    category: 'Fashion & Textiles',
  },
  {
    number: '02',
    name: 'Calicut Fashion Bazar',
    tagline: 'Fashion for the whole family',
    description:
      'A modern fashion retail experience offering clothing and lifestyle choices for the entire family. Calicut Fashion Bazar combines variety, value and a welcoming store environment across its locations.',
    image: '/images/calicut-fashion-bazar.jpeg',
    imageAlt:
      'Colourful display of traditional Indian clothing in a bright boutique store',
    href: '#calicut-fashion-bazar',
    shortIntro: 'A retail business serving customers with a broad fashion offering and a focus on everyday shopping experiences.',
    category: 'Fashion Retail',
  },
  {
    number: '03',
    name: 'P Decor',
    tagline: 'Your World of Home Décor',
    description:
      'A new world of beautiful home décor, bringing together elegant accents, statement pieces and carefully curated collections to add character, style and warmth to every space.',
    image: '/p-decor.jpg',
    imageAlt:
      'Premium, warm, modern, elegant, and sophisticated home decor retail brand image showing elegant accents and statement pieces',
    href: '#p-decor',
    shortIntro: 'A new world of home décor, designed to make every space feel special.',
    category: 'Home Décor',
    location: 'Malappuram, Kerala',
  },
];