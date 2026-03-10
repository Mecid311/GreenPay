"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./PartnerContactSection.module.css";
import { Roboto } from "next/font/google";

import {
  defaultPartnerContactContent,
  PartnerContactResponse,
} from "@/constants/partnerContactContent";
import {
  ContactFormPayload,
  fetchPartnerContactContent,
  sendContactForm,
} from "@/services/api";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function PartnerContactSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [apiData, setApiData] = useState<PartnerContactResponse | null>(null);

  const [form, setForm] = useState<ContactFormPayload>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchPartnerContactContent();
      setApiData(data);
    };

    loadContent();
  }, []);

  const content = useMemo(
    () => ({
      headingLine1:
        apiData?.headingLine1?.trim() ||
        defaultPartnerContactContent.headingLine1,
      headingLine2:
        apiData?.headingLine2?.trim() ||
        defaultPartnerContactContent.headingLine2,
      namePlaceholder:
        apiData?.namePlaceholder?.trim() ||
        defaultPartnerContactContent.namePlaceholder,
      phonePlaceholder:
        apiData?.phonePlaceholder?.trim() ||
        defaultPartnerContactContent.phonePlaceholder,
      emailPlaceholder:
        apiData?.emailPlaceholder?.trim() ||
        defaultPartnerContactContent.emailPlaceholder,
      messagePlaceholder:
        apiData?.messagePlaceholder?.trim() ||
        defaultPartnerContactContent.messagePlaceholder,
      buttonText:
        apiData?.buttonText?.trim() ||
        defaultPartnerContactContent.buttonText,
    }),
    [apiData]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const success = await sendContactForm(form);

    if (success) {
      alert("Mesaj göndərildi!");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      alert("Xəta baş verdi");
    }

    setIsSubmitting(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2
          className={`${styles.heading} ${roboto.className} ${
            visible ? styles.headingVisible : ""
          }`}
        >
          {content.headingLine1}
          <br />
          {content.headingLine2}
        </h2>
      </div>

      <div className={styles.shell}>
        <div className={styles.topNotch} aria-hidden="true" />

        <div
          ref={ref}
          className={`${styles.grid} ${visible ? styles.visible : ""}`}
        >
          <div className={styles.imageCard}>
            <img
              src="/images/contact.svg"
              alt=""
              className={styles.image}
              aria-hidden="true"
            />
          </div>

          <form className={styles.formCard} onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={styles.input}
              placeholder={content.namePlaceholder}
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder={content.phonePlaceholder}
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              placeholder={content.emailPlaceholder}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={styles.textarea}
              placeholder={content.messagePlaceholder}
            />

            <button
              type="submit"
              className={styles.btn}
              disabled={isSubmitting}
            >
              <span className={styles.btnTextWrap}>
                <span className={`${styles.btnText} ${roboto.className}`}>
                  {isSubmitting ? "Göndərilir..." : content.buttonText}
                </span>
                <span className={`${styles.btnTextBottom} ${roboto.className}`}>
                  {isSubmitting ? "Göndərilir..." : content.buttonText}
                </span>
              </span>

              <span className={styles.btnIcon} aria-hidden="true">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g filter="url(#gpArrowShadow)">
                    <path
                      d="M13 31H30C30.414 31 30.75 30.664 30.75 30.25C30.75 29.836 30.414 29.5 30 29.5H13C12.586 29.5 12.25 29.836 12.25 30.25C12.25 30.664 12.586 31 13 31Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.5 26.5C14.69 26.5 14.88 26.43 15.03 26.28L29.03 12.28C29.32 11.99 29.32 11.51 29.03 11.22C28.74 10.93 28.26 10.93 27.97 11.22L13.97 25.22C13.68 25.51 13.68 25.99 13.97 26.28C14.12 26.43 14.31 26.5 14.5 26.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M28.5 22.75C28.914 22.75 29.25 22.414 29.25 22V11.75C29.25 11.336 28.914 11 28.5 11H18.25C17.836 11 17.5 11.336 17.5 11.75C17.5 12.164 17.836 12.5 18.25 12.5H27.75V22C27.75 22.414 28.086 22.75 28.5 22.75Z"
                      fill="currentColor"
                    />
                  </g>

                  <defs>
                    <filter
                      id="gpArrowShadow"
                      x="-6"
                      y="-6"
                      width="56"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="4" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 0.18 0"
                      />
                      <feBlend in="SourceGraphic" />
                    </filter>
                  </defs>
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}