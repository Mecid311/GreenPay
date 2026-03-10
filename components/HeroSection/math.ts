export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));

export const remap01 = (v: number, a: number, b: number) => clamp((v - a) / (b - a));

export const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const mixRect = (a: { x: number; y: number; w: number; h: number; r: number }, b: typeof a, t: number) => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t),
  w: lerp(a.w, b.w, t),
  h: lerp(a.h, b.h, t),
  r: lerp(a.r, b.r, t),
});
