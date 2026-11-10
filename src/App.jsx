import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MasterNav from './components/common/MasterNav';
import AnimalsPage from './pages/AnimalsPage';
import EducationPage from './pages/EducationPage';
import ContentSystemPage from './pages/ContentSystemPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50">
        {/* Global Master Switcher Bar */}
        <MasterNav />

        {/* Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/animals" replace />} />
            <Route path="/animals" element={<AnimalsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/content-system" element={<ContentSystemPage />} />
            <Route path="*" element={<Navigate to="/animals" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
