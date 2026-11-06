# Frozen contracts between the AI blocks

> **AMENDED 2026-11-06:** read `amendment-2026-11-06.md` (rich answers by default, `depth`, the reader's notes are not sources). Where it differs from this file, it wins; §1 and §3 below already carry its numbers.


Version **contracts-2026-11-06.1**. Every block prompt points here. A block may **add** optional fields or new files it owns; it may **not** rename, remove or change the meaning of anything below without a new version of this file agreed with Pedro (record the change at the end, §13). Where code is shown, it is the exact shape to implement (names, fields, literals), not a sketch. Explanations: `chat-design.md`, `simplifier-design.md`, `abuse-and-cost-control.md`, `schema-and-api.md`.

Repo rules that apply to all of it (AGENTS): English names; no comments except `TODO`, tool silencers and the one-line guard; named exports; `@/` imports; layers `app → features → content | components → lib`, no feature imports another feature, `components` never imports `content`.

## 1. Versions and constants (`src/lib/ai/contracts.ts`, block F)
```ts
export const CONTRACTS_VERSION = "contracts-2026-11-06.1";
export const PLAN_PROMPT_VERSION = "plan-2026-11-06.1";
export const ANSWER_PROMPT_VERSION = "chat-2026-11-06.1";
export const SIMPLIFY_PROMPT_VERSION = "simplify-2026-11-06.1";
export const JUDGE_PROMPT_VERSION = "judge-2026-11-06.1";
export const MAX_QUESTION_CHARS = 600;
export const MAX_HISTORY_CHARS = 1500;
export const MAX_NOTES = 20;
export const MAX_NOTES_CHARS = 4000;
export const MAX_SELECTION_CHARS = 1000;
export const MAX_TURNS = 6;
export const MAX_QUOTES = 24;
export const MAX_QUOTES_BRIEF = 6;
export const MAX_PROSE_WORDS = 150;
export const MAX_PROSE_WORDS_BRIEF = 60;
export const MAX_FOLLOWUPS = 3;
export const PACK_TOKEN_BUDGET = 24000;
export const PACK_TOKEN_BUDGET_BRIEF = 8000;
export const WINDOW_CHARS = 1200;
export const SIMPLIFY_MAX_WORDS = 1500;
export const SIMPLIFY_MAX_CHARS = 9000;
export const SIMPLIFY_SINGLE_CALL_WORDS = 600;
```

## 2. Interfaces

### 2.1 Provider and model isolation (`src/lib/ai/provider.ts`, block F)
```ts
export type AiRole = "plan" | "answer" | "simplify" | "judge";
export type AiProviderId = "anthropic" | "fake" | "replay";
export type Effort = "low" | "medium" | "high";
export type JsonSchema = Record<string, unknown>;

export type AiUsage = {
  inputTokens: number;
  cachedInputTokens: number;
  cacheWriteTokens: number;
  outputTokens: number;
};

export type AiCallInput = {
  role: AiRole;
  system: string;
  user: string;
  schemaName: string;
  schema: JsonSchema;
  maxTokens: number;
  cacheSystem: boolean;
  signal?: AbortSignal;
  replayKey?: string;
};

export type AiCallResult = {
  json: unknown;
  usage: AiUsage;
  provider: AiProviderId;
  model: string;
  costMicros: number;
  latencyMs: number;
  stopReason: "end" | "max_tokens" | "refusal" | "other";
};

export interface AiProvider {
  readonly id: AiProviderId;
  call(input: AiCallInput): Promise<AiCallResult>;
}

export function getAiProvider(): AiProvider | null;
```
- `getAiProvider()` (in `provider-env.ts`) resolves `AI_PROVIDER`: `anthropic` (needs `ANTHROPIC_API_KEY`), `fake`, `replay`, `off` → `null`. Unset: `anthropic` if the key exists; else `fake` when `NODE_ENV !== "production"`; else `null`. `AI_ENABLED=off` → `null`.
- `src/lib/ai/models.ts`: `modelFor(role: AiRole): { model: string; effort: Effort }` from `AI_MODEL_PLAN` (default `claude-haiku-5-5`, `low`), `AI_MODEL_ANSWER` (`claude-haiku-5-5`, `medium`), `AI_MODEL_SIMPLIFY` (`claude-haiku-5-5`, `low`), `AI_MODEL_JUDGE` (`claude-haiku-5-5`, `low`). An env value may carry the effort as `model@effort` (`claude-sonnet-5-5@medium`).
- `src/lib/ai/prices.ts`: `priceOf(model): { inputPerMTok: number; cachedPerMTok: number; cacheWritePerMTok: number; outputPerMTok: number } | null` (USD, rows from `provider-and-models.md` §2 for `claude-haiku-5-5` (≤ 100K prompt), `claude-sonnet-5-5`, `claude-opus-5-5`, and `fake` = all zero); `costMicros(model, usage): number` (rounded up). **A model with no price row throws `AiError("ai_misconfigured")`** before any call.
- The Anthropic adapter (`anthropic-provider.ts`) is the **only** file that imports `@anthropic-ai/sdk`. It sends `model`, `max_tokens`, `system` as one text block with `cache_control: { type: "ephemeral" }` when `cacheSystem`, one user message, `output_config: { effort, format: { type: "json_schema", schema } }`, `maxRetries: 1`, the signal; it reads `usage.input_tokens`, `cache_read_input_tokens`, `cache_creation_input_tokens`, `output_tokens`, and the first `text` block's JSON. `stop_reason: "refusal"` → `stopReason: "refusal"` (the caller maps it to `ai_refused`); `max_tokens` → `stopReason: "max_tokens"` (the caller retries once with 1.5× `maxTokens`). SDK errors map: 402/`billing_error` → `ai_budget_exhausted` (and the alert «provider credit exhausted»), 429 → `ai_provider_busy`, 529/5xx/network → `ai_provider_down`, 400 → `ai_misconfigured`. The builder verifies the exact SDK names against the installed `@anthropic-ai/sdk` (the `claude-api` skill: `client.messages.create`, `output_config.format`).
- `toProviderSchema(zodSchema): JsonSchema` (in `contracts.ts`): Zod 4 `z.toJSONSchema`, then every object gets `additionalProperties: false` and every property listed in `required`, and the keywords the provider rejects are removed (`minLength`, `maxLength`, `minimum`, `maximum`, `maxItems`, `minItems > 1`, `pattern`). Lengths are enforced by the server after parsing.

### 2.2 Fake and replay providers (block F; how every block runs without a funded key)
- **`fake`** is deterministic and free. By role:
  - `plan`: `{ intent }` from regexes (pastoral words → `pastoral`; «quién tiene razón|who is right|herej|heresy|qué debo creer» → `verdict_request`; «ignora|ignore (all|previous)|system prompt|eres ahora|you are now» → `injection`; «receta|recipe|código|code|chiste|joke» → `out_of_scope`; else `evidence`); `doctrines` from keywords (eucarist|eucharist|cena|supper → `eucharist`; bautism|baptism → `baptism`; papa|pope|papacy|pedro|peter → `papacy`; escritura|scripture|sola → `sola-scriptura`; justific → `justification`); `termsEn`/`termsEs` = the question's words of ≥ 5 letters; empty arrays elsewhere; `answerLanguage` from «¿» or Spanish stop-words.
  - `answer`: reads the passage blocks from the `user` text (`<passage id="P…" … >…</passage>`), takes up to 6 passages in order, quotes the **first 12 words of each window** (always literal), prose «{Who} cita este pasaje {P1}.» per section in the answer language (always attributive), `kind` = `disputed` when the user text contains `intent: verdict_request`, else `evidence` (or `not_found` with no passages); followups empty.
  - `simplify`: returns `clear` = the numbered sentences unchanged and `very` = the same (always passes the checks).
  - `judge`: all scores pass.
  - usage: input = characters / 4, output = 200, cost 0.
- **`replay`** reads `${AI_REPLAY_DIR}/<replayKey>.json` (an `AiCallResult` recorded earlier); missing file → `AiError("ai_provider_down")`. **Recording:** with `AI_RECORD_DIR` set, the real adapter writes every result as `<replayKey>.json`. `replayKey = sha256(role | schemaName | system | user)` hex, computed by the caller.

### 2.3 Store (`src/content/ai-store/types.ts`, block F defines; F implements `memory`, DB implements `supabase`)
```ts
export type AiSettings = {
  enabled: boolean;
  chatEnabled: boolean;
  simplifyEnabled: boolean;
  corpusVersion: string | null;
};

export type SpendState = { reservedMicros: number; spentMicros: number };

export type SimplificationRow = {
  cacheKey: string;
  address: SimplifyAddress;
  textSha256: string;
  sourceLang: "es" | "en";
  outputLang: "es" | "en";
  model: string;
  promptVersion: string;
  original: string[];
  clear: string[];
  very: string[];
  status: "generated" | "reviewed" | "rejected";
  checks: Record<string, unknown>;
  tokensIn: number;
  tokensOut: number;
  costMicros: number;
};

export type StoredAnswer = {
  answerId: string;
  cacheKey: string | null;
  locale: "es" | "en";
  promptVersion: string;
  models: Record<string, string>;
  corpusVersion: string;
  answer: WireAnswer;
  pack: StoredPack | null;
};

export type StoredPack = { extra: PackPassage[] };

export type AiRequestLog = {
  route: "ask" | "ask-more" | "simplify" | "eval";
  locale: "es" | "en" | null;
  outcome: AiOutcome;
  intent: string | null;
  doctrines: string[] | null;
  promptVersion: string | null;
  models: Record<string, string> | null;
  usage: Record<string, AiUsage> | null;
  costMicros: number;
  latencyMs: Record<string, number> | null;
  quotesTotal: number | null;
  quotesFailed: number | null;
  repaired: boolean | null;
  cacheHit: boolean;
  answerId: string | null;
  question: string | null;
  checks: Record<string, unknown> | null;
};

export interface AiStore {
  settings(): Promise<AiSettings>;
  take(day: string, bucket: string, key: string, limit: number): Promise<boolean>;
  reserve(day: string, month: string, estimateMicros: number, dailyCapMicros: number, monthlyCapMicros: number): Promise<boolean>;
  settle(day: string, month: string, reservedMicros: number, actualMicros: number): Promise<void>;
  spend(day: string, month: string): Promise<{ day: SpendState; month: SpendState }>;
  getSimplification(cacheKey: string): Promise<SimplificationRow | null>;
  putSimplification(row: SimplificationRow): Promise<void>;
  countSimplificationHit(cacheKey: string): Promise<void>;
  getAnswerByKey(cacheKey: string): Promise<StoredAnswer | null>;
  getAnswer(answerId: string): Promise<StoredAnswer | null>;
  putAnswer(row: Omit<StoredAnswer, "answerId">): Promise<string>;
  countAnswerHit(answerId: string): Promise<void>;
  logRequest(row: AiRequestLog): Promise<void>;
  markAlert(name: string, period: string): Promise<boolean>;
  cleanup(): Promise<void>;
}

export function getAiStore(): AiStore;
```
`get-ai-store.ts` returns the memory store when `AI_STORE=memory` or `SUPABASE_SECRET_KEY` is missing, else the Supabase store (one instance per process). The memory store keeps everything in `Map`s, starts with `AiSettings` all enabled and `corpusVersion: "fixture"`, and accepts a seed (`seedSimplifications(rows)`) used by block S-SRV for the mock texts. Day and month strings are Buenos Aires dates: `dayKey(now)` = `YYYY-MM-DD`, `monthKey(now)` = `YYYY-MM` (in `src/lib/ai/dates.ts`, block F). Tables and SQL: `migrations/*.sql`.

### 2.4 Corpus search (`src/content/ai-search/types.ts`, block RET)
```ts
export type Collection = "bible" | "fathers" | "tradition" | "doctrine" | "glossary" | "mine";
export type Speaker = "shared" | "site" | "reader" | TraditionId;
export type Licence = "public-domain" | "short-quote" | "unconfirmed" | "site-authored" | "cc0-translation" | "reader";

export type Passage = {
  key: string;
  collection: Collection;
  speaker: Speaker;
  doctrine: DoctrineId | null;
  lang: "es" | "en" | "la" | "de" | "el";
  title: string;
  who: string;
  locatorLabel: string;
  editionLabel: string;
  licence: Licence;
  translatedByAi: boolean;
  maxQuoteWords: number;
  href: string | null;
  refs: string[];
  text: string;
  author: string | null;
  year: number | null;
  father: { workId: string; editionId: string; locator: string } | null;
  bible: { book: string; chapter: number; verse: number; verseEnd: number | null; translationId: string } | null;
};

export type PackPassage = Passage & { id: string; window: string; windowStart: number };

export type Coverage = {
  collections: { collection: Collection; count: number }[];
  traditions: { tradition: TraditionId; status: "found" | "none" | "no-page" }[];
  doctrines: DoctrineId[];
  missingAuthors: string[];
  bibleEdition: string;
  fatherWorks: number;
};

export type EvidencePack = { passages: PackPassage[]; extra: PackPassage[]; coverage: Coverage };

export interface CorpusSearch {
  readonly id: "supabase" | "fixture";
  searchPassages(query: PassageQuery): Promise<(Passage & { rank: number })[]>;
  searchVerses(query: VerseQuery): Promise<(Passage & { rank: number })[]>;
  lookupVerses(refs: string[], translationId: string): Promise<Passage[]>;
  traditionPassages(doctrine: DoctrineId): Promise<Passage[]>;
  authors(): Promise<{ id: string; name: string; works: { id: string; title: string }[] }[]>;
  corpusVersion(): Promise<string>;
}

export type PassageQuery = {
  termsEn: string[]; phrasesEn: string[]; termsEs: string[]; phrasesEs: string[];
  collections: Collection[]; doctrines: DoctrineId[] | null; speakers: Speaker[] | null;
  authors: string[] | null; works: string[] | null; limit: number; perGroup: number;
};

export type VerseQuery = {
  lang: "es" | "en"; terms: string[]; phrases: string[]; books: string[] | null; chapter: number | null; limit: number;
};

export function getCorpusSearch(): CorpusSearch;
export function buildPack(plan: SearchPlan, request: AskRequest, search: CorpusSearch): Promise<EvidencePack>;
```
**Passage keys (`Passage.key` = `ai_passages.source_key`), frozen because the evaluation matches them by prefix:** `fathers:<workId>:<editionId>:<locator>:<part>`; `tradition:<doctrine>:<tradition>:<definition|statementId>` for the page's own paragraphs; `tradition:<doctrine>:<tradition>:cite:<citationId>:<excerptIndex>:<lang>` for a registry excerpt cited by that page (an excerpt cited by two doctrines' pages has two rows); `doctrine:<doctrine>:<section>:<id>`; `glossary:<termSlug>:<tradition>`; `bible:<translationId>:<book>.<chapter>.<verse>[-<verseEnd>]` (OSIS book ids as in `books.id`: `John`, `1Cor`, `Matt`); `mine:<n>`. Evaluation `mustInclude` entries without a prefix (`John.6.53`, `1Cor.11`) match the OSIS part of `bible:` keys by prefix.

