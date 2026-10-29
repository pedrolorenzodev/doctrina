"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { GroupHeading } from "@/components/group-heading";
import { PageLink } from "@/components/ui/page-link";
import type { HistoryIndexGroup } from "@/content/get-history-indexes";
import { flipList, revealList } from "@/lib/list-motion";
import { scrollToElement } from "@/lib/scroll";
import { fold } from "@/lib/search-match";

type HistoryIndexListProps = {
  groups: HistoryIndexGroup[];
  filter: { label: string; none: string } | null;
  letters?: { label: string; all: string[] };
  columns?: boolean;
};

export function HistoryIndexList({ groups, filter, letters, columns = false }: HistoryIndexListProps) {
  const [query, setQuery] = useState("");
  const list = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  useEffect(() => (list.current ? revealList(list.current) : undefined), []);
  const words = fold(query)
    .split(/\s+/)
    .filter((word) => word !== "");
  const shown = groups
    .map((group) => ({
      ...group,
      rows: group.rows.filter((row) => words.every((word) => fold(`${row.name} ${row.detail}`).includes(word))),
    }))
    .filter((group) => group.rows.length > 0);
  function search(next: string) {
    if (list.current && ghosts.current) flipList(list.current, ghosts.current, () => flushSync(() => setQuery(next)));
    else setQuery(next);
  }

  return (
    <div className="mt-14">
      {filter ? (
        <label className="mb-7.5 block max-w-col">
          <span className="sr-only">{filter.label}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => search(event.target.value)}
            placeholder={filter.label}
            autoComplete="off"
            spellCheck={false}
            className="h-10 w-full rounded-6 border border-rule-2 bg-transparent px-3 text-ui-sm text-ink transition-colors duration-150 ease-standard placeholder:text-ink-3 hover:bg-hover pointer-coarse:h-11"
          />
        </label>
      ) : null}
      {letters ? (
        <nav aria-label={letters.label} className="-ml-2 mb-7.5 flex max-w-wide flex-wrap gap-0.5">
          {letters.all.map((letter) => {
            const present = shown.some((group) => group.title === letter);
            return (
              <button
                key={letter}
                type="button"
                disabled={!present}
                onClick={() => {
                  const target = document.getElementById(`letter-${letter}`);
                  if (target) scrollToElement(target);
                }}
                className="inline-grid size-8 cursor-pointer place-items-center rounded-6 text-ui-sm font-medium text-ink transition-colors duration-150 ease-standard hover:bg-hover disabled:cursor-default disabled:font-normal disabled:text-ink-3 disabled:opacity-60 disabled:hover:bg-transparent pointer-coarse:size-11"
              >
                {letter}
              </button>
            );
          })}
        </nav>
      ) : null}
      <div className="max-w-wide">
        <div className="relative">
          <ul ref={list} className={`m-0 list-none p-0 ${columns ? "lg:columns-2 lg:gap-x-10" : ""}`}>
            {shown.flatMap((group) => [
              <li
                key={`group-${group.title}`}
                id={letters ? `letter-${group.title}` : undefined}
                data-id={`group-${group.title}`}
                className="mt-7.5 break-inside-avoid-column break-after-avoid-column first:mt-0"
              >
                <GroupHeading>{group.title}</GroupHeading>
              </li>,
              ...group.rows.map((row, index) => (
                <li
                  key={row.id}
                  data-id={row.id}
                  className={`break-inside-avoid-column border-t border-rule py-3.5 ${index === group.rows.length - 1 ? "border-b" : ""}`}
                >
                  <div className="flex items-baseline justify-between gap-6">
                    <p className="m-0 text-source-name font-medium">
                      <PageLink {...(row.href ? { href: row.href } : {})}>{row.name}</PageLink>
                    </p>
                    <p className="date-mark m-0 flex-none pt-px text-ui-base font-medium text-ink tabular-nums">
                      {row.date}
                    </p>
                  </div>
                  <p className="m-0 mt-0.5 text-ui-sm text-ink-3">{row.detail}</p>
                </li>
              )),
            ])}
          </ul>
          <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
        </div>
        {filter && shown.length === 0 ? (
          <p className="m-0 text-ui-sm text-ink-3">{filter.none.replace("{query}", query.trim())}</p>
        ) : null}
      </div>
    </div>
  );
}
