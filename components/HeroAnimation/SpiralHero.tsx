"use client";

import Image from "next/image";
import { RefObject, useEffect, useMemo, useState } from "react";
import styles from "./HeroSection.module.css";
import { Roboto } from "next/font/google";

import {
  defaultSpiralHeroContent,
  SpiralHeroResponse,
} from "@/constants/spiralHeroContent";
import { fetchSpiralHeroContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

type SpiralHeroProps = {
  scrollToRef: RefObject<HTMLDivElement>;
};

export default function SpiralHero({ scrollToRef }: SpiralHeroProps) {
  const [apiData, setApiData] = useState<SpiralHeroResponse | null>(null);

  const angle = 0;

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchSpiralHeroContent();
      setApiData(data);
    };

    loadContent();
  }, []);

  const content = useMemo(
    () => ({
      subtitle:
        apiData?.subtitle?.trim() || defaultSpiralHeroContent.subtitle,
      titleLine1:
        apiData?.titleLine1?.trim() || defaultSpiralHeroContent.titleLine1,
      titleLine2:
        apiData?.titleLine2?.trim() || defaultSpiralHeroContent.titleLine2,
      scrollText:
        apiData?.scrollText?.trim() || defaultSpiralHeroContent.scrollText,
      spiralImageSrc:
        apiData?.spiralImageSrc?.trim() ||
        defaultSpiralHeroContent.spiralImageSrc,
      logoImageSrc:
        apiData?.logoImageSrc?.trim() || defaultSpiralHeroContent.logoImageSrc,
      logoAlt: apiData?.logoAlt?.trim() || defaultSpiralHeroContent.logoAlt,
    }),
    [apiData]
  );

  const handleScrollDown = () => {
    scrollToRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={`${styles.hero} ${roboto.className}`}>
      <div className={styles.spiralWrap}>
        <Image
          src={content.spiralImageSrc}
          alt=""
          width={800}
          height={800}
          className={styles.spiralImg}
          priority
        />
      </div>

      <div
        className={styles.logoWrap}
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <Image
          src={content.logoImageSrc}
          alt={content.logoAlt}
          width={420}
          height={420}
        />
      </div>

      <div className={styles.textContent}>
        <p className={styles.subtitle}>{content.subtitle}</p>
        <h1 className={styles.headline}>
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </h1>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{content.scrollText}</span>
        <svg
          className={styles.scrollMouse}
          onClick={handleScrollDown}
          viewBox="0 0 28 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="26"
            height="46"
            rx="13"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle
            className={styles.scrollDot}
            cx="14"
            cy="13"
            r="3"
            fill="white"
            opacity="0.7"
          />
        </svg>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}