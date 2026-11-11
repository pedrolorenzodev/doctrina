import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { addressId, SIMPLIFY_PROMPT_VERSION } from "@/lib/ai/contracts";
import {
  isAiChecked,
  outputLanguage,
  readStoredSimplification,
  simplificationKey,
  sourceTextSha256,
  writeSimplification,
} from "@/content/ai-simplify/cache";
import { resolveAddress } from "@/content/ai-simplify/resolve-address";
import { spanishDoctrinePages, spanishPages } from "@/content/pages/index";
import { FIDELITY_PROMPT_VERSION, fidelityRequest, readFidelity } from "@/features/simplify/fidelity";
import { generateSimplification, SimplifyFailure } from "@/features/simplify/simplify";
import { getAiProvider } from "@/lib/ai/provider";
import { modelFor } from "@/lib/ai/models";
import { costMicros, priceOf } from "@/lib/ai/prices";

const FIRST_STATEMENTS = 3;
const BATCH_DISCOUNT = 0.5;
const POLL_MS = 20_000;
const MAX_ROUNDS = 3;
const CONCURRENCY = 6;
const REPORT_DIR = "tmp/ai-pregen";
const TRADITIONS = ["catholic", "orthodox", "lutheran", "reformed", "baptist", "pentecostal"];

export const STAGES = ["tradition", "common", "sections"];

const DOCTRINAL_TERMS = [
  "sacrificio",
  "sustancia",
  "sustancialmente",
  "sacramento",
  "sacramental",
  "unión sacramental",
  "presencia real",
  "gracia",
  "consagración",
  "especies",
  "memorial",
  "incruento",
  "propiciatorio",
  "transubstanciación",
  "justificación",
  "regeneración",
  "fe",
  "Escritura",
  "Escrituras",
  "tradición",
  "primado",
  "jurisdicción",
  "infalible",
  "infalibilidad",
  "Magisterio",
  "sucesión apostólica",
  "inspirada",
  "pacto",
  "ordenanza",
  "símbolo",
  "signo",
  "figura",
  "cuerpo y la sangre",
  "verdadero cuerpo",
  "verdadera sangre",
  "fruto de la vid",
  "pan y el vino",
  "instituido",
  "instituida",
  "instituyó",
  "hacer presente",
  "última Cena",
  "Cena del Señor",
  "banquete",
  "nuevo nacimiento",
  "sucesor de Pedro",
  "sucesión",
  "apóstoles",
  "obispos",
  "regla de fe",
  "norma",
  "autoridad",
  "verdaderamente",
  "realmente",
];

let glossaryNames = null;

export function paragraphTerms(text) {
  glossaryNames ??= JSON.parse(readFileSync("data/site/glossary.json", "utf8")).terms.map((term) => term.name);
  const found = new Map();
  for (const term of [...glossaryNames, ...DOCTRINAL_TERMS]) {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const match = new RegExp(`(?<![\\p{L}])${escaped}(?![\\p{L}])`, "iu").exec(text);
    if (match) found.set(match[0].toLowerCase(), match[0]);
  }
  return [...found.values()];
}

export function stageAddresses(stage) {
  const addresses = [];
  if (stage === "tradition")
    for (const page of Object.values(spanishPages)) {
      addresses.push({ kind: "statement", doctrine: page.doctrine, tradition: page.tradition, id: "definition" });
      for (const statement of page.teach.statements.slice(0, FIRST_STATEMENTS))
        addresses.push({ kind: "statement", doctrine: page.doctrine, tradition: page.tradition, id: statement.id });
    }
  if (stage === "common")
    for (const page of Object.values(spanishDoctrinePages))
      addresses.push({ kind: "doctrine", doctrine: page.doctrine, section: "common", id: "text" });
  if (stage === "sections")
    for (const page of Object.values(spanishDoctrinePages)) {
      for (const tradition of TRADITIONS)
        addresses.push({ kind: "doctrine", doctrine: page.doctrine, section: "answers", id: tradition });
      for (const other of Object.values(spanishDoctrinePages))
        if (other.doctrine !== page.doctrine)
          addresses.push({ kind: "doctrine", doctrine: page.doctrine, section: "connected", id: other.doctrine });
    }
  return addresses;
}

