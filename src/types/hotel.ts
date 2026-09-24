export type BookingChannelId =
  | 'agoda'
  | 'hoteis'
  | 'decolar'
  | 'expedia'
  | 'booking'
  | 'airbnb'
  | 'whatsapp'
  | 'custom';

export type TextLink = {
  label: string;
  href: string;
};

export type HotelWordmark = {
  primary: string;
  secondary: string;
};

export type HotelSeo = {
  title: string;
  description: string;
  siteName: string;
  locale: string;
  canonicalUrl: string | null;
  ogImage: string | null;
};

export type PublicationStatus = 'demo' | 'production';

export type HotelPublication = {
  status: PublicationStatus;
};

export type HotelImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isPlaceholder?: boolean;
};

export type HotelHero = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: TextLink;
  secondaryCta: TextLink;
  indicator: string;
  image: HotelImage;
};

export type IntroductionHighlight = {
  id: string;
  icon: 'lock' | 'building' | 'heart';
  text: string;
};

export type HotelIntroduction = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: IntroductionHighlight[];
  detailTitle: string;
  images: {
    main: HotelImage;
    detail: HotelImage;
  };
};

export type HotelStudios = {
  eyebrow: string;
  title: string;
  description: string[];
  cta: TextLink;
  images: {
    main: HotelImage;
    bathroom: HotelImage;
    kitchen: HotelImage;
  };
};

export type BookingChannel = {
  id: BookingChannelId;
  name: string;
  logo?: string;
  url: string | null;
  enabled: boolean;
};

export type HotelBooking = {
  eyebrow: string;
  title: string;
  description: string;
  unavailableMessage: string;
  externalLinkLabel: string;
  channels: BookingChannel[];
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
  email: string | null;
  instagram: string | null;
};

export type HotelMaps = {
  embedUrl: string | null;
  directionsUrl: string | null;
};

export type HotelLocation = {
  eyebrow: string;
  title: string;
  description: string;
  mapTitle: string;
  directionsLabel: string;
};

export type SocialLinks = {
  instagram?: string | null;
  facebook?: string | null;
  tiktok?: string | null;
};

export type AmenityIconId =
  | 'wifi'
  | 'snowflake'
  | 'tv'
  | 'refrigerator'
  | 'shower'
  | 'bed'
  | 'key'
  | 'car';

export type HotelAmenity = {
  id: string;
  name: string;
  description: string;
  icon: AmenityIconId;
  enabled: boolean;
  provisional?: boolean;
};

export type HotelAmenities = {
  eyebrow: string;
  title: string;
  description: string;
  items: HotelAmenity[];
};

export type GalleryImage = HotelImage & {
  id: string;
  category: 'exterior' | 'bedroom' | 'kitchen' | 'bathroom' | 'detail';
  width: number;
  height: number;
  isPlaceholder: boolean;
};

export type HotelGallery = {
  eyebrow: string;
  title: string;
  description: string;
  cta: TextLink;
  images: GalleryImage[];
};

export type HotelReview = {
  id: string;
  text: string;
  author: string;
  source: string | null;
  rating: number | null;
  isPlaceholder: boolean;
};

export type HotelReviews = {
  eyebrow: string;
  title: string;
  description: string;
  placeholderLabel: string;
  items: HotelReview[];
};

export type HotelFooter = {
  description: string;
  tagline: string;
  navigationHeading: string;
  contactHeading: string;
  copyrightName: string;
  rightsText: string;
  signaturePrefix: string;
  signatureSuffix: string;
};

export type HotelConfig = {
  name: string;
  shortName: string;
  description: string;
  wordmark: HotelWordmark;
  seo: HotelSeo;
  publication: HotelPublication;
  address: HotelAddress;
  contact: HotelContact;
  checkIn: string | null;
  checkOut: string | null;
  maps: HotelMaps;
  hero: HotelHero;
  introduction: HotelIntroduction;
  studios: HotelStudios;
  amenities: HotelAmenities;
  gallery: HotelGallery;
  reviews: HotelReviews;
  location: HotelLocation;
  booking: HotelBooking;
  footer: HotelFooter;
  socialLinks: SocialLinks;
};
