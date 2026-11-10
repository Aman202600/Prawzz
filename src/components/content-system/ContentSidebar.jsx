import React from 'react';
import {
  Lightbulb,
  Search,
  FileText,
  Palette,
  Eye,
  Download,
  Workflow,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function ContentSidebar({
  activeStage,
  setActiveStage,
  onResetToSample,
  slideCount
}) {
  const stages = [
    { id: 1, title: '1. Idea Input', icon: Lightbulb, badge: 'Stage 1' },
    { id: 2, title: '2. Research & Structure', icon: Search, badge: 'Stage 2' },
    { id: 3, title: '3. Slide Copy & Hooks', icon: FileText, badge: 'Stage 3' },
    { id: 4, title: '4. Visual Direction', icon: Palette, badge: 'Stage 4' },
    { id: 5, title: '5. Carousel Studio', icon: Eye, badge: 'Stage 5' },
    { id: 6, title: '6. Export & Handoff', icon: Download, badge: 'Stage 6' },
    { id: 7, title: 'Architecture & Tools', icon: Workflow, badge: 'Hub' },
  ];

  return (
    <aside className="w-full lg:w-64 bg-slate-900 border-r border-slate-800 p-4 sm:p-5 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        
        {/* Module Title */}
        <div className="flex items-center gap-2.5 px-2">
          <div className="h-8 w-8 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white leading-none">Content Engine</h3>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Founder SaaS Studio</p>
          </div>
        </div>

        {/* Workflow Progress Bar */}
        <div className="px-2">
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1.5">
            <span>Workflow Progress</span>
            <span className="text-violet-400">{Math.min(activeStage, 6)} / 6</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 rounded-full"
              style={{ width: `${(Math.min(activeStage, 6) / 6) * 100}%` }}
            />
          </div>
        </div>

        {/* Stage Navigation List */}
        <nav className="space-y-1">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            const isCompleted = activeStage > stage.id && stage.id <= 6;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{stage.title}</span>
                </div>

                {isCompleted && !isActive && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                )}

                {isActive && (
                  <ChevronRight className="w-3.5 h-3.5 text-violet-200 shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* Footer Utility Actions */}
      <div className="pt-6 border-t border-slate-800 space-y-2 mt-6">
        <button
          onClick={onResetToSample}
          className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
          <span>Load 5 Ways AI Sample</span>
        </button>

        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
          <div className="flex justify-between">
            <span>Current Slides:</span>
            <span className="font-bold text-white">{slideCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Target:</span>
            <span className="font-bold text-violet-400">LinkedIn / IG</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

