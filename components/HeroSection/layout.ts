import type { Rect, RectMap } from './types';

export const PAY0: Rect = { x: 0, y: 0, w: 100, h: 100, r: 0 };

// STATE1 (hero spread)
export const S1: RectMap = {
  champion: { x: 20, y: 22, w: 12, h: 16, r: 22 },
  payment: { x: 69, y: 18, w: 12.5, h: 18, r: 26 },
  cart: { x: 14, y: 42, w: 14, h: 20, r: 28 },
  shop3d: { x: 41, y: 72, w: 14, h: 20, r: 28 },
  supreme: { x: 74, y: 55, w: 14, h: 20, r: 28 },
};

export const S2: RectMap = {
  champion: { x: 38, y: 30, w: 12, h: 16, r: 22 },
  payment: { x: 50, y: 24, w: 12.5, h: 18, r: 26 },
  cart: { x: 34, y: 43, w: 14, h: 20, r: 28 },
  shop3d: { x: 46, y: 56, w: 14, h: 20, r: 28 },
  supreme: { x: 58, y: 43, w: 14, h: 20, r: 28 },
};

// OFFSCREEN starts
export const OFF: RectMap = {
  champion: { x: -30, y: -25, w: 12, h: 16, r: 22 },
  cart: { x: -30, y: 110, w: 14, h: 20, r: 28 },
  shop3d: { x: 40, y: 120, w: 14, h: 20, r: 28 },
  supreme: { x: 130, y: 110, w: 14, h: 20, r: 28 },
};
