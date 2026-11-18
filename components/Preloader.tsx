"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Figma-canvas style intro, Twambi-style: dotted grid, pale "Hi, I'm
    Mubasher.", a blue selection rectangle with measurements, and coloured
    multiplayer cursors labelled "You" and "Mubasher". Fades out after ~2.6s. */
export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="dot-grid fixed inset-0 z-[100] flex items-center justify-center bg-white"
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          aria-hidden="true"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg border-2 border-blue-500 bg-blue-50/40 px-10 py-8"
            >
              <span className="absolute -top-3 left-3 rounded bg-blue-500 px-2 py-0.5 text-[11px] font-bold text-white">482</span>
              <span className="absolute -left-9 top-1/2 -translate-y-1/2 -rotate-90 rounded bg-blue-500 px-2 py-0.5 text-[11px] font-bold text-white">552</span>
              <span className="absolute -bottom-3 right-3 rounded bg-blue-500 px-2 py-0.5 text-[11px] font-bold text-white">53%</span>
              <p className="text-3xl font-bold text-neutral-400 sm:text-4xl">Hi, I&apos;m Mubasher.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -left-16 -top-10 flex items-center gap-1"
            >
              <span className="text-xl text-violet-500">➤</span>
              <span className="rounded-full bg-violet-500 px-2.5 py-1 text-xs font-bold text-white">You</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-12 -right-14 flex items-center gap-1"
            >
              <span className="text-xl text-orange-400">➤</span>
              <span className="rounded-full bg-orange-400 px-2.5 py-1 text-xs font-bold text-white">Mubasher</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
