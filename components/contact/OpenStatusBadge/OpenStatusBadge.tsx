"use client";

import { useTranslations } from "next-intl";
import { useOpenStatus } from "@/hooks/useOpenStatus";
import type { OpeningHoursRange } from "@/types/restaurant";

export function OpenStatusBadge({ hours }: { hours: OpeningHoursRange[] }) {
  const t = useTranslations("contactPage.findUs");
  const isOpen = useOpenStatus(hours);

  if (isOpen === undefined) return null;

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border-2 border-secondary-foreground/20 px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-secondary-foreground uppercase"
    >
      <span className="relative flex size-1.5" aria-hidden="true">
        {isOpen && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-gold/80 motion-reduce:animate-none" />
        )}
        <span className={`relative inline-flex size-1.5 rounded-full ${isOpen ? "bg-accent-gold" : "bg-secondary-foreground/40"}`} />
      </span>
      {isOpen ? t("openNow") : t("closedNow")}
    </span>
  );
}
