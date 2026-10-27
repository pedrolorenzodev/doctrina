"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const holdMs = 2000;

const arrivalHash = /^#(?:v-\d+|d-[A-Za-z0-9.-]+)$/;

export function VerseArrival() {
  const pathname = usePathname();
  useEffect(() => {
    let fade = 0;
    let marked: HTMLElement | null = null;
    const arrive = () => {
      clearTimeout(fade);
      marked?.removeAttribute("data-marked");
      const hash = decodeURIComponent(location.hash);
      marked = arrivalHash.test(hash) ? document.getElementById(hash.slice(1)) : null;
      if (!marked) return;
      const verse = marked;
      verse.dataset.marked = "";
      fade = window.setTimeout(() => verse.removeAttribute("data-marked"), holdMs);
    };
    arrive();
    addEventListener("hashchange", arrive);
    return () => {
      clearTimeout(fade);
      removeEventListener("hashchange", arrive);
    };
  }, [pathname]);
  return null;
}
