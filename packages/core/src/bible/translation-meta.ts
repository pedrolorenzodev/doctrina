export const translationOrder = ["rv1909", "bsb", "kjv", "web-c", "dra"] as const;

export const translationMeta: Record<string, { abbreviation: string; displayName: string }> = {
  rv1909: { abbreviation: "RV1909", displayName: "Reina-Valera 1909" },
  bsb: { abbreviation: "BSB", displayName: "Berean Standard Bible" },
  kjv: { abbreviation: "KJV", displayName: "King James Version" },
  "web-c": { abbreviation: "WEB", displayName: "World English Bible, Catholic edition" },
  dra: { abbreviation: "DRA", displayName: "Douay-Rheims" },
};
