import React from 'react';
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  ChevronRight,
  CalendarCheck,
  AlertCircle
} from 'lucide-react';

export default function ProviderCard({
  provider,
  onViewDetails,
  onBookAppointment,
  onReportCorrection
}) {
  return (
    <div className="group bg-white rounded-3xl border border-stone-200/90 hover:border-emerald-300 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Banner & Photo */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          {/* Badge: Category */}
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-800 text-[11px] font-bold tracking-wide shadow-sm">
            {provider.category}
          </span>

          {/* Emergency / Special status badge */}
          {provider.isEmergency24x7 ? (
            <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1 animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
              24/7 ICU & Trauma
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-forest-800/90 backdrop-blur-md text-emerald-200 text-[11px] font-bold tracking-wide shadow-sm">
              {provider.badge}
            </span>
          )}
        </div>

        {/* Bottom image overlay: Distance & Open Status */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
            <span>{provider.distance} km away</span>
          </div>

          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{provider.isOpenNow ? 'Open Now' : 'Closed'}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row: Verified Icon & Name */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-lg font-bold text-stone-900 group-hover:text-forest-800 transition-colors line-clamp-1">
                  {provider.name}
                </h4>
                {provider.isVerified && (
                  <span title="Practo Verified Animal Care Facility">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                <span className="truncate">{provider.location}</span>
              </p>
            </div>
          </div>

          {/* Rating & Sample Disclaimer */}
          <div className="flex items-center gap-2 mb-4 bg-amber-50/70 border border-amber-100 px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-1 text-amber-900 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{provider.rating}</span>
            </div>
            <span className="text-stone-300">•</span>
            <span className="text-[11px] text-stone-600 font-medium">
              {provider.reviewsCount} sample reviews
            </span>
            <span className="text-[10px] ml-auto text-amber-800/80 font-mono uppercase bg-amber-100/80 px-1.5 py-0.2 rounded">
              Sample Data
            </span>
          </div>

          {/* Consultation Fee / Pricing Tier */}
          <div className="flex items-center justify-between text-xs py-2 border-y border-stone-100 mb-4">
            <span className="text-stone-500">Consultation Fee</span>
            <span className="font-bold text-forest-900">{provider.consultationFee}</span>
          </div>

          {/* Available Services Tags */}
          <div className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">
              Available Services
            </p>
            <div className="flex flex-wrap gap-1.5">
              {provider.services.slice(0, 3).map((srv, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 text-[11px] font-medium"
                >
                  {srv}
                </span>
              ))}
              {provider.services.length > 3 && (
                <span className="px-2 py-0.5 rounded-md bg-stone-50 text-stone-500 text-[11px] font-medium">
                  +{provider.services.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Contact & Hours Quick Line */}
          <div className="space-y-1 text-xs text-stone-600 mb-4">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="font-mono">{provider.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="truncate">{provider.timings}</span>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-stone-100 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(provider)}
              className="w-full py-2.5 px-3 rounded-xl border border-stone-200 hover:border-forest-600 hover:bg-forest-50 text-forest-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View Details</span>
              <ChevronRight className="w-3.5 h-3.5 text-forest-700" />
            </button>

            <button
              onClick={() => onBookAppointment(provider)}
              className="w-full py-2.5 px-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Book / Enquire</span>
            </button>
          </div>

          {/* Quick Correction Link */}
          <button
            onClick={() => onReportCorrection(provider)}
            className="w-full text-center text-[10px] text-stone-400 hover:text-stone-700 hover:underline pt-1 transition-colors"
          >
            Wrong info? Submit a correction
          </button>
        </div>

      </div>
    </div>
  );
}

