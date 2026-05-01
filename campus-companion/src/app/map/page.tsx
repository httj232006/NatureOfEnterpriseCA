const LOCATIONS = [
  { emoji: "🎓", name: "Block A – Lecture Halls", detail: "Floors 1–3 · Lecture rooms, seminar rooms" },
  { emoji: "💻", name: "Block B – Engineering & Computing", detail: "Floors 1–4 · Labs IT-Lab1 to IT-Lab4, project rooms" },
  { emoji: "📚", name: "Block C – Library", detail: "Floors 1–3 · 24/7 study zone, printing, silent study" },
  { emoji: "🍽️", name: "Canteen – Food Hall", detail: "Ground floor · Open 07:30–16:30 weekdays" },
  { emoji: "🏢", name: "Student Services Hub", detail: "Ground floor, Block B · Cards, finance, counselling" },
  { emoji: "🏋️", name: "Sports Hall & Gym", detail: "East campus · Gym open 07:00–22:00" },
  { emoji: "🅿️", name: "Car Park P1", detail: "Main entrance · Pay & Display, EV charging available" },
  { emoji: "🚌", name: "Bus Stop – Route 40", detail: "Outside main gate · City centre every 12 mins" },
];

export default function MapPage() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Campus Map</h1>
        <p className="text-gray-500 text-sm">Find buildings, facilities, and key locations on campus.</p>
      </div>

      {/* Legend */}
      <div className="flex gap-4 flex-wrap mb-4" role="list" aria-label="Map legend">
        <div className="flex items-center gap-1.5 text-sm text-gray-500" role="listitem">
          <div className="w-3 h-3 rounded-full bg-blue-600" aria-hidden="true" />Academic
        </div>
        <div className="flex items-center gap-1.5 text-sm text-gray-500" role="listitem">
          <div className="w-3 h-3 rounded-full bg-green-600" aria-hidden="true" />Services
        </div>
        <div className="flex items-center gap-1.5 text-sm text-gray-500" role="listitem">
          <div className="w-3 h-3 rounded-full bg-amber-500" aria-hidden="true" />Sport & Social
        </div>
      </div>

      {/* SVG Map */}
      <div
        className="bg-slate-100 border border-slate-200 rounded-lg overflow-hidden mb-6"
        role="img"
        aria-label="Simplified campus map diagram showing building locations"
      >
        <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full">
          <rect width="600" height="360" fill="#e8ecf3" />
          <rect x="150" y="0" width="20" height="360" fill="#cbd5e1" rx="2" />
          <rect x="0" y="160" width="600" height="20" fill="#cbd5e1" rx="2" />
          <rect x="350" y="0" width="20" height="360" fill="#cbd5e1" rx="2" />
          {/* Academic */}
          <rect x="40" y="30" width="90" height="110" rx="4" fill="#2563eb" opacity=".85" />
          <text x="85" y="82" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Block A</text>
          <rect x="185" y="30" width="140" height="110" rx="4" fill="#2563eb" opacity=".7" />
          <text x="255" y="72" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Block B</text>
          <text x="255" y="86" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Eng & Computing</text>
          <rect x="375" y="30" width="185" height="90" rx="4" fill="#2563eb" opacity=".6" />
          <text x="465" y="72" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Block C – Library</text>
          {/* Services */}
          <rect x="40" y="200" width="90" height="80" rx="4" fill="#16a34a" opacity=".85" />
          <text x="85" y="245" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Canteen</text>
          <rect x="185" y="200" width="140" height="80" rx="4" fill="#16a34a" opacity=".7" />
          <text x="255" y="245" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Student Services</text>
          {/* Sport */}
          <rect x="375" y="200" width="185" height="130" rx="4" fill="#d97706" opacity=".75" />
          <text x="465" y="268" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">Sports Hall & Gym</text>
          {/* Parking */}
          <rect x="40" y="300" width="90" height="40" rx="3" fill="#94a3b8" opacity=".6" />
          <text x="85" y="325" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Parking P1</text>
          <rect x="185" y="300" width="140" height="40" rx="3" fill="#94a3b8" opacity=".6" />
          <text x="255" y="325" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Parking P2</text>
        </svg>
      </div>

      {/* Location directory */}
      <h2 className="font-bold text-base mb-3 border-b border-slate-200 pb-2">Location Directory</h2>
      <div className="flex flex-col gap-2" role="list" aria-label="Campus locations">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            role="listitem"
            className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-lg"
          >
            <span className="text-xl flex-shrink-0" aria-hidden="true">{loc.emoji}</span>
            <div>
              <div className="font-semibold text-sm">{loc.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{loc.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
