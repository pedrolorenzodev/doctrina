import type { FatherLife } from "@/content/model/history";

export const fatherLives: Record<string, FatherLife> = {
  "gregory-of-nyssa": {
    birth: {
      kind: "estimated",
      year: 335,
      text: { es: "c. 335", en: "c. 335" },
      short: { es: "c. 335", en: "c. 335" },
    },
    death: {
      kind: "after",
      year: 394,
      text: { es: "se desconoce; vivía en 394", en: "unknown; still alive in 394" },
      short: { es: "después de 394", en: "after 394" },
    },
  },
  "hilary-of-poitiers": {
    birth: {
      kind: "between",
      year: 310,
      yearEnd: 320,
      text: { es: "entre c. 310 y 320", en: "between c. 310 and 320" },
      short: { es: "c. 310–320", en: "c. 310–320" },
    },
    death: {
      kind: "either",
      year: 367,
      yearEnd: 368,
      text: { es: "367 o 368", en: "367 or 368" },
      short: { es: "367 o 368", en: "367 or 368" },
    },
  },
  aphrahat: {
    active: {
      start: 337,
      end: 345,
      text: { es: "337–345", en: "337–345" },
      short: { es: "337–345", en: "337–345" },
    },
  },
  "john-chrysostom": {
    birth: {
      kind: "between",
      year: 347,
      yearEnd: 354,
      text: { es: "entre 347 y 354 (se discute)", en: "between 347 and 354 (disputed)" },
      short: { es: "347–354", en: "347–354" },
    },
    death: {
      kind: "attested",
      year: 407,
      text: { es: "14 sep 407", en: "14 Sep 407" },
      short: { es: "407", en: "407" },
    },
  },
  didache: {
    composed: {
      start: 50,
      end: 150,
      text: {
        es: "segunda mitad del siglo I a primera mitad del siglo II",
        en: "second half of the 1st century to the first half of the 2nd century",
      },
      short: { es: "c. 50–150", en: "c. 50–150" },
    },
  },
};
