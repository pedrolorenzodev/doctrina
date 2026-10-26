import { at, px, vars } from "@/lib/css-vars";
import type { TimelineEntry } from "@/lib/timeline-entry";
import { pixelsOf, type Scale } from "@/lib/timeline-layout";

export function TimelineMarks({ entry, scale, left }: { entry: TimelineEntry; scale: Scale; left: number }) {
  const x = (year: number) => pixelsOf(scale, year) - left;
  const bar = `absolute top-1.5 h-1.5 rounded-3 transition-colors duration-150 ${entry.own ? "bg-accent" : "bg-rule-2 group-hover:bg-ink-3"}`;
  const pressed = entry.own ? "" : "group-aria-pressed:bg-ink";
  if (entry.group === "people" && entry.birthUnknown) {
    const death = x(entry.end);
    return (
      <>
        {[0.25, 0.45, 0.7, 1].map((opacity, index) => (
          <span
            key={opacity}
            style={vars({ "--x": px(death - 28 + index * 7), "--o": String(opacity) })}
            className={`absolute top-2 left-(--x) size-0.75 rounded-full opacity-(--o) ${entry.own ? "bg-accent" : "bg-ink-3"}`}
          />
        ))}
        <span style={vars({ "--x": px(death), "--w": px(6) })} className={`${bar} ${pressed} left-(--x) w-(--w)`} />
      </>
    );
  }
  if (entry.group === "people") {
    const first = x(entry.start);
    const last = x(entry.end);
    return (
      <>
        {entry.leadStart !== null ? (
          <span
            style={vars({ "--x": px(x(entry.leadStart)), "--w": px(first - x(entry.leadStart)) })}
            className="absolute top-2 left-(--x) h-0 w-(--w) border-t-2 border-dashed border-rule-2"
          />
        ) : null}
        <span
          style={vars({ "--x": px(first), "--w": px(last - first) })}
          className={`${bar} ${pressed} left-(--x) w-(--w)`}
        />
      </>
    );
  }
  if (entry.group === "currents") {
    const first = x(entry.start);
    const last = x(Math.min(entry.end, scale.to));
    return (
      <span
        style={vars({ "--x": px(first), "--w": px(last - first) })}
        className={`absolute top-1.75 h-1 bg-rule-2 ${entry.openEnd ? "rounded-l-2" : "rounded-2"} left-(--x) w-(--w) group-hover:bg-ink-3 group-aria-pressed:bg-ink`}
      />
    );
  }
  if (entry.isRange) {
    const first = x(entry.start);
    const last = x(Math.min(entry.end, scale.to));
    return (
      <span
        style={vars({ "--x": px(first), "--w": px(Math.max(6, last - first)) })}
        className="absolute top-1.75 left-(--x) h-1 w-(--w) rounded-2 bg-ink-3 opacity-55 group-aria-pressed:bg-ink group-aria-pressed:opacity-100"
      />
    );
  }
  return (
    <span
      style={at("--x", px(x(entry.start)))}
      className="absolute top-1 left-(--x) -ml-1.25 size-2.5 rounded-full circle-border border-ink-3 bg-bg transition-colors duration-150 group-hover:border-ink group-aria-pressed:border-ink group-aria-pressed:bg-ink"
    >
      {entry.ecumenical ? (
        <span
          data-ecumenical
          className="absolute top-1/2 left-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-3 transition-colors duration-150 group-hover:bg-ink group-aria-pressed:bg-bg"
        />
      ) : null}
    </span>
  );
}
