"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type MenuScope = "all" | "kitchen" | "bar";

const MenuFilterContext = createContext<{
  scope: MenuScope;
  setScope: (scope: MenuScope) => void;
} | null>(null);

/**
 * Wraps the whole Menu page (a Server Component) so the filter toggle, the
 * category nav pills, and every section can all read/set the same scope —
 * the server-rendered section content is passed through as `children`
 * rather than re-rendered here.
 */
export function MenuFilterProvider({ children }: { children: ReactNode }) {
  const [scope, setScope] = useState<MenuScope>("all");

  return (
    <MenuFilterContext.Provider value={{ scope, setScope }}>{children}</MenuFilterContext.Provider>
  );
}

export function useMenuFilter() {
  const context = useContext(MenuFilterContext);
  if (!context) throw new Error("useMenuFilter must be used within a MenuFilterProvider");
  return context;
}
