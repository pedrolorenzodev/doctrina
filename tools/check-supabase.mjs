import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
try {
  process.loadEnvFile(resolve(ROOT, ".env.local"));
} catch {}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishable = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const secret = process.env.SUPABASE_SECRET_KEY;
if (!url || !publishable || !secret)
  throw new Error("NEXT_PUBLIC_SUPABASE_URL, the publishable key and SUPABASE_SECRET_KEY must be set in .env.local");

const publicTables = [
  "translations",
  "books",
  "verses",
  "chapters",
  "chapter_structure",
  "works",
  "editions",
  "divisions",
  "corpus_manifest",
];
const writeProbe = args().includes("--write-probe");

function args() {
  return process.argv.slice(2);
}

async function request(key, path, { method = "GET", body, prefer } = {}) {
  return fetch(`${url}/rest/v1/${path}`, {
    method,
    headers: { apikey: key, "Content-Type": "application/json", ...(prefer ? { Prefer: prefer } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
}

async function count(key, table, filter = "") {
  const response = await request(key, `${table}?select=*${filter}`, { method: "HEAD", prefer: "count=exact" });
  if (!response.ok) return `HTTP ${response.status}`;
  return Number(response.headers.get("content-range").split("/")[1]);
}

let failed = false;
console.log("table                 publishable   secret");
for (const table of publicTables) {
  const anon = await count(publishable, table);
  const server = await count(secret, table);
  console.log(`${table.padEnd(21)} ${String(anon).padEnd(13)} ${server}`);
  if (typeof server !== "number") failed = true;
}

const translations = await request(secret, "translations?select=id&order=ordinal");
if (translations.ok) {
  for (const { id } of await translations.json()) {
    console.log(`  ${id}: ${await count(secret, "verses", `&translation_id=eq.${id}`)} verses`);
  }
}

if (writeProbe) {
  const write = await request(secret, "scratch_stage0?on_conflict=id", {
    method: "POST",
    body: [{ id: 1, note: "probe" }],
    prefer: "resolution=merge-duplicates,return=minimal",
  });
  const read = await count(secret, "scratch_stage0");
  const anonRead = await count(publishable, "scratch_stage0");
  console.log(`write probe: secret write ${write.status}, secret count ${read}, publishable read ${anonRead}`);
}

if (failed) process.exit(1);
