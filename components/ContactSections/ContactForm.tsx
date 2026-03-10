"use client";

import styles from "./ContactSection.module.css";

export default function ContactForm() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        
      }}
    >
      <input className={styles.input} placeholder="Ad, soyad" />
      <input className={styles.input} placeholder="Telefon nömrəsi" />
      <input className={styles.input} placeholder="E-poçt ünvanı" />
      <textarea className={styles.textarea} placeholder="Mesaj" />

      <button className={styles.button} type="submit">
        Göndər
        <span className={styles.btnIcon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3h7v7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 3 3 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </form>
  );
}