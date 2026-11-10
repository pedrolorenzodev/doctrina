import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { detectQueryLanguage } from "@/content/bible-reference/language";
import { parseReferences } from "@/content/bible-reference/parse";
import { passageToken, parseRouteTokens, routeFor } from "@/content/bible-reference/route";
import { resolveReferences } from "@/content/bible-reference/resolve";
import { versification } from "@/content/bible-reference/versification";
import { countVersification, translationIds } from "./build-bible-versification.mjs";

const failures = [];
const root = new URL("../", import.meta.url).pathname;

function summary(part) {
  if ("error" in part) return `!${part.error}`;
  const { passage } = part;
  const mark = passage.duplicate ? "*" : "";
  const book = passage.book;
  if (passage.kind === "book") return `${book}/b/1${mark}`;
  if (passage.kind === "chapters")
    return `${book}/c/${passage.spans.map((span) => span.from.chapter).join(",")}${mark}`;
  const pieces = passage.spans.map((span, index) => {
    const { from, to } = span;
    const head = index === 0 ? `${from.chapter}.` : "";
    if (from.chapter !== to.chapter) return `${head}${from.verse}-${to.chapter}.${to.verse}`;
    if (from.verse === to.verse) return `${head}${from.verse}`;
    return `${head}${from.verse}-${to.verse}`;
  });
  return `${book}/v/${pieces.join(",")}${mark}`;
}

function resolveText(text, translation = "rv1909") {
  return resolveReferences(parseReferences(text), versification[translation].books).map(summary);
}

