import type { SearchEntry } from "@doctrina/core/search-match";

const loaded = new Map<string, SearchEntry[]>();
const loading = new Map<string, Promise<SearchEntry[]>>();

export function loadedSearchIndex(url: string): SearchEntry[] | null {
  return loaded.get(url) ?? null;
}

export function loadSearchIndex(url: string): Promise<SearchEntry[]> {
  let pending = loading.get(url);
  if (!pending) {
    pending = fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`search index ${response.status}`);
        return response.json() as Promise<SearchEntry[]>;
      })
      .then((entries) => {
        loaded.set(url, entries);
        return entries;
      })
      .catch((error: unknown) => {
        loading.delete(url);
        throw error;
      });
    loading.set(url, pending);
  }
  return pending;
}
