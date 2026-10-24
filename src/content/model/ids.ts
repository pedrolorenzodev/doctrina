export const doctrineIds = ["eucharist", "justification", "baptism", "papacy", "sola-scriptura"] as const;
export type DoctrineId = (typeof doctrineIds)[number];

export const traditionIds = ["catholic", "orthodox", "lutheran", "reformed", "baptist", "pentecostal"] as const;
export type TraditionId = (typeof traditionIds)[number];

export const docLangs = ["la", "es", "en", "de", "el"] as const;
export type DocLang = (typeof docLangs)[number];

export const locatorKinds = [
  "part",
  "session",
  "chapter",
  "canon",
  "article",
  "question",
  "number",
  "paragraph",
  "section",
  "locus",
  "ref",
  "constitution",
  "decree",
] as const;
export type LocatorKind = (typeof locatorKinds)[number];

export const workKinds = [
  "council",
  "encyclical",
  "catechism",
  "canon-law",
  "confession",
  "curial-document",
  "papal-address",
  "liturgy",
  "ecumenical-text",
  "patriarchal-letter",
  "status-line",
] as const;
export type WorkKind = (typeof workKinds)[number];

export const citationKinds = ["source", "other-tradition", "ecumenical", "status"] as const;
export type CitationKind = (typeof citationKinds)[number];

export const churchGrades = ["dogma", "definitive", "magisterium", "discipline"] as const;
export type ChurchGrade = (typeof churchGrades)[number];

export const unclassifiedReasons = [
  "taught-by-council",
  "taught-by-catechism",
  "ecumenical-agreement",
  "undeclared",
  "no-own-grade",
] as const;
export type UnclassifiedReason = (typeof unclassifiedReasons)[number];
