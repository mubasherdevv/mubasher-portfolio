import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        ink: "#111111",
        muted: "#666666",
        pale: "#9ca3af",
        line: "#e8e8e8",
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
        marquee: "marquee 90s linear infinite",
        "marquee-slow": "marquee 120s linear infinite",
        "marquee-rev": "marquee-rev 100s linear infinite",
        "marquee-tech": "marquee 60s linear infinite",
        "marquee-tech-rev": "marquee-rev 60s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