`TraditionId`, `DoctrineId` come from `@/content/model/ids`. Passage ids in a pack are `P1`, `P2`, … in pack order (canonical order: Bible by book order, Fathers by year, traditions in `traditionIds` order, doctrine, glossary, mine). `traditionIds` has six entries; the five with pages and Pentecostal (no page → status `no-page`).

## 3. Model-facing schemas (Zod 4 in `src/lib/ai/contracts.ts`, block F)
```ts
export const searchPlanSchema = z.object({
  intent: z.enum(["evidence", "verdict_request", "pastoral", "out_of_scope", "injection"]),
  answerLanguage: z.enum(["es", "en"]),
  doctrines: z.array(z.enum(["eucharist", "baptism", "papacy", "sola-scriptura", "justification"])),
  traditions: z.array(z.enum(["catholic", "orthodox", "lutheran", "reformed", "baptist", "pentecostal"])),
  termsEn: z.array(z.string()),
  phrasesEn: z.array(z.string()),
  termsEs: z.array(z.string()),
  phrasesEs: z.array(z.string()),
  bibleRefs: z.array(z.string()),
  authors: z.array(z.string()),
  works: z.array(z.string()),
  followsPrevious: z.boolean(),
  depth: z.enum(["rich", "brief"]),
});
export type SearchPlan = z.infer<typeof searchPlanSchema>;

export const modelAnswerSchema = z.object({
  kind: z.enum(["evidence", "disputed", "not_found"]),
  sections: z.array(z.object({
    about: z.string(),
    quotes: z.array(z.object({ passage: z.string(), quote: z.string() })),
  })),
  words: z.array(z.object({
    tradition: z.string(), passage: z.string(), words: z.string(), quote: z.string(),
  })),
  prose: z.string(),
  followups: z.array(z.string()),
});
export type ModelAnswer = z.infer<typeof modelAnswerSchema>;

export const simplificationSchema = z.object({ clear: z.array(z.string()), very: z.array(z.string()) });

export const judgeSchema = z.object({
  neutral: z.boolean(), attributed: z.boolean(), fathersUnassigned: z.boolean(),
  usefulness: z.enum(["1", "2", "3"]), notes: z.string(),
});
```
Server-side limits after parsing (not in the schema): plan arrays ≤ 8 terms / 4 phrases / 6 refs / 6 authors / 6 works, each string ≤ 80 chars; `about` ∈ `bible | fathers | doctrine | glossary | mine | tradition:<TraditionId>`; ≤ `MAX_QUOTES` (`MAX_QUOTES_BRIEF` when `plan.depth` is `brief`); prose ≤ `MAX_PROSE_WORDS` (`MAX_PROSE_WORDS_BRIEF` for brief); ≤ `MAX_FOLLOWUPS` followups of ≤ 140 chars; `words.words` 2–8 words.

