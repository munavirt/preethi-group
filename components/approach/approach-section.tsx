'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import APPROACH_IMAGE from "../../public/images/support.webp";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}



const principles = [
  {
    number: '01',
    title: 'LONG-TERM THINKING',
    description:
      'We look beyond immediate opportunities, focusing on sustainable businesses, meaningful partnerships and lasting value.',
  },
  {
    number: '02',
    title: 'ENTREPRENEURIAL MINDSET',
    description:
      'We remain open to new ideas, emerging opportunities and new ways of creating value.',
  },
  {
    number: '03',
    title: 'RESPONSIBLE GROWTH',
    description:
      'We believe sustainable growth comes from thoughtful decisions, strong relationships and a long-term perspective.',
  },
  {
    number: '04',
    title: 'A BROADER PERSPECTIVE',
    description:
      'Experience across businesses and sectors gives us a wider perspective when evaluating opportunities and building for the future.',
  },
];

const DesktopApproach = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Only apply GSAP scroll pinning on desktop AND when user allows motion
    mm.add({
      isDesktop: "(min-width: 1024px)",
      isReducedMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isDesktop, isReducedMotion } = context.conditions as any;

      // If mobile or reduced motion, let CSS handle the fallback layout natively
      if (!isDesktop || isReducedMotion) return;

      const items = gsap.utils.toArray<HTMLElement>('.principle-item', principlesRef.current);
      if (!items.length) return;

      const itemHeight = items[0].offsetHeight;
      if (itemHeight === 0) return; // Failsafe if hidden

      const totalTranslate = -(itemHeight * (items.length - 1));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Pin as soon as section hits top of viewport
          end: "+=300%",    // Provide 3 screens worth of scroll distance
          pin: true,
          scrub: 0.5,       // Smooth scrubbing
        }
      });

      const stepDuration = 1;

      // 1. Translate the list container upwards
      tl.to(principlesRef.current, {
        y: totalTranslate,
        ease: "none",
        duration: items.length - 1
      }, 0);

      // 2. Subtle image scale over the whole duration
      tl.to(imageRef.current, {
        scale: 1.05,
        ease: "none",
        duration: items.length - 1
      }, 0);

      // 3. Set initial states via GSAP to override CSS
      gsap.set(items, { opacity: 0.3 });
      gsap.set(items[0], { opacity: 1 });

      const titles = items.map(item => item.querySelector('.principle-title'));
      gsap.set(titles, { x: 0 });
      gsap.set(titles[0], { x: 10 });

      // 4. Animate each principle's active/inactive states
      items.forEach((item, i) => {
        const title = titles[i];

        // Active state
        const activateItem = { opacity: 1, duration: 0.4, ease: "power2.out" };
        const activateTitle = { x: 10, duration: 0.4, ease: "power2.out" };

        // Inactive state
        const deactivateItem = { opacity: 0.3, duration: 0.4, ease: "power2.out" };
        const deactivateTitle = { x: 0, duration: 0.4, ease: "power2.out" };

        if (i > 0) {
          // Fade in as it approaches the center
          tl.to(item, activateItem, i * stepDuration - 0.2);
          if (title) tl.to(title, activateTitle, i * stepDuration - 0.2);
        }

        if (i < items.length - 1) {
          // Fade out as it leaves the center
          tl.to(item, deactivateItem, i * stepDuration + 0.2);
          if (title) tl.to(title, deactivateTitle, i * stepDuration + 0.2);
        }
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="hidden lg:flex h-screen motion-reduce:h-auto motion-reduce:py-32 w-full bg-background overflow-hidden items-center border-t border-border"
    >
      <div className="site-container h-full w-full">
        <div className="grid grid-cols-12 gap-16 xl:gap-24 items-center h-full max-w-[1400px] mx-auto">

          {/* Left Column - Fixed */}
          <div className="col-span-5 flex flex-col justify-center h-full">
            <span className="eyebrow mb-6 block uppercase tracking-widest text-brand-red font-medium text-sm">
              OUR APPROACH
            </span>
            <h2 className="text-5xl xl:text-6xl font-serif font-bold leading-[1.05] tracking-[-0.02em] text-foreground mb-8 max-w-sm text-balance">
              A LONG-TERM VIEW OF WHAT'S POSSIBLE.
            </h2>
            <p className="text-base xl:text-lg leading-relaxed text-muted-foreground max-w-[450px]">
              Across businesses, sectors and opportunities, we take a thoughtful approach to building lasting value — combining entrepreneurial thinking with a long-term perspective.
            </p>
          </div>

          {/* Right Column - GSAP Scrolling Mask */}
          <div className="col-span-7 flex flex-col h-[85vh] motion-reduce:h-auto justify-between">

            {/* Image (Pinned visually) */}
            <div className="w-full h-[45vh] motion-reduce:h-[55vh] relative rounded-2xl overflow-hidden bg-muted flex-shrink-0">
              <Image
                ref={imageRef}
                src={APPROACH_IMAGE}
                alt="Modern architecture representing long-term thinking and scale"
                fill
                sizes="50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Scrolling Principles */}
            <div className="w-full h-[35vh] motion-reduce:h-auto relative overflow-hidden mt-8">
              {/* Fade masks for top/bottom of the scroll area */}
              <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none motion-reduce:hidden" />
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none motion-reduce:hidden" />

              <div ref={principlesRef} className="w-full flex flex-col pt-[7.5vh] motion-reduce:pt-0 motion-reduce:gap-8">
                {principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="principle-item h-[20vh] motion-reduce:h-auto flex-shrink-0 flex flex-col justify-center px-4 opacity-30 motion-reduce:opacity-100"
                  >
                    <div className="border-l-2 border-brand-red/30 pl-6 h-full flex flex-col justify-center">
                      <span className="text-xs font-bold tracking-widest text-brand-red mb-3 font-mono">
                        {principle.number}
                      </span>
                      <h3 className="principle-title text-xl xl:text-2xl font-bold tracking-tight text-foreground mb-3 motion-reduce:translate-x-0">
                        {principle.title}
                      </h3>
                      <p className="principle-desc text-base text-muted-foreground leading-relaxed max-w-md">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const MobileApproach = () => {
  return (
    <section className="flex flex-col lg:hidden bg-background py-20 md:py-32 border-t border-border overflow-hidden">
      <div className="site-container">

        <Reveal as="span" className="eyebrow mb-6 block uppercase tracking-widest text-brand-red font-medium text-sm">
          OUR APPROACH
        </Reveal>

        <Reveal as="h2" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.05] tracking-[-0.02em] text-foreground mb-6 text-balance">
          A LONG-TERM VIEW OF WHAT'S POSSIBLE.
        </Reveal>

        <Reveal as="p" className="text-base md:text-lg leading-relaxed text-muted-foreground mb-12 max-w-xl">
          Across businesses, sectors and opportunities, we take a thoughtful approach to building lasting value — combining entrepreneurial thinking with a long-term perspective.
        </Reveal>

        <Reveal className="w-full aspect-[4/3] md:aspect-[16/9] relative rounded-2xl overflow-hidden bg-muted mb-16">
          <Image
            src={APPROACH_IMAGE}
            alt="Modern architecture representing long-term thinking and scale"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <Stagger className="flex flex-col gap-12">
          {principles.map((principle) => (
            <StaggerItem key={principle.number} className="flex flex-col border-l-2 border-brand-red/30 pl-6 py-1">
              <span className="text-xs font-bold tracking-widest text-brand-red mb-3 font-mono">
                {principle.number}
              </span>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground mb-3">
                {principle.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {principle.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
};

export function ApproachSection() {
  return (
    <div id="approach">
      <DesktopApproach />
      <MobileApproach />
    </div>
  );
}
