import type { AskRequest } from "@/lib/ai/contracts";
import type { Locale } from "@doctrina/core/locale";
import { bibleTranslationName, doctrineSubjects } from "@/content/ai-search/collections";
import type { Coverage, VerseTarget } from "@/content/ai-search/types";
import { formatVerseRef } from "@/content/format-verse";
import type { TraditionId } from "@/content/model/ids";

const traditionAdjectives: Record<TraditionId, Record<Locale, string>> = {
  catholic: { es: "católica", en: "Catholic" },
  orthodox: { es: "ortodoxa", en: "Orthodox" },
  lutheran: { es: "luterana", en: "Lutheran" },
  reformed: { es: "reformada", en: "Reformed" },
  baptist: { es: "bautista", en: "Baptist" },
  pentecostal: { es: "pentecostal", en: "Pentecostal" },
};

const searchesBible = (scope: AskRequest["scope"]) => scope === "chapter" || scope === "bible" || scope === "all";

function listOf(items: string[], locale: Locale): string {
  if (items.length <= 1) return items.join("");
  const last = items.at(-1) ?? "";
  return `${items.slice(0, -1).join(", ")} ${locale === "es" ? "y" : "and"} ${last}`;
}

function verseLabel(target: VerseTarget, locale: Locale): string {
  const chapter = `${target.book}.${target.chapter}`;
  if (target.to >= 999) return formatVerseRef([chapter], locale);
  if (target.from === target.to) return formatVerseRef([`${chapter}.${target.from}`], locale);
  return formatVerseRef([`${chapter}.${target.from}-${chapter}.${target.to}`], locale);
}

export function coverageLine(coverage: Coverage, request: AskRequest, locale: Locale): string {
  const es = locale === "es";
  const parts: string[] = [];
  const searchedHere = (collection: "bible" | "fathers" | "tradition") =>
    coverage.searched === undefined || coverage.searched.includes(collection);
  if (searchesBible(request.scope) && searchedHere("bible")) {
    const edition = bibleTranslationName(coverage.bibleEdition);
    parts.push(es ? `la Biblia (${edition})` : `the Bible (${edition})`);
  }
  if (coverage.fatherWorks > 0 && searchedHere("fathers")) {
    const n = coverage.fatherWorks;
    parts.push(
      es ? `${n} ${n === 1 ? "obra" : "obras"} de los Padres` : `${n} ${n === 1 ? "work" : "works"} of the Fathers`,
    );
  }
  const withPages = coverage.traditions.filter((entry) => entry.status !== "no-page");
  if (withPages.length > 0) {
    const subject = listOf(
      coverage.doctrines.map((doctrine) => doctrineSubjects[doctrine][locale]),
      locale,
    );
    const count = withPages.length;
    const base = es
      ? `los documentos de ${count} ${count === 1 ? "tradición" : "tradiciones"}`
      : `the documents of ${count} ${count === 1 ? "tradition" : "traditions"}`;
    parts.push(subject ? `${base} ${es ? "sobre" : "on"} ${subject}` : base);
  }
  const searched = coverage.verseSearches ?? [];
  if (searched.length > 0) {
    const labels = listOf(
      searched.map((entry) => verseLabel(entry.target, locale)),
      locale,
    );
    const both = searched.some(
      (entry) => entry.collections.includes("fathers") && entry.collections.includes("tradition"),
    );
    const onlyTraditions = searched.every((entry) => !entry.collections.includes("fathers"));
    const who = both
      ? es
        ? "de los Padres y de las tradiciones"
        : "of the Fathers and the traditions"
      : onlyTraditions
        ? es
          ? "de las tradiciones"
          : "of the traditions"
        : es
          ? "de los Padres"
          : "of the Fathers";
    parts.push(es ? `los textos ${who} que citan ${labels}` : `the texts ${who} that cite ${labels}`);
  }
  const sentences: string[] = [];
  if (parts.length > 0) sentences.push(`${es ? "Buscó en" : "Searched"} ${listOf(parts, locale)}.`);
  for (const entry of searched.filter((item) => item.found === 0)) {
    const label = verseLabel(entry.target, locale);
    sentences.push(es ? `Ningún texto del corpus cita ${label}.` : `No text in the corpus cites ${label}.`);
  }

  const missing = coverage.traditions.flatMap((entry) => {
    if (entry.status === "found") return [];
    const name = traditionAdjectives[entry.tradition][locale];
    return [entry.status === "no-page" ? `${name} (${es ? "no hay página todavía" : "no page yet"})` : name];
  });
  if (missing.length > 0) sentences.push(`${es ? "Sin textos de" : "No texts from"}: ${missing.join(", ")}.`);

  for (const author of coverage.missingAuthors) {
    sentences.push(es ? `Doctrina no tiene obras de ${author} todavía.` : `Doctrina has no works by ${author} yet.`);
  }
  return sentences.join(" ");
}
