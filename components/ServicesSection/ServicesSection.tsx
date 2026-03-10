"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ServicesSection.module.css";
import { Roboto } from "next/font/google";
import Image from "next/image";

import {
  defaultServicesContent,
  NormalizedServiceItem,
  ServicesResponse,
} from "@/constants/servicesContent";
import { fetchServicesContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function ServicesSection() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [apiData, setApiData] = useState<ServicesResponse | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchServicesContent();
      setApiData(data);
    };

    loadContent();
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  const content = useMemo(() => {
    const apiServices = apiData?.services;

    const normalizedServices: NormalizedServiceItem[] =
      apiServices && Array.isArray(apiServices) && apiServices.length > 0
        ? apiServices
            .filter(
              (item) =>
                item?.no?.trim() &&
                item?.title?.trim() &&
                item?.desc?.trim()
            )
            .map((item) => ({
              no: item.no!.trim(),
              title: item.title!.trim(),
              desc: item.desc!.trim(),
            }))
        : defaultServicesContent.services;

    return {
      kickerText:
        apiData?.kickerText?.trim() || defaultServicesContent.kickerText,
      titleTop: apiData?.titleTop?.trim() || defaultServicesContent.titleTop,
      titleBottom:
        apiData?.titleBottom?.trim() || defaultServicesContent.titleBottom,
      services:
        normalizedServices.length > 0
          ? normalizedServices
          : defaultServicesContent.services,
    };
  }, [apiData]);

  return (
    <section className={`${styles.section} ${roboto.className}`}>
      <div className={styles.stage}>
        <div className={styles.wave} aria-hidden="true">
          <Image
            src="/images/decor8.svg"
            alt=""
            fill
            className={styles.waveSvg}
            priority
          />
        </div>

        <div className={styles.header}>
          <div className={styles.kickerAbs}>
            <span className={styles.kickerText}>{content.kickerText}</span>
            <span className={styles.kickerUnderline} aria-hidden="true" />
          </div>

          <div className={styles.titleWrap}>
            <h2 className={styles.title}>
              <span className={styles.titleTop}>{content.titleTop}</span>
              <span className={styles.titleBottom}>{content.titleBottom}</span>
            </h2>
          </div>
        </div>

        <div className={styles.content}>
          <span className={styles.leftRail} aria-hidden="true" />

          <div
            ref={listRef}
            className={`${styles.list} ${visible ? styles.listVisible : ""}`}
          >
            {content.services.map((s, index) => (
              <article
                key={`${s.no}-${index}`}
                className={styles.item}
                style={{ transitionDelay: `${index * 180}ms` }}
              >
                <div className={styles.no}>{s.no}</div>

                <h3 className={styles.itemTitle}>
                  {s.title}
                  <span className={styles.itemUnderline} aria-hidden="true" />
                </h3>

                <p className={styles.desc}>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}