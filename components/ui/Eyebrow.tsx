import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The small kicker label used above every section heading. Centralized so
 * the dark-section color fix (red fails contrast on near-black; gold is the
 * proven safe accent there) only has to be right in one place.
 */
export function Eyebrow({
  children,
  tone = "onLight",
  className,
}: {
  children: ReactNode;
  tone?: "onLight" | "onDark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase",
        tone === "onDark" ? "text-accent-gold" : "text-brand-accent",
        className,
      )}
    >
      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-current" />
      {children}
    </p>
  );
}
