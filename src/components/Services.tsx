import React, { useState } from 'react';
import { Code2, LayoutGrid, Sparkles, TrendingUp, Server, SearchCheck, ArrowRight, Zap } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { Service } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
      default:
        return <Zap className="w-6 h-6 text-[#F97316]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-[#111111] text-white relative border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] text-xs font-bold uppercase tracking-wider">
            <span>Core Capabilities</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Precision Engineering & Design Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            We don't do cookie-cutter templates. Every service is delivered with zero-bloat standards, high accessibility compliance, and measurable business performance.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-8 flex flex-col justify-between hover:border-orange-500/50 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="space-y-5">
                {/* Top Icon Badge & Metric */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    {service.impactMetric}
                  </span>
                </div>

                {/* Service H3 Heading */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#F97316] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Deliverable Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">Timeline: {service.timeline}</span>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-md px-2 py-1"
                  aria-label={`View full details for ${service.title}`}
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={() => {
          if (selectedService) {
            onSelectService(selectedService.title);
          }
        }}
      />
    </section>
  );
};
