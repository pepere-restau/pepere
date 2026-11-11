import { cn } from "@/lib/utils";

/**
 * Decorative animated equalizer bars — pure CSS, no JS. Purely ambient
 * (aria-hidden), used sparingly for the Entertainment section's DJ/live
 * music energy.
 */
export function Equalizer({ className }: { className?: string }) {
  const bars = [0, 1, 2, 3, 4];

  return (
    <div aria-hidden="true" className={cn("flex h-4 items-end gap-1", className)}>
      {bars.map((i) => (
        <span
          key={i}
          className="animate-equalizer h-full w-1 rounded-full bg-brand-accent motion-reduce:animate-none"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
