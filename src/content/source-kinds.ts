export const sourceKinds = ["church-father", "council", "theologian", "liturgy", "catechism", "confession"] as const;
export type SourceKind = (typeof sourceKinds)[number];
