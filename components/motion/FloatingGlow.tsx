import { cn } from "@/lib/utils";

/**
 * Soft, blurred, low-opacity ambient light blobs for dark sections — pure
 * CSS drift, no JS. Purely decorative (aria-hidden) so it's exempt from text
 * contrast rules; this is where burgundy and gold get to be genuinely
 * confident without any legibility tradeoff.
 */
export function FloatingGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="animate-drift-glow absolute top-[10%] left-[8%] size-[36rem] rounded-full bg-brand-accent/20 blur-[120px]" />
      <div className="animate-drift-glow absolute right-[6%] bottom-[8%] size-[28rem] rounded-full bg-primary/10 blur-[110px] [animation-delay:-9s]" />
    </div>
  );
}
