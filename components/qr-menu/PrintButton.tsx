"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintButton({ label }: { label: string }) {
  return (
    <Button type="button" onClick={() => window.print()} className="print:hidden">
      <Printer aria-hidden="true" data-icon="inline-start" />
      {label}
    </Button>
  );
}
