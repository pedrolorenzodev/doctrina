"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TimelineMarks } from "@/components/timeline-marks";
import type { TimelineEntry } from "@/lib/timeline-entry";
import { PageLink } from "@/components/ui/page-link";
import { at, px, vars } from "@/lib/css-vars";
import { listSeparator } from "@/lib/punctuation";
import { packRows, percentOf, placeItem, type PlacedItem, type Scale } from "@/lib/timeline-layout";
import { LifeKeyItems } from "@/components/life-key-items";
import { useBoxWidth, useLabelMeasure } from "@/lib/use-timeline-box";

export type TimelineText = {
  groups: Record<TimelineEntry["group"], string>;
  keyLabel: string;
  key: {
    life: string;
    estimatedBirth: string;
    unknownBirth: string;
    knownAlive: string;
    active: string;
    composed: string;
    event: string;
    ecumenical: string;
  };
  hint: string;
  empty: string;
  diedMark: string;
};

type FatherTimelineProps = {
  from: number;
  to: number;
  marks: number[];
  entries: TimelineEntry[];
  text: TimelineText;
};

const defaultWidth = 960;
const labelPadding = 6;
const groupOrder: TimelineEntry["group"][] = ["people", "currents", "events"];

export function FatherTimeline({ from, to, marks, entries, text }: FatherTimelineProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [focusId, setFocusId] = useState<string | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const detail = useRef<HTMLDivElement>(null);
  const measure = useLabelMeasure(box);
  const inner = useRef<HTMLDivElement>(null);
  const measured = useBoxWidth(inner);
  const ready = measured > 0;
  const width = ready ? measured : defaultWidth;
  const scale: Scale = useMemo(() => ({ from, to, width }), [from, to, width]);
  const own = entries.find((entry) => entry.own);
  const selected = entries.find((entry) => entry.id === selectedId) ?? null;

  const labelOf = useCallback((entry: TimelineEntry) => `${entry.label}${listSeparator}${entry.rowDate}`, []);
  const placed = useMemo(() => {
    const byId = new Map<string, PlacedItem>();
    for (const entry of entries) {
      byId.set(entry.id, placeItem(scale, entry, measure(labelOf(entry), 13.5, 600) + labelPadding));
    }
    return byId;
  }, [entries, scale, measure, labelOf]);

  const rowsOf = (group: TimelineEntry["group"]): PlacedItem[][] => {
    const items = entries.filter((entry) => entry.group === group);
    const list = items.map((entry) => placed.get(entry.id)).filter((item): item is PlacedItem => item !== undefined);
    return group === "events" ? packRows(list) : list.map((item) => [item]);
  };

  const buttons = () => Array.from(box.current?.querySelectorAll<HTMLButtonElement>("button[data-entry]") ?? []);
  const move = (event: React.KeyboardEvent, step: number) => {
    const list = buttons();
    const index = list.findIndex((button) => button === document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    const target = list[(index + step + list.length) % list.length];
    target?.focus();
    setFocusId(target?.dataset.entry ?? null);
  };
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") move(event, 1);
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") move(event, -1);
  };
  const choose = (id: string, byKeyboard: boolean) => {
    setSelectedId(id);
    setFocusId(id);
    if (byKeyboard) requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  };

  const band = own ? percentOf(scale, own.leadStart ?? own.start) : 0;
  const bandWidth = own ? percentOf(scale, own.tailEnd ?? own.end) - band : 0;
  const tabbableId = focusId ?? own?.id ?? entries[0]?.id;

  const axisLabelClamp = (center: number, labelWidth: number) =>
    Math.min(Math.max(center, labelWidth / 2), width - labelWidth / 2);
  const ownCenter = own ? ((percentOf(scale, own.start) + percentOf(scale, own.end)) / 2 / 100) * width : 0;
  const ownLabel = own ? (own.birthUnknown ? own.rowDate.replace(text.diedMark, "") : own.ends.join("–")) : "";
  const ownLabelWidth = measure(ownLabel, 12.5, 600);

  return (
    <div className={ready ? "" : "invisible"}>
      <p className="mb-2.5 hidden text-label text-ink-3 max-sm:block">{text.hint}</p>
      <div
        ref={box}
        onKeyDown={onKeyDown}
        className="relative max-sm:-mx-4 max-sm:overflow-x-auto max-sm:px-4 max-sm:overscroll-x-contain"
      >
        <div ref={inner} className="relative max-sm:w-195">
          {own ? (
            <span
              aria-hidden="true"
              style={vars({ "--x": `${band}%`, "--w": `${bandWidth}%` })}
              className="pointer-events-none absolute top-0 bottom-7.5 left-(--x) w-(--w) min-w-0.75 bg-accent-weak"
            />
          ) : null}
          {groupOrder.map((group) => {
            const rows = rowsOf(group);
            if (rows.length === 0) return null;
            return (
              <div key={group} className="border-t border-rule first:border-t-0">
                <p className="sticky left-0 m-0 w-max pt-3.5 pb-1 text-label text-ink-3 first:pt-0.5">
                  {text.groups[group]}
                </p>
                {rows.map((row) => (
                  <div key={row.map((item) => item.id).join()} className="relative h-10 pointer-coarse:h-11">
                    {row.map((item) => {
                      const entry = entries.find((candidate) => candidate.id === item.id);
                      if (!entry) return null;
                      return (
                        <button
                          key={entry.id}
                          type="button"
                          data-entry={entry.id}
                          aria-pressed={entry.id === selectedId}
                          tabIndex={entry.id === tabbableId ? 0 : -1}
                          onClick={(event) => choose(entry.id, event.detail === 0)}
                          onFocus={() => setFocusId(entry.id)}
                          style={vars({
                            "--l": px(item.left),
                            "--w": px(item.right - item.left),
                            "--lx": px(item.labelLeft),
                          })}
                          className="group absolute top-1 left-(--l) h-8.5 pointer-coarse:top-0 pointer-coarse:h-11 w-(--w) cursor-pointer rounded-4 border-0 bg-transparent p-0 text-left font-ui text-btn leading-none whitespace-nowrap text-ink-2"
                        >
                          <span className="absolute inset-0 pointer-coarse:top-1">
                            <TimelineMarks entry={entry} scale={scale} left={item.left} />
                            <span
                              className={`absolute top-4.75 left-(--lx) px-px transition-colors duration-150 group-hover:text-ink group-hover:underline group-hover:decoration-rule-2 group-hover:underline-offset-3 group-aria-pressed:font-semibold group-aria-pressed:text-ink ${entry.own ? "font-medium text-accent group-hover:text-accent group-aria-pressed:text-accent" : ""}`}
                            >
                              {entry.label}
                              {listSeparator}
                              {entry.diedSpoken ? (
                                <>
                                  <span aria-hidden="true">{entry.rowDate}</span>
                                  <span className="sr-only">{entry.diedSpoken}</span>
                                </>
                              ) : (
                                entry.rowDate
                              )}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })}
          <div aria-hidden="true" className="relative mt-1.5 h-11.5 border-t border-ink-3">
            {marks.map((mark, index) => {
              const left = (percentOf(scale, mark) / 100) * width;
              const hidden = own !== undefined && Math.abs(left - ownCenter) < ownLabelWidth / 2 + 16;
              return (
                <div key={mark}>
                  <span
                    style={at("--x", `${percentOf(scale, mark)}%`)}
                    className="absolute top-0 left-(--x) h-1.5 w-px bg-ink-3"
                  />
                  {hidden ? null : (
                    <span
                      style={at("--x", `${percentOf(scale, mark)}%`)}
                      className={`absolute top-2.5 left-(--x) text-ui-2xs whitespace-nowrap text-ink-3 tabular-nums ${index === 0 ? "" : index === marks.length - 1 ? "-translate-x-full" : "-translate-x-1/2"}`}
                    >
                      {mark}
                    </span>
                  )}
                </div>
              );
            })}
            {own ? (
              <>
                <span
                  style={vars({ "--x": `${band}%`, "--w": `${bandWidth}%` })}
                  className="absolute -top-0.75 left-(--x) h-1.25 w-(--w) min-w-0.75 rounded-2 bg-accent"
                />
                <span
                  style={at("--x", px(axisLabelClamp(ownCenter, ownLabelWidth)))}
                  className="absolute top-2.5 left-(--x) -translate-x-1/2 text-label font-semibold whitespace-nowrap text-accent tabular-nums"
                >
                  {ownLabel}
                </span>
              </>
            ) : null}
            {selected && !selected.own ? (
              <SelectionOnAxis entry={selected} scale={scale} width={width} measure={measure} />
            ) : null}
          </div>
        </div>
      </div>
      <ul
        aria-label={text.keyLabel}
        className="m-0 mt-1 flex list-none flex-wrap gap-x-5.5 gap-y-1.5 p-0 text-label text-ink-3"
      >
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-7 rounded-3 bg-rule-2" />
          {text.key.life}
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="flex w-7 items-center">
            <span className="h-0 w-3 border-t-2 border-dashed border-rule-2" />
            <span className="ml-px h-1.5 w-3.5 rounded-3 bg-rule-2" />
          </span>
          {text.key.estimatedBirth}
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="flex w-7 items-center gap-1">
            <span className="size-0.75 rounded-full bg-ink-3 opacity-35" />
            <span className="size-0.75 rounded-full bg-ink-3 opacity-60" />
            <span className="size-0.75 rounded-full bg-ink-3" />
            <span className="h-1.5 w-2.5 rounded-3 bg-rule-2" />
          </span>
          {text.key.unknownBirth}
        </li>
        <LifeKeyItems entries={entries} text={text.key} />
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="size-3 rounded-full circle-border border-ink-3 bg-bg" />
          {text.key.event}
        </li>
        {entries.some((entry) => entry.ecumenical) ? (
          <li className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="grid size-3 place-items-center rounded-full circle-border border-ink-3 bg-bg"
            >
              <span className="size-1 rounded-full bg-ink-3" />
            </span>
            {text.key.ecumenical}
          </li>
        ) : null}
      </ul>
      <FixedStrip entry={selected} detail={detail} />
      <div
        ref={detail}
        aria-live="polite"
        className="mt-4.5 min-h-37.5 border-t border-rule pt-4.5 pb-1 has-data-empty:min-h-0"
      >
        {selected ? (
          <div className="font-ui">
            <p className="m-0 mb-1 text-label text-ink-3">{selected.kind}</p>
            <h3
              ref={heading}
              tabIndex={-1}
              className="m-0 font-head text-title-sm font-normal text-ink opsz-30 focus-visible:rounded-3 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
            >
              {selected.name}
            </h3>
            <p className="m-0 mt-1.5 max-w-136 text-ui-sm font-medium text-ink">{selected.dates}</p>
            <p className="m-0 mt-2 max-w-155 font-body text-passage-body font-light text-ink-2">{selected.text}</p>
            {selected.own ? null : (
              <p className="m-0 mt-2.5 text-ui-sm">
                {/* TODO: only the Fathers' pages exist; currents, councils and events link to screen 08 once it exists */}
                {selected.href ? (
                  <PageLink href={selected.href}>{selected.linkLabel}</PageLink>
                ) : (
                  <PageLink>{selected.linkLabel}</PageLink>
                )}
              </p>
            )}
          </div>
        ) : (
          <p data-empty className="m-0 text-ui-sm text-ink-3">
            {text.empty}
          </p>
        )}
      </div>
    </div>
  );
}

function SelectionOnAxis({
  entry,
  scale,
  width,
  measure,
}: {
  entry: TimelineEntry;
  scale: Scale;
  width: number;
  measure: (label: string, size: number, weight: number) => number;
}) {
  const first = percentOf(scale, entry.leadStart !== null ? entry.start : entry.start);
  const last = percentOf(scale, Math.min(entry.end, scale.to));
  const clamp = (center: number, labelWidth: number) =>
    Math.min(Math.max(center, labelWidth / 2), width - labelWidth / 2);
  const [startLabel, endLabel] = entry.ends;
  const spanPixels = ((last - first) / 100) * width;
  const separate =
    entry.ends.length === 2 &&
    startLabel !== undefined &&
    endLabel !== undefined &&
    spanPixels > measure(startLabel, 12, 600) / 2 + measure(endLabel, 12, 600) / 2 + 12;
  const labelClass =
    "absolute top-6.75 left-(--x) -translate-x-1/2 text-ui-2xs font-semibold whitespace-nowrap text-ink tabular-nums";
  const single = entry.ends.length === 2 ? entry.rowDate : (startLabel ?? "");
  return (
    <>
      <span
        style={vars({ "--x": `${first}%`, "--w": `${last - first}%` })}
        className="absolute -top-0.75 left-(--x) h-1.25 w-(--w) min-w-0.75 rounded-2 bg-ink"
      />
      {separate && startLabel !== undefined && endLabel !== undefined ? (
        <>
          <span
            style={at("--x", px(clamp((first / 100) * width, measure(startLabel, 12, 600))))}
            className={labelClass}
          >
            {startLabel}
          </span>
          <span style={at("--x", px(clamp((last / 100) * width, measure(endLabel, 12, 600))))} className={labelClass}>
            {endLabel}
          </span>
        </>
      ) : (
        <span
          style={at("--x", px(clamp(((first + last) / 2 / 100) * width, measure(single, 12, 600))))}
          className={labelClass}
        >
          {single}
        </span>
      )}
    </>
  );
}

const stripFadeBefore = 40;
const stripFadeAfter = 30;
const stripGap = 18;

function FixedStrip({ entry, detail }: { entry: TimelineEntry | null; detail: React.RefObject<HTMLElement | null> }) {
  const strip = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const shown = useRef(false);
  const entryId = entry?.id ?? null;

  useEffect(() => {
    const element = strip.current;
    const target = detail.current;
    if (!element || !target || entryId === null) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const distance = target.getBoundingClientRect().top - stripGap - innerHeight;
      const hidden = element.dataset.off === "true";
      const opacity = reduced
        ? distance > (hidden ? -stripFadeBefore / 4 : -stripFadeAfter)
          ? 1
          : 0
        : Math.max(0, Math.min(1, (distance + stripFadeBefore) / (stripFadeBefore + stripFadeAfter)));
      element.style.setProperty("--strip-opacity", opacity.toFixed(3));
      element.dataset.off = String(opacity < 0.5);
    };
    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
    };
  }, [entryId, detail]);

  useEffect(() => {
    const element = content.current;
    if (!element || entryId === null) {
      shown.current = false;
      return;
    }
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frames = shown.current
        ? [{ opacity: 0 }, { opacity: 1 }]
        : [
            { opacity: 0, transform: "translateY(8px)" },
            { opacity: 1, transform: "none" },
          ];
      element.animate(frames, {
        duration: shown.current ? 160 : 240,
        easing: shown.current ? "ease-out" : "cubic-bezier(0.22, 1, 0.36, 1)",
      });
    }
    shown.current = true;
  }, [entryId]);

  return (
    <div className="sticky bottom-0 z-4 h-0">
      {entry ? (
        <div
          ref={strip}
          data-strip
          data-off="false"
          className="texture-layer absolute inset-x-0 bottom-0 min-h-16 border-t border-rule-2 bg-bg shadow-strip opacity-(--strip-opacity) data-[off=true]:pointer-events-none data-[off=true]:invisible max-sm:-mx-4 max-sm:px-4"
        >
          <div ref={content} className="flex min-h-16 flex-wrap items-center gap-x-5 gap-y-0.5 py-2 font-ui">
            <p className="m-0 flex min-w-0 flex-1 basis-full flex-col sm:basis-0">
              <span className="flex flex-wrap items-baseline gap-x-3">
                <b className="font-head text-strip-name font-normal text-ink max-sm:text-strip-name-mobile">
                  {entry.name}
                </b>
                <span className="text-label text-ink-3 tabular-nums">{entry.dates}</span>
              </span>
              <span className="truncate text-ui-sm text-ink-2">{entry.text}</span>
            </p>
            {entry.own ? null : (
              <p className="m-0 shrink-0 text-ui-sm">
                {/* TODO: only the Fathers' pages exist; currents, councils and events link to screen 08 once it exists */}
                {entry.href ? (
                  <PageLink href={entry.href}>{entry.linkLabel}</PageLink>
                ) : (
                  <PageLink>{entry.linkLabel}</PageLink>
                )}
              </p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
