import { createElement, type ReactNode } from "react";

export function emphasized(text: string): ReactNode[] {
  return text
    .split(/_([^_]+)_/)
    .map((part, index) => (index % 2 === 1 ? createElement("i", { key: index }, part) : part));
}
