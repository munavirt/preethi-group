import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { StoryHero } from '@/components/story-page/story-hero';
import { StoryTimeline } from '@/components/story-page/story-timeline';
import { StoryValues } from '@/components/story-page/story-values';
import { StoryLookingAhead } from '@/components/story-page/story-looking-ahead';
import { StoryCta } from '@/components/story-page/story-cta';

export const metadata = {
  title: 'Our Story | Preethi Group',
  description: 'Discover the story behind Preethi Group, from its beginnings and growing businesses to its expanding presence and vision for the future.',
};

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <StoryHero />
        <StoryTimeline />
        <StoryValues />
        <StoryLookingAhead />
        <StoryCta />
      </main>
      <Footer />
    </>
  );
}
