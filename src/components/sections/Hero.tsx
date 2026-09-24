import { ArrowRight } from 'lucide-react';

import { hotel } from '../../data/hotel';

export function Hero() {
  const { hero } = hotel;

  return (
    <section className="relative isolate flex min-h-[clamp(620px,100svh,720px)] overflow-hidden bg-ink text-white lg:min-h-[100svh]">
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        fetchPriority="high"
        decoding="async"
        className="motion-hero-image absolute inset-0 -z-20 h-full w-full object-cover object-[64%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(15_13_10_/_0.78),rgb(15_13_10_/_0.42)_58%,rgb(15_13_10_/_0.12)),linear-gradient(180deg,rgb(15_13_10_/_0.34),rgb(15_13_10_/_0.12)_34%,rgb(15_13_10_/_0.45))] sm:bg-[linear-gradient(90deg,rgb(15_13_10_/_0.72),rgb(15_13_10_/_0.32)_46%,rgb(15_13_10_/_0.08)),linear-gradient(180deg,rgb(15_13_10_/_0.25),rgb(15_13_10_/_0.08)_34%,rgb(15_13_10_/_0.38))]" />

      <div className="mx-auto flex w-full max-w-site items-end px-gutter pb-[clamp(3rem,9vw,4.75rem)] pt-28 sm:pb-[clamp(3.5rem,8vw,6.75rem)] sm:pt-36 lg:pt-40">
        <div className="max-w-[40rem]">
          <p className="motion-hero-item mb-3 text-[0.68rem] font-bold uppercase tracking-[0.26em] text-white/82 [--hero-delay:80ms] sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
            {hero.eyebrow}
          </p>
          <h1 className="motion-hero-item whitespace-pre-line font-display text-[clamp(2.75rem,13vw,3.25rem)] font-semibold leading-[0.94] tracking-normal text-white [--hero-delay:150ms] sm:text-[clamp(3.5rem,9vw,6.6rem)] sm:leading-[0.92]">
            {hero.title}
          </h1>
          <p className="motion-hero-item mt-5 max-w-[25rem] text-[0.95rem] font-medium leading-7 text-white/88 [--hero-delay:220ms] sm:mt-6 sm:max-w-[28rem] sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="motion-hero-item mt-7 flex flex-col gap-3 [--hero-delay:290ms] xs:flex-row xs:flex-wrap sm:mt-8 sm:gap-4">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-soft border border-accent bg-accent px-5 py-3 text-sm font-bold text-ink-inverse transition-colors duration-300 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none xs:w-auto"
            >
              {hero.primaryCta.label}
              <ArrowRight className="motion-arrow size-4" aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-soft border border-white/55 bg-transparent px-5 py-3 text-sm font-bold text-white transition-colors duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none xs:w-auto"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="motion-hero-item ml-auto hidden items-center gap-4 self-end pb-3 text-xs font-bold tracking-[0.24em] text-white/80 [--hero-delay:360ms] lg:flex">
          <span>01</span>
          <span className="h-px w-14 bg-white/55" aria-hidden="true" />
          <span>{hero.indicator}</span>
        </div>
      </div>
    </section>
  );
}
