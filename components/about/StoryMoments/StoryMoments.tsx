import { MonitorPlay, Heart, Users, Music } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingGlow } from "@/components/motion/FloatingGlow";

const MOMENTS = [
  { key: "matchDay", icon: MonitorPlay },
  { key: "dateNight", icon: Heart },
  { key: "familySunday", icon: Users },
  { key: "afterDark", icon: Music },
] as const;

export async function StoryMoments() {
  const t = await getTranslations("about.moments");

  return (
    <section
      aria-labelledby="moments-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <FloatingGlow />
      <div className="relative mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="onDark">{t("eyebrow")}</Eyebrow>
          <h2
            id="moments-heading"
            className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-4 font-display text-base text-secondary-foreground/80">{t("intro")}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOMENTS.map(({ key, icon: Icon }, index) => (
            <Reveal key={key} delay={0.1 * index}>
              <article className="h-full rounded-2xl border-2 border-secondary-foreground/10 p-6 transition-colors hover:border-brand-accent/40">
                <div className="flex size-11 items-center justify-center rounded-full bg-brand-accent text-primary-foreground">
                  <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-secondary-foreground uppercase">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-2 font-display text-sm text-secondary-foreground/70">
                  {t(`${key}.description`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
