import type { RestaurantFacts } from "@/types/restaurant";

/**
 * TODO(owner): every value below is a structurally-correct placeholder, not
 * a real fact — confirm and replace each one before launch. Flagged here
 * (rather than left blank) so the Contact section and Schema.org data stay
 * fully wired and only need real values dropped in, not new code.
 */
export const restaurantFacts: RestaurantFacts = {
  phoneDisplay: "+212 6 19 62 49 80",
  phoneHref: "tel:+212619624980",
  whatsappHref: "https://wa.me/212619624980",
  email: "peperegrill@gmail.com",
  address: {
    en: "Address to be confirmed, Morocco", // TODO: confirm real address
    fr: "Adresse à confirmer, Maroc", // TODO: confirm real address
  },
  mapsUrl: "https://maps.app.goo.gl/JGRb8DUcAfoqWrQQ8",
  mapEmbedUrl: "https://www.google.com/maps?q=31.6290802,-8.0078568&z=16&output=embed",
  hours: [
    {
      days: { en: "Every Day", fr: "Tous les Jours" },
      hours: "12 PM–2 AM",
    },
  ],
  social: {
    instagram: "https://www.instagram.com/peperemarrakech/",
    facebook: undefined, // TODO: add Facebook page URL
  },
};
