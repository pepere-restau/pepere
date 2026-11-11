function to24Hour(hour: number, meridiem?: string): number {
  if (!meridiem) return hour;
  const isPM = meridiem.toUpperCase() === "PM";
  if (hour === 12) return isPM ? 12 : 0;
  return isPM ? hour + 12 : hour;
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export interface ParsedOpeningHours {
  openMin: number;
  closeMin: number;
  /** 24h "HH:MM", for schema.org's OpeningHoursSpecification. */
  opens: string;
  closes: string;
}

/**
 * Parses either a 24h ("17:00 – 02:00") or 12h ("5 PM – 2 AM") range —
 * `restaurantFacts.hours[].hours` is a display string that may use either
 * — shared by the open/closed badge and the Restaurant JSON-LD so both stay
 * in sync with whatever format the content is written in.
 */
export function parseOpeningHours(hours: string): ParsedOpeningHours | null {
  const match = hours.match(
    /(\d{1,2})(?::(\d{2}))?\s*([AaPp][Mm])?\s*[–-]\s*(\d{1,2})(?::(\d{2}))?\s*([AaPp][Mm])?/,
  );
  if (!match) return null;

  const [, openHourRaw, openMinuteRaw, openMeridiem, closeHourRaw, closeMinuteRaw, closeMeridiem] =
    match;

  const openHour = to24Hour(Number(openHourRaw), openMeridiem);
  const closeHour = to24Hour(Number(closeHourRaw), closeMeridiem);
  const openMinute = Number(openMinuteRaw ?? 0);
  const closeMinute = Number(closeMinuteRaw ?? 0);

  return {
    openMin: openHour * 60 + openMinute,
    closeMin: closeHour * 60 + closeMinute,
    opens: `${pad(openHour)}:${pad(openMinute)}`,
    closes: `${pad(closeHour)}:${pad(closeMinute)}`,
  };
}
