import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/**
 * Single source of truth for the production domain — every canonical URL,
 * hreflang alternate, sitemap entry, robots.txt reference, and JSON-LD `url`
 * is derived from this instead of being re-typed per file.
 */
export const SITE_URL = "https://www.peperemarrakech.com";
export const SITE_NAME = "Pépère Marrakech";

/**
 * A real venue photo (not a placeholder), cropped to the 1200×630 ratio
 * social platforms expect for link previews.
 */
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1784907277/c8af9ef4-22da-47e0-9b2d-11db9283a117_ijjxkn.jpg";

const OG_LOCALE: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
};

export function localizedUrl(locale: string, path: string) {
  return `${SITE_URL}/${locale}${path}`;
}

/**
 * Every indexable route calls this once from its own `generateMetadata` so
 * canonical URLs, hreflang alternates, and the Open Graph/Twitter shape stay
 * identical across the site instead of being hand-rolled per page.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  image = DEFAULT_OG_IMAGE,
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = localizedUrl(locale, path);
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, localizedUrl(loc, path)]),
  );
  languages["x-default"] = localizedUrl(routing.defaultLocale, path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: OG_LOCALE[locale] ?? "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
