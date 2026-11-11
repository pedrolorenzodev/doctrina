const ATTEMPTS = 4;

const transient = (status: number) => status === 408 || status === 429 || status >= 500;

function credentials(): { url: string; key: string } {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error("Supabase server credentials are not set");
  return { url, key };
}

async function send(path: string, init: { method: string; body?: unknown; prefer?: string }): Promise<Response> {
  const { url, key } = credentials();
  const headers: Record<string, string> = { apikey: key, Authorization: `Bearer ${key}` };
  if (init.body !== undefined) headers["Content-Type"] = "application/json";
  if (init.prefer) headers.Prefer = init.prefer;
  for (let attempt = 1; ; attempt += 1) {
    try {
      const response = await fetch(`${url}/rest/v1/${path}`, {
        method: init.method,
        headers,
        body: init.body === undefined ? null : JSON.stringify(init.body),
        cache: "no-store",
      });
      if (response.ok || !transient(response.status) || attempt === ATTEMPTS) return response;
    } catch (error) {
      if (attempt === ATTEMPTS) throw error;
    }
    await new Promise((done) => setTimeout(done, 300 * attempt));
  }
}

async function readJson<T>(response: Response, what: string): Promise<T> {
  if (!response.ok) throw new Error(`Supabase ${what}: ${response.status} ${await response.text()}`);
  const text = await response.text();
  return (text === "" ? null : JSON.parse(text)) as T;
}

export async function rpc<T>(fn: string, args: Record<string, unknown>): Promise<T> {
  const response = await send(`rpc/${fn}`, { method: "POST", body: args });
  return readJson<T>(response, `rpc ${fn}`);
}

export async function selectRows<Row>(table: string, query = ""): Promise<Row[]> {
  const response = await send(`${table}${query ? `?${query}` : ""}`, { method: "GET" });
  return (await readJson<Row[] | null>(response, `select ${table}`)) ?? [];
}

export async function insertRows<Row>(
  table: string,
  rows: Record<string, unknown> | Record<string, unknown>[],
  options: { upsertOn?: string } = {},
): Promise<Row[]> {
  const path = options.upsertOn ? `${table}?on_conflict=${options.upsertOn}` : table;
  const prefer = options.upsertOn ? "resolution=merge-duplicates,return=representation" : "return=representation";
  const response = await send(path, { method: "POST", body: rows, prefer });
  return (await readJson<Row[] | null>(response, `insert ${table}`)) ?? [];
}

export async function updateRows<Row>(table: string, query: string, patch: Record<string, unknown>): Promise<Row[]> {
  const response = await send(`${table}?${query}`, { method: "PATCH", body: patch, prefer: "return=representation" });
  return (await readJson<Row[] | null>(response, `update ${table}`)) ?? [];
}
