import type { SportCategory } from "@/types/sports";

export const SPORTS_CATEGORIES: SportCategory[] = [
  { id: "football", icon: "football", name: { en: "Football", fr: "Football" } },
  {
    id: "champions-league",
    icon: "trophy",
    name: { en: "Champions League", fr: "Ligue des Champions" },
  },
  { id: "ufc", icon: "ufc", name: { en: "UFC", fr: "UFC" } },
  { id: "f1", icon: "f1", name: { en: "Formula 1", fr: "Formule 1" } },
  { id: "nba", icon: "basketball", name: { en: "NBA", fr: "NBA" } },
];
