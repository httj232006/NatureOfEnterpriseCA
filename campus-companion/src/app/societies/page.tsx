"use client";
import { useState } from "react";

const SOCIETIES = [
  { icon: "💻", name: "Computing Society", desc: "Weekly coding challenges, hackathons, and guest talks from industry professionals. Our biggest event is the annual CompuFest.", members: 142, category: "academic" },
  { icon: "🎨", name: "Art & Design Society", desc: "Life drawing classes, gallery trips, and collaborative mural projects on campus. All skill levels welcome.", members: 88, category: "creative" },
  { icon: "🎭", name: "Drama Society", desc: "Two major productions per year, improv workshops, and lots of backstage chaos. Join us!", members: 65, category: "social" },
  { icon: "🏃", name: "Athletic Union", desc: "Over 12 sports teams including football, basketball, rowing and more. Representing TU Dublin in national leagues.", members: 310, category: "sport" },
  { icon: "🌍", name: "International Students Society", desc: "Cultural events, language exchanges, and a safe space for international students to connect.", members: 97, category: "social" },
  { icon: "♻️", name: "Green Campus Society", desc: "Running sustainability campaigns, litter picks, and an annual Eco-Week with workshops and talks.", members: 54, category: "academic" },
];

export default function SocietiesPage() {
  const [joined, setJoined] = useState<Set<string>>(new Set());

  function toggleJoin(name: string) {
    setJoined((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Societies</h1>
        <p className="text-gray-500 text-sm">Find your community on campus.</p>
      </div>

      <div className="flex flex-col gap-3" role="list" aria-label="Societies">
        {SOCIETIES.map((s) => (
          <div
            key={s.name}
            role="listitem"
            className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div
              className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl flex-shrink-0"
              aria-hidden="true"
            >
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm">{s.name}</h2>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{s.desc}</p>
              <p className="text-xs text-gray-400 mt-1">👥 {s.members} members</p>
            </div>
            <button
              onClick={() => toggleJoin(s.name)}
              aria-label={joined.has(s.name) ? `Leave ${s.name}` : `Join ${s.name}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-bold border transition-colors ${
                joined.has(s.name)
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              {joined.has(s.name) ? "✓ Joined" : "Join"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
