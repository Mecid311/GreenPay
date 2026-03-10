"use client";

import styles from "./AboutSection.module.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

type Person = {
  name: string;
  role: string;
  img: string;
  highlight?: boolean;
};

const people: Person[] = [
  {
    name: "Sophie Bennett",
    role: "Co-Founder",
    img: "/images/team/2.svg",
    highlight: true,
  },
  { name: "Sophie Bennett", role: "Co-Founder", img: "/images/team/2.svg" },
  { name: "Sophie Bennett", role: "Co-Founder", img: "/images/team/2.svg" },
  { name: "Sophie Bennett", role: "Co-Founder", img: "/images/team/2.svg" },
  { name: "Sophie Bennett", role: "Co-Founder", img: "/images/team/2.svg" },
];

const SLOT_INDEXES_FOR_PEOPLE = [0, 1, 2, 5, 7] as const;

export default function AboutIntroSection() {
  const slots: (Person | null)[] = Array.from({ length: 8 }, () => null);

  SLOT_INDEXES_FOR_PEOPLE.forEach((slotIdx, i) => {
    slots[slotIdx] = people[i] ?? null;
  });
  return (
    <div className={styles.aboutWrap}>
        <img
          src="/images/decor3.svg"
          alt=""
          aria-hidden="true"
          className={styles.rightDecor}
        />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.contentWrapper}>
            {" "}
            {/* Yeni bürüyücü div */}
            {/* Haqqımızda artıq textCol-un daxilində və ya ona nisbətən absolute olacaq */}
            <div className={`${styles.kickerWrap} ${roboto.className}`}>
              <div className={styles.kicker}>Haqqımızda</div>
              <div className={styles.kickerLine} aria-hidden="true" />
            </div>
            <div className={styles.textCol}>
              <h1 className={`${styles.title} ${roboto.className}`}>
                {/* Sol tərəfdə boşluq yaradırıq ki, Haqqımızda ora yerləşsin */}
                <span className={styles.indent}></span>
                Greenpay — rəqəmsal <br />
                iqtisadiyyatın sürətlə inkişaf etdiyi <br />
                mühitdə şirkətlər
                <span className={styles.titleInlineLight}>
                  {" "}
                  üçün müasir, təhlükəsiz və
                </span>
              </h1>
              <p className={`${styles.lead} ${roboto.className}`}>
                çevik ekvayrinq həlləri təqdim edən ödəniş texnologiyaları
                platformasıdır. Məqsədimiz şirkətlərin nağdsız ödənişləri
                asanlıqla qəbul etməsini təmin etməklə onların satışlarını və
                müştəri məmnuniyyətini artırmaqdır.
              </p>
            </div>
          </div>

          {/* PARTNER LOGOS */}
          <div className={styles.partners} aria-label="Partnyorlar">
            <img
              className={styles.partnerLogo}
              src="/images/partnyor/p1.svg"
              alt="AZPULMAT"
            />
            <img
              className={styles.partnerLogo}
              src="/images/partnyor/p2.svg"
              alt="KredAgro"
            />
            <img
              className={styles.partnerLogo}
              src="/images/partnyor/p3.svg"
              alt="Unibank"
            />
            <img
              className={styles.partnerLogo}
              src="/images/partnyor/p4.svg"
              alt="AzParking"
            />
          </div>
        </div>
      </section>
      {/* BENEFITS */}
      <section
        className={styles.benefitsSection}
        aria-label="Fayda və üstünlüklərimiz"
      >
        <h2 className={`${styles.benefitsHeading} ${roboto.className}`}>
          Fayda və üstünlüklərimiz
        </h2>

        <div className={styles.benefitsList}>
          {/* 01 */}
          <div className={styles.benefitRow}>
            <div className={`${styles.benefitNo} ${roboto.className}`}>01</div>

            <div className={styles.benefitText}>
              <div className={`${styles.benefitTitle} ${roboto.className}`}>
                Sürətli və Stabil infrastruktur
              </div>
              <p className={`${styles.benefitDesc} ${roboto.className}`}>
                Ödəniş əməliyyatlarınızı minimum gecikmə ilə, yüksək
                performanslı və dayanıqlı sistem üzərindən həyata keçirin.
                Greenpay infrastrukturu böyük əməliyyat həcmlərini problemsiz
                idarə edir və fasiləsiz xidmət təmin edir.
              </p>
            </div>
          </div>

          {/* 02 (indent) */}
          <div className={`${styles.benefitRow} ${styles.rowIndent}`}>
            <div className={`${styles.benefitNo} ${roboto.className}`}>02</div>

            <div className={styles.benefitText}>
              <div className={`${styles.benefitTitle} ${roboto.className}`}>
                Təhlükəsizlik və Uyğunluq
              </div>
              <p className={`${styles.benefitDesc} ${roboto.className}`}>
                Bütün əməliyyatlar beynəlxalq təhlükəsizlik standartlarına uyğun
                qorunur. Məlumatların şifrələnməsi, risk monitorinqi və
                fırıldaqçılıqda qorunma mexanizmləri ilə biznesinizi və
                müştərilərinizi təhlükəsiz saxlayırıq.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className={styles.benefitRow}>
            <div className={`${styles.benefitNo} ${roboto.className}`}>03</div>

            <div className={styles.benefitText}>
              <div className={`${styles.benefitTitle} ${roboto.className}`}>
                Çevik inteqrasiya və İdarəetmə
              </div>
              <p className={`${styles.benefitDesc} ${roboto.className}`}>
                API və hazır modullar vasitəsilə sistemlərinizə sürətli
                inteqrasiya imkanı. Vahid idarəetmə paneli üzərindən bütün
                ödənişləri izləyin, hesabatlar alın və prosesləri effektiv
                şəkildə idarə edin.
              </p>
            </div>
          </div>
        </div>

      </section>
      {/* TEAM */}
      <section className={styles.teamSection} aria-label="Komanda">
        <div className={styles.teamWrap}>
          <div className={styles.teamTop}>
            {/* CEO CARD */}
            <div className={styles.ceoCard}>
              <div className={styles.ceoPhotoWrap}>
                <img
                  className={styles.ceoPhoto}
                  src="/images/team/1.svg"
                  alt="CEO"
                />
              </div>

              <div className={styles.ceoMeta}>
                <div className={`${styles.ceoName} ${roboto.className}`}>
                  Ad soyad
                </div>
                <div className={`${styles.ceoRole} ${roboto.className}`}>
                  CEO
                </div>
              </div>
            </div>

            {/* INFO */}
            <div className={styles.teamInfo}>
              <h3 className={`${styles.teamInfoTitle} ${roboto.className}`}>
                Rəqəmsal ödənişlərin <br />
                arxasındakı komanda
              </h3>

              <p className={`${styles.teamInfoText} ${roboto.className}`}>
                Greenpay komandası maliyyə texnologiyaları, proqram təminatı və
                əməliyyat idarəçiliyi sahəsində təcrübəli mütəxəssislərdən
                ibarətdir.
              </p>

              <p className={`${styles.teamInfoText} ${roboto.className}`}>
                Biz təhlükəsizlik, sabitlik və innovasiyanı prioritet tutaraq
                etibarlı ödəniş infrastrukturu qururuq.
              </p>
            </div>
          </div>

          <div className={styles.teamGrid} aria-label="Komanda üzvləri">
            {slots.map((p, idx) => {
              if (!p)
                return (
                  <div
                    key={idx}
                    className={styles.gridGhost}
                    aria-hidden="true"
                  />
                );

              return (
                <div
                  key={idx}
                  className={`${styles.personCard} ${p.highlight ? styles.personHighlight : ""}`}
                >
                  <div className={styles.personPhotoWrap}>
                    <img
                      className={styles.personPhoto}
                      src={p.img}
                      alt={p.name}
                    />
                  </div>

                  <div className={styles.personMeta}>
                    <div className={`${styles.personName} ${roboto.className}`}>
                      {p.name}
                    </div>
                    <div className={`${styles.personRole} ${roboto.className}`}>
                      {p.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
