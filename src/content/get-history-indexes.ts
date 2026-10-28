import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildFatherView } from "@/content/father-view";
import { formatYear } from "@/content/format-date";
import { getPublishedFathers } from "@/content/get-fathers";
import { councilHref, currentHref, divisionHref, fatherHref, movementHref } from "@/content/routes";
import { getUiText } from "@/content/ui-text/get-ui-text";
import { firstSentence } from "@/lib/first-sentence";
import type { Locale } from "@/lib/locale";

type Localized = { es: string; en: string };

type History = {
  councils: {
    id: string;
    name: Localized;
    year: number;
    endYear?: number;
    approx?: boolean;
    place: Localized;
  }[];
  heresies: { id: string; name: Localized; startYear: number; endYear: number; teaching: Localized }[];
  divisions: { id: string; name: Localized; year: number; endYear?: number; summary: Localized }[];
  reformation: { id: string; name: Localized; year: number; approx: boolean; summary: Localized }[];
};

export type HistoryIndexRow = {
  id: string;
  name: string;
  href: string | null;
  date: string;
  detail: string;
};

export type HistoryIndexGroup = { title: string; rows: HistoryIndexRow[] };

export type HistoryIndexKind = "fathers" | "councils" | "currents" | "divisions" | "reformation";

const history = JSON.parse(readFileSync(join(process.cwd(), "data/site/history.json"), "utf8")) as History;

type Entry = { year: number; row: HistoryIndexRow };

const ordinalEn = (n: number) =>
  `${n}${n % 100 >= 11 && n % 100 <= 13 ? "th" : (["th", "st", "nd", "rd"][n % 10] ?? "th")}`;
const romanCenturies = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
  "XXI",
];
const roman = (n: number) => romanCenturies[n - 1] ?? String(n);

function centuryTitle(year: number, locale: Locale, template: string): string {
  const century = Math.max(1, Math.ceil(year / 100));
  return template.replace("{n}", locale === "es" ? roman(century) : ordinalEn(century));
}

function grouped(entries: Entry[], locale: Locale, template: string): HistoryIndexGroup[] {
  const groups: HistoryIndexGroup[] = [];
  for (const entry of [...entries].sort((a, b) => a.year - b.year)) {
    const title = centuryTitle(entry.year, locale, template);
    const last = groups[groups.length - 1];
    if (last?.title === title) last.rows.push(entry.row);
    else groups.push({ title, rows: [entry.row] });
  }
  return groups;
}

const span = (year: number, end: number | undefined, circa: boolean) => {
  const first = formatYear({ year, circa });
  return end && end !== year ? `${first}–${end}` : first;
};

export function getHistoryIndex(
  kind: HistoryIndexKind,
  locale: Locale,
): { intro: string; groups: HistoryIndexGroup[]; filterable: boolean } {
  const text = getUiText(locale);
  const labels = text.historyIndex;
  const century = labels.century;
  if (kind === "fathers") {
    const entries = getPublishedFathers(locale).map((father): Entry => {
      const view = buildFatherView(father, locale, text);
      return {
        year: father.died,
        row: {
          id: father.id,
          name: view.name,
          href: fatherHref(locale, father.id),
          date: view.searchDate ?? "",
          detail: father.role[locale],
        },
      };
    });
    return { intro: labels.fathers.intro, groups: grouped(entries, locale, century), filterable: entries.length > 30 };
  }
  if (kind === "councils") {
    const entries = history.councils.map((council): Entry => ({
      year: council.year,
      row: {
        id: council.id,
        name: council.name[locale],
        href: councilHref(locale, council.id),
        date: span(council.year, council.endYear, council.approx ?? false),
        detail: council.place[locale],
      },
    }));
    const years = entries.map((entry) => entry.year);
    return {
      intro: labels.councils.intro
        .replace("{n}", String(entries.length))
        .replace("{from}", String(Math.min(...years)))
        .replace("{to}", String(Math.max(...years))),
      groups: grouped(entries, locale, century),
      filterable: entries.length > 30,
    };
  }
  if (kind === "currents") {
    const entries = history.heresies.map((current): Entry => ({
      year: current.startYear,
      row: {
        id: current.id,
        name: current.name[locale],
        href: currentHref(locale, current.id),
        date: span(current.startYear, current.endYear, true),
        detail: firstSentence(current.teaching[locale]),
      },
    }));
    return { intro: labels.currents.intro, groups: grouped(entries, locale, century), filterable: entries.length > 30 };
  }
  if (kind === "divisions") {
    const entries = history.divisions.map((division): Entry => ({
      year: division.year,
      row: {
        id: division.id,
        name: division.name[locale],
        href: divisionHref(locale, division.id),
        date: span(division.year, division.endYear, false),
        detail: firstSentence(division.summary[locale]),
      },
    }));
    return {
      intro: labels.divisions.intro.replace("{n}", String(entries.length)),
      groups: grouped(entries, locale, century),
      filterable: false,
    };
  }
  const entries = history.reformation.map((movement): Entry => ({
    year: movement.year,
    row: {
      id: movement.id,
      name: movement.name[locale],
      href: movementHref(locale, movement.id),
      date: formatYear({ year: movement.year, circa: movement.approx }),
      detail: firstSentence(movement.summary[locale]),
    },
  }));
  return {
    intro: labels.reformation.intro.replace("{n}", String(entries.length)),
    groups: grouped(entries, locale, century),
    filterable: false,
  };
}
