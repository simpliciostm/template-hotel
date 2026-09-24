import { ExternalLink, LogIn, LogOut, Map, MapPin } from 'lucide-react';

import { hotel } from '../../data/hotel';
import { Reveal } from '../motion/Reveal';

function MapFallback() {
  const { address } = hotel;

  return (
    <div className="flex h-[20rem] w-full flex-col items-center justify-center bg-canvas-muted p-8 text-center text-ink md:h-auto md:min-h-[30rem] lg:h-full">
      <MapPin
        className="mb-8 size-10 stroke-[1.4] text-accent"
        aria-hidden="true"
      />
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">
        {hotel.name}
      </p>
      <p className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-none text-ink">
        {address.city}, {address.state}
      </p>
      <div className="mt-6 text-sm font-medium leading-7 text-ink-muted">
        <p>
          {address.street}, {address.number}
        </p>
        <p>{address.neighborhood}</p>
      </div>
      <Map
        className="mt-8 size-7 stroke-[1.4] text-ink-subtle"
        aria-hidden="true"
      />
    </div>
  );
}

export function Location() {
  const { address, checkIn, checkOut, maps } = hotel;
  const hasAddress = Boolean(address.street && address.number);

  return (
    <section id="localizacao" className="bg-canvas-soft py-section">
      <div className="mx-auto grid w-full max-w-site gap-8 px-gutter md:gap-12 lg:grid-cols-[minmax(18rem,0.46fr)_minmax(0,1fr)] lg:items-stretch xl:gap-16">
        <Reveal delay={0} className="flex flex-col justify-center">
          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
            {hotel.location.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2rem,9vw,2.375rem)] font-semibold leading-[1.04] tracking-normal text-ink sm:text-[clamp(2.25rem,4vw,3.5rem)] sm:leading-[1.02]">
            {hotel.location.title}
          </h2>
          <p className="mt-5 text-[0.95rem] leading-7 text-ink-muted sm:mt-6 sm:text-[1.0625rem] sm:leading-8">
            {hotel.location.description}
          </p>

          {hasAddress ? (
            <div className="mt-7 flex gap-3 text-sm leading-6 text-ink-muted sm:mt-8 sm:gap-4">
              <MapPin
                className="mt-1 size-5 shrink-0 stroke-[1.7] text-ink"
                aria-hidden="true"
              />
              <address className="not-italic">
                <span className="block font-bold text-ink">
                  {address.street}, {address.number}
                </span>
                <span className="block">
                  {address.neighborhood} — {address.city}/{address.state}
                </span>
                <span className="block">{address.zipCode}</span>
              </address>
            </div>
          ) : null}

          <div className="mt-7 flex max-w-[22rem] divide-x divide-line border-y border-line py-4 sm:mt-8 sm:py-5">
            <div className="flex flex-1 gap-2.5 pr-4 sm:gap-3 sm:pr-5">
              <LogIn
                className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-accent"
                aria-hidden="true"
              />
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-subtle">
                  Check-in
                </p>
                <p className="mt-1 text-base font-bold text-ink">
                  {checkIn ?? 'A confirmar'}
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-2.5 pl-4 sm:gap-3 sm:pl-5">
              <LogOut
                className="mt-0.5 size-5 shrink-0 stroke-[1.6] text-accent"
                aria-hidden="true"
              />
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-ink-subtle">
                  Check-out
                </p>
                <p className="mt-1 text-base font-bold text-ink">
                  {checkOut ?? 'A confirmar'}
                </p>
              </div>
            </div>
          </div>

          {maps.directionsUrl ? (
            <a
              href={maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-soft border border-accent bg-accent px-5 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none"
            >
              {hotel.location.directionsLabel}
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </Reveal>

        <Reveal delay={80} className="overflow-hidden">
          {maps.embedUrl ? (
            <iframe
              src={maps.embedUrl}
              title={hotel.location.mapTitle}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-[20rem] w-full border-0 md:h-auto md:min-h-[30rem] lg:h-full"
            />
          ) : (
            <MapFallback />
          )}
        </Reveal>
      </div>
    </section>
  );
}
