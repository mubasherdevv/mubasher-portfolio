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
        <h2 className="text-[32px] font-bold leading-[1.1] tracking-tight text-[#111] dark:text-[#f5f5f5] sm:text-[40px]">
          The Right Skills, in One Place to
          <br />
          Build <span className="text-[#cfcfcf] dark:text-[#ff6b00]">What You Need</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-sm transition hover:shadow-lg dark:border-[#262626] dark:bg-[#161616] dark:hover:border-orange-500/40 dark:hover:shadow-[0_16px_40px_rgba(255,107,0,0.10)]">
              <div className="flex h-[300px] items-center justify-center bg-[#f3f3f3] p-6 dark:bg-[#1a1a1a]">
                <div className="w-full max-w-[300px]">
                  <Mockup kind={s.mock} lines={s.mockLines} />
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-[18px] font-bold text-ink dark:text-[#f5f5f5]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#666] dark:text-[#a3a3a3]">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
