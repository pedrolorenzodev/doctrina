import { formatYear } from "@/content/format-date";
import { councils, heresies, historyEvents } from "@/content/history/timeline-sources";
import type { Father, HistoryEventKind, Localized } from "@/content/model/history";
import { fatherHref } from "@/content/routes";
import type { UiText } from "@/content/ui-text/types";
import { firstSentence } from "@/lib/first-sentence";
import type { Locale } from "@/lib/locale";

export type TimelineGroupId = "people" | "currents" | "events";

export type TimelineItem = {
  id: string;
  group: TimelineGroupId;
  kind: string;
  name: string;
  label: string;
  rowDate: string;
  diedSpoken: string | null;
  ends: string[];
  dates: string;
  text: string;
  start: number;
  end: number;
  leadStart: number | null;
  birthUnknown: boolean;
  isRange: boolean;
  ecumenical?: boolean;
  openEnd: boolean;
  own: boolean;
  href: string | null;
  linkLabel: string;
};

export type TimelineView = {
  from: number;
  to: number;
  marks: number[];
  items: TimelineItem[];
  ownId: string;
  ownYears: { start: number; end: number };
};

const lifeSpanFallback = 60;
const marginBefore = 20;
const marginAfter = 60;
const tickStep = 20;
const estimatedBirthLead = 8;
const maxEvents = 8;
const clauseEnd = /\s*[(:;]|,\s/;

const kindPriority: Record<HistoryEventKind, number> = {
  persecution: 0,
  canon: 1,
  dogma: 1,
  theology: 1,
  ecumenism: 1,
  institution: 2,
  political: 3,
  biblical: 3,
  discovery: 4,
  mission: 9,
  monastic: 9,
  "bible-text": 9,
};

const shortLabel = (text: string) => text.split(clauseEnd)[0] ?? text;
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

function lifeOf(father: Father): { start: number; end: number } {
  return { start: father.born ?? father.died - lifeSpanFallback, end: father.died };
}

function rangeLabel(start: number, end: number | null, circa: boolean): string {
  const first = formatYear({ year: start, circa });
  return end === null || end === start ? first : `${first}–${end}`;
}

function overlaps(a: { start: number; end: number }, b: { start: number; end: number }): boolean {
  return a.start <= b.end && b.start <= a.end;
}

export function personItem(father: Father, own: boolean, locale: Locale, text: UiText): TimelineItem {
  const labels = text.timeline;
  const name = father.name[locale];
  const birthUnknown = father.born === null;
  const died = formatYear({ year: father.died, circa: father.approx });
  const bornLabel = formatYear({ year: father.born ?? 0, circa: father.approx });
  const rowDate = birthUnknown ? `${labels.diedMark}${died}` : `${bornLabel}–${father.died}`;
  const dates = birthUnknown
    ? labels.diedUnknownBirth.replace("{died}", died)
    : labels.livedBetween.replace("{born}", bornLabel).replace("{died}", died);
  return {
    id: father.id,
    group: "people",
    kind: father.kind === "work" ? labels.kinds.work : labels.kinds.father,
    name,
    label: name,
    rowDate,
    diedSpoken: birthUnknown ? `${labels.died} ${died}` : null,
    ends: birthUnknown ? [`${labels.died} ${died}`] : [bornLabel, died],
    dates,
    text: firstSentence(father.summary[locale]),
    start: father.born ?? father.died,
    end: father.died,
    leadStart: father.born !== null && father.approx ? father.born - estimatedBirthLead : null,
    birthUnknown,
    isRange: father.born !== null,
    openEnd: false,
    own,
    href: own ? null : fatherHref(locale, father.id),
    linkLabel: labels.pageOf.replace("{name}", name),
  };
}

function dated(
  id: string,
  group: TimelineGroupId,
  kind: string,
  name: Localized,
  label: string,
  start: number,
  end: number | null,
  approx: boolean,
  summary: string,
  locale: Locale,
  linkLabel: string,
): TimelineItem {
  const rowDate = rangeLabel(start, end, approx);
  return {
    id,
    group,
    kind,
    name: name[locale],
    label,
    rowDate,
    diedSpoken: null,
    ends: end !== null && end > start ? [formatYear({ year: start, circa: approx }), String(end)] : [rowDate],
    dates: rowDate,
    text: summary,
    start,
    end: end ?? start,
    leadStart: null,
    birthUnknown: false,
    isRange: end !== null && end > start,
    openEnd: false,
    own: false,
    href: null,
    linkLabel,
  };
}

const withEcumenical = (ecumenical: boolean, item: TimelineItem): TimelineItem =>
  ecumenical ? { ...item, ecumenical } : item;

export function buildFatherTimeline(father: Father, all: Father[], locale: Locale, text: UiText): TimelineView {
  const labels = text.timeline;
  const life = lifeOf(father);
  const from = Math.floor((life.start - marginBefore) / 10) * 10;
  const to = Math.ceil((life.end + marginAfter) / 10) * 10;
  const window = { start: from, end: to };

  const people = all
    .filter((other) => other.kind === "person" && other.id !== father.id && overlaps(lifeOf(other), life))
    .map((other) => personItem(other, false, locale, text));
  const own = personItem(father, true, locale, text);
  const peopleItems = [own, ...people].sort((a, b) => a.end - b.end);

  const currents = heresies
    .filter((heresy) => heresy.fathers.includes(father.id))
    .map((heresy) =>
      dated(
        heresy.id,
        "currents",
        labels.kinds.current,
        heresy.name,
        heresy.name[locale],
        heresy.startYear,
        heresy.endYear,
        true,
        firstSentence(heresy.teaching[locale]),
        locale,
        labels.pageOf.replace("{name}", heresy.name[locale]),
      ),
    );

  const midpoint = (life.start + life.end) / 2;
  const candidates = [
    ...historyEvents
      .filter(
        (event) =>
          kindPriority[event.kind] < 9 && overlaps({ start: event.year, end: event.endYear ?? event.year }, window),
      )
      .map((event) => ({
        rank: kindPriority[event.kind],
        distance: Math.abs(event.year - midpoint),
        item: dated(
          event.id,
          "events",
          labels.kinds.event,
          event.label,
          capitalize(shortLabel(event.label[locale])),
          event.year,
          event.endYear,
          event.approx,
          capitalize(event.label[locale]),
          locale,
          labels.seeOnTimeline,
        ),
      })),
    ...councils
      .filter((council) => overlaps({ start: council.year, end: council.endYear ?? council.year }, window))
      .map((council) => ({
        rank: council.ecumenical ? 0 : 1,
        distance: Math.abs(council.year - midpoint),
        item: withEcumenical(
          council.ecumenical,
          dated(
            council.id,
            "events",
            labels.kinds.council,
            council.name,
            council.name[locale],
            council.year,
            council.endYear,
            council.approx,
            council.name[locale],
            locale,
            labels.seeOnTimeline,
          ),
        ),
      })),
  ];
  const events = candidates
    .sort((a, b) => a.rank - b.rank || a.distance - b.distance)
    .slice(0, maxEvents)
    .map((candidate) => candidate.item)
    .sort((a, b) => a.start - b.start);

  const items = [...peopleItems, ...currents, ...events].map((item) => ({ ...item, openEnd: item.end > to }));
  const marks: number[] = [];
  for (let mark = Math.ceil(from / tickStep) * tickStep; mark <= to; mark += tickStep) marks.push(mark);
  return { from, to, marks, items, ownId: father.id, ownYears: life };
}
