export type SpiralHeroResponse = {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  scrollText?: string;
  logoImageSrc?: string;
  logoAlt?: string;
};

export const defaultSpiralHeroContent: Required<SpiralHeroResponse> = {
  eyebrow: "İntellektual ödəniş sistemi",
  titleLine1: "BÜTÜN ÖDƏNİŞLƏRİNİZ",
  titleLine2: "ÜÇÜN VAHİD HESAB",
  scrollText: "SCROLL",
  logoImageSrc: "/images/logo.svg",
  logoAlt: "GreenPay Logo",
};