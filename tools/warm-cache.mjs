import { appendFileSync, readFileSync } from "node:fs";
import { backoffMs, bibleChapterPaths, extractLinks, pageKind, shouldAbort } from "./warm-cache-plan.mjs";

const productionOrigin = "https://doctrina.elpepo.dev";
const userAgent = "doctrina-warm-cache (+https://github.com/pedrolorenzodev/doctrina)";
const maxAttempts = 4;
const requestTimeoutMs = 30_000;
const maxCrawledPages = 2_000;
const minimumCrawledPages = 150;

function parseArguments(argv) {
  const options = {
    base: productionOrigin,
    concurrency: 6,
    budgetMinutes: 25,
    delaySeconds: 0,
    locales: ["es", "en"],
    bible: true,
    crawl: true,
    limit: Infinity,
  };
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    const value = () => argv[++index];
    if (flag === "--base") options.base = value().replace(/\/$/, "");
    else if (flag === "--concurrency") options.concurrency = Number(value());
    else if (flag === "--budget-minutes") options.budgetMinutes = Number(value());
    else if (flag === "--delay") options.delaySeconds = Number(value());
    else if (flag === "--locales") options.locales = value().split(",");
    else if (flag === "--no-bible") options.bible = false;
    else if (flag === "--no-crawl") options.crawl = false;
    else if (flag === "--limit") options.limit = Number(value());
    else throw new Error(`Unknown option ${flag}`);
  }
  if (!Number.isInteger(options.concurrency) || options.concurrency < 1)
    throw new Error("--concurrency must be a positive integer");
  return options;
}

const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchOnce(url) {
  const started = performance.now();
  const response = await fetch(url, {
    headers: { "user-agent": userAgent, accept: "text/html" },
    signal: AbortSignal.timeout(requestTimeoutMs),
  });
  const headersAt = performance.now();
  const body = await response.text();
  return {
    status: response.status,
    cache: response.headers.get("x-vercel-cache") ?? "none",
    retryAfter: response.headers.has("retry-after") ? Number(response.headers.get("retry-after")) : null,
    ttfb: headersAt - started,
    total: performance.now() - started,
    bytes: Number(response.headers.get("content-length")) || body.length,
    body,
  };
}

async function warmOne(url, tally, stopped) {
  let last = null;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    tally.requests += 1;
    try {
      last = await fetchOnce(url);
    } catch (error) {
      last = { status: 0, cache: "none", retryAfter: null, ttfb: 0, total: 0, bytes: 0, body: "", error: error.name };
    }
    const retryable = last.status === 0 || last.status === 429 || last.status >= 500;
    if (!retryable || stopped()) return last;
    if (attempt < maxAttempts - 1) {
      tally.retries += 1;
      await sleep(backoffMs(attempt, last.retryAfter));
    }
  }
  return last;
}

function percentile(sorted, share) {
  return sorted.length === 0 ? 0 : sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * share))];
}

