"use client";
import { useState } from "react";

type Tab = "found" | "lost" | "report";

const ITEMS = [
  { emoji: "🎧", name: "Sony Headphones (Black)", where: "Found in Library, Floor 2", when: "29 Apr", status: "found" },
  { emoji: "🧥", name: "Navy Puffer Jacket (M)", where: "Found in Block B Canteen seating", when: "28 Apr", status: "found" },
  { emoji: "🔑", name: "Set of Keys (3 keys, red fob)", where: "Found near Block A entrance", when: "27 Apr", status: "found" },
  { emoji: "📓", name: "Blue Notebook – 'Comp Arch notes'", where: "Found in IT-Lab1", when: "26 Apr", status: "found" },
  { emoji: "📱", name: "iPhone 14 Pro (Black, cracked screen)", where: "Lost in Sports Hall", when: "28 Apr", status: "lost" },
  { emoji: "💼", name: "Grey Samsonite Backpack", where: "Lost somewhere in Block C / Library", when: "27 Apr", status: "lost" },
  { emoji: "🧣", name: "Burgundy Wool Scarf", where: "Lost on campus, unknown location", when: "25 Apr", status: "lost" },
];

export default function LostFoundPage() {
  const [activeTab, setActiveTab] = useState<Tab>("found");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ type: "Lost Item", name: "", location: "", email: "" });

  const filtered = ITEMS.filter((i) => i.status === activeTab);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ type: "Lost Item", name: "", location: "", email: "" });
  }

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Lost & Found</h1>
        <p className="text-gray-500 text-sm">Report or locate missing items on campus.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-5" role="tablist">
        {(["found", "lost", "report"] as Tab[]).map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 text-sm font-bold border-b-2 -mb-px transition-colors capitalize ${
              activeTab === tab
                ? "text-blue-600 border-blue-600"
                : "text-gray-400 border-transparent hover:text-gray-600"
            }`}
          >
            {tab === "found" ? "Found Items" : tab === "lost" ? "Lost Items" : "Report Item"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div aria-live="polite">
        {activeTab === "report" ? (
          <div className="bg-white border border-slate-200 rounded-lg p-5 max-w-lg">
            {submitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-800 font-semibold" role="alert">
                ✅ Report submitted! We&apos;ll contact you if there&apos;s a match.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label htmlFor="lf-type" className="block text-sm font-semibold mb-1">Item type</label>
                <select id="lf-type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                  <option>Lost Item</option>
                  <option>Found Item</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="lf-name" className="block text-sm font-semibold mb-1">Item description <span aria-hidden="true">*</span></label>
                <input required id="lf-name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Blue umbrella with black handle"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="mb-4">
                <label htmlFor="lf-loc" className="block text-sm font-semibold mb-1">Last seen / found location</label>
                <input id="lf-loc" type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="e.g. Block B cafeteria"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="mb-5">
                <label htmlFor="lf-email" className="block text-sm font-semibold mb-1">Contact email (optional)</label>
                <input id="lf-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="student@mytudublin.ie"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <button type="submit" className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Submit Report
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col" role="list" aria-label={activeTab === "found" ? "Found items" : "Lost items"}>
            {filtered.length === 0 ? (
              <p className="text-gray-400 py-4">No items to show.</p>
            ) : (
              filtered.map((item) => (
                <div key={item.name} role="listitem" className="flex gap-4 py-4 border-b border-slate-200 last:border-0 items-center">
                  <div
                    className="w-14 h-14 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-3xl flex-shrink-0"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-sm">{item.name}</h2>
                    <p className="text-xs text-gray-400 mt-0.5">{item.where}</p>
                    <p className="text-xs text-gray-400">{item.when}</p>
                  </div>
                  <button
                    className="flex-shrink-0 px-3 py-1.5 border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
                    aria-label={`Claim ${item.name}`}
                  >
                    Claim
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
