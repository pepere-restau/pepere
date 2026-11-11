/**
 * The site's entire motion vocabulary reduces to one easing curve and two
 * duration tiers — narrative/cinematic reveals vs. functional/system feedback.
 * Every animation in the app should read from these constants rather than
 * defining its own timing, so restraint stays structural, not a guideline.
 */
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  system: 0.2,
  cinematic: 1.2,
} as const;
