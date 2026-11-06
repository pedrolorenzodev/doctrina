import { randomUUID } from "node:crypto";
import type {
  AiRequestLog,
  AiSettings,
  AiStore,
  SimplificationRow,
  SpendState,
  StoredAnswer,
} from "@/content/ai-store/types";

const EMPTY: SpendState = { reservedMicros: 0, spentMicros: 0 };

export class MemoryAiStore implements AiStore {
  readonly settingsRow: AiSettings = {
    enabled: true,
    chatEnabled: true,
    simplifyEnabled: true,
    corpusVersion: "fixture",
  };
  readonly counters = new Map<string, number>();
  readonly days = new Map<string, SpendState>();
  readonly months = new Map<string, SpendState>();
  readonly simplifications = new Map<string, SimplificationRow>();
  readonly simplificationHits = new Map<string, number>();
  readonly answers = new Map<string, StoredAnswer>();
  readonly answerKeys = new Map<string, string>();
  readonly answerHits = new Map<string, number>();
  readonly requests: AiRequestLog[] = [];
  readonly alerts = new Set<string>();

  async settings(): Promise<AiSettings> {
    return { ...this.settingsRow };
  }

  async take(day: string, bucket: string, key: string, limit: number): Promise<boolean> {
    const id = `${day}|${bucket}|${key}`;
    const used = this.counters.get(id) ?? 0;
    if (used >= limit) return false;
    this.counters.set(id, used + 1);
    return true;
  }

  async reserve(
    day: string,
    month: string,
    estimateMicros: number,
    dailyCapMicros: number,
    monthlyCapMicros: number,
  ): Promise<boolean> {
    const today = this.days.get(day) ?? EMPTY;
    const thisMonth = this.months.get(month) ?? EMPTY;
    if (today.reservedMicros + today.spentMicros + estimateMicros > dailyCapMicros) return false;
    if (thisMonth.reservedMicros + thisMonth.spentMicros + estimateMicros > monthlyCapMicros) return false;
    this.days.set(day, { ...today, reservedMicros: today.reservedMicros + estimateMicros });
    this.months.set(month, { ...thisMonth, reservedMicros: thisMonth.reservedMicros + estimateMicros });
    return true;
  }

  async settle(day: string, month: string, reservedMicros: number, actualMicros: number): Promise<void> {
    for (const [map, key] of [
      [this.days, day],
      [this.months, month],
    ] as const) {
      const state = map.get(key) ?? EMPTY;
      map.set(key, {
        reservedMicros: Math.max(0, state.reservedMicros - reservedMicros),
        spentMicros: state.spentMicros + actualMicros,
      });
    }
  }

  async spend(day: string, month: string): Promise<{ day: SpendState; month: SpendState }> {
    return { day: { ...(this.days.get(day) ?? EMPTY) }, month: { ...(this.months.get(month) ?? EMPTY) } };
  }

  async getSimplification(cacheKey: string): Promise<SimplificationRow | null> {
    return this.simplifications.get(cacheKey) ?? null;
  }

  async putSimplification(row: SimplificationRow): Promise<void> {
    this.simplifications.set(row.cacheKey, row);
  }

  async countSimplificationHit(cacheKey: string): Promise<void> {
    this.simplificationHits.set(cacheKey, (this.simplificationHits.get(cacheKey) ?? 0) + 1);
  }

  async getAnswerByKey(cacheKey: string): Promise<StoredAnswer | null> {
    const id = this.answerKeys.get(cacheKey);
    return id ? (this.answers.get(id) ?? null) : null;
  }

  async getAnswer(answerId: string): Promise<StoredAnswer | null> {
    return this.answers.get(answerId) ?? null;
  }

  async putAnswer(row: Omit<StoredAnswer, "answerId">): Promise<string> {
    const answerId = randomUUID();
    this.answers.set(answerId, { ...row, answerId });
    if (row.cacheKey) this.answerKeys.set(row.cacheKey, answerId);
    return answerId;
  }

  async countAnswerHit(answerId: string): Promise<void> {
    this.answerHits.set(answerId, (this.answerHits.get(answerId) ?? 0) + 1);
  }

  async logRequest(row: AiRequestLog): Promise<void> {
    this.requests.push(row);
  }

  async markAlert(name: string, period: string): Promise<boolean> {
    const id = `${name}|${period}`;
    if (this.alerts.has(id)) return false;
    this.alerts.add(id);
    return true;
  }

  async cleanup(): Promise<void> {}
}

const SHARED = Symbol.for("doctrina.ai.memory-store");

export function getMemoryStore(): MemoryAiStore {
  const holder = globalThis as unknown as Record<symbol, MemoryAiStore | undefined>;
  holder[SHARED] ??= new MemoryAiStore();
  return holder[SHARED];
}

export function seedSimplifications(rows: SimplificationRow[]): void {
  const store = getMemoryStore();
  for (const row of rows) store.simplifications.set(row.cacheKey, row);
}
