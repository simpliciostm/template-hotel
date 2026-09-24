import { Quote } from 'lucide-react';

import { hotel } from '../../data/hotel';
import { Reveal } from '../motion/Reveal';

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-canvas py-section">
      <div className="mx-auto grid w-full max-w-site gap-8 px-gutter md:gap-12 lg:grid-cols-[minmax(17rem,0.42fr)_minmax(0,1fr)] xl:gap-16">
        <div className="max-w-[34rem]">
          <Reveal delay={0}>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              {hotel.reviews.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-[clamp(2rem,9vw,2.375rem)] font-semibold leading-[1.04] tracking-normal text-ink sm:text-[clamp(2.25rem,4vw,3.5rem)] sm:leading-[1.02]">
              {hotel.reviews.title}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-[0.95rem] leading-7 text-ink-muted sm:mt-6 sm:text-[1.0625rem] sm:leading-8">
              {hotel.reviews.description}
            </p>
          </Reveal>
        </div>

        <div className="border-t border-line lg:border-t-0">
          {hotel.reviews.items.map((review, index) => (
            <Reveal
              key={review.id}
              as="blockquote"
              delay={index * 50}
              className="border-b border-line py-6 first:pt-6 sm:py-8 sm:first:pt-8 lg:py-9 lg:first:pt-0"
            >
              <Quote
                className="mb-4 size-5 stroke-[1.5] text-accent sm:mb-5 sm:size-6"
                aria-hidden="true"
              />
              <p className="font-display text-[clamp(1.32rem,6vw,1.55rem)] font-semibold leading-snug text-ink sm:text-[clamp(1.45rem,2vw,1.75rem)]">
                “{review.text}”
              </p>
              <footer className="mt-5 sm:mt-6">
                <cite className="not-italic">
                  <span className="block text-sm font-bold leading-5 text-ink">
                    {review.author}
                  </span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-ink-subtle">
                    {hotel.reviews.placeholderLabel}
                  </span>
                </cite>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
