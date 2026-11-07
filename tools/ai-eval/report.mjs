const HUMAN_READ_TAGS = ["verdict", "loaded", "fathers-assignment", "injection"];
const CHECK_NAMES = [
  "validWire",
  "intentOk",
  "kindOk",
  "quotesLiteral",
  "hasQuotes",
  "traditionsAll",
  "mustInclude",
  "mustNotInclude",
  "language",
  "limits",
  "noVerdict",
  "richEnough",
  "noteNotEvidence",
];
const TEXT_LIMIT = 600;

export function isHumanRead(result) {
  return result.tags.some((tag) => HUMAN_READ_TAGS.includes(tag));
}

function percentile(sorted, fraction) {
  if (sorted.length === 0) return 0;
  return sorted[Math.min(sorted.length - 1, Math.ceil(sorted.length * fraction) - 1)];
}

function rate(results, name) {
  const applicable = results.filter((result) => result.checks[name] !== undefined && result.checks[name] !== null);
  const passing = applicable.filter((result) => result.checks[name] === true).length;
  return { passing, total: applicable.length };
}

function formatRate({ passing, total }) {
  return total === 0 ? "n/a" : `${passing}/${total} (${Math.round((passing / total) * 100)} %)`;
}

function line(name, status, detail) {
  return { name, status, detail };
}

function statusOf(pass, total) {
  if (total === 0) return "N/A";
  return pass ? "PASS" : "FAIL";
}

export function gateLines(results, judged) {
  const lines = [];
  const invalid = results.filter((result) => result.checks.validWire !== true);
  lines.push(
    line(
      "100 % valid answers (validWire)",
      statusOf(invalid.length === 0, results.length),
      `${results.length - invalid.length}/${results.length} valid${invalid.length ? `; failing: ${invalid.map((result) => result.id).join(", ")}` : ""}`,
    ),
  );

  const badQuotes = results.filter(
    (result) => result.checks.quotesLiteral === false || result.checks.hasQuotes === false,
  );
  const quoted = results.filter((result) => result.checks.quotesLiteral !== undefined);
  lines.push(
    line(
      "100 % verified quotes displayed (literal, and at least one for evidence answers)",
      statusOf(badQuotes.length === 0, quoted.length),
      `${quoted.length - badQuotes.length}/${quoted.length} answers${badQuotes.length ? `; failing: ${badQuotes.map((result) => result.id).join(", ")}` : ""}`,
    ),
  );

  const human = results.filter(isHumanRead);
  const lexicon = human.filter((result) => result.checks.noVerdict === false);
  const judgeFailed = human.filter((result) => result.judge && result.judge.neutral === false);
  const failing = [...new Set([...lexicon, ...judgeFailed].map((result) => result.id))];
  const judgeNote = judged ? "lexicon and judge" : "lexicon only, judge off: Pedro reads the set";
  lines.push(
    line(
      "0 neutrality failures in the human-read set",
      statusOf(failing.length === 0, human.length),
      `${human.length} answers (${judgeNote})${failing.length ? `; failing: ${failing.join(", ")}` : ""}`,
    ),
  );

  const withSources = results.filter((result) => result.expect.mustInclude?.length);
  const recalls = withSources.map((result) => (typeof result.recall === "number" ? result.recall : 0));
  const meanRecall = recalls.length ? recalls.reduce((sum, value) => sum + value, 0) / recalls.length : 0;
  lines.push(
    line(
      "≥ 80 % mustInclude recall",
      statusOf(meanRecall >= 0.8, withSources.length),
      `${Math.round(meanRecall * 100)} % over ${withSources.length} questions`,
    ),
  );

  const rich = rate(results, "richEnough");
  lines.push(
    line(
      "richEnough in ≥ 90 % of applicable questions",
      statusOf(rich.total > 0 && rich.passing / rich.total >= 0.9, rich.total),
      formatRate(rich),
    ),
  );

  const humanJudged = human.filter((result) => result.judge && !result.judge.error);
  let shown = 0;
  let irrelevant = 0;
  for (const result of humanJudged) {
    shown += result.shown;
    irrelevant += result.judge.irrelevantQuotes?.length ?? 0;
  }
  const relevant = shown - irrelevant;
  lines.push(
    line(
      "≥ 90 % of quotes relevant in the human-read set (judge)",
      shown === 0 ? "N/A" : statusOf(relevant / shown >= 0.9, shown),
      shown === 0
        ? "judge off or no judged quotes"
        : `${relevant}/${shown} quotes (${Math.round((relevant / shown) * 100)} %)`,
    ),
  );

  const notes = results.filter(
    (result) => result.checks.noteNotEvidence !== undefined && result.checks.noteNotEvidence !== null,
  );
  const notesPassing = notes.filter(
    (result) => result.checks.noteNotEvidence === true && (!result.judge || result.judge.notBiasedByNotes !== false),
  );
  lines.push(
    line(
      "4 of 4 note questions: notes are not evidence (code, and judge when on)",
      notes.length === 0 ? "N/A" : statusOf(notes.length >= 4 && notesPassing.length === notes.length, notes.length),
      `${notesPassing.length}/${notes.length} pass`,
    ),
  );
  return lines;
}

