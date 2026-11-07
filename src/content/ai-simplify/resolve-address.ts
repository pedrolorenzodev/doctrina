import { getFatherWork } from "@/content/get-father-works";
import { getSpanishFatherWork } from "@/content/get-father-works-es";
import type { GlossaryEntry } from "@/content/get-glossary";
import { doctrineIds, traditionIds, type DoctrineId, type TraditionId } from "@/content/model/ids";
import type { DoctrinePage } from "@/content/model/doctrine-page";
import type { TraditionPage } from "@/content/model/page";
import { plainRich } from "@/content/page-views";
import { spanishDoctrinePages, spanishPages } from "@/content/pages/index";
import { simplifyAddressSchema, type SimplifyAddress } from "@/lib/ai/contracts";
import { AiError } from "@/lib/ai/errors";
import { canSimplify } from "@/lib/ai/simplify-limits";

export type ResolvedParagraph = {
  text: string;
  sourceLang: "es" | "en";
  editionId: string | null;
  speaker: string;
  simplifiable: boolean;
};

const traditionNames: Record<TraditionId, string> = {
  catholic: "Catholic",
  orthodox: "Orthodox",
  lutheran: "Lutheran",
  reformed: "Reformed",
  baptist: "Baptist",
  pentecostal: "Pentecostal",
};

const traditionPages: Record<string, TraditionPage> = spanishPages;
const doctrinePages: Record<string, DoctrinePage> = spanishDoctrinePages;

const isDoctrine = (value: string): value is DoctrineId => (doctrineIds as readonly string[]).includes(value);
const isTradition = (value: string): value is TraditionId => (traditionIds as readonly string[]).includes(value);

export function parseAddress(raw: unknown): SimplifyAddress {
  if ((raw as { kind?: unknown } | null)?.kind === "bible") throw new AiError("ai_not_simplifiable");
  const parsed = simplifyAddressSchema.safeParse(raw);
  if (!parsed.success) throw new AiError("ai_bad_request");
  return parsed.data;
}

function paragraph(text: string, rest: Omit<ResolvedParagraph, "text" | "simplifiable">): ResolvedParagraph {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) throw new AiError("ai_not_found");
  return { ...rest, text: clean, simplifiable: canSimplify(clean) };
}

async function resolveFather(address: Extract<SimplifyAddress, { kind: "father" }>): Promise<ResolvedParagraph> {
  const english = await getFatherWork(address.work);
  if (!english) throw new AiError("ai_not_found");
  if (address.edition !== english.edition.id) {
    const spanish = await getSpanishFatherWork(address.work);
    if (spanish?.edition.id !== address.edition) throw new AiError("ai_not_found");
    if (!spanish.divisions.some((division) => division.locator === address.locator)) throw new AiError("ai_not_found");
    throw new AiError("ai_not_simplifiable");
  }
  const division = english.divisions.find((item) => item.locator === address.locator);
  if (!division) throw new AiError("ai_not_found");
  return paragraph(division.text, {
    sourceLang: english.edition.lang,
    editionId: english.edition.id,
    speaker: `${english.author}, ${english.title} (${english.edition.translator}'s translation)`,
  });
}

function resolveStatement(address: Extract<SimplifyAddress, { kind: "statement" }>): ResolvedParagraph {
  if (!isDoctrine(address.doctrine) || !isTradition(address.tradition)) throw new AiError("ai_not_found");
  const page = traditionPages[`${address.doctrine}/${address.tradition}`];
  if (!page) throw new AiError("ai_not_found");
  const text =
    address.id === "definition"
      ? page.teach.definition.text
      : page.teach.statements.find((statement) => statement.id === address.id)?.text;
  if (text === undefined) throw new AiError("ai_not_found");
  return paragraph(plainRich(text, "es"), {
    sourceLang: "es",
    editionId: null,
    speaker: `the site's own summary of what the ${traditionNames[address.tradition]} tradition teaches`,
  });
}

function resolveDoctrine(address: Extract<SimplifyAddress, { kind: "doctrine" }>): ResolvedParagraph {
  if (!isDoctrine(address.doctrine)) throw new AiError("ai_not_found");
  const page = doctrinePages[address.doctrine];
  if (!page) throw new AiError("ai_not_found");
  const speaker = (who: string) => ({ sourceLang: "es" as const, editionId: null, speaker: who });
  switch (address.section) {
    case "common":
      if (address.id !== "text") throw new AiError("ai_not_found");
      return paragraph(plainRich(page.common.text, "es"), speaker("the site's own summary"));
    case "answers": {
      const answer = page.answers.items.find((item) => item.tradition === address.id);
      if (!answer) throw new AiError("ai_not_found");
      return paragraph(
        plainRich(answer.summary, "es"),
        speaker(`the site's own summary of the ${traditionNames[answer.tradition]} answer`),
      );
    }
    case "connected": {
      const item = page.connected.items.find((connected) => connected.doctrine === address.id);
      if (!item) throw new AiError("ai_not_found");
      return paragraph(plainRich(item.text, "es"), speaker("the site's own summary"));
    }
    case "practice":
    case "witnesses":
      throw new AiError("ai_not_simplifiable");
    default:
      throw new AiError("ai_not_found");
  }
}

function glossaryText(entry: GlossaryEntry): string {
  return (entry.quote ?? entry.text).replace(/\s+—\s+[^—]*,?$/, "");
}

async function resolveGlossary(
  address: Extract<SimplifyAddress, { kind: "glossary" }>,
  locale: "es" | "en",
): Promise<ResolvedParagraph> {
  const { getGlossaryTerms, glossarySlug } = await import("@/content/get-glossary");
  const term = getGlossaryTerms().find((item) => glossarySlug(item) === address.term || item.id === address.term);
  const tradition = term?.traditions.find((item) => item.tradition === address.tradition);
  if (!term || !tradition) throw new AiError("ai_not_found");
  const readable = tradition.entries.filter(
    (entry): entry is GlossaryEntry & { lang: "es" | "en" } =>
      (entry.lang === "es" || entry.lang === "en") && !entry.notFound,
  );
  const entry = readable.find((item) => item.lang === locale) ?? readable[0];
  if (!entry) throw new AiError("ai_not_found");
  const resolved = paragraph(glossaryText(entry), {
    sourceLang: entry.lang,
    editionId: entry.edition,
    speaker: `the ${traditionNames[tradition.tradition]} tradition, ${entry.source ?? "a quoted document"}, defining «${term.name}»`,
  });
  return entry.aiTranslated ? { ...resolved, simplifiable: false } : resolved;
}

export async function resolveAddress(address: SimplifyAddress, locale: "es" | "en"): Promise<ResolvedParagraph> {
  switch (address.kind) {
    case "father":
      return resolveFather(address);
    case "statement":
      return resolveStatement(address);
    case "doctrine":
      return resolveDoctrine(address);
    case "glossary":
      return resolveGlossary(address, locale);
  }
}
