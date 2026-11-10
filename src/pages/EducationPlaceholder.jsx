import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Clock, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function EducationPlaceholder() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center p-6 bg-slate-900 text-white">
      <div className="max-w-xl w-full text-center space-y-6 bg-slate-800/80 p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-md">
        
        <div className="h-16 w-16 mx-auto rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shadow-lg">
          <GraduationCap className="w-8 h-8" />
        </div>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold border border-indigo-500/20 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Production Roadmap — Phase 2</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-white">
            AI Education Landing Page
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Phase 1 (Practo for Animals) must be reviewed before proceeding to Phase 2.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 text-left text-xs space-y-2 text-slate-300">
          <p className="font-bold text-white uppercase tracking-wider text-[10px]">Phase 2 Planned Modules:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Interactive Course Catalog (AI, Data Analytics, Full Stack, Generative AI)</li>
            <li>Hands-on Student Learning Journey & Curriculum Accordion</li>
            <li>Practical Industry Projects Showcase & Illustrative Testimonials</li>
            <li>Validated Lead Capture & Enquiry System with Success State</li>
          </ul>
        </div>

        <div className="pt-2">
          <Link
            to="/animals"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Practo for Animals (Phase 1)</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

