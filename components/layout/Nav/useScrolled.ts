"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether the page has scrolled past a small threshold, using an
 * IntersectionObserver against a sentinel rather than a scroll listener —
 * keeps the check off the main-thread scroll path entirely.
 *
 * The sentinel itself is `offset`px tall (not rootMargin-shrunk from a 1px
 * mark) so it naturally scrolls out of view once the page has moved past
 * that many pixels. A negative top rootMargin on a 1px sentinel looked
 * equivalent on paper but isn't: the sentinel sits at document y=0, so a
 * shrunk-from-the-top root never actually contains it, even at scrollY=0 —
 * `scrolled` would read `true` from the very first frame.
 */
export function useScrolled(offset = 32) {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [offset]);

  return { scrolled, sentinelRef, offset };
}
