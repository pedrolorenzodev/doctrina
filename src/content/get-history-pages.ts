import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/lib/locale";

type Localized = { es: string; en: string };

type CouncilRecord = {
  id: string;
  name: Localized;
  year: number;
  endYear?: number;
  approx?: boolean;
  dateNote?: Localized;
  recognizedAsEcumenicalBy: Localized;
  place: Localized;
  convokedBy?: Localized;
  decisions: Localized;
  canons?: number;
};

type CurrentRecord = {
  id: string;
  name: Localized;
  period: Localized;
  startYear: number;
  endYear: number;
  founder?: Localized;
  teaching: Localized;
  response: Localized;
  councils: string[];
  fathers: string[];
  page: Localized;
};

export type HistoryPage<T> = { item: T; previous: T | null; next: T | null };

const history = JSON.parse(readFileSync(join(process.cwd(), "data/site/history.json"), "utf8")) as {
  councils: CouncilRecord[];
  heresies: CurrentRecord[];
};

const councilList = [...history.councils].sort((a, b) => a.year - b.year);
const currentList = [...history.heresies].sort((a, b) => a.startYear - b.startYear);

function around<T extends { id: string }>(list: T[], id: string): HistoryPage<T> | null {
  const index = list.findIndex((candidate) => candidate.id === id);
  const item = list[index];
  return item ? { item, previous: list[index - 1] ?? null, next: list[index + 1] ?? null } : null;
}

export function getCouncilIds(): string[] {
  return councilList.map((council) => council.id);
}

export function getCouncilPage(id: string): HistoryPage<CouncilRecord> | null {
  return around(councilList, id);
}

export function getCurrentIds(): string[] {
  return currentList.map((current) => current.id);
}

export function getCurrentPage(id: string): HistoryPage<CurrentRecord> | null {
  return around(currentList, id);
}

export function councilName(id: string, locale: Locale): string | null {
  return councilList.find((council) => council.id === id)?.name[locale] ?? null;
}

export function localized(value: Localized | undefined, locale: Locale): string | null {
  return value ? value[locale] : null;
}
