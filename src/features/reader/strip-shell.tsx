"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { MenuHostContext } from "@/components/hanging-menu";
import { useHideOnScroll } from "@/lib/use-hide-on-scroll";
import { useStuck } from "@/lib/use-stuck";

type StripShellProps = {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
};

export function StripShell({ left, center, right }: StripShellProps) {
  const bar = useRef<HTMLDivElement | null>(null);
  const [host, setHost] = useState<HTMLElement | null>(null);
  const stuck = useStuck(bar);
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
      data-stuck={stuck ? "" : undefined}
      data-hidden={hidden ? "" : undefined}
      className="group/strip sticky top-top z-31 mb-5.5 -mr-4 -ml-4 transition-transform duration-220 ease-move data-hidden:-translate-y-full motion-reduce:transition-none sm:mb-7.5 sm:-mr-8 sm:-ml-8 md:-mr-26 md:-ml-12 lg:-mr-28 lg:-ml-16"
    >
      <MenuHostContext value={host}>
        <div className="texture-layer grid grid-cols-header items-center max-sm:grid-cols-phone border-b border-transparent bg-bg px-4 py-1 transition-colors duration-150 ease-standard group-data-stuck/strip:border-rule sm:px-8 sm:py-1.5 md:pr-26 md:pl-12 lg:pr-28 lg:pl-16">
          <div className="justify-self-start max-sm:hidden">{left}</div>
          <div className="flex items-center justify-self-center">{center}</div>
          <div className="flex items-center justify-self-end">{right}</div>
        </div>
      </MenuHostContext>
    </div>
  );
}
