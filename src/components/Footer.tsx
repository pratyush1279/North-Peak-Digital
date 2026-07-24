import React, { useState } from 'react';
import { Mountain, ArrowUp, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FooterProps {
  onNotify: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNotify }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }

    setNewsletterError('');
    setNewsletterSuccess(true);
    onNotify('Subscribed to NorthPeak Digital Insights!');
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer aria-label="Site Footer" className="bg-[#0C0C0C] text-white border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="flex items-center gap-2.5 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-lg p-1 w-fit"
              aria-label="NorthPeak Digital Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#C2410C] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
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

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              An elite digital engineering & brand agency building high-performance web applications, modern UI design systems, and conversion funnels for ambitious companies.
            </p>

            <div className="pt-2 text-xs text-neutral-500">
              <span>San Francisco • London • Remote Global</span>
            </div>
          </div>

          {/* Quick Links Column 1: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Core Services</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Web Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  UI/UX Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Brand Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Conversion Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Technical SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Performance & Growth Newsletter
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get bi-weekly breakdown teardowns on Core Web Vitals, high-converting UX patterns, and modern React architectures.
            </p>

            <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Work Email</label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterError) setNewsletterError('');
                  }}
                  placeholder="enter work email..."
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-4 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {newsletterError && (
                <p role="alert" className="text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{newsletterError}</span>
                </p>
              )}

              {newsletterSuccess && (
                <p role="status" className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing!</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} NorthPeak Digital Agency LLC. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F97316] hover:underline font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded"
            >
              Built for Digital Heroes Training Task
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
              Terms of Service
            </a>
            <a href="#hero" className="hover:text-neutral-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded">
              SLA Guarantee
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            aria-label="Back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
