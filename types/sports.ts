import type { LocalizedText } from "./menu";

export type SportIcon = "football" | "ufc" | "f1" | "basketball" | "trophy";

export interface SportCategory {
  id: string;
  icon: SportIcon;
  name: LocalizedText;
}
