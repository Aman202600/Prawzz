import React, { useState } from 'react';
import {
  X,
  PlusCircle,
  CheckCircle2,
  Building,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICE_CATEGORIES } from '../../data/animalsData';

export default function ProviderRegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    businessName: '',
    category: 'vet-clinics',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Bengaluru',
    address: '',
    licenseNumber: '',
    hasEmergency: false,
    hasSurgery: false,
    hasBoarding: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [regId, setRegId] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.businessName.trim()) errs.businessName = 'Business/Facility name is required';
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Valid email is required';
    }
    if (!formData.address.trim()) errs.address = 'Detailed address is required';
    if (!formData.licenseNumber.trim()) errs.licenseNumber = 'Veterinary / NGO license number is required';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generated = 'VET-' + Math.floor(10000 + Math.random() * 90000);
      setRegId(generated);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      businessName: '',
      category: 'vet-clinics',
      contactPerson: '',
      phone: '',
      email: '',
      city: 'Bengaluru',
      address: '',
      licenseNumber: '',
      hasEmergency: false,
      hasSurgery: false,
      hasBoarding: false,
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

      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-soft-xl border border-stone-200 z-10 p-6 sm:p-8 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-5">
            <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-soft-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Application Received
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-900 mt-2">
                Welcome to Practo for Animals!
              </h3>
              <p className="text-sm text-stone-600 mt-1 max-w-md mx-auto">
                Thank you, <strong>{formData.contactPerson}</strong>. Your listing request for <strong>{formData.businessName}</strong> has been registered.
              </p>
            </div>

            {/* Summary Details */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Registration Reference:</span>
                <span className="font-mono font-bold text-forest-900">{regId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200/60">
                <span className="text-stone-500">Service Category:</span>
                <span className="font-semibold text-stone-800">
                  {SERVICE_CATEGORIES.find((c) => c.id === formData.category)?.title}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">Next Step:</span>
                <span className="text-emerald-800 font-semibold">Credential Verification (24-48 hrs)</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-md mx-auto">
              * Frontend demonstration: In production, the Practo Provider Onboarding team verifies the veterinary council license before public listing.
            </p>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm shadow-md"
            >
              Close & Back to Portal
            </button>
          </div>
        ) : (
          /* Registration Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Provider Onboarding Portal</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">
                List Your Animal-Care Business
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Reach over 50,000+ local pet parents looking for veterinary clinics, emergency hospitals, and pet boarding retreats.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Business Name & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Facility / Clinic Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Hope Veterinary Hospital"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.businessName ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Primary Service Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Person & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Authorized Contact Person *
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Kumar (Director)"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.contactPerson ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.contactPerson && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.contactPerson}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Official Mobile / Clinic Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 01234"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.phone ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email & License */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Official Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@hopevetcare.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.email ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    State Vet Council / NGO Reg No. *
                  </label>
                  <input
                    type="text"
                    value={formData.licenseNumber}
                    onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                    placeholder="e.g. KVC-2019-8832"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                      errors.licenseNumber ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                    }`}
                  />
                  {errors.licenseNumber && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.licenseNumber}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Full Physical Clinic Address *
                </label>
                <textarea
                  rows={2}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Door number, street name, landmark, PIN code..."
                  className={`w-full px-3.5 py-2 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                    errors.address ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                  }`}
                />
                {errors.address && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.address}</p>
                )}
              </div>

              {/* Capabilities Checkboxes */}
              <div>
                <p className="text-xs font-bold text-stone-700 mb-2">Available Capabilities</p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-stone-700">
                    <input
                      type="checkbox"
                      checked={formData.hasEmergency}
                      onChange={(e) => setFormData({ ...formData, hasEmergency: e.target.checked })}
                      className="rounded text-forest-700"
                    />
                    <span>24x7 Emergency Triage & ICU</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-stone-700">
                    <input
                      type="checkbox"
                      checked={formData.hasSurgery}
                      onChange={(e) => setFormData({ ...formData, hasSurgery: e.target.checked })}
                      className="rounded text-forest-700"
                    />
                    <span>Sterile Surgical Suite</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-stone-700">
                    <input
                      type="checkbox"
                      checked={formData.hasBoarding}
                      onChange={(e) => setFormData({ ...formData, hasBoarding: e.target.checked })}
                      className="rounded text-forest-700"
                    />
                    <span>Overnight Boarding / Inpatient</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 disabled:opacity-75 text-white font-bold text-sm shadow-md shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Submitting Provider Registration...
                    </span>
                  ) : (
                    <>
                      <PlusCircle className="w-4 h-4 text-emerald-300" />
                      <span>Submit Business for Verification</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

