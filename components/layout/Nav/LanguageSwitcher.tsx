"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex items-center gap-1.5 text-xs font-bold tracking-[0.12em] uppercase"
    >
      {routing.locales.map((code, index) => {
        const isActive = locale === code;
        return (
          <span key={code} className="flex items-center gap-1.5">
    {index > 0 && (
              <span aria-hidden="true" className="text-foreground/30">
                /
              </span>
            )}
            {isActive ? (
              <span aria-current="true" className="text-brand-accent">
                {LOCALE_LABELS[code]}
              </span>
            ) : (
              <Link
                href={pathname}
                locale={code}
                aria-label={
                  code === "en" ? t("switchToEnglish") : t("switchToFrench")
                }
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {LOCALE_LABELS[code]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
