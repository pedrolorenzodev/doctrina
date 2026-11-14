import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { colors, compactBreakpointPx, type, typeCompact } from "@doctrina/core/tokens";
import {
  parseStoredMode,
  resolveScheme,
  themeStorageKey,
  type Scheme,
  type ThemeMode,
  type ThemeStorage,
} from "@/lib/theme/theme-mode";
import type { TypeScale } from "@/lib/theme/type-scale";

export type Theme = {
  mode: ThemeMode;
  scheme: Scheme;
  colors: (typeof colors)[Scheme];
  type: TypeScale;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<Theme | null>(null);

type ThemeProviderProps = {
  storage: ThemeStorage;
  children: ReactNode;
};

export function ThemeProvider({ storage, children }: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>(() => parseStoredMode(storage.read(themeStorageKey)));
  const system = useColorScheme();
  const { width } = useWindowDimensions();

  const setMode = useCallback(
    (next: ThemeMode) => {
      if (next === "system") storage.remove(themeStorageKey);
      else storage.write(themeStorageKey, next);
      setModeState(next);
    },
    [storage],
  );

  const scheme = resolveScheme(mode, system);
  const scale: TypeScale = width < compactBreakpointPx ? typeCompact : type;
  const value = useMemo<Theme>(
    () => ({ mode, scheme, colors: colors[scheme], type: scale, setMode }),
    [mode, scheme, scale, setMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be used inside ThemeProvider");
  return theme;
}
