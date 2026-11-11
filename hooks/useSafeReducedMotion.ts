"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * `useReducedMotion()` resolves synchronously to the real client value on
 * the very first client render (via `matchMedia`), but the server has no
 * `window` and always assumes motion is fine — so branching on it directly
 * causes a hydration mismatch whenever a user actually has reduced motion
 * enabled. This defers to the server-safe `false` until after mount, then
 * reveals the real value on a normal post-hydration re-render.
 */
export function useSafeReducedMotion(): boolean {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? Boolean(shouldReduceMotion) : false;
}
