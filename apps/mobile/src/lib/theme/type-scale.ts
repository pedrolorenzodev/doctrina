import type { FontFamilyKey, TypeRole } from "@doctrina/core/tokens";

export type TypeSpec = {
  fontSize: number;
  lineHeight?: number;
  letterSpacing?: number;
  fontFamily: FontFamilyKey;
  fontWeight: number;
  fontStyle?: "italic";
  opsz?: number;
};

export type TypeScale = Record<TypeRole, TypeSpec>;
