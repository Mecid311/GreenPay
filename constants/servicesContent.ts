export type ServiceItem = {
  no?: string;
  title?: string;
  desc?: string;
};

export type NormalizedServiceItem = {
  no: string;
  title: string;
  desc: string;
};

export type ServicesResponse = {
  kickerText?: string;
  titleTop?: string;
  titleBottom?: string;
  services?: ServiceItem[];
};

export const defaultServicesContent: {
  kickerText: string;
  titleTop: string;
  titleBottom: string;
  services: NormalizedServiceItem[];
} = {
  kickerText: "Xidmətlərimiz",
  titleTop: "Miqyaslana bilən və",
  titleBottom: "təhlükəsiz ödəniş platforması",
  services: [
    {
      no: "01",
      title: "İnternet ekvayrinq və e-ticarət həlləri",
      desc: "Onlayn satışlarınızı təhlükəsiz və fasiləsiz şəkildə qəbul edin. Greenpay internet ekvayrinq həlli ilə kart ödənişlərini sürətli inteqrasiya, yüksək təsdiqlənmə faizi və beynəlxalq təhlükəsizlik standartları ilə idarə edin. E-ticarət platformaları və xüsusi veb saytlar üçün çevik və miqyaslana bilən infrastruktur təqdim edirik.",
    },
    {
      no: "02",
      title: "All-In-One Aggregator Service",
      desc: "Bütün ödəniş kanallarını bir platformada birləşdirin. Greenpay aggregator xidməti vasitəsilə müxtəlif banklar, ödəniş üsulları və sistemlərlə tək inteqrasiya üzərindən işləyin. Vahid idarəetmə paneli, real vaxt hesabatlar və əməliyyat monitorinqi ilə proseslərinizi sadələşdirin və əməliyyat xərclərinizi optimallaşdırın.",
    },
    {
      no: "03",
      title: "Link Payment +",
      desc: "Sadə və sürətli ödəniş qəbulu üçün link əsaslı həll. Müştərilərinizə SMS, e-poçt və ya sosial media vasitəsilə ödəniş linki göndərin və əlavə texniki inteqrasiya olmadan ödənişləri qəbul edin. Xüsusilə xidmət sektoru, sifariş əsaslı satış və uzaqdan ödəniş ssenariləri üçün ideal həlldir.",
    },
  ],
};