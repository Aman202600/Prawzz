import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  Sparkles,
  User,
  Mail,
  Phone,
  BookOpen,
  Briefcase,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROGRAMMES_DATA } from '../../data/educationData';

export default function RegistrationForm({ selectedProgrammePreset }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programme: 'ai-core',
    experienceLevel: 'Student / College Fresher',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  useEffect(() => {
    if (selectedProgrammePreset) {
      setFormData((prev) => ({
        ...prev,
        programme: selectedProgrammePreset.id,
      }));
    }
  }, [selectedProgrammePreset]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
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

    // Simulate lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const ref = 'EDU-' + Math.floor(10000 + Math.random() * 90000);
      setEnquiryRef(ref);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      programme: 'ai-core',
      experienceLevel: 'Student / College Fresher',
      message: '',
    });
    setErrors({});
  };

  const chosenProgramme = PROGRAMMES_DATA.find((p) => p.id === formData.programme) || PROGRAMMES_DATA[0];

  return (
    <section id="enquire" className="py-16 sm:py-24 bg-slate-950 text-white border-t border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Diagnostic Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white">
            Register Your Interest & Get Syllabus
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Take the first step toward building real-world digital skills. Submit an enquiry to schedule a 1:1 syllabus walkthrough with an academic advisor.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-8 space-y-5 animate-scaleUp">
              <div className="h-16 w-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                  Enquiry Registered
                </span>
                <h3 className="text-2xl font-bold font-serif text-white mt-2">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                  Your enquiry for <strong>{chosenProgramme.title}</strong> has been received.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-500">Enquiry Reference:</span>
                  <span className="font-mono font-bold text-indigo-400">{enquiryRef}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-500">Track:</span>
                  <span className="font-medium text-slate-200">{chosenProgramme.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-500">Experience Profile:</span>
                  <span className="font-medium text-slate-200">{formData.experienceLevel}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-medium text-slate-200">{formData.email}</span>
                </div>
              </div>

              {/* Compliance Note */}
              <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 text-[11px] text-slate-400 max-w-md mx-auto">
                * Note: Frontend prototype simulation. In production, an admissions counselor sends the syllabus PDF and calendar invitation.
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            /* Input Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikramaditya Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-slate-950 ${
                        errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-slate-950 ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone & Track */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:bg-slate-950 ${
                        errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Programme of Interest *
                  </label>
                  <select
                    value={formData.programme}
                    onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
                  >
                    {PROGRAMMES_DATA.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Current Experience Level *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    'Student / College Fresher',
                    'Early Career (0-2 Yrs)',
                    'Working Professional (2+ Yrs)'
                  ].map((level) => (
                    <label
                      key={level}
                      className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                        formData.experienceLevel === level
                          ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold'
                          : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="experienceLevel"
                        value={level}
                        checked={formData.experienceLevel === level}
                        onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                        className="text-indigo-600"
                      />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Message or Specific Career Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Interested in transitioning from QA to ML Engineer; looking for weekend batch timings..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-75 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                      Submitting Enquiry...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-indigo-200" />
                      <span>Submit Free Enquiry & Schedule Diagnostic</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  No payment or credit card required. Free diagnostic evaluation session.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

