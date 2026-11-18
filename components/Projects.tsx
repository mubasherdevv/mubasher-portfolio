"use client";

import { useRef, useState } from "react";
import Reveal, { SectionLabel, SectionHeading } from "./Reveal";
import Mockup from "./Mockup";
import { projects, projectFilters } from "@/lib/data";

type Filter = (typeof projectFilters)[number];

function setCursorView(v: boolean) {
  window.dispatchEvent(new CustomEvent("mubasher:cursor-view", { detail: v }));
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  return (
    <div
      ref={ref}
      className="view-cursor group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-sm transition hover:shadow-xl"
      onMouseEnter={() => {
        setHover(true);
        setCursorView(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setCursorView(false);
      }}
    >
      <div className="relative flex h-[420px] items-center justify-center p-8" style={{ backgroundColor: p.color }}>
        <div className="w-full max-w-[440px] transition-transform duration-500 group-hover:scale-[1.04]">
          <Mockup kind={p.mock} lines={p.mockLines} />
        </div>
        {hover && (
          <span className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#b45309] text-base text-white shadow-lg">
            ↗
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[21px] font-bold text-ink">{p.title}</h3>
        <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-[#666]">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-[12px] font-medium text-neutral-600">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-[1180px] px-4 py-24">
      <Reveal className="text-center">
        <SectionLabel>My Projects</SectionLabel>
        <div className="mt-5">
          <SectionHeading dark="Selected" pale="Work" />
        </div>
        <div className="mx-auto mt-8 flex h-12 w-fit items-center gap-3 rounded-full bg-neutral-100 px-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                filter === f ? "bg-white text-ink shadow" : "text-neutral-600 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="h-full">
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <a href="#contact" className="text-[15px] font-semibold text-ink underline decoration-[#ff6b00] decoration-2 underline-offset-8 hover:text-[#ff6b00]">
          View all projects →
        </a>
      </Reveal>
    </section>
  );
}
