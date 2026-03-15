"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
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
import { useScrollProgress, useEarlySnap } from "./hooks";

import { Roboto } from "next/font/google";

import {
  defaultHeroContent,
  HeroResponse,
} from "@/constants/heroContent";

import { fetchHeroContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

type ImageMeta = {
  ratio: number;
  orientation: "portrait" | "landscape" | "square";
};

const rectStyle = (
  rc: Rect,
  extra?: CSSProperties
): CSSProperties => ({
  position: "absolute",
  width: `${rc.w}vw`,
  height: `${rc.h}vh`,
  borderRadius: `${rc.r}px`,
  overflow: "hidden",
  transform: `translate3d(${rc.x}vw, ${rc.y}vh, 0)`,
  willChange: "transform",
  ...extra,
});

function reshapeRectForImage(rect: Rect, meta?: ImageMeta): Rect {
  if (!meta) return rect;

  const cx = rect.x + rect.w / 2;
  const cy = rect.y + rect.h / 2;

  let nextW = rect.w;
  let nextH = rect.h;

  if (meta.orientation === "portrait") {
    nextW = rect.w * 0.68;
    nextH = rect.h * 1.16;
  } else if (meta.orientation === "landscape") {
    nextW = rect.w * 1.18;
    nextH = rect.h * 0.88;
  } else {
    nextW = rect.w * 0.95;
    nextH = rect.h * 0.95;
  }

  return {
    ...rect,
    w: nextW,
    h: nextH,
    x: cx - nextW / 2,
    y: cy - nextH / 2,
  };
}

export default function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [apiData, setApiData] = useState<HeroResponse | null>(null);

  const [imageMeta, setImageMeta] = useState<Record<CardKey, ImageMeta>>({
    payment: { ratio: 1, orientation: "square" },
    champion: { ratio: 1, orientation: "square" },
    cart: { ratio: 1, orientation: "square" },
    shop3d: { ratio: 1, orientation: "square" },
    supreme: { ratio: 1, orientation: "square" },
  });

  const cardRefs = useRef<Record<CardKey, HTMLElement | null>>({
    payment: null,
    champion: null,
    cart: null,
    shop3d: null,
    supreme: null,
  });

  /* API DATA */
  useEffect(() => {
    const load = async () => {
      const data = await fetchHeroContent();
      setApiData(data);
    };

    load();
  }, []);

  /* SCROLL PROGRESS */
  const raw = useScrollProgress(wrapperRef);

  /* SNAP LOGIC */
  useEarlySnap({
    raw,
    textRef,
    cardRefs,
    nextSelector: NEXT_SELECTOR,
    triggerFrom: 0.34,
    safeGapPx: 28,
  });

  /* SCROLL PHASES */
  const pIn = easeInOutCubic(remap01(raw, 0, 0.45));
  const pCluster = easeInOutCubic(remap01(raw, 0.45, 0.75));

  /* CONTENT */
  const content = useMemo(() => {
    const apiImages = apiData?.cardImages;

    return {
      titleLine1:
        apiData?.titleLine1?.trim() ||
        defaultHeroContent.titleLine1,

      fastWord:
        apiData?.fastWord?.trim() ||
        defaultHeroContent.fastWord,

      titleLine2AfterFastWord:
        apiData?.titleLine2AfterFastWord?.trim() ||
        defaultHeroContent.titleLine2AfterFastWord,

      lastLine:
        apiData?.lastLine?.trim() ||
        defaultHeroContent.lastLine,

      cardImages: {
        payment:
          apiImages?.payment?.trim() ||
          defaultHeroContent.cardImages.payment,

        champion:
          apiImages?.champion?.trim() ||
          defaultHeroContent.cardImages.champion,

        cart:
          apiImages?.cart?.trim() ||
          defaultHeroContent.cardImages.cart,

        shop3d:
          apiImages?.shop3d?.trim() ||
          defaultHeroContent.cardImages.shop3d,

        supreme:
          apiImages?.supreme?.trim() ||
          defaultHeroContent.cardImages.supreme,
      },
    };
  }, [apiData]);

  /* IMAGE META */
  useEffect(() => {
    let active = true;

    const entries = Object.entries(content.cardImages) as [CardKey, string][];

    Promise.all(
      entries.map(
        ([key, src]) =>
          new Promise<[CardKey, ImageMeta]>((resolve) => {
            const img = new window.Image();

            img.onload = () => {
              const ratio = img.naturalWidth / img.naturalHeight;

              let orientation: ImageMeta["orientation"] = "square";

              if (ratio < 0.9) orientation = "portrait";
              else if (ratio > 1.1) orientation = "landscape";

              resolve([
                key,
                {
                  ratio,
                  orientation,
                },
              ]);
            };

            img.onerror = () =>
              resolve([
                key,
                {
                  ratio: 1,
                  orientation: "square",
                },
              ]);

            img.src = src;
          })
      )
    ).then((results) => {
      if (!active) return;

      const next = results.reduce(
        (acc, [key, meta]) => {
          acc[key] = meta;
          return acc;
        },
        {} as Record<CardKey, ImageMeta>
      );

      setImageMeta(next);
    });

    return () => {
      active = false;
    };
  }, [content.cardImages]);

  /* LAYOUT SET */
  const S1_SET = isMobile ? S1_MOBILE : S1;
  const S2_SET = isMobile ? S2_MOBILE : S2;
  const OFF_SET = isMobile ? OFF_MOBILE : OFF;

  /* RECT CALCULATIONS */
  const pay0: Rect = useMemo(
    () => ({ x: 0, y: 0, w: 100, h: 100, r: 0 }),
    []
  );

  const pay1 = mixRect(pay0, S1_SET.payment, pIn);
  const pay2Base = mixRect(pay1, S2_SET.payment, pCluster);

  const ch1 = mixRect(OFF_SET.champion, S1_SET.champion, pIn);
  const ch2Base = mixRect(ch1, S2_SET.champion, pCluster);

  const cart1 = mixRect(OFF_SET.cart, S1_SET.cart, pIn);
  const cart2Base = mixRect(cart1, S2_SET.cart, pCluster);

  const shop1 = mixRect(OFF_SET.shop3d, S1_SET.shop3d, pIn);
  const shop2Base = mixRect(shop1, S2_SET.shop3d, pCluster);

  const sup1 = mixRect(OFF_SET.supreme, S1_SET.supreme, pIn);
  const sup2Base = mixRect(sup1, S2_SET.supreme, pCluster);

  const pay2 = reshapeRectForImage(pay2Base, imageMeta.payment);
  const ch2 = reshapeRectForImage(ch2Base, imageMeta.champion);
  const cart2 = reshapeRectForImage(cart2Base, imageMeta.cart);
  const shop2 = reshapeRectForImage(shop2Base, imageMeta.shop3d);
  const sup2 = reshapeRectForImage(sup2Base, imageMeta.supreme);

  /* CARD VISIBILITY */
  const cardsOpacity = clamp(pIn * 1.25);

  const bigTextOpacity = clamp(pIn * 1.6);
  const bigTextScale = lerp(0.92, 1, pIn);

  const textScale = lerp(bigTextScale, 0.56, pCluster);
  const textTop = lerp(52, 50, pCluster);

  /* CARD LIST */
  const cards = useMemo(
    () => [
      {
        key: "payment" as const,
        rect: pay2,
        style: {
          opacity: 1,
          zIndex: 10,
        },
      },
      {
        key: "champion" as const,
        rect: ch2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
        },
      },
      {
        key: "cart" as const,
        rect: cart2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
        },
      },
      {
        key: "shop3d" as const,
        rect: shop2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
        },
      },
      {
        key: "supreme" as const,
        rect: sup2,
        style: {
          opacity: cardsOpacity,
          zIndex: 12,
        },
      },
    ],
    [pay2, ch2, cart2, shop2, sup2, cardsOpacity]
  );

  /* MOBILE CHECK */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    const handler = () => requestAnimationFrame(check);

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div
      className={`${styles.wrap} ${roboto.className}`}
      ref={wrapperRef}
    >
      <div className={styles.sticky}>
        {cards.map(({ key, rect, style }) => (
          <div
            key={key}
            ref={(el) => {
              cardRefs.current[key] = el;
            }}
            className={styles.card}
            style={rectStyle(rect, style)}
            data-orientation={imageMeta[key]?.orientation}
          >
            <Image
              src={content.cardImages[key]}
              alt={key}
              fill
              sizes="(max-width:768px) 92vw, 420px"
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
          <div className={styles.heroH1}>
            <div className={styles.line1}>
              {content.titleLine1}{" "}
              <span className={styles.fastWord}>
                {content.fastWord}
              </span>{" "}
              {content.titleLine2AfterFastWord}
            </div>

            <div className={styles.line2}>
              <span className={styles.lastLine}>
                {content.lastLine}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}