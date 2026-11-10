import React from 'react';
import {
  X,
  BookOpen,
  Calendar,
  Layers,
  CheckCircle2,
  Rocket,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function ProgrammeDetailModal({
  programme,
  isOpen,
  onClose,
  onEnquireProgramme
}) {
  if (!isOpen || !programme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-slate-900 text-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-700 z-10 p-6 sm:p-8 animate-scaleUp">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {programme.category}
            </span>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              {programme.badge}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
            {programme.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            {programme.overview}
          </p>
        </div>

        {/* Quick Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs mb-6">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Duration & Effort</span>
            <span className="font-semibold text-slate-200">{programme.duration}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Skill Level</span>
            <span className="font-semibold text-indigo-300">{programme.level}</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Format</span>
            <span className="font-semibold text-slate-200">{programme.format}</span>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-800/40 text-xs text-indigo-200 mb-6 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Prerequisites:</strong> {programme.prerequisites}
          </div>
        </div>

        {/* Capstone Project Spotlight */}
        {programme.capstoneProject && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-950 to-purple-950/40 border border-indigo-800/50 mb-6">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Rocket className="w-4 h-4 text-indigo-400" />
              <span>Flagship Capstone Project</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">
              {programme.capstoneProject.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {programme.capstoneProject.description}
            </p>
          </div>
        )}

        {/* Week-by-Week Modules */}
        <div className="space-y-4 mb-6">
          <h3 className="text-base font-bold font-serif text-white">
            Curriculum & Module Breakdown
          </h3>
          <div className="space-y-3">
            {programme.modules.map((mod, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                    {mod.week}
                  </span>
                  <span className="text-slate-400 text-[11px]">{mod.topics.length} core learning objectives</span>
                </div>
                <h4 className="text-sm font-bold text-slate-200">{mod.title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-slate-300">
                  {mod.topics.map((t, tidx) => (
                    <div key={tidx} className="flex items-start gap-2">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Tags */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Technologies & Frameworks Learned
          </p>
          <div className="flex flex-wrap gap-2">
            {programme.skills.map((s, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 text-indigo-200 text-xs font-mono">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            * Limited cohort capacity to guarantee 1:1 mentorship quality.
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs font-bold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquireProgramme(programme);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
            >
              <span>Enquire for this Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

