import { existsSync } from "node:fs";
import { addressId, SIMPLIFY_PROMPT_VERSION, simplificationSchema, toProviderSchema } from "@/lib/ai/contracts";
import {
  hasStoredSimplification,
  simplificationKey,
  writeSimplification,
  outputLanguage,
} from "@/content/ai-simplify/cache";
import { resolveAddress } from "@/content/ai-simplify/resolve-address";
import { getFatherWork } from "@/content/get-father-works";
import { spanishDoctrinePages, spanishPages } from "@/content/pages/index";
import { checkSimplification } from "@/features/simplify/checks";
import { simplifyMaxTokens, simplifySystemPrompt, simplifyUserMessage } from "@/features/simplify/prompt";
import { sha256 } from "@/lib/ai/cache-keys";
import { modelFor } from "@/lib/ai/models";
import { costMicros, priceOf } from "@/lib/ai/prices";
import { splitSentences } from "@/lib/ai/sentences";

const EARLY_WORKS = ["didache", "ignatius-smyrnaeans", "justin-first-apology"];
const FIRST_DIVISIONS = 10;
const FIRST_STATEMENTS = 3;
const BATCH_DISCOUNT = 0.5;
const POLL_MS = 30_000;

export async function pregenerationAddresses() {
  const addresses = [];
  for (const page of Object.values(spanishPages)) {
    addresses.push({ kind: "statement", doctrine: page.doctrine, tradition: page.tradition, id: "definition" });
    for (const statement of page.teach.statements.slice(0, FIRST_STATEMENTS))
      addresses.push({ kind: "statement", doctrine: page.doctrine, tradition: page.tradition, id: statement.id });
  }
  for (const page of Object.values(spanishDoctrinePages))
    addresses.push({ kind: "doctrine", doctrine: page.doctrine, section: "common", id: "text" });
  for (const id of EARLY_WORKS) {
    const work = await getFatherWork(id);
    if (!work) continue;
    for (const division of work.divisions.slice(0, FIRST_DIVISIONS))
      addresses.push({ kind: "father", work: id, edition: work.edition.id, locator: division.locator });
  }
  return addresses;
}

export async function pregenerationItems() {
  const items = [];
  const seen = new Set();
  for (const address of await pregenerationAddresses()) {
    const resolved = await resolveAddress(address, "es");
    if (!resolved.simplifiable) continue;
    const cacheKey = simplificationKey(address, resolved);
    if (seen.has(cacheKey)) continue;
    seen.add(cacheKey);
    items.push({ address, resolved, cacheKey, id: addressId(address) });
  }
  return items;
}

function requestFor(item, model, effort) {
  const outputLang = outputLanguage(item.resolved);
  const sentences = splitSentences(item.resolved.text);
  const system = simplifySystemPrompt(outputLang);
  const user = simplifyUserMessage({ sentences, speaker: item.resolved.speaker, outputLang, failures: [] });
  return {
    sentences,
    system,
    user,
    params: {
      model,
      max_tokens: simplifyMaxTokens(item.resolved.text),
      system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
      messages: [{ role: "user", content: user }],
      output_config: { effort, format: { type: "json_schema", schema: toProviderSchema(simplificationSchema) } },
    },
  };
}

function estimateMicros(request, price) {
  const inputTokens = (request.system.length + request.user.length) / 4;
  const outputTokens = (2.4 * request.sentences.join(" ").length) / 4 + 300;
  return ((inputTokens * price.inputPerMTok + outputTokens * price.outputPerMTok) * BATCH_DISCOUNT) | 0;
}

function option(args, name, fallback) {
  const at = args.indexOf(name);
  return at === -1 ? fallback : args[at + 1];
}

async function storeState(items) {
  try {
    const cached = new Set();
    for (const item of items) if (await hasStoredSimplification(item.cacheKey)) cached.add(item.cacheKey);
    return { usable: true, cached };
  } catch {
    return { usable: false, cached: new Set() };
  }
}

