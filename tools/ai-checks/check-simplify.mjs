process.env.NEXT_PUBLIC_SIMPLIFIER = "on";

const { readFileSync } = await import("node:fs");
const { parseAddress, resolveAddress } = await import("@/content/ai-simplify/resolve-address");
const { simplificationKey, readSimplification } = await import("@/content/ai-simplify/cache");
const { seedFixture } = await import("@/content/ai-simplify/seed-fixtures");
const { getSimplifiedText } = await import("@/content/simplified-texts");
const { checkSimplification } = await import("@/features/simplify/checks");
const { simplifyUserMessage, simplifySystemPrompt } = await import("@/features/simplify/prompt");
const { generateSimplification, SimplifyFailure } = await import("@/features/simplify/simplify");
const { FakeProvider } = await import("@/lib/ai/fake-provider");
const { canSimplify } = await import("@/lib/ai/simplify-limits");
const { splitSentences } = await import("@/lib/ai/sentences");

let count = 0;
function check(name, condition) {
  if (!condition) throw new Error(`check-simplify: ${name}`);
  count += 1;
}

async function rejects(name, run, code) {
  try {
    await run();
  } catch (error) {
    check(`${name} (got ${error?.code ?? error})`, error?.code === code);
    return;
  }
  throw new Error(`check-simplify: ${name} did not throw ${code}`);
}

const ignatius = { kind: "father", work: "ignatius-smyrnaeans", edition: "lightfoot-1889", locator: "6.2" };
const fake = new FakeProvider();

await rejects(
  "a Bible address is not simplifiable",
  () => parseAddress({ kind: "bible", book: "John" }),
  "ai_not_simplifiable",
);
await rejects("an unknown kind is a bad request", () => parseAddress({ kind: "psalm" }), "ai_bad_request");
await rejects(
  "an unknown work is not found",
  () => resolveAddress({ ...ignatius, work: "no-such-work" }, "es"),
  "ai_not_found",
);
await rejects(
  "an unknown locator is not found",
  () => resolveAddress({ ...ignatius, locator: "99.9" }, "es"),
  "ai_not_found",
);
await rejects(
  "the AI-translated Spanish edition is not simplifiable",
  () => resolveAddress({ ...ignatius, edition: "doctrina-ia-2026" }, "es"),
  "ai_not_simplifiable",
);
await rejects(
  "a tradition without a page is not found",
  () => resolveAddress({ kind: "statement", doctrine: "eucharist", tradition: "pentecostal", id: "definition" }, "es"),
  "ai_not_found",
);
await rejects(
  "a practice cell is not simplifiable",
  () => resolveAddress({ kind: "doctrine", doctrine: "eucharist", section: "practice", id: "presides" }, "es"),
  "ai_not_simplifiable",
);
check("1,500 words pass canSimplify", canSimplify(Array(1500).fill("pan").join(" ")));
check("1,501 words fail canSimplify", !canSimplify(Array(1501).fill("pan").join(" ")));

const resolved = await resolveAddress(ignatius, "es");
check("Ignatius resolves in English", resolved.sourceLang === "en" && resolved.editionId === "lightfoot-1889");
check("Ignatius is simplifiable", resolved.simplifiable);
const statement = await resolveAddress(
  { kind: "statement", doctrine: "eucharist", tradition: "catholic", id: "QE-1" },
  "es",
);
check("statement markup is stripped", !/[{}]/.test(statement.text) && statement.sourceLang === "es");
const withVerse = await resolveAddress(
  { kind: "statement", doctrine: "eucharist", tradition: "catholic", id: "definition" },
  "es",
);
check("definition resolves to plain text", !withVerse.text.includes("{v:"));
const common = await resolveAddress({ kind: "doctrine", doctrine: "eucharist", section: "common", id: "text" }, "es");
check("the 02 common paragraph resolves", common.text.startsWith("Todas las tradiciones"));

