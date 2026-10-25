import type { DoctrineId } from "@/content/model/ids";

export const shownPassages = 4;

export const shownObjections = 3;

export const shownLifeItems = 8;

export const videosPerStep = 5;

export const shownStatements: Record<DoctrineId, number> = {
  eucharist: 5,
  justification: 5,
  baptism: 6,
  papacy: 5,
  "sola-scriptura": 5,
};