function expectSummary(name, actual, expected) {
  const same = JSON.stringify(actual) === JSON.stringify(expected);
  if (!same) failures.push(`${name}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
}

const parsing = [
  ["juan 6:53", ["John/v/6.53"]],
  ["Juan 6:26-53", ["John/v/6.26-53"]],
  ["Juan 6", ["John/c/6"]],
  ["Juan", ["John/b/1"]],
  ["juan 6:53; Gálatas 1; malaquías 1:11", ["John/v/6.53", "Gal/c/1", "Mal/v/1.11"]],
  ["john 6:53; gal 1; mal 1:11", ["John/v/6.53", "Gal/c/1", "Mal/v/1.11"]],
  ["John 6:53,55", ["John/v/6.53,55"]],
  ["John 6:53-55,57", ["John/v/6.53-55,57"]],
  ["John 6:53, Gal 1", ["John/v/6.53", "Gal/c/1"]],
  ["John 6:53; Gal 1; Mal 1:11", ["John/v/6.53", "Gal/c/1", "Mal/v/1.11"]],
  ["John 3-5", ["John/c/3,4,5"]],
  ["Genesis 1:1-2:3", ["Gen/v/1.1-2.3"]],
  ["Gen 1:1-Gen 2:3", ["Gen/v/1.1-2.3"]],
  ["John 6:26-7:2", ["John/v/6.26-7.2"]],
  ["Hebrews 11:1 - 12:2", ["Heb/v/11.1-12.2"]],
  ["Gen 1-2", ["Gen/c/1,2"]],
  ["Romans 8:28,31-39", ["Rom/v/8.28,31-39"]],
  ["John 6:53-", ["John/v/6.53-71"]],
  ["John 6.53", ["John/v/6.53"]],
  ["john6:53", ["John/v/6.53"]],
  ["jn.6.53-55", ["John/v/6.53-55"]],
  ["JOHN 6 : 53", ["John/v/6.53"]],
  ["John 6:53–55", ["John/v/6.53-55"]],
  ["John 6:53 - 55", ["John/v/6.53-55"]],
  ["John 6:53;", ["John/v/6.53"]],
  ["; John 6:53", ["John/v/6.53"]],
  ["John 6:53;; Gal 1", ["John/v/6.53", "Gal/c/1"]],
  ["John 6:53,,55", ["John/v/6.53,55"]],
  ["John 6:53-54; John 6:54", ["John/v/6.53-54", "John/v/6.54"]],
  ["John 6:53-55; John 6:54", ["John/v/6.53-55", "John/v/6.54"]],
  ["Genesis 1:1; Genesis 1:1", ["Gen/v/1.1", "Gen/v/1.1*"]],
  ["juan 6:53; John 6:53", ["John/v/6.53", "John/v/6.53*"]],
  ["Mal 1:11; John 6:53; Gal 1", ["Mal/v/1.11", "John/v/6.53", "Gal/c/1"]],
  ["John; Gal 1", ["John/b/1", "Gal/c/1"]],
  ["John 99", ["!chapter-out-of-range"]],
  ["John 6:72", ["!verse-out-of-range"]],
  ["John 6:99; Gal 1", ["!verse-out-of-range", "Gal/c/1"]],
  ["Foo 1:1; Gal 1", ["!unknown-book", "Gal/c/1"]],
  ["John 6:", ["!bad-locator"]],
  ["John 6:53:55", ["!bad-locator"]],
  ["John 6:53-55-57", ["!bad-locator"]],
  ["John 6:55-53", ["!reversed-range"]],
  ["John 6:53-Gal 1:1", ["!cross-book"]],
  ["Gen 1:1-Gen 2:3; Gen 1:1-Exod 2:3", ["Gen/v/1.1-2.3", "!cross-book"]],
  ["John 6:53-7", ["!reversed-range"]],
  ["Jude 3", ["Jude/v/1.3"]],
  ["Jude 1", ["Jude/c/1"]],
  ["Jude 1:25", ["Jude/v/1.25"]],
  ["Jude 1:26", ["!verse-out-of-range"]],
  ["Jude 25", ["Jude/v/1.25"]],
  ["Jude 26", ["!verse-out-of-range"]],
  ["Judas 3", ["Jude/v/1.3"]],
  ["Philemon 1", ["Phlm/c/1"]],
  ["1 Cor 13", ["1Cor/c/13"]],
  ["1Cor 13", ["1Cor/c/13"]],
  ["I Cor 13", ["1Cor/c/13"]],
  ["1 Corintios 13", ["1Cor/c/13"]],
  ["Primera de Corintios 13", ["1Cor/c/13"]],
  ["I Co 13:1", ["1Cor/v/13.1"]],
  ["1 Juan 1:1", ["1John/v/1.1"]],
  ["I Jo 1", ["1John/c/1"]],
  ["III Jn 1", ["3John/c/1"]],
  ["Jn 6:53", ["John/v/6.53"]],
  ["Jo 1", ["Job/c/1"]],
  ["Cantares 2", ["Song/c/2"]],
  ["Song of Songs 2", ["Song/c/2"]],
  ["Salmo 23", ["Ps/c/23"]],
  ["Psalm 23", ["Ps/c/23"]],
  ["Ps 23:1", ["Ps/v/23.1"]],
  ["Gál 1", ["Gal/c/1"]],
  ["Malaquías 1:11", ["Mal/v/1.11"]],
  ["Mal 3:19", ["!verse-out-of-range"]],
  ["Mal 4:6", ["Mal/v/4.6"]],
  ["Foo", ["!unknown-book"]],
  ["", []],
];

for (const [text, expected] of parsing) expectSummary(`parse ${JSON.stringify(text)}`, resolveText(text), expected);

expectSummary("deuterocanon in the Catholic translation", resolveText("Tobit 1", "dra"), ["Tob/c/1"]);
expectSummary("deuterocanon missing in rv1909", resolveText("Tobit 1", "rv1909"), ["!book-not-in-translation"]);
expectSummary("Malachi 3:19 in DRA", resolveText("Malachi 3:19", "dra"), ["!verse-out-of-range"]);
expectSummary("Psalm 23 in DRA", resolveText("Psalm 23", "dra"), ["Ps/c/23"]);

const languages = [
  ["juan 6:53", undefined, "es"],
  ["john 6:53", undefined, "en"],
  ["Juan 3", undefined, "es"],
  ["Job 1", undefined, "unknown"],
  ["Job 1", "en", "en"],
  ["Judas 3; Jude 3", undefined, "unknown"],
  ["Judas 3; Jude 3", "en", "en"],
  ["juan 6:53; Gálatas 1; Malaquías 1:11", undefined, "es"],
  ["John 6:53; Gálatas 1", "es", "es"],
  ["Juan 6:53; Gal 1", undefined, "es"],
  ["Job 1; John 3", undefined, "en"],
  ["1 Cor 13; Gal 1", undefined, "en"],
  ["Foo 1; Juan 2", undefined, "es"],
  ["", undefined, "unknown"],
  ["", "es", "es"],
];

for (const [text, fallback, expected] of languages) {
  const actual = detectQueryLanguage(parseReferences(text), fallback);
  if (actual !== expected)
    failures.push(
      `language ${JSON.stringify(text)} (${fallback ?? "no fallback"}): expected ${expected}, got ${actual}`,
    );
}

function routeText(text, language) {
  const resolved = resolveReferences(parseReferences(text), versification.rv1909.books);
  return routeFor(
    resolved.flatMap((part) => ("error" in part ? [] : [part.passage])),
    language,
  );
}

const routes = [
  ["juan 6:53", "es", { href: "/es/biblia/juan/6#v-53", translation: "rv1909" }],
  ["john 6:53", "en", { href: "/en/bible/john/6#v-53", translation: "bsb" }],
  ["Juan 6", "es", { href: "/es/biblia/juan/6", translation: "rv1909" }],
  ["Juan", "es", { href: "/es/biblia/juan/1", translation: "rv1909" }],
  ["Juan 6:26-53", "es", { href: "/es/biblia/juan/6#v-26", translation: "rv1909" }],
  [
    "juan 6:53; gálatas 1; malaquías 1:11",
    "es",
    { href: "/es/biblia/leer?p=john.6.53;gal.1;mal.1.11", translation: "rv1909" },
  ],
  ["john 6:53; gal 1", "en", { href: "/en/bible/read?p=john.6.53;gal.1", translation: "bsb" }],
  ["John 3-5", "en", { href: "/en/bible/read?p=john.3-5", translation: "bsb" }],
  ["John 6:26-7:2", "en", { href: "/en/bible/read?p=john.6.26-7.2", translation: "bsb" }],
  ["John 6:53,55", "en", { href: "/en/bible/read?p=john.6.53,55", translation: "bsb" }],
  ["John 6:53; juan 6:53", "en", { href: "/en/bible/john/6#v-53", translation: "bsb" }],
  ["Foo 1", "es", null],
  ["John 99", "es", null],
];

for (const [text, language, expected] of routes) {
  const actual = routeText(text, language);
  const shown = actual ? { href: actual.href, translation: actual.translation } : null;
  if (JSON.stringify(shown) !== JSON.stringify(expected)) {
    failures.push(
      `route ${JSON.stringify(text)} (${language}): expected ${JSON.stringify(expected)}, got ${JSON.stringify(shown)}`,
    );
  }
}

const tokens = [
  "john.6.53",
  "gal.1",
  "mal.1.11",
  "john.3-5",
  "john.6.26-7.2",
  "john.6.53,55",
  "john.6.53-55,57",
  "jude.1",
  "rom.8.28,31-39",
  "1cor.13",
];
for (const token of tokens) {
  const [part] = resolveReferences(parseRouteTokens(token), versification.rv1909.books);
  const back = part && "passage" in part ? passageToken(part.passage) : `!${part?.error}`;
  if (back !== token) failures.push(`token round trip ${token}: got ${back}`);
}
expectSummary("bad token book", parseRouteTokens("xx.1").map(summary), ["!unknown-book"]);
expectSummary("bad token locator", parseRouteTokens("john.6.a").map(summary), ["!bad-locator"]);

const mustFail = [
  ["John 6:53", "John/v/6.54"],
  ["juan 6:53; gal 1", "John/v/6.53"],
  ["John 99", "John/c/99"],
];
for (const [text, wrong] of mustFail) {
  if (JSON.stringify(resolveText(text)) === JSON.stringify([wrong]))
    failures.push(`must-fail fixture matched: ${text}`);
}

if (existsSync(join(root, "data", "corpus", "bibles", "rv1909.json"))) {
  for (const id of translationIds) {
    const raw = JSON.parse(readFileSync(join(root, "data", "corpus", "bibles", `${id}.json`), "utf8"));
    const counted = countVersification(id, raw);
    if (JSON.stringify(counted) !== JSON.stringify(versification[id])) {
      failures.push(
        `versification table of ${id} differs from the corpus: run node tools/build-bible-versification.mjs`,
      );
    }
  }
  console.log("versification table matches the corpus");
} else {
  console.log("corpus not present: versification table match skipped");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  `bible reference: ${parsing.length} parse fixtures, ${languages.length} language, ${routes.length} route, ${tokens.length} token, ${mustFail.length} must-fail`,
);
