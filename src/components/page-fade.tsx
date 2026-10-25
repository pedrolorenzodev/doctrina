"use client";

import { useEffect, useState, type ReactNode } from "react";

let hydrated = false;

export function PageFade({ children }: { children: ReactNode }) {
  const [fade] = useState(() => typeof window !== "undefined" && hydrated);
  useEffect(() => {
    hydrated = true;
  }, []);
  return <div className={fade ? "min-w-0 page-fade" : "min-w-0"}>{children}</div>;
}
