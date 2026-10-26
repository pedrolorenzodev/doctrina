"use client";

import { useEffect, useRef, useState, type PointerEvent, type RefObject } from "react";
import { at, vars } from "@/lib/css-vars";

type RulerEntry = { id: string; start: number; end: number };

type TimelineRulerProps = {
  scroller: RefObject<HTMLElement | null>;
  from: number;
  to: number;
  entries: RulerEntry[];
  selectedId: string | null;
};

const ticks = [30, 100, 200, 300, 400, 500, 600, 700, 800];
const labelMargin = 6;

export function TimelineRuler({ scroller, from, to, entries, selectedId }: TimelineRulerProps) {
  const [view, setView] = useState({ first: 0, last: 1 });
  const ruler = useRef<HTMLDivElement>(null);
  const windowBox = useRef<HTMLDivElement>(null);
  const drag = useRef<{ grab: number } | null>(null);
  const place = (year: number) => ((Math.min(Math.max(year, from), to) - from) / (to - from)) * 100;

  useEffect(() => {
    const box = scroller.current;
    if (!box) return;
    let frame = 0;
    const read = () => {
      frame = 0;
      const total = box.scrollWidth;
      setView({ first: box.scrollLeft / total, last: Math.min(1, (box.scrollLeft + box.clientWidth) / total) });
    };
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(read);
    };
    read();
    box.addEventListener("scroll", schedule, { passive: true });
    const observer = new ResizeObserver(schedule);
    observer.observe(box);
    return () => {
      cancelAnimationFrame(frame);
      box.removeEventListener("scroll", schedule);
      observer.disconnect();
    };
  }, [scroller]);

  const moveTo = (clientX: number, grab: number | null) => {
    const box = scroller.current;
    const rect = ruler.current?.getBoundingClientRect();
    if (!box || !rect) return;
    const fraction = (clientX - rect.left) / rect.width - (grab ?? 0);
    box.scrollTo({ left: fraction * box.scrollWidth - (grab === null ? box.clientWidth / 2 : 0), behavior: "instant" });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const box = scroller.current;
    const rect = ruler.current?.getBoundingClientRect();
    const win = windowBox.current;
    if (!box || !rect || !win) return;
    ruler.current?.setPointerCapture(event.pointerId);
    if (win.contains(event.target as Node)) {
      drag.current = { grab: (event.clientX - win.getBoundingClientRect().left) / rect.width };
      return;
    }
    const target = ((event.clientX - rect.left) / rect.width) * box.scrollWidth - box.clientWidth / 2;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    box.scrollTo({ left: target, behavior: reduced ? "instant" : "smooth" });
    drag.current = { grab: box.clientWidth / 2 / box.scrollWidth };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || event.buttons === 0) return;
    moveTo(event.clientX, drag.current.grab);
  };

  const first = view.first * 100;
  const width = Math.max(2, (view.last - view.first) * 100);
  const years = `${Math.round(from + view.first * (to - from))}–${Math.round(from + view.last * (to - from))}`;
  const center = Math.min(Math.max(((view.first + view.last) / 2) * 100, labelMargin), 100 - labelMargin);

  return (
    <div
      ref={ruler}
      aria-hidden="true"
      data-ruler
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={() => (drag.current = null)}
      onPointerCancel={() => (drag.current = null)}
      className="relative mb-2 h-13.5 touch-none select-none"
    >
      <span className="absolute inset-x-0 top-7.5 h-px bg-rule-2" />
      {ticks.map((tick, index) => (
        <span key={tick}>
          <span style={at("--x", `${place(tick)}%`)} className="absolute top-6.5 left-(--x) h-1.25 w-px bg-rule-2" />
          <span
            style={at("--x", `${place(tick)}%`)}
            className={`absolute top-9 left-(--x) text-axis text-ink-3 tabular-nums ${index === 0 ? "" : index === ticks.length - 1 ? "-translate-x-full" : "-translate-x-1/2"}`}
          >
            {tick}
          </span>
        </span>
      ))}
      {entries.map((entry) => (
        <span
          key={entry.id}
          data-ruler-item={entry.id}
          style={vars({
            "--x": `${place(entry.start)}%`,
            "--w": `${Math.max(0.25, place(entry.end) - place(entry.start))}%`,
          })}
          className={`absolute top-5.25 left-(--x) h-1.75 w-(--w) min-w-0.5 rounded-2 ${entry.id === selectedId ? "bg-accent" : "bg-ink-3 opacity-30"}`}
        />
      ))}
      <div
        ref={windowBox}
        data-ruler-window
        style={vars({ "--x": `${first}%`, "--w": `${width}%` })}
        className="absolute top-3.5 left-(--x) h-5.5 w-(--w)"
      >
        <div className="hit-44 size-full cursor-grab rounded-4 border border-accent bg-accent-weak active:cursor-grabbing" />
      </div>
      <span
        data-ruler-years
        style={at("--x", `${center}%`)}
        className="absolute -top-px left-(--x) -translate-x-1/2 text-axis font-medium whitespace-nowrap text-accent tabular-nums"
      >
        {years}
      </span>
    </div>
  );
}
