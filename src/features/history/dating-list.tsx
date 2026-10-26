"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import { CitationLink } from "@/components/citation-window/citation-link";
import { MoreButton } from "@/components/ui/more-button";
import { scholarViewId } from "@/content/father-dating-views";
import type { DatingRow } from "@/content/model/history";
import { flipList, revealList } from "@/lib/list-motion";
import { scrollOffset, scrollToElement } from "@/lib/scroll";
import { finalStop, openParenthesis, closeParenthesis } from "@/lib/punctuation";

type Axis = { from: number; to: number; marks: number[] };

type DatingListProps = {
  id: string;
  label: string;
  rows: DatingRow[];
  scholars: Record<string, string>;
  axis: Axis;
  moreLabel: string;
  lessLabel: string;
};

const vars = (values: Record<string, string>): CSSProperties => values as CSSProperties;

function Track({ row, axis }: { row: DatingRow; axis: Axis }) {
  const place = (year: number) =>
    ((Math.max(axis.from, Math.min(axis.to, year)) - axis.from) / (axis.to - axis.from)) * 100;
  const left = place(row.start);
  const width = row.end === null ? 0 : place(row.end) - left;
  const tone = row.highlighted ? "bg-accent" : "bg-ink-3";
  return (
    <div aria-hidden="true" className={`relative ${row.reign ? "h-8" : "h-5"}`}>
      <span className="absolute inset-x-0 top-2.5 h-px bg-rule" />
      {row.end === null ? (
        <span
          style={vars({ "--x": `${left}%` })}
          className={`absolute top-1.5 left-(--x) -ml-1.25 size-2.25 rounded-full ${tone}`}
        />
      ) : row.reign ? (
        <>
          <span
            style={vars({ "--x": `${left}%`, "--w": `${width}%` })}
            className="absolute top-1.75 left-(--x) h-1.75 w-(--w) rounded-2 border border-ink-3 opacity-80"
          />
          <span
            style={vars({ "--x": `${left}%` })}
            className="absolute top-4.25 left-(--x) text-axis leading-tight whitespace-nowrap text-ink-3"
          >
            {row.reign}
          </span>
        </>
      ) : (
        <span
          style={vars({ "--x": `${left}%`, "--w": `${width}%` })}
          className={`absolute top-1.75 left-(--x) h-1.75 w-(--w) rounded-2 ${tone}`}
        />
      )}
      {row.maybeEnd !== null && row.end !== null ? (
        <span
          style={vars({ "--x": `${place(row.end)}%`, "--w": `${place(row.maybeEnd) - place(row.end)}%` })}
          className="absolute top-2.5 left-(--x) -mt-px h-0 w-(--w) border-t-2 border-dashed border-ink-3"
        />
      ) : null}
    </div>
  );
}

export function DatingList({ id, label, rows, scholars, axis, moreLabel, lessLabel }: DatingListProps) {
  const [expanded, setExpanded] = useState(false);
  const list = useRef<HTMLUListElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);
  const firstHidden = rows.find((row) => !row.main)?.id;
  const hiddenCount = rows.filter((row) => !row.main).length;

  useEffect(() => (list.current ? revealList(list.current) : undefined), []);

  function toggle() {
    const next = !expanded;
    if (!list.current || !ghosts.current) {
      setExpanded(next);
      return;
    }
    flipList(list.current, ghosts.current, () => flushSync(() => setExpanded(next)));
    if (!next && list.current.getBoundingClientRect().top < scrollOffset()) scrollToElement(list.current);
  }

  return (
    <>
      <div className="relative mt-1.5">
        <ul ref={list} id={id} aria-label={label} className="m-0 list-none p-0 font-ui">
          {rows.map((row) => (
            <li
              key={row.id}
              data-id={row.id}
              hidden={!row.main && !expanded}
              className={`dating-row border-t py-2.75 ${expanded && row.id === firstHidden ? "border-dashed border-rule-2" : "border-rule"}`}
            >
              <p className="m-0 text-sub text-ink-3">
                <b className={`block font-medium ${row.highlighted ? "text-accent" : "text-ink"}`}>{row.date}</b>
                {row.lead}
                {row.scholar ? (
                  <>
                    <CitationLink id={scholarViewId(row.scholar)} kind="source">
                      {scholars[row.scholar] ?? row.scholar}
                    </CitationLink>
                    {` ${openParenthesis}${row.year}${closeParenthesis}`}
                  </>
                ) : null}
                {finalStop}
              </p>
              <Track row={row} axis={axis} />
            </li>
          ))}
        </ul>
        <div ref={ghosts} aria-hidden="true" className="pointer-events-none absolute inset-0 flip-ghosts" />
      </div>
      <div aria-hidden="true" className="dating-axis">
        <div />
        <div className="relative h-5.5">
          {axis.marks.map((mark, index) => (
            <span
              key={mark}
              style={vars({ "--x": `${((mark - axis.from) / (axis.to - axis.from)) * 100}%` })}
              className={`absolute top-1.25 left-(--x) text-axis text-ink-3 tabular-nums ${index === axis.marks.length - 1 ? "-translate-x-full" : "-translate-x-1/2"}`}
            >
              {mark}
            </span>
          ))}
        </div>
      </div>
      {hiddenCount > 0 ? (
        <div className="mt-2.5">
          <MoreButton expanded={expanded} controls={id} onClick={toggle}>
            {expanded ? lessLabel : moreLabel.replace("{n}", String(hiddenCount))}
          </MoreButton>
        </div>
      ) : null}
    </>
  );
}
