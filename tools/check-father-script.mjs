import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fatherScriptData } from "@/features/reader-ai/father-script-data";

const failures = [];
const fathers = resolve(process.cwd(), "data", "corpus", "fathers");
const fathersEs = resolve(process.cwd(), "data", "corpus", "fathers-es");

const divisionOf = (root, work, locator) => {
  const folder = resolve(root, work);
  if (!existsSync(folder)) return null;
  const [name] = readdirSync(folder).filter((entry) => entry.endsWith(".json"));
  const file = JSON.parse(readFileSync(resolve(folder, name), "utf8"));
  return file.divisions.find((division) => division.locator === locator)?.text ?? null;
};
const pieces = (text) => text.split(" […] ");

let checked = 0;
if (existsSync(fathers) && existsSync(fathersEs)) {
  for (const [work, script] of Object.entries(fatherScriptData)) {
    for (const [id, quote] of Object.entries(script.quotes)) {
      const where = `${work}/${id}`;
      const english = divisionOf(fathers, quote.father.workId, quote.father.at);
      const spanish = divisionOf(fathersEs, quote.father.workId, quote.father.at);
      if (english === null || spanish === null) {
        failures.push(`${where}: no paragraph ${quote.father.at} in the corpus`);
        continue;
      }
      for (const part of pieces(quote.father.original))
        if (!english.includes(part)) failures.push(`${where}: the English quotation is not in ${quote.father.at}`);
      for (const part of pieces(quote.text))
        if (!spanish.includes(part)) failures.push(`${where}: the Spanish quotation is not in ${quote.father.at}`);
      checked += 1;
    }
    for (const topic of script.topics) {
      for (const id of topic.quotes) if (!script.quotes[id]) failures.push(`${work}/${topic.id}: unknown quote ${id}`);
      const shown = topic.quotes
        .map((id) => script.quotes[id]?.text ?? "")
        .join(" ")
        .toLowerCase();
      for (const [, phrase] of topic.prose.matchAll(/«([^»]+)»/g))
        if (!shown.includes(phrase.toLowerCase()))
          failures.push(`${work}/${topic.id}: «${phrase}» is not in the quotations shown`);
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  process.exit(1);
}
console.log(
  `check-father-script: ok (${checked} quotations, ${existsSync(fathersEs) ? "corpus checked" : "no corpus here"})`,
);
