import type { CardKey, Rect } from './types';

export const NEXT_SELECTOR = '#next-section';

export const S1: Record<CardKey, Rect> = {
  champion: { x: 20, y: 22, w: 12, h: 16, r: 22 },
  payment: { x: 69, y: 18, w: 12.5, h: 18, r: 26 },
  cart: { x: 14, y: 42, w: 14, h: 20, r: 28 },
  shop3d: { x: 41, y: 72, w: 14, h: 20, r: 28 },
  supreme: { x: 74, y: 55, w: 14, h: 20, r: 28 },
};

export const S2: Record<CardKey, Rect> = {
  champion: { x: 38, y: 30, w: 12, h: 16, r: 22 },
  payment: { x: 50, y: 24, w: 12.5, h: 18, r: 26 },
  cart: { x: 34, y: 43, w: 14, h: 20, r: 28 },
  shop3d: { x: 46, y: 56, w: 14, h: 20, r: 28 },
  supreme: { x: 58, y: 43, w: 14, h: 20, r: 28 },
};

export const OFF: Record<Exclude<CardKey, 'payment'>, Rect> = {
  champion: { x: -30, y: -25, w: 12, h: 16, r: 22 },
  cart: { x: -30, y: 110, w: 14, h: 20, r: 28 },
  shop3d: { x: 40, y: 120, w: 14, h: 20, r: 28 },
  supreme: { x: 130, y: 110, w: 14, h: 20, r: 28 },
};

export const S1_MOBILE: Record<CardKey, Rect> = {
  champion: { x: 10, y: 12, w: 32, h: 20, r: 18 },
  payment:  { x: 58, y: 12, w: 32, h: 20, r: 18 },

  cart:     { x: 8,  y: 46, w: 32, h: 20, r: 18 },
  shop3d:   { x: 60, y: 46, w: 32, h: 20, r: 18 },

  supreme:  { x: 34, y: 70, w: 32, h: 20, r: 18 },
};

export const S2_MOBILE: Record<CardKey, Rect> = {
  champion: { x: 13, y: 34, w: 30, h: 18, r: 18 },
  payment:  { x: 40, y: 28, w: 30, h: 18, r: 18 },

  cart:     { x: 7, y: 48, w: 30, h: 18, r: 18 },
  shop3d:   { x: 66, y: 43, w: 30, h: 18, r: 18 },

  supreme:  { x: 36, y: 58, w: 30, h: 18, r: 18 },
};

export const OFF_MOBILE: Record<Exclude<CardKey,"payment">, Rect> = {
  champion: { x: -40, y: -40, w: 30, h: 18, r: 18 },
  cart:     { x: -40, y: 120, w: 30, h: 18, r: 18 },
  shop3d:   { x: 120, y: 120, w: 30, h: 18, r: 18 },
  supreme:  { x: 40, y: 140, w: 30, h: 18, r: 18 },
};