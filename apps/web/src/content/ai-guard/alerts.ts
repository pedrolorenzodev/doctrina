import type { AiStore } from "@/content/ai-store/types";
import { spendFractions } from "@/content/ai-guard/budget";

const DAILY_LEVELS = [
  { name: "daily_50", at: 0.5, text: "Doctrina AI: today's budget is 50% used." },
  { name: "daily_100", at: 1, text: "Doctrina AI: today's budget is used up; the AI is paused until tomorrow." },
] as const;
const MONTHLY_LEVELS = [
  { name: "monthly_80", at: 0.8, text: "Doctrina AI: this month's budget is 80% used." },
  {
    name: "monthly_100",
    at: 1,
    text: "Doctrina AI: this month's budget is used up; the AI is paused until next month.",
  },
] as const;

export async function sendAlert(store: AiStore, name: string, period: string, text: string): Promise<void> {
  const webhook = process.env.AI_ALERT_WEBHOOK;
  if (!webhook) return;
  if (!(await store.markAlert(name, period))) return;
  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: text, text }),
    signal: AbortSignal.timeout(5000),
  });
}

export async function checkSpendAlerts(store: AiStore, day: string, month: string): Promise<void> {
  if (!process.env.AI_ALERT_WEBHOOK) return;
  const fractions = await spendFractions(store, day, month);
  for (const level of DAILY_LEVELS) {
    if (fractions.day >= level.at) await sendAlert(store, level.name, day, level.text);
  }
  for (const level of MONTHLY_LEVELS) {
    if (fractions.month >= level.at) await sendAlert(store, level.name, month, level.text);
  }
}

export async function alertBudgetRefused(store: AiStore, day: string, month: string): Promise<void> {
  if (!process.env.AI_ALERT_WEBHOOK) return;
  const fractions = await spendFractions(store, day, month);
  const [closing, period] = fractions.day >= fractions.month ? [DAILY_LEVELS[1], day] : [MONTHLY_LEVELS[1], month];
  await sendAlert(store, closing.name, period, closing.text);
}

export async function alertCreditExhausted(store: AiStore, day: string): Promise<void> {
  await sendAlert(store, "provider_credit", day, "Doctrina AI: the provider credit is exhausted.");
}

// TODO(INT): the verification-failure-rate alert needs a count over ai_requests that AiStore does not expose.
