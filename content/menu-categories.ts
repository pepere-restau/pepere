import type { MenuNavItem } from "@/types/menu";
import { foodCategories } from "@/content/menu-full";
import { drinkCategories } from "@/content/drinks-data";

/**
 * Single source of truth for section order — the sticky category nav and
 * the page's section render order are both derived from this, so they can
 * never drift out of sync with each other.
 */
export const menuNavItems: MenuNavItem[] = [
  ...foodCategories.map((category) => ({ id: category.id, label: category.name, scope: "kitchen" as const })),
  ...drinkCategories.map((category) => ({ id: category.id, label: category.name, scope: "bar" as const })),
];
