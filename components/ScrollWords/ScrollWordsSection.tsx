"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ScrollWordsSection.module.css";
import { Roboto } from "next/font/google";

import {
  defaultScrollWordsContent,
  NormalizedScrollWordItem,
  ScrollWordsResponse,
} from "@/constants/scrollWordsContent";
import { fetchScrollWordsContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export default function ScrollWordsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [apiData, setApiData] = useState<ScrollWordsResponse | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchScrollWordsContent();
      setApiData(data);
    };

    loadContent();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const words = useMemo<NormalizedScrollWordItem[]>(() => {
    const apiWords = apiData?.words;

    if (!apiWords || !Array.isArray(apiWords) || apiWords.length === 0) {
      return defaultScrollWordsContent.words;
    }

    const normalizedWords = apiWords
      .filter((item) => item?.text?.trim())
      .slice(0, 3)
      .map((item, index) => ({
        text: item.text!.trim(),
        italic: item.italic ?? false,
        align:
          item.align === "right" || item.align === "left"
            ? item.align
            : (defaultScrollWordsContent.words[index]?.align ?? "left"),
        stable: item.stable ?? false,
      }));

    return normalizedWords.length > 0
      ? normalizedWords
      : defaultScrollWordsContent.words;
  }, [apiData]);

  const scrollHintText = useMemo(() => {
    return (
      apiData?.scrollHintText?.trim() ||
      defaultScrollWordsContent.scrollHintText
    );
  }, [apiData]);

  const getWordTransform = (index: number, align: "left" | "right") => {
    const windows: [number, number][] = [
      [0.0, 0.24],
      [0.28, 0.52],
      [0.56, 0.8],
    ];

    const fallbackWindow: [number, number] = [0.56, 0.8];
    const [start, end] = windows[index] ?? fallbackWindow;

    const raw = Math.min(
      1,
      Math.max(0, (scrollProgress - start) / (end - start)),
    );

    const eased = easeOutExpo(raw);
    const direction = align === "left" ? -1 : 1;

    return {
      translateX: (1 - eased) * 28 * direction,
      opacity: eased,
      progress: eased,
    };
  };

  return (
    <div ref={sectionRef} className={`${styles.section} ${roboto.className}`}>
      <div className={styles.sticky}>
        <div className={styles.canvas}>
          {words.map((word, i) => {
            const { translateX, opacity, progress } = getWordTransform(
              i,
              word.align,
            );

            return (
              <div
                key={`${word.text}-${i}`}
                className={`${styles.wordBlock} ${
                  word.align === "right" ? styles.right : styles.left
                }`}
                style={{
                  transform: `translateX(${translateX}vw)`,
                  opacity,
                }}
              >
                <div
                  className={`${styles.wordRow} ${
                    word.italic ? styles.italic : ""
                  }`}
                >
                  <span className={styles.bullet}>•</span>
                  <span className={styles.wordText}>{word.text}</span>
                </div>

                <div className={styles.underlineWrap}>
                  <div
                    className={styles.underline}
                    style={{
                      transform: `scaleX(${progress})`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={styles.scrollHint}
          style={{ opacity: scrollProgress < 0.05 ? 1 : 0 }}
        >
          <span>{scrollHintText}</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </div>
  );
}
