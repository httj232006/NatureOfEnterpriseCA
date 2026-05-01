"use client";
import { useState } from "react";

interface Ticket {
  id: number;
  ref: string;
  subject: string;
  preview: string;
  status: "Open" | "In Progress" | "Resolved";
}

const INITIAL_TICKETS: Ticket[] = [
  { id: 1, ref: "#TK-0041", subject: "Projector not working in G-204", preview: "The projector in G-204 flickers and doesn't display HDMI input.", status: "Open" },
  { id: 2, ref: "#TK-0039", subject: "Wi-Fi disconnects in Block B labs", preview: "Connection drops every 15–20 minutes in IT-Lab3.", status: "In Progress" },
  { id: 3, ref: "#TK-0035", subject: "Library printer out of paper", preview: "Printer on Floor 2 has been out of paper since Tuesday.", status: "Resolved" },
];

const STATUS_STYLE: Record<string, string> = {
  Open: "bg-amber-100 text-amber-800 border border-amber-200",
  "In Progress": "bg-blue-100 text-blue-800 border border-blue-200",
  Resolved: "bg-green-100 text-green-800 border border-green-200",
};

export default function HelpdeskPage() {
  const [tickets, setTickets] = useState<Ticket[]>(INITIAL_TICKETS);
  const [form, setForm] = useState({ subject: "", category: "IT Support", details: "" });
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.subject.trim()) return;
    const nextId = tickets.length + 4;
    setTickets([
      { id: nextId, ref: `#TK-00${40 + nextId}`, subject: form.subject, preview: form.details.slice(0, 80) || "No details provided.", status: "Open" },
      ...tickets,
    ]);
    setForm({ subject: "", category: "IT Support", details: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  }

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Helpdesk</h1>
        <p className="text-gray-500 text-sm">Submit and track support tickets.</p>
      </div>

      {/* Ticket list */}
      <h2 className="font-bold text-base mb-3 border-b border-slate-200 pb-2">My Tickets</h2>
      <div className="flex flex-col gap-3 mb-8" role="list" aria-label="Support tickets">
        {tickets.map((t) => (
          <div key={t.id} role="listitem" className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4 items-start">
            <div className="flex-1">
              <div className="text-xs text-gray-400 font-bold mb-0.5">{t.ref}</div>
              <div className="font-bold text-sm">{t.subject}</div>
              <div className="text-xs text-gray-400 mt-0.5">{t.preview}</div>
            </div>
            <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_STYLE[t.status]}`}>
              {t.status}
            </span>
          </div>
        ))}
      </div>

      {/* New ticket form */}
      <h2 className="font-bold text-base mb-3 border-b border-slate-200 pb-2">New Ticket</h2>
      <div className="bg-white border border-slate-200 rounded-lg p-5 max-w-lg">
        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded text-sm text-green-800 font-semibold" role="alert">
            🎫 Ticket submitted! We&apos;ll get back to you within 24 hours.
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="t-subject" className="block text-sm font-semibold mb-1">Subject <span aria-hidden="true">*</span></label>
            <input required id="t-subject" type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Brief description of issue"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div className="mb-4">
            <label htmlFor="t-cat" className="block text-sm font-semibold mb-1">Category</label>
            <select id="t-cat" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
              <option>IT Support</option>
              <option>Facilities</option>
              <option>Student Services</option>
              <option>Library</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="t-detail" className="block text-sm font-semibold mb-1">Details</label>
            <textarea id="t-detail" rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })}
              placeholder="Describe your issue in detail…"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-y" />
          </div>
          <button type="submit" className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
}
