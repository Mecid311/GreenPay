"use client";

import React, { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import type { CardKey, Rect } from "./types";
import {
  NEXT_SELECTOR,
  OFF,
  S1,
  S2,
  S1_MOBILE,
  S2_MOBILE,
  OFF_MOBILE,
} from "./constants";
import { clamp, easeInOutCubic, lerp, mixRect, remap01 } from "./math";
import { useEarlySnap, useScrollProgress } from "./hooks";
import { Roboto } from "next/font/google";

import { defaultHeroContent, HeroResponse } from "@/constants/heroContent";
import { fetchHeroContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const rectStyle = (rc: Rect, extra?: CSSProperties): CSSProperties => ({
  position: "absolute",
  left: `${rc.x}vw`,
  top: `${rc.y}vh`,
  width: `${rc.w}vw`,
  height: `${rc.h}vh`,
  borderRadius: `${rc.r}px`,
  overflow: "hidden",
  ...extra,
});

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [apiData, setApiData] = useState<HeroResponse | null>(null);

  const cardRefs = useRef<Record<CardKey, HTMLElement | null>>({
    payment: null,
    champion: null,
    cart: null,
    shop3d: null,
    supreme: null,
  });

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchHeroContent();
      setApiData(data);
    };

    loadContent();
  }, []);

  const raw = useScrollProgress(wrapperRef);

  useEarlySnap({
    raw,
    textRef,
    cardRefs,
    nextSelector: NEXT_SELECTOR,
    triggerFrom: 0.34,
    safeGapPx: 28,
  });

  const pIn = easeInOutCubic(remap01(raw, 0, 0.45));
  const pCluster = easeInOutCubic(remap01(raw, 0.45, 0.75));

  const content = useMemo(() => {
    const apiImages = apiData?.cardImages;

    return {
      titleLine1: apiData?.titleLine1?.trim() || defaultHeroContent.titleLine1,
      fastWord: apiData?.fastWord?.trim() || defaultHeroContent.fastWord,
      titleLine2AfterFastWord:
        apiData?.titleLine2AfterFastWord?.trim() ||
        defaultHeroContent.titleLine2AfterFastWord,
      lastLine: apiData?.lastLine?.trim() || defaultHeroContent.lastLine,

      cardImages: {
        payment:
          apiImages?.payment?.trim() || defaultHeroContent.cardImages.payment,
        champion:
          apiImages?.champion?.trim() || defaultHeroContent.cardImages.champion,
        cart: apiImages?.cart?.trim() || defaultHeroContent.cardImages.cart,
        shop3d:
          apiImages?.shop3d?.trim() || defaultHeroContent.cardImages.shop3d,
        supreme:
          apiImages?.supreme?.trim() || defaultHeroContent.cardImages.supreme,
      },
    };
  }, [apiData]);

  const S1_SET = isMobile ? S1_MOBILE : S1;
  const S2_SET = isMobile ? S2_MOBILE : S2;
  const OFF_SET = isMobile ? OFF_MOBILE : OFF;

  const pay0: Rect = useMemo(() => ({ x: 0, y: 0, w: 100, h: 100, r: 0 }), []);
  const pay1 = mixRect(pay0, S1_SET.payment, pIn);
  const pay2 = mixRect(pay1, S2_SET.payment, pCluster);

  const ch1 = mixRect(OFF_SET.champion, S1_SET.champion, pIn);
  const ch2 = mixRect(ch1, S2_SET.champion, pCluster);

  const cart1 = mixRect(OFF_SET.cart, S1_SET.cart, pIn);
  const cart2 = mixRect(cart1, S2_SET.cart, pCluster);

  const shop1 = mixRect(OFF_SET.shop3d, S1_SET.shop3d, pIn);
  const shop2 = mixRect(shop1, S2_SET.shop3d, pCluster);

  const sup1 = mixRect(OFF_SET.supreme, S1_SET.supreme, pIn);
  const sup2 = mixRect(sup1, S2_SET.supreme, pCluster);

  const cardsOpacity = clamp(pIn * 1.25);

  const bigTextOpacity = clamp(pIn * 1.6);
  const bigTextScale = lerp(0.92, 1, pIn);

  const textScale = lerp(bigTextScale, 0.56, pCluster);
  const textTop = lerp(52, 50, pCluster);

  const cards = useMemo(
    () => [
      {
        key: "payment" as const,
        rect: pay2,
        style: {
          opacity: 1,
          zIndex: 10,
          background: "linear-gradient(160deg,#e7e7e7,#bdbdbd)",
          boxShadow: `0 ${lerp(0, 14, pIn)}px ${lerp(0, 42, pIn)}px rgba(0,0,0,${lerp(
            0,
            0.12,
            pIn
          )})`,
        } as CSSProperties,
      },
      {
        key: "champion" as const,
        rect: ch2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
          background: "linear-gradient(135deg,#e1e1e1,#bfbfbf)",
        } as CSSProperties,
      },
      {
        key: "cart" as const,
        rect: cart2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
          background: "linear-gradient(135deg,#f6c6d6,#eaa3bd)",
        } as CSSProperties,
      },
      {
        key: "shop3d" as const,
        rect: shop2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
          background: "linear-gradient(135deg,#ffd166,#f2b500)",
        } as CSSProperties,
      },
      {
        key: "supreme" as const,
        rect: sup2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
          background: "linear-gradient(135deg,#d6dbe1,#b8c1cc)",
        } as CSSProperties,
      },
    ],
    [pay2, ch2, cart2, shop2, sup2, cardsOpacity, pIn]
  );

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className={`${styles.wrap} ${roboto.className}`} ref={wrapperRef}>
      <div className={styles.sticky}>
        {cards.map(({ key, rect, style }) => (
          <div
            key={key}
            ref={(el) => {
              cardRefs.current[key] = el;
            }}
            className={styles.card}
            style={rectStyle(rect, style)}
          >
            <Image
              src={content.cardImages[key]}
              alt={key}
              fill
              sizes="(max-width: 768px) 92vw, 420px"
              className={styles.cardImg}
              priority={key === "payment"}
            />
          </div>
        ))}

        <div
          ref={textRef}
          className={styles.heroText}
          style={{
            top: `${textTop}%`,
            opacity: bigTextOpacity,
            transform: `translate(-50%, -50%) scale(${textScale})`,
          }}
        >
          <div
            className={styles.heroH1}
            style={{
              fontSize: `clamp(${lerp(28, 46, pCluster)}px, ${lerp(
                4.8,
                3.2,
                pCluster
              )}vw, ${lerp(72, 36, pCluster)}px)`,
            }}
          >
            {content.titleLine1} <br />
            <span className={styles.fastWord}>{content.fastWord}</span>{" "}
            {content.titleLine2AfterFastWord} <br />
            <span className={styles.lastLine}>
              <span>{content.lastLine}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}