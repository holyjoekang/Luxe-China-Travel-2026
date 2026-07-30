import React from 'react';
import { TravelProgram } from '../types';
import { MapPin, Clock, ChevronRight, Award, Sparkles, CheckCircle2, DollarSign } from 'lucide-react';

interface ProgramCardProps {
  program: TravelProgram;
  onViewDetail: (program: TravelProgram) => void;
  onOpenCalculator: (programId: string) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  onViewDetail,
  onOpenCalculator
}) => {
  return (
    <div className="bg-white border border-stone-200 hover:border-amber-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group text-stone-900">
      
      {/* Card Header Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-100">
        <img
          src={program.heroImage}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
            {program.duration}
          </span>
          {program.isFeatured && (
            <span className="bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
              시그니처
            </span>
          )}
        </div>

        {/* Cities Route Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-stone-100 font-semibold bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-stone-700/60 shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">{program.cities.join(' → ')}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Themes Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            {program.themes.map((theme, i) => (
              <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                #{theme}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
            {program.title}
          </h3>

          {/* Subtitle */}
          <p className="text-xs text-stone-600 mt-1 line-clamp-2 font-normal leading-relaxed">
            {program.subtitle}
          </p>

          {/* Highlights */}
          <div className="mt-3 pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-700 font-medium">
            {program.highlights.slice(0, 2).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-1.5 line-clamp-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span className="truncate">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price & Footer Actions */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-stone-500 font-medium">1인 예상 비용:</span>
            <span className="text-sm font-bold text-amber-900 font-serif">{program.priceRange}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetail(program)}
              className="w-full flex items-center justify-center gap-1 py-2 text-xs font-bold rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-colors"
            >
              <span>상세 일정표</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onOpenCalculator(program.id)}
              className="w-full py-2 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-colors shadow-xs"
            >
              견적 계산기
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
