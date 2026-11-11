import { MapPin, Navigation } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { restaurantFacts } from "@/content/restaurant-facts";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingGlow } from "@/components/motion/FloatingGlow";
import { OpenStatusBadge } from "@/components/contact/OpenStatusBadge/OpenStatusBadge";

/**
 * The page's centerpiece: the map is a real, prominent visual (not a tiny
 * afterthought) but stays a clickthrough preview rather than a raw
 * interactive embed, so it can't scroll-trap the page on mobile.
 */
export async function FindUs() {
  const t = await getTranslations("contactPage.findUs");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";
  const facts = restaurantFacts;

  return (
    <section aria-labelledby="find-us-heading" className="bg-surface-warm relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-16">
      <FloatingGlow />
      <div className="relative mx-auto max-w-[1600px]">
        <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow tone="onDark">{t("eyebrow")}</Eyebrow>
            <h2
              id="find-us-heading"
              className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
            >
              {t("heading")}
            </h2>
          </div>
          <OpenStatusBadge hours={facts.hours} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={0.1} className="flex flex-col justify-center gap-6 lg:col-span-5">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-accent text-primary-foreground">
                <MapPin className="size-6" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-secondary-foreground/50 uppercase">
                  {t("addressLabel")}
                </p>
                <p className="mt-1 max-w-xs font-display text-2xl tracking-tight text-secondary-foreground uppercase">
                  {facts.address[localeKey]}
                </p>
              </div>
            </div>

            <p className="max-w-sm font-display text-base text-secondary-foreground/80">
              {t("intro")}
            </p>

            <CtaLink
              href={facts.mapsUrl}
              tone="onDark"
              className="w-full sm:w-auto"
            >
              <Navigation className="mr-2 size-3.5" strokeWidth={2} aria-hidden="true" />
              {t("cta")}
            </CtaLink>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7">
            <a
              href={facts.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("viewOnMap")} — ${facts.address[localeKey]}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl border-4 border-secondary-foreground/10 shadow-[0_32px_64px_rgba(0,0,0,0.35)] sm:aspect-video"
            >
              <iframe
                src={facts.mapEmbedUrl}
                tabIndex={-1}
                aria-hidden="true"
                loading="lazy"
                className="pointer-events-none h-full w-full border-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex size-14 items-center justify-center rounded-full bg-brand-accent text-primary-foreground">
                  <MapPin className="size-7" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-secondary-foreground uppercase">
                  {t("viewOnMap")}
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
