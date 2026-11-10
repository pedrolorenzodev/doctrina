import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "@/lib/locale";

export type ItemNameRecord = {
  name: Record<Locale, string>;
  short?: Partial<Record<Locale, string>>;
  onlyIn?: Locale;
  entity?: string;
};

const records = JSON.parse(readFileSync(join(process.cwd(), "data/site/names.json"), "utf8")) as Record<
  string,
  ItemNameRecord
>;

function recordOf(id: string): ItemNameRecord {
  const record = records[id];
  if (!record) throw new Error(`No canonical name for "${id}" in data/site/names.json`);
  return record;
}

export function itemName(id: string, locale: Locale): string {
  return recordOf(id).name[locale];
}

export function itemShortName(id: string, locale: Locale): string {
  const record = recordOf(id);
  return record.short?.[locale] ?? record.name[locale];
}

export function hasItemName(id: string): boolean {
  return id in records;
}
