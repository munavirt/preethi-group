'use client';

import { Reveal } from '@/components/motion/reveal';
import { presenceLocations } from '@/lib/data/locations';

export function PresenceLocationList() {
  const keralaLocations = presenceLocations.filter(loc => loc.region !== 'uae');
  const uaeLocations = presenceLocations.filter(loc => loc.region === 'uae');

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Kerala List */}
          <div>
            <Reveal as="span" className="eyebrow mb-8 inline-block text-brand-red">
              KERALA
            </Reveal>
            <div className="flex flex-col border-t border-border">
              {keralaLocations.map((loc, index) => {
                const mapUrl = loc.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.business + ' ' + loc.name)}`;
                return (
                <Reveal 
                  key={loc.name} 
                  delay={index * 0.05}
                  className="border-b border-border hover:border-foreground transition-colors duration-300 block"
                >
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 w-full">
                    <div className="flex items-baseline gap-6">
                      <span className="text-sm font-medium text-muted-foreground w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-2xl md:text-3xl font-serif text-foreground transition-colors group-hover:text-brand-red">
                        {loc.name}
                      </span>
                    </div>
                    {/* Additional metadata if available (placeholder for now) */}
                    <span className="mt-2 sm:mt-0 ml-12 sm:ml-0 text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View on Map
                    </span>
                  </a>
                </Reveal>
                );
              })}
            </div>
          </div>

          {/* UAE List */}
          <div>
            <Reveal as="span" className="eyebrow mb-8 inline-block text-brand-red">
              UAE
            </Reveal>
            <div className="flex flex-col border-t border-border">
              {uaeLocations.map((loc, index) => {
                const mapUrl = loc.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.business + ' ' + loc.name)}`;
                return (
                <Reveal 
                  key={loc.name} 
                  delay={index * 0.05}
                  className="border-b border-border hover:border-foreground transition-colors duration-300 block"
                >
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 w-full">
                    <div className="flex items-baseline gap-6">
                      <span className="text-sm font-medium text-muted-foreground w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-2xl md:text-3xl font-serif text-foreground transition-colors group-hover:text-brand-red">
                        {loc.name}
                      </span>
                    </div>
                    <span className="mt-2 sm:mt-0 ml-12 sm:ml-0 text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View on Map
                    </span>
                  </a>
                </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
