import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { validateFatherFile } from "../../src/content/father-text/validate-father-file.ts";

const root = fileURLToPath(new URL("../corpus/fathers-es/", import.meta.url));
let files = 0;
let licenceErrors = 0;
let otherErrors = 0;
for (const work of readdirSync(root)) {
  for (const name of readdirSync(`${root}${work}`).filter((entry) => entry.endsWith(".json"))) {
    const file = JSON.parse(readFileSync(`${root}${work}/${name}`, "utf8"));
    files += 1;
    for (const error of validateFatherFile(file, `${work}/${name}`)) {
      if (error.includes("licence is")) licenceErrors += 1;
      else {
        otherErrors += 1;
        console.log(error);
      }
    }
  }
}
console.log({ files, licenceErrors, otherErrors });
