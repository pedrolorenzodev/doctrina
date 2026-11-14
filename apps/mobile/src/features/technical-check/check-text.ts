import type { Locale } from "@doctrina/core/locale";

export type CheckText = {
  title: string;
  scheme: string;
  language: string;
  modeSystem: string;
  modeLight: string;
  modeDark: string;
  colors: string;
  typeRoles: string;
  opticalSizes: string;
  opticalSizesNote: string;
  icons: string;
  texture: string;
  textureNote: string;
  sample: string;
  sampleLong: string;
  greek: string;
  hebrew: string;
  staticFace: string;
  variableLow: string;
  variableHigh: string;
};

export const checkText: Record<Locale, CheckText> = {
  es: {
    title: "Verificación técnica",
    scheme: "Tema",
    language: "Idioma",
    modeSystem: "Sistema",
    modeLight: "Claro",
    modeDark: "Oscuro",
    colors: "Colores",
    typeRoles: "Roles tipográficos",
    opticalSizes: "Tamaño óptico",
    opticalSizesNote: "Mismo cuerpo, dos valores de opsz sobre la fuente variable",
    icons: "Iconos",
    texture: "Textura",
    textureNote: "El fondo de esta pantalla es el mosaico de 420 px",
    sample: "Estudio de la doctrina cristiana",
    sampleLong: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.",
    greek: "Ἐν ἀρχῇ ἦν ὁ λόγος",
    hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים",
    staticFace: "Estática 16 pt",
    variableLow: "Variable, opsz 6",
    variableHigh: "Variable, opsz 72",
  },
  en: {
    title: "Technical check",
    scheme: "Theme",
    language: "Language",
    modeSystem: "System",
    modeLight: "Light",
    modeDark: "Dark",
    colors: "Colours",
    typeRoles: "Type roles",
    opticalSizes: "Optical size",
    opticalSizesNote: "Same size, two opsz values on the variable font",
    icons: "Icons",
    texture: "Texture",
    textureNote: "This screen's background is the 420 px tile",
    sample: "Study of Christian doctrine",
    sampleLong: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    greek: "Ἐν ἀρχῇ ἦν ὁ λόγος",
    hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים",
    staticFace: "Static 16 pt",
    variableLow: "Variable, opsz 6",
    variableHigh: "Variable, opsz 72",
  },
};
