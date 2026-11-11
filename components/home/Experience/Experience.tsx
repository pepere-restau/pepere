import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { FloatingGlow } from "@/components/motion/FloatingGlow";

export async function Experience() {
  const t = await getTranslations("home.experience");

  return (
    <section
      aria-labelledby="experience-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <FloatingGlow />
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow tone="onDark">{t("eyebrow")}</Eyebrow>
            <h2
              id="experience-heading"
              className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
            >
              {t("heading")}
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p className="max-w-md font-display text-base text-secondary-foreground/80">
                {t("paragraph1")}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-md font-display text-base text-secondary-foreground/80">
                {t("paragraph2")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="max-w-md font-display text-base text-secondary-foreground/80">
                {t("paragraph3")}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal delay={0.15} className="relative aspect-[4/5] w-full md:aspect-[16/11]">
            <Parallax offset={28} className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://res.cloudinary.com/udflrhgq/image/upload/v1784910656/bb2c864bb41ee2602b02b58a06b9d9ef_v81qhg.webp"
                alt="The Pépère dining experience"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>

          <Reveal
            delay={0.35}
            className="absolute -bottom-6 -left-4 aspect-square w-2/5 overflow-hidden rounded-2xl border-4 border-background shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:-bottom-10 sm:-left-10 sm:aspect-[4/3]"
          >
            <Image
              src="https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784908548/IMG_7063_zgjawa.jpg"
              alt="A closer look at the Pépère experience"
              fill
              sizes="(min-width: 640px) 24vw, 60vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
