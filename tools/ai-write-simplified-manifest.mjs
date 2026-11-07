import { existsSync, writeFileSync } from "node:fs";
import { isServable, readStoredSimplification } from "@/content/ai-simplify/cache";
import { pregenerationItems } from "./ai-pregenerate-simplifications.mjs";

const OUT = "src/content/simplified-manifest.ts";

export function manifestSource(entries) {
  const lines = [...entries]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, hash]) => `  ${JSON.stringify(id)}: ${JSON.stringify(hash)},`);
  return `export const simplifiedManifest: Readonly<Record<string, string>> = {${lines.length ? `\n${lines.join("\n")}\n` : ""}};\n`;
}

async function main() {
  if (existsSync(".env.local")) process.loadEnvFile(".env.local");
  const entries = new Map();
  let stored = 0;
  for (const item of await pregenerationItems()) {
    const row = await readStoredSimplification(item.cacheKey);
    if (!row) continue;
    stored += 1;
    if (isServable(item.address, row, item.resolved.text)) entries.set(item.id, row.textSha256);
  }
  writeFileSync(OUT, manifestSource(entries));
  console.log(`${entries.size} servable of ${stored} stored rows · wrote ${OUT}`);
}

if (import.meta.main) await main();
