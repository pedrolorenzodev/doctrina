import { z } from "zod";

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

export const ESTIMATE_MICROS = { chat: 6000, simplify: 1500, judge: 2000 } as const;

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
  sections: z.array(
    z.object({
      about: z.string(),
      quotes: z.array(z.object({ passage: z.string(), quote: z.string() })),
    }),
  ),
  words: z.array(
    z.object({
      tradition: z.string(),
      passage: z.string(),
      words: z.string(),
      quote: z.string(),
    }),
  ),
  prose: z.string(),
  followups: z.array(z.string()),
});
export type ModelAnswer = z.infer<typeof modelAnswerSchema>;

export const simplificationSchema = z.object({ clear: z.array(z.string()), very: z.array(z.string()) });
export type Simplification = z.infer<typeof simplificationSchema>;

export const judgeSchema = z.object({
  neutral: z.boolean(),
  attributed: z.boolean(),
  fathersUnassigned: z.boolean(),
  usefulness: z.enum(["1", "2", "3"]),
  notes: z.string(),
});
export type JudgeResult = z.infer<typeof judgeSchema>;

export const askRequestSchema = z.object({
  question: z.string().min(1).max(MAX_QUESTION_CHARS),
  locale: z.enum(["es", "en"]),
  scope: z.enum(["chapter", "work", "bible", "fathers", "all"]),
  here: z.discriminatedUnion("kind", [
    z.object({
      kind: z.literal("bible"),
      book: z.string(),
      chapter: z.number().int().positive(),
      translation: z.string(),
    }),
    z.object({
      kind: z.literal("father"),
      work: z.string(),
      edition: z.string(),
      locator: z.string().nullable(),
    }),
  ]),
  selection: z
    .object({
      text: z.string().max(MAX_SELECTION_CHARS),
      at: z.discriminatedUnion("kind", [
        z.object({ kind: z.literal("verse"), book: z.string(), chapter: z.number().int(), verse: z.number().int() }),
        z.object({ kind: z.literal("division"), work: z.string(), edition: z.string(), locator: z.string() }),
        z.object({ kind: z.literal("answer") }),
      ]),
    })
    .nullable(),
  history: z
    .array(z.object({ question: z.string().max(MAX_QUESTION_CHARS), prose: z.string().max(MAX_HISTORY_CHARS) }))
    .max(2),
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

export type AskMoreResponse = {
  blocks: { quote: string; head?: string }[];
  quotes: Record<string, WireQuote>;
  consulted: string[];
  more: boolean;
};

export const askMoreRequestSchema = z.object({ answerId: z.string().min(1), offset: z.number().int().min(0) });
export type AskMoreRequest = z.infer<typeof askMoreRequestSchema>;

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

export function addressId(address: SimplifyAddress): string {
  switch (address.kind) {
    case "father":
      return `${address.work}/${address.locator}`;
    case "statement":
      return `${address.doctrine}/${address.tradition}/${address.id}`;
    case "doctrine":
      return `${address.doctrine}/02/${address.section}/${address.id}`;
    case "glossary":
      return `glossary/${address.term}/${address.tradition}`;
  }
}

const REJECTED_KEYWORDS = [
  "minLength",
  "maxLength",
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "maxItems",
  "pattern",
  "format",
  "multipleOf",
];

function tightenSchema(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(tightenSchema);
  if (node === null || typeof node !== "object") return node;
  const source = node as Record<string, unknown>;
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(source)) {
    if (REJECTED_KEYWORDS.includes(key)) continue;
    if (key === "minItems" && typeof value === "number" && value > 1) continue;
    result[key] = key === "properties" ? tightenProperties(value) : tightenSchema(value);
  }
  if (result.type === "object" && result.properties && typeof result.properties === "object") {
    result.additionalProperties = false;
    result.required = Object.keys(result.properties);
  }
  return result;
}

function tightenProperties(value: unknown): unknown {
  if (value === null || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value).map(([name, schema]) => [name, tightenSchema(schema)]));
}

export function toProviderSchema(schema: z.ZodType): Record<string, unknown> {
  const raw = z.toJSONSchema(schema, { target: "draft-2020-12", io: "output" }) as Record<string, unknown>;
  delete raw.$schema;
  return tightenSchema(raw) as Record<string, unknown>;
}
