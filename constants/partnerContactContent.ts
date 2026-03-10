export type PartnerContactResponse = {
  headingLine1?: string;
  headingLine2?: string;

  namePlaceholder?: string;
  phonePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;

  buttonText?: string;
};

export const defaultPartnerContactContent: Required<PartnerContactResponse> = {
  headingLine1: "Biznes tərəfdaşlarımızla",
  headingLine2: "birlikdə böyüyürük",

  namePlaceholder: "Ad, soyad",
  phonePlaceholder: "Telefon nömrəsi",
  emailPlaceholder: "E-poçt ünvanı",
  messagePlaceholder: "Mesaj",

  buttonText: "Göndər",
};