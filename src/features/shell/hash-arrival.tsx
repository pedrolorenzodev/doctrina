"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollToLayoutPosition } from "@/lib/scroll";

export function HashArrival() {
  const pathname = usePathname();
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id === "") return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) scrollToLayoutPosition(target, true);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return null;
}
