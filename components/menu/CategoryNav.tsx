"use client";

import { useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { useScrollSpy } from "./useScrollSpy";
import { useMenuFilter } from "./MenuFilterContext";
import type { MenuNavItem } from "@/types/menu";

/**
 * Matches the section headings' `scroll-mt-[136px] md:scroll-mt-[160px]` —
 * both this bar's own sticky offset and the scroll-spy band need to agree
 * with where sections actually land once scrolled to, or the active pill
 * and the visible section drift apart.
 */
const STICKY_OFFSET = 160;

export function CategoryNav({ items }: { items: MenuNavItem[] }) {
  const locale = useLocale() as "en" | "fr";
  const t = useTranslations("menu");
  const shouldReduceMotion = useSafeReducedMotion();
  const navRef = useRef<HTMLElement>(null);
  const { scope } = useMenuFilter();
  const visibleItems = items.filter((item) => scope === "all" || item.scope === scope);
  const ids = visibleItems.map((item) => item.id);
  const activeId = useScrollSpy(ids, STICKY_OFFSET);

  // Keep the active pill in view as the page scrolls past sections, not
  // just when a pill is clicked — otherwise on mobile the highlighted
  // category can drift off-screen while the user scrolls the page itself.
  useEffect(() => {
    if (!activeId) return;
    const pill = navRef.current?.querySelector<HTMLElement>(`[data-category-id="${activeId}"]`);
    pill?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId, shouldReduceMotion]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET + 8;
    window.scrollTo({ top: y, behavior: shouldReduceMotion ? "auto" : "smooth" });

    const pill = navRef.current?.querySelector<HTMLElement>(`[data-category-id="${id}"]`);
    pill?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });

    history.replaceState(null, "", `#${id}`);
  }

  return (
    <div className="sticky top-16 z-30 border-b border-foreground/10 bg-background/95 backdrop-blur-sm md:top-20">
      <nav
        ref={navRef}
        aria-label={t("categoryNavLabel")}
        className="mx-auto flex max-w-[1600px] gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] md:px-12 md:py-4 lg:px-16 [&::-webkit-scrollbar]:hidden"
      >
        {visibleItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              data-category-id={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "shrink-0 rounded-full border-2 px-4 py-2 text-xs font-bold tracking-[0.08em] whitespace-nowrap uppercase transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isActive
                  ? "border-brand-accent bg-brand-accent text-primary-foreground"
                  : "border-foreground/15 text-muted-foreground hover:border-brand-accent/50 hover:text-foreground",
              )}
            >
              {item.label[locale]}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
