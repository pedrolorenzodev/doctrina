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

export const TRADITION_GROUPS: Record<SearchPlan["traditionGroups"][number], SearchPlan["traditions"]> = {
  protestant: ["lutheran", "reformed", "baptist", "pentecostal"],
};

const COMMON_NAME_WORDS = new Set([
  "juan",
  "john",
  "pedro",
  "peter",
  "pablo",
  "paul",
  "santo",
  "saint",
  "padre",
  "father",
]);

const wordsOf = (text: string) => new Set(fold(text).split(/[^\p{L}\p{N}]+/u));

function namedIn(asked: Set<string>, names: (string | undefined)[]): boolean {
  return names.some((name) =>
    [...wordsOf(name ?? "")].some((word) => word.length >= 5 && !COMMON_NAME_WORDS.has(word) && asked.has(word)),
  );
}

function authorNamed(raw: string, authors: AuthorEntry[], asked: Set<string>): boolean {
  const entry = authors.find((author) => fold(author.id) === fold(raw).trim());
  return namedIn(asked, entry ? [entry.name, entry.names?.es, entry.names?.en, entry.id] : [raw]);
}

function workNamed(raw: string, authors: AuthorEntry[], asked: Set<string>): boolean {
  const work = authors.flatMap((author) => author.works).find((entry) => fold(entry.id) === fold(raw).trim());
  return namedIn(asked, work ? [work.title, work.id.split("-").slice(1).join(" ")] : [raw]);
}

function sourcesOf(raw: SearchPlan, grouped: SearchPlan["traditions"]): SearchPlan["sources"] {
  const sources = [...new Set(raw.sources ?? [])];
  if (sources.length > 0) return sources;
  return raw.traditions.length > 0 || grouped.length > 0 ? ["traditions"] : [];
}

export function clampPlan(raw: SearchPlan, authors: AuthorEntry[], askedText?: string): PlanOutcome {
  const asked = askedText === undefined ? null : wordsOf(askedText);
  const named = clampList(raw.authors, LIMITS.authors)
    .filter((name) => fold(name).trim().length >= 3)
    .filter((name) => asked === null || authorNamed(name, authors, asked));
  const unknownAuthors = named.filter((name) => !knownAuthor(name, authors));
  const grouped = (raw.traditionGroups ?? []).flatMap((group) => TRADITION_GROUPS[group] ?? []);
  return {
    plan: {
      ...raw,
      doctrines: [...new Set(raw.doctrines)],
      traditions: [...new Set([...raw.traditions, ...grouped])],
      sources: sourcesOf(raw, grouped),
      traditionGroups: [...new Set(raw.traditionGroups ?? [])],
      era: raw.era ?? "any",
      termsEn: clampList(raw.termsEn, LIMITS.terms),
      phrasesEn: clampList(raw.phrasesEn, LIMITS.phrases),
      termsEs: clampList(raw.termsEs, LIMITS.terms),
      phrasesEs: clampList(raw.phrasesEs, LIMITS.phrases),
      bibleRefs: clampList(raw.bibleRefs, LIMITS.refs),
      authors: named.filter((name) => !unknownAuthors.includes(name)),
      works: clampList(raw.works, LIMITS.works).filter(
        (work) => knownWork(work, authors) && (asked === null || workNamed(work, authors, asked)),
      ),
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
  return clampPlan(raw, authors, [request.question, ...request.history.map((turn) => turn.question)].join(" "));
}
