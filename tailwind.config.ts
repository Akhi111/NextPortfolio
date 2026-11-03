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
      colors: {
        background: "#03060c",
        foreground: "#f8fafc",
        glass: {
          surface: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.07)",
          card: "rgba(13, 19, 33, 0.65)",
          border: "rgba(255, 255, 255, 0.1)",
          "border-highlight": "rgba(255, 255, 255, 0.25)",
        },
        brand: {
          blue: "#38bdf8",
          cyan: "#22d3ee",
          violet: "#a855f7",
          purple: "#818cf8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "liquid-gradient":
          "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.15) 0%, rgba(168, 85, 247, 0.1) 40%, rgba(3, 6, 12, 0) 70%)",
        "glass-shine":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.02) 60%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 4s infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "shimmer-sweep": "shimmer 2.5s infinite linear",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
        xl: "20px",
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};

export default config;

