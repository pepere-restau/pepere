import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";
import { StoryHeader } from "@/components/about/StoryHeader/StoryHeader";
import { StoryNarrative } from "@/components/about/StoryNarrative/StoryNarrative";
import { StoryMoments } from "@/components/about/StoryMoments/StoryMoments";
import { WhatsAppCta } from "@/components/home/WhatsAppCta/WhatsAppCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });

  return buildPageMetadata({
    locale,
    path: "/about",
    title: t("title"),
    description: t("description"),
    keywords: [
      "Pépère Marrakech",
      "Pepere Marrakech",
      "restaurant Pépère Marrakech",
      "restaurant in Marrakech",
      "sports bar Marrakech",
      "live music Marrakech",
    ],
  });
}

export default function AboutPage() {
  return (
    <main>
      <StoryHeader />
      <StoryNarrative />
      <StoryMoments />
      <WhatsAppCta />
    </main>
  );
}
