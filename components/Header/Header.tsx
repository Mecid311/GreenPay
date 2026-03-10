"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";
import { Roboto } from "next/font/google";

import {
  defaultHeaderContent,
  HeaderResponse,
  NormalizedHeaderNavItem,
} from "@/constants/headerContent";
import { fetchHeaderContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Header() {
  const [apiData, setApiData] = useState<HeaderResponse | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchHeaderContent();
      setApiData(data);
    };

    loadContent();
  }, []);

  const content = useMemo(() => {
    const apiNavItems = apiData?.navItems;

    const normalizedNavItems: NormalizedHeaderNavItem[] =
      apiNavItems && Array.isArray(apiNavItems) && apiNavItems.length > 0
        ? apiNavItems
            .filter((item) => item?.label?.trim() && item?.href?.trim())
            .map((item) => ({
              label: item.label!.trim(),
              href: item.href!.trim(),
            }))
        : defaultHeaderContent.navItems;

    return {
      brandLogoSrc:
        apiData?.brandLogoSrc?.trim() || defaultHeaderContent.brandLogoSrc,
      brandLogoAlt:
        apiData?.brandLogoAlt?.trim() || defaultHeaderContent.brandLogoAlt,
      brandTextTop:
        apiData?.brandTextTop?.trim() || defaultHeaderContent.brandTextTop,
      brandTextBottom:
        apiData?.brandTextBottom?.trim() ||
        defaultHeaderContent.brandTextBottom,
      navItems:
        normalizedNavItems.length > 0
          ? normalizedNavItems
          : defaultHeaderContent.navItems,
      loginText: apiData?.loginText?.trim() || defaultHeaderContent.loginText,
      langText: apiData?.langText?.trim() || defaultHeaderContent.langText,
      langIconSrc:
        apiData?.langIconSrc?.trim() || defaultHeaderContent.langIconSrc,
    };
  }, [apiData]);

  return (
    <header className={`${styles.header} ${roboto.className}`}>
      <div className={styles.container}>
        <div
          className={`${styles.topBar} ${
            isHomePage ? styles.topBarTransparent : styles.topBarSolid
          }`}
        >
          <Link href="/" className={styles.brand}>
            <Image
              src={content.brandLogoSrc}
              alt={content.brandLogoAlt}
              width={37}
              height={47}
              priority
              className={styles.brandLogo}
            />

            <span className={styles.brandText}>
              <span>{content.brandTextTop}</span>
              <span>{content.brandTextBottom}</span>
            </span>
          </Link>

          <div className={styles.topActions}>
            <button
              className={styles.langBtn}
              aria-label="Change language"
              type="button"
            >
              <Image
                src={content.langIconSrc}
                alt={content.langText}
                width={50}
                height={50}
                priority
              />
            </button>

            <button className={styles.loginBtn} type="button">
              <span className={styles.loginTextWrap}>
                <span className={styles.loginTextTop}>{content.loginText}</span>
                <span className={styles.loginTextBottom}>
                  {content.loginText}
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className={styles.bottomNavWrap}>
          <nav className={styles.bottomNav}>
            <Link
              href="/"
              className={`${styles.homeBtn} ${
                pathname === "/" ? styles.activeHome : ""
              }`}
              aria-label="Home"
            >
              <House size={16} strokeWidth={2.2} />
            </Link>

            <div className={styles.links}>
              {content.navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={isActive ? styles.activeLink : ""}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}