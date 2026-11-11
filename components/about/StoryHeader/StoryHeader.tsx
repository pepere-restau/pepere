import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FloatingGlow } from "@/components/motion/FloatingGlow";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The page's one MaskReveal moment — reserved site-wide for a single chapter
 * opener per page (the Home hero uses the other one), so this page reads as
 * its own occasion rather than a Home retread.
 */
export async function StoryHeader() {
  const t = await getTranslations("about.header");

  return (
    <section
      aria-labelledby="story-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-16 md:px-12 md:py-20 lg:px-16"
    >
      <FloatingGlow />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Reveal>
          <Eyebrow tone="onDark" className="justify-center">
            {t("eyebrow")}
          </Eyebrow>
        </Reveal>

        <MaskReveal delay={0.15}>
          <h1
            id="story-heading"
            className="font-display text-6xl tracking-tight text-secondary-foreground uppercase sm:text-7xl md:text-8xl"
          >
            {t("heading")}
          </h1>
        </MaskReveal>

        <Reveal delay={0.3}>
          <p className="font-display text-base text-secondary-foreground/80 md:text-lg">
            {t("intro")}
          </p>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-[1400px] md:mt-14">
        <Reveal
          delay={0.45}
          y={32}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.35)] sm:aspect-video"
        >
          <Image
            src="https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1785003029/33accd06-47e0-4523-8920-09afa3e3d62f_hrmcjb.jpg"
            alt="The Pépère dining room, full and lively"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.55}
          className="absolute -right-4 -bottom-6 aspect-square w-2/5 overflow-hidden rounded-2xl border-4 border-background shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:-right-10 sm:-bottom-10 sm:aspect-[3/2]"
        >
          <Image
            src="https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1785002846/1781292762-59_gr6ape.jpg"
            alt="A night out at Pépère"
            fill
            sizes="(min-width: 640px) 24vw, 60vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
