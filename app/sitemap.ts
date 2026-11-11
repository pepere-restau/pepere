import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

/**
 * Public, indexable routes only — the QR-menu utility page is intentionally
 * left out (it already opts out via `robots: { index: false }` in its own
 * `generateMetadata`).
 */
const PATHS: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/menu", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
    );

    return routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority,
      alternates: { languages },
    }));
  });
}
