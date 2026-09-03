import { Navbar } from '@/components/navbar/navbar';
import { Hero } from '@/components/hero/hero';
import { AboutSection } from '@/components/about/about-section';
import { BusinessesSection } from '@/components/businesses/businesses-section';
import { PresenceSection } from '@/components/presence/presence-section';
import { StorySection } from '@/components/story/story-section';
import { LeadershipSection } from '@/components/leadership/leadership-section';
import { TrustSection } from '@/components/trust/trust-section';
import { StatsSection } from '@/components/stats/stats-section';
import { ContactSection } from '@/components/contact/contact-section';
import { Footer } from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <BusinessesSection />
        <PresenceSection />
        <StorySection />
        <LeadershipSection />
        <TrustSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