async function runBatch(pending, model) {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  const client = new Anthropic({ maxRetries: 1 });
  const batch = await client.messages.batches.create({
    requests: pending.map((entry) => ({ custom_id: entry.item.cacheKey, params: entry.request.params })),
  });
  console.log(`batch ${batch.id}: ${pending.length} requests sent`);
  let status = batch.processing_status;
  while (status !== "ended") {
    await new Promise((resolve) => setTimeout(resolve, POLL_MS));
    const current = await client.messages.batches.retrieve(batch.id);
    status = current.processing_status;
    console.log(`batch ${batch.id}: ${status} (${JSON.stringify(current.request_counts)})`);
  }
  const byKey = new Map(pending.map((entry) => [entry.item.cacheKey, entry]));
  let spent = 0;
  const failed = [];
  for await (const result of await client.messages.batches.results(batch.id)) {
    const entry = byKey.get(result.custom_id);
    if (!entry) continue;
    if (result.result.type !== "succeeded") {
      failed.push(`${entry.item.id}: ${result.result.type}`);
      continue;
    }
    const message = result.result.message;
    const usage = {
      inputTokens: message.usage.input_tokens,
      cachedInputTokens: message.usage.cache_read_input_tokens ?? 0,
      cacheWriteTokens: message.usage.cache_creation_input_tokens ?? 0,
      outputTokens: message.usage.output_tokens,
    };
    const cost = Math.ceil(costMicros(model, usage) * BATCH_DISCOUNT);
    spent += cost;
    const text = message.content.find((block) => block.type === "text");
    let parsed = null;
    try {
      parsed = simplificationSchema.safeParse(JSON.parse(text?.text ?? "null"));
    } catch {
      parsed = null;
    }
    if (message.stop_reason !== "end_turn" || !parsed?.success) {
      failed.push(`${entry.item.id}: ${message.stop_reason}, no valid JSON`);
      continue;
    }
    const report = checkSimplification(entry.request.sentences, parsed.data);
    if (!report.passed) {
      failed.push(`${entry.item.id}: ${report.failures.join("; ")}`);
      continue;
    }
    await writeSimplification({
      cacheKey: entry.item.cacheKey,
      address: entry.item.address,
      textSha256: sha256(entry.item.resolved.text.normalize("NFC")),
      sourceLang: entry.item.resolved.sourceLang,
      outputLang: outputLanguage(entry.item.resolved),
      model,
      promptVersion: SIMPLIFY_PROMPT_VERSION,
      original: entry.request.sentences,
      clear: parsed.data.clear,
      very: parsed.data.very,
      status: "generated",
      checks: { ...report.results, failures: [], attempts: 1, batch: batch.id },
      tokensIn: usage.inputTokens + usage.cachedInputTokens + usage.cacheWriteTokens,
      tokensOut: usage.outputTokens,
      costMicros: cost,
    });
  }
  console.log(
    `stored ${pending.length - failed.length}, failed ${failed.length}; real cost $${(spent / 1e6).toFixed(5)}`,
  );
  for (const line of failed) console.log(`  failed ${line}`);
}

async function main() {
  if (existsSync(".env.local")) process.loadEnvFile(".env.local");
  const args = process.argv.slice(2);
  const run = args.includes("--run");
  const maxUsd = Number(option(args, "--max-usd", "0.20"));
  const limit = Number(option(args, "--limit", "0")) || Infinity;
  const { model, effort } = modelFor("simplify");
  const price = priceOf(model);
  if (!price) throw new Error(`no price row for ${model}`);
  console.log(
    `model ${model}@${effort} · prompt ${SIMPLIFY_PROMPT_VERSION} · ANTHROPIC_API_KEY ${process.env.ANTHROPIC_API_KEY ? "set" : "missing"}`,
  );
  const items = await pregenerationItems();
  const store = await storeState(items);
  if (!store.usable)
    console.log("store: not readable here (set AI_STORE=memory or use the Supabase store); no cache hits skipped");
  const pending = items
    .filter((item) => !store.cached.has(item.cacheKey))
    .slice(0, limit)
    .map((item) => ({ item, request: requestFor(item, model, effort) }));
  let total = 0;
  for (const entry of pending) {
    const micros = estimateMicros(entry.request, price);
    total += micros;
    console.log(
      `${entry.item.id.padEnd(48)} ${String(entry.request.sentences.length).padStart(3)} sentences  ~$${(micros / 1e6).toFixed(5)}`,
    );
  }
  console.log(
    `${items.length} paragraphs, ${items.length - pending.length} cached, ${pending.length} to generate; estimate $${(total / 1e6).toFixed(4)} with the batch discount (cap $${maxUsd.toFixed(2)})`,
  );
  if (!run) {
    console.log("dry run: nothing sent. Add --run to send the batch.");
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("--run needs ANTHROPIC_API_KEY");
  if (!store.usable) throw new Error("--run needs a readable store, or the results would be lost");
  if (total / 1e6 > maxUsd) throw new Error(`estimate over --max-usd ${maxUsd}; nothing sent`);
  if (pending.length === 0) return;
  await runBatch(pending, model);
}

if (import.meta.main) await main();