## 4. The chat wire format (`src/lib/ai/contracts.ts`, block F)
```ts
export const askRequestSchema = z.object({
  question: z.string().min(1).max(MAX_QUESTION_CHARS),
  locale: z.enum(["es", "en"]),
  scope: z.enum(["chapter", "work", "bible", "fathers", "all"]),
  here: z.discriminatedUnion("kind", [
    z.object({ kind: z.literal("bible"), book: z.string(), chapter: z.number().int().positive(), translation: z.string() }),
    z.object({ kind: z.literal("father"), work: z.string(), edition: z.string(), locator: z.string().nullable() }),
  ]),
  selection: z.object({
    text: z.string().max(MAX_SELECTION_CHARS),
    at: z.discriminatedUnion("kind", [
      z.object({ kind: z.literal("verse"), book: z.string(), chapter: z.number().int(), verse: z.number().int() }),
      z.object({ kind: z.literal("division"), work: z.string(), edition: z.string(), locator: z.string() }),
      z.object({ kind: z.literal("answer") }),
    ]),
  }).nullable(),
  history: z.array(z.object({ question: z.string().max(MAX_QUESTION_CHARS), prose: z.string().max(MAX_HISTORY_CHARS) })).max(2),
  notes: z.array(z.object({ text: z.string().max(1000), ref: z.string().nullable() })).max(MAX_NOTES),
  turn: z.number().int().min(1).max(MAX_TURNS),
});
export type AskRequest = z.infer<typeof askRequestSchema>;

export type AnswerKind = "evidence" | "disputed" | "not_found" | "pastoral" | "out_of_scope" | "more";

export type WireQuote = {
  id: string;
  key: string;
  who: string;
  work: string;
  text: string;
  edition: string;
  translatedByAi: boolean;
  speaker: string;
  father?: { workId: string; at: string; anchor: string; original: string };
  bible?: { book: string; chapter: number; verse: number; verseEnd?: number };
  href?: string;
  context?: { before: string; after: string };
};

export type WireAnswer = {
  answerId: string;
  kind: AnswerKind;
  question: string;
  scope: string;
  plain?: string;
  disputed?: string;
  words?: { tradition: string; source: string; words: string; quote: string }[];
  blocks: { quote: string; head?: string }[];
  prose?: string;
  quotes: Record<string, WireQuote>;
  consulted: string[];
  followups: string[];
  more: boolean;
  fixed?: boolean;
  cached: boolean;
  promptVersion: string;
};

export type AskPhase = "plan" | "search" | "read" | "write" | "check";
```
- `WireQuote.key` is the passage key (§2.4); the evaluation and the logs use it.
- `WireQuote` is structurally a superset of the drawer's `Quote` (`src/features/reader-ai/quotes.ts`): `who`, `work`, `text`, `edition`, `father`, `bible` mean the same. `work` = the locator label shown on the source line («A los esmirniotas 6.2», «CEC 1374», «Juan 6:53»); `edition` = the edition and licence wording the citation window shows (with «Traducido con IA» first when `translatedByAi`); `father.original` = `""` for live answers; `context` = up to 200 characters before and after the quoted slice inside the passage (the citation window shows the quote in context).
- `prose` uses the token `{q:<quoteId>}` for every citation; `quoteId` is a key of `quotes`. The drawer's existing `{<verse>}` token is not used by live answers.
- `consulted` lists every pack passage's quote id (passages that were not quoted are still in `quotes`, so the «Consultó N textos» list can open them).
- `scope` is the coverage line (`chat-design.md` §10), built by the server in the answer language.
- **SSE** from `POST /api/ai/ask` (`Content-Type: text/event-stream`; helper `src/lib/ai/sse.ts`): `event: phase` / `data: {"phase":"search","n":24}` (several), then exactly one of `event: answer` / `data: <WireAnswer>` or `event: error` / `data: <AiErrorBody>`. Cache hits send `answer` at once without phases.
- `POST /api/ai/ask/more` body `{ answerId: string, offset: number }` → `{ blocks, quotes, consulted, more }` (`AskMoreResponse`): the next 8 unused passages of that answer's pack as quote blocks (each quote = the window's first sentence(s) up to the passage's `maxQuoteWords`, literal by construction), no model call; `404 ai_not_found` once the pack has expired (24 h).

