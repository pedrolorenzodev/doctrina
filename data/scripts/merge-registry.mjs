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
  if (name === "citations") {
    const excerptKey = (excerpt) => (excerpt.es?.text || excerpt.la?.text || excerpt.en?.text || excerpt.de?.text || "").slice(0, 60);
    const identity = (citation) => `${citation.work}|${JSON.stringify(citation.locator.parts)}`;
    for (const id of Object.keys(merged)) {
      if (!(id in existing && id in incoming)) continue;
      if (identity(existing[id]) !== identity(incoming[id])) throw new Error(`citation ${id} names a different passage in the registry and in the conversion`);
      const have = new Set(existing[id].excerpts.map(excerptKey));
      const added = incoming[id].excerpts.filter((excerpt) => !have.has(excerptKey(excerpt)));
      merged[id] = { ...existing[id], excerpts: [...existing[id].excerpts, ...added] };
    }
  }
  if (name === "works") {
    for (const id of Object.keys(existing)) {
      if (id in incoming && JSON.stringify(existing[id]) !== JSON.stringify(incoming[id])) console.log("work differs, existing kept:", id);
    }
  }
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
