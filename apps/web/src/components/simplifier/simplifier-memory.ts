import type { SimplifierLevel } from "@/lib/simplifier-types";

const streamed = new Set<string>();
const levels = new Map<string, SimplifierLevel>();

export const hasStreamed = (id: string) => streamed.has(id);
export const markStreamed = (id: string) => void streamed.add(id);
export const levelOf = (id: string): SimplifierLevel => levels.get(id) ?? "clear";
export const rememberLevel = (id: string, level: SimplifierLevel) => void levels.set(id, level);
