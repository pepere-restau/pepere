import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { menuPreviewCategories } from "@/content/menu-data";
import { CtaLink } from "@/components/ui/CtaLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * The homepage's menu preview: the category cards that make up the whole
 * card, framed by an intro and a link through to the full menu.
 */
export async function FoodAndDrinks() {
  const t = await getTranslations("home.foodAndDrinks");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";

  return (
    <section
      aria-labelledby="food-and-drinks-heading"
      className="bg-background px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              id="food-and-drinks-heading"
              className="mt-3 font-display text-5xl tracking-tight text-foreground uppercase md:text-6xl"
            >
              {t("heading")}
            </h2>
            <p className="mt-4 font-display text-base text-muted-foreground">{t("intro")}</p>
          </div>
          <CtaLink href="/menu" tone="onLight" className="shrink-0">
            {t("menuCta")}
          </CtaLink>
        </Reveal>

        {/* Menu categories */}
        <Reveal delay={0.1}>
          <p className="mt-16 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            {t("menuLabel")}
          </p>
        </Reveal>
        <div className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:items-start lg:gap-x-6 lg:gap-y-12 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {menuPreviewCategories.map((category, index) => (
            <Reveal
              key={category.id}
              delay={0.1 * index}
              className={cn(
                "w-64 shrink-0 snap-start sm:w-72 lg:w-auto lg:shrink lg:snap-align-none",
                index % 2 === 1 && "lg:mt-10",
              )}
            >
              <article className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
                  <Image
                    src={category.image}
                    alt={`${category.name[localeKey]} at Pépère Marrakech`}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 288px, 256px"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-brand-accent/10 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-xl tracking-tight text-secondary-foreground uppercase">
                      {category.name[localeKey]}
                    </h3>
                    <p className="mt-1 max-w-xs font-display text-xs text-secondary-foreground/75">
                      {category.teaser[localeKey]}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
