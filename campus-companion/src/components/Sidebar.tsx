"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Main", type: "heading" },
  { href: "/", icon: "🏠", label: "Dashboard" },
  { href: "/timetable", icon: "📅", label: "Timetable" },
  { href: "/events", icon: "🎉", label: "Events" },
  { href: "/societies", icon: "🤝", label: "Societies" },
  { label: "Campus", type: "heading" },
  { href: "/canteen", icon: "🍽️", label: "Canteen Menu" },
  { href: "/map", icon: "🗺️", label: "Campus Map" },
  { href: "/lost-and-found", icon: "🔍", label: "Lost & Found" },
  { href: "/helpdesk", icon: "🎫", label: "Helpdesk" },
  { label: "Tools", type: "heading" },
  { href: "/recommender", icon: "🤖", label: "Event Recommender" },
  { href: "/notifications", icon: "🔔", label: "Notifications" },
  { href: "/accessibility", icon: "♿", label: "Accessibility" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      id="sidebar"
      className="w-[215px] bg-white border-r border-slate-200 flex flex-col py-2 flex-shrink-0 overflow-y-auto"
      role="navigation"
      aria-label="Main navigation"
    >
      {navItems.map((item, i) => {
        if (item.type === "heading") {
          return (
            <span
              key={i}
              className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 px-3 pt-4 pb-1"
            >
              {item.label}
            </span>
          );
        }
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href!}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold border-l-[3px] transition-colors my-[1px]
              ${
                isActive
                  ? "bg-blue-100 text-blue-800 border-l-blue-600"
                  : "text-gray-500 border-l-transparent hover:bg-blue-50 hover:text-blue-700"
              }`}
          >
            <span aria-hidden="true" className="text-base">
              {item.icon}
            </span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
