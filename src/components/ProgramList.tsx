import React from 'react';
import { TravelProgram } from '../types';
import { ProgramCard } from './ProgramCard';
import { Compass, SearchX } from 'lucide-react';

interface ProgramListProps {
  programs: TravelProgram[];
  onViewDetail: (program: TravelProgram) => void;
  onOpenCalculator: (programId: string) => void;
  selectedTheme: string;
  searchQuery: string;
}

export const ProgramList: React.FC<ProgramListProps> = ({
  programs,
  onViewDetail,
  onOpenCalculator,
  selectedTheme,
  searchQuery
}) => {
  return (
    <section className="my-10 space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-700" />
            <span>중국 프리미엄 시그니처 10대 추천 프로그램</span>
          </h2>
          <p className="text-xs text-stone-600 mt-1 font-medium">
            {selectedTheme !== 'all' && `#${selectedTheme} 테마 `}
            {searchQuery && `'${searchQuery}' 검색 결과 `}
            (총 {programs.length}개 컬렉션)
          </p>
        </div>
      </div>

      {/* Program Grid */}
      {programs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onViewDetail={onViewDetail}
              onOpenCalculator={onOpenCalculator}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-4 my-8 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto border border-amber-200">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-serif font-bold text-stone-900">검색된 프로그램이 없습니다</h3>
          <p className="text-xs text-stone-600 max-w-md mx-auto">
            입력하신 검색어 또는 테마에 일치하는 탐방 일정이 없습니다. 검색어를 변경하시거나 AI 컨시어지에게 맞춤 코스를 문의해 주세요.
          </p>
        </div>
      )}

    </section>
  );
};
