import { useEffect, useRef, useState } from "react";
import { clamp } from "./math";
import type { CardKey } from "./types";

/* SCROLL PROGRESS */

export function useScrollProgress(
  wrapperRef: React.RefObject<HTMLElement>
) {
  const progressRef = useRef(0);
  const [, forceRender] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;

      const v = clamp(-rect.top / (total || 1));

      progressRef.current = v;
      forceRender((n) => n + 1);

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    update();

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, [wrapperRef]);

  return progressRef.current;
}

/* EARLY SNAP */

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
  cardRefs: React.MutableRefObject<
    Record<CardKey, HTMLElement | null>
  >;
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
    const targetEl = () =>
      document.querySelector(nextSelector) as HTMLElement | null;

    const rectGap = (a: DOMRect, b: DOMRect) => {
      const dx = Math.max(b.left - a.right, a.left - b.right, 0);
      const dy = Math.max(b.top - a.bottom, a.top - b.bottom, 0);
      return Math.sqrt(dx * dx + dy * dy);
    };

    const shouldSnapEarly = () => {
      const textEl = textRef.current;
      if (!textEl) return false;

      const target = targetEl();
      if (!target) return false;

      if (raw < triggerFrom) return false;

      const text = textEl.getBoundingClientRect();

      const cards = Object.values(cardRefs.current).filter(
        Boolean
      ) as HTMLElement[];

      if (!cards.length) return false;

      const MIN_OVERLAP = 2;

      for (const el of cards) {
        const r = el.getBoundingClientRect();

        const overlapW =
          Math.min(r.right, text.right) -
          Math.max(r.left, text.left);

        const overlapH =
          Math.min(r.bottom, text.bottom) -
          Math.max(r.top, text.top);

        const overlapping =
          overlapW > MIN_OVERLAP && overlapH > MIN_OVERLAP;

        if (overlapping) return true;

        const gap = rectGap(r, text);

        if (gap < safeGapPx) return true;
      }

      return false;
    };

    const snapNow = () => {
      if (snappedRef.current || snappingNowRef.current) return;

      const target = targetEl();
      if (!target) return;

      snappingNowRef.current = true;
      snappedRef.current = true;

      target.scrollIntoView({
        behavior: "auto",
        block: "start",
      });

      window.setTimeout(() => {
        snappingNowRef.current = false;
      }, 500);
    };

    const onScroll = () => {
      if (snappedRef.current) return;

      if (shouldSnapEarly()) snapNow();
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, [raw, textRef, cardRefs, nextSelector, triggerFrom, safeGapPx]);
}