"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "square";
}

const ASPECT_CLASSES: Record<GalleryImage["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/**
 * `onSelect` is the hook point a future lightbox wires up to — no dialog is
 * rendered here yet, that's intentionally out of scope for this pass.
 */
export function GalleryGrid({
  images,
  onSelect,
}: {
  images: GalleryImage[];
  onSelect?: (index: number) => void;
}) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => onSelect?.(index)}
          aria-haspopup="dialog"
          aria-label={image.alt}
          className={cn(
            "group relative mb-6 block w-full overflow-hidden rounded-2xl break-inside-avoid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold",
            ASPECT_CLASSES[image.aspect],
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            quality={90}
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 100vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-brand-accent/0 transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-accent/20"
          />
        </button>
      ))}
    </div>
  );
}
