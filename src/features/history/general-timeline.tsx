"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SidePanel } from "@/components/side-panel";
import { TimelineMarks } from "@/components/timeline-marks";
import { PageLink } from "@/components/ui/page-link";
import type { GeneralEntry, GeneralSection } from "@/content/get-general-timeline";
import { at, px, vars } from "@/lib/css-vars";
import { listSeparator } from "@/lib/punctuation";
import { scrollToElement } from "@/lib/scroll";
import { packRows, pixelsOf, placeItem, type PlacedItem, type Scale } from "@/lib/timeline-layout";
import { useFontsReady, useLabelMeasure } from "@/lib/use-timeline-box";
import { TimelineRuler } from "@/features/history/timeline-ruler";

export type GeneralTimelineText = {
  sections: Record<GeneralSection, string>;
  key: { life: string; estimated: string; unknownBirth: string; council: string; ecumenical: string; lasts: string };
  keyLabel: string;
  hint: string;
  diedMark: string;
  panel: { label: string; title: string; close: string; writings: string };
};

type GeneralTimelineProps = {
  from: number;
  to: number;
  marks: number[];
  entries: GeneralEntry[];
  text: GeneralTimelineText;
};

const pixelsPerYear = 5.85;
const rowGap = 18;
const labelPadding = 6;
const panDistance = 5;
const sectionOrder: GeneralSection[] = ["people", "councils", "works", "currents"];

