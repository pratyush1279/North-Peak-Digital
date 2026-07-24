import React, { useEffect, useState, useRef } from 'react';
import { Zap, Target, ShieldCheck, Clock, CheckCircle2, Award } from 'lucide-react';
import { WHY_CHOOSE_US_DATA, METRICS_DATA } from '../data/agencyData';

export const WhyChooseUs: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getDifferentiatorIcon = (icon: string) => {
    switch (icon) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      default:
        return <Award className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="why-us"
      ref={sectionRef}
      aria-labelledby="why-us-heading"
      className="py-24 bg-[#161616] text-white relative border-t border-neutral-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] text-xs font-bold uppercase tracking-wider">
            <span>The NorthPeak Advantage</span>
          </div>
          <h2 id="why-us-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why High-Growth Companies Partner With Us
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            We operate at the intersection of senior software craft, speed, and conversion psychology.
          </p>
        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                  {getDifferentiatorIcon(item.icon)}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#F97316] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Counter Stats Bar */}
        <div className="rounded-2xl glass-panel p-8 sm:p-10 border border-neutral-800 bg-neutral-900/90 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white">Proven Engineering Track Record</h3>
            <p className="text-sm text-neutral-400">Measured across all active agency production builds</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
            {METRICS_DATA.map((metric, idx) => (
              <div key={idx} className={`pt-6 sm:pt-0 ${idx !== 0 ? 'sm:pl-8' : ''} text-center sm:text-left space-y-2`}>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white flex items-baseline justify-center sm:justify-start">
                  <span className="text-[#F97316]">{metric.prefix}</span>
                  <span>{hasAnimated ? metric.value : 0}</span>
                  <span className="text-[#F97316]">{metric.suffix}</span>
                </div>
                <h4 className="text-base font-bold text-neutral-200">{metric.label}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
