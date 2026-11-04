"use client";

import type { ReactNode } from "react";
import { useVerseEdition } from "@/features/verse/verse-edition";

export function HideWhenNumberingDiffers({ children }: { children: ReactNode }) {
  return useVerseEdition().differs ? null : children;
}
