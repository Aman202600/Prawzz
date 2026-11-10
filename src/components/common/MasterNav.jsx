import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sparkles, HeartHandshake, GraduationCap, Layers } from 'lucide-react';

export default function MasterNav() {
  const location = useLocation();

  const getActiveBadge = () => {
    if (location.pathname.startsWith('/education')) {
      return { text: 'Part 2 Active', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' };
    }
    if (location.pathname.startsWith('/content-system')) {
      return { text: 'Part 3 Active', color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' };
    }
    return { text: 'Part 1 Active', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
  };

  const badge = getActiveBadge();

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Project Title & Status Badge */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white font-serif">Prawzz Product Suite</span>
                <span className={`text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full border ${badge.color}`}>
                  {badge.text}
                </span>
              </div>
            </div>
          </div>

          {/* Experience Switcher Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 text-xs font-medium">
            <NavLink
              to="/animals"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`
              }
            >
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-300" />
              <span>Practo for Animals</span>
              <span className="hidden md:inline-block text-[9px] bg-emerald-700/60 text-emerald-200 px-1.5 py-0.2 rounded font-mono">
                Phase 1
              </span>
            </NavLink>

            <NavLink
              to="/education"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`
              }
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-300" />
              <span>AI Education</span>
              <span className="hidden md:inline-block text-[9px] bg-indigo-900/60 text-indigo-200 px-1.5 py-0.2 rounded font-mono">
                Phase 2
              </span>
            </NavLink>

            <NavLink
              to="/content-system"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }`
              }
            >
              <Layers className="w-3.5 h-3.5 text-violet-300" />
              <span>AI Content System</span>
              <span className="hidden md:inline-block text-[9px] bg-violet-900/60 text-violet-200 px-1.5 py-0.2 rounded font-mono">
                Phase 3
              </span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
