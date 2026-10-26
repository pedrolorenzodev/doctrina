import type { CSSProperties } from "react";

export const at = (name: string, value: string): CSSProperties => ({ [name]: value }) as CSSProperties;
export const vars = (values: Record<string, string>): CSSProperties => values as CSSProperties;
export const px = (value: number) => `${value.toFixed(1)}px`;
