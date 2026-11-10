import React from 'react';
import {
  Sparkles,
  Clock,
  BarChart,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Info
} from 'lucide-react';

export default function ProgrammesSection({ programmes, onSelectProgramme }) {
  return (
    <section id="programmes" className="py-16 sm:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Industry-Aligned Tracks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white">
              Explore Practical Programmes
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Carefully engineered curricula designed to transition aspiring students and tech professionals into job-ready AI, data, and software engineers.
            </p>
          </div>

          {/* Sample Disclaimer Tag */}
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-400 shrink-0">
            <Info className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Illustrative academic programmes for platform prototype.</span>
          </div>
        </div>

        {/* 5 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programmes.map((prog) => (
            <div
              key={prog.id}
              className={`group bg-slate-950/80 rounded-3xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 ${prog.borderGlow}`}
            >
              <div>
                
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    {prog.category}
                  </span>

                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {prog.badge}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-indigo-300 transition-colors">
                  {prog.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                  {prog.shortDesc}
                </p>

                {/* Duration & Level Meta */}
                <div className="grid grid-cols-2 gap-2 my-5 p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Duration</span>
                    <span className="font-semibold text-slate-200">{prog.duration.split('•')[0]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Level</span>
                    <span className="font-semibold text-indigo-300">{prog.level}</span>
                  </div>
                </div>

                {/* Skills Covered Pills */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Skills Acquired
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.skills.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 text-[11px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                    {prog.skills.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-500 text-[11px] font-mono">
                        +{prog.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectProgramme(prog)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 group-hover:shadow-md transition-all active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-indigo-300" />
                  <span>Explore Programme & Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

