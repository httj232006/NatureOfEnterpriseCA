import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#2563eb",
          green: "#16a34a",
          amber: "#d97706",
        },
      },
    },
  },
  plugins: [],
};
export default config;