## 5. The simplifier wire format (`src/lib/ai/contracts.ts`, block F)
```ts
export const simplifyAddressSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("father"), work: z.string(), edition: z.string(), locator: z.string() }),
  z.object({ kind: z.literal("statement"), doctrine: z.string(), tradition: z.string(), id: z.string() }),
  z.object({ kind: z.literal("doctrine"), doctrine: z.string(), section: z.string(), id: z.string() }),
  z.object({ kind: z.literal("glossary"), term: z.string(), tradition: z.string() }),
]);
export type SimplifyAddress = z.infer<typeof simplifyAddressSchema>;

export const simplifyRequestSchema = z.object({ address: simplifyAddressSchema, locale: z.enum(["es", "en"]) });
export type SimplifyRequest = z.infer<typeof simplifyRequestSchema>;

export type SimplifyResponse = {
  lang: "es" | "en";
  original: string[];
  clear: string[];
  very: string[];
  status: "generated" | "reviewed";
  cached: boolean;
};

export function addressId(address: SimplifyAddress): string;
```
- `SimplifyResponse` extends the existing `SimplifiedEntry` (`src/lib/simplifier-types.ts`: `lang`, `original`, `clear`, `very`); the approved panel renders it unchanged.
- `addressId` returns the ids the test build already uses, so the in-memory «streamed once» and level memory keep working: `father` → `<work>/<locator>`; `statement` → `<doctrine>/<tradition>/<id>` (`id` = `definition` or the statement id); `doctrine` → `<doctrine>/02/<section>/<id>`; `glossary` → `glossary/<term>/<tradition>`.
- `GET /api/ai/simplify?address=<base64url(JSON)>&locale=es&cacheOnly=1` → 200 `SimplifyResponse` (cache hit) or 204.
- `canSimplify(text: string): boolean` (`src/lib/ai/simplify-limits.ts`, block F): ≤ `SIMPLIFY_MAX_WORDS` words and ≤ `SIMPLIFY_MAX_CHARS` characters.

