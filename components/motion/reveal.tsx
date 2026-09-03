'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'li' | 'p' | 'h2' | 'h3' | 'blockquote';
};

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'span' | 'li' | 'p' | 'h2' | 'h3';
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}

export { fadeUp, fadeIn, stagger };
