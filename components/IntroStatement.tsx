import Reveal from "./Reveal";

const tiles = [
  { label: "Next.js", color: "#111827", rotate: "-rotate-6", pos: "left-2 top-2 sm:left-8 sm:top-6" },
  { label: "React", color: "#2563eb", rotate: "rotate-3", pos: "right-2 top-4 sm:right-10 sm:top-2" },
  { label: "n8n", color: "#ea580c", rotate: "-rotate-3", pos: "left-4 bottom-2 sm:left-16 sm:bottom-6" },
  { label: "Supabase", color: "#059669", rotate: "rotate-6", pos: "right-4 bottom-4 sm:right-16 sm:bottom-2" },
];

export default function IntroStatement() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <Reveal>
        <div className="relative rounded-[28px] bg-soft px-6 py-16 text-center sm:py-20">
          {tiles.map((t) => (
            <div
              key={t.label}
              className={`absolute ${t.pos} ${t.rotate} hidden animate-floaty items-center justify-center rounded-2xl px-4 py-3 text-sm font-extrabold text-white shadow-lg sm:flex`}
              style={{ backgroundColor: t.color }}
            >
              {t.label}
            </div>
          ))}
          <p className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Helping businesses build modern{" "}
            <span className="bg-yellow-200 px-2 py-0.5 rounded-lg">web apps</span> &amp; intelligent{" "}
            <span className="rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 px-3 py-1 text-white">
              AI workflows
            </span>{" "}
            from idea to live product.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base text-neutral-600">
            Full-stack development, AI integrations and workflow automation — practical tools that connect models, APIs and business workflows.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