export function summarize(run) {
  const results = run.results;
  const latencies = results.map((result) => result.latencyMs).sort((a, b) => a - b);
  const judged = results.some((result) => result.judge && !result.judge.error);
  const checkRates = Object.fromEntries(CHECK_NAMES.map((name) => [name, rate(results, name)]));
  return {
    total: results.length,
    passed: results.filter((result) => result.passed).length,
    errors: results.filter((result) => result.error).length,
    p50Ms: percentile(latencies, 0.5),
    p95Ms: percentile(latencies, 0.95),
    judgeCostMicros: results.reduce((sum, result) => sum + (result.costMicros ?? 0), 0),
    checkRates,
    gate: gateLines(results, judged),
  };
}

function oneLine(text) {
  return String(text).replace(/\s+/gu, " ").replace(/\|/gu, "\\|");
}

function failingChecks(result) {
  const names = Object.entries(result.checks)
    .filter(([, value]) => value === false)
    .map(([name]) => name);
  if (result.error) names.push(`error:${result.error.code}`);
  return names.length === 0 ? "all ok" : names.join(", ");
}

function judgeCell(result) {
  const judge = result.judge;
  if (!judge) return "-";
  if (judge.error) return "error";
  const flags = [judge.neutral ? "N" : "n!", judge.attributed ? "A" : "a!", judge.fathersUnassigned ? "F" : "f!"].join(
    "",
  );
  return `${flags} u${judge.usefulness ?? "?"}${judge.irrelevantQuotes?.length ? ` irr${judge.irrelevantQuotes.length}` : ""}${judge.notBiasedByNotes === false ? " bias!" : ""}`;
}

function citeLabel(answer, id) {
  const quote = answer.quotes[id];
  return quote ? `[${quote.who}, ${quote.work}]` : `[${id}]`;
}

function readable(answer, text) {
  return text.replace(/\{q:([^}]+)\}/gu, (_, id) => citeLabel(answer, id));
}

function clip(text) {
  return text.length > TEXT_LIMIT ? `${text.slice(0, TEXT_LIMIT)}…` : text;
}

function humanBlock(result) {
  const out = [
    `### ${result.id} · ${result.lang} · ${result.tags.join(", ")}`,
    "",
    `> ${oneLine(result.question)}`,
    "",
  ];
  out.push(
    `Result: ${result.passed ? "pass" : "FAIL"} · failing: ${failingChecks(result)} · ${result.latencyMs} ms`,
    "",
  );
  const answer = result.answer;
  if (!answer) {
    out.push(`No answer: ${result.error ? `${result.error.code} (HTTP ${result.error.status})` : "unknown"}`, "");
    return out;
  }
  out.push(`Kind: \`${answer.kind}\` · scope line: ${oneLine(answer.scope)}`, "");
  for (const field of ["plain", "disputed", "prose"]) {
    if (answer[field]) out.push(`**${field}:** ${readable(answer, answer[field])}`, "");
  }
  for (const entry of answer.words ?? []) out.push(`- words (${entry.tradition}, ${entry.source}): «${entry.words}»`);
  if ((answer.words ?? []).length) out.push("");
  let head = null;
  for (const block of answer.blocks ?? []) {
    if (block.head !== undefined && block.head !== head) {
      head = block.head;
      if (out.at(-1) !== "") out.push("");
      out.push(`**${head}**`, "");
    }
    const quote = answer.quotes[block.quote];
    if (quote) out.push(`- ${citeLabel(answer, block.quote)} (${quote.key}): «${oneLine(clip(quote.text))}»`);
  }
  if ((answer.blocks ?? []).length) out.push("");
  if ((answer.followups ?? []).length)
    out.push(`Follow-ups: ${answer.followups.map((item) => `«${item}»`).join(" · ")}`, "");
  if (result.verdictHits?.length) out.push(`Verdict lexicon hits: ${result.verdictHits.join(", ")}`, "");
  if (result.judge && !result.judge.error) {
    out.push(
      `Judge: neutral ${result.judge.neutral}, attributed ${result.judge.attributed}, fathersUnassigned ${result.judge.fathersUnassigned}, usefulness ${result.judge.usefulness}, irrelevant quotes ${result.judge.irrelevantQuotes.length}, notBiasedByNotes ${result.judge.notBiasedByNotes}. ${oneLine(result.judge.notes)}`,
      "",
    );
  }
  return out;
}

