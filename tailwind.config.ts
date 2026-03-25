import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        axis: {
          black: "#000000",
          turquoise: "#00e5cc",
          blue: "#0088ff",
          amber: "#ffaa00",
          red: "#ff3344",
        },
      },
      fontFamily: {
        heading: ["var(--font-rajdhani)", "system-ui", "sans-serif"],
        mono: ["var(--font-share-tech-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(0, 229, 204, 0.25)",
        glow: "0 0 32px rgba(0, 229, 204, 0.35)",
        "glow-lg": "0 0 48px rgba(0, 229, 204, 0.45)",
        "glow-blue": "0 0 24px rgba(0, 136, 255, 0.3)",
      },
      backgroundImage: {
        "nav-line":
          "linear-gradient(90deg, transparent, #00e5cc, #0088ff, transparent)",
        "section-line":
          "linear-gradient(90deg, transparent, rgba(0,229,204,0.5), rgba(0,136,255,0.4), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
