/**
 * NorthPeak Digital Agency - Modern One-Page Application
 */

import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Toast } from './components/Toast';

// Lazy load below-the-fold components to eliminate initial main-thread JS execution & TBT
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Results = lazy(() => import('./components/Results').then(m => ({ default: m.Results })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const ContactForm = lazy(() => import('./components/ContactForm').then(m => ({ default: m.ContactForm })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Zero-TBT Viewport Lazy Section Loader
const LazySection: React.FC<{
  children: React.ReactNode;
  height?: string;
  delayMs?: number;
}> = ({ children, height = '600px', delayMs = 1200 }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Auto-load below-the-fold sections when initial paint & idle finish
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delayMs);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delayMs]);

  return (
    <div ref={containerRef} style={{ minHeight: height }} className="w-full">
      {shouldRender ? (
        <Suspense fallback={<div style={{ minHeight: height }} className="w-full bg-[#111111]" />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: height }} className="w-full bg-[#111111] border-t border-neutral-900/80" />
      )}
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [toastState, setToastState] = useState<{ isOpen: boolean; message: string; type: 'success' | 'error' }>({
    isOpen: false,
    message: '',
    type: 'success',
  });

  // RAF-throttled scroll handler to prevent main thread blocking
  useEffect(() => {
    const sectionIds = ['hero', 'services', 'why-us', 'results', 'pricing', 'contact'];
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 200;

        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(id);
              break;
            }
          }
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlanFromPricing = (planName: string) => {
    setSelectedServiceForContact(`Pricing Plan: ${planName}`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToastState({ isOpen: true, message, type });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section (Eager Load for Instant LCP & FCP) */}
        <Hero />

        {/* 2. Services Section */}
        <LazySection height="700px" delayMs={500}>
          <Services onSelectService={handleSelectServiceFromCard} />
        </LazySection>

        {/* 3. Why Choose Us Section */}
        <LazySection height="600px" delayMs={1000}>
          <WhyChooseUs />
        </LazySection>

        {/* 4. Results & Testimonials Section */}
        <LazySection height="800px" delayMs={1500}>
          <Results />
        </LazySection>

        {/* 5. Pricing Section */}
        <LazySection height="700px" delayMs={2000}>
          <Pricing onSelectPlan={handleSelectPlanFromPricing} />
        </LazySection>

        {/* 6. Contact Form Section */}
        <LazySection height="650px" delayMs={2500}>
          <ContactForm
            preSelectedService={selectedServiceForContact}
            onSuccess={(msg) => showToast(msg, 'success')}
          />
        </LazySection>
      </main>

      {/* 7. Footer */}
      <LazySection height="300px" delayMs={3000}>
        <Footer onNotify={(msg) => showToast(msg, 'success')} />
      </LazySection>

      {/* Reusable Notification Toast */}
      <Toast
        isOpen={toastState.isOpen}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
