"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const tiles = [
  { label: "Next.js", color: "#111827", rotate: "-8deg", pos: "left-[2%] top-[6%]" },
  { label: "React", color: "#2563eb", rotate: "5deg", pos: "right-[2%] top-[10%]" },
  { label: "n8n", color: "#ea580c", rotate: "-5deg", pos: "left-[4%] bottom-[8%]" },
  { label: "Supabase", color: "#059669", rotate: "7deg", pos: "right-[4%] bottom-[6%]" },
];

/** Plain centred statement — no grey card, no pills overlapping the text. */
export default function IntroStatement() {
  const [on, setOn] = useState(true);
  return (
    <section className="relative mx-auto max-w-[1180px] px-4 py-16 sm:py-20">
      {tiles.map((t, i) => (
        <div
          key={t.label}
          className={`absolute ${t.pos} hidden h-[200px] w-[160px] animate-floaty flex-col items-center justify-center gap-2 rounded-2xl border-[6px] border-white shadow-xl lg:flex`}
          style={{ background: `linear-gradient(135deg, ${t.color}, #475569)`, ["--r" as string]: t.rotate, animationDelay: `${i * 0.7}s` }}
        >
          <span className="text-lg font-extrabold text-white">{t.label}</span>
          <span className="h-1.5 w-10 rounded-full bg-white/50" />
          <span className="h-1.5 w-16 rounded-full bg-white/30" />
        </div>
      ))}
      <Reveal className="relative z-10 text-center">
        <p className="mx-auto max-w-[900px] text-[36px] font-bold leading-[1.2] tracking-tight text-[#111] sm:text-[40px]">
          Helping businesses build modern{" "}
          <span className="inline-block whitespace-nowrap rounded-full bg-[#fef08a] px-3 py-0.5">web apps</span> &amp; intelligent{" "}
          <span className="inline-block whitespace-nowrap rounded-full bg-gradient-to-r from-[#f97316] via-[#f43f5e] to-[#ec4899] px-3 py-0.5 text-white">
            AI workflows
          </span>{" "}
          from idea to live product.
        </p>
        {/* Decorative toggle — ON: orange-red gradient track, mint knob right; OFF: grey track, white knob left */}
        <button
          type="button"
          role="switch"
          aria-checked={on}
          aria-label="Toggle"
          onClick={() => setOn(!on)}
          className={`relative mx-auto mt-8 flex h-[56px] w-[110px] items-center rounded-full p-1.5 transition-colors duration-300 ${
            on ? "bg-gradient-to-r from-[#f97316] to-[#ef4444] justify-end" : "bg-neutral-300 justify-start"
          }`}
        >
          <span className={`h-[52px] w-[52px] rounded-full shadow-md ${on ? "bg-[#a7f3d0]" : "bg-white"}`} />
        </button>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-[#666]">
          Full-stack development, AI integrations and workflow automation — practical tools that connect models, APIs and business workflows.
        </p>
      </Reveal>
    </section>
  );
}
