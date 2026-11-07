import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { JUDGE_BASE, JUDGE_SYSTEM, judgeAnswer, judgeUserText, normalizeJudgement } from "../ai-eval/judge.mjs";
import { buildReport, gateLines, persistToSupabase, summarize } from "../ai-eval/report.mjs";
import {
  displayedIds,
  estimateUsd,
  keyMatches,
  languageOf,
  parseSse,
  questionPassed,
  requestBody,
  resolveProvider,
  scoreAnswer,
  selectQuestions,
  verdictHits,
  wireProblems,
  wordCount,
} from "../ai-eval/run.mjs";

const failures = [];
let checks = 0;
const expect = (condition, message) => {
  checks += 1;
  if (!condition) failures.push(message);
};

const ROOT = resolve(fileURLToPath(new URL("../../", import.meta.url)));
const questions = JSON.parse(readFileSync(resolve(ROOT, "tools/ai-eval/questions.json"), "utf8"));
const fixture = JSON.parse(readFileSync(resolve(ROOT, "src/lib/ai/fixtures/wire-answer.es.json"), "utf8"));
const byId = (id) => questions.find((question) => question.id === id);
const clone = (value) => JSON.parse(JSON.stringify(value));

expect(questions.length === 92, `questions.json has ${questions.length} questions, expected 92`);
expect(new Set(questions.map((question) => question.id)).size === questions.length, "question ids are not unique");
expect(questions.filter((question) => question.tags.includes("brief")).length === 6, "expected 6 brief questions");
const noted = questions.filter((question) => question.tags.includes("notes"));
expect(
  noted.length === 4 && noted.every((question) => (question.notes ?? []).length > 0),
  "expected 4 note questions with notes",
);
expect(noted.filter((question) => question.lang === "es").length === 2, "expected 2 es and 2 en note questions");
for (const question of questions) {
  expect(
    ["evidence", "verdict_request", "pastoral", "out_of_scope", "injection"].includes(question.expect.intent),
    `${question.id}: intent`,
  );
  expect(["chapter", "work", "bible", "fathers", "all"].includes(question.scope), `${question.id}: scope`);
}

expect(JUDGE_SYSTEM.startsWith(JUDGE_BASE), "judge system prompt must start with the verbatim text");
expect(
  JUDGE_BASE.startsWith("You review one answer of a neutral study site on Christian doctrine."),
  "judge base start",
);
expect(JUDGE_BASE.endsWith("notes (one sentence, the problem if any)."), "judge base end");
for (const phrase of [
  "neutral (false if any sentence weighs, ranks or endorses a tradition or reading)",
  "fathersUnassigned (false if a Church Father is presented as belonging to or supporting a modern tradition)",
  'usefulness ("1" off-topic or empty, "2" partly answers with evidence, "3" answers with relevant evidence)',
]) {
  expect(JUDGE_BASE.includes(phrase), `judge base lacks: ${phrase}`);
}

expect(keyMatches("bible:rv1909:John.6.53", "John.6.53"), "osis exact");
expect(keyMatches("bible:bsb:John.6.51-58", "John.6.53"), "osis inside a range");
expect(!keyMatches("bible:bsb:John.6.54", "John.6.53"), "osis other verse");
expect(keyMatches("bible:rv1909:1Cor.11.24", "1Cor.11"), "osis chapter entry");
expect(!keyMatches("bible:rv1909:1Cor.12.1", "1Cor.11"), "osis other chapter");
expect(keyMatches("fathers:ignatius-smyrnaeans:lightfoot-1889:6.2:0", "fathers:ignatius-"), "key prefix");
expect(keyMatches("tradition:eucharist:orthodox:definition", "tradition:eucharist:orthodox"), "tradition prefix");
expect(!keyMatches("tradition:eucharist:catholic:definition", "tradition:eucharist:orthodox"), "other tradition");
expect(keyMatches("bible:bsb:Matt.16.18", "Matt.16.18"), "single verse");

expect(verdictHits("La verdad es que sí.").length === 1, "es verdict");
expect(verdictHits("Clearly the text says so.").length === 1, "en verdict");
expect(verdictHits("Es una posición equivocada.").length === 1, "equivocada");
expect(verdictHits("Esto es erróneamente leído.").length === 1, "accented erróneamente");
expect(
  verdictHits("Lutero escribió «la verdad es otra» en su carta.").length === 0,
  "verdict inside a quote is allowed",
);
expect(verdictHits("Ignacio escribe sobre la eucaristía {q:q1}.").length === 0, "clean prose");
expect(verdictHits("The Reformed proves nothing here. Calvin wrote.").length === 1, "proves is a verdict");
expect(verdictHits("The proofs are listed.").length === 0, "boundary: proofs is not proves");
expect(verdictHits("Algunos hablan de la herejía arriana.").length === 1, "herejía outside a quote");

