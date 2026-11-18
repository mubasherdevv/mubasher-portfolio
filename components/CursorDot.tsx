"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

/**
 * Site-wide custom cursor: a small black dot trailing the pointer.
 * `viewing` (set by project cards on hover) grows it into a dark-navy
 * circle reading VIEW. Rendered once in page.tsx.
 */
export default function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [visible, setVisible] = useState(false);
  const [fine, setFine] = useState(false);
  const [viewing, setViewing] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    if (!mq.matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const onView = (e: Event) => setViewing((e as CustomEvent<boolean>).detail);
    window.addEventListener("mousemove", move);
    window.addEventListener("mubasher:cursor-view", onView);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mubasher:cursor-view", onView);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  const transform = useMotionTemplate`translate(${sx}px, ${sy}px) translate(-50%, -50%)`;

  if (!fine) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full bg-[#1e1b4b] text-white ring-1 ring-white/30 md:flex"
      style={{ transform }}
      animate={{
        width: viewing ? 64 : 11,
        height: viewing ? 64 : 11,
        opacity: visible ? 1 : 0,
        backgroundColor: viewing ? "#1e1b4b" : "#111111",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {viewing && <span className="text-[11px] font-bold tracking-widest">VIEW</span>}
    </motion.div>
  );
}
