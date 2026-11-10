import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowLeft, Clock, Sparkles, Wand2, Workflow } from 'lucide-react';

export default function ContentSystemPlaceholder() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center p-6 bg-slate-950 text-white">
      <div className="max-w-xl w-full text-center space-y-6 bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-md">
        
        <div className="h-16 w-16 mx-auto rounded-2xl bg-violet-500/20 text-violet-400 border border-violet-500/30 flex items-center justify-center shadow-lg">
          <Layers className="w-8 h-8" />
        </div>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-semibold border border-violet-500/20 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Production Roadmap — Phase 3</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-white">
            AI-Powered Content Creation System
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Phase 1 and Phase 2 are completed and tested before unlocking the Phase 3 SaaS dashboard.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-left text-xs space-y-2 text-slate-300">
          <p className="font-bold text-white uppercase tracking-wider text-[10px]">Phase 3 Planned Modules:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Stage 1-6 Automated Carousel Production Workflow</li>
            <li>Interactive Live Slide Editor (Hook, Context, Insights, CTA)</li>
            <li>Sample Carousel: "5 Ways AI Is Changing the Future of Work"</li>
            <li>Automation Architecture Diagram (Founder → Research → Design → Export)</li>
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

