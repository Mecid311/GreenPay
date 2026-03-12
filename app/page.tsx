"use client";
import { useRef } from "react";
import Hero from "@/components/HeroSection/HeroSection";
import FaqSection from "@/components/Faq/FaqSection";
import PartnerContactSection from "@/components/Contact/PartnerContactSection";
import CertInfraPartnersSection from "@/components/CertInfraPartnersSection/CertInfraPartnersSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ScrollWordsSection from "@/components/ScrollWords/ScrollWordsSection";
import SpiralHero from "@/components/HeroAnimation/SpiralHero";
export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <main>
        <SpiralHero scrollToRef={heroRef} />
        <div ref={heroRef}>
          <Hero />
        </div>
        <ServicesSection />
        <ScrollWordsSection />
        <CertInfraPartnersSection />
        <FaqSection />
        <PartnerContactSection />
      </main>
    </>
  );
}
