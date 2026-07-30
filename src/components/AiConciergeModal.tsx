import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage, TravelProgram } from '../types';
import { X, Send, Sparkles, Bot, User, RefreshCw, Compass, ExternalLink } from 'lucide-react';

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  selectedProgram?: TravelProgram | null;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({
  isOpen,
  onClose,
  initialPrompt = '',
  selectedProgram
}) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'concierge',
      text: '안녕하세요! Luxe China Expeditions VIP 전담 컨시어지 AI입니다. 중국 프리미엄 문화·미식·백주 탐방, 무비자 240시간 경유 정책, 알리페이 결제 연동, 맞춤 일정 변경에 대해 무엇이든 편하게 물어보세요.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    '중국 서부 3도시 일정의 백주 시음과 마오타이 정품 구매 가이드',
    '무비자 240시간 경유 정책 자격 및 서류 가이드',
    '알리페이/위챗페이에 한국 신용카드 연동하는 방법',
    'SNU EMBA 4인 맞춤 일정 변경 및 예산 상담'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    if (initialPrompt) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          programContext: selectedProgram ? { title: selectedProgram.title, duration: selectedProgram.duration } : null
        })
      });

      const data = await response.json();

      const conciergeMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'concierge',
        text: data.reply || data.fallback || '죄송합니다. 서버 수신 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, conciergeMsg]);
    } catch (error) {
      console.error('Concierge Error:', error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'concierge',
        text: '네트워크 상태를 확인해 주세요. 오류 발생 시 고객센터(1588-8888)로 전화해 주시면 VIP 상담원이 직접 안내해 드립니다.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      
      <div className="bg-white border border-stone-200 rounded-3xl max-w-2xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden text-stone-900">
        
        {/* Header */}
        <div className="bg-stone-50 p-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-stone-900 flex items-center gap-2">
                <span>VIP 전담 여행 컨시어지 AI</span>
                <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md border border-amber-300 font-sans font-bold">
                  Gemini Flash
                </span>
              </h3>
              <p className="text-[11px] text-stone-600 font-medium">실시간 맞춤 코스 설계 & 무비자/결제 전문 가이드</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 bg-stone-200/80 rounded-full hover:bg-stone-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-50/50">
          
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[88%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.sender === 'user'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-amber-800 border border-stone-200 shadow-xs'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div>
                <div
                  className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-amber-600 text-white font-medium rounded-tr-none shadow-xs'
                      : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none shadow-xs font-medium'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-stone-400 mt-1 block px-1 font-medium">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-amber-900 bg-amber-50 p-3 rounded-xl border border-amber-200 w-fit animate-pulse font-medium">
              <RefreshCw className="w-4 h-4 animate-spin text-amber-700" />
              <span>VIP 컨시어지가 맞춤 안내를 작성 중입니다...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Bar */}
        <div className="p-2.5 bg-stone-50 border-t border-stone-200 overflow-x-auto whitespace-nowrap flex gap-2 no-scrollbar">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs transition-colors shrink-0 font-medium shadow-xs"
            >
              💡 {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="궁금한 내용을 입력하세요 (예: 마오타이 백주 시음 일정 변경 방법)..."
            className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 font-medium"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold disabled:opacity-50 transition-colors shrink-0 shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
