process.env.NEXT_PUBLIC_SIMPLIFIER = "on";

const { existsSync, readFileSync, readdirSync } = await import("node:fs");
if (!existsSync("data/corpus/fathers")) {
  console.log("check-simplify.mjs: skipped, no Fathers corpus here (the git-only CI)");
  process.exit(0);
}
const { parseAddress, resolveAddress } = await import("@/content/ai-simplify/resolve-address");
const {
  simplificationKey,
  readSimplification: readServable,
  generatesLive,
  writeSimplification,
  readStoredSimplification,
  sourceTextSha256,
} = await import("@/content/ai-simplify/cache");
const { seedFixture } = await import("@/content/ai-simplify/seed-fixtures");
const { getSimplifiedText } = await import("@/content/simplified-texts");
const { checkSimplification, levelSeparation, SEPARATION, SEPARATION_WITH_MARGIN } =
  await import("@/features/simplify/checks");
const { simplifyUserMessage, simplifySystemPrompt } = await import("@/features/simplify/prompt");
const { generateSimplification, SimplifyFailure, chunkSentences, failedCheckNames, realign } =
  await import("@/features/simplify/simplify");
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

const readSimplification = async (cacheKey, address) =>
  readServable(cacheKey, address, (await resolveAddress(address, "es")).text);
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
if (existsSync("data/corpus/fathers-es"))
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
  const { row } = await readSimplification(cacheKey, address);
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
    "El Catecismo 1374 dice que en la Eucaristía Cristo está presente. Lo está «verdadera, real y sustancialmente».",
    "Ignacio de Antioquía usa para ella la palabra εὐχαριστία. Lo hace cerca del año 110, cuando escribe a los de Esmirna.",
    "Para la Iglesia católica, este modo de estar presente es único.",
  ],
  very: [
    "El Catecismo 1374 habla de la Eucaristía. Dice que Cristo está ahí. Está «verdadera, real y sustancialmente».",
    "Ignacio de Antioquía le da el nombre εὐχαριστία. Escribió esto a la gente de Esmirna. Fue cerca del año 110.",
    "Para la Iglesia católica, esa presencia no tiene igual: es única.",
  ],
};
const goodReport = checkSimplification(original, good);
check(`a faithful simplification passes (${goodReport.failures.join(" | ")})`, goodReport.passed);

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
const copied = { clear: [...original], very: good.very };
const pieces = {
  clear: good.clear,
  very: good.clear.map((unit) => unit.replace(/, /g, ". ").replace(/ y /g, ". Y ")),
};
const longVery = { ...good, very: [good.very.join(" ").replace(/\. /g, ", y ")] };
bad.push(
  ["clear copies the original", copied, "levels"],
  ["very is clear cut into pieces", pieces, "levels"],
  [
    "English inside a Spanish level",
    swap(
      "very",
      2,
      "Para la Iglesia católica, esa presencia no tiene igual: es única.",
      "Para la Iglesia católica, esa presencia es única. The bread is not a missing body.",
    ),
    "language",
  ],
  ["very keeps long sentences", { ...longVery, very: [longVery.very[0], good.very[1], good.very[2]] }, "levels"],
);
for (const [name, output, failed] of bad) {
  const report = checkSimplification(original, output);
  check(`bad output caught: ${name}`, !report.passed && report.results[failed] === false && report.failures.length > 0);
}

