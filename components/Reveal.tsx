"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import WordReveal from "./WordReveal";

/** Scroll reveal: fade + slide up only. No blur — blur left text looking unfinished. */
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm">
      <span className="h-2.5 w-2.5 rounded-[2px] bg-[#ff6b00]" />
      {children}
    </span>
  );
}

/** Heading with Twambi's word-by-word pale-to-black reveal. `pale` words stay pale. */
export function SectionHeading({
  dark,
  pale,
  align = "center",
}: {
  dark: string;
  pale: string;
  align?: "center" | "left";
}) {
  const paleWords = pale.split(" ").map((w) => w.replace(/[.,]/g, ""));
  return (
    <h2
      className={`text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <WordReveal text={`${dark} ${pale}`} pale={paleWords} />
    </h2>
  );
}
