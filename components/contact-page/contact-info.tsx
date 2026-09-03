'use client';

import { Reveal } from '@/components/motion/reveal';
import { groupContact } from '@/lib/data/site';

export function ContactInfo() {
  return (
    <section className="bg-background py-16 md:py-24 border-b border-border">
      <div className="site-container">
        
        <Reveal as="span" className="eyebrow mb-12 md:mb-16 inline-block">
          GET IN TOUCH
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* General Enquiries */}
          <div className="flex flex-col">
            <Reveal as="h3" className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              GENERAL ENQUIRIES
            </Reveal>
            <Reveal delay={0.1}>
              <a 
                href={`mailto:${groupContact.generalEmail}`}
                className="text-lg md:text-xl font-serif text-muted-foreground hover:text-brand-red transition-colors duration-300"
              >
                {groupContact.generalEmail}
              </a>
            </Reveal>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <Reveal as="h3" className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              PHONE
            </Reveal>
            <Reveal delay={0.15}>
              <a 
                href={`tel:${groupContact.phone.replace(/[^0-9+]/g, '')}`}
                className="text-lg md:text-xl font-serif text-muted-foreground hover:text-brand-red transition-colors duration-300"
              >
                {groupContact.phone}
              </a>
            </Reveal>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <Reveal as="h3" className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              LOCATION
            </Reveal>
            <Reveal delay={0.2}>
              <span className="text-lg md:text-xl font-serif text-muted-foreground">
                {groupContact.location}
              </span>
            </Reveal>
          </div>

          {/* Business Enquiries */}
          <div className="flex flex-col">
            <Reveal as="h3" className="text-sm font-bold tracking-widest text-foreground uppercase mb-4">
              BUSINESS ENQUIRIES
            </Reveal>
            <Reveal delay={0.25}>
              <a 
                href={`mailto:${groupContact.businessEmail}`}
                className="text-lg md:text-xl font-serif text-muted-foreground hover:text-brand-red transition-colors duration-300"
              >
                {groupContact.businessEmail}
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
