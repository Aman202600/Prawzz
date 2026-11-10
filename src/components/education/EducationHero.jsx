import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2,
  Star,
  Users,
  ShieldCheck,
  Award,
  Terminal,
  Cpu
} from 'lucide-react';
import { TRUST_METRICS } from '../../data/educationData';

export default function EducationHero({ onExploreClick, onEnquireClick }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-[128px]" />
        <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-cyan-600/15 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold backdrop-blur-sm shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Next-Gen Industry Skills for Students & Young Professionals</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white leading-[1.12]">
              Build Real-World Skills. <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                Become Future Ready.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Learn practical Artificial Intelligence and digital skills through hands-on projects, expert guidance, and industry-focused programmes.
            </p>

            {/* Interactive CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center justify-center gap-2 transition-all active:scale-95 group"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onEnquireClick}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 font-bold text-sm backdrop-blur-sm transition-all"
              >
                Enquire Now & Get Syllabus
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Passive Lectures</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Code & Project Driven</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Live 1:1 Industry Mentorship</span>
              </span>
            </div>

          </div>

          {/* Right Column: High-Tech Educational Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-blue-600 to-violet-600 opacity-30 blur-lg" />

              {/* Terminal Code Preview Card */}
              <div className="relative rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">futureskill_ai_lab.py</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Live Session
                  </span>
                </div>

                {/* Simulated Code Block */}
                <div className="font-mono text-xs sm:text-[13px] text-slate-300 space-y-2 bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 leading-relaxed overflow-x-auto">
                  <p><span className="text-violet-400">from</span> futureskill <span className="text-violet-400">import</span> NeuralAgent, VectorEngine</p>
                  <p><span className="text-slate-500"># Initialize autonomous research pipeline</span></p>
                  <p><span className="text-blue-400">agent</span> = NeuralAgent(model=<span className="text-emerald-400">"claude-3.5-sonnet"</span>)</p>
                  <p><span className="text-blue-400">rag_db</span> = VectorEngine.load_knowledge_base(<span className="text-emerald-400">"finance_corpus"</span>)</p>
                  <p><span className="text-blue-400">result</span> = agent.synthesize_insights(rag_db)</p>
                  <p className="text-emerald-400">➜ [Success] Accuracy: 98.4% | Latency: 124ms</p>
                </div>

                {/* Floating Metric Snippet */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/70">
                    <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span>4.92 / 5.0</span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-400 mt-1">Student Satisfaction Score</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/70">
                    <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-bold">
                      <Code2 className="w-4 h-4" />
                      <span>18+ Projects</span>
                    </div>
                    <p className="text-[11px] font-medium text-slate-400 mt-1">Built & Deployed in Public</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Indicators Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_METRICS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-left">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-serif">{stat.value}</p>
              <p className="text-xs font-bold text-indigo-300 mt-1">{stat.label}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{stat.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

