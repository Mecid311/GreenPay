import type { CardKey } from "@/components/HeroSection/types";

export type HeroCardImages = Record<CardKey, string>;

export type HeroResponse = {
  titleLine1?: string;
  fastWord?: string;
  titleLine2AfterFastWord?: string;
  lastLine?: string;
  cardImages?: Partial<HeroCardImages>;
};

export const defaultHeroContent: {
  titleLine1: string;
  fastWord: string;
  titleLine2AfterFastWord: string;
  lastLine: string;
  cardImages: HeroCardImages;
} = {
  titleLine1: "Biznesiniz üçün",
  fastWord: "sürətli",
  titleLine2AfterFastWord: "və təhlükəsiz",
  lastLine: "ödənişlər",
  cardImages: {
    payment: "/images/cards/payment.png",
    champion: "/images/cards/champion.png",
    cart: "/images/cards/cart.png",
    shop3d: "/images/cards/shop3d.png",
    supreme: "/images/cards/supreme.png",
  },
};