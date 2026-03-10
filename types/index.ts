export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Certificate {
  id: string;
  name: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  surname: string;
  phone: string;
  email: string;
  message: string;
}
