"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";
import { profile, stats, languages } from "@/lib/data";
import { SiNextdotjs, SiN8N, SiReact, SiSupabase } from "react-icons/si";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 700; // fast count-up, settles quickly
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-[38px] font-bold text-ink">
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-4 py-24">
      <Reveal className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-neutral-700 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[#ff6b00]" />
          About me
        </span>
      </Reveal>
      <Reveal className="mt-5">
        <h2 className="mx-auto max-w-3xl text-center text-[36px] font-bold leading-[1.1] tracking-tight sm:text-[40px]">
          <span className="text-[#111]">Building web apps &amp; AI workflows that</span>{" "}
          <span className="text-[#cfcfcf]">solve real problems</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid items-start gap-10 md:grid-cols-2">
        {/* Portrait — pure CSS gradient panel + monogram, NO photo */}
        <Reveal>
          <div className="relative flex h-[470px] items-center justify-center overflow-hidden rounded-2xl bg-[#f5f5f5]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#dbeafe,transparent_55%),radial-gradient(circle_at_75%_80%,#fed7aa,transparent_55%)]" />
            <span className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b00] via-[#f43f5e] to-[#7c3aed] text-[110px] font-extrabold text-white shadow-xl">
              M
            </span>
            <span className="absolute left-5 top-5 flex h-12 w-12 rotate-[-6deg] items-center justify-center rounded-xl border border-line bg-white text-neutral-600 shadow-md">
              <SiReact size={22} />
            </span>
            <span className="absolute right-5 top-8 flex h-12 w-12 rotate-[7deg] items-center justify-center rounded-xl border border-line bg-white text-neutral-600 shadow-md">
              <SiNextdotjs size={22} />
            </span>
            <span className="absolute bottom-6 left-8 flex h-12 w-12 rotate-[5deg] items-center justify-center rounded-xl border border-line bg-white text-neutral-600 shadow-md">
              <SiN8N size={22} />
            </span>
            <span className="absolute bottom-10 right-8 flex h-12 w-12 rotate-[-8deg] items-center justify-center rounded-xl border border-line bg-white text-neutral-600 shadow-md">
              <SiSupabase size={22} />
            </span>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow">
              <span className="font-urdu">{profile.name}</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-[16px] leading-[1.6] text-[#666]">
            <p>
              <strong className="text-ink">I&apos;m <span className="font-urdu">{profile.name}</span>, a Full-Stack Developer and Agentic AI Developer</strong> with a background in
              engineering — bridging the gap between beautiful design and working products.
            </p>
            <p>
              <strong className="text-ink">I design and build digital experiences</strong> — modern web applications with React, Next.js and
              TypeScript, backed by Node.js, REST APIs and Supabase, from idea through to a live, deployed product.
            </p>
            <p>
              <strong className="text-ink">My focus is practical AI</strong> — building agents and intelligent tools that connect models, APIs and
              business workflows using OpenAI and Gemini APIs, n8n automation and webhooks.
            </p>
            <p>
              <strong className="text-ink">That systems thinking drives everything I build.</strong> I&apos;m passionate about accessible, useful
              software and creating experiences that solve real problems for real people.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l.name} className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                {l.name} — {l.level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14">
        <div className="grid grid-cols-3 divide-x divide-line rounded-[24px] border border-line bg-white px-6 py-8 text-center shadow-sm">
          {stats.map((s) => (
            <div key={s.label} className="px-2">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-1 text-[13px] font-medium text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
