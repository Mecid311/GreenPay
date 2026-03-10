'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Service, Benefit, Partner, Certificate, FAQ } from '@/types';

interface ApiContextType {
  services: Service[];
  benefits: Benefit[];
  partners: Partner[];
  certificates: Certificate[];
  faqs: FAQ[];
  loading: boolean;
  error: string | null;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Simulating API calls - replace with actual API endpoints
        const [servicesRes, benefitsRes, partnersRes, certificatesRes, faqsRes] = await Promise.all([
          fetch('/api/services'),
          fetch('/api/benefits'),
          fetch('/api/partners'),
          fetch('/api/certificates'),
          fetch('/api/faqs'),
        ]);

        const servicesData = await servicesRes.json();
        const benefitsData = await benefitsRes.json();
        const partnersData = await partnersRes.json();
        const certificatesData = await certificatesRes.json();
        const faqsData = await faqsRes.json();

        setServices(servicesData);
        setBenefits(benefitsData);
        setPartners(partnersData);
        setCertificates(certificatesData);
        setFaqs(faqsData);
      } catch (err) {
        setError('Məlumatlar yüklənərkən xəta baş verdi');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        services,
        benefits,
        partners,
        certificates,
        faqs,
        loading,
        error,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};
