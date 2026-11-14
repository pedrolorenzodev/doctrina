export type IconShape =
  | { tag: "path"; d: string; linecap?: "round" }
  | { tag: "circle"; cx: number; cy: number; r: number }
  | { tag: "rect"; x: number; y: number; width: number; height: number; rx: number };

export type IconSpec = {
  viewBox: string;
  mode: "fill" | "stroke";
  strokeWidth?: number;
  linecap?: "round";
  linejoin?: "round";
  shapes: readonly IconShape[];
};
