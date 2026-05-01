import Link from "next/link";

export default function DashboardPage() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stats = [
    { icon: "📚", value: "3", label: "Classes today" },
    { icon: "🎉", value: "5", label: "Events this week" },
    { icon: "🍽️", value: "6", label: "Menu items today" },
    { icon: "🔍", value: "7", label: "Open lost items" },
  ];

  const schedule = [
    { time: "09:00", name: "Cloud Architecture", sub: "Room G-204 · Dr. Byrne", color: "bg-blue-600" },
    { time: "11:00", name: "UX Design Principles", sub: "Room B-108 · Dr. Walsh", color: "bg-green-600" },
    { time: "14:00", name: "Enterprise Computing Lab", sub: "Room IT-Lab3 · Mr. O'Sullivan", color: "bg-amber-500" },
  ];

  const quickActions = [
    { href: "/lost-and-found", icon: "🔍", label: "Report lost item" },
    { href: "/helpdesk", icon: "🎫", label: "Submit helpdesk ticket" },
    { href: "/canteen", icon: "🍽️", label: "View today's menu" },
    { href: "/events", icon: "🎉", label: "Browse events" },
  ];

  return (
    <div>
      {/* Welcome banner */}
      <div
        className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg p-5 mb-5"
        role="region"
        aria-label="Welcome banner"
      >
        <h1 className="text-xl font-extrabold mb-1">Good morning, Alex! 👋</h1>
        <p className="text-sm opacity-90">
          You have <strong>3 classes</strong> today and{" "}
          <strong>5 upcoming events</strong> this week.
        </p>
        <p className="text-xs opacity-60 mt-1" aria-live="polite">
          {dateStr}
        </p>
      </div>

      {/* Stats */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5"
        role="list"
        aria-label="Quick statistics"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col gap-1 border-t-4 border-t-blue-600"
            role="listitem"
          >
            <span aria-hidden="true" className="text-2xl">{s.icon}</span>
            <span className="text-3xl font-extrabold text-blue-600 leading-none">{s.value}</span>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Two-col section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Today's Schedule */}
        <div
          className="bg-white border border-slate-200 rounded-lg p-4"
          aria-labelledby="today-heading"
        >
          <h2
            id="today-heading"
            className="font-bold text-base mb-3 border-b border-slate-200 pb-2"
          >
            Today&apos;s Schedule
          </h2>
          <div role="list">
            {schedule.map((s) => (
              <div
                key={s.time}
                className="flex gap-3 items-start py-2 border-b border-slate-100 last:border-0"
                role="listitem"
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${s.color}`}
                  aria-hidden="true"
                />
                <span className="text-xs text-gray-400 min-w-[48px]">{s.time}</span>
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-gray-400">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div
          className="bg-white border border-slate-200 rounded-lg p-4"
          aria-labelledby="quick-heading"
        >
          <h2
            id="quick-heading"
            className="font-bold text-base mb-3 border-b border-slate-200 pb-2"
          >
            Quick Actions
          </h2>
          <div className="flex flex-col gap-2" role="list">
            {quickActions.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                role="listitem"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-50 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <span aria-hidden="true">{a.icon}</span>
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
