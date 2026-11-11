import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  variant?: "solid" | "ghost" | "outline";
  tone?: "onDark" | "onLight";
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const EXTERNAL_HREF = /^(https?:|tel:|mailto:)/;

/**
 * The one CTA treatment used everywhere. `solid` is a confident brand-red
 * pill fill at rest (not hover-only) — red only has safe contrast as a
 * background with cream text, never as small foreground text on our dark
 * near-black sections, so making it the button's own background sidesteps
 * that entirely and works identically regardless of what's behind it.
 * `ghost` is a lower-emphasis text link: red on light backgrounds (plenty
 * of contrast against cream), gold on dark ones (red-on-near-black fails
 * contrast, gold is our proven safe accent there).
 *
 * `href` is routed through next-intl's locale-aware Link for internal app
 * paths, or a plain anchor for external protocols (tel:, mailto:, http(s):)
 * — those must never be prefixed with a locale segment.
 */
export function CtaLink({
  href,
  variant = "solid",
  tone = "onDark",
  className,
  children,
  ...props
}: CtaLinkProps) {
  const isExternal = EXTERNAL_HREF.test(href);
  const externalProps = isExternal
    ? href.startsWith("http")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {}
    : {};

  if (variant === "ghost") {
    const ghostClassName = cn(
      "relative inline-block text-xs font-bold tracking-[0.14em] uppercase after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:scale-x-100",
      tone === "onDark" ? "text-accent-gold" : "text-brand-accent",
      className,
    );

    return isExternal ? (
      <a href={href} className={ghostClassName} {...externalProps} {...props}>
        {children}
      </a>
    ) : (
      <Link href={href} className={ghostClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (variant === "outline") {
    const outlineClassName = cn(
      "inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-xs font-bold tracking-[0.14em] whitespace-nowrap uppercase transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
      tone === "onDark"
        ? "border-secondary-foreground/25 text-secondary-foreground hover:border-accent-gold hover:text-accent-gold"
        : "border-foreground/20 text-foreground hover:border-brand-accent hover:text-brand-accent",
      className,
    );

    return isExternal ? (
      <a href={href} className={outlineClassName} {...externalProps} {...props}>
        {children}
      </a>
    ) : (
      <Link href={href} className={outlineClassName} {...props}>
        {children}
      </Link>
    );
  }

  const solidClassName = cn(
    "inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3.5 text-xs font-bold tracking-[0.14em] whitespace-nowrap text-primary-foreground uppercase transition-[filter,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:brightness-110 active:scale-[0.99]",
    className,
  );

  return isExternal ? (
    <a href={href} className={solidClassName} {...externalProps} {...props}>
      {children}
    </a>
  ) : (
    <Link href={href} className={solidClassName} {...props}>
      {children}
    </Link>
  );
}