expect(languageOf("El catecismo dice que la presencia es real y que el pan cambia") === "es", "language es");
expect(languageOf("The council says that the bread is the body of Christ and it is real") === "en", "language en");
expect(languageOf("Juan 6:53") === null, "language too short");
expect(wordCount("Una frase {q:q1} de cinco palabras {q:q2}") === 5, "word count strips tokens");

const sse = parseSse(
  'event: phase\ndata: {"phase":"plan"}\n\nevent: answer\ndata: {"a":1}\n\nevent: bad\ndata: {oops\n\n',
);
expect(sse.length === 3 && sse[0].event === "phase" && sse[1].data.a === 1 && sse[2].event === "malformed", "parseSse");

const body = requestBody(byId("m01"));
expect(
  body.turn === 2 &&
    body.history.length === 1 &&
    body.selection === null &&
    body.notes.length === 0 &&
    body.locale === "es",
  "requestBody multi-turn",
);
expect(requestBody(byId("k01")).selection.at.kind === "verse", "requestBody selection");
expect(requestBody(byId("nt01")).notes.length === 1 && requestBody(byId("nt01")).turn === 1, "requestBody notes");
expect(requestBody(byId("e01")).turn === 1, "requestBody first turn");

expect(selectQuestions(questions, { subset: "brief" }).length === 6, "subset brief");
expect(selectQuestions(questions, { subset: "brief,notes" }).length === 10, "subset two tags");
expect(
  selectQuestions(questions, { ids: "e01,v01" })
    .map((question) => question.id)
    .join() === "e01,v01",
  "ids",
);
expect(resolveProvider(undefined, { ANTHROPIC_API_KEY: "x" }) === "anthropic", "provider from key");
expect(resolveProvider(undefined, {}) === "fake", "provider default");
expect(resolveProvider("replay", { ANTHROPIC_API_KEY: "x", AI_PROVIDER: "fake" }) === "replay", "provider flag wins");
expect(resolveProvider(undefined, { AI_PROVIDER: "replay" }) === "replay", "provider env");
expect(estimateUsd(questions, { provider: "fake", judge: true }) === 0, "fake is free");
const real = estimateUsd(questions, { provider: "anthropic", judge: false });
expect(real > 0.2 && real < 0.6, `real estimate ${real}`);
expect(estimateUsd(questions, { provider: "anthropic", judge: true }) > real, "judge adds cost");

expect(wireProblems(fixture).length === 0, `fixture is a valid wire answer: ${wireProblems(fixture).join("; ")}`);
const broken = clone(fixture);
broken.blocks.push({ quote: "q99" });
expect(
  wireProblems(broken).some((problem) => problem.includes("q99")),
  "dangling block id",
);
const badKind = clone(fixture);
badKind.kind = "other";
expect(wireProblems(badKind).length > 0, "bad kind");
expect(wireProblems(null).length > 0 && wireProblems({}).length > 0, "empty answers are invalid");
expect(
  displayedIds(fixture).sort().join() === "q1,q2,q3",
  "displayed ids are blocks and prose tokens, not the whole pack",
);

