const durationMs = 200;

type Tween = { current: number; from: number; to: number; start: number | null };

function cubicBezier(x1: number, y1: number, x2: number, y2: number): (t: number) => number {
  const sample = (a: number, b: number, u: number) =>
    3 * (1 - u) * (1 - u) * u * a + 3 * (1 - u) * u * u * b + u * u * u;
  const slope = (a: number, b: number, u: number) =>
    3 * (1 - u) * (1 - u) * a + 6 * (1 - u) * u * (b - a) + 3 * u * u * (1 - b);
  return (t) => {
    let u = t;
    for (let step = 0; step < 8; step += 1) {
      const error = sample(x1, x2, u) - t;
      const derivative = slope(x1, x2, u);
      if (Math.abs(error) < 1e-5 || derivative === 0) break;
      u = Math.min(1, Math.max(0, u - error / derivative));
    }
    return sample(y1, y2, u);
  };
}

const standardEase = cubicBezier(0.25, 0.1, 0.25, 1);

export type LiftTweens = {
  to: (id: string, value: number) => void;
  reapply: () => void;
  stop: () => void;
};

export function createLiftTweens(apply: (id: string, value: number) => void): LiftTweens {
  const tweens = new Map<string, Tween>();
  let frame = 0;

  function step(now: number) {
    frame = 0;
    let busy = false;
    tweens.forEach((tween, id) => {
      if (tween.start === null) return;
      const progress = Math.min(1, Math.max(0, (now - tween.start) / durationMs));
      tween.current = tween.from + (tween.to - tween.from) * standardEase(progress);
      if (progress >= 1) {
        tween.current = tween.to;
        tween.start = null;
      } else busy = true;
      apply(id, tween.current);
    });
    if (busy) frame = requestAnimationFrame(step);
  }

  return {
    to(id, value) {
      const tween = tweens.get(id) ?? { current: 0, from: 0, to: 0, start: null };
      tweens.set(id, tween);
      if (tween.to === value) return;
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        tween.current = value;
        tween.to = value;
        tween.start = null;
        apply(id, value);
        return;
      }
      tween.from = tween.current;
      tween.to = value;
      tween.start = performance.now();
      if (!frame) frame = requestAnimationFrame(step);
    },
    reapply() {
      tweens.forEach((tween, id) => apply(id, tween.current));
    },
    stop() {
      cancelAnimationFrame(frame);
      frame = 0;
    },
  };
}
