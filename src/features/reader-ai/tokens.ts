import type { CSSProperties } from "react";
import { sheetHeight, sheetShadow } from "@/features/reader-ai/drawer-room";

export const askTokens = {
  "--ask-sheet": sheetHeight,
  "--ask-sheet-shadow": sheetShadow,
  "--ask-leading-row": "1.4",
  "--ask-leading-field": "1.45",
  "--ask-leading-ui": "normal",
  "--ask-leading-prose": "1.65",
  "--ask-leading-meta": "1.45",
  "--ask-leading-question": "1.35",
  "--ask-leading-note": "1.55",
  "--ask-card-max": "calc(100% - 16px)",
  "--ask-underline": "1.5px",
  "--ask-window-max": "calc(100dvh - 140px)",
  "--ask-window-sheet": "78dvh",
} as CSSProperties;
