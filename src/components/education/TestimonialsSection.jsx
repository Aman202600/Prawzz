import React from 'react';
import {
  Star,
  Quote,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../../data/educationData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Learner Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white">
              Student Perspectives & Experiences
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Read how practical project building and 1:1 mentorship prepare students for software engineering and data roles.
            </p>
          </div>

          {/* Compliance & Sample Data Badge */}
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 shrink-0">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Clearly identified illustrative sample testimonials.</span>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Star Rating & Quote Mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.content}"
                </p>

              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-indigo-300 mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-slate-500">
                    {item.programme} • {item.tag}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

