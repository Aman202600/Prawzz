import React from 'react';
import {
  Compass,
  UserCheck,
  Code2,
  Rocket,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { LEARNING_JOURNEY_STEPS } from '../../data/educationData';

const iconMap = {
  Compass: Compass,
  UserCheck: UserCheck,
  Code2: Code2,
  Rocket: Rocket,
};

export default function LearningJourney({ onEnquireClick }) {
  return (
    <section id="journey" className="py-16 sm:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Path to Mastery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            Your 4-Step Learning Journey
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            From your initial skills diagnostic to launching your capstone project portfolio, our structured milestone framework keeps you accountable.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {LEARNING_JOURNEY_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Compass;

            return (
              <div
                key={step.step}
                className="relative p-7 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-indigo-500/30 group-hover:text-indigo-400 transition-colors">
                      {step.step}
                    </span>

                    <div className="h-12 w-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-[11px] font-bold text-slate-500 group-hover:text-indigo-400 transition-colors">
                  <span>Milestone {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onEnquireClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
          >
            <span>Start Step 1: Submit Free Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

