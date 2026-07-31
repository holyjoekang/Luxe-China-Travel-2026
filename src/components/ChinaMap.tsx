import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import { AnimatePresence, motion } from 'motion/react';

const geoUrl =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

type Destination = {
  name: string;
  province: string;
  coordinates: [number, number];
  description: string;
};

const destinations: Destination[] = [
  {
    name: '베이징',
    province: '北京',
    coordinates: [116.4074, 39.9042],
    description: '자금성, 만리장성, 후퉁 문화',
  },
  {
    name: '상하이',
    province: '上海',
    coordinates: [121.4737, 31.2304],
    description: '와이탄, 푸둥, 근대 건축',
  },
  {
    name: '시안',
    province: '陕西',
    coordinates: [108.9398, 34.3416],
    description: '병마용과 당나라 역사',
  },
  {
    name: '청두',
    province: '四川',
    coordinates: [104.0665, 30.5728],
    description: '판다, 사천요리, 근교 자연',
  },
  {
    name: '황산',
    province: '安徽',
    coordinates: [118.3375, 29.7147],
    description: '황산 트레킹과 휘저우 고촌',
  },
  {
    name: '펑황',
    province: '湖南',
    coordinates: [109.5996, 27.9483],
    description: '퉈장 강변의 전통 고성',
  },
];

export default function ChinaMap() {
  const [selected, setSelected] = useState<Destination | null>(null);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl">
      <div className="mb-5">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
          Interactive Journey
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-white">
          중국 여행지를 지도로 탐색하세요
        </h2>

        <p className="mt-2 text-slate-400">
          지도를 확대하거나 도시 마커를 선택할 수 있습니다.
        </p>
      </div>

      <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [104, 35],
            scale: 600,
          }}
          className="h-full w-full"
        >
          <ZoomableGroup
            center={[104, 35]}
            zoom={1}
            minZoom={1}
            maxZoom={5}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isChina =
                    geo.properties?.name === 'China' ||
                    geo.properties?.NAME === 'China';

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isChina ? '#334155' : '#111827'}
                      stroke="#64748b"
                      strokeWidth={0.35}
                      style={{
                        default: { outline: 'none' },
                        hover: {
                          fill: isChina ? '#475569' : '#1f2937',
                          outline: 'none',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {destinations.map((destination) => (
              <Marker
                key={destination.name}
                coordinates={destination.coordinates}
                onClick={() => setSelected(destination)}
              >
                <motion.g
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.35 }}
                  transition={{ type: 'spring', stiffness: 260 }}
                  className="cursor-pointer"
                >
                  <circle
                    r={8}
                    fill="#f59e0b"
                    stroke="#ffffff"
                    strokeWidth={2}
                  />

                  <circle
                    r={15}
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth={1}
                    opacity={0.5}
                  />

                  <text
                    textAnchor="middle"
                    y={-16}
                    className="pointer-events-none fill-white text-[11px] font-semibold"
                  >
                    {destination.name}
                  </text>
                </motion.g>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/90 p-5 shadow-xl backdrop-blur md:left-auto md:w-80"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-3 text-slate-400 hover:text-white"
                aria-label="정보 닫기"
              >
                ×
              </button>

              <p className="text-sm text-amber-400">{selected.province}</p>

              <h3 className="mt-1 text-2xl font-semibold text-white">
                {selected.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {selected.description}
              </p>

              <button
                type="button"
                className="mt-4 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                여행 일정 보기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
