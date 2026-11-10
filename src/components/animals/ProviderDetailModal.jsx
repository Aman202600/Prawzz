import React from 'react';
import {
  X,
  Star,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  User,
  CalendarCheck,
  Navigation,
  Heart,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';

export default function ProviderDetailModal({
  provider,
  isOpen,
  onClose,
  onBookAppointment,
  onReportCorrection
}) {
  if (!isOpen || !provider) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-soft-xl border border-stone-200 z-10 animate-scaleUp">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header Photo */}
        <div className="relative h-64 sm:h-72 w-full bg-stone-100">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Badges on Hero */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-white/95 text-stone-900 text-xs font-bold shadow-md">
              {provider.category}
            </span>
            {provider.isEmergency24x7 && (
              <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white animate-ping" />
                24/7 Trauma Emergency Unit
              </span>
            )}
          </div>

          {/* Title on Hero */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl sm:text-2xl font-extrabold font-serif">
                {provider.name}
              </h2>
              {provider.isVerified && (
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              )}
            </div>
            <p className="text-xs sm:text-sm text-stone-200 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-terracotta-400" />
              <span>{provider.address}</span>
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Key Facts Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Rating</p>
              <div className="flex items-center gap-1 mt-1 text-sm font-bold text-stone-900">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>{provider.rating} / 5</span>
              </div>
              <p className="text-[10px] text-stone-500">{provider.reviewsCount} sample reviews</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Pricing Tier</p>
              <p className="text-sm font-bold text-forest-900 mt-1">{provider.consultationFee}</p>
              <p className="text-[10px] text-stone-500">{provider.pricingTier} Transparent</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Operating Hours</p>
              <p className="text-xs font-bold text-stone-900 mt-1">{provider.isOpenNow ? 'Open Now' : 'Closed'}</p>
              <p className="text-[10px] text-stone-500 truncate">{provider.timings}</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Direct Contact</p>
              <p className="text-xs font-mono font-bold text-stone-900 mt-1">{provider.phone}</p>
              <p className="text-[10px] text-stone-500">{provider.distance} km away</p>
            </div>
          </div>

          {/* Sample Data Disclaimer Alert */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> This is a prototype demonstration with realistic sample provider data. Do not use for real-life animal medical emergencies without contacting verified local services directly.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-base font-bold text-stone-900 font-serif mb-2">
              About the Facility
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {provider.about}
            </p>
          </div>

          {/* Doctors / Specialists Section */}
          {provider.doctors && provider.doctors.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-stone-900 font-serif mb-3">
                Certified Doctors & Care Specialists
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {provider.doctors.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-forest-100 text-forest-800 flex items-center justify-center font-bold text-sm shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{doc.name}</h4>
                      <p className="text-xs font-medium text-forest-800">{doc.qualifications}</p>
                      <p className="text-xs text-stone-500 mt-1">{doc.specialty} • {doc.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Available Services */}
          <div>
            <h3 className="text-base font-bold text-stone-900 font-serif mb-3">
              Specialized Services & Clinical Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {provider.services.map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 text-xs font-medium text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Available */}
          {provider.facilities && provider.facilities.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-stone-900 font-serif mb-3">
                Infrastructure & Amenities
              </h3>
              <div className="flex flex-wrap gap-2">
                {provider.facilities.map((fac, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-forest-50 border border-forest-200 text-forest-900 text-xs font-semibold"
                  >
                    ✓ {fac}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sample Pet Parent Reviews */}
          {provider.sampleReviews && provider.sampleReviews.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-stone-900 font-serif">
                  Sample Pet Parent Experiences
                </h3>
                <span className="text-[11px] font-mono uppercase bg-stone-100 px-2 py-0.5 rounded text-stone-500">
                  Illustrative Reviews
                </span>
              </div>
              <div className="space-y-3">
                {provider.sampleReviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-stone-800 flex items-center gap-2">
                        <span>{rev.author}</span>
                        <span className="text-[11px] font-normal text-stone-500">({rev.pet})</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-stone-600 leading-relaxed">{rev.comment}</p>
                    <p className="text-[10px] text-stone-400">{rev.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onReportCorrection(provider);
              }}
              className="text-xs text-stone-500 hover:text-stone-800 underline order-last sm:order-first"
            >
              Report inaccurate details for this provider
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-700 font-bold text-xs"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookAppointment(provider);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <CalendarCheck className="w-4 h-4 text-emerald-300" />
                <span>Book / Enquire Visit</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

