export type FooterResponse = {
  address1?: string;
  address2?: string;

  companyTitle?: string;
  about?: string;
  mission?: string;
  contact?: string;

  contactTitle?: string;
  phone1?: string;
  email?: string;
  phone2?: string;
};

export const defaultFooterContent: Required<FooterResponse> = {
  address1: "8 W. South St. Buford, GA 30518",
  address2: "5 Briarwood Lane Vienna, VA 22180 RER",

  companyTitle: "Company Info",
  about: "About",
  mission: "Mission",
  contact: "Contact",

  contactTitle: "Contact",
  phone1: "+1 123456789",
  email: "remmcal@mail.com",
  phone2: "Phone: +1 12345678",
};