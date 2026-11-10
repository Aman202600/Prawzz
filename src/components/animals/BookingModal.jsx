import React, { useState } from 'react';
import {
  X,
  CalendarCheck,
  CheckCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ provider, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    petName: '',
    petType: 'Dog',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    reason: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen || !provider) return null;

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) errs.parentName = 'Pet parent name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.petName.trim()) errs.petName = 'Pet name is required';
    if (!formData.date) errs.date = 'Please pick a preferred date';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate appointment reservation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const ref = 'PRA-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(ref);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if canvas-confetti context not available
      }
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      petName: '',
      petType: 'Dog',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      timeSlot: 'Morning (09:00 AM - 12:00 PM)',
      reason: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      <div className="relative bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-soft-xl border border-stone-200 z-10 p-6 sm:p-8 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-soft-md">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Enquiry Sent Successfully
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-900 mt-2">
                Visit Requested for {formData.petName}!
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                Your appointment request has been forwarded to <strong>{provider.name}</strong>.
              </p>
            </div>

            {/* Confirmation Summary Card */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Booking Reference:</span>
                <span className="font-mono font-bold text-forest-900">{bookingRef}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Facility:</span>
                <span className="font-medium text-stone-800 truncate max-w-[200px]">{provider.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Date & Slot:</span>
                <span className="font-medium text-stone-800">{formData.date} • {formData.timeSlot.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">Contact:</span>
                <span className="font-medium text-stone-800">{formData.phone}</span>
              </div>
            </div>

            <p className="text-xs text-stone-400">
              * Note: Prototype demonstration state. The clinic reception will send an SMS/WhatsApp reminder.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm shadow-sm transition-all"
            >
              Done & Return to Directory
            </button>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Appointment / Visit Enquiry</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                Book at {provider.name}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                {provider.category} • {provider.location} • Fee: <strong>{provider.consultationFee}</strong>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Pet Parent Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Pet Parent Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Aditi Rao"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.parentName ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.parentName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.phone ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="aditi.rao@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                    errors.email ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Pet Name & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Pet's Name *
                  </label>
                  <input
                    type="text"
                    value={formData.petName}
                    onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                    placeholder="e.g. Simba, Coco, Oliver"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.petName ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.petName && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.petName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Pet Type / Species
                  </label>
                  <select
                    value={formData.petType}
                    onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Dog">Dog (Canine)</option>
                    <option value="Cat">Cat (Feline)</option>
                    <option value="Bird">Bird (Avian)</option>
                    <option value="Small Mammal">Small Mammal (Rabbit, Hamster)</option>
                    <option value="Community Stray">Community Stray Animal</option>
                    <option value="Other">Other Companion Animal</option>
                  </select>
                </div>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 08:30 PM)">Evening (04:00 PM - 08:30 PM)</option>
                    <option value="Urgent / Same-Day Walk-in">Urgent / Same-Day Walk-in</option>
                  </select>
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Reason for Visit or Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="e.g. Annual booster vaccine, limping on rear leg, general wellness checkup..."
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 disabled:opacity-75 text-white font-bold text-sm shadow-md shadow-emerald-900/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Reserving Request...
                    </span>
                  ) : (
                    <>
                      <CalendarCheck className="w-4 h-4 text-emerald-300" />
                      <span>Confirm & Send Enquiry</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-stone-400 mt-2">
                  No payment required now. Consultation fee is settled directly at the clinic.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

