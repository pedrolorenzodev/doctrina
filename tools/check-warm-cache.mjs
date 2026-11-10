import { existsSync, readFileSync } from "node:fs";
import { buildBibleManifest, manifestPath } from "./warm-cache-bible.mjs";
import {
  backoffMs,
  bibleChapterPaths,
  crawlablePath,
  extractLinks,
  pageKind,
  shouldAbort,
} from "./warm-cache-plan.mjs";

let failures = 0;
const check = (label, actual, expected) => {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    failures += 1;
    console.error(`FAIL ${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
};

check("a doctrine page is crawled", crawlablePath("/es/doctrinas/eucaristia"), true);
check("a history page is crawled", crawlablePath("/en/history/fathers/ignatius-of-antioch"), true);
check("the glossary is crawled", crawlablePath("/es/glosario/transubstanciacion"), true);
check("Bible chapters come from the manifest, not from links", crawlablePath("/es/biblia/juan/6"), false);
check("word pages are never warmed", crawlablePath("/es/palabras/G0746"), false);
check("verse pages are never warmed", crawlablePath("/es/biblia/juan/6/53"), false);
check("assets are skipped", crawlablePath("/_next/static/chunks/a.js"), false);
check("an unknown locale is skipped", crawlablePath("/fr/doctrinas/eucaristia"), false);
check("the locale root is crawled", crawlablePath("/en"), true);

const html = `<a href="/es/doctrinas/bautismo/">a</a><a href="/es/doctrinas/bautismo#x">b</a><a href="/es/biblia/juan/6">c</a>
<a href="https://example.com/es/doctrinas/x">d</a><a href="/es/historia/padres/ignatius-of-antioch?x=1">e</a><a href="/">f</a>`;
check("links are normalised, filtered and deduplicated", extractLinks(html), [
  "/es/doctrinas/bautismo",
  "/es/historia/padres/ignatius-of-antioch",
]);

const manifest = { es: [{ base: "/es/biblia/juan", chapters: 2 }], en: [{ base: "/en/bible/john", chapters: 1 }] };
check(
  "the hashed search index url is found in the page payload",
  extractLinks('x \\"indexUrl\\":\\"/api/search-index/es/2b4fb0d317d1\\" y'),
  ["/api/search-index/es/2b4fb0d317d1"],
);
check("kind: the search index", pageKind("/api/search-index/en/781c0898412c"), "search-index");
check("chapters are expanded per locale", bibleChapterPaths(manifest, ["es", "en"]), [
  "/es/biblia/juan/1",
  "/es/biblia/juan/2",
  "/en/bible/john/1",
]);
check("a locale not requested is left out", bibleChapterPaths(manifest, ["en"]), ["/en/bible/john/1"]);

check("kind: a Bible chapter", pageKind("/es/biblia/juan/6"), "bible");
check("kind: a doctrine", pageKind("/es/doctrinas/bautismo"), "doctrine");
check("kind: a tradition", pageKind("/es/doctrinas/bautismo/catolica"), "tradition");
check("kind: passages", pageKind("/es/doctrinas/bautismo/catolica/pasajes"), "passages");
check("kind: an objection", pageKind("/es/doctrinas/bautismo/catolica/objeciones/ob-1"), "objection");
check("kind: a history entity", pageKind("/en/history/works/tertullian-de-anima"), "history-works-page");

const failing = Array.from({ length: 40 }, (_, index) => index < 10);
check("ten failures in forty is the limit", shouldAbort(failing), true);
check("nine failures in forty is fine", shouldAbort(failing.map((value, index) => value && index < 9)), false);
check("too few outcomes never abort", shouldAbort([true, true, true]), false);
check(
  "backoff doubles",
  [backoffMs(0, null, () => 0), backoffMs(1, null, () => 0), backoffMs(2, null, () => 0)],
  [500, 1000, 2000],
);
check("Retry-After wins and is capped", [backoffMs(0, 3, () => 0), backoffMs(0, 600, () => 0)], [3000, 30000]);

const hasLocalCorpus = existsSync("data/corpus/bibles/rv1909.json");
if (hasLocalCorpus || process.env.CORPUS_SOURCE === "supabase") {
  const expected = await buildBibleManifest();
  const stored = JSON.parse(readFileSync(manifestPath, "utf8"));
  check("tools/warm-cache-bible.json matches the Bible (run: npm run warm-cache:bible)", stored, expected);
} else {
  console.log("check-warm-cache: Bible manifest check skipped (no data/corpus/bibles)");
}

if (failures > 0) process.exit(1);
console.log("check-warm-cache: ok");
