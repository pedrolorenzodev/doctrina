import { fathers } from "@/content/history/fathers";

export const historyIndex = {
  counts: {
    fathers: fathers.length,
  },
  fathers: fathers.map((father) => ({ id: father.id, es: father.name.es, en: father.name.en })),
};
