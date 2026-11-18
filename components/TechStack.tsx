import Reveal, { SectionLabel } from "./Reveal";
import { techStackRow1, techStackRow2 } from "@/lib/data";

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="fade-x overflow-hidden py-2">
      <div className={`flex w-max gap-4 pr-4 ${reverse ? "animate-marquee-rev" : "animate-marquee-slow"}`}>
        {doubled.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-neutral-500 shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal className="text-center">
        <SectionLabel>My Tech Stack</SectionLabel>
      </Reveal>
      <Reveal delay={0.1} className="mt-8">
        <Row items={techStackRow1} />
        <Row items={techStackRow2} reverse />
      </Reveal>
    </section>
  );
}
