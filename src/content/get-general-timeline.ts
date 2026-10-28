import { formatYear } from "@/content/format-date";
import { lifeText } from "@/content/father-life";
import { personItem } from "@/content/father-timeline";
import { councils, heresies } from "@/content/history/timeline-sources";
import type { Father } from "@/content/model/history";
import { councilHref, currentHref, fatherHref } from "@/content/routes";
import type { UiText } from "@/content/ui-text/types";
import type { TimelineEntry } from "@/lib/timeline-entry";
import { firstSentence } from "@/lib/first-sentence";
import type { Locale } from "@/lib/locale";

export type GeneralSection = "people" | "works" | "councils" | "currents";

export type GeneralEntry = TimelineEntry & {
  section: GeneralSection;
  facts: { label: string; value: string }[];
  ecumenical: boolean;
  note: { heading: string; text: string } | null;
  writings: { title: string; date: string }[];
};

export type GeneralTimeline = {
  from: number;
  to: number;
  marks: number[];
  entries: GeneralEntry[];
};

const from = 30;
const to = 800;
const markStep = 50;
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

function years(start: number, end: number | null, circa: boolean): string {
  const first = formatYear({ year: start, circa });
  return end === null || end === start ? first : `${first}–${end}`;
}

export function buildGeneralTimeline(fathers: Father[], locale: Locale, text: UiText): GeneralTimeline {
  const labels = text.generalTimeline;
  const entries: GeneralEntry[] = [];
  for (const father of fathers) {
    const own = personItem(father, false, locale, text);
    const died = formatYear({ year: father.died, circa: father.approx });
    const life = lifeText(father, locale, text);
    const facts =
      life?.header ??
      (father.kind === "work"
        ? [{ label: labels.facts.written, value: died }]
        : [
            {
              label: labels.facts.born,
              value:
                father.born === null ? labels.facts.unknown : formatYear({ year: father.born, circa: father.approx }),
            },
            { label: labels.facts.died, value: died },
          ]);
    entries.push({
      ...own,
      own: false,
      href: fatherHref(locale, father.id),
      linkLabel: text.generalTimeline.pageOf.replace("{name}", own.name),
      kind: father.kind === "work" ? labels.kinds.work : capitalize(father.role[locale]),
      section: father.kind === "work" ? "works" : "people",
      group: father.kind === "work" ? "events" : "people",
      ...(father.kind === "work" && !life
        ? { start: father.died, end: father.died, isRange: false, rowDate: died, ends: [died], dates: died }
        : {}),
      facts,
      ecumenical: false,
      note: null,
      writings:
        father.kind === "work" ? [] : father.works.map((work) => ({ title: work.title[locale], date: work.date })),
    });
  }
  for (const council of councils.filter((item) => item.year >= from && item.year <= to)) {
    const label = years(council.year, council.endYear, council.approx);
    const name = council.name[locale];
    entries.push({
      id: council.id,
      group: "events",
      section: "councils",
      kind: labels.kinds.council,
      name,
      label: name,
      rowDate: label,
      diedSpoken: null,
      ends: [label],
      dates: council.dateNote?.[locale] ?? label,
      text: firstSentence(council.decisions[locale]),
      start: council.year,
      end: council.endYear ?? council.year,
      leadStart: null,
      tailEnd: null,
      tailKind: null,
      band: null,
      birthUnknown: false,
      isRange: false,
      openEnd: false,
      own: false,
      href: councilHref(locale, council.id),
      linkLabel: labels.pageOf.replace("{name}", name),
      facts: [{ label: labels.facts.date, value: council.dateNote?.[locale] ?? label }],
      ecumenical: council.ecumenical,
      note: {
        heading: council.ecumenical ? labels.ecumenical.yes : labels.ecumenical.no,
        text: council.recognizedBy[locale],
      },
      writings: [],
    });
  }
  for (const heresy of heresies.filter((item) => item.startYear <= to)) {
    const label = years(heresy.startYear, heresy.endYear, true);
    const name = heresy.name[locale];
    entries.push({
      id: heresy.id,
      group: "currents",
      section: "currents",
      kind: labels.kinds.current,
      name,
      label: name,
      rowDate: label,
      diedSpoken: null,
      ends: [formatYear({ year: heresy.startYear, circa: true }), String(heresy.endYear)],
      dates: label,
      text: firstSentence(heresy.teaching[locale]),
      start: heresy.startYear,
      end: heresy.endYear,
      leadStart: null,
      tailEnd: null,
      tailKind: null,
      band: null,
      birthUnknown: false,
      isRange: true,
      openEnd: heresy.endYear > to,
      own: false,
      href: currentHref(locale, heresy.id),
      linkLabel: labels.pageOf.replace("{name}", name),
      facts: [
        { label: labels.facts.since, value: formatYear({ year: heresy.startYear, circa: true }) },
        { label: labels.facts.until, value: String(heresy.endYear) },
      ],
      ecumenical: false,
      note: null,
      writings: [],
    });
  }
  const marks: number[] = [from];
  for (let mark = markStep; mark <= to; mark += markStep) marks.push(mark);
  return { from, to, marks, entries };
}
