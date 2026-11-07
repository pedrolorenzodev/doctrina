import { randomUUID } from "node:crypto";
import {
  ANSWER_PROMPT_VERSION,
  ESTIMATE_MICROS,
  type AskPhase,
  type AskRequest,
  type SearchPlan,
  type WireAnswer,
} from "@/lib/ai/contracts";
import { answerCacheKey, isCacheableAsk } from "@/lib/ai/cache-keys";
import { AiError, aiErrorBody, type AiOutcome } from "@/lib/ai/errors";
import { getAiProvider, type AiProvider } from "@/lib/ai/provider";
import type { SseSend } from "@/lib/ai/sse";
import { verifyQuote } from "@/lib/ai/verify-quote";
import { readCachedAnswer, saveAnswer } from "@/content/ai-ask/answer-cache";
import { guardRequest, settleTicket, type GuardTicket } from "@/content/ai-guard/guard";
import { buildPack } from "@/content/ai-search/pack";
import { getCorpusSearch } from "@/content/ai-search/search";
import type { AuthorEntry, CorpusSearch, EvidencePack, PackPassage, Passage } from "@/content/ai-search/types";
import { windowAround } from "@/content/ai-search/windows";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import type { AiRequestLog } from "@/content/ai-store/types";
import { newMeter, runAnswer, runSecondReading, type Meter } from "@/features/ask/answer";
import { coverageLine } from "@/features/ask/coverage-line";
import { isPastoral } from "@/features/ask/fixed-texts";
import { fatherNameForms } from "@/features/ask/lexicon";
import { fixedAnswer, mapAnswer } from "@/features/ask/map-answer";
import { runPlan } from "@/features/ask/plan";
import { verifyAnswer, type Verified } from "@/features/ask/verify-answer";

const LOGGED_QUESTION_CHARS = 500;
const SECOND_READING_MIN = 12;

export type OpenedAsk =
  | { kind: "cached"; answer: WireAnswer; ticket: GuardTicket }
  | { kind: "live"; ticket: GuardTicket; provider: AiProvider; cacheKey: string | null; corpusVersion: string };

export async function openAsk(request: Request, input: AskRequest): Promise<OpenedAsk> {
  const search = getCorpusSearch();
  const corpusVersion = await search.corpusVersion();
  let cacheKey: string | null = null;
  if (isCacheableAsk(input)) {
    cacheKey = answerCacheKey(input, corpusVersion);
    const ticket = await guardRequest(request, "cached", 0);
    const answer = await readCachedAnswer(cacheKey).catch(() => null);
    if (answer) return { kind: "cached", answer, ticket };
  }
  const provider = getAiProvider();
  if (!provider) throw new AiError("ai_disabled");
  const ticket = await guardRequest(request, "chat", ESTIMATE_MICROS.chat);
  return { kind: "live", ticket, provider, cacheKey, corpusVersion };
}

type Trace = {
  meter: Meter;
  plan: SearchPlan | null;
  verified: Verified | null;
  repaired: boolean;
  checks: Record<string, unknown>;
};

const phase = (send: SseSend, name: AskPhase, n?: number) =>
  send("phase", n === undefined ? { phase: name } : { phase: name, n });

function wordsOfSelection(text: string): string[] {
  return [...new Set(text.toLowerCase().match(/\p{L}{5,}/gu) ?? [])].slice(0, 8);
}

