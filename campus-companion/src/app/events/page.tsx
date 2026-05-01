"use client";
import { useState } from "react";

type Category = "all" | "academic" | "social" | "sport" | "workshop";

const EVENTS = [
  { id: 1, day: "6", mon: "May", title: "Hackathon: Build for Good", desc: "24-hour team hackathon focused on social impact projects. Meals provided, prizes for top 3 teams.", location: "Block B Atrium", time: "09:00", category: "academic" as Category, color: "bg-blue-600" },
  { id: 2, day: "7", mon: "May", title: "Tech Careers Fair", desc: "Meet 30+ companies hiring graduates and interns. Bring your CV!", location: "Sports Hall", time: "11:00", category: "academic" as Category, color: "bg-amber-500" },
  { id: 3, day: "8", mon: "May", title: "Salsa Night 🕺", desc: "Beginner-friendly dance social. No experience needed. €3 entry includes refreshments.", location: "Student Bar", time: "20:00", category: "social" as Category, color: "bg-green-600" },
  { id: 4, day: "9", mon: "May", title: "5K Campus Run", desc: "Join the running club for a friendly 5K around campus. All paces welcome!", location: "Main Gate", time: "08:00", category: "sport" as Category, color: "bg-blue-600" },
  { id: 5, day: "10", mon: "May", title: "CV & LinkedIn Workshop", desc: "1:1 feedback on your CV and LinkedIn profile from career coaches.", location: "Room A-104", time: "14:00", category: "workshop" as Category, color: "bg-green-600" },
  { id: 6, day: "13", mon: "May", title: "Open Mic Night 🎤", desc: "Student performers take the stage — comedy, music, poetry. Sign up at the SU desk.", location: "Student Bar", time: "19:00", category: "social" as Category, color: "bg-amber-500" },
  { id: 7, day: "14", mon: "May", title: "Machine Learning Seminar", desc: "Guest lecture from industry practitioner on applied ML in fintech.", location: "G-204 Lecture Hall", time: "12:00", category: "academic" as Category, color: "bg-blue-600" },
  { id: 8, day: "15", mon: "May", title: "Yoga & Mindfulness", desc: "Free drop-in session with certified instructor. Mats provided.", location: "Gym Studio", time: "17:30", category: "sport" as Category, color: "bg-green-600" },
];

const BADGE_MAP: Record<string, string> = {
  academic: "bg-blue-100 text-blue-800 border border-blue-200",
  social:   "bg-green-100 text-green-800 border border-green-200",
  sport:    "bg-amber-100 text-amber-800 border border-amber-200",
  workshop: "bg-purple-100 text-purple-800 border border-purple-200",
};

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = activeFilter === "all" ? EVENTS : EVENTS.filter((e) => e.category === activeFilter);

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Campus Events</h1>
        <p className="text-gray-500 text-sm">Talks, workshops, socials, and more happening on campus.</p>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap mb-5" role="group" aria-label="Filter events by category">
        {(["all", "academic", "social", "sport", "workshop"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-sm font-bold border transition-colors capitalize ${
              activeFilter === cat
                ? "bg-gray-800 border-gray-800 text-white"
                : "bg-white border-slate-300 text-gray-500 hover:border-gray-500"
            }`}
          >
            {cat === "all" ? "All Events" : cat}
          </button>
        ))}
      </div>

      {/* Events list */}
      <div className="flex flex-col gap-3" role="list" aria-label="Events">
        {filtered.map((ev) => (
          <article
            key={ev.id}
            role="listitem"
            className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4 items-start hover:shadow-md transition-shadow"
          >
            {/* Date box */}
            <div
              className={`${ev.color} text-white rounded-lg min-w-[48px] text-center py-2 px-1 flex-shrink-0`}
              aria-label={`${ev.day} ${ev.mon}`}
            >
              <div className="text-xl font-extrabold leading-none">{ev.day}</div>
              <div className="text-[0.6rem] uppercase opacity-85">{ev.mon}</div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="font-bold text-base mb-1">{ev.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{ev.desc}</p>
              <div className="flex gap-2 mt-2 flex-wrap items-center">
                <span className="text-xs bg-slate-100 text-gray-500 border border-slate-200 px-2 py-0.5 rounded-full">📍 {ev.location}</span>
                <span className="text-xs bg-slate-100 text-gray-500 border border-slate-200 px-2 py-0.5 rounded-full">🕒 {ev.time}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold capitalize ${BADGE_MAP[ev.category]}`}>{ev.category}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
