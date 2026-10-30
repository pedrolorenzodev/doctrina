export const openParenthesis = "(";
export const closeParenthesis = ")";
export const referenceSeparator = ";";
export const finalStop = ".";

export const withoutFinalStop = (text: string) => text.replace(/\.(»?)\s*$/, "$1");
export const pathSeparator = " / ";
export const listSeparator = ", ";
export const labelSeparator = ": ";
export const guillemets = (text: string) => text.replace(/"([^"]*)"/g, "«$1»");
