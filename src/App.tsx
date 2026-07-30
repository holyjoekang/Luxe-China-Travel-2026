import React, { useState, useMemo } from 'react';
import { TRAVEL_PROGRAMS } from './data/programs';
import { TravelProgram, CustomizedQuote } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedSpotlight } from './components/FeaturedSpotlight';
import { ProgramList } from './components/ProgramList';
import { QuoteCalculator } from './components/QuoteCalculator';
import { TravelGuideSection } from './components/TravelGuideSection';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import { AiConciergeModal } from './components/AiConciergeModal';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');

  const [selectedDetailProgram, setSelectedDetailProgram] = useState<TravelProgram | null>(null);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [conciergeInitialPrompt, setConciergeInitialPrompt] = useState('');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryProgramId, setInquiryProgramId] = useState('chongqing-maotai-xian-4n5d');
  const [calculatorProgramId, setCalculatorProgramId] = useState('chongqing-maotai-xian-4n5d');

  // Featured Main Program
  const featuredProgram = TRAVEL_PROGRAMS[0]; // Program 1: 충칭/마오타이/서안

  // Filtered Programs
  const filteredPrograms = useMemo(() => {
    return TRAVEL_PROGRAMS.filter((prog) => {
      // Category filter
      if (activeCategory === 'featured' && !prog.isFeatured) return false;
      if (activeCategory === 'calculator') return true; // Calculator view
      if (activeCategory !== 'all' && activeCategory !== 'featured' && activeCategory !== 'calculator') {
        if (!prog.themes.includes(activeCategory as any)) return false;
      }

      // Theme filter
      if (selectedTheme !== 'all') {
        if (!prog.themes.includes(selectedTheme as any)) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = prog.title.toLowerCase().includes(query);
        const matchesSub = prog.subtitle.toLowerCase().includes(query);
        const matchesCities = prog.cities.some((c) => c.toLowerCase().includes(query));
        const matchesConcept = prog.concept.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSub && !matchesCities && !matchesConcept) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedTheme, activeCategory]);

  const handleOpenConcierge = (prompt: string = '') => {
    setConciergeInitialPrompt(prompt);
    setIsConciergeOpen(true);
  };

  const handleOpenInquiry = (programId?: string) => {
    if (programId) setInquiryProgramId(programId);
    setIsInquiryOpen(true);
  };

  const handleOpenCalculator = (programId: string) => {
    setCalculatorProgramId(programId);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'calculator') {
      const element = document.getElementById('calculator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (cat === 'featured') {
      setSelectedDetailProgram(featuredProgram);
    }
  };

  const handleQuoteSubmit = (quote: CustomizedQuote) => {
    setInquiryProgramId(quote.programId);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* Header */}
      <Header
        onOpenConcierge={() => handleOpenConcierge()}
        onOpenInquiry={() => handleOpenInquiry()}
        onSelectCategory={handleSelectCategory}
        activeCategory={activeCategory}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTheme={selectedTheme}
          onSelectTheme={setSelectedTheme}
          onSelectFeatured={() => setSelectedDetailProgram(featuredProgram)}
        />

        {/* Featured Program Spotlight (Chongqing - Maotai - Xi'an) */}
        {activeCategory === 'all' && !searchQuery && selectedTheme === 'all' && (
          <FeaturedSpotlight
            program={featuredProgram}
            onViewDetail={(prog) => setSelectedDetailProgram(prog)}
            onOpenCalculator={handleOpenCalculator}
            onAskConcierge={(prompt) => handleOpenConcierge(prompt)}
          />
        )}

        {/* Program Cards Grid (10 Programs) */}
        <ProgramList
          programs={filteredPrograms}
          onViewDetail={(prog) => setSelectedDetailProgram(prog)}
          onOpenCalculator={handleOpenCalculator}
          selectedTheme={selectedTheme}
          searchQuery={searchQuery}
        />

        {/* Interactive Quote Calculator */}
        <QuoteCalculator
          initialProgramId={calculatorProgramId}
          onSubmitQuote={handleQuoteSubmit}
          onAskConcierge={(prompt) => handleOpenConcierge(prompt)}
        />

        {/* Travel Essentials Guide Section */}
        <TravelGuideSection
          onOpenConcierge={() => handleOpenConcierge('중국 무비자 240시간 경유 정책 및 알리페이 연동 방법 문의합니다.')}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProgramDetailModal
        program={selectedDetailProgram}
        onClose={() => setSelectedDetailProgram(null)}
        onOpenCalculator={handleOpenCalculator}
        onOpenInquiry={handleOpenInquiry}
        onAskConcierge={(prompt) => handleOpenConcierge(prompt)}
      />

      <AiConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        initialPrompt={conciergeInitialPrompt}
        selectedProgram={selectedDetailProgram}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        selectedProgramId={inquiryProgramId}
      />

    </div>
  );
}
