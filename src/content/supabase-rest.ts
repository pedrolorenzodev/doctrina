const PAGE = 1000;
const ATTEMPTS = 4;

export type SupabaseSelect = <Row>(query: string, pageSize?: number) => Promise<Row[]>;

const transient = (status: number) => status === 408 || status === 429 || status >= 500;

async function fetchWithRetry(url: string, key: string, tag: string): Promise<Response> {
  for (let attempt = 1; ; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { apikey: key, Prefer: "count=exact" },
        cache: "force-cache",
        next: { tags: [tag] },
      });
      if (response.ok || !transient(response.status) || attempt === ATTEMPTS) return response;
    } catch (error) {
      if (attempt === ATTEMPTS) throw error;
    }
    await new Promise((done) => setTimeout(done, 300 * attempt));
  }
}

export function createSupabaseSelect(url: string, key: string, tag: string): SupabaseSelect {
  return async function select<Row>(query: string, pageSize = PAGE): Promise<Row[]> {
    const rows: Row[] = [];
    for (;;) {
      const response = await fetchWithRetry(
        `${url}/rest/v1/${query}&limit=${pageSize}&offset=${rows.length}`,
        key,
        tag,
      );
      if (!response.ok) throw new Error(`Supabase ${query}: ${response.status} ${await response.text()}`);
      const page = (await response.json()) as Row[];
      rows.push(...page);
      const total = Number(response.headers.get("content-range")?.split("/")[1]);
      if (page.length === 0 || !(rows.length < total)) return rows;
    }
  };
}
