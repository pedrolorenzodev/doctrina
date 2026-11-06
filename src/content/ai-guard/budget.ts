import type { AiStore, SpendState } from "@/content/ai-store/types";

const DEFAULT_DAILY_USD = 0.25;
const DEFAULT_MONTHLY_USD = 4;

function usdToMicros(raw: string | undefined, fallback: number): number {
  const value = raw === undefined || raw.trim() === "" ? Number.NaN : Number(raw);
  return Math.round((Number.isFinite(value) && value >= 0 ? value : fallback) * 1_000_000);
}

export function budgetCaps(): { dailyMicros: number; monthlyMicros: number } {
  return {
    dailyMicros: usdToMicros(process.env.AI_DAILY_BUDGET_USD, DEFAULT_DAILY_USD),
    monthlyMicros: usdToMicros(process.env.AI_MONTHLY_BUDGET_USD, DEFAULT_MONTHLY_USD),
  };
}

export async function reserveBudget(
  store: AiStore,
  day: string,
  month: string,
  estimateMicros: number,
): Promise<boolean> {
  const { dailyMicros, monthlyMicros } = budgetCaps();
  return store.reserve(day, month, estimateMicros, dailyMicros, monthlyMicros);
}

const used = (state: SpendState) => state.reservedMicros + state.spentMicros;

export async function budgetCannotCover(
  store: AiStore,
  day: string,
  month: string,
  estimateMicros: number,
): Promise<boolean> {
  const { dailyMicros, monthlyMicros } = budgetCaps();
  const spend = await store.spend(day, month);
  return used(spend.day) + estimateMicros > dailyMicros || used(spend.month) + estimateMicros > monthlyMicros;
}

export async function spendFractions(
  store: AiStore,
  day: string,
  month: string,
): Promise<{ day: number; month: number }> {
  const { dailyMicros, monthlyMicros } = budgetCaps();
  const spend = await store.spend(day, month);
  return {
    day: dailyMicros === 0 ? 1 : used(spend.day) / dailyMicros,
    month: monthlyMicros === 0 ? 1 : used(spend.month) / monthlyMicros,
  };
}
