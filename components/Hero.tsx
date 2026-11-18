"use client";

import { motion } from "framer-motion";
import { profile, projects } from "@/lib/data";
import Mockup from "./Mockup";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const marqueeCards = [...projects, ...projects, ...projects, ...projects];

/** Floating cursor pill — static position, no bobbing (Twambi's pills don't visibly drift). */
function FloatPill({
  label,
  color,
  className,
}: {
  label: string;
  color: string;
  className: string;
}) {
  return (
    <span
      className={`absolute hidden items-center gap-1.5 rounded-full border border-neutral-200/80 bg-white px-3.5 py-2 text-[13px] font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.08)] lg:flex ${className}`}
      style={{ color }}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill={color} aria-hidden="true">
        <path d="M1 1 L11 6 L6 7 L4 11 Z" />
      </svg>
      {label}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-10 pt-32 sm:pt-36">
      <div className="relative mx-auto max-w-[1180px] px-4 text-center">
        {/* Monogram avatar (pure CSS — no photo) + "محمد مبشر" pill */}
        <motion.div {...fade(0.1)} className="relative mx-auto h-[100px] w-[100px]">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b00] via-[#f43f5e] to-[#7c3aed] text-[44px] font-extrabold text-white shadow-lg ring-4 ring-white">
            M
          </div>
          <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white bg-emerald-500" title="Available for work" />
        </motion.div>
        <motion.div {...fade(0.18)} className="relative z-10 -mt-3 flex justify-center">
          <span className="font-urdu rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_6px_20px_rgba(0,0,0,0.10)] ring-1 ring-neutral-100">
            محمد مبشر
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.3)}
          className="mx-auto mt-6 max-w-[700px] text-[52px] font-bold leading-[1.05] tracking-tight text-[#111] sm:text-[56px]"
        >
          I&apos;m a Full-Stack Developer and Agentic AI Developer.
        </motion.h1>

        <motion.p {...fade(0.45)} className="mx-auto mt-5 max-w-[560px] text-[17px] leading-relaxed text-[#666]">
          {profile.heroShort}
        </motion.p>

        <motion.div {...fade(0.55)} className="relative mx-auto mt-9 flex flex-wrap items-center justify-center gap-4">
          {/* Handwritten note + curved arrow, left of the buttons */}
          <span className="pointer-events-none absolute -left-2 -top-12 hidden rotate-[-8deg] items-end gap-1 md:flex lg:left-6">
            <span className="font-hand text-[28px] font-semibold leading-none text-neutral-700">Lets Chat!</span>
            <svg width="46" height="34" viewBox="0 0 46 34" fill="none" aria-hidden="true" className="mb-1 -ml-1">
              <path d="M4 4 C 18 22, 30 26, 42 12" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M42 12 l-7 -1 M42 12 l-1 7" stroke="#111" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <a href="#contact" className="flex h-12 w-[150px] items-center justify-center rounded-full bg-[#111] text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800">
            Contact me
          </a>
          <a
            href={profile.cvHref}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-[150px] items-center justify-center rounded-full bg-[#f3f3f3] text-sm font-semibold text-[#111] transition hover:bg-neutral-200"
          >
            View my CV
          </a>
        </motion.div>

        <FloatPill label="Full-Stack" color="#2563eb" className="left-[7%] top-60 -rotate-6" />
        <FloatPill label="Agentic AI" color="#7c3aed" className="right-[7%] top-52 rotate-6" />
        <FloatPill label="Next.js" color="#ea580c" className="bottom-44 right-[13%] -rotate-3" />
      </div>

      {/* Hero project marquee — very slow drift, large cards */}
      <motion.div {...fade(0.65)} className="fade-x mt-16 overflow-hidden">
        <div className="flex w-max animate-marquee-slow gap-6 pr-6 hover:[animation-play-state:paused]">
          {marqueeCards.map((p, i) => (
            <div
              key={i}
              className="flex h-[340px] w-[500px] shrink-0 flex-col justify-center rounded-[24px] p-8"
              style={{ backgroundColor: p.color }}
            >
              <Mockup kind={p.mock} lines={p.mockLines} />
              <p className="mt-5 text-center text-base font-bold text-white">{p.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
