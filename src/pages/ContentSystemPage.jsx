import React, { useState } from 'react';
import ContentSidebar from '../components/content-system/ContentSidebar';
import Stage1IdeaInput from '../components/content-system/Stage1IdeaInput';
import Stage2Research from '../components/content-system/Stage2Research';
import Stage3SlideCopy from '../components/content-system/Stage3SlideCopy';
import Stage4VisualDirection from '../components/content-system/Stage4VisualDirection';
import Stage5CarouselPreview from '../components/content-system/Stage5CarouselPreview';
import Stage6Export from '../components/content-system/Stage6Export';
import WorkflowArchitectureView from '../components/content-system/WorkflowArchitectureView';

import { DEFAULT_SAMPLE_CAROUSEL } from '../data/contentSystemData';

export default function ContentSystemPage() {
  const [activeStage, setActiveStage] = useState(1);
  const [carousel, setCarousel] = useState(DEFAULT_SAMPLE_CAROUSEL);
  const [slides, setSlides] = useState(DEFAULT_SAMPLE_CAROUSEL.slides);
  const [selectedThemeId, setSelectedThemeId] = useState('theme-dark');
  const [isGenerating, setIsGenerating] = useState(false);

  // Idea Form State for Stage 1
  const [ideaForm, setIdeaForm] = useState({
    rawIdea: DEFAULT_SAMPLE_CAROUSEL.rawIdea,
    topic: DEFAULT_SAMPLE_CAROUSEL.topic,
    targetAudience: DEFAULT_SAMPLE_CAROUSEL.targetAudience,
    platform: DEFAULT_SAMPLE_CAROUSEL.platform,
    tone: DEFAULT_SAMPLE_CAROUSEL.tone,
    slideCount: DEFAULT_SAMPLE_CAROUSEL.slideCount,
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setCarousel((prev) => ({
        ...prev,
        topic: ideaForm.topic,
        rawIdea: ideaForm.rawIdea,
        targetAudience: ideaForm.targetAudience,
        platform: ideaForm.platform,
        tone: ideaForm.tone,
        slideCount: ideaForm.slideCount,
      }));
      // Advance to Research & Structure
      setActiveStage(2);
    }, 700);
  };

  const handleResetToSample = () => {
    setCarousel(DEFAULT_SAMPLE_CAROUSEL);
    setSlides(DEFAULT_SAMPLE_CAROUSEL.slides);
    setIdeaForm({
      rawIdea: DEFAULT_SAMPLE_CAROUSEL.rawIdea,
      topic: DEFAULT_SAMPLE_CAROUSEL.topic,
      targetAudience: DEFAULT_SAMPLE_CAROUSEL.targetAudience,
      platform: DEFAULT_SAMPLE_CAROUSEL.platform,
      tone: DEFAULT_SAMPLE_CAROUSEL.tone,
      slideCount: DEFAULT_SAMPLE_CAROUSEL.slideCount,
    });
    setSelectedThemeId('theme-dark');
    setActiveStage(5); // Jump straight to preview of the sample carousel!
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-slate-950 text-white flex flex-col lg:flex-row font-sans">
      
      {/* 1. Left Sidebar Navigation */}
      <ContentSidebar
        activeStage={activeStage}
        setActiveStage={setActiveStage}
        onResetToSample={handleResetToSample}
        slideCount={slides.length}
      />

      {/* 2. Main Workbench Content Area */}
      <div className="flex-1 p-4 sm:p-8 lg:p-10 overflow-y-auto">
        {activeStage === 1 && (
          <Stage1IdeaInput
            ideaForm={ideaForm}
            setIdeaForm={setIdeaForm}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        )}

        {activeStage === 2 && (
          <Stage2Research
            topic={carousel.topic}
            onNextStage={() => setActiveStage(3)}
          />
        )}

        {activeStage === 3 && (
          <Stage3SlideCopy
            slides={slides}
            setSlides={setSlides}
            onNextStage={() => setActiveStage(4)}
          />
        )}

        {activeStage === 4 && (
          <Stage4VisualDirection
            selectedThemeId={selectedThemeId}
            setSelectedThemeId={setSelectedThemeId}
            onNextStage={() => setActiveStage(5)}
          />
        )}

        {activeStage === 5 && (
          <Stage5CarouselPreview
            carousel={carousel}
            slides={slides}
            setSlides={setSlides}
            selectedThemeId={selectedThemeId}
            setSelectedThemeId={setSelectedThemeId}
            onNextStage={() => setActiveStage(6)}
          />
        )}

        {activeStage === 6 && (
          <Stage6Export
            carousel={carousel}
            slides={slides}
            selectedThemeId={selectedThemeId}
            onViewArchitecture={() => setActiveStage(7)}
          />
        )}

        {activeStage === 7 && (
          <WorkflowArchitectureView
            onBackToStudio={() => setActiveStage(5)}
          />
        )}
      </div>

    </div>
  );
}

