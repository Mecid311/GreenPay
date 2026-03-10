"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./CertInfraPartnersSection.module.css";
import { Roboto } from "next/font/google";

import {
  CertCard,
  CertInfraPartnersResponse,
  PartnerLogo,
  defaultCertInfraPartnersContent,
} from "@/constants/certInfraPartnersContent";
import { fetchCertInfraPartnersContent } from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function CertInfraPartnersSection() {
  const [apiData, setApiData] = useState<CertInfraPartnersResponse | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchCertInfraPartnersContent();
      setApiData(data);
    };

    loadContent();
  }, []);

  const content = useMemo(() => {
    const apiCerts = apiData?.certs;
    const apiPartners = apiData?.partners;

    const normalizedCerts: CertCard[] =
      apiCerts && Array.isArray(apiCerts) && apiCerts.length > 0
        ? apiCerts
            .filter((item) => item?.id && item?.label?.trim() && item?.title?.trim())
            .map((item) => ({
              id: item.id,
              label: item.label!.trim(),
              title: item.title!.trim(),
              variant: item.variant === "primary" ? "primary" : "default",
            }))
        : defaultCertInfraPartnersContent.certs;

    const normalizedPartners: PartnerLogo[] =
      apiPartners && Array.isArray(apiPartners) && apiPartners.length > 0
        ? apiPartners
            .filter((item) => item?.id && item?.src?.trim())
            .map((item) => ({
              id: item.id,
              alt: item.alt?.trim() || "Partner logo",
              src: item.src!.trim(),
              width: item.width ?? 180,
              height: item.height ?? 50,
            }))
        : defaultCertInfraPartnersContent.partners;

    return {
      titleLine1:
        apiData?.titleLine1?.trim() || defaultCertInfraPartnersContent.titleLine1,
      titleLine2:
        apiData?.titleLine2?.trim() || defaultCertInfraPartnersContent.titleLine2,
      titleLine3:
        apiData?.titleLine3?.trim() || defaultCertInfraPartnersContent.titleLine3,

      textLine1:
        apiData?.textLine1?.trim() || defaultCertInfraPartnersContent.textLine1,
      textLine2:
        apiData?.textLine2?.trim() || defaultCertInfraPartnersContent.textLine2,
      textLine3:
        apiData?.textLine3?.trim() || defaultCertInfraPartnersContent.textLine3,

      partnersTitle:
        apiData?.partnersTitle?.trim() ||
        defaultCertInfraPartnersContent.partnersTitle,

      certs:
        normalizedCerts.length > 0
          ? normalizedCerts
          : defaultCertInfraPartnersContent.certs,

      partners:
        normalizedPartners.length > 0
          ? normalizedPartners
          : defaultCertInfraPartnersContent.partners,
    };
  }, [apiData]);

  return (
    <section className={`${styles.section} ${roboto.className}`}>
      <div className={styles.stage}>
        <div className={styles.contentWrap}>
          <div className={styles.textWrap}>
            <div className={styles.decorQuotes} aria-hidden="true">
              <Image
                className={`${styles.quote} ${styles.quoteLeft}`}
                src="/images/quoteL.svg"
                alt=""
                width={111}
                height={96}
                priority
              />
              <Image
                className={`${styles.quote} ${styles.quoteRight}`}
                src="/images/quoteR.svg"
                alt=""
                width={111}
                height={96}
                priority
              />
            </div>

            <h2 className={styles.title}>
              {content.titleLine1}
              <br />
              {content.titleLine2}
              <br />
              {content.titleLine3}
            </h2>

            <p className={styles.text}>
              {content.textLine1}
              <br />
              {content.textLine2}
              <br />
              {content.textLine3}
            </p>
          </div>

          <div className={styles.cardsWrap}>
            <div className={styles.lines} aria-hidden="true">
              <span className={styles.lineHorizontal} />
              <span className={styles.lineVertical} />
            </div>

            <div className={styles.cardsGrid}>
              {content.certs.map((c) => (
                <div
                  key={c.id}
                  className={[
                    styles.card,
                    c.variant === "primary"
                      ? styles.cardPrimary
                      : styles.cardDefault,
                  ].join(" ")}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.cardIcon} />
                  </div>
                  <span className={styles.cardLabel}>{c.label}</span>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <span className={styles.cardSheen} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.partners}>
          <div className={styles.partnersTitle}>{content.partnersTitle}</div>
          <div className={styles.partnerRow}>
            {content.partners.map((p) => (
              <div key={p.id} className={styles.partnerLogo}>
                <Image
                  src={p.src || "/images/partnyor/p1.svg"}
                  alt={p.alt || "Partner logo"}
                  width={p.width ?? 180}
                  height={p.height ?? 50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}