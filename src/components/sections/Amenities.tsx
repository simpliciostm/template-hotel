import {
  BedDouble,
  Car,
  KeyRound,
  Refrigerator,
  ShowerHead,
  Snowflake,
  Tv,
  Wifi,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { hotel } from '../../data/hotel';
import type { AmenityIconId } from '../../types/hotel';
import { Reveal } from '../motion/Reveal';

const iconByAmenity: Record<AmenityIconId, LucideIcon> = {
  wifi: Wifi,
  snowflake: Snowflake,
  tv: Tv,
  refrigerator: Refrigerator,
  shower: ShowerHead,
  bed: BedDouble,
  key: KeyRound,
  car: Car,
};

export function Amenities() {
  const amenities = hotel.amenities.items.filter((amenity) => amenity.enabled);

  return (
    <section id="comodidades" className="bg-canvas py-section">
      <div className="mx-auto w-full max-w-site px-gutter">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(16rem,0.28fr)] lg:items-end">
          <div className="max-w-[42rem]">
            <Reveal delay={0}>
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
                {hotel.amenities.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-display text-[clamp(2rem,9vw,2.375rem)] font-semibold leading-[1.04] tracking-normal text-ink sm:text-[clamp(2.25rem,4vw,3.5rem)] sm:leading-[1.02]">
                {hotel.amenities.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <p className="max-w-[20rem] text-sm font-medium leading-6 text-ink-muted lg:max-w-[18rem] lg:pb-2">
              {hotel.amenities.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-9 grid grid-cols-2 items-start gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-12 sm:grid-cols-3 sm:gap-y-10 sm:pt-10 md:grid-cols-4 xl:grid-cols-8 xl:gap-x-8">
          {amenities.map((amenity, index) => {
            const Icon = iconByAmenity[amenity.icon];

            return (
              <Reveal key={amenity.id} delay={index * 40}>
                <div className="group min-w-0">
                  <Icon
                    className="mb-4 size-6 stroke-[1.65] text-ink transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none sm:mb-5 sm:size-7"
                    aria-hidden="true"
                  />
                  <h3 className="text-[0.83rem] font-bold leading-5 text-ink sm:text-sm">
                    {amenity.name}
                  </h3>
                  <p className="mt-1.5 text-[0.72rem] leading-5 text-ink-muted sm:text-xs">
                    {amenity.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
