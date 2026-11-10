import React from 'react';
import {
  Search,
  Sparkles,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
  ListTree,
  Lightbulb,
  Cpu
} from 'lucide-react';
import { RESEARCH_OUTLINE } from '../../data/contentSystemData';

export default function Stage2Research({ topic, onNextStage }) {
  const aiTools = [
    {
      name: 'Claude 3.5 Sonnet',
      strength: 'Nuanced Reasoning & Hook Generation',
      badge: 'Primary Drafting LLM',
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300'
    },
    {
      name: 'ChatGPT-4o',
      strength: 'Real-time Web Grounding & Statistics',
      badge: 'Data Fact-Checking',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300'
    },
    {
      name: 'Google Gemini 1.5 Pro',
      strength: 'Long-Context Synthesis & PDF Ingestion',
      badge: 'Multimodal Research',
      color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider border border-violet-500/20">
          <Search className="w-3.5 h-3.5" />
          <span>Stage 2 • Research & Content Structure</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
          AI Topic Research & Strategic Narrative Arc
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          How modern LLMs transform a founder's 2-sentence raw thought into a validated, high-retention content structure with empirical insights.
        </p>
      </div>

      {/* Suggested AI Tools Banner */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Recommended AI Research Models Employed
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {aiTools.map((tool, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-gradient-to-br ${tool.color} border space-y-1.5`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">{tool.name}</span>
                <Bot className="w-4 h-4 opacity-75" />
              </div>
              <p className="text-[11px] text-slate-300">{tool.strength}</p>
              <span className="text-[10px] font-mono uppercase bg-slate-950/60 px-2 py-0.5 rounded inline-block mt-1">
                {tool.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Generated Main Topic Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase font-bold text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
            Synthesized Core Angle
          </span>
          <span className="text-xs text-slate-500">Confidence: 98.4%</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
          {topic || RESEARCH_OUTLINE.mainTopic}
        </h3>
      </div>

      {/* Key Insights Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span>Extracted Key Insights</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RESEARCH_OUTLINE.keyInsights.map((insight, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
              <span className="text-violet-400 font-bold shrink-0 mt-0.5">•</span>
              <span>{insight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Outline */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
          <ListTree className="w-4 h-4 text-indigo-400" />
          <span>Proven Carousel Narrative Framework</span>
        </div>
        <div className="space-y-2.5">
          {RESEARCH_OUTLINE.contentOutline.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
            >
              <span className="font-mono font-bold text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded sm:w-60">
                {item.stage}
              </span>
              <span className="text-slate-300 flex-1">{item.intent}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Important Points & Guardrails */}
      <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-200 space-y-2">
        <h4 className="font-bold text-white flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-indigo-400" />
          <span>Content Guardrails Applied</span>
        </h4>
        <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
          {RESEARCH_OUTLINE.importantPoints.map((pt, idx) => (
            <li key={idx}>{pt}</li>
          ))}
        </ul>
      </div>

      {/* Navigation CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onNextStage}
          className="px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all active:scale-95"
        >
          <span>Proceed to Headline & Slide Generation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

