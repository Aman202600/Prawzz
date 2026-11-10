import React, { useState, useEffect } from 'react';
import {
  X,
  FileEdit,
  CheckCircle2,
  AlertTriangle,
  Send,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CorrectionModal({
  isOpen,
  onClose,
  initialProvider,
  providersList
}) {
  const [formData, setFormData] = useState({
    providerName: '',
    correctionType: 'Incorrect Phone or Address',
    details: '',
    submitterEmail: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProvider) {
      setFormData((prev) => ({
        ...prev,
        providerName: initialProvider.name,
      }));
    }
  }, [initialProvider]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.providerName.trim()) errs.providerName = 'Please specify the clinic or provider name';
    if (!formData.details.trim() || formData.details.trim().length < 10) {
      errs.details = 'Please provide details with at least 10 characters';
    }
    if (!formData.submitterEmail.trim()) {
      errs.submitterEmail = 'Your email address is required for verification';
    } else if (!/\S+@\S+\.\S+/.test(formData.submitterEmail.trim())) {
      errs.submitterEmail = 'Please provide a valid email';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      providerName: '',
      correctionType: 'Incorrect Phone or Address',
      details: '',
      submitterEmail: '',
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

      <div className="relative bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-soft-xl border border-stone-200 z-10 p-6 sm:p-8 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success State */
          <div className="text-center py-6 space-y-4">
            <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-soft-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Correction Submitted
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-900 mt-2">
                Thank You for Helping Pets!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
                Our animal care data operations team will review your suggested changes for <strong>{formData.providerName}</strong> within 24 hours.
              </p>
            </div>

            <p className="text-xs text-stone-400">
              * Frontend prototype: In production, verified community reports automatically update the directory.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm shadow-sm"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form State */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <FileEdit className="w-3.5 h-3.5" />
                <span>Community Data Accuracy</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">
                Submit a Data Correction
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Notice an outdated clinic phone number, relocated address, or changed emergency timings? Let us know.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Provider Name */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Provider / Clinic Name *
                </label>
                <input
                  type="text"
                  value={formData.providerName}
                  onChange={(e) => setFormData({ ...formData, providerName: e.target.value })}
                  placeholder="e.g. Apex 24/7 Animal Trauma Hospital"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                    errors.providerName ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                  }`}
                />
                {errors.providerName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.providerName}</p>
                )}
              </div>

              {/* Correction Category */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  What Needs Updating? *
                </label>
                <select
                  value={formData.correctionType}
                  onChange={(e) => setFormData({ ...formData, correctionType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="Incorrect Phone or Address">Incorrect Phone Number or Address</option>
                  <option value="Outdated Timings or Closed">Clinic Relocated or Closed Permanently</option>
                  <option value="Emergency Status Changed">24/7 Emergency ICU Availability Change</option>
                  <option value="New Services / Doctors">New Doctors or Services Added</option>
                  <option value="Pricing / Consultation Inaccurate">Consultation Fee Inaccurate</option>
                  <option value="Other">Other Information</option>
                </select>
              </div>

              {/* Details Textarea */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Accurate Information / What is the correct data? *
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="e.g. The new clinic phone number is +91 98450 99999 and they now operate until 10 PM on weekends..."
                  className={`w-full px-3.5 py-2 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                    errors.details ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                  }`}
                />
                {errors.details && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.details}</p>
                )}
              </div>

              {/* Submitter Email */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Your Email Address (for follow-up verification) *
                </label>
                <input
                  type="email"
                  value={formData.submitterEmail}
                  onChange={(e) => setFormData({ ...formData, submitterEmail: e.target.value })}
                  placeholder="your.email@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-800 focus:outline-none focus:bg-white ${
                    errors.submitterEmail ? 'border-rose-400' : 'border-stone-200 focus:border-emerald-500'
                  }`}
                />
                {errors.submitterEmail && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.submitterEmail}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-900 disabled:opacity-75 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Sending Report...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-300" />
                      <span>Submit Correction for Review</span>
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

