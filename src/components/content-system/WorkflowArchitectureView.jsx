import React from 'react';
import {
  Workflow,
  ArrowDown,
  Cpu,
  Bot,
  Palette,
  Cloud,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  Info
} from 'lucide-react';
import { RECOMMENDED_AI_TOOLS, WORKFLOW_STAGES } from '../../data/contentSystemData';

export default function WorkflowArchitectureView({ onBackToStudio }) {
  const workflowNodes = [
    { title: '1. Founder Idea Input', desc: 'Raw voice memo, unpolished bullet points, or industry news link.' },
    { title: '2. AI Research', desc: 'Web grounding, statistical validation, and competitive thesis lookup via ChatGPT/Claude.' },
    { title: '3. Content Structuring', desc: 'Framing problem, cognitive contrast, and key takeaways into 5-8 slide narrative.' },
    { title: '4. Headline Generation', desc: 'High-converting thumb-stopping hooks adhering to character limits.' },
    { title: '5. Slide Copy Generation', desc: 'Concise subheadlines and data points optimized for mobile reading.' },
    { title: '6. Visual Design Generation', desc: 'Auto-applying high-contrast themes, typography hierarchy, and safe margins.' },
    { title: '7. Carousel Preview', desc: 'Founder preview in interactive 4:5 / 1:1 canvas.' },
    { title: '8. Founder Review', desc: 'Human-in-the-loop validation, tone editing, and final approval.' },
    { title: '9. Export and Publish', desc: 'Multi-page PDF upload to LinkedIn and PNG carousel export to Instagram.' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider border border-violet-500/20">
          <Workflow className="w-3.5 h-3.5" />
          <span>System Blueprint & Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
          AI-Powered Content Creation System Architecture
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          How a non-technical startup founder can automate professional social media carousel production without hiring an in-house graphic designer or copywriter.
        </p>
      </div>

      {/* 1. Workflow Diagram */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Workflow className="w-4 h-4 text-violet-400" />
            <span>End-to-End Workflow Pipeline</span>
          </h3>
          <span className="text-[11px] font-mono text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded">
            9-Stage Sequential Flow
          </span>
        </div>

        {/* Linear Visual Stepper Diagram */}
        <div className="relative space-y-3">
          {workflowNodes.map((node, idx) => (
            <div key={idx} className="relative">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-violet-500/50 transition-all flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">{node.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{node.desc}</p>
                </div>
              </div>

              {idx < workflowNodes.length - 1 && (
                <div className="flex justify-center my-1">
                  <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Recommended Tools & Integrations */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span>Recommended Technology Stack & Role Breakdown</span>
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Info className="w-3.5 h-3.5 text-indigo-400" />
            <span>Proposed Integrations</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RECOMMENDED_AI_TOOLS.map((tool, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{tool.name}</h4>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                    {tool.category}
                  </span>
                </div>
                <p className="text-xs font-semibold text-violet-400 mt-1">{tool.role}</p>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">{tool.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                <strong className="text-slate-300">Integration:</strong> {tool.integration}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Automation Process Explained */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>How to Implement the Zero-Code Repeatable Workflow</span>
        </h3>

        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            <strong>Step 1 (Idea Capture):</strong> Founder speaks a 2-minute voice note into Telegram or Slack, transcribed via Whisper into text.
          </p>
          <p>
            <strong>Step 2 (Orchestration with Make/n8n):</strong> The webhook triggers Claude 3.5 Sonnet to draft the 8 structured slides, outputting clean JSON adhering to strict word count and character bounds.
          </p>
          <p>
            <strong>Step 3 (Automated Layout in Canva):</strong> The JSON payload hits Canva's Bulk Create API or Bannerbear, injecting headlines and copy into pre-designed brand templates.
          </p>
          <p>
            <strong>Step 4 (Review & Cloud Archival):</strong> The compiled PDF is automatically deposited in Google Drive (`/Carousels/Ready_For_Approval`). The founder receives a mobile notification with a 1-click preview link to review before publishing.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
          * Architectural Demonstration Note: In production, API keys for Claude, Canva, and Make.com are connected. In this demonstration prototype, the structured data flow is simulated in React state.
        </div>
      </div>

      {/* Return to Studio */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onBackToStudio}
          className="px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all active:scale-95"
        >
          <span>Return to Interactive Carousel Studio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

