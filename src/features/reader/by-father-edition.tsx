"use client";

import type { ReactNode } from "react";
import { useChosenFatherEdition } from "@/lib/father-edition-choice";

type ByFatherEditionProps = {
  editions: { id: string; node: ReactNode }[];
  defaultId: string;
};

export function ByFatherEdition({ editions, defaultId }: ByFatherEditionProps) {
  const value = useChosenFatherEdition(
    editions.map((edition) => edition.id),
    defaultId,
  );
  return <>{(editions.find((edition) => edition.id === value) ?? editions[0])?.node}</>;
}
