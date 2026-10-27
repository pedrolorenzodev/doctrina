"use client";

import { useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { MoreButton } from "@/components/ui/more-button";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { flipList } from "@/lib/list-motion";

const everyTheme = "all";

type ObjectionThemeFilterProps = {
  filterLabel: string;
  options: { id: string; label: string }[];
  totals: Record<string, number>;
  step: number | null;
  moreLabel: string;
  trailing?: ReactNode;
  children: ReactNode;
};

export function ObjectionThemeFilter({
  filterLabel,
  options,
  totals,
  step,
  moreLabel,
  trailing,
  children,
}: ObjectionThemeFilterProps) {
  const [theme, setTheme] = useState(everyTheme);
  const [count, setCount] = useState(step ?? Number.POSITIVE_INFINITY);
  const box = useRef<HTMLDivElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);

  function listItems(): HTMLElement[] {
    return [...(box.current?.querySelectorAll<HTMLElement>("ul > li") ?? [])];
  }

  function apply(nextTheme: string, nextCount: number) {
    let shown = 0;
    for (const item of listItems()) {
      const matches = nextTheme === everyTheme || item.dataset.theme === nextTheme;
      item.hidden = !(matches && shown < nextCount);
      if (!item.hidden) shown += 1;
    }
  }

  function change(nextTheme: string, nextCount: number, focusFrom?: number) {
    const list = box.current?.querySelector<HTMLElement>("ul");
    const mutate = () => {
      apply(nextTheme, nextCount);
      flushSync(() => {
        setTheme(nextTheme);
        setCount(nextCount);
      });
    };
    if (list && ghosts.current) flipList(list, ghosts.current, mutate);
    else mutate();
    if (focusFrom !== undefined) {
      const shownNow = listItems().filter((item) => !item.hidden);
      shownNow[focusFrom]?.querySelector("a")?.focus({ preventScroll: true });
    }
  }

  const total = totals[theme] ?? 0;
  const left = Math.max(0, total - count);
  const moreStep = step ?? 0;

  return (
    <>
      <SegmentedFilter
        label={filterLabel}
        value={theme}
        options={options}
        stackOnPhone
        onChange={(id) => change(id, step ?? Number.POSITIVE_INFINITY)}
      />
      <div ref={box} className="relative">
        {children}
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
      {left > 0 || trailing ? (
        <div className="mt-5.5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {left > 0 ? (
            <MoreButton expanded={false} onClick={() => change(theme, count + moreStep, count)}>
              {moreLabel.replace("{n}", String(Math.min(moreStep, left)))}
            </MoreButton>
          ) : null}
          {trailing}
        </div>
      ) : null}
    </>
  );
}
