import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/90 backdrop-blur-md border-b border-neutral-800 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] rounded-lg p-1"
            aria-label="NorthPeak Digital Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-200">
              <Mountain className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white leading-none">
                NORTH<span className="text-[#F97316]">PEAK</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-400 mt-0.5">
                DIGITAL AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 bg-neutral-900/80 p-1.5 rounded-full border border-neutral-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                    isActive
                      ? 'bg-[#F97316] text-white shadow-sm font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-semibold btn-hover-effect focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[65px] bg-[#111111] border-b border-neutral-800 p-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 z-50"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-neutral-200 hover:text-white hover:bg-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-800 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F97316] text-white font-semibold text-center hover:bg-[#EA580C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              >
                <span>Book Strategic Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
