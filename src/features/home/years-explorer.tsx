"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { YearsData } from "@/content/get-home-timeline";
import { YearsLists, type YearsGroupKey, type YearsRow } from "@/features/home/years-lists";
import {
  councilInWindow,
  divisionInWindow,
  fatherInWindow,
  YearsRuler,
  type YearWindow,
} from "@/features/home/years-ruler";
import { flipKeyed } from "@/lib/keyed-flip";

type YearsText = {
  rows: { fathers: string; councils: string; divisions: string };
  window: string;
  windowValue: string;
  status: string;
  empty: string;
  fathersOne: string;
  fathersMany: string;
  councilsOne: string;
  councilsMany: string;
  divisionsOne: string;
  divisionsMany: string;
  and: string;
  groups: Record<YearsGroupKey, string>;
  noFathers: string;
  more: string;
  less: string;
};

const firstWindow: YearWindow = { a: 300, b: 460 };
const listDelayMs = 140;

function count(n: number, one: string, many: string) {
  return (n === 1 ? one : many).replace("{n}", String(n));
}

function statusText(data: YearsData, range: YearWindow, text: YearsText) {
  const fathers = data.fathers.filter((father) => fatherInWindow(father, range)).length;
  const councils = data.councils.filter((council) => councilInWindow(council, range)).length;
  const divisions = data.divisions.filter((division) => divisionInWindow(division, range)).length;
  const parts = [
    fathers ? count(fathers, text.fathersOne, text.fathersMany) : null,
    councils ? count(councils, text.councilsOne, text.councilsMany) : null,
    divisions ? count(divisions, text.divisionsOne, text.divisionsMany) : null,
  ].filter((part): part is string => part !== null);
  const years = (template: string) => template.replace("{a}", String(range.a)).replace("{b}", String(range.b));
  if (parts.length === 0) return years(text.empty);
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(", ")}${text.and}${parts.at(-1)}` : parts[0]!;
  return years(text.status).replace("{list}", list);
}

function groupsIn(data: YearsData, range: YearWindow): Record<YearsGroupKey, YearsRow[]> {
  return {
    fathers: data.fathers
      .filter((father) => fatherInWindow(father, range))
      .sort((x, y) => x.end - y.end)
      .map(({ id, name, date, detail, href }) => ({ key: `f-${id}`, name, date, detail, href })),
    councils: data.councils
      .filter((council) => councilInWindow(council, range))
      .map(({ id, name, date, detail, href }) => ({ key: `c-${id}`, name, date, detail, href })),
    divisions: data.divisions
      .filter((division) => divisionInWindow(division, range))
      .map(({ id, name, date, href }) => ({ key: `d-${id}`, name, date, detail: "", href })),
  };
}

export function YearsExplorer({ data, text }: { data: YearsData; text: YearsText }) {
  const [range, setRange] = useState(firstWindow);
  const [listed, setListed] = useState(firstWindow);
  const [hot, setHot] = useState<{ key: string; fromRuler: boolean } | null>(null);
  const [expanded, setExpanded] = useState<Set<YearsGroupKey>>(() => new Set());
  const timer = useRef<number | undefined>(undefined);
  const box = useRef<HTMLDivElement>(null);
  const ghosts = useRef<HTMLDivElement>(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  function flip(change: () => void) {
    if (box.current && ghosts.current) flipKeyed(box.current, ghosts.current, () => flushSync(change));
    else change();
  }

  function move(next: YearWindow) {
    setRange(next);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => flip(() => setListed(next)), listDelayMs);
  }

  function settle(next: YearWindow) {
    clearTimeout(timer.current);
    setRange(next);
    flip(() => setListed(next));
  }

  function toggle(group: YearsGroupKey) {
    flip(() =>
      setExpanded((previous) => {
        const next = new Set(previous);
        if (!next.delete(group)) next.add(group);
        return next;
      }),
    );
  }

  return (
    <div>
      <YearsRuler
        data={data}
        range={range}
        hot={hot?.key ?? null}
        tip={hot?.fromRuler ?? false}
        text={text}
        onMove={move}
        onSettle={settle}
        onHot={(key) => setHot(key ? { key, fromRuler: true } : null)}
      />
      <p aria-live="polite" className="mt-2.5 text-ui-xs leading-normal text-ink-3">
        {statusText(data, listed, text)}
      </p>
      <YearsLists
        groups={groupsIn(data, listed)}
        expanded={expanded}
        text={text}
        box={box}
        ghosts={ghosts}
        hot={hot?.key ?? null}
        onToggle={toggle}
        onHot={(key) => setHot(key ? { key, fromRuler: false } : null)}
      />
    </div>
  );
}
