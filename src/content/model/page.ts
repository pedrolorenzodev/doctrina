import type { ChurchGrade, DoctrineId, TraditionId, UnclassifiedReason } from "@/content/model/ids";
import type { DateInfo } from "@/content/model/registry";

export type Rich = string;

export type GradeLine =
  | { kind: "church"; grade: ChurchGrade; basis?: Rich }
  | { kind: "unclassified"; reason: UnclassifiedReason; basis?: Rich };

export type SourceRef<C extends string = string> = {
  citations: C[];
  label: string;
};

export type Statement<C extends string = string> = {
  id: string;
  text: Rich;
  aside?: Rich;
  grades: GradeLine[];
  sources: SourceRef<C>[];
};

export type Opening<C extends string = string> = {
  question: Rich;
  answer: Rich;
  source: SourceRef<C>;
};

export type Father<C extends string = string> = {
  lead: string;
  quote: string[];
  author: string;
  work: string;
  date: DateInfo;
  citedIn: SourceRef<C>;
};

export type ScripturePassage = {
  refs: string[];
  text: Rich;
};

export type CitationGroup<C extends string = string> = {
  citations: C[];
  name: string;
  dates: DateInfo[];
};

export type AnswerBlock = { type: "p"; text: Rich } | { type: "quote"; text: string[]; attribution: Rich };

export type ObjectionLayer = "official" | "debate";

export type Objection<C extends string = string> = {
  id: string;
  layer: ObjectionLayer;
  title: Rich;
  titleStatus?: C;
  synthesis: Rich;
  raisedBy: { traditions: TraditionId[]; line: string };
  objectorTexts: { shown: C[]; more: C[] };
  answer: AnswerBlock[];
  // TODO: drop with the debate layer's pending answers; the site never shows a pending marker
  apologeticAnswer?: "pending";
  sourcesCited: CitationGroup<C>[];
  passages: { answer: string[]; objector: string[]; objectorNote?: Rich };
};

export type LifeItem<C extends string = string> = {
  id: string;
  label: string;
  text: Rich;
  sources: SourceRef<C>[];
};

export type GradeDefinition<C extends string = string> = {
  label: string;
  sub?: string;
  definition?: string;
  source: SourceRef<C>;
};

export type TraditionPage<C extends string = string> = {
  doctrine: DoctrineId;
  tradition: TraditionId;
  status: "draft" | "verified";
  title: string;
  lede: string;
  teach: {
    subtitle: string;
    opening?: Opening<C>;
    definition: { text: Rich; grades: GradeLine[]; sources: SourceRef<C>[] };
    statements: Statement<C>[];
  };
  why: { intro: Rich[]; fathers: Father<C>[]; note: Rich; closing: Rich };
  scriptureSubtitle: string;
  scripture: ScripturePassage[];
  objections: { subtitle: string; order: string[]; silentTraditions?: Rich; items: Objection<C>[] };
  life: { intro: Rich[]; items: LifeItem<C>[] };
  authority: { grades: Record<ChurchGrade, GradeDefinition<C>>; other: Record<string, GradeDefinition<C>> };
};
