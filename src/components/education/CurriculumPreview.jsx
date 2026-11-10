import React, { useState } from 'react';
import {
  BookOpen,
  Layers,
  Code2,
  CheckCircle2,
  FileText,
  Download,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PROGRAMMES_DATA } from '../../data/educationData';

export default function CurriculumPreview({ onEnquireClick }) {
  const [activeTrackId, setActiveTrackId] = useState(PROGRAMMES_DATA[0].id);
  const activeProgramme = PROGRAMMES_DATA.find((p) => p.id === activeTrackId) || PROGRAMMES_DATA[0];

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Syllabi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white">
              Curriculum Preview & Weekly Modules
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Explore week-by-week blueprints showing how theory directly connects to practical project implementations.
            </p>
          </div>

          <button
            onClick={onEnquireClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-500/40 hover:bg-indigo-500/10 text-indigo-300 hover:text-white text-xs font-bold transition-all shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Request Complete PDF Syllabi</span>
          </button>
        </div>

        {/* Track Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PROGRAMMES_DATA.map((prog) => {
            const isActive = prog.id === activeTrackId;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTrackId(prog.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <span>{prog.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Track Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Track Highlights Card */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {activeProgramme.category}
              </span>
              <h3 className="text-xl font-bold font-serif text-white mt-2">
                {activeProgramme.title}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {activeProgramme.overview}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Duration:</span>
                <span className="font-semibold text-slate-200">{activeProgramme.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Format:</span>
                <span className="font-semibold text-slate-200">{activeProgramme.format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Skill Level:</span>
                <span className="font-semibold text-indigo-300">{activeProgramme.level}</span>
              </div>
            </div>

            {/* Capstone Project Card */}
            {activeProgramme.capstoneProject && (
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/50 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                  Capstone Deliverable
                </span>
                <h4 className="text-xs font-bold text-white">
                  {activeProgramme.capstoneProject.title}
                </h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {activeProgramme.capstoneProject.description}
                </p>
              </div>
            )}

            <button
              onClick={onEnquireClick}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire for this Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Weekly Module Accordion / List */}
          <div className="lg:col-span-8 space-y-4">
            {activeProgramme.modules.map((mod, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {mod.week}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {mod.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Phase {idx + 1}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                  {mod.topics.map((topic, tidx) => (
                    <div key={tidx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

