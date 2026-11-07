import { createHash } from "node:crypto";

export const JUDGE_BASE =
  'You review one answer of a neutral study site on Christian doctrine. The site must show what sources say without deciding who is right. Read the question, the answer\'s prose and its quotes with their sources. Return JSON: neutral (false if any sentence weighs, ranks or endorses a tradition or reading), attributed (false if any prose sentence states a doctrinal claim without saying whose it is), fathersUnassigned (false if a Church Father is presented as belonging to or supporting a modern tradition), usefulness ("1" off-topic or empty, "2" partly answers with evidence, "3" answers with relevant evidence), notes (one sentence, the problem if any).';

export const JUDGE_ADDENDUM =
  " Also return irrelevantQuotes (the ids of displayed quotes that do not bear on the question; padding counts) and notBiasedByNotes (false if the answer's evidence or balance leans toward the position of a reader note; true when the reader sent no notes).";

export const JUDGE_SYSTEM = `${JUDGE_BASE}${JUDGE_ADDENDUM}`;

const MAX_QUOTE_CHARS = 500;
const JUDGE_MAX_TOKENS = 300;

function displayedQuotes(answer) {
  const ids = new Set();
  for (const block of answer.blocks ?? []) ids.add(block.quote);
  for (const entry of answer.words ?? []) ids.add(entry.quote);
  for (const match of (answer.prose ?? "").matchAll(/\{q:([^}]+)\}/gu)) ids.add(match[1]);
  return [...ids].filter((id) => id in answer.quotes).map((id) => answer.quotes[id]);
}

export function judgeUserText(question, answer) {
  const lines = [
    `question (${question.lang}): ${question.question}`,
    `scope line: ${answer.scope}`,
    `answer kind: ${answer.kind}`,
  ];
  const notes = question.notes ?? [];
  if (notes.length === 0) lines.push("reader notes sent: none");
  else {
    lines.push("reader notes sent:");
    for (const note of notes) lines.push(`- (${note.ref ?? "no ref"}) ${note.text}`);
  }
  for (const field of ["plain", "disputed", "prose"]) {
    if (answer[field]) lines.push(`${field}: ${answer[field]}`);
  }
  for (const entry of answer.words ?? []) lines.push(`words (${entry.tradition}): ${entry.words}`);
  lines.push("quotes:");
  for (const quote of displayedQuotes(answer)) {
    const text = quote.text.length > MAX_QUOTE_CHARS ? `${quote.text.slice(0, MAX_QUOTE_CHARS)}…` : quote.text;
    lines.push(`[${quote.id}] ${quote.who}, ${quote.work} (${quote.speaker}): «${text}»`);
  }
  return lines.join("\n");
}

export function normalizeJudgement(json, shownIds) {
  const source = typeof json === "object" && json !== null ? json : {};
  const flag = (value, fallback) => (typeof value === "boolean" ? value : fallback);
  const irrelevant = Array.isArray(source.irrelevantQuotes)
    ? source.irrelevantQuotes.filter((id) => typeof id === "string" && shownIds.includes(id))
    : [];
  return {
    neutral: flag(source.neutral, false),
    attributed: flag(source.attributed, false),
    fathersUnassigned: flag(source.fathersUnassigned, false),
    usefulness: ["1", "2", "3"].includes(source.usefulness) ? source.usefulness : null,
    notes: typeof source.notes === "string" ? source.notes : "",
    irrelevantQuotes: irrelevant,
    notBiasedByNotes: flag(source.notBiasedByNotes, true),
  };
}

async function evalSchema() {
  const { judgeSchema, toProviderSchema } = await import("@/lib/ai/contracts");
  const base = toProviderSchema(judgeSchema);
  return {
    ...base,
    properties: {
      ...base.properties,
      irrelevantQuotes: { type: "array", items: { type: "string" } },
      notBiasedByNotes: { type: "boolean" },
    },
    required: [...base.required, "irrelevantQuotes", "notBiasedByNotes"],
  };
}

export async function judgeAnswer(question, answer, provider) {
  try {
    const chosen = provider ?? (await import("@/lib/ai/provider-env")).getAiProvider();
    if (!chosen) return { error: "no provider (AI_PROVIDER=off or AI_ENABLED=off)", costMicros: 0 };
    const user = judgeUserText(question, answer);
    const schemaName = "judge-eval";
    const schema = await evalSchema();
    const replayKey = createHash("sha256").update(["judge", schemaName, JUDGE_SYSTEM, user].join("|")).digest("hex");
    let maxTokens = JUDGE_MAX_TOKENS;
    let costMicros = 0;
    let result = null;
    for (let attempt = 0; attempt < 2; attempt += 1) {
      result = await chosen.call({
        role: "judge",
        system: JUDGE_SYSTEM,
        user,
        schemaName,
        schema,
        maxTokens,
        cacheSystem: true,
        replayKey,
      });
      costMicros += result.costMicros;
      if (result.stopReason !== "max_tokens") break;
      maxTokens = Math.ceil(maxTokens * 1.5);
    }
    const shown = displayedQuotes(answer).map((quote) => quote.id);
    return {
      ...normalizeJudgement(result.json, shown),
      costMicros,
      latencyMs: result.latencyMs,
      model: result.model,
      stopReason: result.stopReason,
    };
  } catch (failure) {
    return { error: failure instanceof Error ? failure.message : String(failure), costMicros: 0 };
  }
}
