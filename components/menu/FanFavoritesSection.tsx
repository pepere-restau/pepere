import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingGlow } from "@/components/motion/FloatingGlow";
import { DishCard } from "./DishCard";
import type { MenuCategory } from "@/types/menu";

/**
 * The one section every other Menu section defers to: dark, first below the
 * category nav, matching the Hero's `bg-surface-warm` treatment so it reads
 * as a deliberate showcase rather than "just another category."
 */
export function FanFavoritesSection({
  category,
  locale,
  eyebrow,
}: {
  category: MenuCategory;
  locale: "en" | "fr";
  eyebrow: string;
}) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="bg-surface-warm relative scroll-mt-[136px] overflow-hidden px-6 py-20 md:scroll-mt-[160px] md:px-12 md:py-24 lg:px-16"
    >
      <FloatingGlow />

      <div className="relative mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Eyebrow tone="onDark" className="justify-center">
            {eyebrow}
          </Eyebrow>
          <h2
            id={`${category.id}-heading`}
            className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
          >
            {category.name[locale]}
          </h2>
          {category.description && (
            <p className="mt-4 font-display text-base text-secondary-foreground/70">
              {category.description[locale]}
            </p>
          )}
        </Reveal>

        <div className="mt-10 divide-y divide-secondary-foreground/10">
          {category.dishes.map((dish, index) => (
            <Reveal key={dish.id} delay={0.04 * (index % 6)}>
              <DishCard dish={dish} locale={locale} tone="onDark" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
