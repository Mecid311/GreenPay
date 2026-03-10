export type HeaderNavItem = {
  label?: string;
  href?: string;
};

export type NormalizedHeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderResponse = {
  brandLogoSrc?: string;
  brandLogoAlt?: string;
  brandTextTop?: string;
  brandTextBottom?: string;

  navItems?: HeaderNavItem[];

  loginText?: string;
  menuText?: string;
  langText?: string;
  langIconSrc?: string;
};

export const defaultHeaderContent: {
  brandLogoSrc: string;
  brandLogoAlt: string;
  brandTextTop: string;
  brandTextBottom: string;
  navItems: NormalizedHeaderNavItem[];
  loginText: string;
  menuText: string;
  langText: string;
  langIconSrc: string;
} = {
  brandLogoSrc: "/images/logo.svg",
  brandLogoAlt: "Greenpay Logo",
  brandTextTop: "Green",
  brandTextBottom: "pay",
  navItems: [
    { label: "Məhsullar", href: "/mehsullar" },
    { label: "Haqqımızda", href: "/haqqimizda" },
    { label: "Əlaqə", href: "/elaqe" },
  ],
  loginText: "Daxil ol",
  menuText: "Menu",
  langText: "Dil",
  langIconSrc: "/images/lang.svg",
};