import { Clock, MonitorPlay, Wallet, Music } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

const VALUES = [
  { key: "value1", icon: Clock },
  { key: "value2", icon: MonitorPlay },
  { key: "value3", icon: Wallet },
  { key: "value4", icon: Music },
] as const;

export async function StoryNarrative() {
  const t = await getTranslations("about.narrative");

  return (
    <section
      aria-labelledby="narrative-heading"
      className="bg-background relative px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2
              id="narrative-heading"
              className="mt-3 font-display text-5xl tracking-tight text-foreground uppercase md:text-6xl"
            >
              {t("heading")}
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p className="max-w-md font-display text-base text-muted-foreground">
                {t("paragraph1")}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-md font-display text-base text-muted-foreground">
                {t("paragraph2")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="max-w-md font-display text-base text-muted-foreground">
                {t("paragraph3")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.35} className="mt-10">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
              {t("valuesLabel")}
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {VALUES.map(({ key, icon: Icon }) => (
                <li
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-4 py-2 text-xs font-bold tracking-[0.08em] text-foreground uppercase"
                >
                  <Icon className="size-3.5 text-brand-accent" strokeWidth={2} aria-hidden="true" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.45} className="mt-8">
            <CtaLink href="/menu" tone="onLight" variant="outline" className="w-full sm:w-auto">
              {t("cta")}
            </CtaLink>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal delay={0.15} className="relative aspect-[4/5] w-full md:aspect-[16/11]">
            <Parallax offset={28} className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784998488/1781292768-46_1_a84d9d.webp"
                alt="The screens lit up for a big match at Pépère"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </Parallax>
          </Reveal>

          <Reveal
            delay={0.35}
            className="absolute -bottom-6 -left-4 aspect-square w-2/5 overflow-hidden rounded-2xl border-4 border-background shadow-[0_24px_48px_rgba(0,0,0,0.35)] sm:-bottom-10 sm:-left-10 sm:aspect-[3/2]"
          >
            <Image
              src="https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1785002843/1781292756-67_1_znqbd8.jpg"
              alt="Friends gathered around the table at Pépère"
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
