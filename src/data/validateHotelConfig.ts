import type { GalleryImage, HotelConfig, HotelImage } from '../types/hotel';

function isExternalUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function validateImage(image: HotelImage | GalleryImage, path: string) {
  const warnings: string[] = [];

  if (!image.src) {
    warnings.push(`${path}: imagem sem src.`);
  }

  if (!image.alt.trim()) {
    warnings.push(`${path}: imagem sem alt.`);
  }

  return warnings;
}

export function validateHotelConfig(hotel: HotelConfig) {
  if (!import.meta.env.DEV) {
    return;
  }

  const warnings: string[] = [];

  if (!hotel.name.trim()) {
    warnings.push('hotel.name está vazio.');
  }

  if (!hotel.wordmark.primary.trim()) {
    warnings.push('hotel.wordmark.primary está vazio.');
  }

  if (!['demo', 'production'].includes(hotel.publication.status)) {
    warnings.push('hotel.publication.status deve ser demo ou production.');
  }

  if (!hotel.seo.title.trim()) {
    warnings.push('hotel.seo.title está vazio.');
  }

  if (!hotel.seo.description.trim()) {
    warnings.push('hotel.seo.description está vazio.');
  }

  if (!hotel.seo.siteName.trim()) {
    warnings.push('hotel.seo.siteName está vazio.');
  }

  if (!hotel.seo.locale.trim()) {
    warnings.push('hotel.seo.locale está vazio.');
  }

  if (hotel.seo.canonicalUrl && !isExternalUrl(hotel.seo.canonicalUrl)) {
    warnings.push(
      'hotel.seo.canonicalUrl não parece ser uma URL externa válida.',
    );
  }

  if (hotel.seo.ogImage && !isExternalUrl(hotel.seo.ogImage)) {
    warnings.push('hotel.seo.ogImage não parece ser uma URL externa válida.');
  }

  if (!hotel.address.city || !hotel.address.state) {
    warnings.push('Endereço sem cidade ou estado.');
  }

  if (hotel.maps.embedUrl && !isExternalUrl(hotel.maps.embedUrl)) {
    warnings.push('hotel.maps.embedUrl não parece ser uma URL externa válida.');
  }

  if (hotel.maps.directionsUrl && !isExternalUrl(hotel.maps.directionsUrl)) {
    warnings.push(
      'hotel.maps.directionsUrl não parece ser uma URL externa válida.',
    );
  }

  hotel.booking.channels.forEach((channel) => {
    if (!channel.id.trim()) {
      warnings.push(`Canal de reserva "${channel.name}" sem id.`);
    }

    if (channel.enabled && !channel.url) {
      warnings.push(`Canal de reserva "${channel.name}" está ativo sem URL.`);
    }

    if (channel.url && !isExternalUrl(channel.url)) {
      warnings.push(`Canal de reserva "${channel.name}" possui URL inválida.`);
    }
  });

  hotel.amenities.items.forEach((amenity) => {
    if (!amenity.id.trim()) {
      warnings.push(`Comodidade "${amenity.name}" sem id.`);
    }
  });

  warnings.push(...validateImage(hotel.hero.image, 'hero.image'));
  warnings.push(
    ...validateImage(
      hotel.introduction.images.main,
      'introduction.images.main',
    ),
  );
  warnings.push(
    ...validateImage(
      hotel.introduction.images.detail,
      'introduction.images.detail',
    ),
  );
  warnings.push(...validateImage(hotel.studios.images.main, 'studios.main'));
  warnings.push(
    ...validateImage(hotel.studios.images.bathroom, 'studios.bathroom'),
  );
  warnings.push(
    ...validateImage(hotel.studios.images.kitchen, 'studios.kitchen'),
  );

  hotel.gallery.images.forEach((image) => {
    if (!image.id.trim()) {
      warnings.push(`Imagem da galeria sem id: ${image.alt}`);
    }

    warnings.push(...validateImage(image, `gallery.images.${image.id}`));
  });

  if (warnings.length > 0) {
    console.warn('[hotel-template] Revisar configuração do hotel:', warnings);
  }
}
