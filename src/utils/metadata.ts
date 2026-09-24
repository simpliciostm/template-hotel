import type { HotelConfig } from '../types/hotel';

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

function isPresent(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string | null,
) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = document.head.querySelector<HTMLMetaElement>(selector);

  if (!isPresent(content)) {
    existing?.remove();
    return;
  }

  const meta = existing ?? document.createElement('meta');
  meta.setAttribute(attribute, key);
  meta.setAttribute('content', content);

  if (!existing) {
    document.head.append(meta);
  }
}

function upsertLink(rel: string, href: string | null) {
  const selector = `link[rel="${rel}"]`;
  const existing = document.head.querySelector<HTMLLinkElement>(selector);

  if (!isPresent(href)) {
    existing?.remove();
    return;
  }

  const link = existing ?? document.createElement('link');
  link.setAttribute('rel', rel);
  link.setAttribute('href', href);

  if (!existing) {
    document.head.append(link);
  }
}

function removeEmpty(value: JsonLdValue | undefined): JsonLdValue | undefined {
  if (Array.isArray(value)) {
    const items = value
      .map((item) => removeEmpty(item))
      .filter((item): item is JsonLdValue => item !== undefined);

    return items.length > 0 ? items : undefined;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([key, item]) => [key, removeEmpty(item)] as const)
      .filter(([, item]) => item !== undefined);

    const cleanedObject = Object.fromEntries(entries) as {
      [key: string]: JsonLdValue;
    };

    return entries.length > 0 ? cleanedObject : undefined;
  }

  if (typeof value === 'string') {
    return isPresent(value) ? value : undefined;
  }

  return value ?? undefined;
}

function buildStructuredData(hotel: HotelConfig) {
  const streetAddress = [hotel.address.street, hotel.address.number]
    .filter(isPresent)
    .join(', ');

  const sameAs = [
    hotel.socialLinks.instagram,
    hotel.socialLinks.facebook,
    hotel.socialLinks.tiktok,
  ].filter(isPresent);

  return removeEmpty({
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: hotel.name,
    description: hotel.seo.description || hotel.description,
    url: hotel.seo.canonicalUrl,
    image: hotel.seo.ogImage,
    telephone: hotel.contact.phone,
    checkinTime: hotel.checkIn,
    checkoutTime: hotel.checkOut,
    sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality: hotel.address.city,
      addressRegion: hotel.address.state,
      postalCode: hotel.address.zipCode,
    },
  });
}

function upsertJsonLd(id: string, data: JsonLdValue | undefined) {
  const existing = document.head.querySelector<HTMLScriptElement>(`#${id}`);

  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.append(script);
  }
}

export function applyDocumentMetadata(hotel: HotelConfig) {
  const isDemo = hotel.publication.status === 'demo';

  document.documentElement.lang = hotel.seo.locale;
  document.documentElement.dataset.publicationStatus = hotel.publication.status;
  document.title = hotel.seo.title;

  upsertMeta('name', 'description', hotel.seo.description);
  upsertMeta('name', 'robots', isDemo ? 'noindex, nofollow' : 'index, follow');
  upsertMeta('name', 'theme-color', '#11100e');

  upsertLink('canonical', hotel.seo.canonicalUrl);

  upsertMeta('property', 'og:title', hotel.seo.title);
  upsertMeta('property', 'og:description', hotel.seo.description);
  upsertMeta('property', 'og:type', 'website');
  upsertMeta('property', 'og:locale', hotel.seo.locale);
  upsertMeta('property', 'og:site_name', hotel.seo.siteName);
  upsertMeta('property', 'og:url', hotel.seo.canonicalUrl);
  upsertMeta('property', 'og:image', hotel.seo.ogImage);

  upsertMeta(
    'name',
    'twitter:card',
    hotel.seo.ogImage ? 'summary_large_image' : 'summary',
  );
  upsertMeta('name', 'twitter:title', hotel.seo.title);
  upsertMeta('name', 'twitter:description', hotel.seo.description);
  upsertMeta('name', 'twitter:image', hotel.seo.ogImage);

  upsertJsonLd(
    'hotel-structured-data',
    isDemo ? undefined : buildStructuredData(hotel),
  );
}
