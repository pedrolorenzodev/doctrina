export type Point = { x: number; y: number };
export type Size = { width: number; height: number };

const edge = 8;
const minVisible = 120;
const windowWidth = 400;
const wideInset = 112;
const narrowInset = 24;
const wideViewport = 900;
const belowBar = 40;

export function clampWindow(point: Point, viewport: Size): Point {
  return {
    x: Math.max(edge, Math.min(viewport.width - windowWidth - edge, point.x)),
    y: Math.max(edge, Math.min(viewport.height - minVisible - edge, point.y)),
  };
}

export function firstWindowPosition(viewport: Size, scrollOffset: number): Point {
  const inset = viewport.width >= wideViewport ? wideInset : narrowInset;
  return { x: viewport.width - windowWidth - inset, y: scrollOffset + belowBar };
}
