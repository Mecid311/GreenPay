"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { House, Menu, X } from "lucide-react";
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
  const [showTopNav, setShowTopNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await fetchHeaderContent();
        setApiData(data);
      } catch (error) {
        console.error("Header content fetch failed:", error);
      }
    };

    loadContent();
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateNavState = () => {
      if (!isHomePage) {
        setShowTopNav(true);
        setShowBottomNav(true);
        return;
      }

      const hero =
        document.querySelector<HTMLElement>("#hero") ||
        document.querySelector<HTMLElement>("[data-hero='true']") ||
        document.querySelector<HTMLElement>("[data-section='hero']") ||
        document.querySelector<HTMLElement>(".hero");

      if (!hero) {
        const passedFallback = window.scrollY > window.innerHeight * 0.7;
        setShowTopNav(!passedFallback);
        setShowBottomNav(passedFallback);
        return;
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const passedHero = window.scrollY + 100 >= heroBottom;

      setShowTopNav(!passedHero);
      setShowBottomNav(passedHero);
    };

    updateNavState();

    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
    };
  }, [isHomePage]);

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
            showTopNav ? styles.topBarVisible : styles.topBarHidden
          }`}
        >
          <Link href="/" className={styles.brand}>
            <Image
              src={content.brandLogoSrc}
              alt={content.brandLogoAlt}
              width={120} 
              height={150} 
              className={styles.brandLogo}
              priority 
              quality={100} 
            />
             
            <span className={styles.brandText}>
              <span>{content.brandTextTop}</span>
              <span>{content.brandTextBottom}</span>
            </span>
          </Link>

          <nav className={styles.topNavLinks} aria-label="Main navigation">
            {content.navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? styles.activeTopLink : ""}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.topActions}>
            <button
              type="button"
              className={styles.menuBtn}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

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

        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
          }`}
        >
          <nav
            className={styles.mobileMenuLinks}
            aria-label="Mobile navigation"
          >
            {content.navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? styles.activeMobileLink : ""}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div
          className={`${styles.bottomNavWrap} ${
            showBottomNav ? styles.bottomNavVisible : styles.bottomNavHidden
          }`}
        >
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
