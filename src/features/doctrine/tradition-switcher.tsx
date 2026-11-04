"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type FocusEvent,
} from "react";
import { useRouter } from "next/navigation";
import { Tooltip } from "@/components/ui/tooltip";
import { useStuck } from "@/lib/use-stuck";

type SwitcherItem = {
  id: string;
  label: string;
  available: boolean;
  href: string;
};

type TraditionSwitcherProps = {
  label: string;
  hint: string;
  soon: string;
  items: SwitcherItem[];
  current: string;
  keepSection?: boolean;
};

const pressedMs = 2200;
const memoryMs = 3000;

type Box = { x: number; w: number };

let memory: { signature: string; box: Box; at: number } | null = null;

export function TraditionSwitcher({ label, hint, soon, items, current, keepSection = false }: TraditionSwitcherProps) {
  const router = useRouter();
  const bar = useRef<HTMLElement>(null);
  const strip = useRef<HTMLUListElement>(null);
  const caption = useRef<HTMLSpanElement>(null);
  const hintBox = useRef<HTMLSpanElement>(null);
  const hintWidth = useRef(0);
  const stuck = useStuck(bar);
  const [fade, setFade] = useState(false);
  const [crowded, setCrowded] = useState(false);
  const [tip, setTip] = useState<number | null>(null);
  const holdUntil = useRef(0);
  const releaseTimer = useRef(0);
  const [box, setBox] = useState<Box | null>(null);
  const [instant, setInstant] = useState(true);
  const signature = items.map((item) => `${item.id}:${item.available ? 1 : 0}`).join("|");

  useLayoutEffect(() => {
    const list = strip.current;
    if (!list) return;
    const measure = () => {
      const target = list.querySelector<HTMLElement>("button[data-current]");
      if (target && target.offsetWidth > 0) {
        setBox({ x: target.offsetLeft, w: target.offsetWidth });
      }
    };
    const place = (next: Box, still: boolean) => {
      setBox(next);
      setInstant(still);
    };
    const remembered =
      memory && memory.signature === signature && Date.now() - memory.at < memoryMs ? memory.box : null;
    memory = null;
    let frame = 0;
    if (remembered) {
      place(remembered, true);
      frame = requestAnimationFrame(() => {
        setInstant(false);
        measure();
      });
    } else {
      measure();
      frame = requestAnimationFrame(() => setInstant(false));
    }
    const observer = new ResizeObserver(measure);
    list.querySelectorAll("button").forEach((button) => observer.observe(button));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      const element = list.querySelector<HTMLElement>("[data-slide-indicator]");
      if (element) {
        const shown = element.getBoundingClientRect();
        const origin = list.getBoundingClientRect();
        memory = {
          signature,
          box: { x: shown.left - origin.left + list.scrollLeft, w: shown.width },
          at: Date.now(),
        };
      }
    };
  }, [current, signature]);

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

  useEffect(() => () => window.clearTimeout(releaseTimer.current), []);

  function showSoon(event: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>) {
    const tab = event.currentTarget.getBoundingClientRect();
    const box = bar.current?.getBoundingClientRect();
    if (box) setTip(tab.left + tab.width / 2 - box.left);
  }

  function hideSoon() {
    if (Date.now() >= holdUntil.current) setTip(null);
  }

  function pressSoon(event: MouseEvent<HTMLElement>) {
    showSoon(event);
    holdUntil.current = Date.now() + pressedMs;
    window.clearTimeout(releaseTimer.current);
    releaseTimer.current = window.setTimeout(() => setTip(null), pressedMs);
  }

  function sectionInView(): string {
    const barBottom = bar.current?.getBoundingClientRect().bottom ?? 0;
    const line = barBottom + (innerHeight - barBottom) * 0.3;
    let found = "";
    for (const section of document.querySelectorAll<HTMLElement>("main section[id]")) {
      if (section.getBoundingClientRect().top <= line) found = section.id;
    }
    return found;
  }

  function go(item: SwitcherItem, target: HTMLElement) {
    if (item.id === current) return;
    setBox({ x: target.offsetLeft, w: target.offsetWidth });
    const section = keepSection ? sectionInView() : "";
    router.push(section ? `${item.href}#${section}` : item.href);
  }

  // TODO: the content slide between traditions needs a motion proposal first
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
        className="relative m-0 flex min-w-0 list-none gap-0.5 overflow-x-auto p-0 no-scrollbar data-fade:fade-right"
      >
        {box ? (
          <li
            aria-hidden="true"
            data-instant={instant ? "" : undefined}
            data-slide-indicator=""
            style={{ "--slide-x": `${box.x}px`, "--slide-w": `${box.w}px` } as CSSProperties}
            className="slide-indicator pointer-events-none absolute top-0 bottom-0 left-0 w-(--slide-w) translate-x-(--slide-x) rounded-6 selected-lift"
          />
        ) : null}
        {items.map((item) => (
          <li key={item.id}>
            {item.available ? (
              <button
                type="button"
                data-label={item.label}
                aria-current={item.id === current ? "page" : undefined}
                data-current={item.id === current ? "" : undefined}
                onClick={(event) => go(item, event.currentTarget)}
                className="reserve-bold relative block cursor-pointer rounded-6 px-2.25 py-2 text-btn pointer-coarse:min-h-11 whitespace-nowrap text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink data-current:font-medium data-current:text-ink data-current:hover:bg-transparent sm:px-2.75 sm:text-ui-sm"
              >
                {item.label}
              </button>
            ) : (
              <button
                type="button"
                data-label={item.label}
                aria-disabled="true"
                onMouseEnter={showSoon}
                onMouseLeave={hideSoon}
                onFocus={showSoon}
                onBlur={hideSoon}
                onClick={pressSoon}
                className="reserve-bold block cursor-default rounded-6 px-2.25 py-2 text-btn pointer-coarse:min-h-11 whitespace-nowrap text-ink-3 opacity-60 sm:px-2.75 sm:text-ui-sm"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
      <span
        ref={hintBox}
        className="ml-auto text-label whitespace-nowrap text-ink-3 max-md:hidden group-data-crowded/switcher:hidden"
      >
        {hint}
      </span>
      {tip !== null ? (
        <span
          style={{ "--soon-x": `${tip}px` } as CSSProperties}
          className="pointer-events-none absolute bottom-0 left-(--soon-x)"
        >
          <Tooltip label={soon} open>
            <span />
          </Tooltip>
        </span>
      ) : null}
    </nav>
  );
}
