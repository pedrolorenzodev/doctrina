const flag = process.env.NEXT_PUBLIC_SIMPLIFIER;

export const simplifierEnabled = flag === "on" || (flag !== "off" && process.env.NODE_ENV === "development");
