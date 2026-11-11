import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  variant = "neutral",
  children,
  className,
}: {
  variant?: "live" | "neutral";
  children: ReactNode;
  className?: string;
}) {
  if (variant === "live") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-primary-foreground uppercase",
          className,
        )}
      >
        <span className="relative flex size-1.5" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary-foreground/80 motion-reduce:animate-none" />
          <span className="relative inline-flex size-1.5 rounded-full bg-secondary-foreground" />
        </span>
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-secondary-foreground/25 px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-secondary-foreground/80 uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
