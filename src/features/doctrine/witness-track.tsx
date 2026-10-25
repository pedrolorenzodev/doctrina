"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { createLiftTweens, type LiftTweens } from "@/lib/lift-tween";

export type TrackWitness = {
  id: string;
  author: string;
  dateLabel: string;
  start: number;
  end: number;
};

export type YearRange = [number, number];

type WitnessTrackProps = {
  witnesses: TrackWitness[];
  range: YearRange | null;
  hot: string | null;
  active: string | null;
  label: string;
  handleStartLabel: string;
  handleEndLabel: string;
  onHot: (id: string | null) => void;
  onRange: (range: YearRange | null) => void;
  onPick: (id: string) => void;
};

const span = { from: 1, to: 800 };
const hoverRadius = 40;
const touchRadius = 44;
const leaveRadius = 52;
const stickMargin = 4;
const dragSlopPx = 5;
const snapYears = 10;
const waveReachPx = 140;
const waveHeight = 14;
const hotHeight = 22;
const edges = { left: 15, right: 75 };
const tickEvery = 50;
const nameDateSeparator = ", ";

type Drag =
  | { mode: "new"; from: number; startX: number; pending: boolean; near: string | null; previous: YearRange | null }
  | { mode: "move"; offset: number; length: number; startX: number; pending: boolean; near: string | null }
  | { mode: "l" }
  | { mode: "r" };

const percent = (year: number) => ((year - span.from) / (span.to - span.from)) * 100;
const clamp = (value: number, low: number, high: number) => Math.max(low, Math.min(high, value));
const inRange = (witness: TrackWitness, range: YearRange | null) =>
  !range || (witness.end >= range[0] && witness.start <= range[1]);
const ticks = Array.from({ length: span.to / tickEvery + 1 }, (_, index) => index * tickEvery);

const baseX = (witness: TrackWitness, trackWidth: number) => (percent(witness.start) / 100) * trackWidth;

function edgeOf(start: number): "left" | "right" | undefined {
  const at = percent(start);
  if (at > edges.right) return "right";
  if (at < edges.left) return "left";
  return undefined;
}

