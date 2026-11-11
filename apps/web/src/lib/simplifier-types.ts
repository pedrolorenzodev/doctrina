export type SimplifierLevel = "clear" | "very";

export type SimplifyStatus = "generated" | "reviewed";

export type SimplifiedEntry = {
  lang: "es" | "en";
  original: string[];
  clear: string[];
  very: string[];
  levels?: ["clear"];
};
