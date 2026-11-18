import Reveal, { SectionLabel } from "./Reveal";
import Mockup from "./Mockup";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1180px] px-4 py-24">
      <Reveal>
        <SectionLabel>Services</SectionLabel>
      </Reveal>
      <Reveal className="mt-5 text-center">
        <h2 className="text-[40px] font-bold leading-[1.1] tracking-tight text-[#111]">
          The Right Skills, in One Place to
          <br />
          Build <span className="text-[#cfcfcf]">What You Need</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-sm transition hover:shadow-lg">
              <div className="flex h-[300px] items-center justify-center bg-[#f3f3f3] p-6">
                <div className="w-full max-w-[300px]">
                  <Mockup kind={s.mock} lines={s.mockLines} />
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-[18px] font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#666]">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
