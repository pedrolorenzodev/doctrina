import type { FontFamilyKey, fontFaces } from "@doctrina/core/tokens";

type FaceKey = keyof typeof fontFaces;

const faceNames: Record<FaceKey, string> = {
  "body-300": "SourceSerif4-Light",
  "body-400": "SourceSerif4-Regular",
  "body-500": "SourceSerif4-Medium",
  "greek-400": "GentiumBookPlus",
  "head-300": "Newsreader-Light",
  "head-300-italic": "Newsreader-LightItalic",
  "head-400": "Newsreader-Regular",
  "hebrew-400": "NotoSerifHebrew-Regular",
  "ui-400": "WorkSans-Regular",
  "ui-500": "WorkSans-Medium",
};

export function fontFaceName(family: FontFamilyKey, weight: number, italic: boolean): string {
  const key = `${family}-${weight}${italic ? "-italic" : ""}`;
  const name = faceNames[key as FaceKey];
  if (!name) throw new Error(`No embedded font for ${key}`);
  return name;
}
