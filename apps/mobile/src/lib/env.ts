export type Env = {
  apiBaseUrl: string;
  supabaseUrl: string;
  supabaseKey: string;
};

type EnvSource = Record<string, string | undefined>;

const httpUrl = /^https?:\/\/[^\s/]+\S*$/;

const fields = [
  { variable: "EXPO_PUBLIC_API_BASE_URL", key: "apiBaseUrl", url: true },
  { variable: "EXPO_PUBLIC_SUPABASE_URL", key: "supabaseUrl", url: true },
  { variable: "EXPO_PUBLIC_SUPABASE_KEY", key: "supabaseKey", url: false },
] as const;

export class EnvError extends Error {
  readonly problems: readonly string[];

  constructor(problems: readonly string[]) {
    super(`Invalid app environment:\n${problems.map((problem) => `- ${problem}`).join("\n")}`);
    this.name = "EnvError";
    this.problems = problems;
  }
}

export function parseEnv(source: EnvSource): Env {
  const problems: string[] = [];
  const values: Record<string, string> = {};
  for (const { variable, key, url } of fields) {
    const value = source[variable]?.trim();
    if (!value) problems.push(`${variable} is missing`);
    else if (url && !httpUrl.test(value)) problems.push(`${variable} is not an http(s) URL`);
    else values[key] = url ? value.replace(/\/+$/, "") : value;
  }
  if (problems.length > 0) throw new EnvError(problems);
  return values as Env;
}

let cached: Env | null = null;

export function loadEnv(): Env {
  cached ??= parseEnv({
    EXPO_PUBLIC_API_BASE_URL: process.env.EXPO_PUBLIC_API_BASE_URL,
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_KEY: process.env.EXPO_PUBLIC_SUPABASE_KEY,
  });
  return cached;
}
