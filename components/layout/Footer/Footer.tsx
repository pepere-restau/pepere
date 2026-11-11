import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { restaurantFacts } from "@/content/restaurant-facts";
import { FloatingGlow } from "@/components/motion/FloatingGlow";
import { NAV_LINKS } from "@/components/layout/Nav/navLinks";

/**
 * Deliberately minimal — the homepage's Contact section already covers
 * address, hours, phone, email, and the booking CTA in full detail right
 * above this. Repeating all of that here just duplicated it, so the footer
 * sticks to brand + navigation + socials + copyright.
 */
export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tHero = await getTranslations("home.hero");
  const facts = restaurantFacts;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-secondary px-6 pt-16 pb-8 md:px-12 lg:px-16">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-brand-accent" />
      <FloatingGlow />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-12 border-b border-secondary-foreground/10 pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Pépère"
                width={371}
                height={100}
                className="h-[67px] w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 font-display text-sm text-secondary-foreground/70">{t("tagline")}</p>

            {(facts.social.instagram || facts.social.facebook) && (
              <div className="mt-6 flex items-center gap-3">
                {facts.social.instagram && (
                  <a
                    href={facts.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex size-10 items-center justify-center rounded-full border-2 border-secondary-foreground/20 text-[11px] font-bold text-secondary-foreground uppercase transition-colors hover:border-brand-accent hover:bg-brand-accent"
                  >
                    IG
                  </a>
                )}
                {facts.social.facebook && (
                  <a
                    href={facts.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-10 items-center justify-center rounded-full border-2 border-secondary-foreground/20 text-[11px] font-bold text-secondary-foreground uppercase transition-colors hover:border-brand-accent hover:bg-brand-accent"
                  >
                    FB
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-accent-gold uppercase">
              {t("explore")}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs text-secondary-foreground/50">
            © {year} Pépère. {t("rightsReserved")}
          </p>
          <p className="text-xs font-bold tracking-[0.14em] text-secondary-foreground/50 uppercase">
            {tHero("eyebrow")}
          </p>
        </div>
      </div>
    </footer>
  );
}
