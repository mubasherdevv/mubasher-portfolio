"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import { profile, stats, languages } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1200;
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
    <span ref={ref} className="text-3xl font-extrabold text-ink sm:text-4xl">
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <h2 className="text-center text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          Building web apps &amp; AI workflows <span className="text-neutral-300">that solve real problems</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid items-start gap-10 md:grid-cols-5">
        {/* Portrait panel — gradient + big initial, photo shown small at native
            size only. The 150x150 source is NOT stretched into a large portrait. */}
        <Reveal className="md:col-span-2">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-600 via-violet-600 to-orange-500 p-1.5">
            <div className="flex flex-col items-center rounded-[24px] bg-white px-6 py-10 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-4xl font-extrabold text-white shadow-lg">
                M
              </div>
              <Image
                src="/me.jpg"
                alt="Muhammad Mubasher"
                width={72}
                height={72}
                className="mt-4 h-[72px] w-[72px] rounded-full border-2 border-white object-cover shadow"
              />
              <p className="mt-4 text-xl font-extrabold text-ink">{profile.name}</p>
              <p className="mt-1 text-sm font-medium text-neutral-500">{profile.title}</p>
              <p className="mt-3 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">● Available for work</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-neutral-600">
            <p>
              <strong className="text-ink">I&apos;m {profile.name}, a Full-Stack Developer and Agentic AI Developer</strong> with a background in
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
          <div className="mt-6 flex flex-wrap gap-2">
            {languages.map((l) => (
              <span key={l.name} className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                {l.name} — {l.level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-3 gap-4 rounded-[24px] border border-line bg-white p-6 text-center shadow-sm sm:p-8">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-1 text-xs font-medium text-neutral-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
