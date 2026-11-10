const crawledSegments = new Set([
  "doctrinas",
  "doctrines",
  "historia",
  "history",
  "fuentes",
  "sources",
  "glosario",
  "glossary",
]);
const localePattern = /^\/(es|en)(\/|$)/;
const hrefPattern = /href="(\/[^"#?]*)/g;

export function crawlablePath(path) {
  if (!localePattern.test(path)) return false;
  const [, , segment] = path.split("/");
  return segment === undefined || crawledSegments.has(segment);
}

const searchIndexPattern = /\/api\/search-index\/(?:es|en)\/[0-9a-f]+/g;

export function extractLinks(html) {
  const found = new Set(html.match(searchIndexPattern) ?? []);
  for (const [, href] of html.matchAll(hrefPattern)) {
    const path = href.length > 1 ? href.replace(/\/$/, "") : href;
    if (crawlablePath(path)) found.add(path);
  }
  return [...found];
}

export function bibleChapterPaths(manifest, locales) {
  return locales.flatMap((locale) =>
    (manifest[locale] ?? []).flatMap(({ base, chapters }) =>
      Array.from({ length: chapters }, (_, index) => `${base}/${index + 1}`),
    ),
  );
}

export function pageKind(path) {
  if (path.startsWith("/api/search-index/")) return "search-index";
  const [, , segment, second, third, fourth, fifth] = path.split("/");
  if (segment === "biblia" || segment === "bible") return "bible";
  if (segment === "doctrinas" || segment === "doctrines") {
    if (fifth) return "objection";
    if (fourth === "pasajes" || fourth === "passages") return "passages";
    if (fourth) return "objections";
    if (third)
      return third === "primeros-cristianos" || third === "early-christians" ? "early-christians" : "tradition";
    return second ? "doctrine" : "doctrines-index";
  }
  if (segment === "historia" || segment === "history") return `history-${second ?? "index"}${third ? "-page" : ""}`;
  if (segment === "glosario" || segment === "glossary") return second ? "glossary-term" : "glossary";
  return segment ?? "home";
}

export function shouldAbort(outcomes, { window = 40, share = 0.25 } = {}) {
  const recent = outcomes.slice(-window);
  if (recent.length < window) return false;
  return recent.filter((failed) => failed).length / recent.length >= share;
}

export function backoffMs(attempt, retryAfterSeconds, random = Math.random) {
  if (retryAfterSeconds !== null && Number.isFinite(retryAfterSeconds)) return Math.min(retryAfterSeconds, 30) * 1000;
  return 500 * 2 ** attempt + Math.floor(random() * 250);
}
