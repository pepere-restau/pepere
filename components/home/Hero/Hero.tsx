import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FloatingGlow } from "@/components/motion/FloatingGlow";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Reveal } from "@/components/motion/Reveal";

export async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-10 md:px-12 md:py-14 lg:px-16"
    >
      <FloatingGlow />

      {/* Text lives on its own, on the section's plain dark background —
          never on top of the photo — so it stays perfectly legible and the
          photo below can be a clean, standalone visual. */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Reveal>
          <Eyebrow tone="onDark" className="justify-center text-secondary-foreground">
            {t("eyebrow")}
          </Eyebrow>
        </Reveal>

        <MaskReveal delay={0.15}>
          <h1 id="hero-heading">
            <Image
              src="/logo.svg"
              alt="Pépère"
              width={371}
              height={100}
              priority
              className="h-16 w-auto brightness-0 invert sm:h-20 md:h-28"
            />
          </h1>
        </MaskReveal>
      </div>

      <Reveal
        delay={0.75}
        y={32}
        className="relative z-10 mx-auto mt-8 aspect-video w-full max-w-[1400px] overflow-hidden rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.35)] md:mt-10"
      >
        <video
          src="https://res.cloudinary.com/udflrhgq/video/upload/q_auto,f_auto/v1785000085/P%C3%A9p%C3%A8re_Marrakech_le_bon_plan_pour_les_soirs_de_match...mais_pas_que_akaqqv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </Reveal>

      <div
        aria-hidden="true"
        className="relative z-10 mt-10 flex flex-col items-center gap-2 text-secondary-foreground/70 md:mt-14"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
          {t("scrollHint")}
        </span>
        <ChevronDown
          strokeWidth={2}
          className="size-4 animate-bounce motion-reduce:animate-none"
        />
      </div>
    </section>
  );
}