async function selectionPassage(input: AskRequest, search: CorpusSearch): Promise<Passage | null> {
  const selection = input.selection;
  if (!selection || selection.text.trim().length === 0) return null;
  const at = selection.at;
  let candidates: Passage[] = [];
  if (at.kind === "verse") {
    const translation = input.here.kind === "bible" ? input.here.translation : input.locale === "es" ? "rv1909" : "bsb";
    candidates = await search.lookupVerses([`${at.book}.${at.chapter}.${at.verse}`], translation, input.locale);
  } else if (at.kind === "division") {
    const terms = wordsOfSelection(selection.text);
    const hits = await search.searchPassages({
      termsEn: terms,
      phrasesEn: [],
      termsEs: terms,
      phrasesEs: [],
      collections: ["fathers"],
      doctrines: null,
      speakers: null,
      authors: null,
      works: [at.work],
      limit: 40,
      perGroup: 40,
      locale: input.locale,
    });
    candidates = hits.filter((hit) => hit.father?.editionId === at.edition && hit.father.locator === at.locator);
  }
  return (
    candidates.find((passage) => {
      const result = verifyQuote(passage.text, selection.text);
      return result.ok || passage.text.normalize("NFC").includes(selection.text.normalize("NFC").trim());
    }) ?? null
  );
}

function withSelection(pack: EvidencePack, passage: Passage | null): EvidencePack {
  if (!passage || [...pack.passages, ...pack.extra].some((item) => item.key === passage.key)) return pack;
  const id = `P${pack.passages.length + pack.extra.length + 1}`;
  const selected: PackPassage = { ...passage, id, ...windowAround(passage.text, wordsOfSelection(passage.text)) };
  return { ...pack, passages: [selected, ...pack.passages] };
}

function fatherNamesOf(authors: AuthorEntry[]): string[][] {
  return fatherNameForms(authors.flatMap((author) => [author.name, author.names?.es ?? "", author.names?.en ?? ""]));
}

async function live(
  input: AskRequest,
  opened: Extract<OpenedAsk, { kind: "live" }>,
  send: SseSend,
  trace: Trace,
): Promise<WireAnswer> {
  const locale = input.locale;
  if (isPastoral(input.question)) return fixedAnswer("pastoral", input.question, locale);

  const search = getCorpusSearch();
  phase(send, "plan");
  const authors = await search.authors();
  const { plan, unknownAuthors } = await runPlan(opened.provider, trace.meter, input, authors);
  trace.plan = plan;
  const answerLocale = plan.answerLanguage;
  if (plan.intent === "pastoral") return fixedAnswer("pastoral", input.question, answerLocale);
  if (plan.intent === "out_of_scope" || plan.intent === "injection") {
    return fixedAnswer("out_of_scope", input.question, answerLocale);
  }

  phase(send, "search");
  const built = await buildPack(plan, input, search);
  const pack = withSelection(built, await selectionPassage(input, search).catch(() => null));
  const coverage = {
    ...pack.coverage,
    missingAuthors: [...new Set([...pack.coverage.missingAuthors, ...unknownAuthors])],
  };
  const sources = pack.passages.filter((passage) => passage.collection !== "mine");
  phase(send, "read", sources.length);

  let verified: Verified;
  if (sources.length === 0) {
    verified = {
      kind: "not_found",
      sections: [],
      words: [],
      prose: "",
      followups: [],
      total: 0,
      failed: [],
      removed: [],
      emptiedTraditions: [],
      wordsDropped: [],
      anchorMisses: 0,
      toppedUp: 0,
    };
  } else {
    phase(send, "write");
    const options = {
      depth: plan.depth,
      fatherNames: fatherNamesOf(authors),
      language: plan.answerLanguage,
      terms: [...plan.termsEn, ...plan.termsEs],
      phrases: [...plan.phrasesEn, ...plan.phrasesEs],
      topUp: { namedAuthors: plan.authors.length > 0, namedTraditions: plan.traditions.length > 0 },
    };
    let model = await runAnswer(opened.provider, trace.meter, input, plan, pack.passages);
    if (model.kind === "not_found" && sources.length >= SECOND_READING_MIN && coverage.missingAuthors.length === 0) {
      trace.checks.secondReading = true;
      model = await runSecondReading(opened.provider, trace.meter, input, plan, pack.passages);
    }
    phase(send, "check");
    verified = verifyAnswer(model, pack.passages, options);
    trace.verified = verified;
    const shown = verified.sections.reduce((sum, section) => sum + section.quotes.length, 0);
    if (verified.kind !== "not_found" && shown === 0) throw new AiError("ai_verify_failed");
  }

  const lost = new Set(verified.emptiedTraditions);
  const scope = coverageLine(
    {
      ...coverage,
      traditions: coverage.traditions.map((entry) =>
        lost.has(entry.tradition) &&
        !verified.sections.some((section) => section.about === `tradition:${entry.tradition}`)
          ? { ...entry, status: "none" as const }
          : entry,
      ),
    },
    input,
    answerLocale,
  );
  const notFound = verified.kind === "not_found" || verified.sections.length === 0;
  const extra = notFound ? [...sources, ...pack.extra] : pack.extra;
  const wire = mapAnswer({
    verified,
    passages: pack.passages,
    question: input.question,
    scope,
    locale: answerLocale,
    more: extra.some((passage) => passage.collection !== "mine"),
  });
  const answerId = await saveAnswer({
    cacheKey: opened.cacheKey,
    locale: answerLocale,
    models: trace.meter.models,
    corpusVersion: opened.corpusVersion,
    answer: wire,
    extra,
  }).catch(() => null);
  return { ...wire, answerId: answerId ?? randomUUID(), more: answerId ? wire.more : false };
}

