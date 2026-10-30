import type { DoctrineId, TraditionId, UnclassifiedReason } from "@/content/model/ids";
import type { DateInfo } from "@/content/model/registry";

export type Rich = string;

export type GradeLine =
  { kind: "church"; grade: string; basis?: Rich } | { kind: "unclassified"; reason: UnclassifiedReason; basis?: Rich };

export type SourceRef<C extends string = string> = {
  citations: C[];
  label: string;
};

export type Statement<C extends string = string> = {
  id: string;
  short: string;
  question?: Rich;
  text: Rich;
  aside?: Rich;
  status?: C[];
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

export type ApologistQuote = {
  speaker: string;
  work?: string;
  outlet: string;
  date: string;
  locator: string;
  url: string;
  text: string;
  original?: string;
  translation?: "ai-assisted";
};

export type ApologistArgument = { title: string; quotes: ApologistQuote[] };

export type ApologistLayer = { intro: string; arguments: ApologistArgument[] };

export type ScripturePassage = {
  refs: string[];
  text: Rich;
  apologists?: ApologistLayer;
  parallels?: string[][];
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
  short?: string;
  layer: ObjectionLayer;
  title: Rich;
  titleStatus?: C;
  synthesis: Rich;
  raisedBy: { traditions: TraditionId[]; line: string };
  objectorTexts: { shown: C[]; more: C[] };
  videoIds?: string[];
  answer: AnswerBlock[];
  // TODO: drop with the debate layer's pending answers; the site never shows a pending marker
  apologeticAnswer?: "pending";
  sourcesCited: CitationGroup<C>[];
  passages: { answer: string[]; objector: string[]; objectorNote?: Rich };
};

export type Video = {
  id: string;
  title: string;
  channel: string;
  lang: "es" | "en";
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

export type ObjectionTheme = { id: string; name: string; ids: string[] };

export type PassagesPageText = {
  title: string;
  lede: string;
  officialLabel: string;
  apologistsLabel: string;
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
  passages?: PassagesPageText;
  objections: {
    themes?: ObjectionTheme[];
    subtitle: string;
    videosSubtitle: string;
    order: string[];
    silentTraditions?: Rich;
    items: Objection<C>[];
  };
  videos: { subtitle: string; items: Video[] };
  life: { intro: Rich[]; items: LifeItem<C>[] };
  authority: {
    subtitle: string;
    grades: Record<string, GradeDefinition<C>>;
    other: Record<string, GradeDefinition<C>>;
  };
};
