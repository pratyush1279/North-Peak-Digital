import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, Zap, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookConsultation }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#161616] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-xl bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
          aria-label="Close service details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{service.impactMetric}</span>
          </div>
          <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h3>
          <p className="text-neutral-300 text-base leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Timeline & SLA Badge */}
        <div className="my-6 p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-neutral-300">
            <Clock className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
            <span className="font-medium">Estimated Timeline:</span>
            <span className="font-bold text-white">{service.timeline}</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            SLA Guaranteed
          </span>
        </div>

        {/* Core Capabilities Checklist */}
        <div className="space-y-4 my-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
            Core Features & Capabilities
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="space-y-3 my-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
            Tangible Deliverables
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.deliverables.map((deliv, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300"
              >
                {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm btn-hover-effect focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
          >
            <span>Request Proposal for {service.title}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-sm font-semibold border border-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
