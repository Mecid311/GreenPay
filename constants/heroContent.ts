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
  titleLine2AfterFastWord: "və",
  lastLine: "təhlükəsiz ödənişlər",
  cardImages: {
    payment: "/images/cards/card-1.jpeg",
    champion: "/images/cards/card-2.jpeg",
    cart: "/images/cards/card-3.jpeg",
    shop3d: "/images/cards/card-4.jpeg",
    supreme: "/images/cards/card-2.jpeg",
  },
};