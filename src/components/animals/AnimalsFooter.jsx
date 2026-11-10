import React from 'react';
import {
  PawPrint,
  Heart,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Instagram,
  Twitter,
  Facebook,
  Linkedin
} from 'lucide-react';

export default function AnimalsFooter({ onOpenRegister, onOpenCorrection, onSelectCategory, categories }) {
  return (
    <footer className="bg-forest-950 text-stone-300 pt-16 pb-12 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Banner: Are You an Animal-Care Provider? */}
        <div id="for-providers" className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-forest-900 via-forest-800 to-emerald-900 border border-emerald-700/40 shadow-soft-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Grow Your Veterinary Practice
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Are You an Animal-Care Service Provider?
            </h3>
            <p className="text-sm text-emerald-100/80 max-w-xl">
              List your clinic, hospital, boarding retreat, or ambulance service to connect with tens of thousands of verified pet owners in your neighborhood.
            </p>
          </div>

          <button
            onClick={onOpenRegister}
            className="px-6 py-3.5 rounded-2xl bg-white text-forest-900 hover:bg-emerald-50 font-extrabold text-sm shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            List Your Business Today
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-forest-900/80 text-sm">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-emerald-700 flex items-center justify-center text-white shadow-md">
                <PawPrint className="w-5 h-5 text-emerald-200" />
              </div>
              <span className="text-xl font-extrabold text-white font-serif tracking-tight">
                Practo <span className="text-emerald-400 font-sans font-normal text-xs uppercase px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800">for Animals</span>
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              India's dedicated animal-care discovery platform. Connecting loving pet parents with certified veterinary doctors, emergency surgical hospitals, boarding retreats, and animal welfare charities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-stone-400">
              <a href="#" className="p-2 rounded-xl bg-forest-900/80 hover:bg-forest-800 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-forest-900/80 hover:bg-forest-800 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-forest-900/80 hover:bg-forest-800 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-forest-900/80 hover:bg-forest-800 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Service Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Directory
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const el = document.getElementById('providers-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-300 transition-colors text-left"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              For Pet Parents
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#hero" className="hover:text-emerald-300 transition-colors">
                  Find Near You
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-emerald-300 transition-colors">
                  Verified Trust Standards
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCorrection}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Submit a Correction
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenRegister}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  Join as a Service Provider
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency & Support */}
          <div className="space-y-3" id="contact">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Emergency & Helplines
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2 text-rose-300 font-bold">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>24/7 Trauma: 1800-738-2273</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>care@practoforanimals.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>Bengaluru • Mumbai • New Delhi</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <p>
              <strong>Disclaimer:</strong> This application is an MVP prototype demonstration. All clinic records and doctor names are realistic sample data.
            </p>
          </div>

          <p className="shrink-0 text-center md:text-right">
            © {new Date().getFullYear()} Practo for Animals. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

