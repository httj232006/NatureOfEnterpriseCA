"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="h-[55px] bg-blue-800 text-white flex items-center justify-between px-4 sticky top-0 z-50 shadow-md"
      role="banner"
    >
      <Link
        href="/"
        className="flex items-center gap-2 text-white no-underline"
        aria-label="Campus Companion home"
      >
        <div
          className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-extrabold text-sm text-white flex-shrink-0"
          aria-hidden="true"
        >
          C
        </div>
        <span className="font-bold text-base">
          Campus <span className="text-yellow-300">Companion</span>
        </span>
      </Link>

      <div className="flex items-center gap-2">
        <Link
          href="/notifications"
          className="text-sm bg-white/15 border border-white/30 text-white px-3 py-1.5 rounded hover:bg-white/25 transition-colors"
          aria-label="Notifications"
        >
          🔔 Notifications
        </Link>
        <Link
          href="/accessibility"
          className="text-sm bg-white/15 border border-white/30 text-white px-3 py-1.5 rounded hover:bg-white/25 transition-colors"
          aria-label="Accessibility settings"
        >
          ♿ Settings
        </Link>
      </div>
    </header>
  );
}
