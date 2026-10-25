export const openParenthesis = "(";
export const closeParenthesis = ")";
export const referenceSeparator = ";";
export const finalStop = ".";

const longestLabelKeptWithBracket = 40;

export const bracketGlue = (label: string) =>
  label.length <= longestLabelKeptWithBracket ? "whitespace-nowrap" : undefined;

export const withoutFinalStop = (text: string) => text.replace(/\.(»?)\s*$/, "$1");
