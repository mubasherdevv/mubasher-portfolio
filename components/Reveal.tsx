"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll-reveal: fades + de-blurs in, Twambi-style — but settles to full
    contrast quickly so text is never left washed out mid-scroll. */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-neutral-700 shadow-sm">
      <span className="h-2 w-2 rounded-[2px] bg-[#ff6b00]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  dark,
  pale,
  align = "center",
}: {
  dark: string;
  pale: string;
  align?: "center" | "left";
}) {
  return (
    <h2
      className={`text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {dark} <span className="text-neutral-300">{pale}</span>
    </h2>
  );
}
