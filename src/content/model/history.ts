export type Localized = { es: string; en: string };

export type FatherWork = { title: Localized; date: string; year: number };

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
};

export type Heresy = {
  id: string;
  name: Localized;
  startYear: number;
  endYear: number;
  teaching: Localized;
  fathers: string[];
};