const english = {
  original: [
    "Wherefore, brethren, let us not grow weary in well-doing, neither let us be dismayed by the afflictions which befall us, knowing that he who promised is faithful, and that the reward of patience is laid up for them that endure unto the end.",
  ],
  clear: [
    "So, brothers, let us not get tired of doing good. Let us not lose heart because of the troubles that come to us. We know that he who made the promise is faithful. A reward for patience is kept for those who hold on to the end.",
  ],
  very: [
    "So, brothers, let us keep doing good. Hard things will happen to us. Let us not give up. He who made the promise keeps his word. People who wait and hold on to the end will get a reward.",
  ],
};
check("an English pair at two clear levels passes", levelSeparation(english.original, english, "en").length === 0);
check(
  "the language of the levels gate is inferred when not given",
  checkSimplification(english.original, english).results.levels &&
    !checkSimplification(english.original, { ...english, clear: english.original }).results.levels,
);
check(
  "a levels failure tells the model what to change",
  levelSeparation(english.original, { ...english, very: english.clear }, "en").some((failure) =>
    failure.includes('not "clear" cut into pieces'),
  ),
);
const easyOriginal = ["Dios es amor."];
check(
  "an original that is already easy is not pushed further",
  levelSeparation(easyOriginal, { clear: ["Dios es amor."], very: ["Dios ama."] }, "es").every(
    (failure) => !failure.includes("grades easier"),
  ),
);

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
const racing = scripted([{ json: bad[0][1] }, { json: good }]);
const raced = await generateSimplification(racing.provider, paragraph, { allowIdentity: false });
check(
  "two candidates run in parallel and a passing one wins the first round",
  raced.attempts === 1 && raced.report.passed && racing.calls.length === 2 && raced.costMicros === 150,
);
const repaired = scripted([{ json: bad[0][1] }, { json: bad[0][1] }, { json: good }]);
const fixed = await generateSimplification(repaired.provider, paragraph, { allowIdentity: false });
check("the second round repairs a failed output", fixed.attempts === 2 && fixed.report.passed);
check(
  "the second round sends one repair with the failures and one fresh generation",
  repaired.calls[2].user.includes("failed these checks") &&
    repaired.calls[2].user.includes("1374") &&
    !repaired.calls[3].user.includes("failed these checks"),
);
check("cost adds every call", fixed.costMicros === 300 && fixed.usage.inputTokens === 400);

const hopeless = scripted([{ json: bad[0][1] }]);
await rejects(
  "two failed outputs give ai_simplify_failed",
  () => generateSimplification(hopeless.provider, paragraph, { allowIdentity: false }),
  "ai_simplify_failed",
);
check("no fifth call after two failed rounds", hopeless.calls.length === 4);
try {
  await generateSimplification(scripted([{ json: { clear: [] } }]).provider, paragraph, { allowIdentity: false });
} catch (error) {
  check("a failure carries its spend", error instanceof SimplifyFailure && error.spent?.costMicros === 300);
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
  afterTruncation.report.passed && truncated.calls[2].maxTokens === Math.ceil(truncated.calls[0].maxTokens * 1.5),
);
check(
  "the call uses the simplify role and a cached system",
  truncated.calls[0].role === "simplify" && truncated.calls[0].cacheSystem,
);

const statementAddress = { kind: "statement", doctrine: "baptism", tradition: "orthodox", id: "QE-1" };
const fatherAddress = { kind: "father", work: "ignatius-smyrnaeans", edition: "lightfoot-1889", locator: "7.1" };
check(
  "only Father divisions generate live",
  generatesLive(fatherAddress) &&
    !generatesLive(statementAddress) &&
    !generatesLive({ kind: "doctrine", doctrine: "baptism", section: "common", id: "text" }) &&
    !generatesLive({ kind: "glossary", term: "magisterio", tradition: "catholic" }),
);
const rowFor = async (address, status, extra = {}) => {
  const paragraph = await resolveAddress(address, "es");
  const cacheKey = simplificationKey(address, paragraph);
  const original = splitSentences(paragraph.text);
  await writeSimplification({
    cacheKey,
    address,
    textSha256: sourceTextSha256(paragraph.text),
    sourceLang: paragraph.sourceLang,
    outputLang: paragraph.sourceLang,
    model: "test",
    promptVersion: "test",
    original,
    clear: original,
    very: original,
    status,
    checks: {},
    tokensIn: 0,
    tokensOut: 0,
    costMicros: 0,
    ...extra,
  });
  return cacheKey;
};
const generatedStatement = await rowFor(statementAddress, "generated");
check(
  "a generated tradition-page row is never served",
  (await readSimplification(generatedStatement, statementAddress)).row === null &&
    (await readStoredSimplification(generatedStatement))?.status === "generated",
);
await rowFor(statementAddress, "reviewed");
check(
  "a reviewed tradition-page row is served",
  (await readSimplification(generatedStatement, statementAddress)).row?.status === "reviewed",
);
const checkedAddress = { kind: "statement", doctrine: "eucharist", tradition: "lutheran", id: "QE-2" };
const aiChecked = { fidelity: { model: "claude-sonnet-5-5", passed: true, at: "2026-11-08T00:00:00Z", issues: [] } };
const checkedKey = await rowFor(checkedAddress, "generated", { checks: aiChecked });
check(
  "an AI-checked tradition-page row is served as generated",
  (await readSimplification(checkedKey, checkedAddress)).row?.status === "generated",
);
await rowFor(checkedAddress, "generated", { checks: aiChecked, textSha256: "stale" });
check("a stale AI-checked row is not served", (await readSimplification(checkedKey, checkedAddress)).row === null);
await rowFor(checkedAddress, "generated", { checks: { fidelity: { ...aiChecked.fidelity, passed: false } } });
check("a row the judge failed is not served", (await readSimplification(checkedKey, checkedAddress)).row === null);
await rowFor(checkedAddress, "generated", { checks: { fidelity: true } });
check("a live meaning flag is not an AI check", (await readSimplification(checkedKey, checkedAddress)).row === null);
await rowFor(checkedAddress, "rejected", { checks: aiChecked });
check("a rejected AI-checked row is not served", (await readSimplification(checkedKey, checkedAddress)).row === null);
const generatedFather = await rowFor(fatherAddress, "generated");
check(
  "a generated Father row is served",
  (await readSimplification(generatedFather, fatherAddress)).row?.status === "generated",
);
const rejectedFather = await rowFor(fatherAddress, "rejected");
check("a rejected row is never served", (await readSimplification(rejectedFather, fatherAddress)).row === null);
check(
  "seeding refuses a real provider",
  !(await seedFixture({ id: "anthropic", call: async () => ({}) }, ignatius, resolved, key)),
);
const reviewedWriters = ["src", "tools"]
  .flatMap((root) => readdirSync(root, { recursive: true }).map((file) => `${root}/${file}`))
  .filter((file) => /\.(ts|tsx|mjs)$/.test(file) && !file.startsWith("tools/ai-checks/"))
  .filter((file) => /status: "reviewed"|"--approve", "reviewed"/.test(readFileSync(file, "utf8")));
