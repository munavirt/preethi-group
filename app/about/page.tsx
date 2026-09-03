import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { AboutHero } from '@/components/about-page/about-hero';
import { WhoWeAre } from '@/components/about-page/who-we-are';
import { WhatWeBelieve } from '@/components/about-page/what-we-believe';
import { OurApproach } from '@/components/about-page/our-approach';
import { LookingAhead } from '@/components/about-page/looking-ahead';
import { FinalCta } from '@/components/about-page/final-cta';

export const metadata = {
  title: 'About Preethi Group | Our Business & Vision',
  description: 'Preethi Group is a growing business group with established businesses including Preethi Silks and Calicut Fashion Bazar.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <WhoWeAre />
        <WhatWeBelieve />
        <OurApproach />
        <LookingAhead />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
