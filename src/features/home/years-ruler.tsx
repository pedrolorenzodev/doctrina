"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import type { YearsData } from "@/content/get-home-timeline";

export type YearWindow = { a: number; b: number };

type YearsRulerText = {
  rows: { fathers: string; councils: string; divisions: string };
  window: string;
  windowValue: string;
};

type YearsRulerProps = {
  data: YearsData;
  range: YearWindow;
  hot: string | null;
  text: YearsRulerText;
  onMove: (range: YearWindow) => void;
  onSettle: (range: YearWindow) => void;
  onHot: (key: string | null) => void;
};

type Mark = { key: string; name: string; date: string; from: number; to: number; top: number; height: number };

type Drag = { mode: "l" | "r" | "move" | "new"; x0: number; y0: number; a0: number; b0: number; moved: boolean };

const span = { from: 1, to: 2026 };
const dragSlopPx = 5;
const snapYears = 10;
const rowClearance = 14;
const firstRowTop = 30;
const windowTop = 20;
const keyStep = 10;
const keyStepLarge = 50;
const axisYears = [1, 500, 1000, 1500, 2026];
const hoverReachPx = 10;
const tipGapPx = 6;
const tipEdges = { left: 15, right: 85 };
const nameDateSeparator = ", ";
const labelClearancePx = 40;
const labelReachPx = 150;
const centuries = Array.from({ length: 20 }, (_, index) => (index + 1) * 100);

const percent = (year: number) => ((year - span.from) / (span.to - span.from)) * 100;
const clamp = (value: number, low: number, high: number) => Math.max(low, Math.min(high, value));
const snap = (year: number) => Math.round(year / snapYears) * snapYears;
const minimumYears = () => (innerWidth < 640 ? 60 : 40);
const at = (vars: Record<string, string | number>) => vars as CSSProperties;

export const fatherInWindow = (father: { start: number; end: number }, { a, b }: YearWindow) =>
  father.start <= b && father.end >= a;
export const councilInWindow = (council: { year: number }, { a, b }: YearWindow) =>
  council.year >= a && council.year <= b;
export const divisionInWindow = (division: { year: number; end: number }, { a, b }: YearWindow) =>
  division.year <= b && division.end >= a;

function packRows(fathers: YearsData["fathers"]) {
  const rowEnds: number[] = [];
  const rowOf = new Map<string, number>();
  for (const father of [...fathers].sort((x, y) => x.start - y.start)) {
    let row = rowEnds.findIndex((end) => end + rowClearance < father.start);
    if (row < 0) {
      row = rowEnds.length;
      rowEnds.push(0);
    }
    rowEnds[row] = father.end;
    rowOf.set(father.id, row);
  }
  return { rows: rowEnds.length, rowOf };
}

function Tip({ mark }: { mark: Mark }) {
  const center = (percent(mark.from) + percent(mark.to)) / 2;
  const edge = center < tipEdges.left ? "left" : center > tipEdges.right ? "right" : undefined;
  return (
    <span
      aria-hidden="true"
      data-years-tip=""
      data-edge={edge}
      className="yr-tip"
      style={at({ "--x": `${center}%`, "--y": `${mark.top - tipGapPx}px` })}
    >
      <b className="font-semibold">{mark.name}</b>
      {nameDateSeparator}
      {mark.date}
    </span>
  );
}

