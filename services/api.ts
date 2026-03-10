import { FooterResponse } from "@/constants/footerContent";
import { PartnerContactResponse } from "@/constants/partnerContactContent";
import { FaqResponse } from "@/constants/faqContent";
import { CertInfraPartnersResponse } from "@/constants/certInfraPartnersContent";
import { ScrollWordsResponse } from "@/constants/scrollWordsContent";
import { ServicesResponse } from "@/constants/servicesContent";
import { HeroResponse } from "@/constants/heroContent";
import { SpiralHeroResponse } from "@/constants/spiralHeroContent";
import { HeaderResponse } from "@/constants/headerContent";

export type ContactFormPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/* ======================
   FOOTER CONTENT
====================== */

export async function fetchFooterContent(): Promise<FooterResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/footer-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch footer content:", res.status);
      return null;
    }

    const data: FooterResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Footer API error:", error);
    return null;
  }
}

/* ======================
   PARTNER CONTACT CONTENT
====================== */

export async function fetchPartnerContactContent(): Promise<PartnerContactResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/partner-contact-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch partner contact content:", res.status);
      return null;
    }

    const data: PartnerContactResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Partner contact API error:", error);
    return null;
  }
}

/* ======================
   FAQ CONTENT
====================== */

export async function fetchFaqContent(): Promise<FaqResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/faq-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch faq content:", res.status);
      return null;
    }

    const data: FaqResponse = await res.json();
    return data;
  } catch (error) {
    console.error("FAQ API error:", error);
    return null;
  }
}


/* ======================
   CERT / INFRA / PARTNERS CONTENT
====================== */

export async function fetchCertInfraPartnersContent(): Promise<CertInfraPartnersResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/cert-infra-partners-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch cert infra partners content:", res.status);
      return null;
    }

    const data: CertInfraPartnersResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Cert infra partners API error:", error);
    return null;
  }
}


/* ======================
   SCROLL WORDS CONTENT
====================== */

export async function fetchScrollWordsContent(): Promise<ScrollWordsResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/scroll-words-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch scroll words content:", res.status);
      return null;
    }

    const data: ScrollWordsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Scroll words API error:", error);
    return null;
  }
}

/* ======================
   SERVICES CONTENT
====================== */

export async function fetchServicesContent(): Promise<ServicesResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/services-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch services content:", res.status);
      return null;
    }

    const data: ServicesResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Services API error:", error);
    return null;
  }
}

/* ======================
   HERO CONTENT
====================== */

export async function fetchHeroContent(): Promise<HeroResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/hero-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch hero content:", res.status);
      return null;
    }

    const data: HeroResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Hero API error:", error);
    return null;
  }
}


/* ======================
   SPIRAL HERO CONTENT
====================== */

export async function fetchSpiralHeroContent(): Promise<SpiralHeroResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/spiral-hero-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch spiral hero content:", res.status);
      return null;
    }

    const data: SpiralHeroResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Spiral hero API error:", error);
    return null;
  }
}

/* ======================
   HEADER CONTENT
====================== */

export async function fetchHeaderContent(): Promise<HeaderResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/header-content`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch header content:", res.status);
      return null;
    }

    const data: HeaderResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Header API error:", error);
    return null;
  }
}

/* ======================
   CONTACT FORM SUBMIT
====================== */

export async function sendContactForm(
  payload: ContactFormPayload
): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Contact form failed:", res.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Contact form error:", error);
    return false;
  }
}
