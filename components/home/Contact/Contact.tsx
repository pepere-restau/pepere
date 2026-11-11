import { MapPin, Phone } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { restaurantFacts } from "@/content/restaurant-facts";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingGlow } from "@/components/motion/FloatingGlow";

export async function Contact() {
  const t = await getTranslations("home.contact");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";
  const facts = restaurantFacts;

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <FloatingGlow />
      <div className="relative mx-auto max-w-[1600px]">
        <Reveal className="max-w-xl">
          <Eyebrow tone="onDark">{t("eyebrow")}</Eyebrow>
          <h2
            id="contact-heading"
            className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
          >
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-5">
            <address className="not-italic">
              <p className="text-xs font-medium tracking-[0.2em] text-secondary-foreground/50 uppercase">
                {t("addressLabel")}
              </p>
              <p className="mt-2 max-w-xs font-display text-base text-secondary-foreground/85">
                {facts.address[localeKey]}
              </p>
              <CtaLink
                href={facts.mapsUrl}
                variant="ghost"
                tone="onDark"
                className="mt-3 inline-flex items-center gap-2"
              >
                <MapPin className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                {t("mapCta")}
              </CtaLink>
            </address>

            <div className="mt-10">
              <p className="text-xs font-medium tracking-[0.2em] text-secondary-foreground/50 uppercase">
                {t("hoursLabel")}
              </p>
              <ul className="mt-2 flex flex-col gap-1">
                {facts.hours.map((range) => (
                  <li
                    key={range.days[localeKey]}
                    className="flex items-baseline justify-between gap-6 text-base text-secondary-foreground/85"
                  >
                    <span>{range.days[localeKey]}</span>
                    <time>{range.hours}</time>
                  </li>
                ))}
              </ul>
            </div>

            {(facts.social.instagram || facts.social.facebook) && (
              <div className="mt-10">
                <p className="text-xs font-medium tracking-[0.2em] text-secondary-foreground/50 uppercase">
                  {t("socialLabel")}
                </p>
                <div className="mt-3 flex items-center gap-5 text-sm tracking-[0.08em] uppercase">
                  {facts.social.instagram && (
                    <a
                      href={facts.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                    >
                      Instagram
                    </a>
                  )}
                  {facts.social.facebook && (
                    <a
                      href={facts.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            )}
          </Reveal>

          <Reveal
            delay={0.2}
            className="flex flex-col gap-6 border-t border-secondary-foreground/10 pt-10 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-secondary-foreground/50 uppercase">
                {t("phoneLabel")}
              </p>
              <a
                href={facts.phoneHref}
                className="mt-2 inline-block font-display text-3xl tracking-tight text-secondary-foreground uppercase transition-colors hover:text-accent-gold md:text-4xl"
              >
                {facts.phoneDisplay}
              </a>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-secondary-foreground/50 uppercase">
                {t("emailLabel")}
              </p>
              <a
                href={`mailto:${facts.email}`}
                className="mt-2 inline-block text-lg text-secondary-foreground/85 transition-colors hover:text-accent-gold"
              >
                {facts.email}
              </a>
            </div>

            <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row">
              <CtaLink href={facts.phoneHref} tone="onDark">
                <Phone className="mr-2 size-3.5" strokeWidth={1.5} aria-hidden="true" />
                {t("callCta")}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
