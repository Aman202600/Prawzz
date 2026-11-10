import React, { useState } from 'react';
import {
  Eye,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Maximize2,
  Smartphone,
  Layers,
  Edit3,
  Palette,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { VISUAL_THEMES } from '../../data/contentSystemData';

export default function Stage5CarouselPreview({
  carousel,
  slides,
  setSlides,
  selectedThemeId,
  setSelectedThemeId,
  onNextStage
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState('portrait'); // 'portrait' (4:5) or 'square' (1:1)

  const activeTheme = VISUAL_THEMES.find((t) => t.id === selectedThemeId) || VISUAL_THEMES[0];
  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handleUpdateCurrentHeadline = (val) => {
    setSlides(slides.map((s, idx) => (idx === currentSlideIndex ? { ...s, headline: val } : s)));
  };

  const handleUpdateCurrentSubheadline = (val) => {
    setSlides(slides.map((s, idx) => (idx === currentSlideIndex ? { ...s, subheadline: val } : s)));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider border border-violet-500/20 mb-1">
            <Eye className="w-3.5 h-3.5" />
            <span>Stage 5 • Interactive Studio</span>
          </div>
          <h2 className="text-2xl font-extrabold font-serif text-white">
            Carousel Preview & Live Content Editor
          </h2>
        </div>

        {/* Studio Controls: Aspect Ratio & Theme */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Aspect Ratio Toggle */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setAspectRatio('portrait')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                aspectRatio === 'portrait' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              4:5 Portrait
            </button>
            <button
              onClick={() => setAspectRatio('square')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                aspectRatio === 'square' ? 'bg-violet-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              1:1 Square
            </button>
          </div>

          {/* Theme Selector */}
          <select
            value={selectedThemeId}
            onChange={(e) => setSelectedThemeId(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-white focus:outline-none focus:border-violet-500 cursor-pointer"
          >
            {VISUAL_THEMES.map((theme) => (
              <option key={theme.id} value={theme.id}>
                Theme: {theme.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Studio Workbench Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: The Interactive Canvas Preview */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Canvas Wrapper */}
          <div
            className={`w-full max-w-md rounded-3xl p-7 sm:p-9 shadow-2xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden select-none ${activeTheme.bgClass} ${
              aspectRatio === 'portrait' ? 'aspect-[4/5]' : 'aspect-square'
            }`}
          >
            {/* Top Bar on Slide */}
            <div className="flex items-center justify-between gap-3 relative z-10">
              {/* Author Chip */}
              <div className="flex items-center gap-2">
                <img
                  src={carousel.author.avatar}
                  alt={carousel.author.name}
                  className="w-7 h-7 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="text-[11px] font-bold leading-tight">{carousel.author.name}</p>
                  <p className="text-[9px] opacity-70 font-mono leading-none">{carousel.author.handle}</p>
                </div>
              </div>

              {/* Tag / Index pill */}
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${activeTheme.badgeColor}`}>
                {currentSlide.badge}
              </span>
            </div>

            {/* Middle Main Content */}
            <div className="my-auto space-y-4 relative z-10 py-4">
              <span className={`text-xs font-mono font-bold tracking-wider uppercase block ${activeTheme.tagColor}`}>
                {currentSlide.tag}
              </span>

              <h3 className={`text-2xl sm:text-3xl font-extrabold font-serif leading-[1.2] ${activeTheme.headlineColor}`}>
                {currentSlide.headline}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${activeTheme.subheadlineColor}`}>
                {currentSlide.subheadline}
              </p>
            </div>

            {/* Bottom Bar on Slide */}
            <div className="flex items-center justify-between pt-4 border-t border-current/10 relative z-10 text-[10px] font-mono opacity-70">
              <span>{carousel.platform} Carousel</span>
              <span>
                Slide {currentSlideIndex + 1} of {slides.length}
              </span>
            </div>

            {/* Ambient visual background glow inside card */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Slide Navigation Buttons */}
          <div className="flex items-center justify-between w-full max-w-md mt-5">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-800 flex items-center gap-1.5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Dots navigation */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlideIndex
                      ? `w-6 ${activeTheme.dotActive}`
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-800 flex items-center gap-1.5 transition-all"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Column: Live Text Editor for Selected Slide */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-violet-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Edit Current Slide {currentSlideIndex + 1}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                Live Synced
              </span>
            </div>

            {/* Edit Headline */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Headline (Title)
              </label>
              <input
                type="text"
                value={currentSlide.headline}
                onChange={(e) => handleUpdateCurrentHeadline(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-bold text-white focus:outline-none focus:border-violet-500 font-serif"
              />
            </div>

            {/* Edit Subheadline */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Subheadline / Description
              </label>
              <textarea
                rows={4}
                value={currentSlide.subheadline}
                onChange={(e) => handleUpdateCurrentSubheadline(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-violet-500 leading-relaxed"
              />
            </div>

            {/* Slide Filmstrip Thumbnail Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Jump to Slide
              </label>
              <div className="grid grid-cols-4 gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`p-2 rounded-xl border text-[11px] font-mono text-center transition-all ${
                      idx === currentSlideIndex
                        ? 'bg-violet-600 text-white border-violet-500 font-bold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Slide {idx + 1}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Proceed to Export CTA */}
          <button
            onClick={onNextStage}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Proceed to Export & Automation Handoff</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}

