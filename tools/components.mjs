import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const roots = ["src/components", "src/features"];
const exported = /export\s+(?:async\s+)?(?:function|const)\s+([A-Z]\w*)/g;
const query = process.argv[2]?.toLowerCase();

async function* files(dir) {
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* files(full);
    else if (entry.name.endsWith(".tsx")) yield full;
  }
}

let count = 0;
for (const root of roots) {
  for await (const file of files(root)) {
    const source = await readFile(file, "utf8");
    for (const [, name] of source.matchAll(exported)) {
      if (query && !`${name} ${file}`.toLowerCase().includes(query)) continue;
      console.log(`${name.padEnd(32)} ${file}`);
      count += 1;
    }
  }
}
if (count === 0) console.log(query ? `No component matches "${query}".` : "No components yet.");
