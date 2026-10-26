import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const archive = join(process.cwd(), "data", "raw", "src", "bibles", "eng-web-c_usfm.zip");
const target = join(process.cwd(), "data", "corpus", "bibles", "web-c.red.json");

const bookIds = {
  GEN: "Gen", EXO: "Exod", LEV: "Lev", NUM: "Num", DEU: "Deut", JOS: "Josh", JDG: "Judg", RUT: "Ruth",
  "1SA": "1Sam", "2SA": "2Sam", "1KI": "1Kgs", "2KI": "2Kgs", "1CH": "1Chr", "2CH": "2Chr", EZR: "Ezra",
  NEH: "Neh", EST: "Esth", JOB: "Job", PSA: "Ps", PRO: "Prov", ECC: "Eccl", SNG: "Song", ISA: "Isa",
  JER: "Jer", LAM: "Lam", EZK: "Ezek", DAN: "Dan", HOS: "Hos", JOL: "Joel", AMO: "Amos", OBA: "Obad",
  JON: "Jonah", MIC: "Mic", NAM: "Nah", HAB: "Hab", ZEP: "Zeph", HAG: "Hag", ZEC: "Zech", MAL: "Mal",
  TOB: "Tob", JDT: "Jdt", WIS: "Wis", SIR: "Sir", BAR: "Bar", "1MA": "1Macc", "2MA": "2Macc",
  MAT: "Matt", MRK: "Mark", LUK: "Luke", JHN: "John", ACT: "Acts", ROM: "Rom", "1CO": "1Cor", "2CO": "2Cor",
  GAL: "Gal", EPH: "Eph", PHP: "Phil", COL: "Col", "1TH": "1Thess", "2TH": "2Thess", "1TI": "1Tim",
  "2TI": "2Tim", TIT: "Titus", PHM: "Phlm", HEB: "Heb", JAS: "Jas", "1PE": "1Pet", "2PE": "2Pet",
  "1JN": "1John", "2JN": "2John", "3JN": "3John", JUD: "Jude", REV: "Rev",
};

const listing = execFileSync("unzip", ["-Z1", archive], { encoding: "utf8" }).split("\n").filter(Boolean);
const clean = (value) =>
  value
    .replace(/\\f .*?\\f\*/gs, "")
    .replace(/\\x .*?\\x\*/gs, "")
    .replace(/\|[^\\]*?(?=\\)/g, "")
    .replace(/\\\+?w\*?/g, "")
    .replace(/\\[a-z0-9]+\*? ?/g, "")
    .replace(/\s+/g, " ")
    .trim();

const result = {};
let phrases = 0;
for (const name of listing) {
  const code = /^\d+-([0-9A-Z]{3})eng-web-c\.usfm$/.exec(name)?.[1];
  const book = code ? bookIds[code] : undefined;
  if (!book) continue;
  const text = execFileSync("unzip", ["-p", archive, name], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  for (const chapterPart of text.split(/\n\\c (\d+)[ \t]*\r?\n/).slice(1).reduce((acc, item, index, all) => {
    if (index % 2 === 0) acc.push([item, all[index + 1] ?? ""]);
    return acc;
  }, [])) {
    const [chapter, body] = chapterPart;
    const verseParts = body.split(/\\v (\d+) /);
    for (let at = 1; at < verseParts.length; at += 2) {
      const verse = verseParts[at];
      const marks = [...verseParts[at + 1].matchAll(/\\wj (.*?)\\wj\*/gs)].map((match) => clean(match[1]));
      const found = marks.filter((mark) => mark.length > 0);
      if (found.length === 0) continue;
      result[`${book}.${chapter}.${verse}`] = found;
      phrases += found.length;
    }
  }
}

writeFileSync(target, `${JSON.stringify(result)}\n`);
console.log(`${Object.keys(result).length} verses, ${phrases} phrases -> ${target}`);
