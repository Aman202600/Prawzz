import React, { useState } from 'react';
import EducationNavbar from '../components/education/EducationNavbar';
import EducationHero from '../components/education/EducationHero';
import ProgrammesSection from '../components/education/ProgrammesSection';
import ProgrammeDetailModal from '../components/education/ProgrammeDetailModal';
import WhyChooseUsEdu from '../components/education/WhyChooseUsEdu';
import LearningJourney from '../components/education/LearningJourney';
import CurriculumPreview from '../components/education/CurriculumPreview';
import ProjectsSection from '../components/education/ProjectsSection';
import TestimonialsSection from '../components/education/TestimonialsSection';
import FaqSection from '../components/education/FaqSection';
import RegistrationForm from '../components/education/RegistrationForm';
import EducationFooter from '../components/education/EducationFooter';

import { PROGRAMMES_DATA } from '../data/educationData';

export default function EducationPage() {
  const [selectedProgrammeForModal, setSelectedProgrammeForModal] = useState(null);
  const [selectedProgrammePreset, setSelectedProgrammePreset] = useState(null);

  const handleScrollToProgrammes = () => {
    const el = document.getElementById('programmes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToEnquire = (programme = null) => {
    if (programme) {
      setSelectedProgrammePreset(programme);
    }
    const el = document.getElementById('enquire');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans">
      {/* 1. Header Navigation */}
      <EducationNavbar
        onExploreClick={handleScrollToProgrammes}
        onEnquireClick={() => handleScrollToEnquire(null)}
      />

      {/* 2. Hero Section */}
      <EducationHero
        onExploreClick={handleScrollToProgrammes}
        onEnquireClick={() => handleScrollToEnquire(null)}
      />

      {/* 3. Programmes Section */}
      <ProgrammesSection
        programmes={PROGRAMMES_DATA}
        onSelectProgramme={(prog) => setSelectedProgrammeForModal(prog)}
      />

      {/* 4. Why Choose Us */}
      <WhyChooseUsEdu />

      {/* 5. 4-Step Learning Journey */}
      <LearningJourney
        onEnquireClick={() => handleScrollToEnquire(null)}
      />

      {/* 6. Interactive Curriculum Preview */}
      <CurriculumPreview
        onEnquireClick={() => handleScrollToEnquire(null)}
      />

      {/* 7. Student Capstone Projects Showcase */}
      <ProjectsSection
        onEnquireClick={() => handleScrollToEnquire(null)}
      />

      {/* 8. Illustrative Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQ Accordion */}
      <FaqSection />

      {/* 10. Registration & Lead Capture Form */}
      <RegistrationForm
        selectedProgrammePreset={selectedProgrammePreset}
      />

      {/* 11. Footer */}
      <EducationFooter
        onExploreClick={handleScrollToProgrammes}
        onEnquireClick={() => handleScrollToEnquire(null)}
      />

      {/* Programme Detailed Syllabus Modal */}
      <ProgrammeDetailModal
        programme={selectedProgrammeForModal}
        isOpen={Boolean(selectedProgrammeForModal)}
        onClose={() => setSelectedProgrammeForModal(null)}
        onEnquireProgramme={(prog) => {
          setSelectedProgrammeForModal(null);
          handleScrollToEnquire(prog);
        }}
      />
    </div>
  );
}

