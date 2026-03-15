export type CertCard = {
  id: string;
  label: string;
  title: string;
  variant?: "default" | "primary";
  iconSrc?: string;
  iconAlt?: string;
};

export type PartnerLogo = {
  id: string;
  alt?: string;
  src?: string;
  width?: number;
  height?: number;
};

export type CertInfraPartnersResponse = {
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  textLine1?: string;
  textLine2?: string;
  textLine3?: string;
  partnersTitle?: string;
  certs?: CertCard[];
  partners?: PartnerLogo[];
};

export const defaultCertInfraPartnersContent: Required<CertInfraPartnersResponse> = {
  titleLine1: "Etibarlı və",
  titleLine2: "sertifikatlaşdırılmış",
  titleLine3: "infrastruktur",

  textLine1: "Sadə və sürətli ödəniş qəbulu üçün link əsaslı həll.",
  textLine2: "Müştərilərinizə SMS, e-poçt və ya sosial media vasitəsilə",
  textLine3: "ödəniş linki göndərin və əlavə texniki inteqrasiya etməyin.",

  partnersTitle: "Partnyorlarımız",

  certs: [
    {
      id: "c1",
      label: "Sertifikat",
      title: "Mərkəzi Bank",
      variant: "default",
      iconSrc: "/images/icons/cert-1.svg",
      iconAlt: "Mərkəzi Bank sertifikat ikonu",
    },
    {
      id: "c2",
      label: "Sertifikat",
      title: "PCI DSS",
      variant: "default",
      iconSrc: "/images/icons/cert-2.svg",
      iconAlt: "PCI DSS sertifikat ikonu",
    },
    {
      id: "c3",
      label: "Sertifikat",
      title: "Mərkəzi Bank",
      variant: "default",
      iconSrc: "/images/icons/cert-3.svg",
      iconAlt: "Mərkəzi Bank sertifikat ikonu",
    },
    {
      id: "c4",
      label: "Sertifikat",
      title: "Mərkəzi Bank",
      variant: "default",
      iconSrc: "/images/icons/cert-4.svg",
      iconAlt: "Mərkəzi Bank sertifikat ikonu",
    },
  ],

  partners: [
    {
      id: "p1",
      alt: "AZPULMAT",
      src: "/images/partnyor/p1.svg",
      width: 313,
      height: 313,
    },
    {
      id: "p2",
      alt: "KredAqro",
      src: "/images/partnyor/p2.svg",
      width: 291.49,
      height: 137,
    },
    {
      id: "p3",
      alt: "Unibank",
      src: "/images/partnyor/p3.svg",
      width: 296,
      height: 296,
    },
    {
      id: "p4",
      alt: "AzParking",
      src: "/images/partnyor/p4.svg",
      width: 182,
      height: 118.96,
    },
  ],
};