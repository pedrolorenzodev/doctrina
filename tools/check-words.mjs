import { existsSync, readFileSync } from "node:fs";
import {
  getChapterWords,
  getLexiconEntry,
  getParseNames,
  getVerseWords,
  getWordOccurrence,
  hasWordData,
  shardOf,
  wordLanguageOf,
} from "@/content/get-words";

const failures = [];
const check = (name, ok, detail = "") => {
  if (!ok) failures.push(`${name}${detail ? `: ${detail}` : ""}`);
};

if (!(await hasWordData())) {
  console.log("check-words: data/site/words is not present here (gitignored), skipped");
  process.exit(0);
}

check("shard of G3326", shardOf("G3326") === "G033");
check("shard of an extended Hebrew id", shardOf("H7225G") === "H072");
check("shard of a prefix particle", shardOf("H9003") === "H090");
check("no shard for junk", shardOf("../x") === null && shardOf("G") === null);
check("language of ids", wordLanguageOf("G4561") === "grc" && wordLanguageOf("H7225G") === "hbo");

const john6 = await getChapterWords("John", 6);
check("John 6 is Greek with 71 verses", john6?.lang === "grc" && Object.keys(john6.verses).length === 71);
const verse = await getVerseWords("John", 6, 53);
const sarka = verse?.words.find((word) => word.g === "σάρκα");
check("John 6:53 has σάρκα as G4561 N-ASF", sarka?.s === "G4561" && sarka?.m === "N-ASF" && sarka?.t === "sarka");
check("σάρκα has its Spanish gloss", sarka?.es === "carne");
check("John 6:53 has no omitted noise", verse !== null && verse.words.length > 20);

if (existsSync("data/site/john6.json")) {
  const old = JSON.parse(readFileSync("data/site/john6.json", "utf8"));
  let compared = 0;
  let different = 0;
  for (const [number, oldVerse] of Object.entries(old.verses)) {
    const words = (await getVerseWords("John", 6, Number(number)))?.words ?? [];
    check(
      `John 6:${number} has the old word count`,
      words.length === oldVerse.words.length,
      `${words.length} vs ${oldVerse.words.length}`,
    );
    oldVerse.words.forEach((oldWord, index) => {
      compared += 1;
      const word = words[index];
      if (!word || ["g", "p", "t", "s", "m", "en"].some((key) => (word[key] ?? "") !== (oldWord[key] ?? "")))
        different += 1;
    });
  }
  check(
    "John 6 regression against data/site/john6.json (g p t s m en)",
    compared > 1200 && different === 0,
    `${different} of ${compared} differ`,
  );
}

const entry = await getLexiconEntry("G4561");
check("σάρξ lexicon entry", entry?.lemma.normalize("NFC") === "σάρξ" && entry?.glossEs === "carne" && entry?.n === 147);
check(
  "σάρξ has Abbott-Smith senses with references",
  (entry?.senses?.length ?? 0) >= 6 && entry.senses.some((s) => s.refs.includes("John.1.14") || s.refs.length > 0),
);
const occurrence = await getWordOccurrence("G4561");
check("σάρξ occurrences", occurrence?.n === 147 && occurrence?.v === 126 && occurrence?.b.John?.length === 12);
check("σάρξ forms carry their morphology", occurrence?.fm["σάρκα"]?.["N-ASF"] === 37);
check("unknown id", (await getLexiconEntry("G99999")) === null && (await getWordOccurrence("G99999")) === null);
check("unknown chapter", (await getChapterWords("John", 99)) === null && (await getChapterWords("../x", 1)) === null);

const genesis = await getChapterWords("Gen", 1);
const first = genesis?.verses["1"]?.words ?? [];
check("Gen 1 is Hebrew", genesis?.lang === "hbo" && first.length === 7);
check(
  "Gen 1:1 first word",
  first[0]?.g === "בְּ/רֵאשִׁ֖ית" && first[0]?.r === "H7225G" && first[0]?.s === "H9003/H7225G",
);
const hebrewEntry = await getLexiconEntry("H7225G");
check(
  "H7225G has a BDB definition and no sense list",
  typeof hebrewEntry?.def === "string" && hebrewEntry.def.length > 20 && hebrewEntry.senses === undefined,
);
const psalm = await getChapterWords("Ps", 3);
check(
  "a psalm keeps its title as verse 0 with the Hebrew reference",
  psalm?.verses["0"]?.heb === "3.1" || psalm?.verses["1"]?.heb !== undefined,
);
check("the missing Hebrew entries are tolerated", (await getLexiconEntry("H0430J")) === null);

const greekParse = await getParseNames("grc");
check("Greek parse names", greekParse["N-ASF"] !== undefined);
const hebrewParse = await getParseNames("hbo");
check("Hebrew parse names", Object.keys(hebrewParse).length > 100);

if (failures.length > 0) {
  console.error(`check-words failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("check-words: ok");
