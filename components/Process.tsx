import Reveal, { SectionLabel } from "./Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <SectionLabel>Process</SectionLabel>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="flex h-full min-h-[220px] flex-col justify-between rounded-[24px] bg-soft p-5">
              <span className="text-5xl font-extrabold text-neutral-300">{s.n}</span>
              <div>
                <h3 className="text-base font-extrabold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
