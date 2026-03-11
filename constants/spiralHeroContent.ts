export type SpiralHeroResponse = {
  subtitle?: string;
  titleLine1?: string;
  titleLine2?: string;
  scrollText?: string;
  spiralImageSrc?: string;
  logoImageSrc?: string;
  logoAlt?: string;
};

export const defaultSpiralHeroContent: Required<SpiralHeroResponse> = {
  subtitle: "İntellektual ödəniş sistemi",
  titleLine1: "BÜTÜN ÖDƏNİŞLƏRİNİZ",
  titleLine2: "ÜÇÜN VAHİD HESAB",
  scrollText: "SCROLL",
  spiralImageSrc: "/images/spiral.svg",
  logoImageSrc: "/images/logo.svg",
  logoAlt: "logo",
};