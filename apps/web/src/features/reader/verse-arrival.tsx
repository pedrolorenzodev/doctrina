"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { clearArrival, markArrival } from "@/lib/arrival-mark";
import { scrollOffset } from "@/lib/scroll";

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
    const arrive = () => {
      const hash = decodeURIComponent(location.hash);
      const marked = arrivalHash.test(hash) ? document.getElementById(hash.slice(1)) : null;
      if (!marked) {
        clearArrival();
        return;
      }
      markArrival(marked);
      if (new URLSearchParams(location.search).get("place") === "third") placeAsThird(hash);
    };
    arrive();
    addEventListener("hashchange", arrive);
    return () => {
      clearArrival();
      removeEventListener("hashchange", arrive);
    };
  }, [pathname]);
  return null;
}
