import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { DrinkCategory } from "@/types/menu";

/**
 * Deliberately closer to the printed card's own layout than the food cards:
 * a dotted leader from name to price, grouped under each subcategory — the
 * bar list doesn't need photography or marketing copy to feel considered.
 */
export async function DrinksSection({
  category,
  locale,
  eyebrow,
  alt = false,
}: {
  category: DrinkCategory;
  locale: "en" | "fr";
  eyebrow?: string;
  alt?: boolean;
}) {
  const t = await getTranslations("menu.units");

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className={cn(
        "scroll-mt-[136px] px-6 py-16 md:scroll-mt-[160px] md:px-12 md:py-20 lg:px-16",
        alt ? "bg-muted/40" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
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
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {category.subcategories.map((sub, index) => (
            <Reveal key={sub.id} delay={0.05 * (index % 4)}>
              <h3 className="font-display text-lg tracking-tight text-brand-accent uppercase">
                {sub.name[locale]}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 border-t border-foreground/10 pt-4">
                {sub.items.map((item, itemIndex) => (
                  <li
                    key={`${item.name}-${item.unit ?? itemIndex}`}
                    className="flex items-baseline gap-2 text-sm"
                  >
                    <span className="text-foreground">
                      {item.name}
                      {item.unit && (
                        <span className="ml-1.5 text-[10px] font-bold tracking-[0.06em] text-muted-foreground uppercase">
                          ({t(item.unit)})
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mb-1 min-w-4 flex-1 border-b border-dotted border-foreground/25"
                    />
                    <span className="shrink-0 font-bold text-brand-accent">
                      {item.price ?? "—"}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
