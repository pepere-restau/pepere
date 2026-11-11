import { getLocale, getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingGlow } from "@/components/motion/FloatingGlow";
import { GalleryGrid, type GalleryImage } from "./GalleryGrid";
import type { LocalizedText } from "@/types/menu";

const GALLERY_IMAGES: { src: string; aspect: GalleryImage["aspect"]; alt: LocalizedText }[] = [
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1784896940/IMG_6406_hz3riw.jpg",
    aspect: "landscape",
    alt: { en: "Live music filling the room", fr: "La musique live qui remplit la salle" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785004782/IMG_6882_jhetwv.jpg",
    aspect: "portrait",
    alt: { en: "A night at Pépère", fr: "Une soirée chez Pépère" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785004880/IMG_7598_cslfex.jpg",
    aspect: "square",
    alt: { en: "The Pépère atmosphere, up close", fr: "L'ambiance Pépère, de près" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785004880/IMG_7529-Enhanced-NR_ddvvuk.jpg",
    aspect: "square",
    alt: { en: "The Pépère atmosphere, up close", fr: "L'ambiance Pépère, de près" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785002843/1781292756-67_1_znqbd8.jpg",
    aspect: "landscape",
    alt: { en: "Friends gathered around the table at Pépère", fr: "Des amis réunis autour de la table chez Pépère" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785003029/33accd06-47e0-4523-8920-09afa3e3d62f_hrmcjb.jpg",
    aspect: "landscape",
    alt: { en: "The Pépère dining room, full and lively", fr: "La salle de Pépère, pleine de vie" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785003041/1781292747-68_qxktom.jpg",
    aspect: "landscape",
    alt: { en: "The Pépère dining room", fr: "La salle de Pépère" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785006079/IMG_7093_htylpd.jpg",
    aspect: "portrait",
    alt: { en: "A night at Pépère", fr: "Une soirée chez Pépère" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785004879/IMG_7445_stcb8f.jpg",
    aspect: "square",
    alt: { en: "The Pépère atmosphere, up close", fr: "L'ambiance Pépère, de près" },
  },
  {
    src: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto:best,w_1600,c_limit/v1785004784/IMG_7161_iebhot.jpg",
    aspect: "portrait",
    alt: { en: "A night at Pépère", fr: "Une soirée chez Pépère" },
  },
];

export async function Gallery() {
  const t = await getTranslations("home.gallery");
  const locale = await getLocale();
  const localeKey = locale as "en" | "fr";

  const images: GalleryImage[] = GALLERY_IMAGES.map((image) => ({
    src: image.src,
    aspect: image.aspect,
    alt: image.alt[localeKey],
  }));

  return (
    <section
      aria-labelledby="gallery-heading"
      className="bg-surface-warm relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <FloatingGlow />
      <div className="relative mx-auto max-w-[1600px]">
        <Reveal>
          <Eyebrow tone="onDark">{t("eyebrow")}</Eyebrow>
          <h2
            id="gallery-heading"
            className="mt-3 font-display text-5xl tracking-tight text-secondary-foreground uppercase md:text-6xl"
          >
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-16">
          <GalleryGrid images={images} />
        </div>
      </div>
    </section>
  );
}