const e02 = byId("e02");
const scored = scoreAnswer(e02, fixture);
expect(
  scored.checks.validWire === true && scored.checks.hasQuotes === true && scored.checks.quotesLiteral === true,
  "fixture basics",
);
expect(scored.checks.mustInclude === false && scored.recall === 0.5, "e02 recall from the fixture is half");
expect(scoreAnswer(byId("e12"), fixture).checks.mustInclude === true, "e12 recall from the fixture");
expect(scored.checks.language === false, "english question vs Spanish prose fails language");
expect(scored.checks.intentOk === true && scored.checks.kindOk === true, "intent and kind");
expect(scoreAnswer(byId("e01"), fixture).recall > 0 && scoreAnswer(byId("e01"), fixture).recall < 1, "partial recall");
expect(
  scoreAnswer(byId("e01"), fixture).packRecall >= scoreAnswer(byId("e01"), fixture).recall,
  "pack recall is not below shown recall",
);
expect(scoreAnswer(byId("v01"), fixture).checks.intentOk === false, "verdict question answered with evidence");
expect(scoreAnswer(byId("o01"), fixture).checks.kindOk === false, "out of scope answered with evidence");
const t = scoreAnswer(byId("e03"), fixture);
expect(t.checks.traditionsAll === false, "fixture misses most traditions");
expect(t.checks.richEnough === false, "fixture is not rich enough for a traditions question");
expect(scoreAnswer(byId("br01"), fixture).checks.richEnough === null, "brief questions have no richEnough");
expect(scoreAnswer(byId("n01"), fixture).checks.richEnough === null, "not_found questions have no richEnough");
const over = clone(fixture);
over.followups = ["a", "b", "c", "d"];
expect(scoreAnswer(e02, over).checks.limits === false, "four followups break limits");
const longProse = clone(fixture);
longProse.prose = `${"palabra ".repeat(151)}{q:q1}`;
expect(scoreAnswer(e02, longProse).checks.limits === false, "151 prose words break limits");
expect(
  scoreAnswer(
    byId("br01"),
    (() => {
      const a = clone(fixture);
      a.prose = `${"palabra ".repeat(61)}{q:q1}`;
      return a;
    })(),
  ).checks.limits === false,
  "61 prose words break the brief limit",
);
const lexical = clone(fixture);
lexical.prose = "Claramente la tradición católica tiene razón {q:q3}.";
expect(
  scoreAnswer(e02, lexical).checks.noVerdict === false && scoreAnswer(e02, lexical).verdictHits.length === 1,
  "verdict lexicon in prose",
);
const banned = scoreAnswer(byId("c02"), fixture);
expect(banned.checks.mustNotInclude === false, "c02 forbids fathers and traditions");
const cleanNo = scoreAnswer(byId("i06"), fixture);
expect(cleanNo.checks.mustNotInclude === true, "i06 forbids a baptist passage the fixture lacks");
const bad = scoreAnswer(e02, { kind: "evidence" });
expect(bad.checks.validWire === false && Object.keys(bad.checks).length === 1, "invalid answer short-circuits");
expect(questionPassed(e02, scored.checks) === false, "language failure fails the question");
expect(
  questionPassed(byId("e11"), scoreAnswer(byId("e11"), fixture).checks) === false,
  "a question whose source is in the pack but not displayed fails mustInclude",
);

const manyQuotes = clone(fixture);
for (let index = 6; index <= 30; index += 1) {
  manyQuotes.quotes[`q${index}`] = {
    ...clone(fixture.quotes.q1),
    id: `q${index}`,
    key: `fathers:work-${index}:ed:1:0`,
    who: `Father ${index}`,
  };
  manyQuotes.blocks.push({ quote: `q${index}` });
}
expect(scoreAnswer(e02, manyQuotes).checks.limits === false, "more than 24 quotes break limits");

const cathPage = clone(fixture);
cathPage.blocks.push({ quote: "q4" });
const trad = (id, tradition) => ({
  ...clone(fixture.quotes.q3),
  id,
  key: `tradition:eucharist:${tradition}:definition`,
  speaker: tradition,
});
const traditions = ["catholic", "orthodox", "lutheran", "reformed", "baptist"];
traditions.forEach((tradition, index) => {
  for (const suffix of ["a", "b"]) {
    const id = `t${index}${suffix}`;
    cathPage.quotes[id] = trad(id, tradition);
    cathPage.blocks.push({ quote: id, ...(suffix === "a" ? { head: tradition } : {}) });
  }
});
const e03 = byId("e03");
expect(scoreAnswer(e03, cathPage).checks.traditionsAll === true, "all five traditions present");
expect(
  scoreAnswer(e03, cathPage).checks.richEnough === true,
  "rich enough with 12+ quotes, authors and two per tradition",
);
const missingOne = clone(cathPage);
missingOne.blocks = missingOne.blocks.filter((block) => !block.quote.startsWith("t4"));
missingOne.scope = "Se consultaron textos.";
expect(scoreAnswer(e03, missingOne).checks.traditionsAll === false, "baptist missing");
missingOne.scope = "Se consultaron textos. Sin textos de: bautista.";
expect(scoreAnswer(e03, missingOne).checks.traditionsAll === true, "baptist listed as not found in the scope line");

