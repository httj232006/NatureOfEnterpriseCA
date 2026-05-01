"use client";
import { useState } from "react";

const INITIAL_NOTIFS = [
  { id: 1, icon: "📅", title: "Class cancelled: Database Systems", body: "Dr. Flanagan has cancelled Thursday's 11:00 class. Room will be free.", time: "10 mins ago", isRead: false },
  { id: 2, icon: "🏆", title: "Hackathon team confirmed", body: "You've been matched with Team 'Syntax Error' for the May 6th Hackathon.", time: "1 hour ago", isRead: false },
  { id: 3, icon: "🍽️", title: "Today's special: Roast Chicken", body: "The canteen special today is roast chicken with seasonal veg. Serves from 12:00.", time: "8:00 AM", isRead: false },
  { id: 4, icon: "🔍", title: "Lost item match", body: "A 'Blue Notebook' matching your report was found in IT-Lab1.", time: "Yesterday", isRead: true },
  { id: 5, icon: "🎉", title: "New event: Open Mic Night", body: "Sign up by May 12th to perform at the Student Bar Open Mic on May 13.", time: "2 days ago", isRead: true },
];

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState(INITIAL_NOTIFS);

  function markAllRead() {
    setNotifs((prev) => prev.map((n) => ({ ...n, isRead: true })));
  }

  const unreadCount = notifs.filter((n) => !n.isRead).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-extrabold mb-1">Notifications</h1>
          <p className="text-gray-500 text-sm">Your latest alerts and updates.</p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-sm text-blue-600 font-semibold hover:underline"
            aria-label={`Mark all ${unreadCount} notifications as read`}
          >
            Mark all read ({unreadCount})
          </button>
        )}
      </div>

      <div
        className="bg-white border border-slate-200 rounded-lg divide-y divide-slate-100"
        role="log"
        aria-live="polite"
        aria-label="Notification list"
      >
        {notifs.map((n) => (
          <div
            key={n.id}
            role="article"
            aria-label={n.isRead ? undefined : "Unread notification"}
            className={`flex gap-3 p-4 items-start ${n.isRead ? "" : "bg-blue-50"}`}
          >
            <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{n.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <strong className="text-sm font-bold">{n.title}</strong>
                {!n.isRead && (
                  <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" aria-label="Unread" />
                )}
              </div>
              <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{n.body}</p>
              <p className="text-xs text-gray-400 mt-1">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
