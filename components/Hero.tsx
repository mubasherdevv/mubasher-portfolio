"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, projects } from "@/lib/data";
import Mockup from "./Mockup";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const marqueeCards = [...projects, ...projects];

export default function Hero() {
  return (
    <section id="home" className="dot-grid relative overflow-hidden pb-10 pt-32 sm:pt-36">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Avatar — 150x150 source, shown at native size only, never stretched */}
        <motion.div {...fade(0.1)} className="relative mx-auto h-[104px] w-[104px]">
          <Image
            src="/me.jpg"
            alt="Muhammad Mubasher"
            width={104}
            height={104}
            className="h-[104px] w-[104px] rounded-full border-4 border-white object-cover shadow-lg"
            priority
          />
          <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-emerald-500" title="Available for work" />
        </motion.div>

        <motion.p {...fade(0.2)} className="mt-5 text-sm font-medium text-neutral-500">
          Hi, I am {profile.firstName}
        </motion.p>

        <motion.h1
          {...fade(0.3)}
          className="mx-auto mt-2 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          <span className="text-neutral-300">I&apos;m a Full-Stack Developer</span>
          <br />
          and Agentic AI Developer.
        </motion.h1>

        <motion.p {...fade(0.45)} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Turning ideas into intuitive, beautiful digital experiences — from research, wireframes and design to implementation.
        </motion.p>

        <motion.div {...fade(0.55)} className="relative mx-auto mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="absolute -top-9 left-1/2 hidden -translate-x-24 -rotate-6 font-hand text-xl text-neutral-700 sm:block">
            Lets Chat! ↴
          </span>
          <a href="#contact" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800">
            Contact me
          </a>
          <a
            href={profile.cvHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-neutral-200"
          >
            View my CV
          </a>
        </motion.div>

        {/* Floating cursor pills */}
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[6%] top-56 hidden rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg lg:block"
          style={{ transform: "rotate(-6deg)" }}
        >
          ● Full-Stack
        </motion.span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[6%] top-48 hidden rounded-full bg-violet-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg lg:block"
          style={{ transform: "rotate(5deg)" }}
        >
          ● Agentic AI
        </motion.span>
        <motion.span
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-40 right-[12%] hidden rounded-full bg-[#ff6b00] px-3 py-1.5 text-xs font-bold text-white shadow-lg lg:block"
          style={{ transform: "rotate(-4deg)" }}
        >
          ● Next.js
        </motion.span>
      </div>

      {/* Hero project marquee */}
      <motion.div {...fade(0.65)} className="fade-x mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 pr-5">
          {marqueeCards.map((p, i) => (
            <div key={i} className="w-[340px] shrink-0 rounded-[24px] p-6 sm:w-[380px]" style={{ backgroundColor: p.color }}>
              <Mockup kind={p.mock} lines={p.mockLines} />
              <p className="mt-4 text-center text-sm font-bold text-white">{p.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
