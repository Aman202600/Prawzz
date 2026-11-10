import React from 'react';
import {
  Terminal,
  Briefcase,
  Cpu,
  Users,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../../data/educationData';

const iconMap = {
  Terminal: Terminal,
  Briefcase: Briefcase,
  Cpu: Cpu,
  Users: Users,
  TrendingUp: TrendingUp,
};

export default function WhyChooseUsEdu() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The FutureSkill Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            Engineered for Real-World Competence
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Most online bootcamps rely on recorded videos and trivial toy exercises. We built a rigorous, mentor-driven environment where you engineer deployable solutions.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US_POINTS.map((pillar, idx) => {
            const IconComp = iconMap[pillar.icon] || Terminal;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-5 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] font-bold text-indigo-400 uppercase tracking-wider">
                  Verified Curriculum Standard
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: Traditional Courses vs FutureSkill AI */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-lg font-bold font-serif text-white">
              How We Compare with Traditional Recorded Courses
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Why our project-first approach produces industry-ready engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Traditional Courses */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                Traditional Recorded Bootcamps
              </span>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Dozens of hours of passive video lectures with low retention</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Outdated copy-paste tutorial clones (To-Do apps, MNIST digits)</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>No live code reviews from working senior engineers</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Generic completion certificates ignored by tech recruiters</span>
                </div>
              </div>
            </div>

            {/* FutureSkill AI Platform */}
            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/60 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                FutureSkill AI Model
              </span>
              <div className="space-y-2 text-slate-200">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>70% time spent coding in interactive live problem-solving labs</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Real enterprise architectures: RAG, LangChain, PyTorch, Next.js</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Weekly 1:1 GitHub PR reviews with dedicated engineering mentors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Public GitHub project portfolio showcasing architecture defense</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

