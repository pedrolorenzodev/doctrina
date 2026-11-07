import type { AskRequest } from "@/lib/ai/contracts";
import type { Locale } from "@/lib/locale";
import { bibleTranslationName, doctrineSubjects } from "@/content/ai-search/collections";
import type { Coverage } from "@/content/ai-search/types";
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

export function coverageLine(coverage: Coverage, request: AskRequest, locale: Locale): string {
  const es = locale === "es";
  const parts: string[] = [];
  if (searchesBible(request.scope)) {
    const edition = bibleTranslationName(coverage.bibleEdition);
    parts.push(es ? `la Biblia (${edition})` : `the Bible (${edition})`);
  }
  if (coverage.fatherWorks > 0) {
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
  const sentences: string[] = [];
  if (parts.length > 0) sentences.push(`${es ? "Buscó en" : "Searched"} ${listOf(parts, locale)}.`);

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
