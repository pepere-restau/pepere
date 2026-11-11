"use client";

import { LayoutGrid, ChefHat, Martini } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useMenuFilter, type MenuScope } from "@/components/menu/MenuFilterContext";

const OPTIONS = [
  { scope: "all", icon: LayoutGrid, labelKey: "all" },
  { scope: "kitchen", icon: ChefHat, labelKey: "kitchen" },
  { scope: "bar", icon: Martini, labelKey: "bar" },
] satisfies { scope: MenuScope; icon: typeof LayoutGrid; labelKey: string }[];

export function MenuFilterToggle() {
  const t = useTranslations("menu.filter");
  const { scope, setScope } = useMenuFilter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex items-center gap-1 rounded-full border-2 border-foreground/15 bg-background p-1"
    >
      {OPTIONS.map(({ scope: optionScope, icon: Icon, labelKey }) => {
        const isActive = scope === optionScope;
        return (
          <button
            key={optionScope}
            type="button"
            onClick={() => setScope(optionScope)}
            aria-pressed={isActive}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.08em] whitespace-nowrap uppercase transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isActive
                ? "bg-brand-accent text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-3.5" strokeWidth={2} aria-hidden="true" />
            {t(labelKey)}
          </button>
        );
      })}
    </div>
  );
}
