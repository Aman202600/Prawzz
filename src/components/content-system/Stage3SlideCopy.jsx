import React from 'react';
import {
  FileText,
  Sparkles,
  ArrowRight,
  Edit3,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Stage3SlideCopy({
  slides,
  setSlides,
  onNextStage
}) {
  const handleHeadlineChange = (id, newHeadline) => {
    setSlides(slides.map((s) => (s.id === id ? { ...s, headline: newHeadline } : s)));
  };

  const handleSubheadlineChange = (id, newSub) => {
    setSlides(slides.map((s) => (s.id === id ? { ...s, subheadline: newSub } : s)));
  };

  const handleAddSlide = () => {
    const newId = slides.length + 1;
    const newSlide = {
      id: newId,
      type: 'insight',
      tag: `0${newId} / EXTRA INSIGHT`,
      headline: 'New Insight Headline',
      subheadline: 'Enter the core takeaway, supporting observation, or actionable nuance here.',
      badge: 'Custom Slide',
      note: 'User-added slide module.'
    };
    setSlides([...slides, newSlide]);
  };

  const handleRemoveSlide = (id) => {
    if (slides.length <= 4) {
      alert('A minimum of 4 slides is recommended for a viable carousel.');
      return;
    }
    setSlides(slides.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider border border-violet-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Stage 3 • Headline & Slide Copy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
            Structured Slide-by-Slide Copywriting
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Every slide is precision-crafted following high-performing LinkedIn and Instagram copywriting frameworks (Hook → Friction → 3 Core Shifts → Action → CTA).
          </p>
        </div>

        <button
          onClick={handleAddSlide}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all shrink-0"
        >
          <Plus className="w-4 h-4 text-violet-400" />
          <span>Add Custom Slide</span>
        </button>
      </div>

      {/* Slide Cards List */}
      <div className="space-y-4">
        {slides.map((slide, index) => {
          const isHook = slide.type === 'hook';
          const isCta = slide.type === 'cta';

          return (
            <div
              key={slide.id}
              className={`p-6 rounded-3xl border transition-all ${
                isHook
                  ? 'bg-slate-900 border-violet-500/60 shadow-lg shadow-violet-500/10'
                  : isCta
                  ? 'bg-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Slide {index + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {slide.tag}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.2 rounded">
                    {slide.badge}
                  </span>
                </div>

                {slides.length > 4 && (
                  <button
                    onClick={() => handleRemoveSlide(slide.id)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Remove Slide"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Editable Headline */}
              <div className="space-y-1 mb-3">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Edit3 className="w-3 h-3 text-slate-400" /> Headline (Thumb-Stopping Hook)
                </label>
                <input
                  type="text"
                  value={slide.headline}
                  onChange={(e) => handleHeadlineChange(slide.id, e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-bold text-white focus:outline-none focus:border-violet-500 font-serif"
                />
              </div>

              {/* Editable Subheadline */}
              <div className="space-y-1 mb-3">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <Edit3 className="w-3 h-3 text-slate-400" /> Subheadline / Supporting Explanation
                </label>
                <textarea
                  rows={2}
                  value={slide.subheadline}
                  onChange={(e) => handleSubheadlineChange(slide.id, e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-violet-500 leading-relaxed"
                />
              </div>

              {/* Slide Rationale Note */}
              <p className="text-[11px] text-slate-400 italic">
                * Strategic Objective: {slide.note}
              </p>
            </div>
          );
        })}
      </div>

      {/* Navigation CTA */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-800">
        <span className="text-xs text-slate-400">
          Total Slides Configured: <strong className="text-white">{slides.length}</strong>
        </span>

        <button
          onClick={onNextStage}
          className="px-6 py-3.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all active:scale-95"
        >
          <span>Proceed to Visual Direction</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

