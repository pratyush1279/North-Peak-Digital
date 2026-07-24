import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Shield, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormData, FormErrors } from '../types';

interface ContactFormProps {
  preSelectedService?: string;
  onSuccess: (msg: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preSelectedService, onSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    serviceType: preSelectedService || 'High-Performance Web Engineering',
    budgetRange: '$10k - $25k',
    message: '',
    privacyAgreed: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preSelectedService }));
    }
  }, [preSelectedService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address.';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a primary service.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your project goals.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a bit more detail (minimum 15 characters).';
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = 'You must accept the terms to request a proposal.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    // Clear error on field edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate fast async serverless handler
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onSuccess(`Proposal request received for ${formData.fullName}! Our lead partner will respond within 2 hours.`);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        serviceType: 'High-Performance Web Engineering',
        budgetRange: '$10k - $25k',
        message: '',
        privacyAgreed: false,
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 bg-[#111111] text-white relative border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Value Props */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] text-xs font-bold uppercase tracking-wider">
                <span>Direct Channel</span>
              </div>
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Let's Build Something Exceptional
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed font-normal">
                Ready to elevate your digital presence with zero-bloat engineering and 90+ Lighthouse performance? Request a strategic proposal below or book a direct call.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#F97316] shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-medium block">Direct Email</span>
                  <a href="mailto:hello@northpeakdigital.com" className="text-sm font-bold text-white hover:text-[#F97316] transition-colors">
                    hello@northpeakdigital.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#F97316] shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-medium block">Direct Phone</span>
                  <a href="tel:+18005550199" className="text-sm font-bold text-white hover:text-[#F97316] transition-colors">
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#F97316] shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-medium block">Headquarters</span>
                  <p className="text-sm font-bold text-white">
                    San Francisco • London • Remote Global
                  </p>
                </div>
              </div>
            </div>

            {/* SLA Guarantee Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Shield className="w-5 h-5" aria-hidden="true" />
                <span>Our Response Time Guarantee</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                All submitted inquiries are assigned directly to a Senior Lead Engineer. You will receive an initial audit proposal within <strong>2 business hours</strong>.
              </p>
            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Proposal Request Received!</h3>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto">
                      Thank you for reaching out to NorthPeak Digital. A lead partner has received your project details and will email your preliminary strategy deck shortly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Full Name <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        required
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-neutral-800'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" role="alert" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Work Email <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        required
                        placeholder="sarah@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-neutral-800'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Service Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                      />
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                      <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Primary Service <span className="text-[#F97316]">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                      >
                        <option value="High-Performance Web Engineering">High-Performance Web Engineering</option>
                        <option value="UI/UX Design & Systems">UI/UX Design & Systems</option>
                        <option value="Brand Identity & Strategy">Brand Identity & Strategy</option>
                        <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
                        <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="Technical SEO & Organic Growth">Technical SEO & Organic Growth</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <label htmlFor="budgetRange" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Target Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                    >
                      <option value="$5k - $10k">$5,000 - $10,000 (Starter Sprint)</option>
                      <option value="$10k - $25k">$10,000 - $25,000 (Growth Engine)</option>
                      <option value="$25k - $50k">$25,000 - $50,000 (Enterprise Scaling)</option>
                      <option value="$50k+">$50,000+ (Custom Transformation)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Project Overview & Objectives <span className="text-[#F97316]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      required
                      placeholder="Tell us about your product goals, current performance bottlenecks, target launch date, or desired outcomes..."
                      className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] transition-colors ${
                        errors.message ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Checkbox Terms Agreement */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacyAgreed"
                        checked={formData.privacyAgreed}
                        onChange={handleChange}
                        aria-invalid={!!errors.privacyAgreed}
                        aria-describedby={errors.privacyAgreed ? 'privacy-error' : undefined}
                        className="mt-1 w-4 h-4 rounded border-neutral-700 text-[#F97316] focus:ring-[#F97316] bg-neutral-950"
                      />
                      <span className="text-xs text-neutral-400">
                        I agree to NorthPeak Digital processing my contact information to send a customized project proposal and performance audit.
                      </span>
                    </label>
                    {errors.privacyAgreed && (
                      <p id="privacy-error" role="alert" className="text-xs text-red-400 flex items-center gap-1 mt-1 pl-7">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.privacyAgreed}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base btn-hover-effect shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing Proposal Request...
                      </span>
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
