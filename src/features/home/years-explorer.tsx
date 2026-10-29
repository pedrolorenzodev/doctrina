"use client";

import { useEffect, useRef, useState } from "react";
import type { YearsData } from "@/content/get-home-timeline";
import {
  councilInWindow,
  divisionInWindow,
  fatherInWindow,
  YearsRuler,
  type YearWindow,
} from "@/features/home/years-ruler";

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

export function YearsExplorer({ data, text }: { data: YearsData; text: YearsText }) {
  const [range, setRange] = useState(firstWindow);
  const [listed, setListed] = useState(firstWindow);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function move(next: YearWindow) {
    setRange(next);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setListed(next), listDelayMs);
  }

  function settle(next: YearWindow) {
    clearTimeout(timer.current);
    setRange(next);
    setListed(next);
  }

  return (
    <div>
      <YearsRuler data={data} range={range} text={text} onMove={move} onSettle={settle} />
      <p aria-live="polite" className="mt-2.5 text-ui-xs leading-normal text-ink-3">
        {statusText(data, listed, text)}
      </p>
    </div>
  );
}
