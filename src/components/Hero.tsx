import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#111111] via-[#161616] to-[#111111]"
    >
      {/* Decorative Subtle Background Grids (CSS Only, zero JS) */}
      <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>ELITE DIGITAL ENGINEERING & BRAND AGENT</span>
            </div>

            {/* H1 Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              We Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#F97316]">High-Performance</span> Digital Experiences.
            </h1>

            {/* Body Copy */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
              NorthPeak Digital crafts lightning-fast web applications, conversion-focused UI/UX design systems, and scalable brand identities for ambitious companies that demand <strong className="text-white font-semibold">100/100 Lighthouse performance</strong> and measurable revenue growth.
            </p>

            {/* Value Proposition Pills */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-neutral-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span>Sub-Second Page Load Speeds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span>WCAG AA Accessibility</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span>Zero Layout Shift (CLS)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base btn-hover-effect shadow-xl shadow-orange-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
              >
                <span>Book Strategic Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-base border border-neutral-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
              >
                <span>Explore Client Case Studies</span>
              </a>
            </div>

            {/* Social Proof Bar with zero network-latency vector avatars */}
            <div className="pt-6 border-t border-neutral-800/80 flex items-center gap-6">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-[#111111] bg-gradient-to-tr from-orange-600 to-amber-500 text-white text-xs font-extrabold shadow-md">
                  MV
                </div>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-[#111111] bg-gradient-to-tr from-emerald-600 to-teal-400 text-white text-xs font-extrabold shadow-md">
                  ER
                </div>
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-[#111111] bg-gradient-to-tr from-indigo-600 to-purple-500 text-white text-xs font-extrabold shadow-md">
                  DS
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" aria-hidden="true" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">5.0 / 5.0</span>
                </div>
                <p className="text-xs text-neutral-400 font-medium mt-0.5">
                  Trusted by 180+ founders, CTOs & growth teams
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic Preview Card (Pure CSS/SVG - Zero External Network Latency for LCP) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-6 border border-neutral-800 shadow-2xl bg-[#161616] overflow-hidden">
              
              {/* Top Card Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-neutral-400 font-mono ml-2">northpeak.app/core-vitals</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                  <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>100 / 100 Performance</span>
                </div>
              </div>

              {/* Lighthouse Score Meters */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Lighthouse Speed</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black text-emerald-400">100</span>
                    <span className="text-xs text-emerald-500 font-semibold">/100</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-emerald-400 h-1.5 rounded-full w-full" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/90 border border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Core Web Vitals</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black text-[#F97316]">0.2s</span>
                    <span className="text-xs text-emerald-400 font-medium">Passed</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-[#F97316] h-1.5 rounded-full w-[98%]" />
                  </div>
                </div>
              </div>

              {/* Zero-Latency SVG Dashboard Showcase */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-950 p-4">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-3">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PRODUCTION METRICS
                  </span>
                  <span>TTFB: 18ms</span>
                </div>

                {/* SVG Live Metric Waves */}
                <div className="h-32 w-full flex items-end">
                  <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" aria-hidden="true">
                    <defs>
                      <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 90 Q 50 30, 100 60 T 200 40 T 300 20 T 400 10 L 400 120 L 0 120 Z"
                      fill="url(#metricGrad)"
                    />
                    <path
                      d="M 0 90 Q 50 30, 100 60 T 200 40 T 300 20 T 400 10"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="3"
                    />
                    <circle cx="300" cy="20" r="5" fill="#F97316" className="animate-ping" />
                    <circle cx="300" cy="20" r="4" fill="#FFFFFF" />
                  </svg>
                </div>

                <div className="mt-3 pt-3 border-t border-neutral-900 flex items-center justify-between text-xs font-semibold text-white">
                  <span className="text-neutral-400">
                    Target: <strong className="text-white">90%+ Performance Guaranteed</strong>
                  </span>
                  <span className="text-[#F97316] flex items-center gap-1 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                    <Shield className="w-3.5 h-3.5" aria-hidden="true" /> WCAG AA Compliant
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
