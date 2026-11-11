import { Music, Disc, Calendar, PartyPopper } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { ENTERTAINMENT_EVENTS, SHOWCASE_ACTS } from "@/content/entertainment-data";
import type { EntertainmentIcon } from "@/content/entertainment-data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Equalizer } from "@/components/motion/Equalizer";
import { FloatingGlow } from "@/components/motion/FloatingGlow";
import { cn } from "@/lib/utils";

/**
 * Alternating tilt per photo, like snapshots pinned to a wall rather than a
 * uniform grid — index-keyed so the pattern stays stable across re-renders.
 */
const SHOWCASE_TILTS = ["-rotate-3", "rotate-2", "rotate-3", "-rotate-2"];
const SHOWCASE_OFFSETS = ["", "sm:mt-10", "sm:mt-4", "sm:mt-14"];

const EVENT_ICONS: Record<EntertainmentIcon, typeof Music> = {
  music: Music,
  disc: Disc,
  calendar: Calendar,
  partyPopper: PartyPopper,
};

/**
 * The after-dark side of Pépère — the nightlife lineup and the live shows
 * and art nights. Two content zones, one heading, no repeated
 * eyebrow/section chrome between them. Sports content lives in its own
 * standalone OnTheBigScreen section instead.
 */
export async function WhatsOn() {
  const t = await getTranslations("home.whatsOn");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";

  return (
    <section
      aria-labelledby="whats-on-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <FloatingGlow />
      <div className="relative mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="onDark">{t("eyebrow")}</Eyebrow>
          <h2
            id="whats-on-heading"
            className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-4 font-display text-base text-secondary-foreground/80">{t("intro")}</p>
        </Reveal>

        {/* After Dark zone */}
        <div className="mt-16">
          <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold tracking-[0.2em] text-secondary-foreground/50 uppercase">
              {t("nightlifeLabel")}
            </p>
            <Equalizer className="hidden sm:flex" />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENTERTAINMENT_EVENTS.map((event, index) => {
              const Icon = EVENT_ICONS[event.icon];
              return (
                <Reveal key={event.id} delay={0.1 + index * 0.08}>
                  <article className="h-full rounded-2xl border-2 border-secondary-foreground/10 p-6 transition-colors hover:border-brand-accent/40">
                    <div className="flex size-11 items-center justify-center rounded-full bg-brand-accent text-primary-foreground">
                      <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl tracking-tight text-secondary-foreground uppercase">
                      {event.name[localeKey]}
                    </h3>
                    <p className="mt-2 font-display text-sm text-secondary-foreground/70">
                      {event.description[localeKey]}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Show & Art zone — a pinned photo wall instead of a card grid */}
        <div
          id="show-art"
          className="relative mt-20 scroll-mt-[136px] overflow-hidden border-t border-secondary-foreground/10 pt-16 md:mt-24 md:scroll-mt-[160px] md:pt-20"
        >
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] text-secondary-foreground/50 uppercase">
              {t("showArtLabel")}
            </p>
          </Reveal>

          <p
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-6 text-center font-display text-[20vw] leading-none tracking-tight text-secondary-foreground/[0.04] uppercase select-none sm:top-2 sm:text-[13vw] lg:text-[10vw]"
          >
            {t("showArtLabel")}
          </p>

          <div className="relative mt-12 flex flex-col gap-y-10 sm:flex-row sm:flex-nowrap sm:items-start sm:gap-x-12 sm:overflow-x-auto sm:pb-4 sm:pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SHOWCASE_ACTS.map((act, index) => (
              <Reveal
                key={act.id}
                delay={0.12 * index}
                className={cn(
                  "mx-auto w-full max-w-72 shrink-0 sm:mx-0 sm:w-auto sm:max-w-none sm:flex-1",
                  SHOWCASE_OFFSETS[index % SHOWCASE_OFFSETS.length],
                )}
              >
                <div
                  className={cn(
                    "group bg-background relative rounded-sm p-3 pb-6 shadow-[0_28px_56px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:rotate-0 hover:scale-[1.05]",
                    SHOWCASE_TILTS[index % SHOWCASE_TILTS.length],
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-3 rounded-sm bg-brand-accent/90 shadow-sm"
                  />
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={act.image}
                      alt={`${act.name[localeKey]} at Pépère Marrakech`}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 60vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-lg tracking-tight text-foreground uppercase">
                    {act.name[localeKey]}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{act.description[localeKey]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