export async function pregenerationAddresses() {
  return STAGES.flatMap(stageAddresses);
}

export async function pregenerationItems(addresses) {
  const items = [];
  const seen = new Set();
  for (const address of addresses ?? (await pregenerationAddresses())) {
    let resolved;
    try {
      resolved = await resolveAddress(address, "es");
    } catch {
      continue;
    }
    if (!resolved.simplifiable) continue;
    const cacheKey = simplificationKey(address, resolved);
    if (seen.has(cacheKey)) continue;
    seen.add(cacheKey);
    items.push({ address, resolved, cacheKey, id: addressId(address) });
  }
  return items;
}

function option(args, name, fallback) {
  const at = args.indexOf(name);
  return at === -1 ? fallback : args[at + 1];
}

async function servableNow(item) {
  const row = await readStoredSimplification(item.cacheKey);
  if (!row || row.status === "rejected") return false;
  if (row.textSha256 !== sourceTextSha256(item.resolved.text)) return false;
  return row.status === "reviewed" || isAiChecked(row);
}

function estimateRound(states, simplifyPrice, fidelityPrice) {
  let micros = 0;
  for (const state of states) {
    const chars = state.item.resolved.text.length;
    const generation =
      ((9000 + chars) / 4) * simplifyPrice.inputPerMTok + ((2.6 * chars) / 4 + 600) * simplifyPrice.outputPerMTok;
    const judge = ((2600 + 3 * chars) / 4) * fidelityPrice.inputPerMTok + 900 * fidelityPrice.outputPerMTok;
    micros += 1.5 * generation + judge * BATCH_DISCOUNT;
  }
  return micros;
}

async function inParallel(values, limit, work) {
  const results = new Array(values.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, values.length) }, async () => {
      while (next < values.length) {
        const index = next++;
        results[index] = await work(values[index], index);
      }
    }),
  );
  return results;
}

async function generateRound(states, provider) {
  await inParallel(states, CONCURRENCY, async (state) => {
    state.attempts += 1;
    const feedback = state.failures.length > 0 ? { failures: state.failures, previous: state.previous } : undefined;
    try {
      const generation = await generateSimplification(provider, state.item.resolved, {
        allowIdentity: false,
        whole: true,
        onlyClear: true,
        terms: state.terms,
        ...(feedback ? { feedback } : {}),
      });
      state.generationMicros += generation.costMicros;
      state.tokensIn +=
        generation.usage.inputTokens + generation.usage.cachedInputTokens + generation.usage.cacheWriteTokens;
      state.tokensOut += generation.usage.outputTokens;
      state.model = generation.model;
      state.candidate = generation;
      state.log.push(
        `round ${state.attempts}: checks passed (${generation.attempts} call${generation.attempts > 1 ? "s" : ""})`,
      );
    } catch (error) {
      const spent = error instanceof SimplifyFailure ? error.spent : null;
      state.generationMicros += spent?.costMicros ?? 0;
      state.candidate = null;
      state.failures = spent?.report?.failures?.length
        ? spent.report.failures
        : [`generation failed: ${error.code ?? error}`];
      state.previous = null;
      state.log.push(`round ${state.attempts}: checks failed twice (${state.failures.slice(0, 2).join(" | ")})`);
    }
  });
}

