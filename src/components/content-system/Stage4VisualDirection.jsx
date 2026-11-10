import React from 'react';
import {
  Palette,
  Type,
  Layout,
  Image as ImageIcon,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { VISUAL_THEMES } from '../../data/contentSystemData';

export default function Stage4VisualDirection({
  selectedThemeId,
  setSelectedThemeId,
  onNextStage
}) {
  const typographyPairs = [
    {
      title: 'Modern Authority',
      headingFont: 'Playfair Display / Serif Bold',
      bodyFont: 'Plus Jakarta Sans / Medium',
      desc: 'Blends classic editorial prestige with contemporary SaaS legibility.'
    },
    {
      title: 'Silicon Valley Minimalist',
      headingFont: 'Outfit / Extra Bold',
      bodyFont: 'Inter / Regular',
      desc: 'High-contrast geometric headers favored by AI founders and engineers.'
    }
  ];

  const imagePrompts = [
    {
      title: 'Slide 1 (Hook) Hero Concept',
      prompt: 'Minimalist 3D isometric glass cube glowing with neural synapses, floating against a dark matte obsidian background, cinematic lighting, 8k octane render.'
    },
    {
      title: 'Slide 3 (Solopreneur Scale) Graphic',
      prompt: 'Abstract architectural blueprint showing a single central node controlling multiple automated satellites, subtle violet laser lines, ultra clean aesthetic.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider border border-violet-500/20">
          <Palette className="w-3.5 h-3.5" />
          <span>Stage 4 • Visual Design Recommendations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
          AI Visual Styling & Art Direction
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Design systems tailored for high-conversion social feeds. Select from engineered color palettes, typography pairings, and layout structures.
        </p>
      </div>

      {/* 1. Color Palette Selector */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Palette className="w-4 h-4 text-violet-400" />
            <span>Select Brand Color Palette</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">Real-time Preview Binding</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {VISUAL_THEMES.map((theme) => {
            const isSelected = selectedThemeId === theme.id;

            return (
              <div
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-violet-500 ring-2 ring-violet-500/30 bg-slate-950 shadow-lg'
                    : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-white">{theme.name}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-violet-400" />}
                </div>

                {/* Swatch Previews */}
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-950 border border-slate-700" />
                  <span className="w-5 h-5 rounded-full bg-indigo-500" />
                  <span className="w-5 h-5 rounded-full bg-violet-400" />
                  <span className="w-5 h-5 rounded-full bg-slate-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Typography Pairings */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <Type className="w-4 h-4 text-indigo-400" />
          <span>Recommended Typography Pairings</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {typographyPairs.map((pair, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-violet-300 font-mono">{pair.title}</span>
              <div className="text-xs space-y-1">
                <p className="text-white font-bold">Header: <span className="font-serif">{pair.headingFont}</span></p>
                <p className="text-slate-300">Body: <span className="font-sans">{pair.bodyFont}</span></p>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">{pair.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Layout & Background Recommendations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Layout Advice */}
        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Layout className="w-4 h-4 text-emerald-400" />
            <span>Optimal Grid & Padding Layout</span>
          </h4>
          <ul className="text-xs text-slate-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>4:5 Aspect Ratio</strong> (1200x1500px): Captures maximum vertical screen real-estate on mobile.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>60px Safe Zone</strong>: Keeps text clear of UI overlays (LinkedIn top banner and bottom carousel pagination).</span>
            </li>
          </ul>
        </div>

        {/* Background Advice */}
        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>Background Style & Contrast</span>
          </h4>
          <ul className="text-xs text-slate-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Subtle Mesh Glow</strong>: Soft radial background gradient draws reader focus directly to the central headline.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>High WCAG Contrast</strong>: 14:1 contrast ratio ensures effortless outdoor sunlight reading.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 4. AI Imagery Prompts for Visuals */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-3 shadow-xl">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-pink-400" />
          <span>Generative AI Visual Asset Prompts (Midjourney / DALL-E)</span>
        </h3>

        <div className="space-y-3">
          {imagePrompts.map((p, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
              <p className="font-bold text-pink-300 font-mono">{p.title}</p>
              <p className="text-slate-300 font-mono bg-slate-900 p-2 rounded-lg select-all">
                {p.prompt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Step CTA */}
      <div className="flex justify-end pt-2">
        <button
          onClick={onNextStage}
          className="px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all active:scale-95"
        >
          <span>Open Interactive Carousel Studio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

