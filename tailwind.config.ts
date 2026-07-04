import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        "bg-elevated": "hsl(var(--bg-elevated))",
        "bg-inset": "hsl(var(--bg-inset))",
        fg: "hsl(var(--fg))",
        "fg-muted": "hsl(var(--fg-muted))",
        "fg-subtle": "hsl(var(--fg-subtle))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        accent2: "hsl(var(--accent2))",
        signal: {
          amber: "hsl(var(--signal-amber))",
          green: "hsl(var(--signal-green))",
          red: "hsl(var(--signal-red))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blink-signal": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "track-flow": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200px 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "blink-signal": "blink-signal 1.8s ease-in-out infinite",
        "track-flow": "track-flow 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
