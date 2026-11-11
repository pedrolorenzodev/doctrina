"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { MenuHostContext } from "@/components/hanging-menu";
import { useHideOnScroll } from "@/lib/use-hide-on-scroll";

type StripShellProps = {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
};

export function StripShell({ left, center, right }: StripShellProps) {
  const bar = useRef<HTMLDivElement | null>(null);
  const [host, setHost] = useState<HTMLElement | null>(null);
  const hidden = useHideOnScroll(bar);

  useEffect(() => {
    const element = bar.current;
    if (!element) return;
    const root = document.documentElement;
    const measure = () => {
      const clearance = parseFloat(getComputedStyle(root).getPropertyValue("--spacing-reader-arrival")) || 0;
      root.style.setProperty("--spacing-scroll-offset", `${element.offsetHeight + clearance}px`);
    };
    measure();
    addEventListener("resize", measure);
    return () => {
      removeEventListener("resize", measure);
      root.style.removeProperty("--spacing-scroll-offset");
    };
  }, []);

  return (
    <div
      ref={(element) => {
        bar.current = element;
        setHost(element);
      }}
      data-reader-strip=""
      data-hidden={hidden ? "" : undefined}
      className="sticky top-top z-31 -mt-5.5 mb-11 -mr-4 -ml-4 strip-motion data-hidden:-translate-y-full sm:-mt-6.5 sm:mb-14 sm:-mr-8 sm:-ml-8 md:-mt-7.5 md:mb-15 md:-mr-18 md:-ml-18 lg:-mt-8.5 lg:mb-16 lg:-mr-22 lg:-ml-22"
    >
      <MenuHostContext value={host}>
        <div className="texture-layer relative grid min-h-reader-strip items-center gap-2 sm:flex sm:justify-between border-b border-rule bg-bg px-3.5 max-sm:grid-cols-phone max-sm:px-1.5 pointer-coarse:py-1">
          <div className="flex items-center gap-1 justify-self-start max-sm:hidden">{left}</div>
          <div className="flex items-center justify-self-center">{center}</div>
          <div className="flex items-center justify-self-end gap-1.5">{right}</div>
        </div>
      </MenuHostContext>
    </div>
  );
}
