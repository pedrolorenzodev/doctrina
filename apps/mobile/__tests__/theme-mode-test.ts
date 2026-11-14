import { parseStoredMode, resolveScheme } from "@/lib/theme/theme-mode";

describe("theme mode", () => {
  it("parses only the stored light and dark choices", () => {
    expect(parseStoredMode("light")).toBe("light");
    expect(parseStoredMode("dark")).toBe("dark");
    expect(parseStoredMode(null)).toBe("system");
    expect(parseStoredMode("sepia")).toBe("system");
  });

  it("follows the system only in system mode", () => {
    expect(resolveScheme("system", "dark")).toBe("dark");
    expect(resolveScheme("system", "light")).toBe("light");
    expect(resolveScheme("system", null)).toBe("light");
    expect(resolveScheme("light", "dark")).toBe("light");
    expect(resolveScheme("dark", "light")).toBe("dark");
  });
});
