export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  linkUrl?: string;
  linkLabel?: string;
  location?: string;
  category?: 'meal' | 'flight' | 'tour' | 'hotel' | 'culture';
}

export interface ItineraryDay {
  dayNumber: number;
  dateStr?: string;
  title: string;
  subTitle: string;
  accommodation: {
    name: string;
    linkUrl?: string;
    starRating?: string;
  };
  timeline: TimelineEvent[];
}

export type ThemeType = '백주/미식' | '역사/문화' | '힐링/자연' | '야경/럭셔리' | 'VIP/프라이빗';

export interface TravelProgram {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  duration: string; // e.g. "4박 5일"
  cities: string[]; // e.g. ["충칭", "마오타이진", "서안"]
  themes: ThemeType[];
  dates: string; // e.g. "2026.11.18(수) ~ 11.22(일) 또는 맞춤형 일정"
  priceRange: string; // e.g. "1인당 240만 ~ 320만 원"
  priceNumber: number; // e.g. 2800000
  heroImage: string;
  gallery: string[];
  concept: string;
  highlights: string[];
  flightsSummary: string;
  cuisineHighlights: string[];
  essentialPrep: string[];
  itinerary: ItineraryDay[];
  isFeatured?: boolean;
}

export interface CustomizedQuote {
  programId: string;
  headcount: number;
  hotelGrade: 'deluxe' | 'luxury_suite';
  hasKoreanGuide: boolean;
  hasPrivateVipVehicle: boolean;
  hasMoutaiPairingDinner: boolean;
  travelDate: string;
  totalEstimateKRW: number;
  perPersonEstimateKRW: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'concierge';
  text: string;
  timestamp: string;
}
