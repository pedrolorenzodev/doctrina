"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Chevron } from "@/components/ui/chevron";
import { IconButton } from "@/components/ui/icon-button";
import { GroupHeading } from "@/components/group-heading";
import { SegmentedFilter } from "@/components/ui/segmented-filter";
import { YearsRuler, type YearWindow } from "@/components/years-ruler";
import type { SourceEntry } from "@/content/get-sources";
import { sourceKinds } from "@/content/source-kinds";
import type { UiText } from "@/content/ui-text/types";
import { SourceItem } from "@/features/sources/source-item";
import { flipList, revealList } from "@/lib/list-motion";
import { fold } from "@/lib/search-match";
import type { YearsData } from "@/lib/years-data";

type SourcesCatalogueProps = { sources: SourceEntry[]; text: UiText["sourcesPage"] };
const periods = {
  early: { a: 50, b: 800 },
  medieval: { a: 800, b: 1500 },
  reformation: { a: 1500, b: 1700 },
  modern: { a: 1700, b: 2026 },
  all: { a: 1, b: 2026 },
};
const listDelayMs = 140;

export function SourcesCatalogue({ sources, text }: SourcesCatalogueProps) {
  const [kind, setKind] = useState("all");
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("date");
  const [range, setRange] = useState<YearWindow>(periods.early);
  const [listed, setListed] = useState<YearWindow>(periods.early);
  const [undated, setUndated] = useState(false);
  const [hot, setHot] = useState<{ id: string; tip: boolean } | null>(null);
  const search = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => (list.current ? revealList(list.current) : undefined), []);
  useEffect(() => () => clearTimeout(timer.current), []);
  const words = fold(query).split(/\s+/).filter(Boolean);
  const matching = sources.filter(
    (source) =>
      (kind === "all" || source.kind === kind) &&
      words.every((word) => fold(`${source.title} ${source.author}`).includes(word)),
  );
  const shown = matching
    .filter((source) =>
      source.start === null ? undated : source.start <= listed.b && (source.end ?? source.start) >= listed.a,
    )
    .sort((a, b) =>
      order === "work"
        ? a.title.localeCompare(b.title)
        : order === "author"
          ? a.author.localeCompare(b.author) || a.title.localeCompare(b.title)
          : (a.start ?? Infinity) - (b.start ?? Infinity) || a.title.localeCompare(b.title),
    );
  const data: YearsData = {
    fathers: sources.flatMap((source) =>
      source.start === null
        ? []
        : [
            {
              id: source.id,
              name: source.title,
              date: source.date,
              start: source.start,
              end: source.end ?? source.start,
              detail: "",
              href: "",
            },
          ],
    ),
    councils: [],
    divisions: [],
  };

  function change(mutate: () => void) {
    if (list.current && ghosts.current) flipList(list.current, ghosts.current, () => flushSync(mutate));
    else mutate();
  }
  function move(next: YearWindow) {
    setRange(next);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => change(() => setListed(next)), listDelayMs);
  }
  function settle(next: YearWindow) {
    clearTimeout(timer.current);
    change(() => {
      setRange(next);
      setListed(next);
    });
  }
  const count = text.count.replace("{shown}", String(shown.length)).replace("{total}", String(sources.length));
  return (
    <div className="mt-7.5 max-w-wide rail:max-w-none" data-sources="">
      <div data-lenis-prevent className="no-scrollbar overflow-x-auto overscroll-contain pb-1">
        <div className="w-max min-w-full">
          <SegmentedFilter
            label={text.filter}
            options={[
              {
                id: "all",
                label: text.all,
                content: <span className="whitespace-nowrap">{text.all}</span>,
                count: sources.length,
              },
              ...sourceKinds.map((id) => ({
                id,
                label: text.kinds[id],
                content: <span className="whitespace-nowrap">{text.kinds[id]}</span>,
                count: sources.filter((source) => source.kind === id).length,
              })),
            ]}
            value={kind}
            onChange={(next) => change(() => setKind(next))}
            flush
          />
        </div>
      </div>
      <YearsRuler
        compact
        visible={matching.map((source) => source.id)}
        data={data}
        range={range}
        hot={hot ? `f-${hot.id}` : null}
        tip={hot?.tip ?? false}
        text={{
          window: text.window,
          windowValue: text.windowValue,
          rows: { fathers: "", councils: "", divisions: "" },
        }}
        onMove={move}
        onSettle={settle}
        onHot={(id) => setHot(id ? { id: id.slice(2), tip: true } : null)}
      />
      <div role="group" aria-label={text.window} className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
        {Object.entries(periods).map(([id, period]) => (
          <button
            key={id}
            type="button"
            aria-pressed={range.a === period.a && range.b === period.b}
            onClick={() => {
              clearTimeout(timer.current);
              change(() => {
                setRange(period);
                setListed(period);
                setUndated(id === "all");
              });
            }}
            className="min-h-8.5 cursor-pointer rounded-6 border-0 bg-transparent px-2.5 py-1.5 text-btn text-ink-2 transition-colors duration-150 ease-standard hover:bg-hover hover:text-ink aria-pressed:font-medium aria-pressed:text-ink pointer-coarse:min-h-11"
          >
            {text.periods[id as keyof typeof text.periods]}
          </button>
        ))}
      </div>
      <div className="rail-section mt-7.5">
        <div className="rail-head">
          <div className="grid grid-cols-3 gap-3 rail:grid-cols-1 rail:gap-0 rail-s:grid-cols-1 rail-s:gap-0">
            <label className="relative col-span-2 mb-4 block rail:col-span-1 rail-s:col-span-1">
              <span className="sr-only">{text.search}</span>
              <input
                ref={search}
                type="search"
                value={query}
                onChange={(event) => change(() => setQuery(event.target.value))}
                placeholder={text.search}
                autoComplete="off"
                spellCheck={false}
                className={`h-10 w-full rounded-6 border border-rule-2 bg-transparent px-3 ${query ? "pr-12" : ""} text-ui-sm text-ink transition-colors duration-150 ease-standard placeholder:text-ink-3 hover:bg-hover [&::-webkit-search-cancel-button]:appearance-none pointer-coarse:h-11`}
              />
              {query ? (
                <span className="absolute top-0 right-0.5 grid h-full place-items-center">
                  <IconButton
                    aria-label={text.clearSearch}
                    onClick={() => {
                      change(() => setQuery(""));
                      search.current?.focus();
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="m3 3 8 8M11 3l-8 8" />
                    </svg>
                  </IconButton>
                </span>
              ) : null}
            </label>
            <label className="relative mb-4 flex items-center gap-3 text-label text-ink-3">
              <span className="sr-only">{text.sort}</span>
              <select
                value={order}
                onChange={(event) => change(() => setOrder(event.target.value))}
                className="min-h-10 w-full min-w-0 flex-1 cursor-pointer rounded-6 border border-rule-2 appearance-none bg-bg px-3 pr-9 text-ui-sm text-ink pointer-coarse:min-h-11"
              >
                <option value="date">{text.date}</option>
                <option value="work">{text.work}</option>
                <option value="author">{text.authorOrder}</option>
              </select>
              <Chevron className="pointer-events-none absolute right-3 rotate-90" />
            </label>
          </div>
          <label className="mb-4 flex min-h-11 cursor-pointer items-center gap-2 text-label text-ink-3">
            <input
              type="checkbox"
              checked={undated}
              onChange={(event) => change(() => setUndated(event.target.checked))}
              className="size-4 shrink-0 accent-accent"
            />
            {text.includeUndated}
          </label>
        </div>
        <div className="min-w-0 rail:col-start-2">
          <div aria-live="polite" data-source-count="">
            <GroupHeading as="h2">{count}</GroupHeading>
          </div>
          <div className="relative mt-3">
            <ul ref={list} className="m-0 list-none p-0 rail:columns-2 rail:gap-x-14" aria-label={text.title}>
              {shown.map((source) => (
                <SourceItem
                  key={source.id}
                  source={source}
                  text={text}
                  hot={hot?.id === source.id}
                  onHot={(id) => setHot(id ? { id, tip: false } : null)}
                />
              ))}
            </ul>
            <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
            {shown.length === 0 ? <p className="m-0 py-4 text-ui-sm text-ink-3">{text.empty}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