function logRow(
  input: AskRequest,
  trace: Trace,
  outcome: AiOutcome,
  answer: WireAnswer | null,
  cacheHit: boolean,
): AiRequestLog {
  const verified = trace.verified;
  return {
    route: "ask",
    locale: input.locale,
    outcome,
    intent: trace.plan?.intent ?? (answer?.kind === "pastoral" ? "pastoral" : null),
    doctrines: trace.plan?.doctrines ?? null,
    promptVersion: ANSWER_PROMPT_VERSION,
    models: Object.keys(trace.meter.models).length > 0 ? trace.meter.models : null,
    usage: Object.keys(trace.meter.usage).length > 0 ? trace.meter.usage : null,
    costMicros: trace.meter.costMicros,
    latencyMs: trace.meter.latencyMs,
    quotesTotal: verified?.total ?? null,
    quotesFailed: verified?.failed.length ?? null,
    repaired: verified ? trace.repaired : null,
    cacheHit,
    answerId: answer?.answerId ?? null,
    question: input.question.slice(0, LOGGED_QUESTION_CHARS),
    checks: {
      ...trace.checks,
      ...(verified
        ? {
            failed: verified.failed.map((item) => item.reason),
            removed: verified.removed.map((item) => item.reason),
            wordsDropped: verified.wordsDropped,
            anchorMisses: verified.anchorMisses,
            toppedUp: verified.toppedUp,
            depth: trace.plan?.depth ?? null,
            quotesShown: answer?.blocks.length ?? 0,
          }
        : {}),
    },
  };
}

export async function answerQuestion(input: AskRequest, opened: OpenedAsk, send: SseSend): Promise<void> {
  const trace: Trace = { meter: newMeter(), plan: null, verified: null, repaired: false, checks: {} };
  const started = Date.now();
  let outcome: AiOutcome = "ok";
  let answer: WireAnswer | null = null;
  try {
    if (opened.kind === "cached") {
      answer = opened.answer;
      outcome = "cache_hit";
      send("answer", answer);
      return;
    }
    answer = await live(input, opened, send, trace);
    if (answer.fixed) {
      outcome = "fixed";
      answer = { ...answer, answerId: randomUUID() };
    }
    send("answer", answer);
  } catch (error) {
    const code = error instanceof AiError ? error.code : "ai_misconfigured";
    outcome = code;
    send("error", aiErrorBody(code, input.locale));
  } finally {
    trace.meter.latencyMs.total = Date.now() - started;
    await settleTicket(opened.ticket, trace.meter.costMicros).catch(() => undefined);
    await getAiStore()
      .logRequest(logRow(input, trace, outcome, answer, opened.kind === "cached"))
      .catch(() => undefined);
  }
}
