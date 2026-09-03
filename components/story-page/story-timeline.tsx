'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { businesses } from '@/lib/data/businesses';

type TimelineStep = {
  id: string;
  number: string;
  eyebrow: string;
  heading: string;
  text: string;
  text2?: string;
  image?: string;
  imageAlt?: string;
  cta?: { label: string; href: string };
  visual?: React.ReactNode;
};

// Extracted verifiable data logic allowing easy future updates
const timelineSteps: TimelineStep[] = [
  {
    id: 'step-1',
    number: '01',
    eyebrow: 'THE BEGINNING',
    heading: 'It started with a simple ambition.',
    text: 'To build a business people could trust, serve customers well and create something that could grow with the community around it.',
    text2: 'What began as a single chapter would eventually become the foundation for a wider group of businesses.',
  },
  {
    id: 'step-2',
    number: '02',
    eyebrow: 'THE FIRST CHAPTER',
    heading: 'The first business established the foundation for everything that followed — introducing the values, relationships and experience that would shape the group.',
    text: '[YEAR — TO BE UPDATED]',
    image: businesses[0].image,
    imageAlt: businesses[0].imageAlt,
  },
  {
    id: 'step-3',
    number: '03',
    eyebrow: 'GROWING THE BUSINESS',
    heading: 'One business became a foundation for growth.',
    text: 'As experience grew, so did the opportunity to build something larger. New ideas, new relationships and new possibilities gradually expanded the group\'s journey.',
    image: businesses[1].image,
    imageAlt: businesses[1].imageAlt,
  },
  {
    id: 'step-4',
    number: '04',
    eyebrow: 'THE GROUP',
    heading: 'Different chapters began becoming one story.',
    text: 'With more than one business under the wider group, Preethi Group began to take shape as something larger — bringing together different identities while remaining connected by a common foundation.',
    cta: { label: 'EXPLORE OUR BUSINESSES', href: '/businesses' }
  },
  {
    id: 'step-5',
    number: '05',
    eyebrow: 'EXPANDING THE JOURNEY',
    heading: 'From Kerala to beyond.',
    text: 'As the group continued to evolve, its journey reached beyond its original roots, connecting the business with new places and communities.',
    visual: (
      <div className="flex items-center gap-6 mt-8 py-8 border-y border-border opacity-80">
        <span className="font-serif text-3xl md:text-4xl text-foreground tracking-widest uppercase">KERALA</span>
        <ArrowRight className="w-8 h-8 text-brand-red" />
        <span className="font-serif text-3xl md:text-4xl text-foreground tracking-widest uppercase">UAE</span>
      </div>
    )
  },
  {
    id: 'step-6',
    number: '06',
    eyebrow: 'TODAY',
    heading: 'A growing group, still grounded in what matters.',
    text: 'Today, Preethi Group brings together businesses with their own identities, experiences and customers — connected by the foundations that have shaped the group from the beginning.',
  }
];

export function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Smooth the progress line
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-background py-20 md:py-32 relative overflow-hidden">
      <div className="site-container relative" ref={containerRef}>
        
        {/* The Continuous Vertical Line (Desktop: Center, Mobile: Left edge) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-border transform md:-translate-x-1/2 z-0">
          <motion.div 
            className="w-full bg-brand-red origin-top"
            style={{ scaleY, height: '100%' }}
          />
        </div>

        <div className="flex flex-col relative z-10">
          {timelineSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem 
                key={step.id} 
                step={step} 
                isEven={isEven} 
              />
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

function TimelineItem({ step, isEven }: { step: TimelineStep, isEven: boolean }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "center center"]
  });

  // Fade and slide in content as it scrolls into view
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  // Make the large background number subtly activate
  const numberOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.03, 0.05, 0.15]);
  const numberColor = useTransform(scrollYProgress, [0, 1], ["hsl(var(--muted-foreground))", "hsl(var(--brand-red))"]);

  return (
    <div 
      ref={itemRef} 
      className={`relative w-full flex flex-col md:flex-row py-16 md:py-32 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
    >
      {/* 
        On desktop, the content alternates left/right of the center line.
        On mobile, it sits entirely to the right of the left-aligned line.
      */}
      <motion.div 
        style={{ opacity, y }}
        className="w-full pl-16 pr-0 md:px-12 md:w-1/2 flex flex-col relative z-10"
      >
        {/* Large Decorative Number */}
        <motion.div 
          className="absolute -top-12 -left-4 md:-top-20 md:left-4 font-serif text-[120px] md:text-[200px] leading-none font-bold select-none pointer-events-none -z-10"
          style={{ opacity: numberOpacity, color: numberColor }}
        >
          {step.number}
        </motion.div>

        <span className="eyebrow mb-6 text-foreground tracking-widest uppercase">
          {step.eyebrow}
        </span>
        
        <h2 className="font-serif text-balance text-3xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-foreground mb-8">
          {step.heading}
        </h2>
        
        <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg mb-6">
          {step.text}
        </p>

        {step.text2 && (
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {step.text2}
          </p>
        )}

        {step.visual && (
          <div className="mt-4">
            {step.visual}
          </div>
        )}

        {step.cta && (
          <div className="mt-8">
            <a href={step.cta.href} className="link-arrow group inline-flex items-center text-sm font-semibold tracking-widest text-foreground hover:text-brand-red">
              <span className="border-b border-foreground pb-1 transition-colors group-hover:border-brand-red uppercase">
                {step.cta.label}
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}

        {step.image && (
          <div className="mt-12 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={step.image}
              alt={step.imageAlt || 'Story image'}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
