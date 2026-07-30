import React, { useState } from 'react';
import { TRAVEL_PROGRAMS } from '../data/programs';
import { X, Send, Phone, User, Mail, Calendar, Users, MessageSquare, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgramId?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProgramId = 'chongqing-maotai-xian-4n5d'
}) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    programId: selectedProgramId,
    headcount: '4',
    travelDate: '2026-11-18',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      <div className="bg-white border border-stone-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden text-stone-900 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                VIP 프라이빗 상담
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-3">
                맞춤 프라이빗 일정 상담 신청
              </h3>
              <p className="text-xs text-stone-600 mt-1 font-medium">
                전문 여행 컨시어지가 24시간 이내로 유선 및 이메일로 안내해 드립니다.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">탐방 프로그램</label>
              <select
                value={formData.programId}
                onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600 font-medium"
              >
                {TRAVEL_PROGRAMS.map((prog) => (
                  <option key={prog.id} value={prog.id}>
                    [{prog.duration}] {prog.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">성함 / 그룹 대표자</label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-600 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">연락처</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-600 font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">예상 참가 인원</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={formData.headcount}
                  onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-600 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">희망 출발일</label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 focus:outline-none focus:border-amber-600 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">추가 요청사항 (선택)</label>
              <textarea
                rows={3}
                placeholder="예: SNU EMBA 동문 사총사 모임입니다. 마오타이 53도 시음 만찬과 병마용 단독 가이드 포함 요청합니다."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-900 focus:outline-none focus:border-amber-600 resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all mt-2"
            >
              <Send className="w-4 h-4" />
              <span>상담 신청서 접수하기</span>
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              상담 신청이 완료되었습니다
            </h3>
            <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed font-medium">
              신청해 주신 내용을 바탕으로 Luxe China Expeditions VIP 수석 컨시어지가 24시간 이내에 직접 연락해 드리겠습니다.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs"
            >
              확인
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
