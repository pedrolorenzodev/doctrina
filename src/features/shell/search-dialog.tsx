"use client";

import { useRouter } from "next/navigation";
import { Fragment, useEffect, useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";
import { rememberResult, useRecentIds } from "@/features/shell/search-recents";
import { useSearch } from "@/features/shell/search-provider";
import { trapTab } from "@/lib/focus";
import { enterList, flipList } from "@/lib/list-motion";
import {
  plainResult,
  searchEntries,
  type Fragment as TextFragment,
  type SearchEntry,
  type SearchResult,
  type Segment,
} from "@/lib/search-match";

export type SearchText = {
  label: string;
  placeholder: string;
  recents: string;
  empty: string;
  none: string;
  countOne: string;
  countMany: string;
  escape: string;
  hints: { move: string; open: string; close: string };
};

type SearchDialogProps = {
  entries: SearchEntry[];
  text: SearchText;
};

const cut = "…";

function Marked({ segments }: { segments: Segment[] }) {
  return segments.map((segment, index) =>
    segment.marked ? (
      <mark key={index} className="rounded-2 bg-mark px-px text-inherit">
        {segment.text}
      </mark>
    ) : (
      <Fragment key={index}>{segment.text}</Fragment>
    ),
  );
}

function Line({ fragment, quote }: { fragment: TextFragment; quote: boolean }) {
  return (
    <span
      className={`mt-0.75 block ${quote ? "font-head text-search-quote font-light text-ink-2 italic" : "text-search-line text-ink-2"}`}
    >
      {quote ? "«" : null}
      {fragment.cutStart ? cut : null}
      <Marked segments={fragment.segments} />
      {fragment.cutEnd ? cut : null}
      {quote ? "»" : null}
    </span>
  );
}

type RowProps = {
  id: string;
  result: SearchResult;
  selected: boolean;
  onPointer: () => void;
  onPick: () => void;
};

function ResultRow({ id, result, selected, onPointer, onPick }: RowProps) {
  const { entry, line } = result;
  return (
    <li
      id={id}
      role="option"
      aria-selected={selected}
      data-id={entry.id}
      data-selected={selected ? "" : undefined}
      onPointerMove={onPointer}
      onClick={onPick}
      className="cursor-pointer rounded-7 px-3 py-2.5 transition-colors duration-120 ease-standard data-selected:bg-hover"
    >
      <span className="block font-head text-search-title text-ink">
        <Marked segments={result.title} />
      </span>
      <span className="mt-0.5 flex items-center justify-between gap-4 text-label leading-normal text-ink-3">
        <span className="min-w-0 truncate">
          <Marked segments={result.path} />
        </span>
        {result.date ? (
          <span className="inline-flex flex-none items-center gap-2.25 tabular-nums">
            <i aria-hidden="true" className="block h-3 w-px bg-rule-2" />
            <Marked segments={result.date} />
          </span>
        ) : null}
      </span>
      <Line fragment={line} quote={entry.quote} />
    </li>
  );
}

function SearchPanel({ entries, text }: SearchDialogProps) {
  const { hide } = useSearch();
  const router = useRouter();
  const recentIds = useRecentIds();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const list = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  const typed = query.trim() !== "";
  const results = useMemo<SearchResult[]>(() => {
    if (typed) return searchEntries(entries, query);
    return recentIds.flatMap((id) => {
      const entry = entries.find((candidate) => candidate.id === id);
      return entry ? [plainResult(entry)] : [];
    });
  }, [typed, entries, query, recentIds]);
  const active = Math.min(selected, Math.max(results.length - 1, 0));

  useEffect(() => {
    input.current?.focus({ preventScroll: true });
    if (list.current) enterList(list.current, 0);
  }, []);

  useEffect(() => {
    list.current?.querySelector("[data-selected]")?.scrollIntoView({ block: "nearest" });
  }, [active, query]);

  function change(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const apply = () => {
      setQuery(value);
      setSelected(0);
    };
    if (list.current && ghosts.current) flipList(list.current, ghosts.current, () => flushSync(apply));
    else apply();
  }

  function pick(result: SearchResult | undefined) {
    if (!result) return;
    rememberResult(result.entry.id);
    hide(false);
    router.push(result.entry.href);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (panel.current) trapTab(event.nativeEvent, panel.current);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setSelected(Math.max(0, Math.min(results.length - 1, active + (event.key === "ArrowDown" ? 1 : -1))));
    } else if (event.key === "Enter") {
      event.preventDefault();
      pick(results[active]);
    }
  }

  const count = results.length === 1 ? text.countOne : text.countMany.replace("{n}", String(results.length));
  return (
    <div ref={panel} onKeyDown={onKeyDown} className="flex min-h-0 flex-1 flex-col">
      <label className="flex items-center gap-2.5 border-b border-rule px-3.5 text-ink-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span className="sr-only">{text.label}</span>
        <input
          ref={input}
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="search-results"
          aria-activedescendant={results.length > 0 ? `search-result-${active}` : undefined}
          aria-autocomplete="list"
          autoComplete="off"
          spellCheck={false}
          data-bare-focus
          value={query}
          onChange={change}
          placeholder={text.placeholder}
          className="h-13 min-w-0 flex-1 border-0 bg-transparent text-base text-ink outline-none placeholder:text-ink-3"
        />
        <kbd className="rounded-4 border border-rule px-1.5 py-px font-ui text-micro-lg text-ink-3 max-sm:hidden">
          {text.escape}
        </kbd>
      </label>
      <div className="relative flex min-h-0 flex-1 flex-col">
        <ul
          ref={list}
          id="search-results"
          role="listbox"
          aria-label={text.label}
          data-lenis-prevent
          className="m-0 min-h-0 flex-1 list-none overflow-y-auto overscroll-contain p-1.5 scrollbar-rule"
        >
          {!typed && results.length > 0 ? (
            <li data-id="heading" role="presentation" className="px-3 pt-2 pb-1 text-label font-medium text-ink-3">
              {text.recents}
            </li>
          ) : null}
          {results.map((result, index) => (
            <ResultRow
              key={result.entry.id}
              id={`search-result-${index}`}
              result={result}
              selected={index === active}
              onPointer={() => setSelected(index)}
              onPick={() => pick(result)}
            />
          ))}
          {typed && results.length === 0 ? (
            <li data-id="none" role="presentation" className="px-3 py-3.5 text-ui-sm text-ink-3">
              {text.none.replace("{query}", query.trim())}
            </li>
          ) : null}
          {!typed && results.length === 0 ? (
            <li data-id="empty" role="presentation" className="px-3 py-3.5 text-ui-sm text-ink-3">
              {text.empty}
            </li>
          ) : null}
        </ul>
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
      <p role="status" className="sr-only">
        {typed ? count : ""}
      </p>
      <div className="flex flex-wrap gap-4 border-t border-rule px-3.5 py-2.25 text-ui-2xs leading-normal text-ink-3 pointer-coarse:hidden">
        <span>{text.hints.move}</span>
        <span>{text.hints.open}</span>
        <span>{text.hints.close}</span>
      </div>
    </div>
  );
}

export function SearchDialog({ entries, text }: SearchDialogProps) {
  const { open, session, hide } = useSearch();
  return (
    <div
      data-open={open || undefined}
      data-lenis-prevent
      onClick={(event) => {
        if (event.target === event.currentTarget) hide();
      }}
      className="pointer-events-none invisible fixed inset-0 z-90 flex items-start justify-center search-layout bg-scrim opacity-0 overlay-motion data-open:pointer-events-auto data-open:visible data-open:opacity-100"
    >
      <div
        role={open ? "dialog" : undefined}
        aria-modal={open ? "true" : undefined}
        aria-label={open ? text.label : undefined}
        data-search-dialog
        data-open={open || undefined}
        className="texture-layer relative flex w-full max-w-155 search-max-height translate-y-1.5 flex-col overflow-hidden rounded-10 border border-rule-2 bg-panel text-ink shadow-search transition-transform duration-200 ease-standard data-open:translate-y-0"
      >
        {session > 0 ? <SearchPanel key={session} entries={entries} text={text} /> : null}
      </div>
    </div>
  );
}
