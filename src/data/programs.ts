import { TravelProgram } from '../types';

export const TRAVEL_PROGRAMS: TravelProgram[] = [
  {
    id: 'chongqing-maotai-xian-4n5d',
    title: '중국 서부 3개 도시 미식과 백주 문화 탐방',
    subtitle: '충칭 훠궈, 마오타이 53° 귀주태오타이, 서안 13왕조 병마용 프리미엄 로드',
    tagline: '미식, 백주(白酒), 그리고 천년의 역사가 어우러진 상위 1% VIP 특별 여정',
    duration: '4박 5일',
    cities: ['충칭', '마오타이진', '서안'],
    themes: ['백주/미식', '역사/문화', 'VIP/프라이빗', '야경/럭셔리'],
    dates: '2026년 11월 18일(수) ~ 11월 22일(일) [일정 변경 가능]',
    priceRange: '1인당 약 240만 원 ~ 320만 원',
    priceNumber: 2800000,
    isFeatured: true,
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '미식, 백주(白酒), 그리고 역사가 어우러진 SNU EMBA 및 최고경영자 사총사의 특별 프라이빗 여정. 압도적인 산악도시 충칭의 밤, 세계 백주의 성지 마오타이진, 실크로드의 기점 서안까지 연결하는 럭셔리 탐방입니다.',
    highlights: [
      '세계 최대 백주 박물관 "국주문화성" 및 53° Flying Fairy 정품 마오타이 VIP 시음 만찬',
      '아파트를 관통하는 리쯔바 모노레일 및 홍야동 천사문대교 황금 야경 프라이빗 포토투어',
      '충칭 정통 마라 훠궈 및 세계 최대 식당 탐방, 서안 양러우파오모 미식',
      '서안 병마용 박물관 1~3호 갱 한국어 전문 가이드 프라이빗 도슨트',
      '5성급 럭셔리 숙소: 에스콧 래플스 시티 충칭, 힐튼 가든 인 마오타이, 소피テル 서안'
    ],
    flightsSummary: '4개 구간 전 일정 직항 및 단거리 편리 노선 이용 (대한항공, 중국국제항공, 중국동방항공 등)',
    cuisineHighlights: [
      '충칭: 정통 마라 훠궈 (저우선배 / 세계 최대 훠궈 식당) & 충칭 소면',
      '마오타이: 귀주 정통 요리 (파삭두부, 귀양 쌀국수) & Flying Fairy 53° 백주 페어링',
      '서안: 양러우파오모 (양고기 국밥), 러우자모, 비앙비앙면, 서봉주 (西鳳酒)'
    ],
    essentialPrep: [
      '알리페이(Alipay) 및 위챗페이(WeChat Pay) 한국 신용카드 사전 등록 필수',
      '무비자 240시간 경유 정책(Visa-Free 240h Transit) 자격 확인 및 여권 만료일 점검',
      '마오타이 정품 구매를 위한 여권 원본 휴대 및 수화물 규정 확인'
    ],
    itinerary: [
      {
        dayNumber: 1,
        dateStr: '11월 18일(수)',
        title: '제1일: 충칭, 산과 강 위의 압도적 야경',
        subTitle: '인천 출발 → 충칭 강베이 공항 → 에스콧 래플스 시티 → 훠궈 만찬 & 홍야동 야경',
        accommodation: {
          name: 'Ascott Raffles City Chongqing (에스콧 래플스 시티 충칭)',
          linkUrl: 'https://www.discoverasr.com/en/ascott-the-residence/china/ascott-raffles-city-chongqing'
        },
        timeline: [
          { time: '14:00', title: '인천공항(ICN) 출발', description: '대한항공/제주항공 직항 탑승 (약 2시간 55분 소요)', category: 'flight' },
          { time: '16:55', title: '충칭 강베이 국제공항(CKG) 도착', description: '전용 VIP 리무진 차량 미팅 및 시내 에스콧 래플스 시티로 이동', category: 'tour' },
          { time: '19:00', title: '에스콧 래플스 시티 체크인', description: '해방비(解放碑) 및 랜드마크 래플스 시티 객실 휴식', category: 'hotel' },
          { time: '20:00', title: '저녁 식사 – 정통 충칭 훠궈', description: '추천: 저우선배 또는 세계 최대 규모 훠궈 식당 (알싸한 마라 향과 육수의 풍미)', linkUrl: 'https://blog.naver.com/suny891126/222862464606', linkLabel: '충칭 훠궈 탐방기', category: 'meal' },
          { time: '21:00', title: '홍야동(洪崖洞) 야경 관람', description: '센과 치히로의 행방불명 현실판 홍야동 절벽 야경 및 천사문대교 포토스팟 프라이빗 스냅', category: 'tour' },
          { time: '22:30', title: '해방비 보행가 야시장 산책', description: '충칭 중심가 나이트 라이프 및 라운지 나이트캡', category: 'tour' }
        ]
      },
      {
        dayNumber: 2,
        dateStr: '11월 19일(목)',
        title: '제2일: 충칭의 아침을 지나 백주의 성지 마오타이로',
        subTitle: '리쯔바 모노레일 → 카오위 오찬 → 마오타이 공항 이동 → 츠수이허 야경',
        accommodation: {
          name: 'Hilton Garden Inn Guizhou Maotai Town (힐튼 가든 인 귀주 마오타이 타운)',
          linkUrl: 'https://www.hilton.com/en/hotels/wmtmtgi-hilton-garden-inn-guizhou-maotai-town/'
        },
        timeline: [
          { time: '08:30', title: '호텔 조식 또는 충칭 소면 체험', description: '깊고 매콤한 육수의 정통 충칭 소면(小面) 별미 아침', category: 'meal' },
          { time: '09:30', title: '리쯔바(李子坝) 역 관람', description: '아파트 건물 6층을 그대로 관통하는 이색 모노레일 전망대 프라이빗 감상', category: 'tour' },
          { time: '11:00', title: '현지식 오찬 (카오위)', description: '사천식 민물고기 찜 구이 카오위(烤魚) 및 고급 요리 오찬 후 공항 이동', category: 'meal' },
          { time: '16:55', title: '충칭(CKG) 출발 → 17:45 마오타이(WMT) 도착', description: '준이 마오타이 공항 도착 후 전용 차편 이동', category: 'flight' },
          { time: '19:00', title: '마오타이진 호텔 체크인', description: '힐튼 가든 인 귀주 마오타이 타운 객실 체크인', category: 'hotel' },
          { time: '20:00', title: '츠수이허(赤水河) 강변 야경 산책', description: '붉은 물길 츠수이허 강변과 은은한 술향기가 감도는 양조 마을의 아늑한 야경', category: 'tour' }
        ]
      },
      {
        dayNumber: 3,
        dateStr: '11월 20일(금)',
        title: '제3일: 마오타이진, 백주 문화의 심장 (Full Day)',
        subTitle: '국주문화성 → 톈양경구 전망대 → 양조장 VIP 참관 → 1915 광장 53° 시음 만찬',
        accommodation: {
          name: 'Hilton Garden Inn Guizhou Maotai Town (힐튼 가든 인 귀주 마오타이 타운)',
          linkUrl: 'https://www.hilton.com/en/hotels/wmtmtgi-hilton-garden-inn-guizhou-maotai-town/'
        },
        timeline: [
          { time: '09:00', title: '국주문화성(中國酒文化城) 방문', description: '세계 최대 규모 술 박물관 참관 및 정품 마오타이 구매 기회 제공', category: 'culture' },
          { time: '12:00', title: '귀주 정통 요리 오찬', description: '귀양 쌀국수, 바삭두부 등 귀주성 특색 미식 오찬', category: 'meal' },
          { time: '14:00', title: '마오타이 양조 참관 & 톈양경구(天釀景區) 전망대', description: '마오타이 양조 마을 전체의 파노라마 뷰 감상 및 고서 전통 양조 공정 탐방', linkUrl: 'https://kr.trip.com/things-to-do/experiences/renhuai-day-tour/?productId=17858709', linkLabel: '마오타이 체험 상세', category: 'tour' },
          { time: '16:00', title: '프리미엄 백주 마스터클래스', description: '백주 소믈리에와 함께하는 장향형(醬香型) 백주 시음 & 복합적 향의 레이어 재해석', category: 'culture' },
          { time: '19:00', title: '1915 광장 & Flying Fairy 53° 만찬', description: '파나마 엑스포 수상 기념 1915 광장에서 귀주 최상급 요리와 Kweichow Moutai 53° 마오타이 페어링', category: 'meal' }
        ]
      },
      {
        dayNumber: 4,
        dateStr: '11월 21일(토)',
        title: '제4일: 서안, 13왕조의 고도와 시간의 무게',
        subTitle: '마오타이 출발 → 서안 도착 → 병마용 박물관 → 서안 성벽 야경 → 대당불야성',
        accommodation: {
          name: "Sofitel Xi'an on Renmin Square (서안 소피텔 렌민 스퀘어)",
          linkUrl: 'https://www.sofitel.com'
        },
        timeline: [
          { time: '10:35', title: '마오타이(WMT) 출발 → 12:25 서안(XIY) 도착', description: '서안 셴양 국제공항 도착 후 단독 가이드 미팅', category: 'flight' },
          { time: '14:00', title: '병마용 박물관(兵馬俑) VIP 관람', description: '세계 8대 기적 1~3호 갱 관람 (한국어 전문 도슨트 VIP 가이딩)', linkUrl: 'https://m.blog.naver.com/kmo5186/220607324418', linkLabel: '서안 병마용 후기', category: 'culture' },
          { time: '18:00', title: '서안 성벽 야경 & 종루/고루 광장', description: '중국에서 가장 완벽히 보존된 고대 성벽 석양 및 야경 산책', category: 'tour' },
          { time: '20:00', title: '회민가(回民街) 야시장 미식 만찬', description: '양러우파오모, 러우자모, 비앙비앙면 및 서안 명주 서봉주(西鳳酒) 반주', category: 'meal' },
          { time: '22:00', title: '대당불야성(大唐不夜城) 야간 공연', description: '당나라 황금시대를 생생하게 재현한 미디어아트 및 스트리트 가야금/무용 공연', category: 'tour' }
        ]
      },
      {
        dayNumber: 5,
        dateStr: '11월 22일(일)',
        title: '제5일: 실크로드의 기점에서 여정의 마무리',
        subTitle: '대안탑 아침 산책 → 서안 셴양 공항 → 인천 귀국',
        accommodation: {
          name: '귀국 (인천 국제공항 도착)'
        },
        timeline: [
          { time: '07:30', title: '대안탑 및 성벽 아침 산책', description: '삼장법사가 경전을 보관했던 대안탑 주변 차분한 아침 정원 산책', category: 'tour' },
          { time: '09:30', title: '호텔 조식 및 특산품 점검', description: '마오타이, 서안 로우지모, 실크 기념품 최종 점검 및 패킹', category: 'hotel' },
          { time: '10:00', title: '서안 셴양 국제공항 이동', description: '전용차량 공항 출국장 이동 및 체크인', category: 'tour' },
          { time: '12:55', title: '서안(XIY) 출발 → 16:45 인천(ICN) 도착', description: '인천 국제공항 안전 귀국 및 여정 마무리', category: 'flight' }
        ]
      }
    ]
  },
  {
    id: 'jiangnan-suhang-wuzhen-4n5d',
    title: '강남 수향 마을 & 용정명차 프라이빗 힐링 여정',
    subtitle: '상하이 와이탄 요트, 항주 서호 프라이빗 목선 차회, 우전 수향 고택 리조트',
    tagline: '동양의 베니스 수향의 아침 안개와 황실 용정차 향기에 젖어드는 고품격 휴식',
    duration: '4박 5일',
    cities: ['상하이', '항주', '우전'],
    themes: ['힐링/자연', '역사/문화', 'VIP/프라이빗', '야경/럭셔리'],
    dates: '상시 출발 가능 (봄/가을 최적기)',
    priceRange: '1인당 약 220만 원 ~ 290만 원',
    priceNumber: 2500000,
    heroImage: 'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '상하이의 화려한 스카이라인, 항주 서호의 서정적인 호수 차회, 천년 수향 마을 우전의 고요한 물길을 잇는 여성/부부/동문그룹 맞춤형 강남 힐링 투어입니다.',
    highlights: [
      '항주 서호(西湖) 단독 프라이빗 목선 선상 차회 (사봉 용정차 다도 시연)',
      '우전(烏鎮) 서책 야경 및 수향 마을 고급 자작나무 고택 부티크 호텔 1박',
      '상하이 황포강 VIP 요트 프라이빗 야경 다이닝 & 미슐랭 2스타 정통 게요리',
      '장쑤성 명장 자사호(紫砂壺) 도예 체험 및 프라이빗 실크 자수 마스터클래스'
    ],
    flightsSummary: '인천-상하이(푸동/홍차오) 아시아나/대한항공 일일 다수 직항 편 이용',
    cuisineHighlights: ['상하이 상해게(대闸蟹) 요리', '항주 동파육 & 거지닭', '우전 수향 객잔 은어 튀김'],
    essentialPrep: ['항주 서호 다도 복장 렌탈 서비스 사전 예약', '알리페이 간편결제 서비스 등록'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 상하이의 화려함과 황포강 요트 라이프',
        subTitle: '인천 출발 → 상하이 푸동 → 와이탄 VIP 요트 차터ing & 게요리 다이닝',
        accommodation: { name: 'The Peninsula Shanghai (더 페닌술라 상하이)' },
        timeline: [
          { time: '12:00', title: '상하이 푸동 공항 도착', description: '전용 리무진 차량 단독 픽업', category: 'flight' },
          { time: '18:30', title: '황포강 VIP 프라이빗 요트 탑승', description: '와이탄 야경을 바라보는 요트 선상 샴페인', category: 'tour' }
        ]
      },
      {
        dayNumber: 2,
        title: '제2일: 항주 서호의 서정, 용정차 다도 세션',
        subTitle: '상하이 출발 → 항주 이동 → 서호 목선 차회 → 사봉 용정 차밭 산책',
        accommodation: { name: 'Amanfayun Hangzhou (아만파윤 항주)' },
        timeline: [
          { time: '10:00', title: '서호 단독 목선 차회', description: '호수 중앙에서 즐기는 용정차 다도', category: 'culture' }
        ]
      }
    ]
  },
  {
    id: 'yunnan-tea-horse-road-5n6d',
    title: '운남 차마고도 & 리장·샹그릴라 힐링 익스페디션',
    subtitle: '리장 구시가지, 옥룡설산 헬기 전망, 샹그릴라 송찬 고택 프리미엄 리조트',
    tagline: '세계에서 가장 오래된 무역로 차마고도에서 만나는 순수의 자연과 웅장한 설산',
    duration: '5박 6일',
    cities: ['리장', '샹그릴라', '대리'],
    themes: ['힐링/자연', '역사/문화', 'VIP/프라이빗'],
    dates: '연중 운영 (4월~11월 최고 환상)',
    priceRange: '1인당 약 280만 원 ~ 360만 원',
    priceNumber: 3100000,
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '만년 설산 옥룡설산의 장엄함과 나시족의 천년 음악, 그리고 차마고도의 진품 보이차 향기를 담아내는 유기농 웰니스 여정입니다.',
    highlights: [
      '샹그릴라 송찬(Songtsam) 럭셔리 로지 고택 리조트 연계 숙박',
      '옥룡설산 파노라마 및 나시족 전통 고음악 프라이빗 관람',
      '호장협(虎跳峽) 웅장한 협곡 전용 리조트 티타임',
      '보이차 명장과의 vintage 1980년대 보이생차 시음회'
    ],
    flightsSummary: '인천-리장 직항 또는 청두/쿤밍 경유 프라이빗 연결',
    cuisineHighlights: ['운남 야생 버섯 전골', '나시족 흑돼지 구이', '티베트 수유차 & 족발 냄비'],
    essentialPrep: ['고산지대(2400m~3300m) 적응을 위한 휴대용 산소캔 제공', '편안한 트레킹화 준비'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 리장 고성의 밤과 나시족 등불',
        subTitle: '리장 공항 도착 → 고성 부티크 객실 체크인 → 나시 고음악 관람',
        accommodation: { name: 'Banyan Tree Lijiang (반얀트리 리장)' },
        timeline: [
          { time: '15:00', title: '리장 고성 정원 산책', description: '물길이 흐르는 나시족 전통 고성 탐방', category: 'tour' }
        ]
      }
    ]
  },
  {
    id: 'sichuan-panda-chef-4n5d',
    title: '사천 성도 팬더 VIP & 셰프 쿠킹 클래스 & 청성산 도교 웰니스',
    subtitle: '성도 팬더 기지 VIP 프라이빗 개방, 식객 사천 요리 마스터클래스, 식스센스 청성산',
    tagline: '귀여운 자이언트 팬더와의 특별한 만남과 매콤함 뒤에 숨겨진 사천 미식의 정수',
    duration: '4박 5일',
    cities: ['성도', '청성산'],
    themes: ['백주/미식', '힐링/자연', 'VIP/프라이빗'],
    dates: '매월 지정 출발',
    priceRange: '1인당 약 230만 원 ~ 310만 원',
    priceNumber: 2600000,
    heroImage: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '자이언트 팬더의 고향 성도에서 팬더 기지 VIP 비공개 구간 투어와 마스터 셰프에게 직접 배우는 마파두부 & 공보계정 쿠킹 클래스, 청성산 식스센스의 온천 웰니스를 함께 누립니다.',
    highlights: [
      '성도 자이언트 팬더 번식연구기지 아침 일반인 개방 전 VIP 비공개 케어 관람',
      '사천 요리 박물관에서 명장 셰프와 함께하는 정통 사천 요리 다이닝 쿠킹 클래스',
      '도교의 발상지 청성산(青城山) 식스센스 리조트 럭셔리 온천 스파',
      '변검(變臉) 사천 극장 프라이빗 로얄 박스석 시청'
    ],
    flightsSummary: '인천-성도(천부/쌍류) 직항 아시아나/중국국제항공 이용',
    cuisineHighlights: ['마스터 오마카세 사천 훠궈', '궁보계정 & 마파두부 프라이빗 쿠킹', '청성산 정통 산채 약선요리'],
    essentialPrep: ['쿠킹 클래스 유니폼 제공', '스파 이용을 위한 편안한 복장'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 성도의 여유와 사천 변검 로얄 박스',
        subTitle: '성도 공항 도착 → 럭셔리 호텔 체크인 → 변검 공연 & 사천 훠궈',
        accommodation: { name: 'The Temple House Chengdu (더 템플 하우스 성도)' },
        timeline: [
          { time: '19:00', title: '변검 극장 로얄 박스석 관림', description: '순식간에 얼굴 가면이 바뀌는 사천 독점 기예', category: 'culture' }
        ]
      }
    ]
  },
  {
    id: 'guilin-yangshuo-karst-3n4d',
    title: '계림·양삭 라오강 프라이빗 대나무 뗏목 & 동굴 럭셔리 다이닝',
    subtitle: '이강 산수 수묵화 리버크루즈, 카르스트 동굴 와인 뱅킷, 반얀트리 양삭',
    tagline: '천하으뜸 계림 산수 한가운데서 펼쳐지는 한 편의 수묵화 같은 신선놀음',
    duration: '3박 4일',
    cities: ['계림', '양삭'],
    themes: ['힐링/자연', '야경/럭셔리', 'VIP/프라이빗'],
    dates: '봄/가을 최적기 운영',
    priceRange: '1인당 약 210만 원 ~ 270만 원',
    priceNumber: 2300000,
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '중국 20위안 지폐의 배경인 양삭 흥평가경에서 프라이빗 모터 대나무 뗏목을 타고, 천연 카르스트 동굴 내부에서 펼쳐지는 캐들라이트 럭셔리 와인 만찬을 즐기는 감성 여행입니다.',
    highlights: [
      '이강(漓江) VIP 전용 럭셔리 크루즈 단독 층 탑승',
      '자연 카르스트 동굴 내 촛불 와인 다이닝 세션',
      '반얀트리 양삭 (Banyan Tree Yangshuo) 빌라 리조트 2박',
      '인상유삼저(印象劉三姐) 수상 유목 라이브 쇼 VIP 최고석'
    ],
    flightsSummary: '인천-계림 직항 노선 또는 성도/광저우 환승 VIP',
    cuisineHighlights: ['양삭 맥주물고기(啤酒魚)', '계림 쌀국수 프라이빗 오찬', '동굴 촛불 와인 뱅킷'],
    essentialPrep: ['수상 뗏목 탑승 시 챙길 선글라스/모자', '저녁 동굴 다이닝 드레스코드 럭셔리 캐주얼'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 한 폭의 수묵화 계림 도착',
        subTitle: '계림 양강 공항 도착 → 전용 리무진 양삭 이동 → 반얀트리 리조트',
        accommodation: { name: 'Banyan Tree Yangshuo (반얀트리 양삭)' },
        timeline: [
          { time: '17:00', title: '양삭 이강 석양 트레킹', description: '기암괴석 사이로 떨어지는 일몰', category: 'tour' }
        ]
      }
    ]
  },
  {
    id: 'dunhuang-silkroad-desert-4n5d',
    title: '실크로드의 정수: 돈황 사막 글램핑 & 모고굴 프라이빗 특별 개방',
    subtitle: '돈황 모고굴 미개방 특별 굴 수석 연구원 VIP 가이딩, 명사산 사막 별빛 샴페인',
    tagline: '천년 실크로드의 찬란한 벽화와 밤하늘 사막 쏟아지는 은하수 아래에서',
    duration: '4박 5일',
    cities: ['돈황', '난주'],
    themes: ['역사/문화', 'VIP/프라이빗', '야경/럭셔리'],
    dates: '5월~10월 한정 운영',
    priceRange: '1인당 약 320만 원 ~ 410만 원',
    priceNumber: 3500000,
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '일반 관람객에게 닫혀 있는 모고굴 특별 개방 굴을 돈황 연구원 고위 학자의 단독 도슨트로 감상하고, 명사산 사막 위 럭셔리 글램핑과 사막 헬기투어를 경험하는 최고급 사막 익스페디션입니다.',
    highlights: [
      'UNESCO 세계유산 모고굴(莫高窟) 일반 미개방 특수 굴 4곳 단독 연구원 도슨트',
      '명사산 초승달 오아시스(월아천) 프라이빗 헬리콥터 비행',
      '사막 럭셔리 스위트 텐트 글램핑 & 별빛 와인 파티',
      '돈황 고대 문헌 음미 및 오아시스 미식 뱅킷'
    ],
    flightsSummary: '인천-서안/난주-돈황 연결 직항 편',
    cuisineHighlights: ['돈황 당나귀 고기 샌드위치', '실크로드 양갈비 구이', '오아시스 와이너리 와인'],
    essentialPrep: ['사막 보온 의류 및 자외선 차단용 선글라스/스카프', '카메라 렌즈 방사 케이스'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 오아시스 도시 돈황 입성',
        subTitle: '돈황 공항 도착 → 모고굴 연구원 사전 오리엔테이션',
        accommodation: { name: 'The Silk Road Dunhuang Hotel' },
        timeline: [
          { time: '20:00', title: '돈황 야시장 문화 탐방', description: '건과류 및 실크로드 특산품 구경', category: 'tour' }
        ]
      }
    ]
  },
  {
    id: 'beijing-imperial-palace-3n4d',
    title: '북경 제국 역사 & 자금성 야간 VIP 독점 참관',
    subtitle: '아만 이화원, 자금성 폐장 후 비공개 특별입장, 만리장성 뮤톈위 석양 샴페인',
    tagline: '황제만이 누리던 제국의 정원에서 느끼는 품격, 역사 마니아를 위한 시그니처',
    duration: '3박 4일',
    cities: ['북경'],
    themes: ['역사/문화', 'VIP/프라이빗', '야경/럭셔리'],
    dates: '연중 운영',
    priceRange: '1인당 약 260만 원 ~ 340만 원',
    priceNumber: 2900000,
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '일반 개방 시간이 끝난 한적한 자금성(고궁박물원)을 전용 사학자와 함께 독점 조용히 거닐고, 만리장성 위에서 지는 노을을 바라보며 샴페인을 기울이는 황실급VIP 리셉션입니다.',
    highlights: [
      'Aman at Summer Palace (아만 이화원) 황실 정원 직통 게이트 스위트룸 숙박',
      '자금성(Forbidden City) 폐장 후 프라이빗 독점 도슨트 투어',
      '만리장성 뮤톈위 구간 타워 단독 대여 석양 샴페인 리셉션',
      'Duck de Chine (덕드신) 오크나무 화덕 베이징덕 황실 코스 요리'
    ],
    flightsSummary: '인천/김포-북경(수도/다싱) 국적기 일일 직항 다수',
    cuisineHighlights: ['Duck de Chine 오크나무 화덕 베이징덕', '황실 약선 삼계탕', '경극 문향 주점 코스'],
    essentialPrep: ['자금성 독점 참관 여권 정보 2주 전 사전 승인 제출 필요'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 황실 정원 아만 이화원의 품격',
        subTitle: '북경 공항 도착 → 아만 이화원 체크인 → 베이징덕 다이닝',
        accommodation: { name: 'Aman at Summer Palace (아만 이화원)' },
        timeline: [
          { time: '18:00', title: '덕드신 정통 베이징덕 만찬', description: '바삭한 껍질과 진한 소스의 정수', category: 'meal' }
        ]
      }
    ]
  },
  {
    id: 'zhangjiajie-avatar-helicopter-4n5d',
    title: '장가계 아바타 비경 & 천문산 단독 헬기 투어',
    subtitle: '아바타 할렐루야 산 프라이빗 헬기 aerial 뷰, 유리다리 VIP, 상서 요리',
    tagline: '영화 아바타의 실제 무대, 신선이 노니는 하늘 위 봉우리들을 한눈에 담다',
    duration: '4박 5일',
    cities: ['장가계'],
    themes: ['힐링/자연', 'VIP/프라이빗', '야경/럭셔리'],
    dates: '4월~11월 매주 출발',
    priceRange: '1인당 약 250만 원 ~ 320만 원',
    priceNumber: 2700000,
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508672019048-8054797677a3?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '줄 서는 대기 없이 Fast-Track 패스트트랙 통과로 편안하게 대협곡 유리다리를 거닐고, 단독 헬리콥터 비행으로 3,000여 개 기암괴석 봉우리 사이를 누비는 장가계 최고의 럭셔리 투어입니다.',
    highlights: [
      '원가계/천자산 단독 헬리콥터 패노라마 비행',
      '장가계 대협곡 유리다리 및 천문산 케이블카 VIP Fast-Track 무대기',
      '마운틴 뷰 럭셔리 풀빌라 리조트 3박',
      '상서 토가족 산채 정식 & 매콤한 향토 미식'
    ],
    flightsSummary: '인천-장가계 에어부산/대한항공 직항',
    cuisineHighlights: ['상서 토가족 삼하솥(三下鍋)', '장가계 약선 오골계', '산채 수제 두부'],
    essentialPrep: ['고소공포증 있는 분을 위한 대체 케이블카 코스 완비'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 장가계 신선의 세계 도착',
        subTitle: '장가계 직항 공항 도착 → 마운틴 풀빌라 체크인',
        accommodation: { name: 'Homeland Resort Zhangjiajie' },
        timeline: [
          { time: '18:00', title: '토가족 전통 가야금 만찬', description: '청정한 산채 특색 요리', category: 'meal' }
        ]
      }
    ]
  },
  {
    id: 'greater-bay-michelin-yacht-4n5d',
    title: '광둥·홍콩·마카오 대灣區 미식 & 미슐랭 스타 탐방',
    subtitle: '광저우 정통 딤섬 오마카세, 마카오 하우스 오브 댄싱워터 VIP, 홍콩 프라이빗 요트',
    tagline: '동양의 미식 수도 광둥부터 빛나는 마카오, 홍콩 빅토리아 하버의 럭셔리 라이프',
    duration: '4박 5일',
    cities: ['광저우', '마카오', '홍콩'],
    themes: ['백주/미식', '야경/럭셔리', 'VIP/프라이빗'],
    dates: '연중 상시',
    priceRange: '1인당 약 270만 원 ~ 350만 원',
    priceNumber: 3000000,
    heroImage: 'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506970845246-18f21d533b20?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '미식가들을 위한 완벽한 트라이앵글 로드! 광저우의 딤섬 및 광둥 요리 미슐랭 3스타 다이닝, 마카오 최상급 호텔 쇼, 홍콩 빅토리아 하버 프라이빗 요트 다이닝을 연계합니다.',
    highlights: [
      '광저우 Imperial Treasure / Lingnan House 미슐랭 스타 오찬',
      '마카오 The Venetian / Wynn Palace 로얄 스위트룸 & 워터 쇼 VIP R석',
      '홍콩 빅토리아 하버 단독 차터 요트 선상 파티',
      '강주아오 대교(세계 최장 해상 대교) 프라이빗 리무진 통과'
    ],
    flightsSummary: '인천-홍콩/광저우 국적기 매일 다수 노선',
    cuisineHighlights: ['광저우 정통 딤섬 오마카세', '마카오 매키니즈 족발 & 애기돼지 바베큐', '홍콩 스카이57 해산물 코스'],
    essentialPrep: ['홍콩/마카오 복수 입국 서류 확인'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 미식의 본고장 광저우의 첫날',
        subTitle: '광저우 도착 → 주강(珠江) 프라이빗 유람선 & 딤섬 만찬',
        accommodation: { name: 'Four Seasons Hotel Guangzhou' },
        timeline: [
          { time: '19:00', title: '미슐랭 딤섬 다이닝', description: '얇고 쫄깃한 하가우와 바비큐 소보로', category: 'meal' }
        ]
      }
    ]
  },
  {
    id: 'xinjiang-kanas-lake-6n7d',
    title: '신장 위구르 카나스 천혜의 자연 & 카자흐 유목 문화 체험',
    subtitle: '에메랄드빛 카나스 호수, 화목마을 원목 스위트 통나무집, 유목민 승마 & 야간 캠프파이어',
    tagline: '지구상에 남겨진 마지막 순수의 낙원, 신장 아르타이 산맥의 감동',
    duration: '6박 7일',
    cities: ['우루무치', '카나스', '화목마을'],
    themes: ['힐링/자연', 'VIP/프라이빗'],
    dates: '6월~10월 계절 운영',
    priceRange: '1인당 약 350만 원 ~ 450만 원',
    priceNumber: 3900000,
    heroImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
    ],
    concept: '스위스 아틀라스 산맥보다 신비로운 카나스 호수 신선만/월량만 산책과 화목마을(禾木村) 원목 통나무 스위트에서 맞이하는 일출, 카자흐족 전통 양고기 바비큐 및 오케스트라 마두금 공연을 즐깁니다.',
    highlights: [
      '카나스 호수 프라이빗 VIP 전용선 탑승 및 신선만 안개 사진 스냅',
      '화목(Hemu) 마을 최고급 원목 럭셔리 통나무 부티크 객실 2박',
      '카자흐족 유목민 민속 마두금 연주 및 초원 승마 체온',
      '신장 양꼬치 및 우루무치 실크로드 뱅킷'
    ],
    flightsSummary: '인천-우루무치 직항 또는 성도 환승',
    cuisineHighlights: ['신장 정통 양갈비 바베큐(烤全羊)', '손으로 먹는 밥 낭(馕)', '신장 수제 수유 요거트'],
    essentialPrep: ['신장지역 특별 방문 승인 가이드 동행 필수', '일교차가 크므로 두꺼운 아우터 준비'],
    itinerary: [
      {
        dayNumber: 1,
        title: '제1일: 실크로드 중앙 우루무치 입성',
        subTitle: '우루무치 공항 도착 → 오아시스 럭셔리 호텔 체크인',
        accommodation: { name: 'Conrad Urumqi' },
        timeline: [
          { time: '19:00', title: '신장 실크로드 미식 뱅킷', description: '숯불 향 가득한 양꼬치와 낭', category: 'meal' }
        ]
      }
    ]
  }
];
