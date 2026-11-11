"use client";

import type { ReactNode } from "react";
import { useDrawer } from "@/features/shell/drawer";

export function ShellGrid({ children }: { children: ReactNode }) {
  const { home, homeTreeOpen, arriving } = useDrawer();
  return (
    <div
      data-shell=""
      data-home={home || undefined}
      data-home-tree={homeTreeOpen || undefined}
      data-tree-arriving={arriving || undefined}
      className="lg:grid lg:grid-shell"
    >
      {children}
    </div>
  );
}
