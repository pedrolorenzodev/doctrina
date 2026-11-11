import type { SimplifyAddress } from "@/lib/ai/contracts";
import { insertRows, rpc, selectRows, updateRows } from "@/content/supabase-rpc";
import type {
  AiRequestLog,
  AiSettings,
  AiStore,
  SimplificationRow,
  SpendState,
  StoredAnswer,
  StoredPack,
} from "@/content/ai-store/types";

const SETTINGS_TTL_MS = 30_000;
const QUESTION_MAX = 500;
const ALERT_NAME = /^[a-z0-9_]+$/;
const EMPTY: SpendState = { reservedMicros: 0, spentMicros: 0 };

type SettingsRow = {
  enabled: boolean;
  chat_enabled: boolean;
  simplify_enabled: boolean;
  corpus_version: string | null;
  last_alerts: Record<string, string>;
};

type SimplificationDb = {
  cache_key: string;
  address: SimplifyAddress;
  text_sha256: string;
  source_lang: "es" | "en";
  output_lang: "es" | "en";
  model: string;
  prompt_version: string;
  original: string[];
  clear: string[];
  very: string[];
  status: SimplificationRow["status"];
  checks: Record<string, unknown>;
  tokens_in: number;
  tokens_out: number;
  cost_micros: number;
  hits: number;
};

type AnswerDb = {
  answer_id: string;
  cache_key: string | null;
  locale: "es" | "en";
  prompt_version: string;
  models: Record<string, string>;
  corpus_version: string;
  answer: StoredAnswer["answer"];
  pack: StoredPack | null;
};

type SpendDb = { period: string; reserved_micros: number; spent_micros: number };

const quote = (value: string) => encodeURIComponent(value);

function toSimplification(row: SimplificationDb): SimplificationRow {
  return {
    cacheKey: row.cache_key,
    address: row.address,
    textSha256: row.text_sha256,
    sourceLang: row.source_lang,
    outputLang: row.output_lang,
    model: row.model,
    promptVersion: row.prompt_version,
    original: row.original,
    clear: row.clear,
    very: row.very,
    status: row.status,
    checks: row.checks,
    tokensIn: row.tokens_in,
    tokensOut: row.tokens_out,
    costMicros: row.cost_micros,
  };
}

function toAnswer(row: AnswerDb): StoredAnswer {
  return {
    answerId: row.answer_id,
    cacheKey: row.cache_key,
    locale: row.locale,
    promptVersion: row.prompt_version,
    models: row.models,
    corpusVersion: row.corpus_version,
    answer: row.answer,
    pack: row.pack,
  };
}

function toSpend(row: SpendDb | undefined): SpendState {
  return row ? { reservedMicros: Number(row.reserved_micros), spentMicros: Number(row.spent_micros) } : { ...EMPTY };
}

export class SupabaseAiStore implements AiStore {
  private cachedSettings: { at: number; value: AiSettings } | null = null;

  async settings(): Promise<AiSettings> {
    const cached = this.cachedSettings;
    if (cached && Date.now() - cached.at < SETTINGS_TTL_MS) return { ...cached.value };
    const [row] = await selectRows<SettingsRow>(
      "ai_settings",
      "select=enabled,chat_enabled,simplify_enabled,corpus_version&id=eq.1",
    );
    const value: AiSettings = row
      ? {
          enabled: row.enabled,
          chatEnabled: row.chat_enabled,
          simplifyEnabled: row.simplify_enabled,
          corpusVersion: row.corpus_version,
        }
      : { enabled: true, chatEnabled: true, simplifyEnabled: true, corpusVersion: null };
    this.cachedSettings = { at: Date.now(), value };
    return { ...value };
  }

  async take(day: string, bucket: string, key: string, limit: number): Promise<boolean> {
    return rpc<boolean>("ai_take", { p_day: day, p_bucket: bucket, p_key: key, p_limit: limit });
  }

  async reserve(
    day: string,
    month: string,
    estimateMicros: number,
    dailyCapMicros: number,
    monthlyCapMicros: number,
  ): Promise<boolean> {
    return rpc<boolean>("ai_reserve", {
      p_day: day,
      p_month: month,
      p_estimate_micros: estimateMicros,
      p_daily_cap_micros: dailyCapMicros,
      p_monthly_cap_micros: monthlyCapMicros,
    });
  }

  async settle(day: string, month: string, reservedMicros: number, actualMicros: number): Promise<void> {
    await rpc<null>("ai_settle", {
      p_day: day,
      p_month: month,
      p_reserved_micros: reservedMicros,
      p_actual_micros: actualMicros,
    });
  }

