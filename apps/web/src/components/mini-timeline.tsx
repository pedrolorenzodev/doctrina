import type { CSSProperties } from "react";
import type { TimelineSpan } from "@/lib/timeline-span";

type MiniTimelineProps = {
  start: number;
  end: number | null;
  label: string;
  span?: TimelineSpan;
  className?: string;
};

const shortSpan: TimelineSpan = { from: 1, to: 800, marks: [1, 200, 400, 600, 800] };
const longSpan: TimelineSpan = { from: 1, to: 2026, marks: [1, 500, 1000, 1500, 2026] };
const maxLabelLength = 16;

function at(value: number): CSSProperties {
  return { "--x": `${value}%` } as CSSProperties;
}

export function MiniTimeline({ start, end, label, span, className = "mt-1.5" }: MiniTimelineProps) {
  const last = end ?? start;
  const { from, to, marks } = span ?? (last <= shortSpan.to ? shortSpan : longSpan);
  const place = (year: number) => ((year - from) / (to - from)) * 100;
  const isRange = end !== null && end > start;
  const middle = place(isRange ? (start + end) / 2 : start);
  const pointLabel = label.length <= maxLabelLength ? label : isRange ? `${start}–${end}` : String(start);
  return (
    <div aria-hidden="true" className={`relative h-8.5 ${className}`}>
      <div className="absolute inset-x-0 top-4.5 h-px bg-rule-2" />
      {marks.map((mark, index) => (
        <div key={mark}>
          <div style={at(place(mark))} className="absolute top-3.75 left-(--x) h-1.75 w-px bg-rule-2" />
          <div
            style={at(place(mark))}
            className={`absolute top-6 left-(--x) text-micro text-ink-3 tabular-nums ${
              index === 0 ? "translate-x-0" : index === marks.length - 1 ? "-translate-x-full" : "-translate-x-1/2"
            }`}
          >
            {mark}
          </div>
        </div>
      ))}
      {isRange ? (
        <div
          style={{ "--x": `${place(start)}%`, "--w": `${Math.max(0.6, place(end) - place(start))}%` } as CSSProperties}
          className="absolute top-3.75 left-(--x) h-1.75 w-(--w) rounded-2 bg-accent-mid"
        />
      ) : null}
      <div
        style={at(middle)}
        className="absolute top-3.5 left-(--x) size-2.25 -translate-x-1/2 rounded-full bg-accent transition-transform duration-150 ease-standard group-hover/source:scale-125"
      />
      <div
        style={at(Math.min(Math.max(middle, 8), 92))}
        className="absolute top-0 left-(--x) -translate-x-1/2 text-micro-lg font-semibold whitespace-nowrap text-accent tabular-nums"
      >
        {pointLabel}
      </div>
    </div>
  );
}
