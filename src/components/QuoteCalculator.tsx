import React, { useState, useMemo } from 'react';
import { TRAVEL_PROGRAMS } from '../data/programs';
import { CustomizedQuote } from '../types';
import { Calculator, Users, Hotel, Car, Wine, Sparkles, Send, CheckCircle2, ChevronRight } from 'lucide-react';

interface QuoteCalculatorProps {
  initialProgramId?: string;
  onSubmitQuote: (quote: CustomizedQuote) => void;
  onAskConcierge: (prompt: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  initialProgramId = 'chongqing-maotai-xian-4n5d',
  onSubmitQuote,
  onAskConcierge
}) => {
  const [selectedProgramId, setSelectedProgramId] = useState(initialProgramId);
  const [headcount, setHeadcount] = useState<number>(4); // Default 4 (SNU EMBA 사총사)
  const [hotelGrade, setHotelGrade] = useState<'deluxe' | 'luxury_suite'>('deluxe');
  const [hasKoreanGuide, setHasKoreanGuide] = useState<boolean>(true);
  const [hasPrivateVipVehicle, setHasPrivateVipVehicle] = useState<boolean>(true);
  const [hasMoutaiPairingDinner, setHasMoutaiPairingDinner] = useState<boolean>(true);
  const [travelDate, setTravelDate] = useState<string>('2026-11-18');

  const selectedProgram = useMemo(() => {
    return TRAVEL_PROGRAMS.find((p) => p.id === selectedProgramId) || TRAVEL_PROGRAMS[0];
  }, [selectedProgramId]);

  // Live price calculation logic
  const calculation = useMemo(() => {
    let basePricePerPerson = selectedProgram.priceNumber;

    // Group size discount or adjustment
    if (headcount >= 6) {
      basePricePerPerson *= 0.92; // 8% group discount
    } else if (headcount === 1) {
      basePricePerPerson *= 1.25; // Single supplement
    }

    // Hotel grade
    if (hotelGrade === 'luxury_suite') {
      basePricePerPerson += 600000;
    }

    // Add-ons per person
    if (hasKoreanGuide) basePricePerPerson += 150000;
    if (hasPrivateVipVehicle) basePricePerPerson += 150000;
    if (hasMoutaiPairingDinner) basePricePerPerson += 300000;

    const perPerson = Math.round(basePricePerPerson / 10000) * 10000;
    const total = perPerson * headcount;

    return { perPerson, total };
  }, [selectedProgram, headcount, hotelGrade, hasKoreanGuide, hasPrivateVipVehicle, hasMoutaiPairingDinner]);

  const handleSubmit = () => {
    const quote: CustomizedQuote = {
      programId: selectedProgram.id,
      headcount,
      hotelGrade,
      hasKoreanGuide,
      hasPrivateVipVehicle,
      hasMoutaiPairingDinner,
      travelDate,
      totalEstimateKRW: calculation.total,
      perPersonEstimateKRW: calculation.perPerson
    };
    onSubmitQuote(quote);
  };

  return (
    <section id="calculator" className="my-10 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-md text-stone-900">
      
      {/* Title Header */}
      <div className="pb-6 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>VIP 맞춤 실시간 견적 계산기</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            나만의 단독 여정 예상 비용 산출
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
            인원수, 호텔 등급, 전용 차편 및 53° 마오타이 시음 만찬 옵션에 따른 실시간 견적을 계산해 드립니다.
          </p>
        </div>

        <button
          onClick={() => onAskConcierge(`${selectedProgram.title} ${headcount}인 맞춤 견적 문의합니다.`)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold transition-colors"
        >
          <Sparkles className="w-4 h-4 text-amber-700" />
          <span>AI 시뮬레이션 상담</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Program Select */}
          <div>
            <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
              1. 탐방 프로그램 선택
            </label>
            <select
              value={selectedProgramId}
              onChange={(e) => setSelectedProgramId(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none font-medium"
            >
              {TRAVEL_PROGRAMS.map((prog) => (
                <option key={prog.id} value={prog.id}>
                  [{prog.duration}] {prog.title} ({prog.cities.join(', ')})
                </option>
              ))}
            </select>
          </div>

          {/* Headcount Slider & Input */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-amber-900 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-700" />
                <span>2. 참가 인원 수 (SNU EMBA / 동문 그룹)</span>
              </label>
              <span className="text-sm font-bold text-amber-900 font-serif bg-amber-100 px-3 py-1 rounded-lg border border-amber-300">
                {headcount}명 {headcount === 4 && '(사총사 스페셜)'}
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={16}
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
              className="w-full accent-amber-600 bg-stone-200 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-500 font-bold">
              <span>1명 (싱글)</span>
              <span>4명 (추천)</span>
              <span>8명</span>
              <span>16명 (단체)</span>
            </div>
          </div>

          {/* Hotel Grade Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider">
              3. 숙소 등급 선택
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setHotelGrade('deluxe')}
                className={`p-3.5 rounded-2xl border text-left text-xs transition-all ${
                  hotelGrade === 'deluxe'
                    ? 'bg-amber-50 border-amber-500 text-amber-900 font-bold shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>5성급 정통 럭셔리</span>
                  {hotelGrade === 'deluxe' && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </div>
                <p className="text-[11px] text-stone-500 mt-1 font-normal">에스콧 래플스, 힐튼, 소피텔급 디럭스룸</p>
              </button>

              <button
                type="button"
                onClick={() => setHotelGrade('luxury_suite')}
                className={`p-3.5 rounded-2xl border text-left text-xs transition-all ${
                  hotelGrade === 'luxury_suite'
                    ? 'bg-amber-50 border-amber-500 text-amber-900 font-bold shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>최고급 임페리얼 스위트</span>
                  {hotelGrade === 'luxury_suite' && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </div>
                <p className="text-[11px] text-stone-500 mt-1 font-normal">이그제큐티브 스위트룸 & VIP 라운지 포함 (+60만원)</p>
              </button>
            </div>
          </div>

          {/* Add-on Options */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider">
              4. VIP 단독 맞춤 옵션 선택
            </label>

            <div className="space-y-2 text-xs">
              
              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200 cursor-pointer hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasKoreanGuide}
                    onChange={(e) => setHasKoreanGuide(e.target.checked)}
                    className="accent-amber-600 w-4 h-4 rounded"
                  />
                  <div>
                    <p className="font-bold text-stone-900">한국어 전문 도슨트 & 병마용 VIP 단독 가이드</p>
                    <p className="text-[11px] text-stone-500">전 일정 한국인 또는 한국어 완벽 전담 도슨트 동행</p>
                  </div>
                </div>
                <span className="text-amber-800 font-bold shrink-0">+15만원/인</span>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200 cursor-pointer hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasPrivateVipVehicle}
                    onChange={(e) => setHasPrivateVipVehicle(e.target.checked)}
                    className="accent-amber-600 w-4 h-4 rounded"
                  />
                  <div>
                    <p className="font-bold text-stone-900">VIP 단독 7인승 럭셔리 리무진 차량</p>
                    <p className="text-[11px] text-stone-500">공항 픽업/샌딩 및 전 일정 단독 의전 기사 지원</p>
                  </div>
                </div>
                <span className="text-amber-800 font-bold shrink-0">+15만원/인</span>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-200 cursor-pointer hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={hasMoutaiPairingDinner}
                    onChange={(e) => setHasMoutaiPairingDinner(e.target.checked)}
                    className="accent-amber-600 w-4 h-4 rounded"
                  />
                  <div>
                    <p className="font-bold text-stone-900">Flying Fairy 53° 귀주태오타이 VIP 시음 만찬</p>
                    <p className="text-[11px] text-stone-500">1915 광장 최상급 귀주 정통 다이닝 & 마오타이 백주 페어링</p>
                  </div>
                </div>
                <span className="text-amber-800 font-bold shrink-0">+30만원/인</span>
              </label>

            </div>
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
              5. 희망 출발일 선택
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-xs text-stone-900 focus:outline-none font-medium"
            />
          </div>

        </div>

        {/* Right Summary Card (5 cols) */}
        <div className="lg:col-span-5 bg-stone-50/90 p-6 rounded-2xl border border-stone-200 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            <div className="pb-3 border-b border-stone-200">
              <span className="text-[11px] text-amber-800 uppercase font-bold tracking-wider">실시간 예상 견적 요약</span>
              <h3 className="text-lg font-serif font-bold text-stone-900 mt-0.5">{selectedProgram.title}</h3>
              <p className="text-xs text-stone-600 font-medium">{headcount}인 단독 진행 기준 ({travelDate})</p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs font-medium">
              <div className="flex justify-between text-stone-700">
                <span>프로그램 기본가 (1인)</span>
                <span>{selectedProgram.priceNumber.toLocaleString()} 원</span>
              </div>
              <div className="flex justify-between text-stone-700">
                <span>인원 ({headcount}명) 조건</span>
                <span>{headcount >= 6 ? '그룹 8% 할인 적용' : '표준 요금'}</span>
              </div>
              <div className="flex justify-between text-stone-700">
                <span>숙소 옵션</span>
                <span>{hotelGrade === 'luxury_suite' ? '+600,000 원/인' : '기본 디럭스'}</span>
              </div>
              <div className="flex justify-between text-stone-700">
                <span>선택된 VIP 옵션</span>
                <span>
                  {((hasKoreanGuide ? 15 : 0) + (hasPrivateVipVehicle ? 15 : 0) + (hasMoutaiPairingDinner ? 30 : 0)).toLocaleString()} 만원/인
                </span>
              </div>
            </div>

            {/* Total Highlight Box */}
            <div className="mt-6 p-5 rounded-2xl bg-amber-50 border border-amber-300 space-y-2 text-center shadow-xs">
              <span className="text-xs text-amber-900 block font-bold">1인당 최종 예상 비용</span>
              <div className="text-3xl font-serif font-bold text-amber-950">
                {calculation.perPerson.toLocaleString()} <span className="text-sm font-sans">원</span>
              </div>
              <div className="text-xs text-stone-600 pt-2 border-t border-amber-200 font-medium">
                총 그룹 전체 비용 ({headcount}명): <span className="text-amber-900 font-bold">{calculation.total.toLocaleString()} 원</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>이 견적으로 맞춤 일정 예약 상담 신청</span>
            </button>

            <p className="text-[10px] text-stone-500 text-center font-medium">
              * 항공 및 현지 사정에 따라 실제 확정 금액은 미세하게 조정될 수 있습니다.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
