import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { validateFatherFile } from "@/content/father-text/validate-father-file";

const root = resolve(process.cwd(), "data", "corpus", "fathers");
const rootEs = resolve(process.cwd(), "data", "corpus", "fathers-es");
const failures = [];

function check(name, ok) {
  if (!ok) failures.push(name);
}

const good = {
  work: { id: "w", title: "T", author: "a" },
  edition: {
    id: "e",
    lang: "en",
    translator: null,
    year: 1890,
    bibliography: "b",
    source: "s",
    scan: null,
    licence: "public-domain",
    retrievedAt: "2026-10-26",
    sha256: "a".repeat(64),
  },
  divisions: [
    { locator: "1", ordinal: 1, heading: null, text: "x" },
    { locator: "2", ordinal: 2, heading: null, text: "y" },
  ],
};
const mutations = [
  ["a gap in the ordinals", (f) => (f.divisions[1].ordinal = 3), "ordinal"],
  ["a repeated locator", (f) => (f.divisions[1].locator = "1"), "duplicate locator"],
  ["a licence that is not public domain", (f) => (f.edition.licence = "cc-by-sa"), "public-domain"],
  ["a translation licence on an original edition", (f) => (f.edition.licence = "cc0-translation"), "public-domain"],
  ["an untrimmed text", (f) => (f.divisions[0].text = " x"), "untrimmed"],
  ["a short hash", (f) => (f.edition.sha256 = "abc"), "sha256"],
];
check("a valid file passes", validateFatherFile(structuredClone(good), "good").length === 0);
for (const [name, mutate, expected] of mutations) {
  const file = structuredClone(good);
  mutate(file);
  check(
    `validator catches ${name}`,
    validateFatherFile(file, "mut").some((error) => error.includes(expected)),
  );
}

const translated = structuredClone(good);
translated.edition.lang = "es";
translated.edition.licence = "cc0-translation";
translated.edition.translatedFrom = { editionId: "e", file: "f", sha256: "a".repeat(64) };
check("a translation under cc0-translation passes", validateFatherFile(translated, "translated").length === 0);

let files = 0;
if (existsSync(root)) {
  for (const work of readdirSync(root).filter((name) => statSync(resolve(root, name)).isDirectory())) {
    for (const name of readdirSync(resolve(root, work)).filter((entry) => entry.endsWith(".json"))) {
      const file = JSON.parse(readFileSync(resolve(root, work, name), "utf8"));
      files += 1;
      if (file.work?.id !== work)
        failures.push(`${work}/${name}: work id "${file.work?.id}" does not match its folder`);
      if (`${file.edition?.id}.json` !== name)
        failures.push(`${work}/${name}: edition id "${file.edition?.id}" does not match its file`);
      failures.push(...validateFatherFile(file, `${work}/${name}`));
    }
  }
}

let spanish = 0;
if (existsSync(rootEs)) {
  for (const work of readdirSync(rootEs).filter((name) => statSync(resolve(rootEs, name)).isDirectory())) {
    for (const name of readdirSync(resolve(rootEs, work)).filter((entry) => entry.endsWith(".json"))) {
      const label = `fathers-es/${work}/${name}`;
      const file = JSON.parse(readFileSync(resolve(rootEs, work, name), "utf8"));
      spanish += 1;
      failures.push(...validateFatherFile(file, label));
      if (file.work?.id !== work) failures.push(`${label}: work id "${file.work?.id}" does not match its folder`);
      if (file.edition?.lang !== "es") failures.push(`${label}: language is not es`);
      const from = file.edition?.translatedFrom;
      const englishPath = from ? resolve(process.cwd(), from.file) : "";
      if (!from || !existsSync(englishPath)) {
        failures.push(`${label}: translatedFrom does not point to an English file`);
        continue;
      }
      const bytes = readFileSync(englishPath);
      if (createHash("sha256").update(bytes).digest("hex") !== from.sha256)
        failures.push(`${label}: the English file changed after this translation was built`);
      const english = JSON.parse(bytes.toString("utf8"));
      if (english.edition?.id !== from.editionId) failures.push(`${label}: translatedFrom names another edition`);
      const known = new Set(english.divisions.map((division) => division.locator));
      for (const division of file.divisions) {
        if (!known.has(division.locator))
          failures.push(`${label}: locator ${division.locator} is not in the English edition`);
      }
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures.slice(0, 40)) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log(`check-fathers-corpus: ok (${files} normalized files, ${spanish} Spanish)`);
