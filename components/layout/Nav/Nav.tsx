"use client";

import { useRef, useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { CtaLink } from "@/components/ui/CtaLink";
import { NAV_LINKS } from "./navLinks";
import { NavLink } from "./NavLink";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu, PANEL_ID } from "./MobileMenu";
import { useScrolled } from "./useScrolled";

export function Nav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isMenuPage = pathname === "/menu";
  const { scrolled, sentinelRef, offset } = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {/* Zero-height wrapper at the true top of the page; the sentinel inside
          is `offset`px tall so it scrolls out of view exactly at the
          threshold, observed instead of attaching a scroll listener. */}
      <div className="relative h-0">
        <div
          ref={sentinelRef}
          className="absolute top-0 w-full"
          style={{ height: offset }}
          aria-hidden="true"
        />
      </div>

      {/* Always a solid, light bar — the hero sits below it rather than
          under it, so there's no transparent/scrolled color swap to manage. */}
      <header
        className={cn(
          "sticky top-0 z-40 border-b bg-background transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-foreground/10 shadow-[0_1px_20px_rgba(17,17,17,0.08)]"
            : "border-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-6 transition-[height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-12 lg:px-16",
            scrolled ? "h-16 md:h-20" : "h-20 md:h-24",
          )}
        >
          <div className="flex items-center gap-0 md:contents">
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-haspopup="dialog"
              aria-controls={PANEL_ID}
              aria-label={t("openMenu")}
              className="rounded-md p-2 text-foreground outline-none md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold"
            >
              <MenuIcon strokeWidth={2} className="size-6" aria-hidden="true" />
            </button>

            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Pépère"
                width={371}
                height={100}
                priority
                className="h-[32px] w-auto md:h-[64px]"
              />
            </Link>
          </div>

          {/* Mobile: the language switcher and a compact "View Menu" pill stay
              visible in the bar itself, styled like the "Book a Table" CTA;
              the nav links live in the drawer instead. */}
          <div className="flex items-center gap-2 md:hidden">
            {!isMenuPage && (
              <CtaLink href="/menu" tone="onLight" className="px-4 py-2 text-[10px]">
                {t("viewMenu")}
              </CtaLink>
            )}
            <LanguageSwitcher />
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8" aria-label={t("mainNavigation")}>
              {NAV_LINKS.filter((link) => link.key !== "menu").map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {t(link.key)}
                </NavLink>
              ))}
            </nav>

            <LanguageSwitcher />

            <div className="flex items-center gap-3">
              {!isMenuPage && (
                <CtaLink
                  href="/menu"
                  tone="onLight"
                  variant="outline"
                  className="px-5 py-2.5 text-[11px]"
                >
                  {t("viewMenu")}
                </CtaLink>
              )}
              <CtaLink href="/contact" tone="onLight" className="px-5 py-2.5 text-[11px]">
                {t("bookTable")}
              </CtaLink>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        triggerRef={triggerRef}
      />
    </>
  );
}
