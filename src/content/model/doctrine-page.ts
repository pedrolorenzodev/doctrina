import type { ChurchGrade, DoctrineId, TraditionId } from "@/content/model/ids";
import type { DateInfo } from "@/content/model/registry";
import type { GradeDefinition, Rich, SourceRef } from "@/content/model/page";

export type FingerprintMark = {
  year: number;
  yearEnd?: number;
  circa?: boolean;
  label: string;
};

export type AnswerObjection = { id: string } | { title: Rich };

export type AnswerGrade<C extends string = string> = { basis: Rich } & (
  { grade: ChurchGrade } | { definition: GradeDefinition<C> }
);

export type DoctrineAnswer<C extends string = string> = {
  tradition: TraditionId;
  summary: Rich;
  grade: AnswerGrade<C>;
  objections: AnswerObjection[];
};

export type Witness = {
  id: string;
  author: string;
  work: string;
  locator: string;
  date: DateInfo;
  quote: string;
  edition: string;
  note?: string;
};

export type PracticeCell<C extends string = string> = {
  text: Rich;
  sources: SourceRef<C>[];
};

export type PracticeAspect<C extends string = string> = {
  id: string;
  label: string;
  cells: Partial<Record<TraditionId, PracticeCell<C>>>;
};

export type ConnectedDoctrine = {
  doctrine: DoctrineId;
  text: Rich;
};

export type DoctrinePage<C extends string = string> = {
  doctrine: DoctrineId;
  status: "draft" | "verified";
  lede: string;
  legend: { witnessId: string; citationLabel: string };
  fingerprint: { marks: FingerprintMark[] };
  common: { text: Rich; questions: string[] };
  answers: { subtitle: string; items: DoctrineAnswer<C>[] };
  witnesses: { subtitle: string; historyLink: { label: string; note: string }; items: Witness[] };
  practice: { subtitle: string; aspects: PracticeAspect<C>[] };
  connected: { subtitle: string; items: ConnectedDoctrine[] };
};