export function GeneralTimeline({ from, to, marks, entries, text }: GeneralTimelineProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [focusId, setFocusId] = useState<string | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelEntry, setPanelEntry] = useState<GeneralEntry | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const justPanned = useRef(false);
  const measure = useLabelMeasure(scroller);
  const ready = useFontsReady();
  const width = Math.round((to - from) * pixelsPerYear);
  const scale: Scale = useMemo(() => ({ from, to, width }), [from, to, width]);
  const selected = entries.find((entry) => entry.id === selectedId) ?? null;

  const placed = useMemo(() => {
    const byId = new Map<string, PlacedItem>();
    for (const entry of entries) {
      byId.set(
        entry.id,
        placeItem(scale, entry, measure(`${entry.label}${listSeparator}${entry.rowDate}`, 13.5, 600) + labelPadding),
      );
    }
    return byId;
  }, [entries, scale, measure]);

  const rowsOf = (section: GeneralSection) =>
    packRows(
      entries
        .filter((entry) => entry.section === section)
        .map((entry) => placed.get(entry.id))
        .filter((item): item is PlacedItem => item !== undefined),
      rowGap,
    );

  const buttons = () => Array.from(scroller.current?.querySelectorAll<HTMLButtonElement>("button[data-entry]") ?? []);
  const onKeyDown = (event: React.KeyboardEvent) => {
    const step =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;
    if (step === 0) return;
    const list = buttons();
    const index = list.findIndex((button) => button === document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    const target = list[(index + step + list.length) % list.length];
    target?.focus();
    setFocusId(target?.dataset.entry ?? null);
  };

  const showSelected = (id: string) => {
    const box = scroller.current;
    const button = box?.querySelector<HTMLElement>(`button[data-entry="${id}"]`);
    if (!box || !button) return;
    const rect = button.getBoundingClientRect();
    const view = box.getBoundingClientRect();
    if (rect.left > view.right - 60 || rect.right < view.left + 60) {
      const left = box.scrollLeft + rect.left - view.left - 40;
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      box.scrollTo({ left, behavior: reduced ? "instant" : "smooth" });
    }
  };

  const choose = (id: string, byKeyboard: boolean) => {
    if (justPanned.current) return;
    setFocusId(id);
    if (id === selectedId && panelOpen) {
      setSelectedId(null);
      setPanelOpen(false);
      return;
    }
    setSelectedId(id);
    setPanelEntry(entries.find((entry) => entry.id === id) ?? null);
    setPanelOpen(true);
    requestAnimationFrame(() => showSelected(id));
    if (byKeyboard) requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  };

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    requestAnimationFrame(() => {
      const open = scroller.current?.querySelector<HTMLElement>('button[aria-pressed="true"]');
      open?.focus({ preventScroll: true });
    });
  }, []);

  const arrived = useRef(false);
  useEffect(() => {
    if (!ready || arrived.current) return;
    arrived.current = true;
    let id = "";
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    const entry = entries.find((candidate) => candidate.id === id);
    if (!entry) return;
    requestAnimationFrame(() => {
      setSelectedId(entry.id);
      setPanelEntry(entry);
      setPanelOpen(true);
      setFocusId(entry.id);
      requestAnimationFrame(() => {
        showSelected(entry.id);
        const button = scroller.current?.querySelector<HTMLElement>(`button[data-entry="${entry.id}"]`);
        if (button) scrollToElement(button);
      });
    });
  }, [ready, entries]);

  useEffect(() => {
    const box = scroller.current;
    if (!box) return;
    let start: { x: number; left: number; moved: boolean } | null = null;
    const down = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      start = { x: event.clientX, left: box.scrollLeft, moved: false };
    };
    const move = (event: PointerEvent) => {
      if (!start) return;
      const delta = event.clientX - start.x;
      if (Math.abs(delta) > panDistance) start.moved = true;
      if (start.moved) box.scrollLeft = start.left - delta;
    };
    const up = () => {
      if (start?.moved) {
        justPanned.current = true;
        setTimeout(() => {
          justPanned.current = false;
        }, 0);
      }
      start = null;
    };
    box.addEventListener("pointerdown", down);
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
    return () => {
      box.removeEventListener("pointerdown", down);
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", up);
    };
  }, []);

  const span = selected
    ? { first: selected.leadStart !== null ? selected.start : selected.start, last: Math.min(selected.end, to) }
    : null;
  const bandLeft = span ? pixelsOf(scale, span.first) : 0;
  const bandWidth = span ? Math.max(2, pixelsOf(scale, span.last) - bandLeft) : 0;
  const tabbableId = focusId ?? entries[0]?.id;

  const selectionLabels: { x: number; label: string }[] = [];
  if (selected && span) {
    const [startLabel, endLabel] = selected.ends;
    const spanWidth = pixelsOf(scale, span.last) - pixelsOf(scale, span.first);
    if (
      selected.ends.length === 2 &&
      startLabel !== undefined &&
      endLabel !== undefined &&
      spanWidth > measure(startLabel, 12.5, 600) / 2 + measure(endLabel, 12.5, 600) / 2 + 14
    ) {
      selectionLabels.push(
        { x: pixelsOf(scale, span.first), label: startLabel },
        { x: pixelsOf(scale, span.last), label: endLabel },
      );
    } else {
      selectionLabels.push({
        x: (pixelsOf(scale, span.first) + pixelsOf(scale, span.last)) / 2,
        label: selected.ends.length === 2 ? selected.rowDate : (selected.ends[0] ?? ""),
      });
    }
  }
  const clamp = (center: number, labelWidth: number) =>
    Math.min(Math.max(center, labelWidth / 2), width - labelWidth / 2);

  const axis = (top: boolean) => (
    <div aria-hidden="true" className={`relative border-ink-3 ${top ? "h-8.5 border-b" : "h-10 border-t"}`}>
      {marks.map((mark) => {
        const x = pixelsOf(scale, mark);
        const major = mark % 100 === 0;
        const labelled =
          (major || mark === 50) &&
          !selectionLabels.some((item) => Math.abs(item.x - x) < measure(item.label, 12.5, 600) / 2 + 22);
        return (
          <div key={mark}>
            <span
              style={at("--x", px(x))}
              className={`absolute left-(--x) w-px bg-ink-3 ${top ? "bottom-0" : "top-0"} ${major ? "h-1.5" : "h-1"}`}
            />
            {labelled ? (
              <span
                style={at("--x", px(x))}
                className={`absolute left-(--x) text-ui-2xs whitespace-nowrap text-ink-3 tabular-nums ${top ? "bottom-2.5" : "top-2.5"} ${mark === to ? "-translate-x-full" : "-translate-x-1/2"}`}
              >
                {mark}
              </span>
            ) : null}
          </div>
        );
      })}
      {selected && span ? (
        <span
          style={vars({ "--x": px(bandLeft), "--w": px(bandWidth) })}
          className={`absolute left-(--x) h-1.25 w-(--w) min-w-0.75 rounded-2 bg-ink ${top ? "-bottom-0.75" : "-top-0.75"}`}
        />
      ) : null}
      {selectionLabels.map((item) => {
        const labelWidth = measure(item.label, 12.5, 600) + 8;
        return (
          <span
            key={item.label}
            style={at("--x", px(clamp(item.x, labelWidth)))}
            className={`absolute left-(--x) z-1 -translate-x-1/2 bg-bg px-1 text-ui-xs font-semibold whitespace-nowrap text-ink tabular-nums ${top ? "bottom-2.25" : "top-2.5"}`}
          >
            {item.label}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className={ready ? "" : "invisible"}>
      <p className="mb-2.5 text-ui-xs text-ink-3">{text.hint}</p>
      <TimelineRuler scroller={scroller} from={from} to={to} entries={entries} selectedId={selectedId} />
      <div
        ref={scroller}
        onKeyDown={onKeyDown}
        data-lenis-prevent
        data-scroller
        className="scrollbar-rule relative overflow-x-auto overscroll-x-contain border-y border-rule max-sm:-mx-4 max-sm:px-4"
      >
        <div style={at("--w", px(width))} className="relative w-(--w)">
          {axis(true)}
          <div className="relative">
            {marks.map((mark) => (
              <span
                key={mark}
                aria-hidden="true"
                style={at("--x", px(pixelsOf(scale, mark)))}
                className="pointer-events-none absolute top-0 bottom-0 left-(--x) w-px bg-rule opacity-50"
              />
            ))}
            {selected && span ? (
              <span
                aria-hidden="true"
                style={vars({ "--x": px(bandLeft), "--w": px(bandWidth) })}
                className="pointer-events-none absolute top-0 bottom-0 left-(--x) w-(--w) bg-accent-weak"
              />
            ) : null}
            {sectionOrder.map((section) => {
              const rows = rowsOf(section);
              if (rows.length === 0) return null;
              return (
                <div key={section} className="relative border-t border-rule first:border-t-0">
                  <p className="sticky left-0 z-2 m-0 w-max pt-3 pr-2.5 pb-1 text-ui-xs text-ink-3">
                    {text.sections[section]}
                  </p>
                  {rows.map((row) => (
                    <div key={row.map((item) => item.id).join()} className="relative h-10">
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
                            className="group absolute top-1 left-(--l) h-8.5 w-(--w) cursor-pointer rounded-4 border-0 bg-transparent p-0 text-left font-ui text-btn leading-none whitespace-nowrap text-ink-2 pointer-coarse:top-0 pointer-coarse:h-10"
                          >
                            <TimelineMarks entry={entry} scale={scale} left={item.left} />
                            <span className="absolute top-4.75 left-(--lx) px-px transition-colors duration-150 group-hover:text-ink group-hover:underline group-hover:decoration-rule-2 group-hover:underline-offset-3 group-aria-pressed:font-semibold group-aria-pressed:text-ink">
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
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          {axis(false)}
        </div>
      </div>
      <ul
        aria-label={text.keyLabel}
        className="m-0 mt-3 flex list-none flex-wrap gap-x-5.5 gap-y-1.5 p-0 text-ui-xs text-ink-3"
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
          {text.key.estimated}
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
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="size-3 rounded-full circle-border border-ink-3 bg-bg" />
          {text.key.council}
        </li>
        <li className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="relative grid size-3 place-items-center rounded-full circle-border border-ink-3 bg-bg"
          >
            <span className="size-1 rounded-full bg-ink-3" />
          </span>
          {text.key.ecumenical}
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1 w-7 rounded-2 bg-rule-2" />
          {text.key.lasts}
        </li>
      </ul>
      <SidePanel
        open={panelOpen}
        label={text.panel.label}
        title={text.panel.title}
        closeLabel={text.panel.close}
        onClose={closePanel}
      >
        <div aria-live="polite">
          {panelEntry ? (
            <div className="font-ui">
              <p className="m-0 mb-1 text-ui-xs text-ink-3">{panelEntry.kind}</p>
              <h3
                ref={heading}
                tabIndex={-1}
                className="m-0 w-fit font-head text-title-sm font-normal text-ink opsz-30 focus-visible:rounded-3 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
              >
                {panelEntry.name}
              </h3>
              <dl className="m-0 mt-3 flex flex-wrap gap-x-10 gap-y-2.5 p-0">
                {panelEntry.facts.map((fact) => (
                  <div key={fact.label} className="min-w-0">
                    <dt className="mb-0.75 text-ui-xs text-ink-3">{fact.label}</dt>
                    <dd className="m-0 font-body text-entity text-ink tabular-nums">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="m-0 mt-3 font-body text-passage-body font-light text-ink-2">{panelEntry.text}</p>
              {panelEntry.writings.length > 0 ? (
                <div className="mt-3.5">
                  <p className="m-0 mb-1 text-ui-xs text-ink-3">{text.panel.writings}</p>
                  <ul className="m-0 list-none p-0">
                    {panelEntry.writings.map((writing) => (
                      <li key={writing.title} className="border-t border-rule py-2 last:border-b">
                        <p className="m-0 text-source-name font-medium text-ink">{writing.title}</p>
                        <p className="m-0 text-ui-xs text-ink-3 tabular-nums">{writing.date}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {panelEntry.note ? (
                <div className="mt-3.5">
                  <p className="m-0 mb-0.75 text-ui-xs text-ink-3">{panelEntry.note.heading}</p>
                  <p className="m-0 text-meta leading-1.55 text-ink-2">{panelEntry.note.text}</p>
                </div>
              ) : null}
              <p className="m-0 mt-3 text-ui-sm">
                {/* TODO: only the Fathers' pages exist; councils and movements link to their pages once they exist */}
                {panelEntry.href ? (
                  <PageLink href={panelEntry.href}>{panelEntry.linkLabel}</PageLink>
                ) : (
                  <PageLink>{panelEntry.linkLabel}</PageLink>
                )}
              </p>
            </div>
          ) : null}
        </div>
      </SidePanel>
    </div>
  );
}
