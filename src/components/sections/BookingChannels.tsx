import { ArrowUpRight } from 'lucide-react';

import { hotel } from '../../data/hotel';
import { Reveal } from '../motion/Reveal';

export function BookingChannels() {
  const availableChannels = hotel.booking.channels.filter(
    (channel) => channel.enabled && channel.url,
  );

  return (
    <section id="reservas" className="bg-canvas py-section text-ink">
      <div className="mx-auto w-full max-w-site px-gutter">
        <div className="max-w-[50rem]">
          <Reveal delay={0}>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              {hotel.booking.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-[clamp(2rem,9vw,2.375rem)] font-semibold leading-[1.04] tracking-normal text-ink sm:text-[clamp(2.25rem,4vw,3.5rem)] sm:leading-[1.02]">
              {hotel.booking.title}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-4 max-w-[44rem] text-[0.95rem] leading-7 text-ink-muted sm:mt-5 sm:text-[1.0625rem] sm:leading-8">
              {hotel.booking.description}
            </p>
          </Reveal>
        </div>

        {availableChannels.length > 0 ? (
          <div className="mt-7 grid gap-3.5 sm:mt-9 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {availableChannels.map((channel, index) => (
              <Reveal key={channel.id} delay={index * 40}>
                <a
                  href={channel.url ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${hotel.booking.title} ${channel.name}. ${hotel.booking.externalLinkLabel}`}
                  className="group flex min-h-16 items-center justify-between gap-4 rounded-soft border border-line bg-canvas-soft px-4 py-4 text-ink transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-canvas-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transform-none motion-reduce:transition-none sm:px-5"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-7 w-16 shrink-0 items-center sm:w-20">
                      {channel.logo ? (
                        <img
                          src={channel.logo}
                          alt=""
                          className="max-h-7 max-w-16 object-contain object-left transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none sm:max-w-20"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : null}
                    </span>
                    <span className="truncate text-base font-bold leading-5">
                      {channel.name}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0}>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-6 text-ink-muted">
              {hotel.booking.unavailableMessage}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
