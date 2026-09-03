export type Business = {
  number: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const businesses: Business[] = [
  {
    number: '01',
    name: 'Preethi Silks',
    tagline: 'Heritage in every weave',
    description:
      'A destination for premium silk and traditional Indian fashion. Preethi Silks brings together craftsmanship, bridal collections and everyday elegance — serving customers who value fabric, finish and a personal touch.',
    image:
      'https://images.pexels.com/photos/5447529/pexels-photo-5447529.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt:
      'A traditional Indian saree with golden bangles displayed in a premium silk showroom',
    href: '#preethi-silks',
  },
  {
    number: '02',
    name: 'Calicut Fashion Bazar',
    tagline: 'Fashion for the whole family',
    description:
      'A modern fashion retail experience offering clothing and lifestyle choices for the entire family. Calicut Fashion Bazar combines variety, value and a welcoming store environment across its locations.',
    image:
      'https://images.pexels.com/photos/8886949/pexels-photo-8886949.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt:
      'Colourful display of traditional Indian clothing in a bright boutique store',
    href: '#calicut-fashion-bazar',
  },
];