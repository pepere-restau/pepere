"use client";

import { useEffect, useState } from "react";
import type { OpeningHoursRange } from "@/types/restaurant";
import { parseOpeningHours } from "@/lib/opening-hours";

const RESTAURANT_TIME_ZONE = "Africa/Casablanca";

function getNowMinutes(): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: RESTAURANT_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
  return hour * 60 + minute;
}

function isWithinRange(nowMin: number, openMin: number, closeMin: number): boolean {
  const nowEff = nowMin < openMin ? nowMin + 1440 : nowMin;
  const closeEff = closeMin <= openMin ? closeMin + 1440 : closeMin;
  return nowEff >= openMin && nowEff < closeEff;
}

/**
 * Mount-guarded like `useBroadcastStatus` — "now" only exists client-side,
 * so this returns `undefined` through the server render and first paint to
 * avoid a hydration mismatch, then reveals the real open/closed status
 * computed in the restaurant's own timezone (not the visitor's).
 */
export function useOpenStatus(hours: OpeningHoursRange[]) {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    function update() {
      const nowMin = getNowMinutes();
      const open = hours.some((range) => {
        const parsed = parseOpeningHours(range.hours);
        return parsed ? isWithinRange(nowMin, parsed.openMin, parsed.closeMin) : false;
      });
      setIsOpen(open);
    }

    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [hours]);

  return isOpen;
}
