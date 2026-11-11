import { Wine, Beer, Martini, CupSoda } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { drinkCategories } from "@/content/drinks-data";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

const DRINK_ICONS: Record<string, typeof Wine> = {
  wines: Wine,
  beers: Beer,
  spirits: Martini,
  "soft-drinks": CupSoda,
};

/**
 * A dedicated, evergreen counterpart to the Menu page's bar list — no prices
 * or fixture-style content to keep updated, just the reassurance that the
 * choice at the bar is as serious as the choice on the grill.
 */
export async function Bar() {
  const t = await getTranslations("home.bar");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";

  return (
    <section
      aria-labelledby="bar-heading"
      className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:order-2 lg:col-span-5">
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              id="bar-heading"
              className="mt-3 font-display text-5xl tracking-tight text-foreground uppercase md:text-6xl"
            >
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-md font-display text-base text-muted-foreground">
              {t("intro")}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
              {t("categoriesLabel")}
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {drinkCategories.map((category) => {
                const Icon = DRINK_ICONS[category.id];
                return (
                  <li
                    key={category.id}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-4 py-2 text-xs font-bold tracking-[0.08em] text-foreground uppercase"
                  >
                    <Icon className="size-3.5 text-brand-accent" strokeWidth={2} aria-hidden="true" />
                    {category.name[localeKey]}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.25} className="mt-8">
            <CtaLink href={`/menu#${drinkCategories[0].id}`} tone="onLight" className="w-full sm:w-auto">
              {t("cta")}
            </CtaLink>
          </Reveal>
        </div>

        <div className="relative lg:order-1 lg:col-span-7">
          <Reveal delay={0.15} className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Parallax offset={28} className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784899790/IMG_6971_pydeyf.jpg"
                alt="A cocktail being poured at the bar"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
