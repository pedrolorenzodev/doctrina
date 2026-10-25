"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { CitationLink } from "@/components/citation-window/citation-link";
import { WitnessTrack, type TrackWitness, type YearRange } from "@/features/doctrine/witness-track";
import { flipList } from "@/lib/list-motion";
import { layoutTop, scrollOffset, scrollToY } from "@/lib/scroll";
import { showItemEvent } from "@/lib/show-item";

export type ExplorerWitness = TrackWitness & {
  viewId: string;
  quote: string;
  reference: string;
};

type ExplorerText = {
  ruler: string;
  statusAll: string;
  statusFiltered: string;
  reset: string;
  empty: string;
  handleStart: string;
  handleEnd: string;
};

type WitnessExplorerProps = {
  witnesses: ExplorerWitness[];
  text: ExplorerText;
};

const readingMargin = 8;
const readingSlack = 40;
const jumpGap = 6;
const inRange = (witness: TrackWitness, range: YearRange | null) =>
  !range || (witness.end >= range[0] && witness.start <= range[1]);

export function WitnessExplorer({ witnesses, text }: WitnessExplorerProps) {
  const [range, setRange] = useState<YearRange | null>(null);
  const [hot, setHot] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [stuck, setStuck] = useState(false);
  const [shownIds, setShownIds] = useState(() => witnesses.map((witness) => witness.id));
  const shownRef = useRef(shownIds);
  const wrap = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLOListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  const shown = witnesses.filter((witness) => shownIds.includes(witness.id));

  function applyRange(next: YearRange | null) {
    setRange(next);
    const ids = witnesses.filter((witness) => inRange(witness, next)).map((witness) => witness.id);
    if (ids.length === shownRef.current.length && ids.every((id, index) => id === shownRef.current[index])) return;
    shownRef.current = ids;
    const apply = () => setShownIds(ids);
    if (list.current && ghosts.current) flipList(list.current, ghosts.current, () => flushSync(apply));
    else apply();
  }

  function jumpTo(id: string) {
    const item = document.getElementById(`w-${id}`);
    const bar = wrap.current;
    if (!item || !bar) return;
    const top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--spacing-top")) || 0;
    scrollToY(layoutTop(item) - bar.offsetHeight - top - jumpGap);
  }

  const jump = useRef(jumpTo);
  const apply = useRef(applyRange);
  useEffect(() => {
    jump.current = jumpTo;
    apply.current = applyRange;
  });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const section = root.current?.closest("section");
      const bar = wrap.current;
      const items = list.current ? [...list.current.querySelectorAll<HTMLElement>("li[data-id]")] : [];
      if (!section || !bar) return;
      const area = section.getBoundingClientRect();
      const barRect = bar.getBoundingClientRect();
      const topBar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--spacing-top")) || 0;
      const inside = area.top < innerHeight * 0.5 && area.bottom > bar.offsetHeight + scrollOffset() + readingSlack;
      setStuck(barRect.top <= topBar + 1 && inside);
      const line = barRect.bottom + readingMargin;
      let current = inside ? items[0] : undefined;
      if (inside) {
        for (const item of items) {
          if (item.getBoundingClientRect().top <= line + readingSlack) current = item;
          else break;
        }
      }
      setActive(current?.dataset.id ?? null);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [shownIds]);

  useEffect(() => {
    const onShow = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (!detail.startsWith("w-")) return;
      const id = detail.slice(2);
      if (!witnesses.some((witness) => witness.id === id)) return;
      if (!shownRef.current.includes(id)) {
        apply.current(null);
        requestAnimationFrame(() => requestAnimationFrame(() => jump.current(id)));
      } else jump.current(id);
    };
    window.addEventListener(showItemEvent, onShow);
    return () => window.removeEventListener(showItemEvent, onShow);
  }, [witnesses]);

  const status = range
    ? text.statusFiltered
        .replace("{shown}", String(shown.length))
        .replace("{n}", String(witnesses.length))
        .replace("{from}", String(range[0]))
        .replace("{to}", String(range[1]))
    : text.statusAll.replace("{n}", String(witnesses.length));

  return (
    <div ref={root}>
      <div
        ref={wrap}
        data-lr-wrap
        data-stuck={stuck ? "" : undefined}
        className="texture-layer sticky top-top z-5 -mx-3 overflow-x-clip border-b border-transparent bg-bg px-3 pb-2.5 transition-colors duration-150 ease-standard data-stuck:border-rule"
      >
        <WitnessTrack
          witnesses={witnesses}
          range={range}
          hot={hot}
          active={active}
          label={text.ruler}
          handleStartLabel={text.handleStart}
          handleEndLabel={text.handleEnd}
          onHot={setHot}
          onRange={applyRange}
          onPick={jumpTo}
        />
        <p
          role="status"
          aria-live="polite"
          className="m-0 flex min-h-5 flex-wrap gap-x-3.5 gap-y-1.5 text-ui-xs text-ink-3 tabular-nums"
        >
          {status}
          {range ? (
            <button
              type="button"
              onClick={() => applyRange(null)}
              className="cursor-pointer border-0 bg-transparent p-0 text-ui-xs font-medium text-ink underline underline-offset-3"
            >
              {text.reset}
            </button>
          ) : null}
        </p>
      </div>
      <div className="relative">
        <ol ref={list} className="m-0 mt-1.5 list-none p-0">
          {shown.length > 0 ? (
            shown.map((witness) => (
              <li
                key={witness.id}
                id={`w-${witness.id}`}
                data-id={witness.id}
                data-hot={witness.id === hot ? "" : undefined}
                onPointerEnter={() => setHot(witness.id)}
                onPointerLeave={() => setHot(null)}
                className="witness-row -mx-2 rounded-6 border-t border-rule px-2 py-5.5 transition-colors duration-150 ease-standard data-hot:bg-accent-weak"
              >
                <div className="pt-1 text-btn text-ink-3 tabular-nums">{witness.dateLabel}</div>
                <div>
                  <p className="m-0 font-head text-quote font-light text-ink italic guillemets opsz-24">
                    {witness.quote}
                  </p>
                  <p className="mt-2.5 text-witness-by text-ink-3">
                    <span className="font-medium text-ink">{witness.author}</span>
                    <br />
                    <CitationLink id={witness.viewId}>{witness.reference}</CitationLink>
                  </p>
                </div>
              </li>
            ))
          ) : (
            <li data-id="empty" className="border-t border-rule py-5 text-ui-sm text-ink-3">
              {text.empty}
            </li>
          )}
        </ol>
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
    </div>
  );
}