async function judgeRound(states, model, effort) {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const client = new Anthropic({ maxRetries: 2 });
  const byId = new Map(states.map((state, index) => [`p${index}`, state]));
  const requests = [...byId].map(([customId, state]) => {
    const request = fidelityRequest(state.candidate.original, state.candidate.levels, true);
    return {
      custom_id: customId,
      params: {
        model,
        max_tokens: request.maxTokens,
        system: [{ type: "text", text: request.system, cache_control: { type: "ephemeral" } }],
        messages: [{ role: "user", content: request.user }],
        output_config: { effort, format: { type: "json_schema", schema: request.schema } },
      },
    };
  });
  const batch = await client.messages.batches.create({ requests });
  const started = Date.now();
  console.log(`judge batch ${batch.id}: ${requests.length} requests`);
  let status = batch.processing_status;
  while (status !== "ended") {
    await new Promise((resolve) => setTimeout(resolve, POLL_MS));
    const current = await client.messages.batches.retrieve(batch.id);
    status = current.processing_status;
    console.log(
      `  ${status} after ${Math.round((Date.now() - started) / 1000)} s ${JSON.stringify(current.request_counts)}`,
    );
  }
  for await (const result of await client.messages.batches.results(batch.id)) {
    const state = byId.get(result.custom_id);
    if (!state) continue;
    if (result.result.type !== "succeeded") {
      state.verdicts.push({ passed: false, issues: [`judge request ${result.result.type}`] });
      continue;
    }
    const message = result.result.message;
    const usage = {
      inputTokens: message.usage.input_tokens,
      cachedInputTokens: message.usage.cache_read_input_tokens ?? 0,
      cacheWriteTokens: message.usage.cache_creation_input_tokens ?? 0,
      outputTokens: message.usage.output_tokens,
    };
    state.judgeMicros += Math.ceil(costMicros(model, usage) * BATCH_DISCOUNT);
    const text = message.content.find((block) => block.type === "text");
    let json = null;
    try {
      json = message.stop_reason === "end_turn" ? JSON.parse(text?.text ?? "null") : null;
    } catch {
      json = null;
    }
    const reading = readFidelity(json);
    state.verdicts.push({ passed: reading.failures.length === 0, issues: reading.failures });
  }
  return batch.id;
}

function aiCheckedRow(state, judgeModel, batchIds) {
  const { item, candidate } = state;
  return {
    cacheKey: item.cacheKey,
    address: item.address,
    textSha256: sourceTextSha256(item.resolved.text),
    sourceLang: item.resolved.sourceLang,
    outputLang: outputLanguage(item.resolved),
    model: state.model,
    promptVersion: SIMPLIFY_PROMPT_VERSION,
    original: candidate.original,
    clear: candidate.levels.clear,
    very: candidate.levels.very,
    status: "generated",
    checks: {
      ...candidate.report.results,
      failures: [],
      attempts: state.attempts,
      levels: ["clear"],
      terms: state.terms,
      fidelity: {
        model: judgeModel,
        promptVersion: FIDELITY_PROMPT_VERSION,
        passed: true,
        at: new Date().toISOString(),
        issues: [],
        rounds: state.attempts,
        batches: batchIds,
      },
    },
    tokensIn: state.tokensIn,
    tokensOut: state.tokensOut,
    costMicros: state.generationMicros + state.judgeMicros,
  };
}

