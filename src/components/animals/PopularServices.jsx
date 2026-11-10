import React from 'react';
import {
  Stethoscope,
  Building2,
  Home,
  Activity,
  Truck,
  HeartHandshake,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Stethoscope: Stethoscope,
  Building2: Building2,
  Home: Home,
  Activity: Activity,
  Truck: Truck,
  HeartHandshake: HeartHandshake,
};

export default function PopularServices({ categories, selectedCategory, onSelectCategory }) {
  return (
    <section id="popular-services" className="py-14 sm:py-20 bg-white border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
              Popular Animal-Care Services
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2 max-w-2xl">
              From routine healthcare consultations to 24x7 trauma hospitals and non-profit rescues, browse specialized care providers.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs sm:text-sm font-bold text-forest-800 hover:text-forest-900 inline-flex items-center gap-1.5 group shrink-0"
          >
            <span>View All Provider Listings</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Stethoscope;
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-emerald-50/80 to-teal-50/40 border-forest-600 ring-2 ring-forest-600/30 shadow-soft-md'
                    : 'bg-stone-50/50 hover:bg-white border-stone-200/80 hover:border-emerald-300 hover:shadow-soft-lg'
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`h-13 w-13 rounded-2xl flex items-center justify-center transition-all p-3 shadow-soft-sm ${cat.iconColor} group-hover:scale-110`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-600 shadow-soft-sm">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-forest-800 transition-colors">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold">
                  <span className="text-stone-500">
                    <strong className="text-stone-800 font-bold">{cat.providerCount}</strong> verified options
                  </span>

                  <span className={`inline-flex items-center gap-1 font-bold ${
                    isSelected ? 'text-forest-800' : 'text-stone-700 group-hover:text-forest-800'
                  }`}>
                    <span>{isSelected ? 'Filtered' : 'Explore'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

