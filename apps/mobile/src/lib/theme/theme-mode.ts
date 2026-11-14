export type ThemeMode = "system" | "light" | "dark";
export type Scheme = "light" | "dark";

export const themeStorageKey = "doctrina-theme";

export type ThemeStorage = {
  read: (key: string) => string | null;
  write: (key: string, value: string) => void;
  remove: (key: string) => void;
};

export function parseStoredMode(value: string | null): ThemeMode {
  return value === "light" || value === "dark" ? value : "system";
}

export function resolveScheme(mode: ThemeMode, system: string | null | undefined): Scheme {
  if (mode !== "system") return mode;
  return system === "dark" ? "dark" : "light";
}
