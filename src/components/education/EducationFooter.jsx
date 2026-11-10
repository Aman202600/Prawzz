import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  AlertCircle
} from 'lucide-react';
import { PROGRAMMES_DATA } from '../../data/educationData';

export default function EducationFooter({ onExploreClick, onEnquireClick }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-violet-900/40 border border-indigo-800/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Admissions Open for Next Cohort
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Ready to Accelerate Your AI & Tech Career?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Limited cohort seats are reserved on a rolling basis to guarantee high-touch 1:1 code reviews and mentorship.
            </p>
          </div>

          <button
            onClick={onEnquireClick}
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-sm shadow-xl shadow-black/30 hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            Apply for Free Diagnostic
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-sm">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white font-serif tracking-tight">
                FutureSkill <span className="text-indigo-400 font-sans font-normal text-xs uppercase px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800">AI Academy</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Practical artificial intelligence and digital skills education designed for college students, fresh graduates, and ambitious software practitioners.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programmes Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Tracks
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {PROGRAMMES_DATA.map((prog) => (
                <li key={prog.id}>
                  <button
                    onClick={onExploreClick}
                    className="hover:text-indigo-300 transition-colors text-left"
                  >
                    {prog.title.split('&')[0]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform & Journey
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#why-choose-us" className="hover:text-indigo-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-indigo-300 transition-colors">
                  4-Step Learning Roadmap
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-300 transition-colors">
                  Capstone Project Catalog
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-300 transition-colors">
                  Eligibility & Admissions FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3" id="contact">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Admissions
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-indigo-300 font-bold">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>+91 80 4912 0044</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>admissions@futureskill.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Tech Innovation Hub, Bengaluru</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0" />
            <p>
              <strong>Disclaimer:</strong> This is an educational landing page prototype. All curriculum data, syllabi, and student testimonials are realistic illustrative mock content.
            </p>
          </div>

          <p className="shrink-0 text-center md:text-right">
            © {new Date().getFullYear()} FutureSkill AI Academy. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

