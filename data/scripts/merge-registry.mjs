import fs from "node:fs";

const [, , outDir] = process.argv;
if (!outDir) {
  console.error("Usage: node --import ./tools/register-alias.mjs data/scripts/merge-registry.mjs <CONTENT_OUT of the converter>");
  process.exit(1);
}
const existingDir = new URL("../../src/content/registry", import.meta.url).pathname;
const types = { works: ["Work", "WorkId"], editions: ["Edition", "EditionId"], citations: ["Citation", "CitationId"], verses: ["Verse", "VerseId"] };
const literal = (value) => JSON.stringify(value, null, 1);

for (const [name, [type, ids]] of Object.entries(types)) {
  const existing = (await import(`${existingDir}/${name}.ts`))[name];
  const incoming = (await import(`${outDir}/registry/${name}.ts`))[name];
  const merged = { ...incoming, ...existing };
  if (name === "editions") {
    for (const id of Object.keys(merged)) {
      if (id in existing && id in incoming) {
        merged[id] = { ...existing[id], works: [...new Set([...existing[id].works, ...incoming[id].works])] };
      }
    }
  }
  fs.writeFileSync(
    `${existingDir}/${name}.ts`,
    `import type { ${type} } from "@/content/model/registry";\n\nexport const ${name} = ${literal(merged)} satisfies Record<string, ${type}>;\n\nexport type ${ids} = keyof typeof ${name};\n`,
  );
  console.log(name, Object.keys(existing).length, "->", Object.keys(merged).length);
}
