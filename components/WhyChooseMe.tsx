import Reveal, { SectionHeading } from "./Reveal";
import { whyChooseMe } from "@/lib/data";

export default function WhyChooseMe() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal className="text-center">
        <SectionHeading dark="Many Reasons why you" pale="Should Choose Me" />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {whyChooseMe.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div
              className={`relative h-full min-h-[240px] overflow-hidden rounded-[24px] p-6 ${
                c.dark ? "bg-neutral-900 text-white" : "bg-white text-ink border border-line shadow-sm"
              }`}
            >
              <div className="absolute -right-4 -top-4 flex rotate-12 gap-2">
                {c.pills.slice(0, 2).map((p) => (
                  <span key={p} className="rounded-full bg-[#ff6b00] px-3 py-1 text-[11px] font-bold text-white shadow">
                    {p}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-extrabold">{c.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${c.dark ? "text-neutral-300" : "text-neutral-600"}`}>{c.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.pills.map((p) => (
                  <span
                    key={p}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      c.dark ? "bg-white/10 text-white" : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="flex items-center gap-5 rounded-[24px] border border-line bg-white p-6 shadow-sm">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-2xl">⏱</span>
            <div>
              <h3 className="text-lg font-extrabold text-ink">Fast Execution</h3>
              <p className="mt-1 text-sm text-neutral-600">Delivering working, tested builds on tight timelines — without cutting corners on quality.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex items-center gap-5 rounded-[24px] border border-line bg-white p-6 shadow-sm">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-2xl">🤝</span>
            <div>
              <h3 className="text-lg font-extrabold text-ink">Collaboration</h3>
              <p className="mt-1 text-sm text-neutral-600">Clear communication and partnership throughout the project — you always know where things stand.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
