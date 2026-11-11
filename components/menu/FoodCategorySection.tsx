import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { DishCard } from "./DishCard";
import type { MenuCategory } from "@/types/menu";

export function FoodCategorySection({
  category,
  locale,
  eyebrow,
  alt = false,
}: {
  category: MenuCategory;
  locale: "en" | "fr";
  eyebrow?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className={cn(
        "scroll-mt-[136px] px-6 py-16 md:scroll-mt-[160px] md:px-12 md:py-20 lg:px-16",
        alt ? "bg-muted/40" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2
            id={`${category.id}-heading`}
            className={cn(
              "font-display text-4xl tracking-tight text-foreground uppercase md:text-5xl",
              eyebrow && "mt-3",
            )}
          >
            {category.name[locale]}
          </h2>
          {category.description && (
            <p className="mt-3 font-display text-base text-muted-foreground italic">
              {category.description[locale]}
            </p>
          )}
        </Reveal>

        <div className="mt-8 divide-y divide-foreground/10">
          {category.dishes.map((dish, index) => (
            <Reveal key={dish.id} delay={0.04 * (index % 6)}>
              <DishCard dish={dish} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
