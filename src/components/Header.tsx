import React, { useState } from 'react';
import { Compass, Sparkles, Phone, Calendar, ShieldCheck, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenConcierge: () => void;
  onOpenInquiry: () => void;
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConcierge,
  onOpenInquiry,
  onSelectCategory,
  activeCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: '전체 프로그램' },
    { id: 'featured', label: '시그니처 탐방 (서부 3도시)' },
    { id: '백주/미식', label: '백주 & 미식' },
    { id: '역사/문화', label: '역사 & 문화' },
    { id: '힐링/자연', label: '자연 & 힐링' },
    { id: 'calculator', label: '맞춤 견적 계산기' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 text-stone-900 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-amber-900 text-amber-50 text-xs py-1.5 px-4 text-center border-b border-amber-800 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>2026년 가을/겨울 중국 무비자 240시간 경유 & 럭셔리 백주 문화 탐방 예약 접수 중</span>
        <span className="hidden sm:inline text-amber-200/60">|</span>
        <span className="hidden sm:inline text-amber-100 font-medium">VIP 전담 컨시어지 1588-8888</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectCategory('all')}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 flex items-center justify-center border border-amber-500/40 shadow-sm">
              <Compass className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
                  至臻中國
                </span>
                <span className="text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-sans font-semibold hidden sm:inline-block">
                  LUXE EXPEDITIONS
                </span>
              </div>
              <p className="text-[11px] text-stone-500 tracking-wider font-medium">중국 프리미엄 맞춤 체험 여행</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-2 rounded-lg transition-all ${
                  activeCategory === cat.id
                    ? 'bg-amber-100/80 text-amber-900 border border-amber-300/80 font-bold shadow-xs'
                    : 'text-stone-600 hover:text-amber-900 hover:bg-stone-100/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConcierge}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-colors shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>AI VIP 컨시어지</span>
            </button>

            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>맞춤 상담 신청</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConcierge}
              className="p-2 text-amber-700 bg-amber-50 rounded-lg border border-amber-200"
              title="AI VIP 컨시어지"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-amber-900 rounded-lg bg-stone-100 border border-stone-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-xs text-left rounded-lg ${
                  activeCategory === cat.id
                    ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                    : 'text-stone-700 bg-stone-50 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                onOpenConcierge();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-stone-100 text-stone-800 border border-stone-300"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>AI VIP 컨시어지 질의응답</span>
            </button>
            <button
              onClick={() => {
                onOpenInquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-amber-600 text-white"
            >
              <Phone className="w-4 h-4" />
              <span>맞춤 프라이빗 일정 상담 신청</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