## 6. Verification lexicons (block C-SRV, `src/features/ask/lexicon.ts`; block S-SRV, `src/features/simplify/checks.ts`)
Case-insensitive, word-boundary regexes; a hit removes the sentence (chat prose) or flags the unit (simplifier):
- **Verdict (es):** `la verdad es`, `claramente`, `evidentemente`, `es evidente`, `demuestra`, `prueba que`, `de hecho`, `correctamente`, `erróneamente`, `equivocad[oa]s?`, `acertad[oa]`, `es bíblic[oa]`, `no es bíblic[oa]`, `la (posición|lectura) correcta`, `creemos`, `nuestra fe`, `debemos creer`, `debés creer`, `herej[ií]a` (outside a quote).
- **Verdict (en):** `the truth is`, `clearly`, `evidently`, `it is evident`, `proves`, `demonstrates`, `in fact`, `correctly`, `wrongly`, `mistaken`, `is (un)?biblical`, `the correct (view|reading)`, `we believe`, `our faith`, `you should believe`, `heresy` (outside a quote).
- **Father assigned to a tradition:** a Father's display name (from `authors()`) within 6 words of `católic[oa]|ortodox[oa]|protestante|evangélic[oa]|luteran[oa]|reformad[oa]|bautista|pentecostal|catholic|orthodox|protestant|evangelical|lutheran|reformed|baptist`.
- **Simplifier added claims:** a unit that starts with `esto significa|en otras palabras|es decir que|this means|in other words|that is to say` with no such phrase in its original sentence.

