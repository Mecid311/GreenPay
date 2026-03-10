export type SpiralHeroResponse = {
  title?: string;
  subtitle?: string;
  scrollText?: string;
  spiralSvgSrc?: string;
};

export const defaultSpiralHeroContent: Required<SpiralHeroResponse> = {
  title: "BÜTÜN ÖDƏNİŞLƏRİNİZ ÜÇÜN VAHİD HESAB",
  subtitle: "İntellektual ödəniş sistemi",
  scrollText: "SCROLL",
  spiralSvgSrc: "/images/spiral/spiral-hero.svg",
};