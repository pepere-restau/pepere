"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { CtaLink } from "@/components/ui/CtaLink";
import { NAV_LINKS } from "./navLinks";

export const PANEL_ID = "mobile-nav-panel";

export function MobileMenu({
  open,
  onClose,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Focus management + a contained Tab trap while the overlay is open.
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

  // Return focus to the trigger button once the panel closes.
  useEffect(() => {
    if (!open) triggerRef.current?.focus();
  }, [open, triggerRef]);

  const duration = shouldReduceMotion ? 0 : 0.3;
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={PANEL_ID}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("mainNavigation")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration, ease }}
          className="fixed inset-0 z-50 flex flex-col bg-secondary px-8 py-6"
        >
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              aria-label={t("closeMenu")}
              className="rounded-md p-2 text-secondary-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold"
            >
              <X strokeWidth={2} className="size-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-start justify-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration, ease }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className="font-display text-4xl tracking-tight text-secondary-foreground uppercase"
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 pb-2">
            {!isMenuPage && (
              <CtaLink href="/menu" tone="onDark" variant="outline" onClick={onClose}>
                {t("viewMenu")}
              </CtaLink>
            )}
            <CtaLink href="/contact" tone="onDark" onClick={onClose}>
              {t("bookTable")}
            </CtaLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
