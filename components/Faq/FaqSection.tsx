"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./FaqSection.module.css";
import { Roboto } from "next/font/google";

import { defaultFaqContent, FaqItem, FaqResponse } from "@/constants/faqContent";
import { fetchFaqContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300","400", "500", "700"],
  display: "swap",
});

export default function FaqSection() {
  const [apiData, setApiData] = useState<FaqResponse | null>(null);
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const loadFaqContent = async () => {
      const data = await fetchFaqContent();
      setApiData(data);
    };

    loadFaqContent();
  }, []);

  const items = useMemo<FaqItem[]>(() => {
    const apiItems = apiData?.items;

    if (!apiItems || !Array.isArray(apiItems) || apiItems.length === 0) {
      return defaultFaqContent.items;
    }

    const normalizedItems = apiItems
      .filter((item) => item?.q?.trim() && item?.a?.trim())
      .map((item) => ({
        q: item.q!.trim(),
        a: item.a!.trim(),
      }));

    return normalizedItems.length > 0
      ? normalizedItems
      : defaultFaqContent.items;
  }, [apiData]);

  const title = useMemo(() => {
    return apiData?.title?.trim() || defaultFaqContent.title;
  }, [apiData]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`${styles.title} ${roboto.className}`}>{title}</h2>

        <div className={styles.list}>
          {items.map((it, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={`${it.q}-${idx}`}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  className={styles.row}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className={`${styles.q} ${roboto.className}`}>
                    {it.q}
                  </span>

                  <span
                    className={`${styles.iconBtn} ${roboto.className} ${
                      isOpen ? styles.iconBtnOpen : ""
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
                  className={styles.content}
                  style={{
                    height:
                      isOpen && contentRefs.current[idx]
                        ? contentRefs.current[idx]!.scrollHeight
                        : 0,
                  }}
                >
                  <p className={`${styles.a} ${roboto.className}`}>{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}