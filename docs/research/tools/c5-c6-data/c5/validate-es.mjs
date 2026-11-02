import { readFileSync, readdirSync } from "node:fs";
import { validateFatherFile } from "/Users/pedrolorenzo/Desktop/dev/doctrina/src/content/father-text/validate-father-file.ts";
const root = "/Users/pedrolorenzo/Desktop/dev/doctrina/data/corpus/fathers-es";
let files = 0, other = 0, licence = 0;
for (const w of readdirSync(root)) {
  for (const f of readdirSync(`${root}/${w}`).filter((x) => x.endsWith(".json"))) {
    const d = JSON.parse(readFileSync(`${root}/${w}/${f}`, "utf8"));
    const errs = validateFatherFile(d, `${w}/${f}`);
    files++;
    for (const e of errs) { if (e.includes("licence is")) licence++; else { other++; console.log(e); } }
  }
}
console.log({ files, licenceErrors: licence, otherErrors: other });
