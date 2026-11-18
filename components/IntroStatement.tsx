"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const tiles = [
  { label: "Next.js", color: "#111827", rotate: "-8deg", pos: "left-[-70px] top-[10%]" },
  { label: "React", color: "#2563eb", rotate: "5deg", pos: "right-[-70px] top-[12%]" },
  { label: "n8n", color: "#ea580c", rotate: "-5deg", pos: "left-[-70px] bottom-[10%]" },
  { label: "Supabase", color: "#059669", rotate: "7deg", pos: "right-[-70px] bottom-[8%]" },
];

type Token =
  | { kind: "word"; text: string; idx: number }
  | { kind: "yellow"; text: string }
  | { kind: "gradient"; text: string };

/** Statement tokens in reading order. Only plain words scrub (idx counts words);
    the two pills stay fully coloured throughout. */
const tokens: Token[] = [
  { kind: "word", text: "Helping", idx: 0 },
  { kind: "word", text: "businesses", idx: 1 },
  { kind: "word", text: "build", idx: 2 },
  { kind: "word", text: "modern", idx: 3 },
  { kind: "yellow", text: "web apps" },
  { kind: "word", text: "&", idx: 4 },
  { kind: "word", text: "intelligent", idx: 5 },
  { kind: "gradient", text: "AI workflows" },
  { kind: "word", text: "from", idx: 6 },
  { kind: "word", text: "idea", idx: 7 },
  { kind: "word", text: "to", idx: 8 },
  { kind: "word", text: "live", idx: 9 },
  { kind: "word", text: "product.", idx: 10 },
];
const WORD_COUNT = 11;

/** Reads the "dark" class on <html> (set by the theme script / toggle) and
    stays in sync when it changes, so the scrub colours flip with the theme. */
function useIsDark() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(el.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

/** One word of the pinned scrub: pale grey → solid black (light mode) or
    dark grey → near-white (dark mode), tied to scroll position.
    Scrolling back up reverses it. No blur, no slide — colour only. */
function ScrubWord({
  progress,
  idx,
  colors,
  children,
}: {
  progress: MotionValue<number>;
  idx: number;
  colors: [string, string];
  children: string;
}) {
  const color = useTransform(progress, [idx / WORD_COUNT, (idx + 1) / WORD_COUNT], colors);
  return (
    <motion.span style={{ color }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

/**
 * Pinned scroll-scrub intro (Twambi's only scrub): the section is ~200vh tall,
 * the inner content sticks to the viewport while scrolling, and the statement
 * words fill from pale grey to black one by one, left-to-right. The toggle and
 * subtext sit below the statement inside the pinned panel.
 */
export default function IntroStatement() {
  const [on, setOn] = useState(true);
  const dark = useIsDark();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scrubColors: [string, string] = dark ? ["#404040", "#f5f5f5"] : ["#d0d0d0", "#111111"];

  return (
    <section className="relative mx-auto max-w-[1180px] px-4">
      <div ref={ref} className="relative h-[200vh]">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center text-center">
          {/* Corner tiles — pushed fully into the side gutters (negative offsets),
              xl widths and up only, so they can never touch the text. Static, no drift. */}
          {tiles.map((t) => (
            <div
              key={t.label}
              className={`absolute ${t.pos} hidden h-[200px] w-[160px] flex-col items-center justify-center gap-2 rounded-2xl border-[6px] border-white shadow-xl xl:flex`}
              style={{ background: `linear-gradient(135deg, ${t.color}, #475569)`, transform: `rotate(${t.rotate})` }}
            >
              <span className="text-lg font-extrabold text-white">{t.label}</span>
              <span className="h-1.5 w-10 rounded-full bg-white/50" />
              <span className="h-1.5 w-16 rounded-full bg-white/30" />
            </div>
          ))}

          <p className="relative z-10 mx-auto max-w-[900px] text-[36px] font-bold leading-[1.2] tracking-tight sm:text-[40px]">
            {tokens.map((t, i) =>
              t.kind === "word" ? (
                <ScrubWord key={i} progress={scrollYProgress} idx={t.idx} colors={scrubColors}>
                  {t.text}
                </ScrubWord>
              ) : t.kind === "yellow" ? (
                <span key={i} className="mr-[0.28em] inline-block whitespace-nowrap rounded-full bg-[#fef08a] px-3 py-0.5 text-[#111]">
                  {t.text}
                </span>
              ) : (
                <span
                  key={i}
                  className="mr-[0.28em] inline-block whitespace-nowrap rounded-full bg-gradient-to-r from-[#f97316] via-[#f43f5e] to-[#ec4899] px-3 py-0.5 text-white"
                >
                  {t.text}
                </span>
              )
            )}
          </p>

          {/* Decorative toggle — ON: orange-red gradient track, mint knob right; OFF: grey track, white knob left */}
          <button
            type="button"
            role="switch"
            aria-checked={on}
            aria-label="Toggle"
            onClick={() => setOn(!on)}
            className={`relative z-10 mx-auto mt-8 flex h-[56px] w-[110px] items-center rounded-full p-1.5 transition-colors duration-300 ${
              on ? "bg-gradient-to-r from-[#f97316] to-[#ef4444] justify-end" : "bg-neutral-300 justify-start dark:bg-[#333]"
            }`}
          >
            <span className={`h-[52px] w-[52px] rounded-full shadow-md ${on ? "bg-[#a7f3d0]" : "bg-white"}`} />
          </button>
          <p className="relative z-10 mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[#666] dark:text-[#a3a3a3]">
            Full-stack development, AI integrations and workflow automation — practical tools that connect models, APIs and business workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
