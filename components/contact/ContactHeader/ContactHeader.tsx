import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export async function ContactHeader() {
  const t = await getTranslations("contactPage.header");

  return (
    <header className="bg-background px-6 pt-16 pb-10 md:px-12 md:pt-20 lg:px-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h1 className="mt-3 font-display text-5xl tracking-tight text-foreground uppercase md:text-7xl">
            {t("heading")}
          </h1>
          <p className="mt-4 font-display text-base text-muted-foreground">{t("intro")}</p>
        </Reveal>
      </div>
    </header>
  );
}
