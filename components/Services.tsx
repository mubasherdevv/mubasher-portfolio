import Reveal, { SectionHeading } from "./Reveal";
import Mockup from "./Mockup";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal className="text-center">
        <SectionHeading dark="The Right Skills, in One Place to" pale="Build What You Need" />
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="h-full overflow-hidden rounded-[24px] border border-line bg-white shadow-sm transition hover:shadow-lg">
              <div className="flex items-center justify-center p-6" style={{ backgroundColor: s.color }}>
                <Mockup kind={s.mock} lines={s.mockLines} />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