## 7. Errors and the messages the UI shows (`src/lib/ai/errors.ts`, block F)
```ts
export type AiErrorCode =
  | "ai_bad_request" | "ai_not_found" | "ai_not_simplifiable" | "ai_disabled" | "ai_budget_exhausted"
  | "ai_daily_limit" | "ai_rate_limited" | "ai_bot_check_failed" | "ai_provider_busy" | "ai_provider_down"
  | "ai_refused" | "ai_verify_failed" | "ai_simplify_failed" | "ai_misconfigured" | "ai_timeout";
export type AiErrorBody = { code: AiErrorCode; message: string; retry: boolean };
export class AiError extends Error { constructor(readonly code: AiErrorCode) { super(code); } }
export const aiErrorStatus: Record<AiErrorCode, number>;
export function aiErrorBody(code: AiErrorCode, locale: "es" | "en", feature?: "chat" | "simplify"): AiErrorBody;
export type AiOutcome = "ok" | "cache_hit" | "fixed" | AiErrorCode;
```
| Code | HTTP | retry | es (chat) | en (chat) |
|---|---|---|---|---|
| `ai_bad_request` | 400 | no | «No pude leer la pregunta. Probá escribirla de nuevo.» | «I could not read the question. Try writing it again.» |
| `ai_not_found` | 404 | no | «Esta respuesta ya no está disponible. Hacé la pregunta de nuevo.» | «This answer is no longer available. Ask the question again.» |
| `ai_not_simplifiable` | 400 | no | «Este párrafo no se puede simplificar.» | «This paragraph cannot be simplified.» |
| `ai_disabled` | 503 | no | «La IA está apagada por ahora. Las preguntas sugeridas siguen funcionando.» | «The AI is switched off for now. The suggested questions still work.» |
| `ai_budget_exhausted` | 503 | no | «La IA está pausada por hoy porque se usó todo el presupuesto del día. Las preguntas sugeridas siguen funcionando.» | «The AI is paused for today because the day's budget is used up. The suggested questions still work.» |
| `ai_daily_limit` | 429 | no | «Llegaste al límite de preguntas de hoy. Mañana podés seguir; las preguntas sugeridas siguen funcionando.» | «You reached today's limit of questions. You can continue tomorrow; the suggested questions still work.» |
| `ai_rate_limited` | 429 | yes | «Hiciste varias preguntas seguidas. Esperá un minuto y volvé a intentar.» | «You asked several questions in a row. Wait a minute and try again.» |
| `ai_bot_check_failed` | 403 | no | «No pudimos comprobar que la pregunta viene de una persona. Recargá la página y probá de nuevo.» | «We could not check that the question comes from a person. Reload the page and try again.» |
| `ai_provider_busy` | 503 | yes | «El servicio de IA está ocupado. Probá de nuevo en unos segundos.» | «The AI service is busy. Try again in a few seconds.» |
| `ai_provider_down` | 503 | yes | «El servicio de IA no responde. Probá de nuevo más tarde.» | «The AI service is not responding. Try again later.» |
| `ai_refused` | 422 | no | «El modelo no quiso responder esta pregunta. Probá formularla de otra manera.» | «The model declined this question. Try asking it another way.» |
| `ai_verify_failed` | 422 | yes | «No encontré citas que pudiera comprobar en las fuentes, así que no hay respuesta.» | «I found no quotes I could check against the sources, so there is no answer.» |
| `ai_simplify_failed` | 422 | yes | «No se pudo simplificar este párrafo sin cambiar su sentido. El original está arriba.» | «This paragraph could not be simplified without changing its meaning. The original is above.» |
| `ai_misconfigured` | 500 | no | «Algo falló de nuestro lado. Ya quedó registrado.» | «Something failed on our side. It has been logged.» |
| `ai_timeout` | 504 | yes | «La respuesta tardó demasiado. Probá de nuevo.» | «The answer took too long. Try again.» |
The simplifier uses the same table with these replacements: `ai_daily_limit` → «Llegaste al límite de simplificaciones de hoy.» / «You reached today's limit of simplifications.»; `ai_rate_limited` → «Pediste varias simplificaciones seguidas. Esperá un minuto.» / «You asked for several simplifications in a row. Wait a minute.»; `ai_disabled` / `ai_budget_exhausted` → «La simplificación está apagada por ahora.» / «Simplification is switched off for now.» and «La simplificación está pausada por hoy.» / «Simplification is paused for today.». `aiErrorBody(code, locale, "simplify")` takes an optional third argument `"chat" | "simplify"` (default `"chat"`).

