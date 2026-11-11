"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is "active" for the sticky category nav. Rather
 * than a scroll listener, it watches a thin band just below the stacked
 * sticky bars (main nav + category nav) via IntersectionObserver.
 *
 * When a short section (e.g. the single-dish Grill spotlight) follows a
 * tall one, both can intersect the band at once — the tall section's
 * bottom edge barely poking in (its `top` deeply negative, since it began
 * far above the viewport) alongside the short section that just started
 * (`top` near zero). Naively picking the smallest `top` would keep picking
 * the tall section forever. Instead, a section whose top has just crossed
 * below the sticky bars (>= 0) is preferred over one whose top is negative
 * — it's the one the user just scrolled to — and only when nothing
 * qualifies do we fall back to the least-negative top (mid-way through a
 * long section with nothing else in view).
 */
export function useScrollSpy(ids: string[], offsetPx: number) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const current = visible.reduce((a, b) => {
          const aTop = a.boundingClientRect.top;
          const bTop = b.boundingClientRect.top;
          if (aTop >= 0 && bTop >= 0) return aTop < bTop ? a : b;
          if (aTop >= 0) return a;
          if (bTop >= 0) return b;
          return aTop > bTop ? a : b;
        });
        setActiveId(current.target.id);
      },
      { rootMargin: `-${offsetPx}px 0px -65% 0px`, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offsetPx]);

  return activeId;
}
