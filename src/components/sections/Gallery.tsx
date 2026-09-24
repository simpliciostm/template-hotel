import { ArrowRight } from 'lucide-react';

import { hotel } from '../../data/hotel';
import type { GalleryImage } from '../../types/hotel';
import { Reveal } from '../motion/Reveal';

const imageLayoutClasses = [
  'col-span-2 md:col-span-1 md:row-span-2',
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1',
];

const imageAspectClasses = [
  'aspect-[4/3] md:aspect-auto md:h-full',
  'aspect-[4/3]',
  'aspect-[4/3]',
  'aspect-[4/3]',
  'aspect-[4/3]',
];

function GalleryImageTile({
  image,
  index,
}: {
  image: GalleryImage;
  index: number;
}) {
  return (
    <Reveal
      as="figure"
      variant="image"
      delay={index * 50}
      className={`motion-photo overflow-hidden ${imageLayoutClasses[index]}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover object-center ${imageAspectClasses[index]}`}
      />
    </Reveal>
  );
}

export function Gallery() {
  const images = hotel.gallery.images.slice(0, 5);

  return (
    <section id="galeria" className="bg-canvas-soft py-section">
      <div className="mx-auto grid w-full max-w-site gap-9 px-gutter md:gap-12 lg:grid-cols-[minmax(17rem,0.42fr)_minmax(0,1fr)] lg:items-center xl:gap-16">
        <div className="max-w-[33rem]">
          <Reveal delay={0}>
            <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-accent sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              {hotel.gallery.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display text-[clamp(2rem,9vw,2.375rem)] font-semibold leading-[1.04] tracking-normal text-ink sm:text-[clamp(2.25rem,4vw,3.5rem)] sm:leading-[1.02]">
              {hotel.gallery.title}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-[0.95rem] leading-7 text-ink-muted sm:mt-6 sm:text-[1.0625rem] sm:leading-8">
              {hotel.gallery.description}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <a
              href={hotel.gallery.cta.href}
              className="group mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-soft border border-accent bg-accent px-5 py-3 text-sm font-semibold text-ink-inverse transition-colors duration-300 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none sm:mt-9"
            >
              {hotel.gallery.cta.label}
              <ArrowRight className="motion-arrow size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.78fr)_minmax(0,0.78fr)] md:auto-rows-[minmax(12rem,1fr)] md:gap-2 lg:min-h-[34rem]">
          {images.map((image, index) => (
            <GalleryImageTile key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
