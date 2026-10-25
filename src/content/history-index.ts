import { fathers } from "@/content/history/fathers";

export const historyIndex = {
  counts: {
    fathers: fathers.length,
    councils: 41,
    heresies: 18,
    divisions: 10,
    reformation: 20,
  },
  fathers: fathers.map((father) => ({ id: father.id, es: father.name.es, en: father.name.en })),
};
