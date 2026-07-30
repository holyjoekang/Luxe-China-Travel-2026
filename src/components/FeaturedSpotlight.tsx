import React from 'react';
import { TravelProgram } from '../types';
import { Calendar, MapPin, Clock, ExternalLink, Sparkles, ChevronRight, Utensils, Wine, Building2, CheckCircle2 } from 'lucide-react';

interface FeaturedSpotlightProps {
  program: TravelProgram;
  onViewDetail: (program: TravelProgram) => void;
  onOpenCalculator: (programId: string) => void;
  onAskConcierge: (prompt: string) => void;
}

export const FeaturedSpotlight: React.FC<FeaturedSpotlightProps> = ({
  program,
  onViewDetail,
  onOpenCalculator,
  onAskConcierge
}) => {
  return (
    <section className="my-10 bg-white border border-amber-200 rounded-3xl overflow-hidden shadow-md relative text-stone-900">
      
      {/* Decorative Top Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700" />

      <div className="p-6 sm:p-8 lg:p-10">
        
        {/* Section Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              대표 추천 시그니처
            </span>
            <span className="text-xs text-amber-900 font-serif font-bold">
              SNU EMBA & 최고경영자 그룹 추천
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 font-medium">
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>{program.dates}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Content (Info + Highlights) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>여정: {program.cities.join(' → ')} (4박 5일)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {program.title}
              </h2>
              <p className="text-sm text-stone-600 mt-2 font-normal leading-relaxed">
                {program.subtitle}
              </p>
            </div>

            {/* Concept Box */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-stone-800 leading-relaxed space-y-1">
              <p className="font-bold text-amber-900">💡 여정 컨셉 & 스토리</p>
              <p className="text-stone-700 font-medium">{program.concept}</p>
            </div>

            {/* Quick Key Highlights Grid */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider">투어 핵심 하이라이트</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-800">
                {program.highlights.slice(0, 4).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotels & Budget Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-stone-100/80 border border-stone-200 text-xs">
              <div>
                <span className="text-stone-500 block font-semibold">예상 예산 (1인당)</span>
                <span className="text-base font-bold text-amber-900 font-serif">{program.priceRange}</span>
              </div>
              <div>
                <span className="text-stone-500 block font-semibold">숙소 구성</span>
                <span className="text-stone-800 font-bold">에스콧 래플스 시티, 힐튼, 소피텔</span>
              </div>
              <div>
                <span className="text-stone-500 block font-semibold">항공편</span>
                <span className="text-stone-800 font-bold">4개 구간 전 일정 직항</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onViewDetail(program)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <span>일정표 전체 및 링크 상세보기</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenCalculator(program.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 text-xs sm:text-sm font-bold transition-colors"
              >
                <span>맞춤 견적 계산</span>
              </button>

              <button
                onClick={() => onAskConcierge('마오타이 53도 시음 일정 및 병마용 VIP 가이드 상세 문의')}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>AI 문의</span>
              </button>
            </div>

          </div>

          {/* Right Preview Card (Day 1-5 Route Flow) */}
          <div className="lg:col-span-5 bg-stone-50/90 p-5 rounded-2xl border border-stone-200 space-y-4">
            <h3 className="text-sm font-serif font-bold text-stone-900 pb-2 border-b border-stone-200 flex items-center justify-between">
              <span>5일간의 요약 여정 흐름</span>
              <span className="text-xs font-sans text-amber-800 font-semibold">4박 5일 스케줄</span>
            </h3>

            <div className="space-y-3 relative text-xs">
              
              {program.itinerary.map((day) => (
                <div key={day.dayNumber} className="relative pl-6 border-l-2 border-amber-300 pb-2 last:pb-0">
                  <div className="absolute -left-[7px] top-0.5 w-3 h-3 rounded-full bg-amber-600 border-2 border-white" />
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-900">
                      Day {day.dayNumber} ({day.dateStr})
                    </span>
                    <span className="text-[11px] text-stone-500 font-medium truncate max-w-[150px]">
                      {day.accommodation.name}
                    </span>
                  </div>

                  <p className="text-stone-800 font-bold text-xs mt-0.5">{day.title.split(': ')[1] || day.title}</p>
                  <p className="text-stone-600 text-[11px] mt-0.5 line-clamp-1">{day.subTitle}</p>
                </div>
              ))}

            </div>

            {/* Quick Links inside Spotlight */}
            <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between text-[11px] text-stone-600 gap-2 font-medium">
              <span>🔗 현지 연결 블로그 & 호텔:</span>
              <div className="flex items-center gap-2 text-amber-800 font-semibold">
                <a href="https://blog.naver.com/suny891126/222862464606" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-0.5">
                  <span>충칭훠궈 후기</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <span>•</span>
                <a href="https://m.blog.naver.com/kmo5186/220607324418" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-0.5">
                  <span>병마용 후기</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
