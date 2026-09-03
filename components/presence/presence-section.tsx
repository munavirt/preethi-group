'use client';

import { PresenceIntro } from './presence-intro';
import { PresenceMap } from './presence-map';
import { PresenceLegend } from './presence-legend';

export function PresenceSection() {
  return (
    <section id="presence" className="bg-[#FAFAF8] py-16 md:py-24">
      <div className="site-container">
        <PresenceIntro />
        <PresenceMap />
        <PresenceLegend />
      </div>
    </section>
  );
}