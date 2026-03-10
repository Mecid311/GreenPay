'use client';

import { RefObject, useEffect, useState } from 'react';
import { clamp } from './math';

export function useScrollProgress(
  ref: RefObject<HTMLElement>
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const total =
        ref.current.offsetHeight - window.innerHeight;

      const raw = clamp(-rect.top / (total || 1));
      setProgress(raw);
    };

    window.addEventListener('scroll', update, {
      passive: true,
    });

    update();

    return () =>
      window.removeEventListener('scroll', update);
  }, [ref]);

  return progress;
}
