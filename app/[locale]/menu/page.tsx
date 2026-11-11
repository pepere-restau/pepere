import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { FanFavoritesSection } from "@/components/menu/FanFavoritesSection";
import { FoodCategorySection } from "@/components/menu/FoodCategorySection";
import { DrinksSection } from "@/components/menu/DrinksSection";
import { MenuFilterProvider } from "@/components/menu/MenuFilterContext";
import { MenuFilterToggle } from "@/components/menu/MenuFilterToggle/MenuFilterToggle";
import { ScopeSection } from "@/components/menu/ScopeSection";
import { menuNavItems } from "@/content/menu-categories";
import { foodCategories, fanFavoritesCategory } from "@/content/menu-full";
import { drinkCategories } from "@/content/drinks-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.menu" });

  return buildPageMetadata({
    locale,
    path: "/menu",
    title: t("title"),
    description: t("description"),
    keywords: [
      "Pépère Marrakech menu",
      "grill restaurant Marrakech",
      "restaurant grill Marrakech",
      "Moroccan restaurant Marrakech",
      "tagine Marrakech",
      "sports bar Marrakech",
    ],
  });
}

export default async function MenuPage() {
  const locale = (await getLocale()) as "en" | "fr";
  const t = await getTranslations("menu");

  const otherFoodCategories = foodCategories.filter(
    (category) => category.id !== "fan-favorites",
  );

  return (
    <MenuFilterProvider>
      <main>
        <header className="bg-background px-6 pt-16 pb-10 md:px-12 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <Reveal className="max-w-2xl">
              <Eyebrow>{t("eyebrow")}</Eyebrow>
              <h1 className="mt-3 font-display text-5xl tracking-tight text-foreground uppercase md:text-7xl">
                {t("heading")}
              </h1>
              <p className="mt-4 font-display text-base text-muted-foreground">{t("intro")}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-6">
              <MenuFilterToggle />
            </Reveal>
          </div>
        </header>

        <CategoryNav items={menuNavItems} />

        <ScopeSection scope="kitchen">
          <FanFavoritesSection
            category={fanFavoritesCategory}
            locale={locale}
            eyebrow={t("sectionEyebrows.fanFavorites")}
          />
        </ScopeSection>

        {otherFoodCategories.map((category, index) => (
          <ScopeSection key={category.id} scope="kitchen">
            <FoodCategorySection
              category={category}
              locale={locale}
              eyebrow={category.id === "from-the-grill" ? t("sectionEyebrows.fromTheGrill") : undefined}
              alt={index % 2 === 1}
            />
          </ScopeSection>
        ))}

        {drinkCategories.map((category, index) => (
          <ScopeSection key={category.id} scope="bar">
            <DrinksSection
              category={category}
              locale={locale}
              eyebrow={index === 0 ? t("sectionEyebrows.drinks") : undefined}
              alt={index % 2 === 1}
            />
          </ScopeSection>
        ))}
      </main>
    </MenuFilterProvider>
  );
}
