"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";

/**
 * Restrained scroll-linked depth: a capped vertical offset (transform only),
 * used sparingly — depth is a rare accent in this system, not a default.
 * Uses `useSafeReducedMotion` rather than framer-motion's hook directly to
 * avoid a hydration mismatch (the server always renders the un-reduced
 * transform since it has no `matchMedia` to check).
 */
export function Parallax({
  children,
  offset = 40,
  className,
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y }}
        className="relative h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
