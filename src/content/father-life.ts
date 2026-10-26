import type { Father } from "@/content/model/history";
import type { UiText } from "@/content/ui-text/types";
import type { Locale } from "@/lib/locale";

export type FatherFact = { label: string; value: string };

export type LifeMarks = {
  start: number;
  end: number;
  leadStart: number | null;
  tailEnd: number | null;
  tailKind: "dash" | "dots" | null;
  band: "soft" | "hollow" | null;
};

export type LifeText = {
  rowDate: string;
  dates: string;
  ends: string[];
  diedSpoken: string | null;
  header: FatherFact[];
  profileDate: FatherFact;
  searchDate: string;
};

const estimatedBirthLead = 8;
const knownAliveTrail = 10;

export function lifeMarks(father: Father): LifeMarks {
  const life = father.life;
  const span = life?.active ?? life?.composed;
  if (life && span) {
    return {
      start: span.start,
      end: span.end,
      leadStart: null,
      tailEnd: null,
      tailKind: null,
      band: life.active ? "soft" : "hollow",
    };
  }
  const birth = life?.birth;
  const death = life?.death;
  const between = birth?.kind === "between";
  const estimated = life ? birth?.kind === "estimated" : father.born !== null && father.approx;
  const leadStart = between
    ? (birth?.year ?? null)
    : estimated && father.born !== null
      ? father.born - estimatedBirthLead
      : null;
  const start = between ? (birth?.yearEnd ?? father.born ?? father.died) : (father.born ?? father.died);
  const tail =
    death?.kind === "after"
      ? { end: death.year + knownAliveTrail, kind: "dots" as const }
      : death?.kind === "either" && death.yearEnd !== undefined
        ? { end: death.yearEnd, kind: "dash" as const }
        : null;
  return { start, end: father.died, leadStart, tailEnd: tail?.end ?? null, tailKind: tail?.kind ?? null, band: null };
}

export function lifeBounds(father: Father): { start: number; end: number } {
  const span = father.life?.active ?? father.life?.composed;
  if (span) return { start: span.start, end: span.end };
  return { start: father.born ?? father.died - 60, end: father.died };
}

export function lifeText(father: Father, locale: Locale, text: UiText): LifeText | null {
  const life = father.life;
  if (!life) return null;
  const facts = text.father.facts;
  const span = life.active ?? life.composed;
  if (span) {
    const label = life.active ? facts.active : facts.composed;
    const fact = { label, value: span.text[locale] };
    return {
      rowDate: span.short[locale],
      dates: `${label}: ${span.text[locale]}.`,
      ends: [span.short[locale]],
      diedSpoken: null,
      header: [fact],
      profileDate: fact,
      searchDate: span.short[locale],
    };
  }
  const death = life.death;
  if (!death) return null;
  const birth = life.birth;
  const bornValue = birth ? birth.text[locale] : facts.unknown;
  const diedFact = { label: facts.died, value: death.text[locale] };
  const died = death.short[locale];
  return {
    rowDate: birth
      ? text.timeline.span.replace("{from}", birth.short[locale]).replace("{to}", died)
      : `${text.timeline.diedMark}${died}`,
    dates: `${facts.born}: ${bornValue}. ${facts.died}: ${death.text[locale]}.`,
    ends: birth ? [birth.short[locale], died] : [`${text.timeline.died} ${died}`],
    diedSpoken: birth ? null : `${text.timeline.died} ${died}`,
    header: [{ label: facts.born, value: bornValue }, diedFact],
    profileDate: diedFact,
    searchDate: `${text.timeline.diedMark} ${died}`,
  };
}
