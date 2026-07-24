import React, { useState } from 'react';
import { Star, ArrowUpRight, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES_DATA, TESTIMONIALS_DATA } from '../data/agencyData';

export const Results: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'testimonials'>('cases');

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="py-24 bg-[#111111] text-white relative border-t border-neutral-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>Measurable Outcomes</span>
            </div>
            <h2 id="results-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Case Studies & Executive Reviews
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-normal">
              Explore how our engineering rigor translates into direct financial growth and speed benchmarks for our clients.
            </p>
          </div>

          {/* Tab Filter Controls */}
          <div className="inline-flex p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('cases')}
              type="button"
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                activeTab === 'cases'
                  ? 'bg-[#F97316] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
              aria-selected={activeTab === 'cases'}
              role="tab"
            >
              Case Studies (3)
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              type="button"
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                activeTab === 'testimonials'
                  ? 'bg-[#F97316] text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
              aria-selected={activeTab === 'testimonials'}
              role="tab"
            >
              Testimonials (4)
            </button>
          </div>
        </div>

        {/* Case Studies Content */}
        {activeTab === 'cases' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {CASE_STUDIES_DATA.map((study) => (
              <article
                key={study.id}
                className="group flex flex-col justify-between rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Case Study Image Wrapper */}
                  <div className="relative h-56 overflow-hidden bg-neutral-950">
                    <img
                      src={study.image}
                      alt={study.imageAlt}
                      width="800"
                      height="450"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#F97316]">
                      <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{study.client}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#F97316] transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Key Stats Bar */}
                    <div className="pt-2 grid grid-cols-3 gap-2">
                      {study.stats.map((stat, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80 text-center">
                          <div className="text-base font-extrabold text-[#F97316]">{stat.value}</div>
                          <div className="text-[10px] text-neutral-400 font-medium truncate mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Tags */}
                <div className="p-6 pt-0 border-t border-neutral-800/80 mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-neutral-400 flex items-center gap-1 group-hover:text-white">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Testimonials Content */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {TESTIMONIALS_DATA.map((item) => (
              <figure
                key={item.id}
                className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between space-y-6 relative hover:border-neutral-700 transition-all shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" aria-hidden="true" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-neutral-800" aria-hidden="true" />
                  </div>

                  <blockquote className="text-base text-neutral-200 leading-relaxed font-normal italic">
                    "{item.content}"
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={`${item.name}, ${item.role} at ${item.company}`}
                      width="48"
                      height="48"
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#F97316]/30"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <figcaption className="text-sm font-bold text-white">{item.name}</figcaption>
                      <p className="text-xs text-neutral-400 font-medium">{item.role}, <span className="text-neutral-300 font-semibold">{item.company}</span></p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Verified Result</span>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