const note = byId("nt01");
const withNote = (mutate) => {
  const answer = clone(fixture);
  answer.quotes.n1 = {
    ...clone(fixture.quotes.q1),
    id: "n1",
    key: "mine:1",
    who: "Tu nota",
    work: "Juan 3:5",
    speaker: "reader",
    text: "Nacer del agua es la Palabra",
  };
  mutate(answer);
  return answer;
};
const goodNote = withNote((a) => {
  a.blocks.push({ quote: "n1", head: "Tus notas" });
  a.prose = "La página bautista cita Romanos {q:q3}. En tu nota de Juan 3:5 planteaste otra lectura {q:n1}.";
});
expect(scoreAnswer(note, goodNote).checks.noteNotEvidence === true, "note in its own section, cited with 'tu nota'");
const noteUnder = withNote((a) => {
  a.blocks.push({ quote: "n1", head: "Padres de la Iglesia" });
});
expect(scoreAnswer(note, noteUnder).checks.noteNotEvidence === false, "note under another section");
const mixedCite = withNote((a) => {
  a.blocks.push({ quote: "n1", head: "Tus notas" });
  a.prose = "En tu nota y en la página católica se habla del agua {q:n1} {q:q3}.";
});
expect(scoreAnswer(note, mixedCite).checks.noteNotEvidence === false, "note cited with a source");
const noPhrase = withNote((a) => {
  a.blocks.push({ quote: "n1", head: "Tus notas" });
  a.prose = "El agua aparece en la lectura de Juan {q:n1}.";
});
expect(scoreAnswer(note, noPhrase).checks.noteNotEvidence === false, "note cited without 'tu nota'");
const repeated = withNote((a) => {
  a.blocks.push({ quote: "n1", head: "Tus notas" });
  a.prose = "Nacer del agua es la Palabra y el arrepentimiento, no un rito {q:q3}.";
});
expect(
  scoreAnswer(note, repeated).checks.noteNotEvidence === false,
  "the note's claim repeated in the answer's own voice",
);
const consultedNote = withNote((a) => {
  a.consulted.push("n1");
});
expect(scoreAnswer(note, consultedNote).checks.noteNotEvidence === false, "a note listed in consulted");
expect(scoreAnswer(byId("e01"), fixture).checks.noteNotEvidence === null, "no notes, no check");

const sample = (id, overrides = {}) => ({
  id,
  tags: byId(id).tags,
  lang: byId(id).lang,
  question: byId(id).question,
  expect: byId(id).expect,
  passed: true,
  checks: { validWire: true, noVerdict: true, quotesLiteral: true, hasQuotes: true },
  problems: [],
  recall: 1,
  packRecall: 1,
  missing: [],
  verdictHits: [],
  shown: 4,
  judge: null,
  costMicros: 0,
  latencyMs: 100,
  phases: [],
  error: null,
  answer: clone(fixture),
  ...overrides,
});
const runOf = (results) => ({
  startedAt: "2026-11-06T00:00:00Z",
  finishedAt: "2026-11-06T00:01:00Z",
  base: "http://x",
  provider: "fake",
  judge: false,
  estimateUsd: 0,
  spentUsdEstimate: 0,
  stopped: null,
  gitSha: "abc",
  results,
});
const green = gateLines([sample("v01"), sample("e01")], false);
expect(
  green.find((item) => item.name.includes("neutrality")).status === "PASS",
  "neutrality passes with a clean human set",
);
expect(green.find((item) => item.name.includes("recall")).status === "PASS", "recall passes at 100 %");
expect(green.find((item) => item.name.includes("relevant")).status === "N/A", "relevance needs the judge");
const red = gateLines(
  [sample("v01", { checks: { validWire: true, noVerdict: false } }), sample("e01", { recall: 0 })],
  false,
);
expect(red.find((item) => item.name.includes("neutrality")).status === "FAIL", "lexicon hit in the human set fails");
expect(red.find((item) => item.name.includes("recall")).status === "FAIL", "zero recall fails");
const judgedRed = gateLines(
  [sample("v01", { judge: { neutral: false, irrelevantQuotes: ["q1"], notBiasedByNotes: true } })],
  true,
);
expect(judgedRed.find((item) => item.name.includes("neutrality")).status === "FAIL", "judge neutral=false fails");
expect(
  judgedRed.find((item) => item.name.includes("relevant")).status === "FAIL",
  "1 of 4 irrelevant fails the 90 % line",
);
const report = buildReport(
  runOf([
    sample("v01"),
    sample("e01", {
      passed: false,
      error: { code: "ai_provider_down", status: 503 },
      answer: null,
      checks: { validWire: false },
    }),
  ]),
);
expect(
  report.includes("## Gate") && report.includes("## Questions") && report.includes("Human-read set (1 answers"),
  "report sections",
);
expect(
  report.includes("error:ai_provider_down") && report.includes("[Juan"),
  "report shows errors and readable citations",
);
expect(summarize(runOf([sample("e01")])).total === 1, "summary total");

