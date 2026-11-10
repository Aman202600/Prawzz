import React from 'react';
import { Search, MapPin, Sparkles, ShieldCheck, Heart, ArrowRight, Clock, Star } from 'lucide-react';
import { LOCATIONS_LIST } from '../../data/animalsData';

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  onSearchSubmit,
  selectedCategory,
  onSelectCategory,
  categories
}) {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-stone-50 via-cream-50 to-white">
      {/* Background Decorative Blur circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-forest-900 text-xs font-semibold shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>India's Most Trusted Pet Healthcare & Wellness Directory</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif leading-[1.15]">
            Everything Your Pet Needs, <br className="hidden sm:inline" />
            <span className="text-forest-800 relative inline-block">
              All in One Place.
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-terracotta-400" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover trusted veterinary clinics, hospitals, boarding facilities and animal-care services near you.
          </p>

          {/* Prominent Search Bar Container */}
          <div className="pt-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSearchSubmit();
              }}
              className="bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-soft-lg border border-stone-200/90 flex flex-col md:flex-row items-stretch gap-2 transition-all hover:border-emerald-300"
            >
              {/* Service / Provider Input */}
              <div className="flex-1 flex items-center gap-3 px-3.5 py-2.5 rounded-xl sm:rounded-2xl bg-stone-50/80 hover:bg-stone-50 border border-transparent focus-within:border-emerald-500 focus-within:bg-white transition-all">
                <Search className="w-5 h-5 text-emerald-800 shrink-0" />
                <div className="w-full text-left">
                  <label htmlFor="service-search" className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Find Service or Provider
                  </label>
                  <input
                    id="service-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Surgery, Vaccination, Vet Clinic, Boarding..."
                    className="w-full bg-transparent text-sm font-medium text-stone-800 placeholder-stone-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Location Selector */}
              <div className="w-full md:w-64 flex items-center gap-3 px-3.5 py-2.5 rounded-xl sm:rounded-2xl bg-stone-50/80 hover:bg-stone-50 border border-transparent focus-within:border-emerald-500 focus-within:bg-white transition-all">
                <MapPin className="w-5 h-5 text-terracotta-500 shrink-0" />
                <div className="w-full text-left">
                  <label htmlFor="location-select" className="block text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Location
                  </label>
                  <select
                    id="location-select"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-sm font-medium text-stone-800 focus:outline-none cursor-pointer"
                  >
                    {LOCATIONS_LIST.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl sm:rounded-2xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20 active:scale-95 transition-all"
              >
                <span>Find Care</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </button>
            </form>
          </div>

          {/* Quick Service Categories Below Search Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-stone-600">
            <span className="text-stone-400 font-semibold text-[11px] mr-1">Quick Search:</span>
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-full border transition-all ${
                selectedCategory === 'all'
                  ? 'bg-forest-800 text-white border-forest-800 shadow-sm'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
              }`}
            >
              All Services
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-forest-800 text-white border-forest-800 shadow-sm'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
                }`}
              >
                <span>{cat.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Trust Indicators Strip */}
          <div className="pt-8 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-stone-200/60 shadow-soft-sm">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-extrabold text-stone-900 leading-none">1,400+</p>
                <p className="text-[11px] font-medium text-stone-500 mt-1">Verified Care Units</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-stone-200/60 shadow-soft-sm">
              <div className="p-2 rounded-xl bg-blue-100 text-blue-800">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-extrabold text-stone-900 leading-none">45,000+</p>
                <p className="text-[11px] font-medium text-stone-500 mt-1">Pets Treated</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-stone-200/60 shadow-soft-sm">
              <div className="p-2 rounded-xl bg-rose-100 text-rose-800">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-extrabold text-stone-900 leading-none">&lt; 15 mins</p>
                <p className="text-[11px] font-medium text-stone-500 mt-1">Emergency Dispatch</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-stone-200/60 shadow-soft-sm">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <p className="text-base font-extrabold text-stone-900 leading-none">4.85 / 5</p>
                <p className="text-[11px] font-medium text-stone-500 mt-1">Pet Parent Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

