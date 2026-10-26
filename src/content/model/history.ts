export type Localized = { es: string; en: string };

export type FatherWork = { title: Localized; date: string; year: number };

export type LifeClaimKind = "attested" | "estimated" | "between" | "either" | "after";

export type LifeClaim = { kind: LifeClaimKind; year: number; yearEnd?: number; text: Localized; short: Localized };

export type LifeSpan = { start: number; end: number; text: Localized; short: Localized };

export type FatherLife = { birth?: LifeClaim; death?: LifeClaim; active?: LifeSpan; composed?: LifeSpan };

export type Father = {
  id: string;
  kind: "person" | "work";
  name: Localized;
  born: number | null;
  died: number;
  approx: boolean;
  region: Localized;
  language: "greek" | "latin" | "syriac";
  role: Localized;
  works: FatherWork[];
  summary: Localized;
  life?: FatherLife;
};

export type HistoryEventKind =
  | "persecution"
  | "canon"
  | "dogma"
  | "theology"
  | "ecumenism"
  | "institution"
  | "political"
  | "biblical"
  | "discovery"
  | "mission"
  | "monastic"
  | "bible-text";

export type HistoryEvent = {
  id: string;
  kind: HistoryEventKind;
  year: number;
  endYear: number | null;
  approx: boolean;
  label: Localized;
};

export type Council = {
  id: string;
  name: Localized;
  year: number;
  endYear: number | null;
  approx: boolean;
  ecumenical: boolean;
  recognizedBy: Localized;
  place: Localized;
  dateNote: Localized | null;
  decisions: Localized;
};

export type Heresy = {
  id: string;
  name: Localized;
  startYear: number;
  endYear: number;
  teaching: Localized;
  fathers: string[];
};

export type DatingRow = {
  id: string;
  date: string;
  lead: string;
  scholar: string | null;
  year: number | null;
  start: number;
  end: number | null;
  maybeEnd: number | null;
  reign: string | null;
  main: boolean;
  highlighted: boolean;
};

export type DatingStep = { name: string; note?: string; text: string; accepted?: boolean };

export type DatingScholar = {
  name: string;
  shortName: string;
  field: string;
  paragraphs: string[];
  life: { label: string; start: number; end: number | null; marker: string } | null;
};

export type FatherDating = {
  title: string;
  intro: string;
  axis: { from: number; to: number; marks: number[] };
  rows: DatingRow[];
  scholars: Record<string, DatingScholar>;
  groups: { title: string; intro?: string; steps: DatingStep[] }[];
};