expect(
  (await persistToSupabase(runOf([]), summarize(runOf([])), { AI_STORE: "memory" })).startsWith("skipped"),
  "no AI_STORE=supabase, no write",
);
const calls = [];
const mock = async (url, init) => {
  calls.push({ url, body: JSON.parse(init.body) });
  if (url.endsWith("ai_eval_runs")) return { ok: true, status: 201, json: async () => [{ id: 7 }] };
  return { ok: true, status: 201, json: async () => [] };
};
const env = { AI_STORE: "supabase", NEXT_PUBLIC_SUPABASE_URL: "http://db.test", SUPABASE_SECRET_KEY: "k" };
const wrote = await persistToSupabase(runOf([sample("e01")]), summarize(runOf([sample("e01")])), env, mock);
expect(wrote === "wrote run 7 with 1 rows", `supabase write: ${wrote}`);
expect(
  calls[0].body.provider_mode === "fake" && calls[1].body[0].run_id === 7 && calls[1].body[0].question_id === "e01",
  "supabase payloads",
);
const absent = await persistToSupabase(runOf([]), summarize(runOf([])), env, async () => ({
  ok: false,
  status: 404,
  json: async () => ({}),
}));
expect(absent.startsWith("skipped") && !absent.includes("wrote"), "absent tables are skipped");
const thrown = await persistToSupabase(runOf([]), summarize(runOf([])), env, async () => {
  throw new Error("network");
});
expect(thrown === "skipped (request failed)", "network errors are skipped");

const judged = await judgeAnswer(byId("v01"), fixture, {
  call: async (input) => ({
    json: {
      neutral: true,
      attributed: true,
      fathersUnassigned: true,
      usefulness: "3",
      notes: "ok",
      irrelevantQuotes: ["q1", "zzz"],
    },
    costMicros: 450,
    latencyMs: 12,
    model: "m",
    stopReason: input.role === "judge" ? "end" : "other",
  }),
});
expect(judged.neutral === true && judged.usefulness === "3" && judged.costMicros === 450, "judge result");
expect(judged.irrelevantQuotes.join() === "q1", "unknown irrelevant ids are dropped");
expect(judged.notBiasedByNotes === true, "missing notBiasedByNotes defaults to true");
let retried = 0;
const cut = await judgeAnswer(byId("v01"), fixture, {
  call: async (input) => {
    retried += 1;
    return {
      json: {},
      costMicros: 100,
      latencyMs: 1,
      model: "m",
      stopReason: input.maxTokens >= 1500 ? "end" : "max_tokens",
    };
  },
});
expect(retried === 2 && cut.costMicros === 200, "max_tokens retries once with 1.5x and sums the cost");
const failed = await judgeAnswer(byId("v01"), fixture, {
  call: async () => {
    throw new Error("boom");
  },
});
expect(failed.error === "boom" && failed.costMicros === 0, "judge failure is returned, not thrown");
const seenInput = [];
await judgeAnswer(byId("v01"), fixture, {
  call: async (input) => {
    seenInput.push(input);
    return { json: {}, costMicros: 0, latencyMs: 1, model: "m", stopReason: "end" };
  },
});
expect(
  seenInput[0].role === "judge" &&
    seenInput[0].maxTokens === 1000 &&
    seenInput[0].cacheSystem === true &&
    seenInput[0].system === JUDGE_SYSTEM,
  "judge call parameters",
);
expect(/^[0-9a-f]{64}$/u.test(seenInput[0].replayKey), "judge replay key is a sha256");
expect(
  seenInput[0].schema.required.includes("irrelevantQuotes") &&
    seenInput[0].schema.required.includes("neutral") &&
    seenInput[0].schema.additionalProperties === false,
  "judge schema extended and strict",
);
expect(
  judgeUserText(byId("nt01"), goodNote).includes("reader notes sent:") &&
    judgeUserText(byId("e01"), fixture).includes("reader notes sent: none"),
  "judge user text carries the notes",
);
expect(normalizeJudgement(null, []).neutral === false, "garbage judgement is a failure, not a pass");

