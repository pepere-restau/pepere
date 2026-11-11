export interface LocalizedText {
  en: string;
  fr: string;
}

export type DishBadge =
  | "chefsChoice"
  | "bestSeller"
  | "spicy"
  | "vegetarian"
  | "new";

export interface Dish {
  id: number;
  slug: string;
  name: LocalizedText;
  /** Not every dish on the printed menu carries marketing copy — optional rather than invented. */
  description?: LocalizedText;
  price: string;
  /** Only the dishes we have real photography for — cards render text-only otherwise. */
  image?: string;
  badges?: DishBadge[];
}

export interface MenuCategory {
  id: string;
  name: LocalizedText;
  /** Only some printed sections carry an italic intro line — optional rather than invented. */
  description?: LocalizedText;
  dishes: Dish[];
}

/** Only wines distinguish a serving size; the word itself is translated via `menu.units.*` in messages, not stored per-item. */
export type DrinkUnit = "glass" | "half" | "bottle";

/**
 * Drinks are transcribed straight from the bar/wine card: mostly proper
 * nouns (brand names, cuvées) that read the same in English and French, so
 * unlike `Dish` these don't carry a bilingual name.
 */
export interface DrinkItem {
  name: string;
  unit?: DrinkUnit;
  /** Absent when the printed price was cropped out of the source photo. */
  price?: string;
}

export interface DrinkSubcategory {
  id: string;
  name: LocalizedText;
  items: DrinkItem[];
}

export interface DrinkCategory {
  id: string;
  name: LocalizedText;
  subcategories: DrinkSubcategory[];
}

/** Drives both the sticky category nav and the section render order on the Menu page. */
export interface MenuNavItem {
  id: string;
  label: LocalizedText;
  /** Which half of the "Kitchen or Bar" filter this category belongs to. */
  scope: "kitchen" | "bar";
}
