import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yd: {
          black: "#080808",
          graphite: "#111111",
          "graphite-light": "#1a1a1a",
          "graphite-mid": "#222222",
          "graphite-border": "#2a2a2a",
          "gray-dark": "#333333",
          "gray-mid": "#555555",
          "gray-soft": "#888888",
          "gray-muted": "#aaaaaa",
          "off-white": "#f5f3ef",
          "warm-white": "#faf8f5",
          cream: "#ede9e3",
          "metallic-light": "#c8bfb0",
          metallic: "#a89880",
          "metallic-dark": "#8a7a68",
          gold: "#b8a882",
          "gold-light": "#d4c4a0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.25rem, 2.5vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        "body-md": ["1rem", { lineHeight: "1.7", letterSpacing: "0.01em" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", letterSpacing: "0.02em" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
        "label-md": ["0.8125rem", { lineHeight: "1", letterSpacing: "0.1em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "section": "7rem",
        "section-lg": "10rem",
      },
      maxWidth: {
        "prose-xl": "72ch",
        "content": "1440px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "line-grow": "lineGrow 0.8s ease forwards",
        "ticker": "ticker 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        lineGrow: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-vignette": "radial-gradient(ellipse at center, transparent 40%, rgba(8,8,8,0.8) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
