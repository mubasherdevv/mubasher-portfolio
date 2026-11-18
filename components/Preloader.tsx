"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Corner/midpoint handles of the blue selection box (shared by the box
    and by the expanding frame). */
const HANDLES = [
  "-left-1.5 -top-1.5",
  "left-1/2 -top-1.5 -translate-x-1/2",
  "-right-1.5 -top-1.5",
  "-left-1.5 top-1/2 -translate-y-1/2",
  "-right-1.5 top-1/2 -translate-y-1/2",
  "-left-1.5 -bottom-1.5",
  "left-1/2 -bottom-1.5 -translate-x-1/2",
  "-right-1.5 -bottom-1.5",
];

/**
 * Twambi's signature Figma-canvas intro (~4.5s): dotted grid, bold black
 * "Hi, I'm Mubasher." inside a thin blue selection box with handles,
 * ruler lines, fake multiplayer cursors, and a % counter climbing 0→100.
 * Exit: the blue box expands to a full-viewport frame, then fades.
 *
 * Performance: the expansion is a TRANSFORM-only FLIP animation — the frame
 * starts at the box's measured rect and scales to the viewport. The old
 * version animated width/height, which shifted everything inside the loader
 * on every frame and was the site's biggest CLS source. The % pill has a
 * fixed width so the digit count (9% → 100%) never moves its edges.
 */
export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"count" | "expand" | "done">("count");
  const boxRef = useRef<HTMLDivElement>(null);
  const [expandRect, setExpandRect] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
    vw: number;
    vh: number;
  } | null>(null);

  useEffect(() => {
    const start = Date.now();
    const iv = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / 3800);
      // irregular climb: ease + jitter
      const v = Math.min(100, Math.floor(t * 100 + Math.sin(t * 9) * 2));
      setPct(v);
      if (t >= 1) {
        clearInterval(iv);
        // Measure the box BEFORE the phase flips, so the expanding frame
        // can start from exactly this rect (transform-only, no layout).
        const r = boxRef.current?.getBoundingClientRect();
        if (r) {
          setExpandRect({
            left: r.left,
            top: r.top,
            width: r.width,
            height: r.height,
            vw: window.innerWidth,
            vh: window.innerHeight,
          });
        }
        setPhase("expand");
        setTimeout(() => setPhase("done"), 650);
      }
    }, 60);
    return () => clearInterval(iv);
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="dot-grid fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          aria-hidden="true"
        >
          {/* Ruler lines (drawn, not real measurements) */}
          <div className="absolute left-0 right-0 top-[38%] hidden h-px bg-red-400/70 md:block" />
          <span className="absolute left-4 top-[38%] hidden -translate-y-1/2 rounded bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white md:block">
            329
          </span>
          <div className="absolute bottom-0 top-0 left-[30%] hidden w-px bg-red-400/70 md:block" />
          <span className="absolute left-[30%] top-4 hidden -translate-x-1/2 rounded bg-red-500 px-2 py-0.5 text-[11px] font-bold text-white md:block">
            598
          </span>

          {phase === "count" ? (
            <div className="relative flex flex-col items-center">
              {/* CSS entrance (see .preloader-enter in globals.css): runs
                  from first paint instead of waiting for hydration, so the
                  name paints / LCP starts immediately. Plain div, not
                  motion — the expand FLIP phase still uses framer-motion. */}
              <div
                ref={boxRef}
                className="preloader-enter relative flex items-center justify-center border-2 border-[#4da3ff] bg-white/60 px-6 py-8 sm:px-10 dark:bg-[#161616]/80"
                style={{ width: "min(635px, 88vw)", height: 130 }}
              >
                {/* corner + midpoint handles */}
                {HANDLES.map((pos) => (
                  <span key={pos} className={`absolute ${pos} h-3 w-3 rounded-[3px] border-2 border-[#4da3ff] bg-white dark:bg-[#161616]`} />
                ))}
                <span className="absolute -top-7 left-0 text-[12px] font-semibold text-[#4da3ff]">Hello</span>
                <p className="font-urdu flex h-[96px] items-center justify-center whitespace-nowrap text-[30px] leading-[1.9] tracking-tight text-black dark:text-[#f5f5f5] sm:h-[110px] sm:text-[44px] md:h-[118px] md:text-[52px]">
                  محمد مبشر
                </p>

                {/* fake cursors */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -right-10 -top-12 hidden items-center gap-1 sm:flex"
                >
                  <span className="text-xl leading-none text-violet-500">➤</span>
                  <span className="rounded-full bg-violet-500 px-2.5 py-1 text-xs font-bold text-white">You</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="absolute -bottom-12 -left-8 hidden items-center gap-1 sm:flex"
                >
                  <span className="text-xl leading-none text-orange-400">➤</span>
                  <span className="font-urdu rounded-full bg-orange-400 px-2.5 py-1 text-xs font-bold text-white">محمد مبشر</span>
                </motion.span>
              </div>

              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 w-[72px] rounded-full bg-[#4da3ff] px-4 py-1.5 text-center text-sm font-bold tabular-nums text-white shadow"
              >
                {pct}%
              </motion.span>
            </div>
          ) : (
            <>
              {/* Expanding frame: grows from the box's rect to the full
                  viewport with transform only (FLIP) — no layout shift.
                  The name stays centred at the same size throughout. */}
              {expandRect && (
                <motion.div
                  initial={{
                    x: expandRect.left,
                    y: expandRect.top,
                    scaleX: expandRect.width / expandRect.vw,
                    scaleY: expandRect.height / expandRect.vh,
                  }}
                  animate={{ x: 0, y: 0, scaleX: 1, scaleY: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "0 0" }}
                  className="fixed inset-0 border-2 border-[#4da3ff] bg-white/60 dark:bg-[#161616]/80"
                >
                  {HANDLES.map((pos) => (
                    <span key={pos} className={`absolute ${pos} h-3 w-3 rounded-[3px] border-2 border-[#4da3ff] bg-white dark:bg-[#161616]`} />
                  ))}
                </motion.div>
              )}
              <p className="font-urdu fixed inset-0 flex items-center justify-center whitespace-nowrap text-[30px] leading-[1.9] tracking-tight text-black dark:text-[#f5f5f5] sm:text-[44px] md:text-[52px]">
                محمد مبشر
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
