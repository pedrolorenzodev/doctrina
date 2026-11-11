import { MemoryAiStore } from "@/content/ai-store/memory-store";

const DAY = "2099-01-01";
const MONTH = "2099-01";
const PREFIX = "test-";
const failures = [];
let checks = 0;
const expect = (condition, message) => {
  checks += 1;
  if (!condition) failures.push(message);
};

const simplification = (cacheKey) => ({
  cacheKey,
  address: { kind: "father", work: "ignatius-smyrnaeans", edition: "lightfoot-1889", locator: "6.2" },
  textSha256: "a".repeat(64),
  sourceLang: "en",
  outputLang: "es",
  model: "fake",
  promptVersion: "simplify-test",
  original: ["One.", "Two."],
  clear: ["Uno.", "Dos."],
  very: ["Uno.", "Dos."],
  status: "generated",
  checks: { ok: true },
  tokensIn: 10,
  tokensOut: 20,
  costMicros: 5,
});

const answer = (cacheKey) => ({
  cacheKey,
  locale: "es",
  promptVersion: "chat-test",
  models: { plan: "fake", answer: "fake" },
  corpusVersion: "test",
  answer: {
    answerId: "x",
    kind: "evidence",
    question: "test",
    scope: "all",
    blocks: [],
    quotes: {},
    consulted: [],
    followups: [],
    more: false,
    cached: false,
    promptVersion: "chat-test",
  },
  pack: { extra: [] },
});

async function runCases(label, store) {
  const tag = (message) => `${label}: ${message}`;
  const run = Date.now().toString(36);

  const settings = await store.settings();
  expect(
    settings.enabled === true && settings.chatEnabled === true && settings.simplifyEnabled === true,
    tag("settings are all enabled by default"),
  );

  const bucket = `${PREFIX}take-${run}`;
  const taken = [
    await store.take(DAY, bucket, "a", 2),
    await store.take(DAY, bucket, "a", 2),
    await store.take(DAY, bucket, "a", 2),
  ];
  expect(taken.join() === "true,true,false", tag(`take with limit 2 gives true,true,false (got ${taken.join()})`));
  expect((await store.take(DAY, bucket, "b", 2)) === true, tag("take keeps keys apart"));
  expect((await store.take(DAY, `${bucket}-zero`, "a", 0)) === false, tag("take with limit 0 refuses"));

  const before = await store.spend(DAY, MONTH);
  expect(
    (await store.reserve(
      DAY,
      MONTH,
      6000,
      before.day.spentMicros + before.day.reservedMicros + 100000,
      before.month.spentMicros + before.month.reservedMicros + 1000000,
    )) === true,
    tag("reserve under the caps succeeds"),
  );
  const reserved = await store.spend(DAY, MONTH);
  expect(
    reserved.day.reservedMicros - before.day.reservedMicros === 6000 &&
      reserved.month.reservedMicros - before.month.reservedMicros === 6000,
    tag("reserve adds the estimate to day and month"),
  );
  await store.settle(DAY, MONTH, 6000, 2800);
  const settled = await store.spend(DAY, MONTH);
  expect(
    settled.day.reservedMicros === before.day.reservedMicros &&
      settled.day.spentMicros - before.day.spentMicros === 2800,
    tag("settle moves the reservation to spent on the day"),
  );
  expect(
    settled.month.reservedMicros === before.month.reservedMicros &&
      settled.month.spentMicros - before.month.spentMicros === 2800,
    tag("settle moves the reservation to spent on the month"),
  );

  const used = settled.day.reservedMicros + settled.day.spentMicros;
  const usedMonth = settled.month.reservedMicros + settled.month.spentMicros;
  expect(
    (await store.reserve(DAY, MONTH, 6000, used + 5999, usedMonth + 1000000)) === false,
    tag("reserve over the daily cap fails"),
  );
  expect(
    (await store.reserve(DAY, MONTH, 6000, used + 1000000, usedMonth + 5999)) === false,
    tag("reserve over the monthly cap fails"),
  );
  const unchanged = await store.spend(DAY, MONTH);
  expect(unchanged.day.reservedMicros === settled.day.reservedMicros, tag("a refused reserve changes nothing"));

  const base = unchanged.day.reservedMicros + unchanged.day.spentMicros;
  const baseMonth = unchanged.month.reservedMicros + unchanged.month.spentMicros;
  const results = await Promise.all(
    Array.from({ length: 20 }, () => store.reserve(DAY, MONTH, 6000, base + 60000, baseMonth + 1000000)),
  );
  expect(
    results.filter(Boolean).length === 10,
    tag(`20 parallel reserves of 6000 under a 60000 cap give exactly 10 (got ${results.filter(Boolean).length})`),
  );
  await Promise.all(results.filter(Boolean).map(() => store.settle(DAY, MONTH, 6000, 0)));

  const key = `${PREFIX}simplification-${run}`;
  expect((await store.getSimplification(key)) === null, tag("missing simplification is null"));
  await store.putSimplification(simplification(key));
  const read = await store.getSimplification(key);
  expect(
    read !== null &&
      read.clear.join("|") === "Uno.|Dos." &&
      read.address.kind === "father" &&
      read.status === "generated" &&
      read.costMicros === 5,
    tag("simplification round trip"),
  );
  await store.countSimplificationHit(key);
  await store.putSimplification({ ...simplification(key), status: "reviewed" });
  expect((await store.getSimplification(key))?.status === "reviewed", tag("putSimplification replaces the row"));

  const answerKey = `${PREFIX}answer-${run}`;
  expect((await store.getAnswerByKey(answerKey)) === null, tag("missing answer is null"));
  const id = await store.putAnswer(answer(answerKey));
  const byKey = await store.getAnswerByKey(answerKey);
  const byId = await store.getAnswer(id);
  expect(
    typeof id === "string" && byKey?.answerId === id && byId?.cacheKey === answerKey && byId.pack?.extra.length === 0,
    tag("answer round trip by key and by id"),
  );
  await store.countAnswerHit(id);
  const loose = await store.putAnswer(answer(null));
  expect(
    typeof loose === "string" && (await store.getAnswer(loose))?.cacheKey === null,
    tag("an answer without a cache key is stored"),
  );

  await store.logRequest({
    route: "ask",
    locale: "es",
    outcome: "ok",
    intent: "test-check",
    doctrines: ["eucharist"],
    promptVersion: "chat-test",
    models: { plan: "fake" },
    usage: null,
    costMicros: 0,
    latencyMs: { plan: 1 },
    quotesTotal: 1,
    quotesFailed: 0,
    repaired: false,
    cacheHit: false,
    answerId: null,
    question: "test-check",
    checks: null,
  });

  const alert = `test_check_${run}`;
  const alerts = [
    await store.markAlert(alert, "p1"),
    await store.markAlert(alert, "p1"),
    await store.markAlert(alert, "p2"),
  ];
  expect(alerts.join() === "true,false,true", tag(`markAlert fires once per period (got ${alerts.join()})`));

  await store.cleanup();
  return { answerIds: [id, loose], simplificationKey: key, answerKey, alert, bucket };
}

