"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { Dish } from "@/types/menu";
import { DishModal } from "./DishModal";

export function DishCard({
  dish,
  locale,
  tone = "onLight",
  sizes = "(min-width: 640px) 112px, 96px",
}: {
  dish: Dish;
  locale: "en" | "fr";
  tone?: "onLight" | "onDark";
  sizes?: string;
}) {
  const isDark = tone === "onDark";
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("menu");

  return (
    <>
      <article
        id={dish.slug}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={t("viewDetails", { dish: dish.name[locale] })}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        className={cn(
          "flex scroll-mt-[136px] cursor-pointer items-start gap-4 rounded-2xl py-5 transition-colors md:scroll-mt-[160px]",
          isDark
            ? "hover:bg-secondary-foreground/5 focus-visible:ring-secondary-foreground/40"
            : "hover:bg-foreground/5 focus-visible:ring-ring",
          "outline-none focus-visible:ring-2",
        )}
      >
        {dish.image && (
          <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-2xl sm:w-28">
            <Image
              src={dish.image}
              alt={dish.name[locale]}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3
              className={cn(
                "font-display text-lg tracking-tight uppercase",
                isDark ? "text-secondary-foreground" : "text-foreground",
              )}
            >
              {dish.name[locale]}
            </h3>
            <span
              className={cn(
                "shrink-0 font-display text-base",
                isDark ? "text-accent-gold" : "text-brand-accent",
              )}
            >
              {dish.price}
            </span>
          </div>
          {dish.description && (
            <p
              className={cn(
                "mt-1 font-display text-sm",
                isDark ? "text-secondary-foreground/70" : "text-muted-foreground",
              )}
            >
              {dish.description[locale]}
            </p>
          )}
        </div>
      </article>

      <DishModal dish={dish} locale={locale} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
