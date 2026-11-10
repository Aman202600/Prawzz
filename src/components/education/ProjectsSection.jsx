import React, { useState } from 'react';
import {
  Code2,
  Rocket,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle,
  Terminal
} from 'lucide-react';
import { SAMPLE_PROJECTS } from '../../data/educationData';

export default function ProjectsSection({ onEnquireClick }) {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Deep Learning', 'LLMs & Agents', 'Analytics & BI', 'Web & AI'];

  const filteredProjects = selectedTag === 'All'
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter((p) => p.tag === selectedTag);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2 border border-indigo-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio-First Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white">
              Real-World Capstone Projects You'll Ship
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Every project is modeled after real industry engineering problems, committed to GitHub, and hosted on production cloud runtimes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  selectedTag === tag
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 sm:p-7 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {project.programme}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                    {project.difficulty}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Highlights Banner */}
                <div className="my-4 p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-emerald-400 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{project.highlights}</span>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Deployable GitHub Artifact
                </span>

                <button
                  onClick={onEnquireClick}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Build This in Programme</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