async function removeSupabaseRows(created) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  const headers = { apikey: key, Authorization: `Bearer ${key}` };
  const drop = (path) => fetch(`${url}/rest/v1/${path}`, { method: "DELETE", headers });
  await drop(`ai_usage_counters?bucket=like.${PREFIX}*`);
  await drop(`ai_spend?period=in.(d:${DAY},m:${MONTH})`);
  await drop(`ai_simplifications?cache_key=like.${PREFIX}*`);
  await drop(`ai_answers?answer_id=in.(${created.answerIds.join(",")})`);
  await drop("ai_requests?intent=eq.test-check");
  const read = await fetch(`${url}/rest/v1/ai_settings?select=last_alerts&id=eq.1`, { headers });
  const [row] = await read.json();
  const cleaned = Object.fromEntries(
    Object.entries(row?.last_alerts ?? {}).filter(([name]) => !name.startsWith("test_check_")),
  );
  await fetch(`${url}/rest/v1/ai_settings?id=eq.1`, {
    method: "PATCH",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ last_alerts: cleaned }),
  });
}

await runCases("memory", new MemoryAiStore());

let ran = "memory";
if (process.env.AI_STORE === "supabase") {
  try {
    process.loadEnvFile("apps/web/.env.local");
  } catch {
    // the variables may already be in the environment
  }
  const { SupabaseAiStore } = await import("@/content/ai-store/supabase-store");
  const { selectRows } = await import("@/content/supabase-rpc");
  const present = await selectRows("ai_settings", "select=id&id=eq.1").then(
    (rows) => rows.length === 1,
    () => false,
  );
  if (present) {
    const created = await runCases("supabase", new SupabaseAiStore());
    await removeSupabaseRows(created);
    ran = "memory+supabase";
  } else {
    console.log("supabase skipped: the AI tables do not exist yet");
  }
}

if (failures.length) throw new Error(failures.join("\n"));
console.log(`ok ${checks} checks (${ran})`);
