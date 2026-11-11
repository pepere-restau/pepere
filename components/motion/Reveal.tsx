"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { DURATION, EASE_PREMIUM } from "@/lib/motion-tokens";

/**
 * The workhorse entrance: a restrained fade + rise, triggered once as the
 * element crosses into view. This is the lightweight, opacity/transform-only
 * variant of the site's mask-reveal language — used for text and cards.
 *
 * `whileInView` always targets the same visible state regardless of reduced
 * motion — only the starting point and timing change. Reduced motion itself
 * is read via `useSafeReducedMotion`, which stays `false` until after mount
 * to match the server's render and avoid a hydration mismatch.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const shouldReduceMotion = useSafeReducedMotion();
  const Component = motion[as];
  const visible = { opacity: 1, y: 0 };

  return (
    <Component
      initial={shouldReduceMotion ? visible : { opacity: 0, y }}
      whileInView={visible}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : DURATION.cinematic,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
