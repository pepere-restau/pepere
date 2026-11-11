import { MonitorPlay, TvMinimal, Volume2 } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { SPORTS_CATEGORIES } from "@/content/sports-data";
import { SPORT_ICONS } from "@/lib/sport-icons";
import { CtaLink } from "@/components/ui/CtaLink";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingGlow } from "@/components/motion/FloatingGlow";

/**
 * Standalone match-day section — split out of What's On so sports content
 * can sit independently in the homepage's section order. Shares the
 * "home.whatsOn" translation namespace since the copy was written together.
 */
export async function OnTheBigScreen() {
  const t = await getTranslations("home.whatsOn");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";

  const capabilities = [
    { icon: MonitorPlay, label: t("bigScreen") },
    { icon: TvMinimal, label: t("hdBroadcast") },
    { icon: Volume2, label: t("soundOn") },
  ];

  return (
    <section
      aria-labelledby="big-screen-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <FloatingGlow />
      <div className="relative mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="onDark">{t("sportsLabel")}</Eyebrow>
          <h2
            id="big-screen-heading"
            className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
          >
            {t("sportsBlurbHeading")}
          </h2>
          <p className="mt-4 font-display text-base text-secondary-foreground/80">
            {t("sportsBlurbBody")}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
          {capabilities.map(({ icon: Icon, label }) => (
            <Badge key={label} className="gap-2 px-3 py-1.5">
              <Icon className="size-3.5" strokeWidth={2} aria-hidden="true" />
              {label}
            </Badge>
          ))}
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-3xl md:aspect-[21/9]"
        >
          <Image
            src="https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784998488/1781292768-46_1_a84d9d.webp"
            alt={t("stadiumAlt")}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent"
          />
          <ul className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-6 gap-y-2 p-6">
            {SPORTS_CATEGORIES.map((category) => {
              const Icon = SPORT_ICONS[category.icon];
              return (
                <li
                  key={category.id}
                  className="flex items-center gap-2 text-sm font-bold text-secondary-foreground"
                >
                  <Icon className="size-4 text-accent-gold" strokeWidth={2} aria-hidden="true" />
                  {category.name[localeKey]}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <CtaLink href="/contact">{t("cta")}</CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
