import { Building2, Heart, LockKeyhole } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import { hotel } from '../../data/hotel';
import type { IntroductionHighlight } from '../../types/hotel';
import { Reveal } from '../motion/Reveal';

const iconByHighlight: Record<IntroductionHighlight['icon'], LucideIcon> = {
  lock: LockKeyhole,
  building: Building2,
  heart: Heart,
};

export function Introduction() {
  const { introduction } = hotel;

  return (
    <section id="apresentacao" className="bg-canvas-soft py-section">
      <div className="mx-auto grid w-full max-w-site gap-9 px-gutter md:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center xl:gap-16">
        <div className="max-w-[41rem]">
          <Reveal delay={0}>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              {introduction.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-[clamp(2rem,9vw,2.375rem)] font-semibold leading-[1.04] tracking-normal text-ink sm:text-[clamp(2.25rem,4vw,3.5rem)] sm:leading-[1.02]">
              {introduction.title}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-7 text-ink-muted sm:mt-6 sm:text-[1.0625rem] sm:leading-8">
              {introduction.description}
            </p>
          </Reveal>

          <div className="mt-7 grid gap-5 xs:grid-cols-3 sm:mt-9 sm:gap-6 lg:max-w-[34rem]">
            {introduction.highlights.map(({ icon, id, text }, index) => {
              const Icon = iconByHighlight[icon];

              return (
                <Reveal key={id} delay={140 + index * 40}>
                  <div className="group flex items-start gap-3 xs:block">
                    <Icon
                      className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-ink transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none xs:mt-0 sm:size-6"
                      aria-hidden="true"
                    />
                    <p className="text-[0.8125rem] font-bold leading-5 text-ink xs:mt-3 sm:mt-4">
                      {text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[minmax(0,1.75fr)_minmax(12rem,0.82fr)]">
          <Reveal
            as="figure"
            variant="image"
            delay={80}
            className="motion-photo overflow-hidden md:min-h-[28rem] lg:min-h-[32rem]"
          >
            <img
              src={introduction.images.main.src}
              alt={introduction.images.main.alt}
              width={introduction.images.main.width}
              height={introduction.images.main.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-center md:aspect-auto md:h-full md:min-h-[22rem]"
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            <Reveal delay={150}>
              <div className="flex min-h-[11rem] flex-col justify-center bg-canvas-muted p-5 text-ink sm:min-h-[16rem] sm:p-8 lg:p-10">
                <span
                  className="mb-5 block h-px w-9 bg-accent sm:mb-7 sm:w-10"
                  aria-hidden="true"
                />
                <p className="whitespace-pre-line font-display text-[1.45rem] font-semibold leading-[1.05] xs:text-[1.6rem] sm:text-[2.25rem] sm:leading-[1.02]">
                  {introduction.detailTitle}
                </p>
              </div>
            </Reveal>

            <Reveal
              as="figure"
              variant="image"
              delay={190}
              className="motion-photo overflow-hidden md:min-h-0"
            >
              <img
                src={introduction.images.detail.src}
                alt={introduction.images.detail.alt}
                width={introduction.images.detail.width}
                height={introduction.images.detail.height}
                loading="lazy"
                decoding="async"
                className="aspect-square h-full min-h-[11rem] w-full object-cover object-center sm:min-h-[16rem]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
