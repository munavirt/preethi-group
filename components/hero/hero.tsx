'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
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
    <section id="top" className="relative h-[100vh] w-full overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex h-full items-center justify-center pt-16 md:pt-20">
        <div className="site-container flex flex-col items-center text-center">
          <motion.div
            className="flex max-w-4xl flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={reduce ? undefined : container}
          >


            <motion.h1
              className="text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-7xl lg:text-[80px]"
              variants={reduce ? undefined : item}
            >
              Growing businesses.
              <br />
              Creating lasting connections.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-pretty text-base leading-[1.6] text-white/80 sm:text-lg md:mt-8"
              variants={reduce ? undefined : item}
            >
              A growing group of businesses built around fashion, retail and people.
            </motion.p>

            <motion.div
              className="mt-10 md:mt-12"
              variants={reduce ? undefined : item}
            >
              <a
                href="#businesses"
                className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-white/90"
              >
                <span>Explore our businesses</span>
                <ArrowRight className="ml-2 h-4 w-4 text-brand-red transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50"
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </motion.div>
    </section>
  );
}
