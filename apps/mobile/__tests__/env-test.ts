import { EnvError, parseEnv } from "@/lib/env";

const valid = {
  EXPO_PUBLIC_API_BASE_URL: "https://doctrina.example/",
  EXPO_PUBLIC_SUPABASE_URL: "https://ref.supabase.co",
  EXPO_PUBLIC_SUPABASE_KEY: "publishable",
};

describe("parseEnv", () => {
  it("returns the typed config and drops trailing slashes", () => {
    expect(parseEnv(valid)).toEqual({
      apiBaseUrl: "https://doctrina.example",
      supabaseUrl: "https://ref.supabase.co",
      supabaseKey: "publishable",
    });
  });

  it("reports every missing variable at once", () => {
    expect(() => parseEnv({})).toThrow(EnvError);
    try {
      parseEnv({});
    } catch (error) {
      expect((error as EnvError).problems).toHaveLength(3);
    }
  });

  it("rejects a value that is not an http(s) URL", () => {
    expect(() => parseEnv({ ...valid, EXPO_PUBLIC_API_BASE_URL: "doctrina.example" })).toThrow(/API_BASE_URL/);
  });

  it("rejects a blank key", () => {
    expect(() => parseEnv({ ...valid, EXPO_PUBLIC_SUPABASE_KEY: "  " })).toThrow(/SUPABASE_KEY/);
  });
});
