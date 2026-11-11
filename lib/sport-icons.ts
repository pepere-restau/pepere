import { CircleDot, Goal, Gauge, Swords, Trophy } from "lucide-react";
import type { SportIcon } from "@/types/sports";

export const SPORT_ICONS: Record<SportIcon, typeof Goal> = {
  football: Goal,
  trophy: Trophy,
  ufc: Swords,
  f1: Gauge,
  basketball: CircleDot,
};