const key = simplificationKey(ignatius, resolved);
check("cache key is 64 lower-case hex", /^[0-9a-f]{64}$/.test(key));
check("cache key is stable", key === simplificationKey(ignatius, { ...resolved }));
check(
  "cache key changes with the text",
  key !== simplificationKey(ignatius, { ...resolved, text: `${resolved.text} ` }),
);
check(
  "cache key changes with the edition",
  key !== simplificationKey({ ...ignatius, edition: "other-1900" }, resolved),
);
check(
  "cache key changes with the source language",
  key !== simplificationKey(ignatius, { ...resolved, sourceLang: "es" }),
);
check(
  "cache key ignores the locator (text first)",
  key === simplificationKey({ ...ignatius, locator: "6.3" }, resolved),
);

const ids = [...readFileSync("src/content/simplified-texts.ts", "utf8").matchAll(/^ {2}"([^"]+)": \{/gm)].map(
  (match) => match[1],
);
check("the test build has 25 mock paragraphs", ids.length === 25);
let served = 0;
for (const id of ids) {
  const parts = id.split("/");
  const address =
    parts.length === 3
      ? { kind: "statement", doctrine: parts[0], tradition: parts[1], id: parts[2] }
      : { kind: "father", work: parts[0], edition: "lightfoot-1889", locator: parts[1] };
  const paragraph = await resolveAddress(address, "es");
  const cacheKey = simplificationKey(address, paragraph);
  await seedFixture(fake, address, paragraph, cacheKey);
  const { row } = await readSimplification(cacheKey);
  const mock = getSimplifiedText(id);
  if (row && row.status === "reviewed" && JSON.stringify(row.very) === JSON.stringify(mock.very)) served += 1;
}
check(`every mock paragraph is served from the seed (${served})`, served === 25);

const sentences = splitSentences(resolved.text);
const user = simplifyUserMessage({ sentences, speaker: resolved.speaker, outputLang: "en", failures: [] });
check(
  "the user message numbers every sentence",
  sentences.every((sentence, index) => user.includes(`${index + 1}. ${sentence}`)),
);
check("the system prompt names the output language", simplifySystemPrompt("es").includes("Write in Spanish."));
check("the system prompt is the canonical text", simplifySystemPrompt("en").startsWith("You rewrite one paragraph"));
const identity = await generateSimplification(fake, resolved, { allowIdentity: true });
check("fake output is aligned", identity.levels.clear.length === identity.original.length);
check(
  "fake output is the identity",
  identity.levels.very.every((unit, index) => unit === identity.original[index]),
);
check("identity passes the checks in fake mode", identity.report.passed && identity.attempts === 1);
check(
  "identity fails the very-shorter check otherwise",
  !checkSimplification(identity.original, identity.levels).passed,
);

const original = [
  "Según el Catecismo 1374, Cristo está presente «verdadera, real y sustancialmente» en la Eucaristía.",
  "Ignacio de Antioquía la llama εὐχαριστία en su carta a los de Esmirna, hacia el año 110.",
  "Para la Iglesia católica, ese modo de presencia es único.",
];
const good = {
  clear: [
    "Según el Catecismo 1374, Cristo está presente en la Eucaristía «verdadera, real y sustancialmente».",
    "Ignacio de Antioquía la llama εὐχαριστία en su carta a los de Esmirna, cerca del año 110.",
    "Para la Iglesia católica, ese modo de estar presente es único.",
  ],
  very: [
    "El Catecismo 1374 dice que Cristo está en la Eucaristía. Está «verdadera, real y sustancialmente».",
    "Ignacio de Antioquía la llama εὐχαριστία. Lo dice en su carta a los de Esmirna, cerca del año 110.",
    "Para la Iglesia católica, esa presencia es única.",
  ],
};
check("a faithful simplification passes", checkSimplification(original, good).passed);

