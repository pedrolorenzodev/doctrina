"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
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
  tip: boolean;
  text: YearsRulerText;
  onMove: (range: YearWindow) => void;
  onSettle: (range: YearWindow) => void;
  onHot: (key: string | null) => void;
};

type Mark = { key: string; name: string; date: string; from: number; to: number; fatherTop: number | null };

type Drag = { mode: "l" | "r" | "move" | "new"; x0: number; y0: number; a0: number; b0: number; moved: boolean };

const span = { from: 1, to: 2026 };
const dragSlopPx = 5;
const snapYears = 10;
const rowClearance = 14;
const firstRowTop = 30;
const barHeight = 3;
const fathersToCouncils = 20;
const councilStep = 11;
const narrowestTrack = { phone: 328, wide: 490 };
const keyStep = 10;
const keyStepLarge = 50;
const axisYears = [1, 500, 1000, 1500, 2026];
const hoverReachPx = 10;
const tipGapPx = 6;
const tipMarginPx = 8;
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

function packCouncils(councils: YearsData["councils"], clearance: number) {
  const rowEnds: number[] = [];
  const rowOf = new Map<string, number>();
  for (const council of [...councils].sort((x, y) => x.year - y.year)) {
    let row = rowEnds.findIndex((end) => end + clearance <= council.year);
    if (row < 0) {
      row = rowEnds.length;
      rowEnds.push(0);
    }
    rowEnds[row] = council.year;
    rowOf.set(council.id, row);
  }
  return { rows: rowEnds.length, rowOf };
}

const clearanceYears = (trackWidth: number) => (councilStep / trackWidth) * (span.to - span.from);

function Tip({ mark, trackWidth }: { mark: Mark; trackWidth: number }) {
  const tip = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = tip.current;
    const target = element?.parentElement?.querySelector<HTMLElement>(`[data-mark="${mark.key}"]`);
    if (!element || !target || trackWidth === 0) return;
    const width = element.getBoundingClientRect().width;
    const trackLeft = element.parentElement!.getBoundingClientRect().left;
    const box = target.getBoundingClientRect();
    const center = box.left + box.width / 2 - trackLeft;
    const lowest = width > trackWidth ? Math.min(0, tipMarginPx - trackLeft) : 0;
    const highest = Math.max(trackWidth, innerWidth - tipMarginPx - trackLeft) - width;
    const left = Math.max(lowest, Math.min(center - width / 2, trackWidth - width, highest));
    element.style.setProperty("--x", `${left}px`);
    element.style.setProperty("--y", `${target.offsetTop - tipGapPx}px`);
    element.dataset.placed = "";
  }, [mark.key, trackWidth]);

  return (
    <span ref={tip} aria-hidden="true" data-years-tip="" className="yr-tip">
      <b className="font-semibold">{mark.name}</b>
      {nameDateSeparator}
      {mark.date}
    </span>
  );
}

