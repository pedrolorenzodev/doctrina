import { dayKey, monthKey } from "@/lib/ai/dates";

try {
  process.loadEnvFile(".env.local");
} catch {
  // the variables may already be in the environment
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY;
if (!url || !key) {
  console.error(`NEXT_PUBLIC_SUPABASE_URL ${url ? "set" : "missing"}, SUPABASE_SECRET_KEY ${key ? "set" : "missing"}`);
  process.exit(1);
}

const headers = { apikey: key, Authorization: `Bearer ${key}` };
const rest = async (query) => {
  const response = await fetch(`${url}/rest/v1/${query}`, { headers });
  if (!response.ok) throw new Error(`${query.split("?")[0]}: ${response.status}`);
  return response.json();
};

const usd = (micros) => `$${(Number(micros) / 1_000_000).toFixed(4)}`;
const now = new Date();
const day = dayKey(now);
const month = monthKey(now);
const dailyCap = Number(process.env.AI_DAILY_BUDGET_USD ?? "0.25");
const monthlyCap = Number(process.env.AI_MONTHLY_BUDGET_USD ?? "4");

const periods = [`d:${day}`, `m:${month}`].map(encodeURIComponent).join(",");
const spend = await rest(`ai_spend?select=period,reserved_micros,spent_micros&period=in.(${periods})`);
const of = (period) => spend.find((row) => row.period === period) ?? { reserved_micros: 0, spent_micros: 0 };
const today = of(`d:${day}`);
const thisMonth = of(`m:${month}`);
console.log(
  `Today ${day}: spent ${usd(today.spent_micros)}, reserved ${usd(today.reserved_micros)}, cap $${dailyCap.toFixed(2)}`,
);
console.log(
  `Month ${month}: spent ${usd(thisMonth.spent_micros)}, reserved ${usd(thisMonth.reserved_micros)}, cap $${monthlyCap.toFixed(2)}`,
);

const since = encodeURIComponent(`${day}T00:00:00-03:00`);
const rows = await rest(
  `ai_requests?select=route,outcome,cost_micros,cache_hit,quotes_total,quotes_failed&created_at=gte.${since}&limit=10000`,
);
const count = (list, pick) => {
  const found = new Map();
  for (const row of list) found.set(pick(row), (found.get(pick(row)) ?? 0) + 1);
  return [...found.entries()].sort((a, b) => b[1] - a[1]);
};
console.log(`Requests today: ${rows.length}`);
for (const [route, total] of count(rows, (row) => row.route)) console.log(`  ${route}: ${total}`);
const failures = rows.filter((row) => !["ok", "cache_hit", "fixed"].includes(row.outcome));
console.log(`Cache hits: ${rows.filter((row) => row.cache_hit).length}; failures: ${failures.length}`);
for (const [outcome, total] of count(failures, (row) => row.outcome).slice(0, 5)) console.log(`  ${outcome}: ${total}`);
const quotes = rows.reduce((sum, row) => sum + (row.quotes_total ?? 0), 0);
const quotesFailed = rows.reduce((sum, row) => sum + (row.quotes_failed ?? 0), 0);
if (quotes > 0) console.log(`Quotes checked: ${quotes}; rejected: ${quotesFailed}`);
console.log(`Cost logged today: ${usd(rows.reduce((sum, row) => sum + row.cost_micros, 0))}`);
