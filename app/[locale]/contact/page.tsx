import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";
import { ContactHeader } from "@/components/contact/ContactHeader/ContactHeader";
import { FindUs } from "@/components/contact/FindUs/FindUs";
import { ContactMethods } from "@/components/contact/ContactMethods/ContactMethods";
import { WhatsAppCta } from "@/components/home/WhatsAppCta/WhatsAppCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });

  return buildPageMetadata({
    locale,
    path: "/contact",
    title: t("title"),
    description: t("description"),
    keywords: [
      "Pépère Marrakech",
      "Pepere Marrakech",
      "restaurant Pépère Marrakech",
      "sports bar Marrakech",
      "restaurant in Marrakech",
    ],
  });
}

export default function ContactPage() {
  return (
    <main>
      <ContactHeader />
      <ContactMethods />
      <FindUs />
      <WhatsAppCta />
    </main>
  );
}
