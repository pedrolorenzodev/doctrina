"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { showItem } from "@/lib/show-item";

type FingerprintItem = {
  year: number;
  yearEnd: number | null;
  tip: string;
};

type DoctrineFingerprintProps = {
  items: FingerprintItem[];
  summary: string;
  axis: string[];
  targets?: (string | null)[];
};

const firstYear = 1;
const lastYear = 2026;
const restScale = 1 / 4.5;
const centuries = Array.from({ length: 20 }, (_, index) => (index + 1) * 100);
const touchHoldMs = 1400;
const clickSlopPx = 6;
const tipMargin = { min: 14, max: 86 };
const drawDelayMs = 300;
const drawStaggerMs = 30;
const drawDurationMs = 300;

const percent = (year: number) => ((year - firstYear) / (lastYear - firstYear)) * 100;

export function DoctrineFingerprint({ items, summary, axis, targets }: DoctrineFingerprintProps) {
  const strip = useRef<HTMLDivElement>(null);
  const downX = useRef<number | null>(null);
  const releaseTimer = useRef<number | undefined>(undefined);
  const [hovered, setHovered] = useState<number | null>(null);
  const [width, setWidth] = useState(0);
  const [drawing, setDrawing] = useState(true);

  useEffect(() => {
    const done = window.setTimeout(
      () => setDrawing(false),
      drawDelayMs + items.length * drawStaggerMs + drawDurationMs,
    );
    return () => {
      clearTimeout(done);
      clearTimeout(releaseTimer.current);
    };
  }, [items.length]);

  function nearest(clientX: number): number {
    const rect = strip.current?.getBoundingClientRect();
    if (!rect) return 0;
    const year = ((clientX - rect.left) / rect.width) * (lastYear - firstYear) + firstYear;
    let best = 0;
    items.forEach((item, index) => {
      const current = items[best];
      if (current && Math.abs(item.year - year) < Math.abs(current.year - year)) best = index;
    });
    return best;
  }

  function enter(index: number) {
    clearTimeout(releaseTimer.current);
    setWidth(strip.current?.clientWidth ?? 0);
    setHovered(index);
  }

  function scaleOf(index: number): number {
    const target = hovered === null ? undefined : items[hovered];
    const item = items[index];
    if (!target || !item) return restScale;
    const reach = Math.min(286, width * 0.35);
    const distance = reach === 0 ? 1 : (Math.abs(item.year - target.year) / (lastYear - firstYear)) * (width / reach);
    return Math.max(1, 2.5 + 2 * Math.cos(Math.PI * Math.min(distance, 1))) / 4.5;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") {
      releaseTimer.current = window.setTimeout(() => setHovered(null), touchHoldMs);
      return;
    }
    if (downX.current !== null && Math.abs(event.clientX - downX.current) < clickSlopPx) {
      const target = targets?.[nearest(event.clientX)];
      if (target) showItem(target);
    }
    downX.current = null;
  }

  const shown = hovered === null ? undefined : items[hovered];
  return (
    <div role="img" aria-label={summary} className="relative mt-9 touch-pan-y select-none">
      <div
        ref={strip}
        onPointerMove={(event) => enter(nearest(event.clientX))}
        onPointerDown={(event) => {
          downX.current = event.clientX;
          enter(nearest(event.clientX));
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setHovered(null);
        }}
        onPointerUp={onPointerUp}
        className="relative h-12 cursor-pointer"
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-rule-2" />
        {centuries.map((year) => (
          <div
            key={year}
            style={{ "--x": `${percent(year)}%` } as CSSProperties}
            className="absolute bottom-0 left-(--x) h-1 w-px bg-rule-2"
          />
        ))}
        {items.map((item, index) =>
          item.yearEnd !== null ? (
            <div
              key={`range-${index}`}
              data-fp-range
              data-on={index === hovered ? "" : undefined}
              style={
                {
                  "--x": `${percent(item.year)}%`,
                  "--w": `${percent(item.yearEnd) - percent(item.year)}%`,
                  "--k": scaleOf(index),
                } as CSSProperties
              }
              className="absolute bottom-px left-(--x) h-full w-(--w) bg-ink opacity-12 fp-mark data-on:bg-accent data-on:opacity-30"
            />
          ) : null,
        )}
        {items.map((item, index) => (
          <div
            key={`tick-${index}`}
            data-fp-tick
            onAnimationEnd={index === items.length - 1 ? () => setDrawing(false) : undefined}
            data-on={index === hovered ? "" : undefined}
            style={
              {
                "--x": `${percent(item.year)}%`,
                "--k": scaleOf(index),
                "--dl": `${drawDelayMs + index * drawStaggerMs}ms`,
              } as CSSProperties
            }
            className={`absolute bottom-px left-(--x) -ml-px h-full w-0.5 rounded-1 bg-ink opacity-45 fp-mark data-on:bg-accent data-on:opacity-100 ${drawing ? "fp-draw" : ""}`}
          />
        ))}
        {shown ? (
          <div
            key={hovered}
            aria-hidden="true"
            data-fp-tip
            style={
              { "--x": `${Math.min(Math.max(percent(shown.year), tipMargin.min), tipMargin.max)}%` } as CSSProperties
            }
            className="pointer-events-none absolute bottom-full left-(--x) mb-2 max-w-tip overflow-hidden rounded-4 bg-tip-bg px-2 py-0.75 text-ui-2xs text-ellipsis whitespace-nowrap text-tip-ink fp-tip-in"
          >
            {shown.tip}
          </div>
        ) : null}
      </div>
      <div aria-hidden="true" className="mt-1.5 flex justify-between text-axis text-ink-3 tabular-nums">
        {axis.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
