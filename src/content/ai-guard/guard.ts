import { ESTIMATE_MICROS } from "@/lib/ai/contracts";
import { dayKey, monthKey } from "@/lib/ai/dates";
import { AiError } from "@/lib/ai/errors";
import { getAiStore } from "@/content/ai-store/get-ai-store";
import { alertBudgetRefused, checkSpendAlerts } from "@/content/ai-guard/alerts";
import { budgetCannotCover, reserveBudget } from "@/content/ai-guard/budget";
import { featureIsOff, killSwitchIsOn } from "@/content/ai-guard/settings";
import { hashIp, matchesSecret, resolveVisitor, sameOrigin } from "@/content/ai-guard/visitor";

export type GuardKind = "chat" | "simplify" | "cached";

export type GuardTicket = {
  visitor: string;
  ipHash: string;
  day: string;
  month: string;
  reservedMicros: number;
  setCookie: string | null;
};

export type AiStatus = { chat: "on" | "off" | "paused"; simplify: "on" | "off" | "paused" };

const CLEANUP_ONE_IN = 50;
const settledTickets = new WeakSet<GuardTicket>();

const minuteFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function minuteKey(now: Date): string {
  return minuteFormatter.format(now).replace(":", "");
}

function limitFrom(name: string, fallback: number): number {
  const raw = process.env[name];
  const value = raw === undefined || raw.trim() === "" ? Number.NaN : Number(raw);
  return Number.isInteger(value) && value >= 0 ? value : fallback;
}

async function defer(work: () => Promise<void>): Promise<void> {
  const safe = () => work().catch(() => undefined);
  try {
    const { after } = await import("next/server");
    after(safe);
  } catch {
    void safe();
  }
}

function isEvalRequest(request: Request): boolean {
  if (process.env.VERCEL === "1") return false;
  return matchesSecret(request.headers.get("x-ai-eval"), process.env.AI_EVAL_SECRET);
}

async function requireHuman(): Promise<void> {
  if (process.env.VERCEL !== "1" || process.env.AI_PROVIDER === "fake") return;
  try {
    const { checkBotId } = await import("botid/server");
    if ((await checkBotId()).isBot) throw new AiError("ai_bot_check_failed");
  } catch {
    throw new AiError("ai_bot_check_failed");
  }
}

async function takeOrThrow(day: string, bucket: string, key: string, limit: number, error: AiError): Promise<void> {
  if (!(await getAiStore().take(day, bucket, key, limit))) throw error;
}

export async function guardRequest(request: Request, kind: GuardKind, estimateMicros: number): Promise<GuardTicket> {
  const now = new Date();
  const day = dayKey(now);
  const month = monthKey(now);
  const store = getAiStore();
  const isPost = request.method === "POST";

  if (isPost && !sameOrigin(request)) throw new AiError("ai_bad_request");
  if (kind === "cached" ? await killSwitchIsOn() : await featureIsOff(kind)) throw new AiError("ai_disabled");

  const evaluation = isEvalRequest(request);
  if (kind !== "cached" && isPost && !evaluation) await requireHuman();

  let visitor = evaluation ? "eval" : "-";
  let ipHash = "-";
  let setCookie: string | null = null;
  if (!evaluation) {
    ipHash = hashIp(request, day);
    if (kind === "cached") {
      await takeOrThrow(day, "cached", ipHash, limitFrom("AI_CACHED_PER_IP_DAY", 400), new AiError("ai_daily_limit"));
    } else {
      const person = resolveVisitor(request);
      visitor = person.id;
      setCookie = person.setCookie;
      if (kind === "chat") {
        await takeOrThrow(
          day,
          `chat-min@${minuteKey(now)}`,
          ipHash,
          limitFrom("AI_CHAT_PER_IP_MINUTE", 4),
          new AiError("ai_rate_limited"),
        );
      }
      const perIp = kind === "chat" ? "AI_CHAT_PER_IP_DAY" : "AI_SIMPLIFY_PER_IP_DAY";
      const perVisitor = kind === "chat" ? "AI_CHAT_PER_VISITOR_DAY" : "AI_SIMPLIFY_PER_VISITOR_DAY";
      const tooMany = new AiError("ai_daily_limit");
      await takeOrThrow(day, kind, `ip:${ipHash}`, limitFrom(perIp, kind === "chat" ? 40 : 120), tooMany);
      await takeOrThrow(day, kind, `v:${person.id}`, limitFrom(perVisitor, kind === "chat" ? 12 : 40), tooMany);
    }
  }

  let reservedMicros = 0;
  if (kind !== "cached" && estimateMicros > 0) {
    if (!(await reserveBudget(store, day, month, estimateMicros))) {
      await defer(() => alertBudgetRefused(store, day, month));
      throw new AiError("ai_budget_exhausted");
    }
    reservedMicros = estimateMicros;
    await defer(async () => {
      if (Math.random() < 1 / CLEANUP_ONE_IN) await store.cleanup();
      await checkSpendAlerts(store, day, month);
    });
  }
  return { visitor, ipHash, day, month, reservedMicros, setCookie };
}

export async function settleTicket(ticket: GuardTicket, actualMicros: number): Promise<void> {
  if (settledTickets.has(ticket)) return;
  settledTickets.add(ticket);
  if (ticket.reservedMicros === 0 && actualMicros <= 0) return;
  await getAiStore().settle(ticket.day, ticket.month, ticket.reservedMicros, actualMicros);
}

export async function aiStatus(): Promise<AiStatus> {
  try {
    const now = new Date();
    const day = dayKey(now);
    const month = monthKey(now);
    const store = getAiStore();
    const stateOf = async (feature: "chat" | "simplify"): Promise<AiStatus["chat"]> => {
      if (await featureIsOff(feature)) return "off";
      return (await budgetCannotCover(store, day, month, ESTIMATE_MICROS[feature])) ? "paused" : "on";
    };
    return { chat: await stateOf("chat"), simplify: await stateOf("simplify") };
  } catch {
    return { chat: "off", simplify: "off" };
  }
}
