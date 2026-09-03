'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const boardMembers = [
  {
    number: '01',
    name: 'Board Member Name',
    role: 'Managing Director',
    description: 'Leading the group with a long-term vision, focused on sustainable growth and strong business relationships.',
    image: '/images/board/member-01.jpg',
  },
  {
    number: '02',
    name: 'Board Member Name',
    role: 'Chief Executive Officer',
    description: 'Driving operational excellence and building businesses that create lasting value for customers and communities.',
    image: '/images/board/member-02.jpg',
  },
  {
    number: '03',
    name: 'Board Member Name',
    role: 'Director',
    description: 'Supporting the group\'s continued growth through strategic thinking, experience and a strong commitment to people.',
    image: '/images/board/member-03.jpg',
  },
  {
    number: '04',
    name: 'Board Member Name',
    role: 'Director',
    description: 'Helping shape the group\'s future with a focus on responsible growth, customer trust and lasting impact.',
    image: '/images/board/member-04.jpg',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function LeadershipSection() {
  const reduce = useReducedMotion();

  return (
    <section id="leadership" className="bg-background py-20 md:py-32">
      <div className="site-container">
        {/* Introduction */}
        <motion.div
          className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reduce ? undefined : containerVariants}
        >
          <motion.span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red" variants={reduce ? undefined : itemVariants}>
            Leadership
          </motion.span>
          <motion.h2 
            className="mb-6 text-balance text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-6xl"
            variants={reduce ? undefined : itemVariants}
          >
            The people behind<br />Preethi Group.
          </motion.h2>
          <motion.p 
            className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            variants={reduce ? undefined : itemVariants}
          >
            The leadership and vision driving our businesses forward, with a commitment to growth, people and lasting relationships.
          </motion.p>
        </motion.div>

        {/* Board Members Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-8 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reduce ? undefined : containerVariants}
        >
          {boardMembers.map((member) => (
            <motion.div key={member.number} className="group flex flex-col" variants={reduce ? undefined : itemVariants}>
              
              <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-[11px] text-brand-red">│</span>
                  <span className="font-serif text-[15px] font-medium text-muted-foreground">{member.number}</span>
                </div>
                
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground">
                  {member.role}
                </span>
                
                <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                  {member.name}
                </h3>
                
                <p className="text-pretty text-[14px] leading-[1.6] text-muted-foreground">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
