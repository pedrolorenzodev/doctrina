import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const SRC = fileURLToPath(new URL("../src/", import.meta.url));

export async function resolve(specifier, context, next) {
  if (!specifier.startsWith("@/")) return next(specifier, context);
  const base = SRC + specifier.slice(2);
  const file = [`${base}.ts`, `${base}/index.ts`].find((candidate) => existsSync(candidate));
  if (!file) throw new Error(`Cannot resolve ${specifier}`);
  return next(pathToFileURL(file).href, context);
}
