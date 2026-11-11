import { restaurantFacts } from "@/content/restaurant-facts";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, localizedUrl } from "@/lib/seo";
import { parseOpeningHours } from "@/lib/opening-hours";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/**
 * Restaurant + BarOrPub structured data, rendered once site-wide from the
 * locale layout. Every field is sourced from `restaurantFacts` (the same
 * data the Contact page and footer already read) — nothing here is
 * invented. Fields we don't have confirmed real values for (street address,
 * price range) are omitted rather than guessed.
 */
export function RestaurantJsonLd({ locale }: { locale: string }) {
  const openingHours = restaurantFacts.hours
    .map((range) => {
      const parsed = parseOpeningHours(range.hours);
      if (!parsed) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: WEEK_DAYS,
        opens: parsed.opens,
        closes: parsed.closes,
      };
    })
    .filter(Boolean);

  const sameAs = [restaurantFacts.social.instagram, restaurantFacts.social.facebook].filter(
    (url): url is string => Boolean(url),
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub"],
    name: SITE_NAME,
    url: localizedUrl(locale, ""),
    image: DEFAULT_OG_IMAGE,
    logo: `${SITE_URL}/logo.svg`,
    telephone: restaurantFacts.phoneHref.replace("tel:", ""),
    email: restaurantFacts.email,
    servesCuisine: ["Moroccan", "Grill", "Mediterranean"],
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marrakech",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.6290802,
      longitude: -8.0078568,
    },
    hasMap: restaurantFacts.mapsUrl,
    menu: localizedUrl(locale, "/menu"),
    ...(openingHours.length > 0 && { openingHoursSpecification: openingHours }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
