import styles from "./ContactSection.module.css";
import ContactForm from "./ContactForm";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400","500","700"],
  display: "swap",
});

export default function ContactSection() {
  return (
    <section className={`${styles.section} ${roboto.className}`}>
      <svg
        className={styles.waves}
        width="210"
        height="120"
        viewBox="0 0 210 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-10 40 C 30 10, 70 10, 110 40 C 150 70, 190 70, 230 40"
          stroke="rgba(10, 10, 10, 0.10)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-10 60 C 30 30, 70 30, 110 60 C 150 90, 190 90, 230 60"
          stroke="rgba(10, 10, 10, 0.10)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-10 80 C 30 50, 70 50, 110 80 C 150 110, 190 110, 230 80"
          stroke="rgba(10, 10, 10, 0.10)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.kickerRow}>
            <span className={styles.kicker}>əlaqə</span>
            <span className={styles.kickerLine} />
          </div>

          <h2 className={styles.title}>
            Layihənizi müzakirə
            <br />
            etmək istəyirsiniz ?
          </h2>

          <p className={styles.subTitle}>
            -Formu doldurun, sizinlə əlaqə saxlayq.
          </p>

          <div className={styles.body}>
            <p>
              Rəqəmsal ödəniş həllərimiz, internet ekvayrinq və biznesiniz üçün
              fərdi təkliflər haqqında ətraflı məlumat almaq üçün bizimlə əlaqə
              saxlayın. Komandamız sorğunuzu qısa müddətdə cavablandıracaq və
              ehtiyaclarınıza uyğun optimal həlli təqdim edəcək.
            </p>

            <p>
              İstər startap, istərsə də böyük e-ticarət platforması olun —
              təhlükəsiz, sürətli və miqyaslana bilən ödəniş infrastrukturu üçün
              yanınızdayıq.
            </p>

            <p className={styles.bodyMuted}>
              Formu doldurun, sizinlə əlaqə saxlayq.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className={styles.bottomLine}>
        <span>IT</span><span className={styles.dot}>•</span>
        <span>ASAN</span><span className={styles.dot}>•</span>
        <span className={styles.green}>TƏHLÜKƏSİZ</span><span className={styles.dot}>•</span>
        <span>SÜRƏTLİ</span><span className={styles.dot}>•</span>
        <span>RAHAT ÖDƏNİŞLƏR</span><span className={styles.dot}>•</span>
        <span>24/7 NƏZ</span>
      </div>
    </section>
  );
}