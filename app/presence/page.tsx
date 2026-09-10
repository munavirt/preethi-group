import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { PresenceHero } from '@/components/presence-page/presence-hero';
import { PresencePageIntro } from '@/components/presence-page/presence-page-intro';
import { PresenceFullMap } from '@/components/presence-page/presence-full-map';
import { PresenceLocationList } from '@/components/presence-page/presence-location-list';
import { PresenceBeyondBorders } from '@/components/presence-page/presence-beyond-borders';
import { PresenceLookingAhead } from '@/components/presence-page/presence-looking-ahead';
import { PresenceCta } from '@/components/presence-page/presence-cta';

export const metadata = {
  title: 'Our Presence | Preethi Group',
  description: 'Explore Preethi Group\'s presence across Kerala and the UAE and discover the locations connected to our growing group of businesses.',
};

export default function PresencePage() {
  return (
    <>
      <Navbar />
      <main>
        <PresenceHero />
        <PresencePageIntro />
        <PresenceFullMap />
        <PresenceLocationList />
        <PresenceBeyondBorders />
        <PresenceLookingAhead />
        <PresenceCta />
      </main>
      <Footer />
    </>
  );
}
