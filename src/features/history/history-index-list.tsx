"use client";

import { Fragment, useState } from "react";
import { GroupHeading } from "@/components/group-heading";
import { PageLink } from "@/components/ui/page-link";
import type { HistoryIndexGroup } from "@/content/get-history-indexes";
import { fold } from "@/lib/search-match";

type HistoryIndexListProps = {
  groups: HistoryIndexGroup[];
  filter: { label: string; none: string } | null;
};

export function HistoryIndexList({ groups, filter }: HistoryIndexListProps) {
  const [query, setQuery] = useState("");
  const words = fold(query)
    .split(/\s+/)
    .filter((word) => word !== "");
  const shown = groups
    .map((group) => ({
      ...group,
      rows: group.rows.filter((row) => words.every((word) => fold(`${row.name} ${row.detail}`).includes(word))),
    }))
    .filter((group) => group.rows.length > 0);
  return (
    <div className="mt-14">
      {filter ? (
        <label className="mb-7.5 block max-w-col">
          <span className="sr-only">{filter.label}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={filter.label}
            autoComplete="off"
            spellCheck={false}
            className="h-10 w-full rounded-6 border border-rule-2 bg-transparent px-3 text-ui-sm text-ink transition-colors duration-150 ease-standard placeholder:text-ink-3 hover:bg-hover focus-visible:bg-hover pointer-coarse:h-11"
          />
        </label>
      ) : null}
      <div className="max-w-wide">
        {shown.map((group) => (
          <Fragment key={group.title}>
            <GroupHeading>{group.title}</GroupHeading>
            <ul className="m-0 list-none border-b border-rule p-0">
              {group.rows.map((row) => (
                <li key={row.id} className="border-t border-rule py-3.5">
                  <div className="flex items-baseline justify-between gap-6">
                    <p className="m-0 text-source-name font-medium">
                      <PageLink {...(row.href ? { href: row.href } : {})}>{row.name}</PageLink>
                    </p>
                    <p className="m-0 flex-none pt-px text-ui-base font-medium text-ink tabular-nums">{row.date}</p>
                  </div>
                  <p className="m-0 mt-0.5 text-ui-sm text-ink-3">{row.detail}</p>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
        {filter && shown.length === 0 ? (
          <p className="m-0 text-ui-sm text-ink-3">{filter.none.replace("{query}", query.trim())}</p>
        ) : null}
      </div>
    </div>
  );
}
