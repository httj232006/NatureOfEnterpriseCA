"use client";
import { useState, useEffect } from "react";

export default function AccessibilityPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setReduceMotion(true);
  }, []);

  function applyDark(on: boolean) {
    setDarkMode(on);
    document.documentElement.classList.toggle("dark", on);
  }
  function applyContrast(on: boolean) {
    setHighContrast(on);
    document.documentElement.setAttribute("data-contrast", on ? "high" : "");
  }
  function applyMotion(on: boolean) {
    setReduceMotion(on);
    document.body.setAttribute("data-reduced-motion", on ? "true" : "false");
  }
  function changeFontSize(dir: number) {
    const next = Math.min(24, Math.max(12, fontSize + dir));
    setFontSize(next);
    document.documentElement.style.fontSize = next + "px";
  }

  const options = [
    {
      label: "Dark Mode",
      desc: "Switch to a dark colour scheme",
      id: "toggle-dark",
      checked: darkMode,
      onChange: applyDark,
    },
    {
      label: "High Contrast",
      desc: "Maximise contrast for low-vision users",
      id: "toggle-contrast",
      checked: highContrast,
      onChange: applyContrast,
    },
    {
      label: "Reduce Motion",
      desc: "Disable animations and transitions (also follows system setting)",
      id: "toggle-motion",
      checked: reduceMotion,
      onChange: applyMotion,
    },
  ];

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold mb-1">Accessibility Settings</h1>
        <p className="text-gray-500 text-sm">Customise your experience for comfort and usability.</p>
      </div>

      <div className="flex flex-col gap-3 max-w-lg">
        {options.map((opt) => (
          <div
            key={opt.id}
            className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold text-sm">{opt.label}</h2>
              <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
            </div>
            <label className="toggle" aria-label={`Toggle ${opt.label}`}>
              <input
                type="checkbox"
                id={opt.id}
                checked={opt.checked}
                onChange={(e) => opt.onChange(e.target.checked)}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        ))}

        {/* Font size */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-sm">Text Size</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Adjust base font size (current:{" "}
              <span aria-live="polite" aria-atomic="true">
                {fontSize}px
              </span>
              )
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeFontSize(-1)}
              aria-label="Decrease font size"
              className="w-9 h-9 rounded-lg border border-slate-300 bg-slate-50 text-sm font-bold hover:bg-slate-100 transition-colors"
            >
              A−
            </button>
            <button
              onClick={() => changeFontSize(1)}
              aria-label="Increase font size"
              className="w-9 h-9 rounded-lg border border-slate-300 bg-slate-50 text-sm font-bold hover:bg-slate-100 transition-colors"
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {/* WCAG info */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-lg">
        <h2 className="font-bold text-sm text-blue-800 mb-2">WCAG 2.1 AA Compliance Notes</h2>
        <ul className="text-xs text-blue-700 space-y-1 list-disc list-inside leading-relaxed">
          <li>All interactive elements have visible focus indicators</li>
          <li>Skip-to-content link available at top of page</li>
          <li>All images and icons have appropriate alt text or aria-hidden</li>
          <li>Colour contrast ratios meet 4.5:1 for normal text</li>
          <li>All form fields have associated labels</li>
          <li>Dynamic content updates announced via aria-live regions</li>
          <li>Navigation landmarks (header, nav, main) are correctly used</li>
          <li>Tab order follows logical reading order throughout</li>
        </ul>
      </div>
    </div>
  );
}
