import React from 'react';
import {
  Search,
  Grid,
  BadgeCheck,
  AlertCircle,
  ShieldCheck,
  Check,
  Heart,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../../data/animalsData';

const iconMap = {
  Search: Search,
  Grid: Grid,
  BadgeCheck: BadgeCheck,
  AlertCircle: AlertCircle,
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-cream-100 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Built for Pet Parents</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-serif tracking-tight leading-tight">
              Why Pet Owners Rely on <br />
              <span className="text-forest-800">Practo for Animals</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              When a pet is unwell, every second counts. We created an animal-care ecosystem that brings verified veterinary doctors, emergency trauma hospitals, luxury boarding retreats, and animal welfare ambulances together in one reliable interface.
            </p>

            {/* Bullet list of promises */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-forest-700 text-white shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">Zero Unverified Listings</p>
                  <p className="text-xs text-stone-500">Every clinic undergoes license verification before being listed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-forest-700 text-white shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">Transparent Pricing & Timings</p>
                  <p className="text-xs text-stone-500">Know consultation charges, emergency fees, and doctor shifts beforehand.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-forest-700 text-white shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">Community Stray Support</p>
                  <p className="text-xs text-stone-500">Direct connections with NGOs for stray rescues, sterilizations, and adoptions.</p>
                </div>
              </div>
            </div>

            {/* Emergency Notice Card */}
            <div className="p-4 rounded-2xl bg-white border border-rose-200/80 shadow-soft-sm flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-stone-900">24/7 Emergency Pet Hotline</p>
                <p className="text-stone-500">Call <strong className="text-rose-700 font-mono">1800-738-2273</strong> for immediate dispatch triage.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Grid Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE_US_POINTS.map((item, idx) => {
              const IconComp = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-soft-sm hover:shadow-soft-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="h-12 w-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center mb-4 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center text-[11px] font-bold text-forest-800">
                    <span>Feature Guaranteed</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

