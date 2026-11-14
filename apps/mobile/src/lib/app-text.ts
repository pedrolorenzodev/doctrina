import { defaultLocale, type Locale } from "@doctrina/core/locale";

export type AppTextEntries = {
  firstTab: string;
  secondTab: string;
  stackScreen: string;
  openStack: string;
  openCheck: string;
  notFound: string;
};

export const appText: Record<Locale, AppTextEntries> = {
  es: {
    firstTab: "Primera",
    secondTab: "Segunda",
    stackScreen: "Pantalla apilada",
    openStack: "Abrir pantalla apilada",
    openCheck: "Verificación técnica",
    notFound: "Esta pantalla no existe",
  },
  en: {
    firstTab: "First",
    secondTab: "Second",
    stackScreen: "Stack screen",
    openStack: "Open stack screen",
    openCheck: "Technical check",
    notFound: "This screen does not exist",
  },
};

export const defaultAppText = appText[defaultLocale];
