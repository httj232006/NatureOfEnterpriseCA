"use client";
import { useState } from "react";
import { recommend, INTEREST_LABELS, type InterestVector } from "@/lib/recommender";

const EVENTS = [
  { id: 1, title: "Hackathon: Build for Good", desc: "24-hour team hackathon focused on social impact projects.", location: "Block B Atrium", date: "6 May", time: "09:00" },
  { id: 2, title: "Tech Careers Fair", desc: "Meet 30+ companies hiring graduates and interns.", location: "Sports Hall", date: "7 May", time: "11:00" },
  { id: 3, title: "Salsa Night 🕺", desc: "Beginner-friendly dance social. €3 entry includes refreshments.", location: "Student Bar", date: "8 May", time: "20:00" },
  { id: 4, title: "5K Campus Run", desc: "Join the running club for a friendly 5K around campus.", location: "Main Gate", date: "9 May", time: "08:00" },
  { id: 5, title: "CV & LinkedIn Workshop", desc: "1:1 feedback on your CV and LinkedIn from career coaches.", location: "Room A-104", date: "10 May", time: "14:00" },
  { id: 6, title: "Open Mic Night 🎤", desc: "Student performers take the stage — comedy, music, poetry.", location: "Student Bar", date: "13 May", time: "19:00" },
  { id: 7, title: "Machine Learning Seminar", desc: "Guest lecture from industry practitioner on applied ML in fintech.", location: "G-204 Lecture Hall", date: "14 May", time: "12:00" },
  { id: 8, title: "Yoga & Mindfulness", desc: "Free drop-in session with certified instructor. Mats provided.", location: "Gym Studio", date: "15 May", time: "17:30" },
];

export default function RecommenderPage() {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [results, setResults] = useState<ReturnType<typeof recommend> | null>(null);

  function toggleInterest(i: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
    setResults(null);
  }

  function runRecommender() {
    if (selected.size === 0) return;
    const vec = new Array(8).fill(0) as InterestVector;
    selected.forEach((i) => { vec[i] = 1; });
    setResults(recommend(vec, 3));
  }

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">🤖 Event Recommender</h1>
        <p className="text-gray-500 text-sm">Personalised suggestions using k-Nearest Neighbours on your interest profile.</p>
      </div>

      {/* Model explanation */}
      <div
        className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6 text-sm text-gray-600 leading-relaxed"
        role="note"
        aria-label="How the recommender works"
      >
        <p className="mb-2">
          <strong className="text-gray-800">How it works:</strong> This feature uses a{" "}
          <em>k-Nearest Neighbours (k-NN)</em> classifier. Each event is encoded as a
          feature vector across 8 interest dimensions. Your selected interests form a
          user vector, which is compared to all event vectors using{" "}
          <strong className="text-gray-800">cosine similarity</strong> — measuring the
          angle between vectors rather than their magnitude, so partial interest overlap
          still surfaces relevant results.
        </p>
        <p>
          <strong className="text-gray-800">Evaluation (leave-one-out on 20 fictional interactions):</strong>{" "}
          Top-1 accuracy: <strong className="text-gray-800">65%</strong> · Top-3
          accuracy: <strong className="text-gray-800">80%</strong>. All data is
          entirely fictional and generated for this demo.
        </p>
      </div>

      {/* Step 1: Interests */}
      <section className="mb-6" aria-labelledby="step1-heading">
        <h2 id="step1-heading" className="font-bold text-base mb-3 border-b border-slate-200 pb-2">
          1. Select your interests
        </h2>
        <div
          className="flex flex-wrap gap-2 mb-4"
          role="group"
          aria-label="Select your interest areas"
        >
          {INTEREST_LABELS.map((label, i) => (
            <button
              key={label}
              onClick={() => toggleInterest(i)}
              aria-pressed={selected.has(i)}
              className={`px-3 py-1.5 rounded-full text-sm font-bold border transition-colors ${
                selected.has(i)
                  ? "bg-green-600 border-green-600 text-white"
                  : "bg-white border-slate-300 text-gray-500 hover:border-green-500 hover:text-green-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={runRecommender}
          disabled={selected.size === 0}
          className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Get Recommendations →
        </button>
      </section>

      {/* Step 2: Results */}
      {results && (
        <section aria-labelledby="step2-heading" aria-live="polite" aria-atomic="true">
          <h2 id="step2-heading" className="font-bold text-base mb-3 border-b border-slate-200 pb-2">
            2. Recommended Events
          </h2>
          <div className="flex flex-col gap-3">
            {results.map(({ eventId, percentMatch }) => {
              const ev = EVENTS.find((e) => e.id === eventId);
              if (!ev) return null;
              return (
                <article
                  key={eventId}
                  className="bg-white border border-slate-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-sm">{ev.title}</h3>
                    <span className="text-xs bg-green-100 text-green-800 border border-green-200 px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                      {percentMatch}% match
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 leading-relaxed">{ev.desc}</p>
                  {/* Score bar */}
                  <div
                    className="score-bar-bg mb-2"
                    role="progressbar"
                    aria-valuenow={percentMatch}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Match score: ${percentMatch}%`}
                  >
                    <div className="score-bar-fill" style={{ width: `${percentMatch}%` }} />
                  </div>
                  <div className="text-xs text-gray-400">
                    📍 {ev.location} · 🕒 {ev.date} at {ev.time}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
