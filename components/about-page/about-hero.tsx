'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function AboutHero() {
  const reduce = useReducedMotion();

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
          className="flex max-w-4xl flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={reduce ? undefined : container}
        >
          <motion.span
            className="eyebrow mb-6 text-brand-red"
            variants={reduce ? undefined : item}
          >
            About Preethi Group
          </motion.span>

          <motion.h1
            className="font-serif text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[80px]"
            variants={reduce ? undefined : item}
          >
            Built on trust.<br />
            Growing with purpose.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:mt-10"
            variants={reduce ? undefined : item}
          >
            Preethi Group brings together businesses built on trust, strong relationships and a long-term commitment to the people they serve.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
