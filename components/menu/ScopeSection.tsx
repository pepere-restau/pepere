"use client";

import type { ReactNode } from "react";
import { useMenuFilter } from "@/components/menu/MenuFilterContext";

/**
 * Wraps a server-rendered section so the Kitchen/Bar filter can hide it —
 * `hidden` rather than unmounting, so already-fetched section content stays
 * in the DOM (harmless for the scroll-spy, which only reacts to elements
 * that are actually laid out).
 */
export function ScopeSection({
  scope,
  children,
}: {
  scope: "kitchen" | "bar";
  children: ReactNode;
}) {
  const { scope: activeScope } = useMenuFilter();
  const visible = activeScope === "all" || activeScope === scope;

  return <div hidden={!visible}>{children}</div>;
}
