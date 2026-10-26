"use client";

import { useEffect, useRef, useState } from "react";
import { useStuck } from "@/lib/use-stuck";

type SwitcherItem = {
  id: string;
  label: string;
};

type TraditionSwitcherProps = {
  label: string;
  hint: string;
  items: SwitcherItem[];
  current: string;
};

export function TraditionSwitcher({ label, hint, items, current }: TraditionSwitcherProps) {
  const bar = useRef<HTMLElement>(null);
  const strip = useRef<HTMLUListElement>(null);
  const caption = useRef<HTMLSpanElement>(null);
  const hintBox = useRef<HTMLSpanElement>(null);
  const hintWidth = useRef(0);
  const stuck = useStuck(bar);
  const [fade, setFade] = useState(false);
  const [crowded, setCrowded] = useState(false);

  useEffect(() => {
    const element = bar.current;
    const list = strip.current;
    if (!element || !list) return;
    const root = document.documentElement;
    const measure = () => {
      root.style.setProperty("--spacing-scroll-offset", `${element.offsetHeight + 20}px`);
      setFade(list.scrollWidth - list.clientWidth - list.scrollLeft > 2);
      const hint = hintBox.current;
      if (hint && hint.offsetWidth > 0) hintWidth.current = hint.offsetWidth;
      const style = getComputedStyle(element);
      const inner = element.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const gap = parseFloat(style.columnGap) || 0;
      const labelWidth = caption.current && caption.current.offsetWidth > 0 ? caption.current.offsetWidth + gap : 0;
      setCrowded(labelWidth + list.scrollWidth + gap + hintWidth.current > inner);
    };
    measure();
    addEventListener("scroll", measure, { passive: true });
    addEventListener("resize", measure);
    list.addEventListener("scroll", measure, { passive: true });
    return () => {
      removeEventListener("scroll", measure);
      removeEventListener("resize", measure);
      list.removeEventListener("scroll", measure);
      root.style.removeProperty("--spacing-scroll-offset");
    };
  }, []);

  // TODO: tabs navigate to the same section of that tradition's page, with the sliding indicator and the content slide
  return (
    <nav
      ref={bar}
      aria-label={label}
      data-stuck={stuck ? "" : undefined}
      data-crowded={crowded ? "" : undefined}
      className="group/switcher texture-layer sticky top-top z-30 mt-3 -mr-4 -ml-4 flex items-center gap-x-4.5 gap-y-1.5 border-b border-transparent bg-bg px-4 py-1.5 transition-colors duration-150 ease-standard data-stuck:border-rule sm:mt-3.5 sm:-mr-8 sm:-ml-8 sm:px-8 sm:py-2.5 md:-mr-26 md:-ml-12 md:pr-26 md:pl-12 lg:-mr-28 lg:-ml-16 lg:pr-28 lg:pl-16"
    >
      <span ref={caption} className="flex-none text-label font-medium text-ink-3 max-sm:hidden">
        {label}
      </span>
      <ul
        ref={strip}
        data-lenis-prevent
        data-fade={fade ? "" : undefined}
        className="m-0 flex min-w-0 list-none gap-0.5 overflow-x-auto p-0 no-scrollbar data-fade:fade-right"
      >
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              data-label={item.label}
              aria-current={item.id === current ? "page" : undefined}
              data-current={item.id === current ? "" : undefined}
              className="reserve-bold block cursor-pointer rounded-6 px-2.25 py-2 text-btn pointer-coarse:min-h-11 whitespace-nowrap text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink data-current:bg-accent-weak data-current:font-medium data-current:text-ink data-current:shadow-current-underline sm:px-2.75 sm:text-ui-sm"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <span
        ref={hintBox}
        className="ml-auto text-label whitespace-nowrap text-ink-3 max-md:hidden group-data-crowded/switcher:hidden"
      >
        {hint}
      </span>
    </nav>
  );
}
