export type BookingChannelId =
  'agoda' | 'hoteis' | 'booking' | 'airbnb' | 'whatsapp' | 'custom';

export type BookingLink = {
  id: BookingChannelId;
  name: string;
  url: string | null;
  enabled: boolean;
};

export type HotelAddress = {
  street: string | null;
  number: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
};

export type HotelContact = {
  phone: string | null;
  whatsapp: string | null;
  instagram: string | null;
};

export type HotelMaps = {
  embedUrl: string | null;
  directionsUrl: string | null;
};

export type SocialLinks = {
  instagram?: string | null;
  facebook?: string | null;
  tiktok?: string | null;
};

export type HotelConfig = {
  name: string;
  shortName: string;
  description: string;
  address: HotelAddress;
  contact: HotelContact;
  checkIn: string | null;
  checkOut: string | null;
  maps: HotelMaps;
  bookingLinks: BookingLink[];
  amenities: string[];
  socialLinks: SocialLinks;
};
