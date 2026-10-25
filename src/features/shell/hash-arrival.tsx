"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToLayoutPosition } from "@/lib/scroll";

function targetOf(hash: string): HTMLElement | null {
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

export function HashArrival() {
  const pathname = usePathname();
  useEffect(() => {
    if (location.hash.length < 2) return;
    const frame = requestAnimationFrame(() => {
      const target = targetOf(location.hash);
      if (target) scrollToLayoutPosition(target, true);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return null;
}
