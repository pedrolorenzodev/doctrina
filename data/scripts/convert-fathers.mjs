import { readFileSync, writeFileSync } from "node:fs";

const history = JSON.parse(readFileSync("data/site/history.json", "utf8"));
const fathers = history.fathers.map((father) => ({
  id: father.id,
  kind: father.kind,
  name: father.name,
  born: father.born,
  died: father.died,
  approx: Boolean(father.approx),
  region: father.region,
  language: father.language,
  role: father.role,
  works: father.keyWorks.map((work) => ({ title: work.title, date: work.date, year: work.year })),
  summary: father.summary,
}));

const out = `import type { Father } from "@/content/model/history";

export const fathers: Father[] = ${JSON.stringify(fathers, null, 2)};
`;
writeFileSync("src/content/history/fathers.ts", out);
console.log(`${fathers.length} fathers`);
