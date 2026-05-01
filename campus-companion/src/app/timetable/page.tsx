"use client";
import { useState } from "react";

const DAYS = ["mon", "tue", "wed", "thu", "fri"] as const;
type Day = typeof DAYS[number];

const DAY_LABELS: Record<Day, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
};

const TIMETABLE: Record<Day, { timeStart: string; timeEnd: string; subject: string; room: string; lecturer: string; color: string }[]> = {
  mon: [
    { timeStart: "09:00", timeEnd: "10:00", subject: "Cloud Architecture", room: "G-204", lecturer: "Dr. Byrne", color: "border-l-blue-600" },
    { timeStart: "11:00", timeEnd: "12:00", subject: "UX Design Principles", room: "B-108", lecturer: "Dr. Walsh", color: "border-l-green-600" },
    { timeStart: "14:00", timeEnd: "16:00", subject: "Enterprise Computing Lab", room: "IT-Lab3", lecturer: "Mr. O'Sullivan", color: "border-l-amber-500" },
  ],
  tue: [
    { timeStart: "09:00", timeEnd: "10:00", subject: "Database Systems", room: "A-201", lecturer: "Dr. Flanagan", color: "border-l-blue-600" },
    { timeStart: "12:00", timeEnd: "13:00", subject: "Software Testing", room: "B-305", lecturer: "Ms. Maguire", color: "border-l-green-600" },
    { timeStart: "15:00", timeEnd: "16:00", subject: "Agile & Scrum", room: "G-101", lecturer: "Dr. Dempsey", color: "border-l-amber-500" },
  ],
  wed: [
    { timeStart: "10:00", timeEnd: "12:00", subject: "Cloud Architecture Lab", room: "IT-Lab1", lecturer: "Dr. Byrne", color: "border-l-blue-600" },
    { timeStart: "14:00", timeEnd: "15:00", subject: "Professional Skills", room: "A-104", lecturer: "Ms. O'Brien", color: "border-l-green-600" },
  ],
  thu: [
    { timeStart: "09:00", timeEnd: "10:00", subject: "UX Design Principles", room: "B-108", lecturer: "Dr. Walsh", color: "border-l-green-600" },
    { timeStart: "11:00", timeEnd: "12:00", subject: "Enterprise Computing", room: "G-204", lecturer: "Mr. O'Sullivan", color: "border-l-blue-600" },
    { timeStart: "14:00", timeEnd: "16:00", subject: "Database Systems Lab", room: "IT-Lab2", lecturer: "Dr. Flanagan", color: "border-l-amber-500" },
  ],
  fri: [
    { timeStart: "10:00", timeEnd: "11:00", subject: "Software Testing", room: "B-305", lecturer: "Ms. Maguire", color: "border-l-green-600" },
    { timeStart: "12:00", timeEnd: "13:00", subject: "Agile & Scrum", room: "G-101", lecturer: "Dr. Dempsey", color: "border-l-blue-600" },
  ],
};

export default function TimetablePage() {
  const [activeDay, setActiveDay] = useState<Day>("mon");
  const slots = TIMETABLE[activeDay];

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Timetable</h1>
        <p className="text-gray-500 text-sm">Your weekly class schedule — Year 2, Semester 2</p>
      </div>

      {/* Week label */}
      <div className="flex items-center gap-3 mb-4">
        <button className="px-3 py-1.5 text-sm border border-slate-300 rounded bg-white hover:bg-slate-50 font-semibold" aria-label="Previous week">← Prev</button>
        <span className="font-semibold text-sm">Week 24 · 28 Apr – 2 May 2026</span>
        <button className="px-3 py-1.5 text-sm border border-slate-300 rounded bg-white hover:bg-slate-50 font-semibold" aria-label="Next week">Next →</button>
      </div>

      {/* Day tabs */}
      <div className="flex gap-2 mb-5 flex-wrap" role="tablist" aria-label="Days of the week">
        {DAYS.map((day) => (
          <button
            key={day}
            role="tab"
            aria-selected={activeDay === day}
            aria-controls="tt-panel"
            onClick={() => setActiveDay(day)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold border transition-colors ${
              activeDay === day
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white border-slate-300 text-gray-500 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            {DAY_LABELS[day].slice(0, 3)}
          </button>
        ))}
      </div>

      {/* Timetable slots */}
      <div id="tt-panel" role="tabpanel" aria-live="polite" className="flex flex-col gap-3">
        {slots.length === 0 ? (
          <p className="text-gray-400 py-4">No classes scheduled for {DAY_LABELS[activeDay]}.</p>
        ) : (
          slots.map((slot, i) => (
            <div key={i} className="grid grid-cols-[70px_1fr] gap-3 items-center">
              <div className="text-xs text-gray-400 text-right">
                {slot.timeStart}–{slot.timeEnd}
              </div>
              <article
                className={`bg-white border border-slate-200 border-l-4 ${slot.color} rounded-lg px-4 py-3`}
                aria-label={`${slot.subject} at ${slot.timeStart}`}
              >
                <div className="font-bold text-sm">{slot.subject}</div>
                <div className="text-xs text-gray-400 mt-0.5">{slot.room} · {slot.lecturer}</div>
              </article>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
