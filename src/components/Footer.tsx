import React from 'react';
import { Compass, Phone, Mail, MapPin, Award, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 text-stone-600 text-xs py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-stone-200">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-700 text-white flex items-center justify-center font-bold shadow-xs">
              至
            </div>
            <span className="font-serif text-lg font-bold text-stone-900">Luxe China Expeditions</span>
          </div>
          <p className="text-stone-600 text-[11px] leading-relaxed font-normal">
            상위 1% 경영자 및 동문 그룹을 위한 중국 럭셔리 문화·미식·백주 프라이빗 맞춤 여행 플랫폼
          </p>
          <div className="pt-2 text-[11px] text-amber-900 font-bold">
            VIP 전담 콜센터: 1588-8888
          </div>
        </div>

        {/* Col 2: Programs */}
        <div className="space-y-2">
          <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider">주요 탐방 노선</h4>
          <ul className="space-y-1.5 text-stone-600 text-[11px] font-medium">
            <li>충칭 · 마오타이진 · 서안 3도시 미식 로드</li>
            <li>강남 수향 마을 & 서호 용정차 힐링</li>
            <li>운남 차마고도 & 리장 샹그릴라</li>
            <li>사천 성도 팬더 VIP & 쿠킹 클래스</li>
            <li>돈황 실크로드 모고굴 특수 굴 탐방</li>
          </ul>
        </div>

        {/* Col 3: VIP Services */}
        <div className="space-y-2">
          <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider">VIP 의전 서비스</h4>
          <ul className="space-y-1.5 text-stone-600 text-[11px] font-medium">
            <li>100% 프라이빗 단독 리무진 전용 차편</li>
            <li>한국어 전문 학술 도슨트 가이딩</li>
            <li>마오타이 53° Flying Fairy 정품 구매 보증</li>
            <li>무비자 240시간 경유 발권 대행</li>
            <li>알리페이 / 위챗페이 연동 1:1 세팅 지원</li>
          </ul>
        </div>

        {/* Col 4: Trust Seal */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2 text-[11px] shadow-xs">
          <div className="flex items-center gap-1.5 text-amber-900 font-bold">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>고객 안심 보증 시스템</span>
          </div>
          <p className="text-stone-600 leading-relaxed font-normal">
            모든 여정은 보증금 및 여행자 보험 가입, 5성급 파트너 호텔 직계약으로 가장 안전하게 운영됩니다.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[11px] text-stone-500 gap-4 font-medium">
        <p>© 2026 Luxe China Expeditions (至臻中國). All rights reserved.</p>
        <p>서울시 종로구 세종대로 123 광화문 타워 15층 | 대표전화: 1588-8888 | 사업자등록번호: 120-88-99999</p>
      </div>
    </footer>
  );
};
