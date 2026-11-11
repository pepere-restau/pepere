"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import type { Dish } from "@/types/menu";

export function DishModal({
  dish,
  locale,
  open,
  onClose,
}: {
  dish: Dish;
  locale: "en" | "fr";
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("menu");
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const duration = shouldReduceMotion ? 0 : 0.25;
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease }}
        >
          <button
            type="button"
            aria-label={t("close")}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-modal-heading"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24, scale: shouldReduceMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.97 }}
            transition={{ duration, ease }}
            className="relative z-10 flex w-full max-w-md flex-col overflow-hidden rounded-3xl bg-card text-card-foreground shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t("close")}
              className="absolute top-3 right-3 z-10 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm"
            >
              <X strokeWidth={2} className="size-5" aria-hidden="true" />
            </button>

            {dish.image && (
              <div className="relative aspect-square w-full shrink-0">
                <Image
                  src={dish.image}
                  alt={dish.name[locale]}
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-col gap-2 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h2
                  id="dish-modal-heading"
                  className="font-display text-2xl tracking-tight text-foreground uppercase"
                >
                  {dish.name[locale]}
                </h2>
                <span className="shrink-0 font-display text-lg text-brand-accent">
                  {dish.price}
                </span>
              </div>
              {dish.description && (
                <p className="font-display text-base text-muted-foreground">
                  {dish.description[locale]}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