async function main() {
  if (existsSync("apps/web/.env.local")) process.loadEnvFile("apps/web/.env.local");
  const args = process.argv.slice(2);
  const run = args.includes("--run");
  const maxUsd = Number(option(args, "--max-usd", "0.50"));
  const limit = Number(option(args, "--limit", "0")) || Infinity;
  const stage = option(args, "--stage", "tradition");
  if (!STAGES.includes(stage)) throw new Error(`--stage must be one of ${STAGES.join(", ")}`);
  const simplify = modelFor("simplify");
  const fidelity = modelFor("fidelity");
  const simplifyPrice = priceOf(simplify.model);
  const fidelityPrice = priceOf(fidelity.model);
  if (!simplifyPrice || !fidelityPrice) throw new Error("no price row for the simplify or fidelity model");
  console.log(
    `stage ${stage} · simplify ${simplify.model}@${simplify.effort} · fidelity ${fidelity.model}@${fidelity.effort} (batch) · prompt ${SIMPLIFY_PROMPT_VERSION} · ANTHROPIC_API_KEY ${process.env.ANTHROPIC_API_KEY ? "set" : "missing"}`,
  );
  const ids = option(args, "--ids", "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  const staged = await pregenerationItems(stageAddresses(stage));
  const items = ids.length > 0 ? staged.filter((item) => ids.includes(item.id)) : staged;
  if (ids.length > 0 && items.length !== ids.length)
    throw new Error(`unknown ids: ${ids.filter((id) => !items.some((item) => item.id === id)).join(", ")}`);
  const pending = [];
  const redo = args.includes("--redo");
  for (const item of items) if (redo || !(await servableNow(item))) pending.push(item);
  const states = pending.slice(0, limit).map((item) => ({
    item,
    terms: paragraphTerms(item.resolved.text),
    attempts: 0,
    failures: [],
    previous: null,
    candidate: null,
    verdicts: [],
    log: [],
    generationMicros: 0,
    judgeMicros: 0,
    tokensIn: 0,
    tokensOut: 0,
    model: "",
    stored: false,
  }));
  const firstRound = estimateRound(states, simplifyPrice, fidelityPrice);
  console.log(
    `${items.length} paragraphs, ${items.length - pending.length} already servable, ${states.length} to run; estimate first round $${(firstRound / 1e6).toFixed(4)}, all rounds ≤ $${((firstRound * 2) / 1e6).toFixed(4)} (cap $${maxUsd.toFixed(2)})`,
  );
  if (!run) {
    console.log("dry run: nothing sent. Add --run.");
    return;
  }
  if (process.env.AI_PROVIDER !== "anthropic") throw new Error("--run needs AI_PROVIDER=anthropic");
  if (firstRound / 1e6 > maxUsd) throw new Error(`estimate over --max-usd ${maxUsd}; nothing sent`);
  const provider = getAiProvider();
  const spent = () => states.reduce((sum, state) => sum + state.generationMicros + state.judgeMicros, 0);
  const batchIds = [];
  for (let round = 1; round <= MAX_ROUNDS; round += 1) {
    const open = states.filter((state) => !state.stored);
    if (open.length === 0) break;
    const estimate = estimateRound(open, simplifyPrice, fidelityPrice);
    if ((spent() + estimate) / 1e6 > maxUsd) {
      console.log(`round ${round}: estimate $${(estimate / 1e6).toFixed(4)} would pass the cap; stop`);
      break;
    }
    console.log(`round ${round}: generating ${open.length}`);
    await generateRound(open, provider);
    const toJudge = open.filter((state) => state.candidate);
    if (toJudge.length > 0) batchIds.push(await judgeRound(toJudge, fidelity.model, fidelity.effort));
    for (const state of toJudge) {
      const verdict = state.verdicts.at(-1);
      if (verdict?.passed) {
        await writeSimplification(aiCheckedRow(state, fidelity.model, batchIds));
        state.stored = true;
        state.log.push(`round ${state.attempts}: judge passed, stored`);
      } else {
        state.failures = verdict?.issues ?? ["the judge gave no verdict"];
        state.previous = state.candidate.levels;
        state.log.push(
          `round ${state.attempts}: judge found ${state.failures.length} change(s): ${state.failures.slice(0, 2).join(" | ")}`,
        );
      }
    }
    console.log(
      `round ${round}: stored ${states.filter((state) => state.stored).length}/${states.length}; spent $${(spent() / 1e6).toFixed(4)}`,
    );
  }
  const report = states.map((state) => ({
    id: state.item.id,
    stored: state.stored,
    rounds: state.attempts,
    verdicts: state.verdicts.map((verdict) => (verdict.passed ? "pass" : `fail (${verdict.issues.length})`)),
    generationMicros: state.generationMicros,
    judgeMicros: state.judgeMicros,
    log: state.log,
    lastIssues: state.stored ? [] : state.failures,
  }));
  mkdirSync(REPORT_DIR, { recursive: true });
  const file = `${REPORT_DIR}/report-${stage}-${Date.now()}.json`;
  writeFileSync(file, JSON.stringify(report, null, 2));
  for (const row of report)
    console.log(
      `${row.stored ? "stored" : "NOT STORED"} ${row.id.padEnd(48)} rounds ${row.rounds} · judge ${row.verdicts.join(", ") || "—"} · $${((row.generationMicros + row.judgeMicros) / 1e6).toFixed(5)}`,
    );
  const failed = report.filter((row) => !row.stored);
  console.log(
    `stored ${report.length - failed.length}/${report.length}; could not be simplified faithfully: ${failed.map((row) => row.id).join(", ") || "none"}`,
  );
  console.log(`real cost $${(spent() / 1e6).toFixed(5)} · report ${file}`);
}

if (import.meta.main) await main();
