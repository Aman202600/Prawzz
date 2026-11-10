import React from 'react';
import {
  Lightbulb,
  Sparkles,
  ArrowRight,
  Layers,
  Sliders,
  Send,
  Linkedin,
  Instagram,
  CheckCircle2
} from 'lucide-react';

export default function Stage1IdeaInput({
  ideaForm,
  setIdeaForm,
  onGenerate,
  isGenerating
}) {
  const tones = [
    'Thought-Provoking & Actionable',
    'Bold & Direct',
    'Educational & Step-by-Step',
    'Storytelling & Vulnerable',
    'Analytical & Data-Backed'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider border border-violet-500/20">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>Stage 1 • Founder Ideation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
          Enter Your Raw Content Idea
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Dump your unpolished thoughts, customer insights, or voice memo transcripts. The AI pipeline will structure, research, and format them into an engagement-optimized carousel.
        </p>
      </div>

      {/* Main Input Form Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        
        {/* Raw Idea Textarea */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Raw Content Idea / Founder Brain Dump *
          </label>
          <textarea
            rows={4}
            value={ideaForm.rawIdea}
            onChange={(e) => setIdeaForm({ ...ideaForm, rawIdea: e.target.value })}
            placeholder="e.g. AI is making routine drafting free, so writing generic code or reports isn't valuable anymore. The real skill is knowing what to prompt, how to audit the output, and how to glue microservices together. Solo founders can now behave like 20-person teams..."
            className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
          />
          <p className="text-[11px] text-slate-500 mt-1">
            Tip: Be authentic. Mention real personal learnings, client conversations, or counterintuitive observations.
          </p>
        </div>

        {/* Topic & Target Audience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Carousel Main Topic *
            </label>
            <input
              type="text"
              value={ideaForm.topic}
              onChange={(e) => setIdeaForm({ ...ideaForm, topic: e.target.value })}
              placeholder="e.g. 5 Ways AI Is Changing the Future of Work"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Target Audience *
            </label>
            <input
              type="text"
              value={ideaForm.targetAudience}
              onChange={(e) => setIdeaForm({ ...ideaForm, targetAudience: e.target.value })}
              placeholder="e.g. Startup Founders, Engineering Leads, Tech PMs"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>

        {/* Platform & Preferred Tone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          {/* Platform Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Primary Distribution Platform *
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setIdeaForm({ ...ideaForm, platform: 'LinkedIn' })}
                className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                  ideaForm.platform === 'LinkedIn'
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn (4:5)</span>
              </button>

              <button
                type="button"
                onClick={() => setIdeaForm({ ...ideaForm, platform: 'Instagram' })}
                className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                  ideaForm.platform === 'Instagram'
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white border-pink-500 shadow-md shadow-pink-600/30'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram (1:1 / 4:5)</span>
              </button>
            </div>
          </div>

          {/* Tone Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Preferred Tone of Voice *
            </label>
            <select
              value={ideaForm.tone}
              onChange={(e) => setIdeaForm({ ...ideaForm, tone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-violet-500 cursor-pointer"
            >
              {tones.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Number of Slides Slider */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Target Number of Slides: <span className="text-violet-400 font-bold">{ideaForm.slideCount} Slides</span>
            </label>
            <span className="text-[11px] text-slate-500 font-mono">
              Recommended: 7-9 slides for optimal LinkedIn scroll depth
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="10"
            step="1"
            value={ideaForm.slideCount}
            onChange={(e) => setIdeaForm({ ...ideaForm, slideCount: Number(e.target.value) })}
            className="w-full accent-violet-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>5 Slides (Quick Take)</span>
            <span>7 Slides (Standard)</span>
            <span>8 Slides (Deep Dive)</span>
            <span>10 Slides (Masterclass)</span>
          </div>
        </div>

        {/* CTA: Generate Content */}
        <div className="pt-4 border-t border-slate-800/80">
          <button
            type="button"
            onClick={onGenerate}
            disabled={isGenerating}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-75 text-white font-bold text-sm shadow-xl shadow-violet-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Synthesizing Research & Slide Copy...
              </span>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-violet-200" />
                <span>Generate Content & Slide Structure</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}

