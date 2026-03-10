import { useEffect, useRef, useState } from 'react';
import { clamp } from './math';
import type { CardKey } from './types';

export function useScrollProgress(wrapperRef: React.RefObject<HTMLElement>) {
  const [raw, setRaw] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const v = clamp(-rect.top / (total || 1));
      setRaw(v);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [wrapperRef]);

  return raw;
}

export function useEarlySnap({
  raw,
  textRef,
  cardRefs,
  nextSelector,
  triggerFrom = 0.34,
  safeGapPx = 28,
}: {
  raw: number;
  textRef: React.RefObject<HTMLElement>;
  cardRefs: React.MutableRefObject<Record<CardKey, HTMLElement | null>>;
  nextSelector: string;
  triggerFrom?: number;
  safeGapPx?: number;
}) {
  const snappedRef = useRef(false);
  const snappingNowRef = useRef(false);

  useEffect(() => {
    if (raw < 0.1) snappedRef.current = false;
  }, [raw]);

  useEffect(() => {
    const targetEl = () => document.querySelector(nextSelector) as HTMLElement | null;

    const rectGap = (a: DOMRect, b: DOMRect) => {
      const dx = Math.max(b.left - a.right, a.left - b.right, 0);
      const dy = Math.max(b.top - a.bottom, a.top - b.bottom, 0);
      return Math.sqrt(dx * dx + dy * dy);
    };

    const shouldSnapEarly = () => {
      const textEl = textRef.current;
      if (!textEl) return false;
      if (!targetEl()) return false;
      if (raw < triggerFrom) return false;

      const text = textEl.getBoundingClientRect();
      const cards = Object.values(cardRefs.current).filter(Boolean) as HTMLElement[];
      if (!cards.length) return false;

      const MIN_OVERLAP_PX = 2;

      for (const el of cards) {
        const r = el.getBoundingClientRect();

        const overlapW = Math.min(r.right, text.right) - Math.max(r.left, text.left);
        const overlapH = Math.min(r.bottom, text.bottom) - Math.max(r.top, text.top);
        const isOverlapping = overlapW > MIN_OVERLAP_PX && overlapH > MIN_OVERLAP_PX;
        if (isOverlapping) return true;

        const gap = rectGap(r, text);
        if (gap < safeGapPx) return true;
      }
      return false;
    };

    const snapNow = () => {
      if (snappedRef.current || snappingNowRef.current) return;
      const tEl = targetEl();
      if (!tEl) return;

      snappingNowRef.current = true;
      snappedRef.current = true;

      tEl.scrollIntoView({ behavior: 'auto', block: 'start' });

      window.setTimeout(() => {
        snappingNowRef.current = false;
      }, 500);
    };

    const onScroll = () => {
      if (snappedRef.current) return;
      if (shouldSnapEarly()) snapNow();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [raw, textRef, cardRefs, nextSelector, triggerFrom, safeGapPx]);
}
