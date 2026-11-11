"use client";

import type { ReactNode } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className="group relative py-2 text-xs font-bold tracking-[0.12em] text-foreground/70 uppercase transition-colors hover:text-foreground"
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-[3px] origin-left scale-x-0 rounded-full bg-brand-accent transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100",
          isActive && "scale-x-100",
        )}
      />
    </Link>
  );
}
