"use client";

import { useEffect, useRef } from "react";
import { TextSizeControl } from "@/features/reader/text-size-control";
import { useStuck } from "@/lib/use-stuck";

type ReaderStripProps = {
  text: Parameters<typeof TextSizeControl>[0]["text"];
};

const arrivalClearance = 20;

export function ReaderStrip({ text }: ReaderStripProps) {
  const bar = useRef<HTMLDivElement>(null);
  const stuck = useStuck(bar);

  useEffect(() => {
    const element = bar.current;
    if (!element) return;
    const root = document.documentElement;
    const measure = () =>
      root.style.setProperty("--spacing-scroll-offset", `${element.offsetHeight + arrivalClearance}px`);
    measure();
    addEventListener("resize", measure);
    return () => {
      removeEventListener("resize", measure);
      root.style.removeProperty("--spacing-scroll-offset");
    };
  }, []);

  return (
    <div
      ref={bar}
      data-stuck={stuck ? "" : undefined}
      className="texture-layer sticky top-top z-31 -mr-4 -ml-4 flex items-center justify-end border-b border-transparent bg-bg px-4 py-1.5 transition-colors duration-150 ease-standard data-stuck:border-rule max-sm:hidden sm:mb-7.5 sm:-mr-8 sm:-ml-8 sm:px-8 md:-mr-26 md:-ml-12 md:pr-26 md:pl-12 lg:-mr-28 lg:-ml-16 lg:pr-28 lg:pl-16"
    >
      <TextSizeControl text={text} />
    </div>
  );
}
