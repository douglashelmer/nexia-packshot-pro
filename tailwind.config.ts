import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        "bg-card": "var(--bg-card)",
        "bg-card-hi": "var(--bg-card-hi)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        "ink-dimmer": "var(--ink-dimmer)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "accent-2": "var(--accent-2)",
        "accent-deep": "var(--accent-deep)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
} satisfies Config;
