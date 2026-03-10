import styles from "./ProductSection.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type ProductItem = {
  no: string;
  title: string;
  imageSrc: string;
  description: string;
  features?: string[];
  extraParagraphs?: string[];
  reverse?: boolean;
};

const ITEMS: ProductItem[] = [
  {
    no: "01",
    title: "İnternet ekvayrinq və\ne-ticarət həlləri",
    imageSrc: "/images/products/1.svg",
    description:
      "Onlayn satışlarınızı təhlükəsiz və fasiləsiz qəbul edin. İnternet ekvayrinq həllərimizlə kart ödənişlərini sürətli inteqrasiya və yüksək təsdiqlənmə faizi ilə qəbul edin.",
    features: [
      "PCI DSS uyğun təhlükəsizlik və antifrod sistemi",
      "API və hazır modullar ilə sürətli qoşulma",
      "3D Secure və tokenizasiya dəstəyi",
      "Real vaxt hesabat paneli",
      "Kiçik və böyük bizneslər üçün miqyaslana bilən infrastruktur",
      "Onlayn ödənişlərinizi etibarlı və effektiv şəkildə idarə edin.",
    ],
  },
  {
    no: "02",
    title: "All-in one Aqreqator Xidməti",
    imageSrc: "/images/products/2.svg",
    reverse: true,
    description:
      "Bütün ödəniş kanallarını vahid platformada birləşdirin. Vahid Ödəniş Aqreqator xidməti vasitəsilə müxtəlif banklar, kart şəbəkələri və alternativ ödəniş üsulları ilə tək inteqrasiya üzərindən işləyin.",
    extraParagraphs: [
      "Mərkəzləşdirilmiş idarəetmə paneli, real vaxt hesabatlar və əməliyyat monitorinqi sayəsində prosesləri sadələşdirin, əməliyyat xərclərini optimallaşdırın və ödəniş infrastrukturunuzu daha effektiv idarə edin.",
    ],
  },
  {
    no: "03",
    title: "Link Payment",
    imageSrc: "/images/products/3.svg",
    description:
      "Sürətli və sadə ödəniş qəbulu üçün link əsaslı həll. Müştərilərinizə SMS, e-poçt və ya sosial media vasitəsilə ödəniş linki göndərin və əlavə texniki inteqrasiya olmadan ödənişləri qəbul edin.",
    extraParagraphs: [
      "Xüsusilə xidmət sektoru, sifariş əsaslı satış və uzaqdan ödəniş ssenariləri üçün ideal seçimdir. Çevik, təhlükəsiz və dərhal aktivləşdirilə bilən həll ilə satış prosesinizi sürətləndirin.",
    ],
  },
];

function ProductRow({ item }: { item: ProductItem }) {
  const titleLines = item.title.split("\n");

  return (
    <div className={`${styles.inner} ${item.reverse ? styles.reverse : ""}`}>
      {/* CARD */}
      <div className={styles.card}>
        <img
          className={styles.cardImg}
          src={item.imageSrc}
          alt={item.title.replace("\n", " ")}
        />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.headerArea}>
          <div className={`${styles.kicker} ${roboto.className}`}>
            <span className={styles.kickerNo}>{item.no}</span>
            <span className={styles.kickerLine} aria-hidden="true" />
          </div>

          <h2 className={`${styles.title} ${roboto.className}`}>
            {titleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        {/* TEXT */}
        <div className={`${styles.text} ${roboto.className}`}>
          <p className={styles.lead}>{item.description}</p>

          {item.extraParagraphs &&
            item.extraParagraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}

          {item.features && (
            <ul className={styles.list}>
              {item.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <img
        className={styles.topRightSvg}
        src="/images/decor.svg"
        alt=""
        aria-hidden="true"
      />
      {ITEMS.map((item) => (
        <ProductRow key={item.no} item={item} />
      ))}
    </section>
  );
}
