import React from 'react';
import { Search, MapPin, Sparkles, Award, ShieldCheck, Wine, Globe, Utensils } from 'lucide-react';
import { ThemeType } from '../types';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTheme: string;
  onSelectTheme: (theme: string) => void;
  heroImageUrl?: string;
  onSelectFeatured: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedTheme,
  onSelectTheme,
  heroImageUrl,
  onSelectFeatured
}) => {
  const themes: { id: string; label: string; icon: any }[] = [
    { id: 'all', label: '전체 보기', icon: Globe },
    { id: '백주/미식', label: '백주 & 미식', icon: Wine },
    { id: '역사/문화', label: '역사 & 유적', icon: Award },
    { id: '힐링/자연', label: '자연 & 웰니스', icon: Sparkles },
    { id: '야경/럭셔리', label: '야경 & 럭셔리', icon: Utensils }
  ];

  const defaultHeroBg = heroImageUrl || 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=80';

  return (
    <div className="relative bg-gradient-to-b from-amber-50/80 via-stone-50 to-amber-100/30 text-stone-900 overflow-hidden border-b border-stone-200">
      {/* Background image with bright elegant lighting overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={defaultHeroBg}
          alt="Luxe China Expeditions"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-110 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/80 to-amber-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/30 via-stone-50/70 to-stone-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20">
        
        <div className="max-w-3xl space-y-6 text-left">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-300 text-amber-900 text-xs font-semibold shadow-xs">
            <Award className="w-4 h-4 text-amber-700" />
            <span>상위 1% 경영자·동문 그룹 맞춤 중국 럭셔리 체험 여행</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            천년의 역사와 미식,<br />
            <span className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
              백주(白酒)의 성지를 거니는
            </span><br />
            품격 있는 맞춤 여정
          </h1>

          {/* Subtitle */}
          <p className="text-stone-700 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl">
            충칭 훠궈의 진한 마라 향, 마오타이진 53° 귀주태오타이 시음 만찬, 서안 13왕조 병마용 VIP 도슨트까지. 
            SNU EMBA 및 최고경영자 사총사를 위해 엄선된 10가지 시그니처 프로그램을 만나보세요.
          </p>

          {/* Search Input Bar */}
          <div className="pt-2">
            <div className="relative max-w-xl bg-white/95 backdrop-blur-md rounded-2xl p-1.5 border border-amber-300/80 shadow-md flex items-center">
              <div className="pl-3 text-amber-600">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="도시명, 테마, 키워드 검색 (예: 충칭, 마오타이, 서안, 병마용, 자금성)"
                className="w-full bg-transparent px-3 py-2 text-stone-900 text-xs sm:text-sm placeholder-stone-400 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="px-2 text-xs text-stone-500 hover:text-stone-800 font-semibold"
                >
                  지우기
                </button>
              )}
            </div>
          </div>

          {/* Quick Theme Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-stone-600 font-semibold mr-1">주요 테마:</span>
            {themes.map((theme) => {
              const Icon = theme.icon;
              const isSelected = selectedTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => onSelectTheme(theme.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs transition-all ${
                    isSelected
                      ? 'bg-amber-600 text-white font-bold shadow-sm'
                      : 'bg-white hover:bg-amber-50 text-stone-700 border border-stone-200 font-medium'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{theme.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Feature Banner Bar - 4 Trust Pillars */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-stone-200">
          <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">100% 프라이빗 단독 진행</p>
              <p className="text-[11px] text-stone-600">전 일정 전용 VIP 차편 & 일대일 가이딩</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 shrink-0">
              <Wine className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">마오타이 정품 시음 만찬</p>
              <p className="text-[11px] text-stone-600">국주문화성 & Flying Fairy 53° 페어링</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">5성급 럭셔리 숙소 연계</p>
              <p className="text-[11px] text-stone-600">에스콧, 힐튼, 아만, 반얀트리 등</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-3.5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">무비자 240시간 경유 가이드</p>
              <p className="text-[11px] text-stone-600">알리페이/위챗페이 사전 준비 안내</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