const server = createServer((request, response) => {
  if (request.url === "/api/ai/status") {
    response.setHeader("Content-Type", "application/json");
    response.end("{}");
    return;
  }
  if (
    request.headers["x-ai-eval"] !== "check-secret" ||
    request.headers.origin !== `http://127.0.0.1:${server.address().port}`
  ) {
    response.statusCode = 400;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ code: "ai_bad_request", message: "bad", retry: false }));
    return;
  }
  let raw = "";
  request.on("data", (chunk) => {
    raw += chunk;
  });
  request.on("end", () => {
    const input = JSON.parse(raw);
    response.setHeader("Content-Type", "text/event-stream");
    response.write('event: phase\ndata: {"phase":"plan"}\n\n');
    if (input.question.startsWith("Escribime")) {
      response.end('event: error\ndata: {"code":"ai_verify_failed","message":"x","retry":true}\n\n');
      return;
    }
    response.end(
      `event: phase\ndata: {"phase":"write"}\n\nevent: answer\ndata: ${JSON.stringify({ ...fixture, question: input.question })}\n\n`,
    );
  });
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const base = `http://127.0.0.1:${server.address().port}`;
const out = mkdtempSync(join(tmpdir(), "ai-eval-check-"));
const runCli = (args, env) =>
  new Promise((done) => {
    const child = spawn(
      process.execPath,
      [
        "--disable-warning=MODULE_TYPELESS_PACKAGE_JSON",
        "--import",
        resolve(ROOT, "tools/register-alias.mjs"),
        resolve(ROOT, "tools/ai-eval/run.mjs"),
        ...args,
      ],
      {
        cwd: ROOT,
        env: { ...process.env, AI_PROVIDER: "fake", AI_STORE: "memory", ...env },
      },
    );
    let text = "";
    child.stdout.on("data", (chunk) => {
      text += chunk;
    });
    child.stderr.on("data", (chunk) => {
      text += chunk;
    });
    child.on("close", (code) => done({ code, text }));
  });
try {
  const ok = await runCli(["--base", base, "--ids", "e01,o01,v01", "--judge", "--out", out], {
    AI_EVAL_SECRET: "check-secret",
  });
  expect(ok.code === 0, `cli run exit ${ok.code}: ${ok.text}`);
  const results = JSON.parse(readFileSync(join(out, "results.json"), "utf8")).results;
  expect(results.length === 3, "cli results");
  const o01 = results.find((result) => result.id === "o01");
  expect(o01.error?.code === "ai_verify_failed" && o01.passed === false, "an error event is recorded, not fatal");
  const e01 = results.find((result) => result.id === "e01");
  expect(
    e01.phases.map((phase) => phase.phase).join() === "plan,write" && e01.judge && !e01.judge.error,
    "phases and the fake judge",
  );
  const report = readFileSync(join(out, "report.md"), "utf8");
  expect(report.includes("## Gate") && report.includes("### v01"), "cli report");
  expect(!ok.text.includes("check-secret"), "the secret is never printed");

  const refused = await runCli(["--base", base, "--ids", "e01", "--max-usd", "0", "--out", out], {
    AI_PROVIDER: "anthropic",
    ANTHROPIC_API_KEY: "dummy",
    AI_EVAL_SECRET: "check-secret",
  });
  expect(refused.code === 2 && refused.text.includes("refused"), `--max-usd 0 refuses a real run: ${refused.text}`);
  const noSecret = await runCli(["--base", base, "--ids", "e01", "--out", out], { AI_EVAL_SECRET: "" });
  expect(noSecret.code === 2 && noSecret.text.includes("AI_EVAL_SECRET is missing"), "missing secret is refused");
  const free = await runCli(["--base", base, "--ids", "o01", "--max-usd", "0", "--out", out], {
    AI_EVAL_SECRET: "check-secret",
  });
  expect(free.code === 0, "a fake run is free, so --max-usd 0 does not refuse it");
} finally {
  server.close();
  rmSync(out, { recursive: true, force: true });
}

if (failures.length > 0) throw new Error(`${failures.length} failing:\n- ${failures.join("\n- ")}`);
console.log(`ok ${checks} checks`);
