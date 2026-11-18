"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Twambi's signature Figma-canvas intro (~4.5s): dotted grid, bold black
 * "Hi, I'm Mubasher." inside a thin blue selection box with handles,
 * ruler lines, fake multiplayer cursors, and a % counter climbing 0→100.
 * Exit: the blue box expands to a full-viewport frame, then fades.
 */
export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"count" | "expand" | "done">("count");

  useEffect(() => {
    const start = Date.now();
    const iv = setInterval(() => {
      const t = Math.min(1, (Date.now() - start) / 3800);
      // irregular climb: ease + jitter
      const v = Math.min(100, Math.floor(t * 100 + Math.sin(t * 9) * 2));
      setPct(v);
      if (t >= 1) {
        clearInterval(iv);
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
          className="dot-grid fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white"
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

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={
                phase === "expand"
                  ? { scale: 1, opacity: 1, width: "100vw", height: "100vh", borderRadius: 0 }
                  : { scale: 1, opacity: 1 }
              }
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center border-2 border-[#4da3ff] bg-white/60 px-6 py-8 sm:px-10"
              style={{ width: "min(635px, 88vw)", height: 130 }}
            >
              {/* corner + midpoint handles */}
              {["-left-1.5 -top-1.5", "left-1/2 -top-1.5 -translate-x-1/2", "-right-1.5 -top-1.5", "-left-1.5 top-1/2 -translate-y-1/2", "-right-1.5 top-1/2 -translate-y-1/2", "-left-1.5 -bottom-1.5", "left-1/2 -bottom-1.5 -translate-x-1/2", "-right-1.5 -bottom-1.5"].map(
                (pos) => (
                  <span key={pos} className={`absolute ${pos} h-3 w-3 rounded-[3px] border-2 border-[#4da3ff] bg-white`} />
                )
              )}
              <span className="absolute -top-7 left-0 text-[12px] font-semibold text-[#4da3ff]">Hello</span>
              <p className="font-urdu whitespace-nowrap text-[30px] leading-[1.9] tracking-tight text-black sm:text-[44px] md:text-[52px]">
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
            </motion.div>

            {phase === "count" && (
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 rounded-full bg-[#4da3ff] px-4 py-1.5 text-sm font-bold tabular-nums text-white shadow"
              >
                {pct}%
              </motion.span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
