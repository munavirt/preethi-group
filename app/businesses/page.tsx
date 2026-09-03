import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { BusinessesHero } from '@/components/businesses-page/businesses-hero';
import { BusinessesIntro } from '@/components/businesses-page/businesses-intro';
import { PreethiSilksSection } from '@/components/businesses-page/preethi-silks-section';
import { CalicutFashionSection } from '@/components/businesses-page/calicut-fashion-section';
import { SharedFoundation } from '@/components/businesses-page/shared-foundation';
import { BusinessesLookingAhead } from '@/components/businesses-page/businesses-looking-ahead';
import { BusinessesCta } from '@/components/businesses-page/businesses-cta';

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
        <PreethiSilksSection />
        <CalicutFashionSection />
        <SharedFoundation />
        <BusinessesLookingAhead />
        <BusinessesCta />
      </main>
      <Footer />
    </>
  );
}