export function YearsRuler({ data, range, hot, tip, text, onMove, onSettle, onHot }: YearsRulerProps) {
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
    const councilsTop = firstRowTop + (rows - 1) * gap + barHeight + fathersToCouncils;
    const phone = packCouncils(data.councils, clearanceYears(narrowestTrack.phone));
    const wide = packCouncils(data.councils, clearanceYears(narrowestTrack.wide));
    const fatherTop = (id: string) => firstRowTop + (rowOf.get(id) ?? 0) * gap;
    const marks: Mark[] = [
      ...data.fathers.map((father) => ({
        key: `f-${father.id}`,
        name: father.name,
        date: father.date,
        from: father.start,
        to: father.end,
        fatherTop: fatherTop(father.id),
      })),
      ...data.councils.map((council) => ({
        key: `c-${council.id}`,
        name: council.name,
        date: council.date,
        from: council.year,
        to: council.year,
        fatherTop: null,
      })),
      ...data.divisions.map((division) => ({
        key: `d-${division.id}`,
        name: division.name,
        date: division.date,
        from: division.year,
        to: division.year,
        fatherTop: null,
      })),
    ];
    const rowsStyle = at({ "--c0": `${councilsTop}px`, "--crows-phone": phone.rows, "--crows-wide": wide.rows });
    return { fatherTop, phone, wide, marks, rowsStyle };
  }, [data]);
  const { a, b } = range;

  const hotMark = tip ? (layout.marks.find((mark) => mark.key === hot) ?? null) : null;

  function nearestMark(clientX: number, clientY: number): string | null {
    const rect = track.current!.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    let best: string | null = null;
    let bestDistance = hoverReachPx;
    for (const element of track.current!.querySelectorAll<HTMLElement>("[data-mark]")) {
      const box = element.getBoundingClientRect();
      const left = box.left - rect.left;
      const right = box.right - rect.left;
      const top = box.top - rect.top;
      const bottom = box.bottom - rect.top;
      const dx = x < left ? left - x : x > right ? x - right : 0;
      const dy = y < top ? top - y : y > bottom ? y - bottom : 0;
      const distance = Math.hypot(dx, dy);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = element.dataset.mark!;
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
    hotMark.fatherTop !== null &&
    hotMark.fatherTop - tipGapPx < labelClearancePx &&
    (Math.abs((percent(hotMark.from) + percent(hotMark.to)) / 2 - labelAt) / 100) * trackWidth < labelReachPx;
  const value = text.windowValue.replace("{a}", String(a)).replace("{b}", String(b));

  return (
    <div className="years-grid years-rows mt-7.5 select-none" style={layout.rowsStyle}>
      <div aria-hidden="true" className="relative hidden years-tall sm:block">
        <span
          className="absolute top-(--y) left-0 text-label leading-none text-ink-3"
          style={at({ "--y": `${firstRowTop - 4}px` })}
        >
          {text.rows.fathers}
        </span>
        <span className="absolute top-(--c0) left-0 mt-0.5 text-label leading-none text-ink-3">
          {text.rows.councils}
        </span>
        <span className="absolute top-(--div-top) left-0 mt-0.5 text-label leading-none text-ink-3">
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
        className="relative years-tall cursor-crosshair touch-none"
      >
        {data.fathers.map((father) => (
          <span
            key={father.id}
            data-father={father.id}
            data-mark={`f-${father.id}`}
            data-in={fatherInWindow(father, range) || undefined}
            data-hot={hot === `f-${father.id}` || undefined}
            className="yr-bar"
            style={at({
              "--x": `${percent(father.start)}%`,
              "--w": `${percent(father.end) - percent(father.start)}%`,
              "--y": `${layout.fatherTop(father.id)}px`,
            })}
          />
        ))}
        {data.councils.map((council) => (
          <span
            key={council.id}
            data-council={council.id}
            data-mark={`c-${council.id}`}
            data-seven={council.seven || undefined}
            data-in={councilInWindow(council, range) || undefined}
            data-hot={hot === `c-${council.id}` || undefined}
            className="yr-ring"
            style={at({
              "--x": `${percent(council.year)}%`,
              "--rp": layout.phone.rowOf.get(council.id) ?? 0,
              "--rw": layout.wide.rowOf.get(council.id) ?? 0,
            })}
          />
        ))}
        {data.divisions.map((division) => (
          <span
            key={division.id}
            data-division={division.id}
            data-mark={`d-${division.id}`}
            data-in={divisionInWindow(division, range) || undefined}
            data-hot={hot === `d-${division.id}` || undefined}
            className="yr-div"
            style={at({ "--x": `${percent(division.year)}%` })}
          />
        ))}
        <span className="absolute inset-x-0 top-(--axis-top) h-px bg-ink-3" />
        {centuries.map((year) => (
          <span
            key={year}
            className={`absolute top-(--axis-top) left-(--x) w-px bg-ink-3 ${year % 500 ? "h-1" : "h-1.75"}`}
            style={at({ "--x": `${percent(year)}%` })}
          />
        ))}
        {axisYears.map((year, index) => (
          <span
            key={year}
            className={`absolute top-(--axis-top) left-(--x) mt-2.5 text-axis text-ink-3 tabular-nums ${
              index === 0 ? "" : index === axisYears.length - 1 ? "-translate-x-full" : "-translate-x-1/2"
            }`}
            style={at({ "--x": `${percent(year)}%` })}
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
          className="absolute top-5 left-(--l) years-window w-(--w) cursor-grab rounded-4 border border-accent bg-accent-weak active:cursor-grabbing"
          style={at({ "--l": `${percent(a)}%`, "--w": `${percent(b) - percent(a)}%` })}
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
        {hotMark ? <Tip key={hotMark.key} mark={hotMark} trackWidth={trackWidth} /> : null}
      </div>
    </div>
  );
}
