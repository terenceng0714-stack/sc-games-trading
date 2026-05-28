import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07080d",
        panel: "#10131d",
        line: "#23283a",
        neonBlue: "#35d6ff",
        neonPurple: "#9b5cff",
        neonRed: "#ff3d6e"
      },
      boxShadow: {
        glow: "0 0 40px rgba(53, 214, 255, 0.18)",
        purpleGlow: "0 0 44px rgba(155, 92, 255, 0.2)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
