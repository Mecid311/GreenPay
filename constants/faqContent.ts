export type FaqItem = {
  q?: string;
  a?: string;
};

export type FaqResponse = {
  title?: string;
  items?: FaqItem[];
};

export const defaultFaqContent: Required<FaqResponse> = {
  title: "TEZ-TEZ VERİLƏN SUALLAR",
  items: [
    {
      q: "Greenpay nədir?",
      a: "Greenpay bizneslər üçün rəqəmsal ödəniş qəbulu və idarəetmə həllərini təqdim edən ödəniş platformasıdır.",
    },
    {
      q: "GreenPay hansı ödəniş üsullarını dəstəkləyir?",
      a: "Bank kartları, onlayn ödənişlər, link ilə ödəniş və inteqrasiya edilən digər ödəniş kanalları dəstəklənir.",
    },
    {
      q: "Greenpay-dən kim istifadə edə bilər?",
      a: "Greenpay istənilən ölçüdə olan bizneslər üçün nəzərdə tutulub — startaplardan tutmuş iri müəssisələrədək, müxtəlif sənaye sahələrində.",
    },
    {
      q: "Greenpay nədir?",
      a: "Greenpay bizneslərə ödənişlərin toplanması, idarə olunması və hesabatlanması üçün vahid infrastruktur təqdim edir.",
    },
    {
      q: "Greenpay nədir?",
      a: "Greenpay ilə siz ödəniş proseslərinizi sadələşdirib daha sürətli satış axını qura bilərsiniz.",
    },
  ],
};