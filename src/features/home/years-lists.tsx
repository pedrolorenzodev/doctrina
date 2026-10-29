import Link from "next/link";
import type { RefObject } from "react";
import { MoreButton } from "@/components/ui/more-button";

export type YearsRow = { key: string; name: string; date: string; detail: string; href: string };
export type YearsGroupKey = "fathers" | "councils" | "divisions";

type YearsListsText = {
  groups: Record<YearsGroupKey, string>;
  noFathers: string;
  more: string;
  less: string;
};

type YearsListsProps = {
  groups: Record<YearsGroupKey, YearsRow[]>;
  expanded: Set<YearsGroupKey>;
  text: YearsListsText;
  box: RefObject<HTMLDivElement | null>;
  ghosts: RefObject<HTMLDivElement | null>;
  hot: string | null;
  onToggle: (group: YearsGroupKey) => void;
  onHot: (key: string | null) => void;
};

const shownRows = 8;

function Group({
  id,
  rows,
  open,
  hot,
  text,
  onToggle,
  onHot,
}: {
  id: YearsGroupKey;
  rows: YearsRow[];
  open: boolean;
  hot: string | null;
  text: YearsListsText;
  onToggle: (group: YearsGroupKey) => void;
  onHot: (key: string | null) => void;
}) {
  const shown = open ? rows : rows.slice(0, shownRows);
  return (
    <div data-k={`g-${id}`}>
      <h3 className="mt-0 mb-2.5 text-ui-xs leading-group font-medium text-ink-3">{text.groups[id]}</h3>
      <ul className="m-0 list-none p-0">
        {shown.map((row) => (
          <li key={row.key} data-k={row.key} className="border-t border-rule last:border-b">
            <Link
              href={row.href}
              data-hot={hot === row.key || undefined}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") onHot(row.key);
              }}
              onPointerLeave={() => onHot(null)}
              onFocus={() => onHot(row.key)}
              onBlur={() => onHot(null)}
              className="entry-row px-1 py-3 no-underline transition-colors duration-150 ease-standard hover:bg-hover data-hot:bg-hover"
            >
              <span className="min-w-0 font-body text-years-name font-medium text-ink">{row.name}</span>
              <span className="col-start-2 row-start-1 text-years-date font-medium text-ink tabular-nums">
                {row.date}
              </span>
              <span className="col-start-1 text-search-line text-ink-3">{row.detail}</span>
            </Link>
          </li>
        ))}
      </ul>
      {rows.length > shownRows ? (
        <div className="mt-2">
          <MoreButton expanded={open} onClick={() => onToggle(id)}>
            {open ? text.less : text.more.replace("{n}", String(rows.length - shownRows))}
          </MoreButton>
        </div>
      ) : null}
    </div>
  );
}

export function YearsLists({ groups, expanded, text, box, ghosts, hot, onToggle, onHot }: YearsListsProps) {
  const { fathers, councils, divisions } = groups;
  return (
    <div className="relative mt-7.5">
      <div ref={box} className="years-lists">
        <div data-k="col-a">
          {fathers.length ? (
            <Group
              id="fathers"
              rows={fathers}
              open={expanded.has("fathers")}
              hot={hot}
              text={text}
              onToggle={onToggle}
              onHot={onHot}
            />
          ) : (
            <p data-k="none-f" className="m-0 text-sub text-ink-3">
              {text.noFathers}
            </p>
          )}
        </div>
        <div data-k="col-b">
          {councils.length ? (
            <Group
              id="councils"
              rows={councils}
              open={expanded.has("councils")}
              hot={hot}
              text={text}
              onToggle={onToggle}
              onHot={onHot}
            />
          ) : null}
          {councils.length && divisions.length ? <div className="h-7" /> : null}
          {divisions.length ? (
            <Group
              id="divisions"
              rows={divisions}
              open={expanded.has("divisions")}
              hot={hot}
              text={text}
              onToggle={onToggle}
              onHot={onHot}
            />
          ) : null}
        </div>
      </div>
      <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0" />
    </div>
  );
}