export function YearsRuler({ data, range, hot, text, onMove, onSettle, onHot }: YearsRulerProps) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setTrackWidth(element.getBoundingClientRect().width));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const layout = useMemo(() => {
    const { rows, rowOf } = packRows(data.fathers);
    const gap = rows > 9 ? 5 : 6;
    const councils = firstRowTop + rows * gap + 10;
    const divisions = councils + 16;
    const axis = divisions + 24;
    const marks: Mark[] = [
      ...data.fathers.map((father) => ({
        key: `f-${father.id}`,
        name: father.name,
        date: father.date,
        from: father.start,
        to: father.end,
        top: firstRowTop + (rowOf.get(father.id) ?? 0) * gap,
        height: 3,
      })),
      ...data.councils.map((council) => ({
        key: `c-${council.id}`,
        name: council.name,
        date: council.date,
        from: council.year,
        to: council.year,
        top: councils - 4,
        height: 8,
      })),
      ...data.divisions.map((division) => ({
        key: `d-${division.id}`,
        name: division.name,
        date: division.date,
        from: division.year,
        to: division.year,
        top: divisions,
        height: 14,
      })),
    ];
    return { rowOf, gap, councils, divisions, axis, marks, height: axis + 26, windowHeight: axis - windowTop - 4 };
  }, [data]);
  const { a, b } = range;

  const hotMark = layout.marks.find((mark) => mark.key === hot) ?? null;

  function nearestMark(clientX: number, clientY: number): string | null {
    const rect = track.current!.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    let best: string | null = null;
    let bestDistance = hoverReachPx;
    for (const mark of layout.marks) {
      const left = (percent(mark.from) / 100) * rect.width;
      const right = Math.max(left + (mark.to > mark.from ? 3 : 0), (percent(mark.to) / 100) * rect.width);
      const dx = x < left ? left - x : x > right ? x - right : 0;
      const dy = y < mark.top ? mark.top - y : y > mark.top + mark.height ? y - mark.top - mark.height : 0;
      const distance = Math.hypot(dx, dy);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = mark.key;
      }
    }
    return best;
  }

  const yearAt = (clientX: number) => {
    const rect = track.current!.getBoundingClientRect();
    return span.from + ((clientX - rect.left) / rect.width) * (span.to - span.from);
  };

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const handle = target.closest<HTMLElement>("[data-h]");
    const mode = handle ? (handle.dataset.h as "l" | "r") : target.closest("[data-window]") ? "move" : "new";
    drag.current = { mode, x0: event.clientX, y0: yearAt(event.clientX), a0: a, b0: b, moved: false };
    onHot(null);
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current) {
      if (event.pointerType === "mouse") {
        const near = nearestMark(event.clientX, event.clientY);
        if (near !== hot) onHot(near);
      }
      return;
    }
    if (!current.moved && Math.abs(event.clientX - current.x0) < dragSlopPx) return;
    current.moved = true;
    const year = yearAt(event.clientX);
    const least = minimumYears();
    let next: YearWindow;
    if (current.mode === "move") {
      const width = current.b0 - current.a0;
      const start = Math.max(span.from, clamp(snap(current.a0 + year - current.y0), 0, span.to - width));
      next = { a: start, b: start + width };
    } else if (current.mode === "l") {
      next = { a: clamp(snap(year), span.from, b - least), b };
    } else if (current.mode === "r") {
      next = { a, b: clamp(snap(year), a + least, span.to) };
    } else {
      const from = snap(current.y0);
      const to = snap(year);
      const start = clamp(Math.min(from, to), span.from, span.to - least);
      next = { a: start, b: clamp(Math.max(from, to), start + least, span.to) };
    }
    onMove(next);
  }

  function onPointerEnd() {
    const current = drag.current;
    if (!current) return;
    drag.current = null;
    if (!current.moved && current.mode === "new") {
      const width = b - a;
      const start = clamp(snap(current.y0) - Math.round(width / 20) * 10, span.from, span.to - width);
      onSettle({ a: start, b: start + width });
      return;
    }
    onSettle(range);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.shiftKey ? keyStepLarge : keyStep;
    const width = b - a;
    const start = event.key === "ArrowRight" ? Math.min(span.to - width, a + step) : Math.max(span.from, a - step);
    onMove({ a: start, b: start + width });
  }

  const yearsLabel = `${a}–${b}`;
  const labelAt = clamp(percent((a + b) / 2), 6, 94);
  const labelCovered =
    hotMark !== null &&
    hotMark.top - tipGapPx < labelClearancePx &&
    (Math.abs((percent(hotMark.from) + percent(hotMark.to)) / 2 - labelAt) / 100) * trackWidth < labelReachPx;
  const value = text.windowValue.replace("{a}", String(a)).replace("{b}", String(b));

  return (
    <div className="years-grid mt-7.5 select-none">
      <div aria-hidden="true" className="relative hidden h-(--h) sm:block" style={at({ "--h": `${layout.height}px` })}>
        <span
          className="absolute top-(--y) left-0 text-label leading-none text-ink-3"
          style={at({ "--y": `${firstRowTop - 4}px` })}
        >
          {text.rows.fathers}
        </span>
        <span
          className="absolute top-(--y) left-0 text-label leading-none text-ink-3"
          style={at({ "--y": `${layout.councils - 2}px` })}
        >
          {text.rows.councils}
        </span>
        <span
          className="absolute top-(--y) left-0 text-label leading-none text-ink-3"
          style={at({ "--y": `${layout.divisions + 2}px` })}
        >
          {text.rows.divisions}
        </span>
      </div>
      <div
        ref={track}
        data-years-track=""
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onPointerLeave={() => {
          if (!drag.current && hot) onHot(null);
        }}
        className="relative h-(--h) cursor-crosshair touch-none"
        style={at({ "--h": `${layout.height}px` })}
      >
        {data.fathers.map((father) => (
          <span
            key={father.id}
            data-father={father.id}
            data-in={fatherInWindow(father, range) || undefined}
            data-hot={hot === `f-${father.id}` || undefined}
            className="yr-bar"
            style={at({
              "--x": `${percent(father.start)}%`,
              "--w": `${percent(father.end) - percent(father.start)}%`,
              "--y": `${firstRowTop + (layout.rowOf.get(father.id) ?? 0) * layout.gap}px`,
            })}
          />
        ))}
        {data.councils.map((council) => (
          <span
            key={council.id}
            data-council={council.id}
            data-seven={council.seven || undefined}
            data-in={councilInWindow(council, range) || undefined}
            data-hot={hot === `c-${council.id}` || undefined}
            className="yr-ring"
            style={at({ "--x": `${percent(council.year)}%`, "--y": `${layout.councils - 4}px` })}
          />
        ))}
        {data.divisions.map((division) => (
          <span
            key={division.id}
            data-division={division.id}
            data-in={divisionInWindow(division, range) || undefined}
            data-hot={hot === `d-${division.id}` || undefined}
            className="yr-div"
            style={at({ "--x": `${percent(division.year)}%`, "--y": `${layout.divisions}px` })}
          />
        ))}
        <span className="absolute inset-x-0 top-(--y) h-px bg-ink-3" style={at({ "--y": `${layout.axis}px` })} />
        {centuries.map((year) => (
          <span
            key={year}
            className={`absolute top-(--y) left-(--x) w-px bg-ink-3 ${year % 500 ? "h-1" : "h-1.75"}`}
            style={at({ "--x": `${percent(year)}%`, "--y": `${layout.axis}px` })}
          />
        ))}
        {axisYears.map((year, index) => (
          <span
            key={year}
            className={`absolute top-(--y) left-(--x) text-axis text-ink-3 tabular-nums ${
              index === 0 ? "" : index === axisYears.length - 1 ? "-translate-x-full" : "-translate-x-1/2"
            }`}
            style={at({ "--x": `${percent(year)}%`, "--y": `${layout.axis + 10}px` })}
          >
            {year}
          </span>
        ))}
        <div
          data-window=""
          tabIndex={0}
          role="slider"
          aria-label={text.window}
          aria-valuemin={span.from}
          aria-valuemax={span.to}
          aria-valuenow={a}
          aria-valuetext={value}
          onKeyDown={onKeyDown}
          className="absolute top-5 left-(--l) h-(--h) w-(--w) cursor-grab rounded-4 border border-accent bg-accent-weak active:cursor-grabbing"
          style={at({
            "--l": `${percent(a)}%`,
            "--w": `${percent(b) - percent(a)}%`,
            "--h": `${layout.windowHeight}px`,
          })}
        >
          <span data-h="l" className="yr-handle -left-2" />
          <span data-h="r" className="yr-handle -right-2" />
        </div>
        <span
          data-covered={labelCovered || undefined}
          className="absolute top-0 left-(--x) -translate-x-1/2 text-ui-2xs font-semibold whitespace-nowrap text-accent tabular-nums transition-opacity duration-150 ease-standard data-covered:opacity-0 motion-reduce:transition-none"
          style={at({ "--x": `${labelAt}%` })}
        >
          {yearsLabel}
        </span>
        {hotMark ? <Tip key={hotMark.key} mark={hotMark} /> : null}
      </div>
    </div>
  );
}