check(
  `only --approve and the fake seed write reviewed rows (${reviewedWriters.join(", ")})`,
  reviewedWriters.sort().join(",") === "src/content/ai-simplify/seed-fixtures.ts,tools/ai-review-simplifications.mjs",
);

const fidelityWriters = ["src", "tools"]
  .flatMap((root) => readdirSync(root, { recursive: true }).map((file) => `${root}/${file}`))
  .filter((file) => /\.(ts|tsx|mjs)$/.test(file) && !file.startsWith("tools/ai-checks/"))
  .filter((file) => /fidelity:\s*\{[\s\S]{0,300}?passed:\s*true/.test(readFileSync(file, "utf8")));
check(
  `only the pregeneration pipeline writes checks.fidelity.passed (${fidelityWriters.join(", ")})`,
  fidelityWriters.join(",") === "tools/ai-pregenerate-simplifications.mjs",
);

const longSentences = Array.from(
  { length: 32 },
  (_, index) => `Sentence ${index} ${"word ".repeat(18 + (index % 5))}end.`,
);
const chunks = chunkSentences(longSentences);
const chunkWords = chunks.map((chunk) => chunk.join(" ").split(/\s+/).length);
check(
  `a long paragraph splits at sentence boundaries into balanced parts (${chunkWords.join(", ")})`,
  chunks.length === 5 && chunks.flat().join("|") === longSentences.join("|") && Math.max(...chunkWords) <= 200,
);
check(
  "archaic pronouns are not names, titles still are",
  checkSimplification(["For He gave it to Thee, and the Lord kept it."], {
    clear: ["For he gave it to you, and the Lord kept it."],
    very: ["He gave it to you. The Lord kept it."],
  }).results.names &&
    !checkSimplification(["For He gave it to Thee, and the Lord kept it."], {
      clear: ["For he gave it to you, and God kept it."],
      very: ["He gave it to you. God kept it."],
    }).results.names,
);
check("a short paragraph stays one part", chunkSentences(longSentences.slice(0, 5)).length === 1);
const echo = { id: "anthropic", calls: 0 };
echo.call = async (input) => {
  echo.calls += 1;
  return {
    json: (await fake.call(input)).json,
    usage: { inputTokens: 10, cachedInputTokens: 0, cacheWriteTokens: 0, outputTokens: 10 },
    provider: "anthropic",
    model: "claude-haiku-5-5",
    costMicros: 5,
    latencyMs: 100,
    stopReason: "end",
  };
};
const longParagraph = {
  text: longSentences.join(" "),
  sourceLang: "en",
  editionId: null,
  speaker: "test",
  simplifiable: true,
};
const parallel = await generateSimplification(echo, longParagraph, { allowIdentity: true });
check(
  "a long paragraph is simplified in parallel parts and stays aligned",
  echo.calls === 10 &&
    parallel.original.join("|") === longSentences.join("|") &&
    parallel.levels.clear.length === longSentences.length &&
    parallel.costMicros === 50 &&
    parallel.latencyMs === 100,
);

const verdicts = (answers) => {
  const calls = [];
  return {
    calls,
    provider: {
      id: "anthropic",
      async call(input) {
        calls.push(input);
        const judged = calls.filter((call) => call.role === "fidelity").length;
        const json = input.role === "fidelity" ? answers[Math.min(judged - 1, answers.length - 1)] : good;
        return {
          json,
          usage: { inputTokens: 10, cachedInputTokens: 0, cacheWriteTokens: 0, outputTokens: 10 },
          provider: "anthropic",
          model: "claude-haiku-5-5",
          costMicros: 7,
          latencyMs: 10,
          stopReason: "end",
        };
      },
    },
  };
};
const shifted = {
  changes: [
    {
      level: "very",
      kind: "term",
      original: "verdadera, real y sustancialmente",
      rewrite: "de algún modo",
      reader: "the presence is no longer substantial",
      verdict: "different meaning",
    },
  ],
};
const sameOnly = { changes: [{ ...shifted.changes[0], verdict: "same meaning" }] };
const repairedByJudge = verdicts([shifted, shifted, sameOnly]);
const judgedOk = await generateSimplification(repairedByJudge.provider, paragraph, {
  allowIdentity: false,
  fidelity: true,
});
check(
  "a fidelity failure goes into the repair loop and lists the change",
  judgedOk.attempts === 2 &&
    judgedOk.report.results.meaning &&
    repairedByJudge.calls.some((call) => call.role === "simplify" && call.user.includes("de algún modo")) &&
    repairedByJudge.calls.filter((call) => call.role === "fidelity").length === 4,
);
await rejects(
  "two fidelity failures give ai_simplify_failed",
  () => generateSimplification(verdicts([shifted]).provider, paragraph, { allowIdentity: false, fidelity: true }),
  "ai_simplify_failed",
);
await rejects(
  "an unreadable fidelity verdict fails closed",
  () =>
    generateSimplification(verdicts([{ nonsense: true }]).provider, paragraph, {
      allowIdentity: false,
      fidelity: true,
    }),
  "ai_simplify_failed",
);
const unjudged = verdicts([shifted]);
await generateSimplification(unjudged.provider, paragraph, { allowIdentity: false });
check(
  "with the switch off the judge is never called",
  unjudged.calls.every((call) => call.role !== "fidelity"),
);

const { isSimplificationServed } = await import("@/content/ai-simplify/served");
const { manifestSource } = await import("../ai-write-simplified-manifest.mjs");
const { pickSample } = await import("../ai-review-simplifications.mjs");
const manifestAddress = { kind: "statement", doctrine: "eucharist", tradition: "lutheran", id: "QE-2" };
const manifestText = (await resolveAddress(manifestAddress, "es")).text;
check(
  "the manifest accessor serves Fathers, listed fresh paragraphs, and nothing stale or unlisted",
  (await isSimplificationServed(fatherAddress, {})) &&
    (await isSimplificationServed(manifestAddress, { "eucharist/lutheran/QE-2": sourceTextSha256(manifestText) })) &&
    !(await isSimplificationServed(manifestAddress, { "eucharist/lutheran/QE-2": "stale" })) &&
    !(await isSimplificationServed(manifestAddress, {})),
);
check(
  "the manifest source is sorted and parseable",
  manifestSource(
    new Map([
      ["b", "2"],
      ["a", "1"],
    ]),
  ) === 'export const simplifiedManifest: Readonly<Record<string, string>> = {\n  "a": "1",\n  "b": "2",\n};\n' &&
    manifestSource(new Map()) === "export const simplifiedManifest: Readonly<Record<string, string>> = {};\n",
);
const sampleEntries = ["catholic", "orthodox", "lutheran", "reformed", "baptist"].flatMap((tradition) =>
  [1, 2, 3].map((n) => ({
    id: `x/${tradition}/${n}`,
    item: { address: { kind: "statement", doctrine: "x", tradition, id: String(n) }, resolved: { text: "t" } },
    row: { status: "generated", textSha256: sourceTextSha256("t"), checks: aiChecked },
  })),
);
const sample = pickSample(sampleEntries, 10);
const perTradition = new Map();
for (const entry of sample)
  perTradition.set(entry.item.address.tradition, (perTradition.get(entry.item.address.tradition) ?? 0) + 1);
check(
  "the sample takes two AI-checked paragraphs from each of the five traditions",
  sample.length === 10 && [...perTradition.values()].every((count) => count === 2) && perTradition.size === 5,
);
check(
  "the sample skips rows that are not AI-checked",
  pickSample(
    sampleEntries.map((entry) => ({ ...entry, row: { ...entry.row, checks: {} } })),
    10,
  ).length === 0,
);

const termOriginal = [
  "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, instituido en la última Cena para hacer presente el sacrificio de la cruz.",
];
const termLevels = {
  clear: [
    "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo. Fue instituido en la última Cena. Su fin es hacer presente el sacrificio de la cruz.",
  ],
  very: [
    "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo. Fue instituido en la última Cena. Sirve para hacer presente el sacrificio de la cruz.",
  ],
};
const termList = ["sacrificio", "cuerpo y la sangre", "instituido", "última Cena", "hacer presente"];
const copiedPairs = (failures) => Number(/(\d+) % of the word pairs of "very"/.exec(failures.join(" "))?.[1] ?? 0);
check(
  "kept doctrinal terms do not count as copied word pairs",
  copiedPairs(levelSeparation(termOriginal, termLevels, "es", termList)) <
    copiedPairs(levelSeparation(termOriginal, termLevels, "es")),
);
check(
  "the user message lists the paragraph's doctrinal terms",
  simplifyUserMessage({
    sentences: termOriginal,
    speaker: "x",
    outputLang: "es",
    failures: [],
    terms: termList,
  }).includes(
    "doctrinal terms to keep exactly, with their articles and qualifiers, in both levels (write them as plain words, never in quotation marks): sacrificio; cuerpo y la sangre",
  ) &&
    !simplifyUserMessage({ sentences: termOriginal, speaker: "x", outputLang: "es", failures: [] }).includes(
      "doctrinal terms",
    ),
);
const { paragraphTerms } = await import("../ai-pregenerate-simplifications.mjs");
check(
  "the pipeline finds the paragraph's doctrinal terms in their written form",
  paragraphTerms(termOriginal[0]).join("|") ===
    ["sacrificio", "cuerpo y la sangre", "instituido", "hacer presente", "última Cena"].join("|") ||
    ["sacrificio", "cuerpo y la sangre", "instituido", "hacer presente", "última Cena"].every((term) =>
      paragraphTerms(termOriginal[0]).includes(term),
    ),
);

const greekSource = ["They call it Ε\u1f50χαριστ\u1f77α, as we were taught."];
const greekOutput = "They call it Ε\u1f50χαριστ\u1f77α, as we were taught.".normalize("NFC");
check(
  "a Greek word in another Unicode form of the same letters passes names and scripts",
  greekOutput !== greekSource[0] &&
    checkSimplification(greekSource, { clear: [greekOutput], very: [greekOutput] }).results.names &&
    checkSimplification(greekSource, { clear: [greekOutput], very: [greekOutput] }).results.scripts,
);
check(
  "the failed checks are recorded by name",
  failedCheckNames({ passed: false, results: {}, failures: ["part 2: levels: x", "names: y", "levels: z"] }).join(
    ",",
  ) === "levels,names",
);

const realignOriginal = [
  "Shun divisions.",
  "Follow your bishop, as Jesus Christ followed the Father.",
  "Do nothing apart from the bishop.",
];
check(
  "one extra entry is merged into the sentence it belongs to",
  realign(realignOriginal, [
    "Avoid splits.",
    "Follow your bishop.",
    "Do it as Jesus Christ followed the Father.",
    "Do nothing without the bishop.",
  ]).join("|") ===
    [
      "Avoid splits.",
      "Follow your bishop. Do it as Jesus Christ followed the Father.",
      "Do nothing without the bishop.",
    ].join("|") && realign(realignOriginal, ["a", "b"]).length === 2,
);
check(
  "several extra entries are grouped back onto their sentences",
  realign(realignOriginal, [
    "Avoid",
    "splits.",
    "Follow your bishop.",
    "As Jesus Christ followed the Father.",
    "Do nothing",
    "without the bishop.",
  ]).join("|") ===
    [
      "Avoid splits.",
      "Follow your bishop. As Jesus Christ followed the Father.",
      "Do nothing without the bishop.",
    ].join("|"),
);
check(
  "a judgement the original sentence already states in its own words is not added",
  checkSimplification(["And we have been taught, and are convinced, and do believe, that He accepts them."], {
    clear: ["We were taught this, we are sure of it and we believe that He accepts them."],
    very: ["We believe that He accepts them."],
  }).results.claims &&
    !checkSimplification(["He accepts them."], { clear: ["He accepts them."], very: ["We believe He accepts them."] })
      .results.claims,
);
check(
  "the margin only loosens the level gate a little",
  SEPARATION_WITH_MARGIN.clear.maxOverlap > SEPARATION.clear.maxOverlap &&
    SEPARATION_WITH_MARGIN.clear.maxOverlap <= 0.8 &&
    SEPARATION_WITH_MARGIN.very.maxOverlap <= 0.65 &&
    SEPARATION_WITH_MARGIN.very.maxOverlapClear <= 0.75 &&
    SEPARATION_WITH_MARGIN.very.gradeDrop >= 3 &&
    SEPARATION_WITH_MARGIN.very.maxSentenceWords <= 14,
);

const { toSimplifyResponse } = await import("@/content/ai-simplify/cache");
const { fidelityRequest } = await import("@/features/simplify/fidelity");
check(
  "a clear-only output passes without a «very» level and fails on «clear» faults",
  checkSimplification(original, { clear: good.clear, very: good.clear }, { allowIdentity: false, onlyClear: true })
    .passed &&
    !checkSimplification(original, { clear: good.clear, very: good.clear }).passed &&
    !checkSimplification(
      original,
      { clear: swap("clear", 0, "1374", "1375").clear, very: good.clear },
      {
        allowIdentity: false,
        onlyClear: true,
      },
    ).passed,
);
const clearOnlyRow = {
  address: fatherAddress,
  outputLang: "es",
  original: ["a"],
  clear: ["b"],
  very: ["b"],
  status: "generated",
  checks: { levels: ["clear"] },
};
check(
  "a clear-only row answers with levels: [clear]; a two-level row has no levels field",
  JSON.stringify(toSimplifyResponse(clearOnlyRow, true).levels) === '["clear"]' &&
    toSimplifyResponse({ ...clearOnlyRow, checks: {}, very: ["c"] }, true).levels === undefined &&
    JSON.stringify(
      toSimplifyResponse({ ...clearOnlyRow, checks: {}, very: ["c"], address: statementAddress }, true).levels,
    ) === '["clear"]',
);
check(
  "the judge sees only «clear» for a clear-only paragraph",
  !fidelityRequest(["a"], { clear: ["b"], very: ["c"] }, true).user.includes("very:") &&
    fidelityRequest(["a"], { clear: ["b"], very: ["c"] }).user.includes("very:"),
);
check(
  "the user message asks for «clear» only when told",
  simplifyUserMessage({ sentences: ["a"], speaker: "x", outputLang: "es", failures: [], onlyClear: true }).includes(
    'only "clear" is used',
  ),
);

check(
  "words the original does not quote cannot be put in quotation marks",
  !checkSimplification(["La Santa Cena es el verdadero cuerpo de Cristo."], {
    clear: ["La Santa Cena es el «verdadero cuerpo» de Cristo."],
    very: ["La Santa Cena es el verdadero cuerpo de Cristo."],
  }).results.quotes &&
    checkSimplification(["La Iglesia lo llama «transubstanciación»."], {
      clear: ["La Iglesia lo llama «transubstanciación»."],
      very: ["La Iglesia le dice «transubstanciación»."],
    }).results.quotes,
);

console.log(`ok ${count} checks`);
