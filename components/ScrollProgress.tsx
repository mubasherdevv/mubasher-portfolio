"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

/**
 * Scroll progress bar + back-to-top button.
 * - 3px orange (#ff6b00) bar pinned to the very top (z-60, above the nav
 *   pill at z-50, below the preloader at z-100), driven by framer-motion
 *   useScroll + useSpring scaleX.
 * - Circular back-to-top button, bottom-right, fades in only after
 *   scrolling past 600px and smooth-scrolls to the top on click.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [show, setShow] = useState(false);
  // Guard the setState: scroll fires constantly, and calling setState on
  // every event (even when the value is unchanged) is wasted work.
  const showRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 600;
      if (next !== showRef.current) {
        showRef.current = next;
        setShow(next);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-[#ff6b00]"
        style={{ scaleX }}
      />
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-ink shadow-lg transition hover:bg-neutral-100 dark:border-[#ff6b00] dark:bg-[#ff6b00] dark:text-white dark:hover:bg-orange-600"
          >
            <FiArrowUp size={18} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
