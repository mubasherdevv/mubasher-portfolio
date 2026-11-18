"use client";

import { useRef, useState } from "react";
import Reveal, { SectionLabel, SectionHeading } from "./Reveal";
import Mockup from "./Mockup";
import { projects, projectFilters } from "@/lib/data";

type Filter = (typeof projectFilters)[number];

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={ref}
      className="view-cursor group relative overflow-hidden rounded-[24px] border border-line bg-white shadow-sm transition hover:shadow-xl"
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setPos(null)}
    >
      <div className="relative p-6 pb-8" style={{ backgroundColor: p.color }}>
        <Mockup kind={p.mock} lines={p.mockLines} />
        {pos && (
          <>
            <span
              className="pointer-events-none absolute z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#4c1d95] text-xs font-bold tracking-wide text-white shadow-xl"
              style={{ left: pos.x, top: pos.y }}
            >
              VIEW
            </span>
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm text-white shadow-lg">
              ↗
            </span>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-extrabold text-ink">{p.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-600">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
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
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal className="text-center">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="mt-4">
          <SectionHeading dark="Selected" pale="Work" />
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f ? "bg-ink text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {shown.map((p) => (
          <Reveal key={p.title}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 text-center">
        <p className="text-sm text-neutral-500">
          {shown.length} project{shown.length === 1 ? "" : "s"} — more work available on request.
        </p>
      </Reveal>
    </section>
  );
}
