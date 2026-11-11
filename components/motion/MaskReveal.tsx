"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";
import { DURATION, EASE_PREMIUM } from "@/lib/motion-tokens";

/**
 * The site's signature reveal: content is unmasked via an animated clip-path
 * wipe rather than a plain fade. Reserved for special, one-per-page moments
 * (the hero wordmark, a chapter opener) — not a default for every element.
 *
 * `whileInView` always targets the same visible state regardless of reduced
 * motion — only the starting point and timing change. Reduced motion itself
 * is read via `useSafeReducedMotion`, which stays `false` until after mount
 * to match the server's render and avoid a hydration mismatch.
 */
export function MaskReveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left";
  className?: string;
}) {
  const shouldReduceMotion = useSafeReducedMotion();

  const hidden =
    direction === "up" ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)";
  const visible = { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 };

  return (
    <motion.div
      initial={shouldReduceMotion ? visible : { clipPath: hidden, opacity: 0.001 }}
      whileInView={visible}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0 : DURATION.cinematic,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
