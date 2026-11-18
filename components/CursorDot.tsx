"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

/**
 * Site-wide custom cursor: a small black dot trailing the pointer.
 * `viewing` (set by project cards on hover) grows it into a dark-navy
 * circle reading VIEW. `hovering` (links/buttons) grows it into an orange
 * circle. `texting` (plain text) grows it into a translucent white circle
 * with mix-blend-difference, so the text underneath shows through light
 * (inverted) inside the bubble. Rendered once in page.tsx.
 */
export default function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [visible, setVisible] = useState(false);
  const [fine, setFine] = useState(false);
  const [viewing, setViewing] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [texting, setTexting] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    if (!mq.matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a,button,[role='button'],input,textarea,select,[data-cursor]");
      const textEl = !!t?.closest("p,h1,h2,h3,h4,h5,h6,li,blockquote,figcaption");
      setHovering(interactive);
      setTexting(!interactive && textEl);
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

  const size = viewing ? 64 : hovering ? 40 : texting ? 56 : 11;
  const bg = viewing ? "#1e1b4b" : hovering ? "#ff6b00" : texting ? "#ffffff" : "#111111";

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full text-white ring-1 ring-white/30 md:flex ${texting && !viewing ? "mix-blend-difference" : ""}`}
      style={{ transform }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? (texting && !viewing ? 0.85 : 1) : 0,
        backgroundColor: bg,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {viewing && <span className="text-[11px] font-bold tracking-widest">VIEW</span>}
    </motion.div>
  );
}
