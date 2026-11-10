import React from 'react';
import {
  SlidersHorizontal,
  X,
  RotateCcw,
  Star,
  MapPin,
  Clock,
  ShieldAlert,
  Search,
  Filter
} from 'lucide-react';
import { LOCATIONS_LIST } from '../../data/animalsData';

export default function FilterBar({
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  minRating,
  setMinRating,
  onlyOpenNow,
  setOnlyOpenNow,
  onlyEmergency,
  setOnlyEmergency,
  maxDistance,
  setMaxDistance,
  searchQuery,
  setSearchQuery,
  onResetFilters,
  totalResults
}) {
  const isFiltered =
    selectedCategory !== 'all' ||
    selectedLocation !== 'All Locations' ||
    minRating > 0 ||
    onlyOpenNow ||
    onlyEmergency ||
    maxDistance < 15 ||
    searchQuery.trim().length > 0;

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-soft-md p-5 sm:p-6 mb-8 transition-all">
      {/* Top Filter Bar Controls */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-5 border-b border-stone-200/80">
        
        {/* Results Count & Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-forest-100 text-forest-800">
            <SlidersHorizontal className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900 leading-tight">
              Verified Providers Directory
            </h3>
            <p className="text-xs text-stone-500">
              Showing <strong className="text-forest-800 font-bold">{totalResults}</strong> matching animal-care facilities
            </p>
          </div>
        </div>

        {/* Search bar inside filters */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search provider, doctors, or treatment..."
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Reset Filter Button */}
        {isFiltered && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>

      {/* Filter Row Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-5">
        
        {/* 1. Category Dropdown */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="all">All Service Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* 2. Location Dropdown */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
            Location
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            {LOCATIONS_LIST.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Rating Dropdown */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
            Minimum Rating
          </label>
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-medium text-stone-800 focus:outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value={0}>Any Rating</option>
            <option value={4.8}>⭐ 4.8 & above (Top Tier)</option>
            <option value={4.5}>⭐ 4.5 & above (Highly Rated)</option>
            <option value={4.0}>⭐ 4.0 & above</option>
          </select>
        </div>

        {/* 4. Distance Filter */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Max Distance
            </label>
            <span className="text-[11px] font-bold text-forest-800">
              {maxDistance >= 15 ? 'Any distance' : `< ${maxDistance} km`}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            step="1"
            value={maxDistance}
            onChange={(e) => setMaxDistance(Number(e.target.value))}
            className="w-full accent-forest-700 cursor-pointer"
          />
        </div>

        {/* 5. Emergency & Open Toggles */}
        <div className="flex flex-col justify-end gap-1.5">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-stone-700 hover:text-stone-900 select-none">
            <input
              type="checkbox"
              checked={onlyEmergency}
              onChange={(e) => setOnlyEmergency(e.target.checked)}
              className="rounded text-forest-700 focus:ring-forest-600 h-4 w-4"
            />
            <span className="flex items-center gap-1 text-rose-700 font-bold">
              <ShieldAlert className="w-3.5 h-3.5" /> 24/7 Emergency Only
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-stone-700 hover:text-stone-900 select-none">
            <input
              type="checkbox"
              checked={onlyOpenNow}
              onChange={(e) => setOnlyOpenNow(e.target.checked)}
              className="rounded text-forest-700 focus:ring-forest-600 h-4 w-4"
            />
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-600" /> Open Now Only
            </span>
          </label>
        </div>

      </div>

      {/* Active Filter Chips / Pills */}
      {isFiltered && (
        <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-stone-100 text-xs">
          <span className="text-stone-400 font-medium text-[11px]">Applied filters:</span>

          {selectedCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span>Category: {categories.find((c) => c.id === selectedCategory)?.title}</span>
              <button onClick={() => setSelectedCategory('all')}>
                <X className="w-3 h-3 hover:text-emerald-950" />
              </button>
            </span>
          )}

          {selectedLocation !== 'All Locations' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
              <span>{selectedLocation}</span>
              <button onClick={() => setSelectedLocation('All Locations')}>
                <X className="w-3 h-3 hover:text-stone-950" />
              </button>
            </span>
          )}

          {minRating > 0 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              <span>★ {minRating}+ rating</span>
              <button onClick={() => setMinRating(0)}>
                <X className="w-3 h-3 hover:text-amber-950" />
              </button>
            </span>
          )}

          {onlyEmergency && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
              <span>24/7 Emergency</span>
              <button onClick={() => setOnlyEmergency(false)}>
                <X className="w-3 h-3 hover:text-rose-950" />
              </button>
            </span>
          )}

          {onlyOpenNow && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span>Open Now</span>
              <button onClick={() => setOnlyOpenNow(false)}>
                <X className="w-3 h-3 hover:text-emerald-950" />
              </button>
            </span>
          )}

          {maxDistance < 15 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
              <span>Distance &lt; {maxDistance}km</span>
              <button onClick={() => setMaxDistance(15)}>
                <X className="w-3 h-3 hover:text-stone-950" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