**Fixed answer texts** (not errors; `src/features/ask/fixed-texts.ts`, block C-SRV): pastoral = the existing text of `src/features/reader-ai/father-script.ts` (`pastoral.plain`) and its English translation «A tool cannot do this. To ask for confession, absolution or a blessing, look for a priest or a pastor in your community. If you are going through a very hard moment, talk today with someone you trust or with a help service in your country.»; out of scope, not found, disputed: `chat-design.md` §7.4; the privacy line: `chat-design.md` §17.

## 8. Environment variables (block F writes `.env.example` with all of them, empty or with the default)
| Name | Values (default) | Read by | Secret |
|---|---|---|---|
| `ANTHROPIC_API_KEY` | key | F | **yes** |
| `AI_PROVIDER` | `anthropic` \| `fake` \| `replay` \| `off` (see §2.1) | F | no |
| `AI_STORE` | `supabase` \| `memory` (supabase when the secret key exists) | F | no |
| `AI_ENABLED` | `on` \| `off` (`on`) | F, GUARD | no |
| `AI_MODEL_PLAN`, `AI_MODEL_ANSWER`, `AI_MODEL_SIMPLIFY`, `AI_MODEL_JUDGE` | `model[@effort]` (§2.1 defaults) | F | no |
| `AI_DAILY_BUDGET_USD` | `0.25` | GUARD | no |
| `AI_MONTHLY_BUDGET_USD` | `4.00` | GUARD | no |
| `AI_CHAT_PER_VISITOR_DAY` / `AI_CHAT_PER_IP_DAY` / `AI_CHAT_PER_IP_MINUTE` | `12` / `40` / `4` | GUARD | no |
| `AI_SIMPLIFY_PER_VISITOR_DAY` / `AI_SIMPLIFY_PER_IP_DAY` | `40` / `120` | GUARD | no |
| `AI_CACHED_PER_IP_DAY` | `400` | GUARD | no |
| `AI_COOKIE_SECRET` | 32+ random bytes, base64 | GUARD | **yes** |
| `AI_IP_SALT` | 32+ random bytes, base64 | GUARD | **yes** |
| `AI_ALERT_WEBHOOK` | URL (unset = no alerts) | GUARD | **yes** |
| `AI_EVAL_SECRET` | 32+ random bytes; **local `.env.local` only, never on Vercel** | GUARD, EVAL | **yes** |
| `AI_REPLAY_DIR` / `AI_RECORD_DIR` | paths (unset) | F, EVAL | no |
| `NEXT_PUBLIC_AI_CHAT` | `real` \| `scripted` (`scripted`) | C-UI | no (client) |
| `NEXT_PUBLIC_SIMPLIFIER` | `on` \| `off` (exists) | S-UI | no (client) |
| `SUPABASE_SECRET_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `CORPUS_SOURCE` | exist | DB, RET, S-SRV | the secret key: **yes** |
No block ever prints, logs or commits a secret value; scripts read `.env.local` and print only whether a variable is set.

## 9. Guard (`src/content/ai-guard/guard.ts`, block GUARD)
```ts
export type GuardKind = "chat" | "simplify" | "cached";
export type GuardTicket = { visitor: string; ipHash: string; day: string; month: string; reservedMicros: number; setCookie: string | null };
export function guardRequest(request: Request, kind: GuardKind, estimateMicros: number): Promise<GuardTicket>;
export function settleTicket(ticket: GuardTicket, actualMicros: number): Promise<void>;
export function aiStatus(): Promise<AiStatus>;
export type AiStatus = { chat: "on" | "off" | "paused"; simplify: "on" | "off" | "paused" };
```
`guardRequest` throws `AiError` (`ai_disabled`, `ai_bot_check_failed`, `ai_rate_limited`, `ai_daily_limit`, `ai_budget_exhausted`, `ai_bad_request` for a cross-origin POST) and returns a ticket; the caller appends `ticket.setCookie` to its response and calls `settleTicket` in `finally` (with 0 on a failure before the model call). `kind: "cached"` checks only the kill switch and the cached-read quota and reserves nothing. BotID runs for `chat` and `simplify` POSTs only, and only on Vercel (`VERCEL=1`). A request whose `x-ai-eval` header equals `AI_EVAL_SECRET` skips BotID and the per-person quotas (the evaluation harness); the budget still applies. Estimates: chat 6,000 µ$, simplify 1,500 µ$, judge 2,000 µ$ (`ESTIMATE_MICROS` in `contracts.ts`).

## 10. Cache keys (block F: `src/lib/ai/cache-keys.ts`)
- `normalizeQuestion(q)`: NFC, lower case, whitespace collapsed, trailing `?¿!¡.` removed, trimmed.
- **Answer:** `sha256([normalizeQuestion(q), locale, scope, hereKey, selectionHash ?? "-", ANSWER_PROMPT_VERSION, PLAN_PROMPT_VERSION, modelFor("plan").model, modelFor("answer").model, corpusVersion].join("|"))`; `hereKey` = `bible:<book>.<chapter>:<translation>` or `father:<work>:<edition>`; only when `turn === 1`, `history` empty and `notes` empty.
- **Simplification:** `sha256([textSha256, address.kind, editionId ?? "-", sourceLang, outputLang, modelFor("simplify").model, SIMPLIFY_PROMPT_VERSION].join("|"))`, `textSha256 = sha256(NFC text)`.
- **Replay:** `sha256([role, schemaName, system, user].join("|"))`.
All hex, lower case, `node:crypto`.

## 11. Evaluation (block EVAL)
Question file `docs/research/ai/eval/questions.json` (copied to `tools/ai-eval/questions.json`): an array of
```ts
type EvalQuestion = {
  id: string;
  lang: "es" | "en";
  question: string;
  scope: "chapter" | "work" | "bible" | "fathers" | "all";
  here: AskRequest["here"];
  history?: { question: string; prose: string }[];
  selection?: AskRequest["selection"];
  expect: {
    intent: SearchPlan["intent"];
    kind?: AnswerKind[];
    traditionsAll?: boolean;
    mustInclude?: string[];
    mustNotInclude?: string[];
    language?: "es" | "en";
    notFound?: boolean;
  };
  tags: string[];
};
```
`mustInclude` entries are passage-key prefixes (`fathers:ignatius-smyrnaeans:lightfoot-1889:6.2`, `tradition:eucharist:catholic`) or Bible refs (`John.6.53`). Result per question: `{ id, passed, checks: Record<string, boolean>, judge?: JudgeResult, costMicros, latencyMs, answer }`. Pass rules: `chat-design.md` §19.

## 12. Test and fixture conventions
- Pure checks live in `tools/ai-checks/*.mjs`, run by `tools/check-ai.mjs` (in the `lint` chain, block F), with `node --import ./tools/register-alias.mjs`; each prints `ok <n> checks` or fails with the case.
- e2e specs run with `AI_PROVIDER=fake` and `AI_STORE=memory` (set by `playwright.config.ts`, block F), so they need no key, no Supabase writes and no network beyond the app.
- The fixture corpus (`src/content/ai-search/fixture-passages.json`, block RET) holds ≥ 60 real passages copied from the corpus: Ignatius *Smyrn.* 6.2, *Philad.* 4.1, *Eph.* 20.2, *Rom.* 7.3; Didache 9, 10, 14; Justin *1 Apol.* 65–67; Irenaeus *AH* 4.18.5, 5.2.3; Cyril of Jerusalem *Cat.* 22.1–6; the definitions and first two statements of the five Eucharist and Baptism tradition pages; John 6:51–58 and 1 Cor 11:23–29 in BSB and RV1909.

## 13. Changes to this file
None yet.
