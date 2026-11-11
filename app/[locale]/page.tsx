import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero/Hero";
import { Experience } from "@/components/home/Experience/Experience";
import { Bar } from "@/components/home/Bar/Bar";
import { OnTheBigScreen } from "@/components/home/OnTheBigScreen/OnTheBigScreen";
import { FoodAndDrinks } from "@/components/home/FoodAndDrinks/FoodAndDrinks";
import { WhatsOn } from "@/components/home/WhatsOn/WhatsOn";
import { Gallery } from "@/components/home/Gallery/Gallery";
import { Contact } from "@/components/home/Contact/Contact";
import { WhatsAppCta } from "@/components/home/WhatsAppCta/WhatsAppCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return buildPageMetadata({
    locale,
    path: "",
    title: t("title"),
    description: t("description"),
    keywords: [
      "Pépère Marrakech",
      "Pepere Marrakech",
      "Pépère",
      "Pepere",
      "restaurant Pépère Marrakech",
      "grill restaurant Marrakech",
      "sports bar Marrakech",
      "live music Marrakech",
      "best grill restaurant Marrakech",
    ],
  });
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Bar />
      <OnTheBigScreen />
      <Experience />
      <FoodAndDrinks />
      <WhatsOn />
      <Gallery />
      <Contact />
      <WhatsAppCta />
    </main>
  );
}
