"use client";

import type { ReactNode } from "react";
import { useDrawer } from "@/features/shell/drawer";

export function ShellGrid({ children }: { children: ReactNode }) {
  const { drawerOnly } = useDrawer();
  return <div className={drawerOnly ? undefined : "lg:grid lg:grid-shell"}>{children}</div>;
}
