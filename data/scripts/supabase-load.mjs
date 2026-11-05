import { createHash } from "node:crypto";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..", "..");
const BATCH = 1000;
const BATCH_BYTES = 900_000;

export function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

export function credentials() {
  try {
    process.loadEnvFile(resolve(ROOT, ".env.local"));
  } catch {}
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY must be set in .env.local");
  return { url, key };
}

export async function rest({ url, key }, path, { method = "GET", body, prefer } = {}) {
  const response = await fetch(`${url}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: key,
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) throw new Error(`${method} ${path}: ${response.status} ${await response.text()}`);
  return response;
}

function* batches(rows) {
  let batch = [];
  let bytes = 0;
  for (const row of rows) {
    const size = JSON.stringify(row).length;
    if (batch.length > 0 && (batch.length >= BATCH || bytes + size > BATCH_BYTES)) {
      yield batch;
      batch = [];
      bytes = 0;
    }
    batch.push(row);
    bytes += size;
  }
  if (batch.length > 0) yield batch;
}

export async function upsert(client, table, conflict, rows) {
  for (const batch of batches(rows)) {
    await rest(client, `${table}?on_conflict=${conflict}`, {
      method: "POST",
      body: batch,
      prefer: "resolution=merge-duplicates,return=minimal",
    });
  }
}

export async function count(client, query) {
  const response = await rest(client, query, { method: "HEAD", prefer: "count=exact" });
  return Number(response.headers.get("content-range").split("/")[1]);
}