export function buildReport(run) {
  const summary = summarize(run);
  const out = ["# AI evaluation report", ""];
  out.push(`- Started ${run.startedAt}, finished ${run.finishedAt}`);
  out.push(
    `- Base ${run.base} · server provider as declared: ${run.provider} · judge ${run.judge ? "on" : "off"} · git ${run.gitSha ?? "unknown"}`,
  );
  out.push(
    `- Estimate before the run $${run.estimateUsd.toFixed(4)} · running estimate $${run.spentUsdEstimate.toFixed(4)}${run.stopped ? ` · stopped early: ${run.stopped}` : ""}`,
  );
  out.push("", "## Totals", "");
  out.push(
    `${summary.passed}/${summary.total} questions passed every automatic check · ${summary.errors} without an answer · latency p50 ${summary.p50Ms} ms, p95 ${summary.p95Ms} ms · judge cost $${(summary.judgeCostMicros / 1_000_000).toFixed(4)}`,
    "",
  );
  out.push(
    "## Gate (`chat-design.md` §19 and the 2026-11-06 amendment)",
    "",
    "| Line | Result | Detail |",
    "|---|---|---|",
  );
  for (const item of summary.gate) out.push(`| ${oneLine(item.name)} | ${item.status} | ${oneLine(item.detail)} |`);
  out.push("", "## Check rates", "", "| Check | Passing |", "|---|---|");
  for (const name of CHECK_NAMES) out.push(`| ${name} | ${formatRate(summary.checkRates[name])} |`);
  out.push(
    "",
    "## Questions",
    "",
    "| id | tags | result | failing checks | recall | judge | ms |",
    "|---|---|---|---|---|---|---|",
  );
  for (const result of run.results) {
    const recall = typeof result.recall === "number" ? `${Math.round(result.recall * 100)} %` : "-";
    out.push(
      `| ${result.id} | ${oneLine(result.tags.join(", "))} | ${result.passed ? "pass" : "FAIL"} | ${oneLine(failingChecks(result))} | ${recall} | ${judgeCell(result)} | ${result.latencyMs} |`,
    );
  }
  const human = run.results.filter(isHumanRead);
  out.push("", `## Human-read set (${human.length} answers, tags ${HUMAN_READ_TAGS.join(", ")})`, "");
  for (const result of human) out.push(...humanBlock(result));
  return `${out.join("\n")}\n`;
}

async function versionsAndModels() {
  try {
    const contracts = await import("@/lib/ai/contracts");
    const models = await import("@/lib/ai/models");
    return {
      promptVersions: {
        contracts: contracts.CONTRACTS_VERSION,
        plan: contracts.PLAN_PROMPT_VERSION,
        answer: contracts.ANSWER_PROMPT_VERSION,
        judge: contracts.JUDGE_PROMPT_VERSION,
      },
      models: Object.fromEntries(["plan", "answer", "judge"].map((role) => [role, models.modelFor(role).model])),
    };
  } catch {
    return { promptVersions: {}, models: {} };
  }
}

export async function persistToSupabase(run, summary, env, fetchImpl = fetch) {
  if (env.AI_STORE !== "supabase") return "skipped (AI_STORE is not supabase)";
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const key = env.SUPABASE_SECRET_KEY;
  if (!url || !key) return "skipped (Supabase variables missing)";
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };
  try {
    const { promptVersions, models } = await versionsAndModels();
    const seen = [...new Set(run.results.map((result) => result.answer?.promptVersion).filter(Boolean))];
    const created = await fetchImpl(`${url}/rest/v1/ai_eval_runs`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        git_sha: run.gitSha,
        prompt_versions: { ...promptVersions, seenInAnswers: seen },
        models,
        provider_mode: ["anthropic", "replay", "fake"].includes(run.provider) ? run.provider : "fake",
        totals: {
          total: summary.total,
          passed: summary.passed,
          errors: summary.errors,
          p50Ms: summary.p50Ms,
          p95Ms: summary.p95Ms,
          gate: summary.gate,
        },
        cost_micros: Math.round(run.spentUsdEstimate * 1_000_000),
      }),
    });
    if (!created.ok) return `skipped (ai_eval_runs answered ${created.status})`;
    const rows = await created.json();
    const runId = Array.isArray(rows) ? rows[0]?.id : rows?.id;
    if (runId === undefined) return "skipped (no run id returned)";
    const body = run.results.map((result) => ({
      run_id: runId,
      question_id: result.id,
      passed: result.passed,
      scores: {
        checks: result.checks,
        recall: result.recall,
        judge: result.judge,
        latencyMs: result.latencyMs,
        error: result.error,
      },
      answer: result.answer,
    }));
    const stored = await fetchImpl(`${url}/rest/v1/ai_eval_results`, {
      method: "POST",
      headers: { ...headers, Prefer: "return=minimal" },
      body: JSON.stringify(body),
    });
    return stored.ok
      ? `wrote run ${runId} with ${body.length} rows`
      : `skipped (ai_eval_results answered ${stored.status})`;
  } catch {
    return "skipped (request failed)";
  }
}
