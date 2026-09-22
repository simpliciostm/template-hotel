import type { HotelConfig } from '../types/hotel';

export const hotel: HotelConfig = {
  name: 'XAVI Studio',
  shortName: 'XAVI',
  description:
    'Site institucional em construcao para uma hospedagem com atmosfera acolhedora, visual contemporaneo e foco em reservas por canais externos.',
  address: {
    street: null,
    number: null,
    neighborhood: null,
    city: 'Bauru',
    state: 'SP',
    zipCode: null,
  },
  contact: {
    phone: null,
    whatsapp: null,
    instagram: null,
  },
  checkIn: null,
  checkOut: null,
  maps: {
    embedUrl: null,
    directionsUrl: null,
  },
  bookingLinks: [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: null,
      enabled: false,
    },
  ],
  amenities: [],
  socialLinks: {
    instagram: null,
  },
};
