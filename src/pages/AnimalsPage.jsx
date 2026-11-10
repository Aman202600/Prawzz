import React, { useState, useMemo } from 'react';
import AnimalsNavbar from '../components/animals/AnimalsNavbar';
import HeroSection from '../components/animals/HeroSection';
import PopularServices from '../components/animals/PopularServices';
import FilterBar from '../components/animals/FilterBar';
import ProviderCard from '../components/animals/ProviderCard';
import ProviderDetailModal from '../components/animals/ProviderDetailModal';
import BookingModal from '../components/animals/BookingModal';
import ProviderRegistrationModal from '../components/animals/ProviderRegistrationModal';
import CorrectionModal from '../components/animals/CorrectionModal';
import WhyChooseUs from '../components/animals/WhyChooseUs';
import AnimalsFooter from '../components/animals/AnimalsFooter';

import {
  SERVICE_CATEGORIES,
  MOCK_PROVIDERS,
} from '../data/animalsData';
import {
  Search,
  RotateCcw,
  Sparkles,
  ShieldAlert,
  FileQuestion,
  PlusCircle,
  HelpCircle
} from 'lucide-react';

export default function AnimalsPage() {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [onlyOpenNow, setOnlyOpenNow] = useState(false);
  const [onlyEmergency, setOnlyEmergency] = useState(false);
  const [maxDistance, setMaxDistance] = useState(15);

  // Modals State
  const [selectedProviderForDetail, setSelectedProviderForDetail] = useState(null);
  const [selectedProviderForBooking, setSelectedProviderForBooking] = useState(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isCorrectionModalOpen, setIsCorrectionModalOpen] = useState(false);
  const [correctionProvider, setCorrectionProvider] = useState(null);

  // Filter Computation
  const filteredProviders = useMemo(() => {
    return MOCK_PROVIDERS.filter((provider) => {
      // 1. Text Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = provider.name.toLowerCase().includes(q);
        const matchesCategory = provider.category.toLowerCase().includes(q);
        const matchesLocation = provider.location.toLowerCase().includes(q);
        const matchesServices = provider.services.some((s) => s.toLowerCase().includes(q));
        const matchesDoctors = provider.doctors?.some((d) => d.name.toLowerCase().includes(q));
        if (!matchesName && !matchesCategory && !matchesLocation && !matchesServices && !matchesDoctors) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'all') {
        const catObj = SERVICE_CATEGORIES.find((c) => c.id === selectedCategory);
        if (catObj && provider.categorySlug !== selectedCategory) {
          return false;
        }
      }

      // 3. Location Filter
      if (selectedLocation !== 'All Locations') {
        if (!provider.location.toLowerCase().includes(selectedLocation.split(',')[0].toLowerCase())) {
          return false;
        }
      }

      // 4. Rating Filter
      if (minRating > 0 && provider.rating < minRating) {
        return false;
      }

      // 5. Distance Filter
      if (provider.distance > maxDistance) {
        return false;
      }

      // 6. Open Now
      if (onlyOpenNow && !provider.isOpenNow) {
        return false;
      }

      // 7. Emergency 24/7
      if (onlyEmergency && !provider.isEmergency24x7) {
        return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedLocation,
    minRating,
    maxDistance,
    onlyOpenNow,
    onlyEmergency,
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedLocation('All Locations');
    setSelectedCategory('all');
    setMinRating(0);
    setOnlyOpenNow(false);
    setOnlyEmergency(false);
    setMaxDistance(15);
  };

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    const target = document.getElementById('providers-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = () => {
    const target = document.getElementById('providers-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCorrection = (provider = null) => {
    setCorrectionProvider(provider);
    setIsCorrectionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* 1. Header Navigation */}
      <AnimalsNavbar
        onOpenRegister={() => setIsRegisterModalOpen(true)}
        onOpenCorrection={() => handleOpenCorrection(null)}
      />

      {/* 2. Hero Section with Integrated Search */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        onSearchSubmit={handleSearchSubmit}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
        categories={SERVICE_CATEGORIES}
      />

      {/* 3. Popular Services Grid */}
      <PopularServices
        categories={SERVICE_CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* 4. Providers & Live Search Results Section */}
      <section id="providers-section" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Heading */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Verified Care</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-serif tracking-tight">
            Find Veterinary Care & Services
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-2xl">
            Real-time filtered animal clinics, veterinary trauma centres, pet boarding, and ambulances.
          </p>
        </div>

        {/* Search & Comprehensive Filters Bar */}
        <FilterBar
          categories={SERVICE_CATEGORIES}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          minRating={minRating}
          setMinRating={setMinRating}
          onlyOpenNow={onlyOpenNow}
          setOnlyOpenNow={setOnlyOpenNow}
          onlyEmergency={onlyEmergency}
          setOnlyEmergency={setOnlyEmergency}
          maxDistance={maxDistance}
          setMaxDistance={setMaxDistance}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onResetFilters={handleResetFilters}
          totalResults={filteredProviders.length}
        />

        {/* Providers Results Grid */}
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onViewDetails={(p) => setSelectedProviderForDetail(p)}
                onBookAppointment={(p) => setSelectedProviderForBooking(p)}
                onReportCorrection={(p) => handleOpenCorrection(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200/80 shadow-soft-sm max-w-xl mx-auto my-8">
            <div className="h-16 w-16 mx-auto rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mb-4">
              <FileQuestion className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">
              No matching providers found
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-sm mx-auto">
              We couldn't find any animal care providers matching your current filter criteria. Try adjusting your distance or clearing filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold shadow-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

      </section>

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. In-Page Submit a Correction Banner */}
      <section id="correction-section" className="py-12 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50/80 via-stone-50 to-emerald-50/60 border border-amber-200/70 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Keep Animal Healthcare Information Accurate</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-stone-900">
                Spotted Outdated Info or a Closed Clinic?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
                Help fellow pet parents by submitting corrections for phone numbers, relocated addresses, or updated doctor consulting hours.
              </p>
            </div>

            <button
              onClick={() => handleOpenCorrection(null)}
              className="px-5 py-3 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-bold shadow-sm shrink-0 active:scale-95 transition-all"
            >
              Submit a Correction
            </button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <AnimalsFooter
        onOpenRegister={() => setIsRegisterModalOpen(true)}
        onOpenCorrection={() => handleOpenCorrection(null)}
        onSelectCategory={handleCategorySelect}
        categories={SERVICE_CATEGORIES}
      />

      {/* Modals */}
      <ProviderDetailModal
        provider={selectedProviderForDetail}
        isOpen={Boolean(selectedProviderForDetail)}
        onClose={() => setSelectedProviderForDetail(null)}
        onBookAppointment={(p) => {
          setSelectedProviderForDetail(null);
          setSelectedProviderForBooking(p);
        }}
        onReportCorrection={(p) => {
          setSelectedProviderForDetail(null);
          handleOpenCorrection(p);
        }}
      />

      <BookingModal
        provider={selectedProviderForBooking}
        isOpen={Boolean(selectedProviderForBooking)}
        onClose={() => setSelectedProviderForBooking(null)}
      />

      <ProviderRegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      <CorrectionModal
        isOpen={isCorrectionModalOpen}
        initialProvider={correctionProvider}
        providersList={MOCK_PROVIDERS}
        onClose={() => {
          setIsCorrectionModalOpen(false);
          setCorrectionProvider(null);
        }}
      />
    </div>
  );
}

