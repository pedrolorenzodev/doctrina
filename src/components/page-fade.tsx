"use client";

import { useState, type ReactNode } from "react";

let firstRender = true;

export function PageFade({ children }: { children: ReactNode }) {
  const [fade] = useState(() => {
    const afterNavigation = !firstRender;
    firstRender = false;
    return afterNavigation;
  });
  return <div className={fade ? "min-w-0 page-fade" : "min-w-0"}>{children}</div>;
}
