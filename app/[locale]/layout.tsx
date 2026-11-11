import type { Metadata } from "next";
import type { ReactNode } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { Nav } from "@/components/layout/Nav/Nav";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp/FloatingWhatsApp";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Minimal, non-templated fallback — every real route (home/menu/about/
 * contact) sets its own complete title/description/OG via
 * `buildPageMetadata`, so this only covers `metadataBase` (required once,
 * globally) and a safety-net title for routes that don't override it.
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    title: SITE_NAME,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fontSans.variable} ${fontDisplay.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <RestaurantJsonLd locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
