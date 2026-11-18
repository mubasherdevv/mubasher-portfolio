"use client";

import { motion } from "framer-motion";

/**
 * Twambi-style word reveal: words start pale grey, then sharpen to solid
 * black word-by-word. Words listed in `pale` stay pale permanently as accent.
 * After the animation completes, non-accent words are solid #111.
 */
export default function WordReveal({
  text,
  pale = [],
  className = "",
  delay = 0,
}: {
  text: string;
  pale?: string[];
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => {
        const isPale = pale.some((p) => w.toLowerCase().includes(p.toLowerCase()));
        return (
          <motion.span
            key={i}
            className="inline-block"
            style={{ marginRight: "0.28em" }}
            initial={{ opacity: 0.25, color: "#d0d0d0" }}
            whileInView={{ opacity: 1, color: isPale ? "#cfcfcf" : "#111111" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: delay + i * 0.06, ease: "easeOut" }}
          >
            {w}
          </motion.span>
        );
      })}
    </span>
  );
}
