import Reveal, { SectionHeading } from "./Reveal";
import { tools } from "@/lib/data";

export default function Tools() {
  const row1 = tools.slice(0, 7);
  const row2 = tools.slice(7);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal className="text-center">
        <SectionHeading dark="A Collection of Tools I Use to" pale="Bring Ideas to Life" />
        <p className="mt-3 text-base text-neutral-600">Designing &amp; Crafting — The Tools That Bring Ideas to Life</p>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {row1.map((t, i) => (
            <span
              key={t}
              className="animate-floaty rounded-2xl border border-line bg-white px-5 py-3.5 text-sm font-extrabold text-ink shadow-sm"
              style={{ animationDelay: `${i * 0.35}s` }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {row2.map((t, i) => (
            <span
              key={t}
              className="animate-floaty rounded-2xl border border-line bg-white px-5 py-3.5 text-sm font-extrabold text-ink shadow-sm"
              style={{ animationDelay: `${0.5 + i * 0.35}s` }}
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
