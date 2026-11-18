import Reveal, { SectionLabel } from "./Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-24">
      <Reveal>
        <SectionLabel>Process</SectionLabel>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {processSteps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08} className={`h-full lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}>
            <div className="flex h-[260px] flex-col justify-between rounded-[20px] border border-line bg-white p-6 shadow-sm dark:border-[#262626] dark:bg-[#161616]">
              <span className="text-[48px] font-bold leading-none text-[#ddd] dark:text-[#333]">{s.n}</span>
              <div>
                <h3 className="text-[17px] font-bold text-ink dark:text-[#f5f5f5]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666] dark:text-[#a3a3a3]">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
