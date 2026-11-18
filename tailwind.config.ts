import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        hand: ["'Segoe Script'", "'Bradley Hand'", "cursive"],
      },
      colors: {
        ink: "#111111",
        muted: "#6b7280",
        pale: "#9ca3af",
        line: "#e5e7eb",
        soft: "#f5f5f4",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-rev": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        floaty: {
          "0%,100%": { transform: "translateY(0px) rotate(var(--r,0deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--r,0deg))" },
        },
        drift: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(6px,-8px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 48s linear infinite",
        "marquee-fast": "marquee 24s linear infinite",
        "marquee-rev": "marquee-rev 40s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
