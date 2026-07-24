import React, { useState } from 'react';
import { Check, X, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS_DATA, FAQS_DATA } from '../data/agencyData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-24 bg-[#161616] text-white relative border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] text-xs font-bold uppercase tracking-wider">
            <span>Transparent Pricing</span>
          </div>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Fixed Proposals. Zero Scope Creep Surprises.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            All plans include our 100/100 Core Web Vitals guarantee, WCAG AA accessibility audit, and 30-day post-launch SLA support.
          </p>

          {/* Billing Toggle (Monthly / Annual) */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-white' : 'text-neutral-400'}`}>
              Pay Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              type="button"
              className="relative w-14 h-8 rounded-full bg-neutral-800 border border-neutral-700 p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual billing for 20% discount"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#F97316] shadow-md transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${isAnnual ? 'text-white' : 'text-neutral-400'}`}>
                Annual Billing
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {PRICING_PLANS_DATA.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-neutral-900 border-2 border-[#F97316] shadow-2xl shadow-orange-500/15 lg:-translate-y-2'
                    : 'bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#F97316] text-white text-xs font-bold tracking-wider uppercase shadow-md">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed min-h-[36px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-sm text-neutral-400 font-semibold">/month</span>
                    </div>
                    <span className="text-xs text-neutral-500 block mt-1">
                      {isAnnual ? 'Billed annually ($' + (price * 12).toLocaleString() + '/yr)' : 'Billed month-to-month'}
                    </span>
                  </div>

                  {/* Turnaround Badge */}
                  <div className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-lg bg-neutral-800/80 text-neutral-300">
                    <span>Target Turnaround:</span>
                    <span className="text-[#F97316] font-bold">{plan.turnaround}</span>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Included Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          {feat.included ? (
                            <Check className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" aria-hidden="true" />
                          ) : (
                            <X className="w-5 h-5 text-neutral-600 shrink-0 mt-0.5" aria-hidden="true" />
                          )}
                          <span className={feat.included ? 'text-neutral-200' : 'text-neutral-500 line-through'}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-8 mt-8 border-t border-neutral-800">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                      plan.popular
                        ? 'bg-[#F97316] hover:bg-[#EA580C] text-white btn-hover-effect shadow-lg shadow-orange-500/20'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-neutral-900 border border-neutral-800 p-8">
          <div className="flex items-center gap-2 text-[#F97316] font-bold text-sm mb-4">
            <HelpCircle className="w-5 h-5" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </div>
          <div className="space-y-4 divide-y divide-neutral-800">
            {FAQS_DATA.map((faq, idx) => (
              <div key={idx} className={idx !== 0 ? 'pt-4' : ''}>
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left flex items-center justify-between text-base font-bold text-white hover:text-[#F97316] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-md py-1"
                  aria-expanded={activeFaq === idx}
                >
                  <span>{faq.question}</span>
                  <span className="text-[#F97316] text-xl font-mono leading-none">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
