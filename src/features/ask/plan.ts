import { searchPlanSchema, toProviderSchema, type AskRequest, type SearchPlan } from "@/lib/ai/contracts";
import type { AiProvider } from "@/lib/ai/provider";
import type { AuthorEntry } from "@/content/ai-search/types";
import { fold } from "@/content/ai-search/windows";
import { callModel, type Meter } from "@/features/ask/answer";
import { PLAN_SYSTEM } from "@/features/ask/prompts";

const PLAN_MAX_TOKENS = 600;
const PLAN_TIMEOUT_MS = 15_000;
const MAX_STRING = 80;
const LIMITS = { terms: 8, phrases: 4, refs: 6, authors: 6, works: 6 };
const planProviderSchema = toProviderSchema(searchPlanSchema);

export type PlanOutcome = { plan: SearchPlan; unknownAuthors: string[] };

export function planSystem(authors: AuthorEntry[]): string {
  const lines = authors.map((author) => {
    const names = [...new Set([author.name, author.names?.en, author.names?.es].filter(Boolean))].join(" / ");
    return `${author.id} (${names}): ${author.works.map((work) => work.id).join(", ")}`;
  });
  return `${PLAN_SYSTEM}\n\nAuthors (id (names): work ids):\n${lines.join("\n")}`;
}

function hereLine(here: AskRequest["here"]): string {
  return here.kind === "bible"
    ? `here: Bible ${here.book} ${here.chapter} (${here.translation})`
    : `here: work ${here.work} (${here.edition})${here.locator ? ` at ${here.locator}` : ""}`;
}

export function planUser(request: AskRequest): string {
  const previous = request.history.slice(-2).map((turn) => `- ${turn.question}`);
  return [
    `question: ${request.question}`,
    `locale: ${request.locale}`,
    `scope: ${request.scope}`,
    hereLine(request.here),
    ...(request.selection ? [`selection: ${request.selection.text}`] : []),
    ...(previous.length > 0 ? ["previousQuestions:", ...previous] : []),
  ].join("\n");
}

const clampList = (list: string[], max: number) =>
  [...new Set(list.map((item) => item.trim().slice(0, MAX_STRING)).filter(Boolean))].slice(0, max);

function knownAuthor(raw: string, authors: AuthorEntry[]): boolean {
  const query = fold(raw).trim();
  return authors.some(
    (author) =>
      fold(author.id) === query ||
      [author.name, author.names?.es, author.names?.en].some((name) => {
        const folded = fold(name ?? "");
        return folded.length > 0 && (folded === query || folded.includes(query) || query.includes(folded));
      }),
  );
}

function knownWork(raw: string, authors: AuthorEntry[]): boolean {
  const query = fold(raw).trim();
  return authors.some((author) =>
    author.works.some((work) => fold(work.id) === query || fold(work.title).includes(query)),
  );
}

export function clampPlan(raw: SearchPlan, authors: AuthorEntry[]): PlanOutcome {
  const named = clampList(raw.authors, LIMITS.authors).filter((name) => fold(name).trim().length >= 3);
  const unknownAuthors = named.filter((name) => !knownAuthor(name, authors));
  return {
    plan: {
      ...raw,
      doctrines: [...new Set(raw.doctrines)],
      traditions: [...new Set(raw.traditions)],
      termsEn: clampList(raw.termsEn, LIMITS.terms),
      phrasesEn: clampList(raw.phrasesEn, LIMITS.phrases),
      termsEs: clampList(raw.termsEs, LIMITS.terms),
      phrasesEs: clampList(raw.phrasesEs, LIMITS.phrases),
      bibleRefs: clampList(raw.bibleRefs, LIMITS.refs),
      authors: named.filter((name) => !unknownAuthors.includes(name)),
      works: clampList(raw.works, LIMITS.works).filter((work) => knownWork(work, authors)),
    },
    unknownAuthors,
  };
}

export async function runPlan(
  provider: AiProvider,
  meter: Meter,
  request: AskRequest,
  authors: AuthorEntry[],
): Promise<PlanOutcome> {
  const raw = await callModel(
    provider,
    meter,
    "plan",
    {
      role: "plan",
      system: planSystem(authors),
      user: planUser(request),
      schemaName: "search_plan",
      schema: planProviderSchema,
      maxTokens: PLAN_MAX_TOKENS,
      cacheSystem: false,
    },
    searchPlanSchema,
    PLAN_TIMEOUT_MS,
  );
  return clampPlan(raw, authors);
}