function summarise(results, tally, startedAt, aborted, notReached) {
  const lines = [];
  const count = (key) => {
    const counts = new Map();
    for (const result of results) counts.set(result[key], (counts.get(result[key]) ?? 0) + 1);
    return [...counts]
      .sort(([a], [b]) => String(a).localeCompare(String(b)))
      .map(([name, total]) => `${name}=${total}`)
      .join("  ");
  };
  lines.push(`pages requested: ${results.length}  http requests: ${tally.requests}  retries: ${tally.retries}`);
  lines.push(`by status: ${count("status")}`);
  lines.push(`by x-vercel-cache: ${count("cache")}`);
  const bytes = results.reduce((sum, result) => sum + result.bytes, 0);
  lines.push(`decoded bytes: ${(bytes / 1e6).toFixed(1)} MB`);
  const kinds = new Map();
  for (const result of results) {
    const entry = kinds.get(result.kind) ?? { total: 0, miss: 0, hit: 0, bad: 0, ttfb: [] };
    entry.total += 1;
    if (result.cache === "MISS") entry.miss += 1;
    if (result.cache === "HIT") entry.hit += 1;
    if (result.status >= 400 || result.status === 0) entry.bad += 1;
    entry.ttfb.push(result.ttfb);
    kinds.set(result.kind, entry);
  }
  lines.push("", "kind                         pages   MISS    HIT   bad  ttfb p50 / p95 ms");
  for (const [kind, entry] of [...kinds].sort(([a], [b]) => a.localeCompare(b))) {
    const sorted = entry.ttfb.sort((a, b) => a - b);
    lines.push(
      `${kind.padEnd(28)} ${String(entry.total).padStart(5)} ${String(entry.miss).padStart(6)} ${String(entry.hit).padStart(6)} ${String(entry.bad).padStart(5)}  ${percentile(sorted, 0.5).toFixed(0)} / ${percentile(sorted, 0.95).toFixed(0)}`,
    );
  }
  const bad = results.filter((result) => result.status >= 400 || result.status === 0).slice(0, 10);
  if (bad.length > 0) lines.push("", "first failing urls:", ...bad.map((result) => `  ${result.status} ${result.url}`));
  if (notReached > 0) lines.push("", `not reached (budget or abort): ${notReached}`);
  lines.push(
    "",
    `${aborted ? `ABORTED: ${aborted}` : "finished"} in ${((performance.now() - startedAt) / 1000).toFixed(0)} s`,
  );
  return lines.join("\n");
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const bibleManifest = JSON.parse(readFileSync(new URL("./warm-cache-bible.json", import.meta.url), "utf8"));
  if (options.delaySeconds > 0) {
    console.log(`waiting ${options.delaySeconds} s for the production alias to switch`);
    await sleep(options.delaySeconds * 1000);
  }
  const startedAt = performance.now();
  const deadline = startedAt + options.budgetMinutes * 60_000;
  const crawlQueue = options.crawl ? options.locales.map((locale) => `/${locale}`) : [];
  const queued = new Set(crawlQueue);
  const bibleQueue = options.bible ? bibleChapterPaths(bibleManifest, options.locales) : [];
  for (const path of bibleQueue) queued.add(path);
  const results = [];
  const outcomes = [];
  const tally = { requests: 0, retries: 0 };
  let aborted = null;
  let inFlight = 0;
  let crawled = 0;

  const next = () => {
    if (results.length + inFlight >= options.limit) return null;
    if (crawlQueue.length > 0) return { path: crawlQueue.shift(), crawl: true };
    const path = bibleQueue.shift();
    return path ? { path, crawl: false } : null;
  };

  async function worker() {
    for (;;) {
      if (aborted || performance.now() > deadline) return;
      const job = next();
      if (!job) {
        if (inFlight === 0) return;
        await sleep(100);
        continue;
      }
      inFlight += 1;
      const url = `${options.base}${job.path}`;
      const result = await warmOne(url, tally, () => aborted !== null);
      inFlight -= 1;
      results.push({
        url: job.path,
        kind: pageKind(job.path),
        status: result.status,
        cache: result.cache,
        ttfb: result.ttfb,
        bytes: result.bytes,
      });
      outcomes.push(result.status === 0 || result.status >= 500 || result.status === 429);
      if (shouldAbort(outcomes)) aborted = "5xx or network failures in at least 25% of the last 40 pages";
      if (job.crawl && result.status === 200 && crawled < maxCrawledPages) {
        crawled += 1;
        for (const link of extractLinks(result.body)) {
          if (queued.has(link)) continue;
          queued.add(link);
          crawlQueue.push(link);
        }
      }
    }
  }

  await Promise.all(Array.from({ length: options.concurrency }, worker));
  const notReached = crawlQueue.length + bibleQueue.length;
  const report = summarise(results, tally, startedAt, aborted, notReached);
  console.log(report);
  if (process.env.GITHUB_STEP_SUMMARY)
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Cache warm-up\n\n\`\`\`\n${report}\n\`\`\`\n`);
  const serverErrors = results.filter((result) => result.status === 0 || result.status >= 500).length;
  const brokenCritical = results.filter(
    (result) => ["home", "search-index"].includes(result.kind) && result.status !== 200,
  );
  const crawledPages = results.filter((result) => !["bible", "search-index"].includes(result.kind)).length;
  const searchIndexes = results.filter((result) => result.kind === "search-index").length;
  const crawlWasEmpty =
    options.crawl &&
    notReached === 0 &&
    (searchIndexes < options.locales.length || crawledPages < minimumCrawledPages * options.locales.length);
  if (crawlWasEmpty)
    console.log("the crawl found too few pages or no search index: the site's markup may have changed");
  if (aborted || serverErrors > 0 || brokenCritical.length > 0 || crawlWasEmpty) process.exitCode = 1;
}

await main();
