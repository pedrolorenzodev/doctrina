"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scrollOffset } from "@/lib/scroll";

const holdMs = 2000;

const verseLead = 2;

const arrivalHash = /^#(?:v-\d+|d-[A-Za-z0-9.-]+)$/;

function placeAsThird(hash: string) {
  const number = Number(hash.slice(3));
  const place = () => {
    const lead = document.getElementById(`v-${number - verseLead}`);
    if (!lead) return;
    scrollTo({ top: lead.getBoundingClientRect().top + scrollY - scrollOffset(), behavior: "instant" });
  };
  requestAnimationFrame(() => requestAnimationFrame(place));
}

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
      if (new URLSearchParams(location.search).get("place") === "third") placeAsThird(hash);
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
