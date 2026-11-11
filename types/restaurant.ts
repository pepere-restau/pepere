import type { LocalizedText } from "./menu";

export interface OpeningHoursRange {
  days: LocalizedText;
  hours: string;
}

export interface RestaurantFacts {
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  address: LocalizedText;
  mapsUrl: string;
  mapEmbedUrl: string;
  hours: OpeningHoursRange[];
  social: {
    instagram?: string;
    facebook?: string;
  };
}
