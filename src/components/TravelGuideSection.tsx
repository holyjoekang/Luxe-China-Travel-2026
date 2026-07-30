import React from 'react';
import { ShieldCheck, CreditCard, Wine, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

interface TravelGuideSectionProps {
  onOpenConcierge: () => void;
}

export const TravelGuideSection: React.FC<TravelGuideSectionProps> = ({ onOpenConcierge }) => {
  return (
    <section className="my-12 bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 text-stone-900 shadow-md">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
          VIP 프리미엄 안내
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
          성공적인 중국 맞춤 여행을 위한 필수 3대 가이드
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-medium">
          무비자 경유 정책, 현지 모바일 결제, 마오타이 정품 구매 노하우를 안내해 드립니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Visa 240h */}
        <div className="bg-stone-50/90 p-6 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">
              1. 무비자 240시간 경유 정책 (Visa-Free Transit)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              제3국 연결 항공권 이용 시 비자 발급 절차 없이 최대 10일(240시간) 동안 충칭, 마오타이, 서안, 북경, 상하이 등 주요 도시를 무료 자유 방문할 수 있습니다.
            </p>
            <ul className="text-[11px] text-stone-700 font-medium space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 여권 잔여 유효기간 6개월 이상 필수</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 확정된 출국 항공권 출력본 지참</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 당사 발권팀의 서류 사전 무료 검토 지원</li>
            </ul>
          </div>
          <button
            onClick={onOpenConcierge}
            className="text-xs text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 pt-3 border-t border-stone-200"
          >
            <span>무비자 자격 AI 질의응답</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Mobile Payment */}
        <div className="bg-stone-50/90 p-6 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">
              2. 알리페이 & 위챗페이 신용카드 연동
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              중국 현지는 현금이나 해외 신용카드 직접 결제가 드물며, 모바일 QR 결제가 표준입니다. 출국 전 한국 신용카드를 미리 연동하세요.
            </p>
            <ul className="text-[11px] text-stone-700 font-medium space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Alipay 앱 다운로드 후 한국 신용카드(Visa/Master) 등록</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 여권 본인 인증(Passport Verification) 완료</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 건당 200위안 이하 결제 시 수수료 무료</li>
            </ul>
          </div>
          <button
            onClick={onOpenConcierge}
            className="text-xs text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 pt-3 border-t border-stone-200"
          >
            <span>결제 연동 상세 안내 받기</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 3: Baijiu & Moutai */}
        <div className="bg-stone-50/90 p-6 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center">
              <Wine className="w-6 h-6" />
            </div>
            <h3 className="text-base font-serif font-bold text-stone-900">
              3. 마오타이 53° 귀주태오타이 정품 구별법
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              세계 3대 증류주 마오타이진 국주문화성에서 공인 정품을 안심 구매하고, 53도 Flying Fairy 장향형(醬香型) 백주 시음법을 익힙니다.
            </p>
            <ul className="text-[11px] text-stone-700 font-medium space-y-1.5 pt-2">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 귀주태오타이 정품 구매 가이드 제공 (국주문화성 지정 구매)</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 전용 잔으로 즐기는 장향(醬香) 레이어 시음</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 귀국 시 면세 한도(1인 2병) 수화물 패킹 안내</li>
            </ul>
          </div>
          <button
            onClick={onOpenConcierge}
            className="text-xs text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 pt-3 border-t border-stone-200"
          >
            <span>마오타이 시음 일정 문의</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
