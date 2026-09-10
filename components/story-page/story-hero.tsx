'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export function StoryHero() {
  const reduce = useReducedMotion();
  const heroImage = '/images/story.webp';

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative w-full bg-background pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="site-container flex flex-col justify-center">
        <motion.div
          className="flex max-w-4xl flex-col items-start relative z-10"
          initial="hidden"
          animate="visible"
          variants={reduce ? undefined : container}
        >
          <motion.span
            className="eyebrow mb-6 text-brand-red"
            variants={reduce ? undefined : item}
          >
            OUR STORY
          </motion.span>

          <motion.h1
            className="font-serif text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[80px]"
            variants={reduce ? undefined : item}
          >
            From where we began<br />
            to where we're going.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:mt-10 mb-16 md:mb-24"
            variants={reduce ? undefined : item}
          >
            The story of Preethi Group is shaped by the businesses we've built and the milestones that brought them together.
          </motion.p>
        </motion.div>

        {/* Large Atmospheric Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-muted"
        >
          <Image
            src={heroImage}
            alt="Atmospheric brand imagery"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          {/* Subtle gradient overlay to soften the image edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
