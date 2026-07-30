import React, { useState } from 'react';
import { TravelProgram, ItineraryDay, TimelineEvent } from '../types';
import { X, Calendar, MapPin, ExternalLink, Hotel, Utensils, Plane, DollarSign, ShieldAlert, Sparkles, Printer, Share2, Check, Clock, ChevronRight, Award } from 'lucide-react';

interface ProgramDetailModalProps {
  program: TravelProgram | null;
  onClose: () => void;
  onOpenCalculator: (programId: string) => void;
  onOpenInquiry: (programId: string) => void;
  onAskConcierge: (prompt: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onOpenCalculator,
  onOpenInquiry,
  onAskConcierge
}) => {
  if (!program) return null;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'hotel_dining' | 'budget' | 'visa'>('itinerary');
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getCategoryBadge = (cat?: string) => {
    switch (cat) {
      case 'flight':
        return <span className="bg-sky-50 text-sky-900 border border-sky-200 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><Plane className="w-2.5 h-2.5 text-sky-700" />항공</span>;
      case 'meal':
        return <span className="bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><Utensils className="w-2.5 h-2.5 text-amber-700" />미식/백주</span>;
      case 'hotel':
        return <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><Hotel className="w-2.5 h-2.5 text-emerald-700" />숙소</span>;
      case 'culture':
        return <span className="bg-purple-50 text-purple-900 border border-purple-200 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><Award className="w-2.5 h-2.5 text-purple-700" />문화/역사</span>;
      default:
        return <span className="bg-stone-100 text-stone-800 border border-stone-200 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"><MapPin className="w-2.5 h-2.5 text-stone-600" />투어</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      
      <div className="bg-white border border-stone-200 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-stone-900 relative">
        
        {/* Modal Header */}
        <div className="bg-stone-50 p-4 sm:p-6 border-b border-stone-200 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 bg-stone-200/80 rounded-full hover:bg-stone-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-900 mb-2 font-bold">
            <span className="bg-amber-100 px-2.5 py-0.5 rounded-md border border-amber-300">{program.duration}</span>
            <span>•</span>
            <span>{program.cities.join(' → ')}</span>
            <span>•</span>
            <span className="text-stone-600">{program.dates}</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 pr-8">
            {program.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
            {program.subtitle}
          </p>

          {/* Modal Tabs Bar */}
          <div className="flex items-center gap-2 mt-6 pt-2 overflow-x-auto border-b border-stone-200 no-scrollbar">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'itinerary'
                  ? 'border-amber-600 text-amber-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              🗓️ 일별 상세 일정표
            </button>
            <button
              onClick={() => setActiveTab('hotel_dining')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'hotel_dining'
                  ? 'border-amber-600 text-amber-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              🏨 숙소 & 미식·백주
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'budget'
                  ? 'border-amber-600 text-amber-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              💰 예산 & 항공 & 포함사항
            </button>
            <button
              onClick={() => setActiveTab('visa')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'visa'
                  ? 'border-amber-600 text-amber-900 bg-white'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              🛂 비자 & 결제 필수 가이드
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: ITINERARY TIMELINE */}
          {activeTab === 'itinerary' && (
            <div className="space-y-8">
              
              {/* Concept Banner */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-stone-800 leading-relaxed font-medium">
                <span className="font-bold text-amber-900">💡 [여정 하이라이트 노트]: </span>
                <span>{program.concept}</span>
              </div>

              {/* Day-by-day Accordion/List */}
              <div className="space-y-8">
                {program.itinerary.map((day: ItineraryDay) => (
                  <div key={day.dayNumber} className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5 space-y-4">
                    
                    {/* Day Title Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-md shadow-xs">
                            Day {day.dayNumber}
                          </span>
                          {day.dateStr && <span className="text-xs text-amber-900 font-bold">{day.dateStr}</span>}
                        </div>
                        <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 mt-1">
                          {day.title}
                        </h3>
                        <p className="text-xs text-stone-600 font-medium">{day.subTitle}</p>
                      </div>

                      {/* Accommodation badge */}
                      <div className="bg-white px-3 py-1.5 rounded-xl border border-stone-200 text-xs text-right shadow-xs">
                        <span className="text-[10px] text-stone-500 block font-semibold">숙소</span>
                        {day.accommodation.linkUrl ? (
                          <a
                            href={day.accommodation.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-800 hover:underline font-bold flex items-center gap-1"
                          >
                            <span>{day.accommodation.name}</span>
                            <ExternalLink className="w-3 h-3 text-amber-700" />
                          </a>
                        ) : (
                          <span className="text-stone-800 font-bold">{day.accommodation.name}</span>
                        )}
                      </div>
                    </div>

                    {/* Timeline Events */}
                    <div className="space-y-3 relative pl-4 sm:pl-6 border-l-2 border-amber-300">
                      {day.timeline.map((event: TimelineEvent, idx: number) => (
                        <div key={idx} className="relative pb-3 last:pb-0">
                          <div className="absolute -left-[21px] sm:-left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-amber-600 border-2 border-white" />
                          
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300">
                              {event.time}
                            </span>
                            {getCategoryBadge(event.category)}
                            <span className="text-sm font-bold text-stone-900">{event.title}</span>
                          </div>

                          <p className="text-xs text-stone-600 mt-1 font-normal leading-relaxed pl-1">
                            {event.description}
                          </p>

                          {/* Link Button if available */}
                          {event.linkUrl && (
                            <div className="mt-1.5 pl-1">
                              <a
                                href={event.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] text-amber-900 hover:text-amber-950 font-bold bg-white px-2.5 py-1 rounded-lg border border-amber-300 transition-colors shadow-xs"
                              >
                                <span>{event.linkLabel || '상세 리뷰 / 링크 보기'}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 2: HOTELS & DINING */}
          {activeTab === 'hotel_dining' && (
            <div className="space-y-6">
              
              {/* Hotel Section */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
                <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-amber-700" />
                  <span>엄선된 5성급 프라이빗 럭셔리 숙소</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {program.itinerary.map((day) => (
                    day.accommodation.linkUrl ? (
                      <a
                        key={day.dayNumber}
                        href={day.accommodation.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-amber-50/50 p-4 rounded-xl border border-stone-200 hover:border-amber-300 transition-all flex flex-col justify-between group shadow-xs"
                      >
                        <div>
                          <span className="text-[10px] text-amber-800 font-bold uppercase">Day {day.dayNumber} 숙소</span>
                          <p className="text-sm font-bold text-stone-900 group-hover:text-amber-900 mt-1">
                            {day.accommodation.name}
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] text-amber-800 font-bold flex items-center gap-1">
                          <span>호텔 공식 가이드 보기</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </a>
                    ) : (
                      <div key={day.dayNumber} className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                        <span className="text-[10px] text-amber-800 font-bold uppercase">Day {day.dayNumber}</span>
                        <p className="text-sm font-bold text-stone-900 mt-1">{day.accommodation.name}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Dining Section */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
                <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-amber-700" />
                  <span>시그니처 특색 미식 & 백주(白酒) 페어링</span>
                </h3>

                <div className="space-y-2">
                  {program.cuisineHighlights.map((cuisine, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-stone-200 text-xs text-stone-800 font-medium shadow-xs">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-bold text-[11px]">
                        0{i + 1}
                      </span>
                      <span>{cuisine}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: BUDGET & INCLUSIONS */}
          {activeTab === 'budget' && (
            <div className="space-y-6">
              
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
                <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-amber-700" />
                  <span>투어 비용 및 포함/불포함 안내</span>
                </h3>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-xs text-stone-600 block font-semibold">1인당 예상 비용 (항공/숙박 포함)</span>
                    <span className="text-2xl font-serif font-bold text-amber-950">{program.priceRange}</span>
                  </div>
                  <button
                    onClick={() => onOpenCalculator(program.id)}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs"
                  >
                    맞춤 실시간 견적 계산
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                  <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2 shadow-xs">
                    <h4 className="font-bold text-emerald-800 uppercase tracking-wider">✅ 포함 사항</h4>
                    <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                      <li>전 일정 4개 구간 직항 및 연결 항공권</li>
                      <li>5성급 럭셔리 호텔 4박 (2인 1실 기준)</li>
                      <li>전 일정 VIP 단독 리무진 전용차량 및 기사</li>
                      <li>한국어 전담 전문 가이드 & 병마용 도슨트</li>
                      <li>일정표 명시 관광지 입장권 (국주문화성, 병마용 등)</li>
                      <li>특색 오찬 및 석산 식사 (훠궈, 귀주요리 등)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2 shadow-xs">
                    <h4 className="font-bold text-amber-900 uppercase tracking-wider">❌ 불포함 사항</h4>
                    <ul className="space-y-1.5 text-stone-700 list-disc list-inside">
                      <li>개인 기호성 마오타이 백주 구매비 (국주문화성 내 정품 구매 가능)</li>
                      <li>일부 매너 팁 및 개인 경비</li>
                      <li>객실 싱글룸 변경 시 추가금</li>
                    </ul>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white text-xs text-stone-700 font-medium flex items-center gap-2 border border-stone-200 shadow-xs">
                  <Plane className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>항공 안내: {program.flightsSummary}</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: VISA & ALIPAY GUIDE */}
          {activeTab === 'visa' && (
            <div className="space-y-6 text-xs">
              
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
                <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-700" />
                  <span>중국 무비자 240시간 경유 정책 (240h Visa-Free Transit)</span>
                </h3>

                <p className="text-stone-700 leading-relaxed font-medium">
                  대한민국 국적자는 제3국(예: 한국 → 중국 도시 A/B → 제3국 또는 직항 편) 연결 일정 이용 시 무비자 240시간 승인을 받을 수 있습니다. 
                  당사에서 항공권 발권 및 무비자 입국 서류 검토를 완벽하게 대행해 드립니다.
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-amber-900">필수 준비사항 체크리스트:</h4>
                  {program.essentialPrep.map((prep, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-stone-200 text-stone-800 font-medium shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <span>{prep}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Sticky Footer Actions */}
        <div className="bg-stone-50 p-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 flex items-center gap-1.5 transition-colors shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? '복사됨' : '일정 공유'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-300 items-center gap-1.5 transition-colors hidden sm:flex shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onAskConcierge(`${program.title} 관련 궁금한 점 문의합니다.`);
              }}
              className="px-3.5 py-2 text-xs font-bold rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>AI 컨시어지 질문</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenCalculator(program.id);
              }}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300"
            >
              맞춤 견적 계산
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry(program.id);
              }}
              className="px-5 py-2 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-xs"
            >
              상담 신청
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