export function WitnessTrack({
  witnesses,
  range,
  hot,
  active,
  label,
  handleStartLabel,
  handleEndLabel,
  onHot,
  onRange,
  onPick,
}: WitnessTrackProps) {
  const track = useRef<HTMLDivElement>(null);
  const markers = useRef(new Map<string, HTMLElement>());
  const tweens = useRef<LiftTweens | null>(null);
  const drag = useRef<Drag | null>(null);
  const hotNow = useRef(hot);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    hotNow.current = hot;
  }, [hot]);

  useEffect(() => {
    tweens.current = createLiftTweens((id, value) => {
      const marker = markers.current.get(id);
      if (!marker) return;
      marker.style.setProperty("--ly", `${value}px`);
      marker.style.setProperty("--sh", `${Math.max(0, -value)}px`);
    });
    const current = tweens.current;
    return () => current.stop();
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const measure = () => setWidth(element.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hovered = hot ? witnesses.find((witness) => witness.id === hot) : undefined;
    for (const witness of witnesses) {
      let lift = 0;
      if (hovered) {
        const distance = ((Math.abs(percent(witness.start) - percent(hovered.start)) / 100) * width) / waveReachPx;
        lift = distance < 1 ? Math.round(-waveHeight * (0.5 + 0.5 * Math.cos(Math.PI * distance))) : 0;
      }
      if (witness.id === hot) lift = -hotHeight;
      else if (witness.id === active && !hot) lift = -waveHeight;
      tweens.current?.to(witness.id, lift);
    }
  }, [witnesses, hot, active, width]);

  function nearest(clientX: number, pointerType: string): TrackWitness | null {
    const rect = track.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = clientX - rect.left;
    const visible = witnesses.filter((witness) => inRange(witness, range));
    let best: TrackWitness | null = null;
    let bestDistance = Infinity;
    for (const witness of visible) {
      const distance = Math.abs(baseX(witness, rect.width) - x);
      if (distance < bestDistance) {
        best = witness;
        bestDistance = distance;
      }
    }
    const current = hotNow.current ? visible.find((witness) => witness.id === hotNow.current) : undefined;
    if (current && pointerType === "mouse") {
      const currentDistance = Math.abs(baseX(current, rect.width) - x);
      const gap = best ? Math.abs(baseX(best, rect.width) - baseX(current, rect.width)) : 0;
      if (currentDistance <= leaveRadius && currentDistance - bestDistance <= Math.min(stickMargin, gap / 4))
        return current;
    }
    return best && bestDistance < (pointerType === "mouse" ? hoverRadius : touchRadius) ? best : null;
  }

  function yearAt(clientX: number): number {
    const rect = track.current?.getBoundingClientRect();
    if (!rect) return span.from;
    const year = clamp((clientX - rect.left) / rect.width, 0, 1) * (span.to - span.from) + span.from;
    return Math.max(span.from, Math.round(year / snapYears) * snapYears);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;
    const handle = target.closest<HTMLElement>("[data-handle]")?.dataset.handle;
    const inside = target.closest("[data-win]");
    const year = yearAt(event.clientX);
    const near = nearest(event.clientX, event.pointerType);
    if (handle === "l" || handle === "r") drag.current = { mode: handle };
    else if (inside && range)
      drag.current = {
        mode: "move",
        offset: year - range[0],
        length: range[1] - range[0],
        startX: event.clientX,
        pending: true,
        near: near ? near.id : null,
      };
    else
      drag.current = {
        mode: "new",
        from: year,
        startX: event.clientX,
        pending: true,
        near: near ? near.id : null,
        previous: range,
      };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current) {
      if (event.pointerType === "mouse") onHot(nearest(event.clientX, event.pointerType)?.id ?? null);
      return;
    }
    if ((current.mode === "new" || current.mode === "move") && current.pending) {
      if (Math.abs(event.clientX - current.startX) < dragSlopPx) return;
      current.pending = false;
      onHot(null);
    }
    const year = yearAt(event.clientX);
    if (current.mode === "new") onRange([Math.min(current.from, year), Math.max(current.from, year)]);
    else if (!range) return;
    else if (current.mode === "l") onRange([Math.min(year, range[1] - snapYears), range[1]]);
    else if (current.mode === "r") onRange([range[0], Math.max(year, range[0] + snapYears)]);
    else {
      const startYear = clamp(year - current.offset, span.from, span.to - current.length);
      onRange([startYear, startYear + current.length]);
    }
  }

  function endDrag() {
    const current = drag.current;
    drag.current = null;
    if (!current) return;
    if ((current.mode === "new" || current.mode === "move") && current.pending) {
      if (current.near) {
        onHot(current.near);
        onPick(current.near);
      }
      return;
    }
    if (current.mode === "new" && range && range[1] - range[0] < snapYears) onRange(current.previous);
  }

  function onHandleKey(event: KeyboardEvent<HTMLElement>, side: "l" | "r") {
    const step = event.key === "ArrowLeft" ? -snapYears : event.key === "ArrowRight" ? snapYears : 0;
    if (!step || !range) return;
    event.preventDefault();
    if (side === "l") onRange([clamp(range[0] + step, span.from, range[1] - snapYears), range[1]]);
    else onRange([range[0], clamp(range[1] + step, range[0] + snapYears, span.to)]);
  }

  function onMarkerKey(event: KeyboardEvent<HTMLElement>, id: string) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const visible = witnesses.filter((witness) => inRange(witness, range));
    const index = visible.findIndex((witness) => witness.id === id);
    const next = visible[index + (event.key === "ArrowRight" ? 1 : -1)];
    if (!next) return;
    event.preventDefault();
    markers.current.get(next.id)?.focus();
  }

  const visible = witnesses.filter((witness) => inRange(witness, range));
  const tabStop = visible.find((witness) => witness.id === (active ?? hot)) ?? visible[0];
  const activeWitness = active ? witnesses.find((witness) => witness.id === active) : undefined;

  return (
    <div
      data-lr-stage
      data-hovering={hot ? "" : undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={() => {
        if (!drag.current) onHot(null);
      }}
      className="group/stage touch-none pt-7.5 select-none"
    >
      <div
        ref={track}
        role="group"
        aria-label={label}
        className="relative h-14.5 cursor-crosshair group-data-hovering/stage:cursor-pointer"
      >
        <div className="absolute inset-x-0 top-7.5 h-px bg-rule-2" />
        {ticks.map((year) => {
          const major = year % 100 === 0;
          const at = percent(Math.max(span.from, year));
          return (
            <div key={year}>
              <div
                style={{ "--x": `${at}%` } as CSSProperties}
                className={`absolute left-(--x) w-px bg-rule-2 ${major ? "top-6.5 h-2.25" : "top-7 h-1.25"}`}
              />
              {major ? (
                <div
                  style={{ "--x": `${at}%` } as CSSProperties}
                  className={`absolute top-10 left-(--x) -translate-x-1/2 text-axis text-ink-3 tabular-nums ${
                    (year / 100) % 2 ? "max-sm:hidden" : ""
                  }`}
                >
                  {year === 0 ? 1 : year}
                </div>
              ) : null}
            </div>
          );
        })}
        {activeWitness ? (
          <div
            data-lr-pos
            style={
              {
                "--l": `calc(${percent(activeWitness.start)}% - 7px)`,
                "--w": `calc(${percent(activeWitness.end) - percent(activeWitness.start)}% + 14px)`,
              } as CSSProperties
            }
            className="pointer-events-none absolute top-4.75 left-(--l) h-5.75 w-(--w) rounded-3 border border-accent-mid bg-accent-weak lr-pos"
          />
        ) : null}
        {range ? (
          <div
            data-win
            style={
              {
                "--l": `${percent(range[0])}%`,
                "--w": `${percent(range[1]) - percent(range[0])}%`,
              } as CSSProperties
            }
            className="absolute top-4 left-(--l) z-1 h-7.25 w-(--w) cursor-grab rounded-4 border border-accent bg-accent-weak"
          >
            <button
              type="button"
              data-handle="l"
              aria-label={handleStartLabel.replace("{year}", String(range[0]))}
              onKeyDown={(event) => onHandleKey(event, "l")}
              className="absolute -top-px -bottom-px -left-2 w-3.5 cursor-ew-resize border-0 bg-transparent p-0 lr-handle"
            />
            <button
              type="button"
              data-handle="r"
              aria-label={handleEndLabel.replace("{year}", String(range[1]))}
              onKeyDown={(event) => onHandleKey(event, "r")}
              className="absolute -top-px -right-2 -bottom-px w-3.5 cursor-ew-resize border-0 bg-transparent p-0 lr-handle"
            />
          </div>
        ) : null}
        {witnesses.map((witness) => {
          const shown = witness.id === hot || (witness.id === active && !hot);
          return (
            <button
              key={witness.id}
              ref={(element) => {
                if (element) markers.current.set(witness.id, element);
                else markers.current.delete(witness.id);
              }}
              type="button"
              data-lr-marker
              data-id={witness.id}
              data-hot={witness.id === hot ? "" : undefined}
              data-on={witness.id === active ? "" : undefined}
              data-show={shown ? "" : undefined}
              data-dim={inRange(witness, range) ? undefined : ""}
              data-edge={edgeOf(witness.start)}
              tabIndex={tabStop?.id === witness.id ? 0 : -1}
              aria-label={[witness.author, witness.dateLabel].join(nameDateSeparator)}
              onFocus={() => onHot(witness.id)}
              onBlur={() => onHot(null)}
              onClick={() => onPick(witness.id)}
              onKeyDown={(event) => onMarkerKey(event, witness.id)}
              style={
                {
                  "--x": `${percent(witness.start)}%`,
                  "--w": `${Math.max(0, percent(witness.end) - percent(witness.start))}%`,
                } as CSSProperties
              }
              className="pointer-events-none absolute top-7.5 left-(--x) z-2 h-0 w-(--w) border-0 bg-transparent p-0"
            >
              <span className="lr-seg" />
              <span className="lr-stem" />
              <span className="lr-lift">
                <span className="lr-dot" />
                <span className="lr-label">
                  <b className="font-semibold">{witness.author}</b>
                  {nameDateSeparator}
                  {witness.dateLabel}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
