import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { QrCard } from "@/components/qr-menu/QrCard";
import { PrintButton } from "@/components/qr-menu/PrintButton";

const TEST_MENU_URL = "https://peper-two.vercel.app/fr/menu";
const LIVE_MENU_URL = "https://peperemarrakech.com/fr/menu";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "qrMenu" });

  return { title: t("heading"), robots: { index: false, follow: false } };
}

export default async function QrMenuPage() {
  const t = await getTranslations("qrMenu");

  return (
    <main className="bg-background px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <style>{`
        @media print {
          header, footer { display: none !important; }
          main { padding: 0 !important; }
          .qr-flyer {
            box-shadow: none !important;
            border: none !important;
            break-after: page;
            height: 100vh;
            justify-content: center;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-4 print:hidden">
          <div className="max-w-2xl">
            <Eyebrow>{t("heading")}</Eyebrow>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground uppercase md:text-5xl">
              {t("heading")}
            </h1>
            <p className="mt-4 font-display text-base text-muted-foreground">{t("intro")}</p>
          </div>
          <PrintButton label={t("print")} />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 print:mt-0 print:block">
          <QrCard label={t("testLabel")} scanCta={t("scanCta")} url={TEST_MENU_URL} />
          <QrCard label={t("liveLabel")} scanCta={t("scanCta")} url={LIVE_MENU_URL} />
        </div>
      </div>
    </main>
  );
}
