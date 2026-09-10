import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { BusinessesHero } from '@/components/businesses-page/businesses-hero';
import { BusinessesIntro } from '@/components/businesses-page/businesses-intro';
import { BusinessDetailSection } from '@/components/businesses-page/business-detail-section';
import { SharedFoundation } from '@/components/businesses-page/shared-foundation';
import { BusinessesCta } from '@/components/businesses-page/businesses-cta';
import { businesses } from '@/lib/data/businesses';

export const metadata = {
  title: 'Our Businesses | Preethi Group',
  description: 'Discover the businesses that make up Preethi Group, including Preethi Silks and Calicut Fashion Bazar.',
};

export default function BusinessesPage() {
  return (
    <>
      <Navbar />
      <main>
        <BusinessesHero />
        <BusinessesIntro />
        {businesses.map((business, index) => (
          <BusinessDetailSection key={business.number} business={business} index={index} />
        ))}
        <SharedFoundation />
        <BusinessesCta />
      </main>
      <Footer />
    </>
  );
}