const swap = (level, index, from, to) => ({
  ...good,
  [level]: good[level].map((unit, at) => (at === index ? unit.replace(from, to) : unit)),
});
const bad = [
  ["changed number", swap("clear", 0, "1374", "1375"), "numbers"],
  ["dropped quote", swap("very", 0, " Está «verdadera, real y sustancialmente».", ""), "quotes"],
  ["added name", swap("clear", 2, "único.", "único, como enseñó Jesús."), "names"],
  ["wrong count", { ...good, very: good.very.slice(0, 2) }, "shape"],
  ["too long", { ...good, clear: good.clear.map((unit) => `${unit} ${unit} ${unit}`) }, "length"],
  ["added «esto significa»", swap("very", 2, "única.", "única. Esto significa que no hay otra igual."), "claims"],
  ["dropped Greek word", swap("very", 1, "εὐχαριστία", "eucaristía"), "scripts"],
  ["empty unit", { ...good, very: [good.very[0], "  ", good.very[2]] }, "shape"],
  ["added verdict", swap("clear", 2, "es único", "es claramente único"), "claims"],
  ["added tradition", swap("very", 2, "única.", "única, a diferencia de los luteranos."), "names"],
  ["dropped attribution", swap("very", 2, "Para la Iglesia católica, esa", "Esa"), "names"],
  ["quote invented", swap("clear", 2, "es único", "es «único y verdadero»"), "quotes"],
];
for (const [name, output, failed] of bad) {
  const report = checkSimplification(original, output);
  check(`bad output caught: ${name}`, !report.passed && report.results[failed] === false && report.failures.length > 0);
}

function scripted(answers) {
  const calls = [];
  return {
    calls,
    provider: {
      id: "anthropic",
      async call(input) {
        calls.push(input);
        const next = answers[Math.min(calls.length - 1, answers.length - 1)];
        return {
          json: next.json ?? null,
          usage: { inputTokens: 100, cachedInputTokens: 0, cacheWriteTokens: 0, outputTokens: 50 },
          provider: "anthropic",
          model: "claude-haiku-5-5",
          costMicros: 75,
          latencyMs: 10,
          stopReason: next.stop ?? "end",
        };
      },
    },
  };
}

const paragraph = { text: original.join(" "), sourceLang: "es", editionId: null, speaker: "test", simplifiable: true };
const repaired = scripted([{ json: bad[0][1] }, { json: good }]);
const fixed = await generateSimplification(repaired.provider, paragraph, { allowIdentity: false });
check("one regeneration repairs a failed output", fixed.attempts === 2 && fixed.report.passed);
check(
  "the regeneration lists the failures",
  repaired.calls[1].user.includes("failed these checks") && repaired.calls[1].user.includes("1374"),
);
check("cost adds both calls", fixed.costMicros === 150 && fixed.usage.inputTokens === 200);

const hopeless = scripted([{ json: bad[0][1] }]);
await rejects(
  "two failed outputs give ai_simplify_failed",
  () => generateSimplification(hopeless.provider, paragraph, { allowIdentity: false }),
  "ai_simplify_failed",
);
check("no third call after two failures", hopeless.calls.length === 2);
try {
  await generateSimplification(scripted([{ json: { clear: [] } }]).provider, paragraph, { allowIdentity: false });
} catch (error) {
  check("a failure carries its spend", error instanceof SimplifyFailure && error.spent?.costMicros === 150);
}
await rejects(
  "a refusal gives ai_refused",
  () => generateSimplification(scripted([{ stop: "refusal" }]).provider, paragraph, { allowIdentity: false }),
  "ai_refused",
);
const truncated = scripted([{ stop: "max_tokens" }, { json: good }]);
const afterTruncation = await generateSimplification(truncated.provider, paragraph, { allowIdentity: false });
check(
  "max_tokens retries once with 1.5x the tokens",
  afterTruncation.report.passed && truncated.calls[1].maxTokens === Math.ceil(truncated.calls[0].maxTokens * 1.5),
);
check(
  "the call uses the simplify role and a cached system",
  truncated.calls[0].role === "simplify" && truncated.calls[0].cacheSystem,
);

console.log(`ok ${count} checks`);
