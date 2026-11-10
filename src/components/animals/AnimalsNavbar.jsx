import React, { useState } from 'react';
import { PawPrint, Heart, PhoneCall, PlusCircle, Menu, X, ShieldCheck, Search } from 'lucide-react';

export default function AnimalsNavbar({ onOpenRegister, onOpenCorrection, onSearchFocus }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Find Services', href: '#providers-section' },
    { name: 'About Us', href: '#why-choose-us' },
    { name: 'For Providers', href: '#for-providers' },
    { name: 'Correction', href: '#correction-section' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-14 z-40 border-b border-stone-200/80 shadow-soft-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald-700 to-forest-900 flex items-center justify-center text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform">
              <PawPrint className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-forest-900 font-serif">Practo</span>
                <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                  for Animals
                </span>
              </div>
              <p className="text-[11px] font-medium text-stone-500 tracking-tight hidden sm:block">
                Trusted Veterinary & Pet-Care Discovery
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-emerald-800 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-700 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* 24/7 Helpline Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-rose-800 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
              <span>24/7 Helpline: 1800-738-2273</span>
            </div>

            {/* List Your Business CTA */}
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold shadow-sm shadow-emerald-900/20 hover:shadow-md transition-all active:scale-95"
            >
              <PlusCircle className="w-4 h-4 text-emerald-300" />
              <span>List Your Business</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="px-3 py-1.5 rounded-lg bg-forest-800 text-white text-xs font-bold"
            >
              List
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 space-y-2">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold">
              <PhoneCall className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Emergency Hotline: 1800-738-2273</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest-800 text-white text-sm font-bold shadow-sm"
            >
              <PlusCircle className="w-4 h-4 text-emerald-300" />
              <span>List Your Animal-Care Business</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCorrection();
              }}
              className="w-full text-center py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
            >
              Submit a Data Correction
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

