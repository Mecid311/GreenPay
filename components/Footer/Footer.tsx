"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { Roboto } from "next/font/google";

import {
  defaultFooterContent,
  FooterResponse,
} from "@/constants/footerContent";

import { fetchFooterContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Footer() {
  const [apiData, setApiData] = useState<FooterResponse | null>(null);

  useEffect(() => {
    const loadFooter = async () => {
      const data = await fetchFooterContent();
      setApiData(data);
    };

    loadFooter();
  }, []);

  const content = useMemo(
    () => ({
      address1: apiData?.address1 || defaultFooterContent.address1,
      address2: apiData?.address2 || defaultFooterContent.address2,

      companyTitle:
        apiData?.companyTitle || defaultFooterContent.companyTitle,
      about: apiData?.about || defaultFooterContent.about,
      mission: apiData?.mission || defaultFooterContent.mission,
      contact: apiData?.contact || defaultFooterContent.contact,

      contactTitle:
        apiData?.contactTitle || defaultFooterContent.contactTitle,
      phone1: apiData?.phone1 || defaultFooterContent.phone1,
      email: apiData?.email || defaultFooterContent.email,
      phone2: apiData?.phone2 || defaultFooterContent.phone2,
    }),
    [apiData]
  );

  return (
    <footer className={`${styles.footer} ${roboto.className}`}>
      <div className={styles.inner}>
        <div className={styles.decor} aria-hidden="true">
          <Image
            src="/images/footer-decor.svg"
            alt=""
            fill
            className={styles.decorImg}
            priority={false}
          />
        </div>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.brand}>
            <img
              src="/images/logo.svg"
              alt="Greenpay"
              className={styles.logo}
            />
            <span className={styles.brandText}>
              Green
              <br />
              pay
            </span>
          </div>

          <p className={styles.addr}>
            {content.address1}
            <br />
            {content.address2}
          </p>

          <div className={styles.socials}>
            <a href="#" aria-label="YouTube" className={styles.socialBtn}>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.4 3.5-6.4 3.5Z" />
              </svg>
            </a>

            <a href="#" aria-label="Facebook" className={styles.socialBtn}>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.4c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            <a href="#" aria-label="WhatsApp" className={styles.socialBtn}>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 0 0-8.7 15l-1.3 5L7 20.7A10 10 0 1 0 12 2Zm5.3 13.9c-.2.6-1.1 1.1-1.5 1.2-.4.1-.9.1-1.5-.1-.4-.1-.9-.3-1.6-.6-2.7-1.2-4.5-4.1-4.6-4.3-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.3-.2.7-.2 1-.2h.7c.2 0 .5 0 .7.5.2.6.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.4-.3.5-.2.2-.3.3-.5.5-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.3 2.5 1.5.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.5.2.6.3.1.1.1.6-.1 1.2Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{content.companyTitle}</h4>
            <a className={styles.link} href="#">
              {content.about}
            </a>
            <a className={styles.link} href="#">
              {content.mission}
            </a>
            <a className={styles.link} href="#">
              {content.contact}
            </a>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{content.contactTitle}</h4>
            <p className={styles.meta}>{content.phone1}</p>
            <p className={styles.meta}>{content.email}</p>
            <p className={styles.meta}>{content.phone2}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}