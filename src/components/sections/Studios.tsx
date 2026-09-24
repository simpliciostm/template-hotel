import { ArrowRight } from 'lucide-react';

import { hotel } from '../../data/hotel';
import { Reveal } from '../motion/Reveal';

export function Studios() {
  const { studios } = hotel;

  return (
    <section id="studios" className="bg-canvas py-section">
      <div className="mx-auto grid w-full max-w-site gap-9 px-gutter md:gap-12 lg:grid-cols-[minmax(18rem,0.62fr)_minmax(0,1.38fr)] lg:items-center xl:gap-16">
        <div className="max-w-[34rem]">
          <Reveal delay={0}>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              {studios.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-[clamp(2rem,9vw,2.375rem)] font-semibold leading-[1.04] tracking-normal text-ink sm:text-[clamp(2.25rem,4vw,3.5rem)] sm:leading-[1.02]">
              {studios.title}
            </h2>
          </Reveal>
          {studios.description.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index === 0 ? 90 : 130}>
              <p
                className={
                  index === 0
                    ? 'mt-5 text-[0.95rem] leading-7 text-ink-muted sm:mt-6 sm:text-[1.0625rem] sm:leading-8'
                    : 'mt-3 text-[0.95rem] leading-7 text-ink-muted sm:mt-4 sm:text-[1.0625rem] sm:leading-8'
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={170}>
            <a
              href={studios.cta.href}
              className="group mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-soft border border-accent bg-accent px-5 py-3 text-sm font-semibold text-ink-inverse transition-colors duration-300 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none sm:mt-9"
            >
              {studios.cta.label}
              <ArrowRight className="motion-arrow size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Reveal
            as="figure"
            variant="image"
            delay={80}
            className="motion-photo col-span-2 overflow-hidden"
          >
            <img
              src={studios.images.main.src}
              alt={studios.images.main.alt}
              width={studios.images.main.width}
              height={studios.images.main.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-center xs:aspect-[16/10] md:aspect-[16/9]"
            />
          </Reveal>

          <Reveal
            as="figure"
            variant="image"
            delay={150}
            className="motion-photo overflow-hidden"
          >
            <img
              src={studios.images.bathroom.src}
              alt={studios.images.bathroom.alt}
              width={studios.images.bathroom.width}
              height={studios.images.bathroom.height}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover object-center md:aspect-[4/3]"
            />
          </Reveal>

          <Reveal
            as="figure"
            variant="image"
            delay={190}
            className="motion-photo overflow-hidden"
          >
            <img
              src={studios.images.kitchen.src}
              alt={studios.images.kitchen.alt}
              width={studios.images.kitchen.width}
              height={studios.images.kitchen.height}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover object-center md:aspect-[4/3]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