  async spend(day: string, month: string): Promise<{ day: SpendState; month: SpendState }> {
    const periods = quote(`(d:${day},m:${month})`);
    const rows = await selectRows<SpendDb>(
      "ai_spend",
      `select=period,reserved_micros,spent_micros&period=in.${periods}`,
    );
    return {
      day: toSpend(rows.find((row) => row.period === `d:${day}`)),
      month: toSpend(rows.find((row) => row.period === `m:${month}`)),
    };
  }

  async getSimplification(cacheKey: string): Promise<SimplificationRow | null> {
    const [row] = await selectRows<SimplificationDb>("ai_simplifications", `cache_key=eq.${quote(cacheKey)}&select=*`);
    return row ? toSimplification(row) : null;
  }

  async putSimplification(row: SimplificationRow): Promise<void> {
    await insertRows(
      "ai_simplifications",
      {
        cache_key: row.cacheKey,
        address: row.address,
        text_sha256: row.textSha256,
        source_lang: row.sourceLang,
        output_lang: row.outputLang,
        model: row.model,
        prompt_version: row.promptVersion,
        original: row.original,
        clear: row.clear,
        very: row.very,
        status: row.status,
        checks: row.checks,
        tokens_in: row.tokensIn,
        tokens_out: row.tokensOut,
        cost_micros: Math.round(row.costMicros),
      },
      { upsertOn: "cache_key" },
    );
  }

  async countSimplificationHit(cacheKey: string): Promise<void> {
    const filter = `cache_key=eq.${quote(cacheKey)}`;
    const [row] = await selectRows<Pick<SimplificationDb, "hits">>("ai_simplifications", `${filter}&select=hits`);
    if (row) await updateRows("ai_simplifications", filter, { hits: row.hits + 1 });
  }

  async getAnswerByKey(cacheKey: string): Promise<StoredAnswer | null> {
    const [row] = await selectRows<AnswerDb>("ai_answers", `cache_key=eq.${quote(cacheKey)}&select=*`);
    return row ? toAnswer(row) : null;
  }

  async getAnswer(answerId: string): Promise<StoredAnswer | null> {
    const [row] = await selectRows<AnswerDb>("ai_answers", `answer_id=eq.${quote(answerId)}&select=*`);
    return row ? toAnswer(row) : null;
  }

  async putAnswer(row: Omit<StoredAnswer, "answerId">): Promise<string> {
    const [saved] = await insertRows<Pick<AnswerDb, "answer_id">>(
      "ai_answers",
      {
        cache_key: row.cacheKey,
        locale: row.locale,
        prompt_version: row.promptVersion,
        models: row.models,
        corpus_version: row.corpusVersion,
        answer: row.answer,
        pack: row.pack,
      },
      row.cacheKey ? { upsertOn: "cache_key" } : {},
    );
    if (!saved) throw new Error("Supabase insert ai_answers returned no row");
    return saved.answer_id;
  }

  async countAnswerHit(answerId: string): Promise<void> {
    const filter = `answer_id=eq.${quote(answerId)}`;
    const [row] = await selectRows<{ hits: number }>("ai_answers", `${filter}&select=hits`);
    if (row) await updateRows("ai_answers", filter, { hits: row.hits + 1 });
  }

  async logRequest(row: AiRequestLog): Promise<void> {
    await insertRows("ai_requests", {
      route: row.route,
      locale: row.locale,
      outcome: row.outcome,
      intent: row.intent,
      doctrines: row.doctrines,
      prompt_version: row.promptVersion,
      models: row.models,
      usage: row.usage,
      cost_micros: Math.round(row.costMicros),
      latency_ms: row.latencyMs,
      quotes_total: row.quotesTotal,
      quotes_failed: row.quotesFailed,
      repaired: row.repaired,
      cache_hit: row.cacheHit,
      answer_id: row.answerId,
      question: row.question === null ? null : row.question.slice(0, QUESTION_MAX),
      checks: row.checks,
    });
  }

  async markAlert(name: string, period: string): Promise<boolean> {
    if (!ALERT_NAME.test(name)) throw new Error("Alert names are lowercase letters, digits and underscores");
    const [row] = await selectRows<Pick<SettingsRow, "last_alerts">>("ai_settings", "select=last_alerts&id=eq.1");
    if (!row) return false;
    const previous = row.last_alerts[name];
    if (previous === period) return false;
    const guard =
      previous === undefined ? `last_alerts->>${name}=is.null` : `last_alerts->>${name}=eq.${quote(previous)}`;
    const updated = await updateRows<unknown>("ai_settings", `id=eq.1&${guard}`, {
      last_alerts: { ...row.last_alerts, [name]: period },
      updated_at: new Date().toISOString(),
    });
    return updated.length === 1;
  }

  async cleanup(): Promise<void> {
    await rpc<null>("ai_cleanup", {});
  }
}
