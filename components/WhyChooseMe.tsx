import Reveal from "./Reveal";
import { whyChooseMe } from "@/lib/data";
import { SiGithub, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import type { IconType } from "react-icons";

/** Popular Services tiles — colourful brand icons (4-column grid, 2 rows). */
const serviceIcons: { Icon: IconType; color: string; name: string }[] = [
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
  { Icon: SiGithub, color: "#181717", name: "GitHub" },
];

function ClockArt() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true" className="mt-4">
      <circle cx="60" cy="60" r="52" fill="white" stroke="#e8e8e8" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return <circle key={i} cx={60 + 44 * Math.sin(a)} cy={60 - 44 * Math.cos(a)} r={i % 3 === 0 ? 3 : 1.5} fill="#9ca3af" />;
      })}
      <line x1="60" y1="60" x2="60" y2="30" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="60" x2="84" y2="66" stroke="#111" strokeWidth="4" strokeLinecap="round" />
      <circle cx="60" cy="60" r="5" fill="#111" />
    </svg>
  );
}

function CollabArt() {
  return (
    <div className="mt-4 flex h-[120px] items-center justify-center gap-3" aria-hidden="true">
      <div className="h-[110px] w-[90px] rotate-[-8deg] rounded-[20px] bg-gradient-to-br from-[#2563eb] to-[#7c3aed] opacity-90 shadow-lg" />
      <div className="h-[110px] w-[90px] rotate-[7deg] rounded-[20px] bg-gradient-to-br from-[#f97316] to-[#ec4899] opacity-90 shadow-lg" />
    </div>
  );
}

export default function WhyChooseMe() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-24">
      <Reveal className="text-center">
        <h2 className="text-[40px] font-bold leading-[1.1] tracking-tight text-[#111]">
          Many Reasons why you
          <br />
          Should <span className="text-[#cfcfcf]">Choose Me</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {/* Popular Services — 5×2 icon grid */}
        <Reveal delay={0} className="h-full">
          <div className="flex h-[270px] flex-col rounded-[24px] border border-line bg-white p-6 shadow-sm">
            <h3 className="text-[17px] font-bold text-ink">Popular Services</h3>
            <p className="mt-1 text-sm text-[#666]">End-to-end web development and AI workflow automation.</p>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {serviceIcons.map(({ Icon, color, name }) => (
                <span key={name} title={name} className="flex h-12 items-center justify-center rounded-xl border border-line bg-white shadow-sm">
                  <Icon size={22} color={color} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Robust products — black card, iridescent lightning */}
        <Reveal delay={0.05} className="h-full">
          <div className="relative flex h-[270px] flex-col overflow-hidden rounded-[24px] bg-neutral-900 p-6 text-white shadow-sm">
            <h3 className="text-[17px] font-bold">Robust products</h3>
            <p className="mt-1 text-sm text-neutral-400">Clean, maintainable code — built to keep working, not just to launch.</p>
            <svg viewBox="0 0 200 120" className="mt-auto w-full" aria-hidden="true">
              <defs>
                <linearGradient id="bolt" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="35%" stopColor="#a78bfa" />
                  <stop offset="70%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              <polygon points="118,6 74,66 102,66 82,114 136,52 106,52" fill="url(#bolt)" />
            </svg>
          </div>
        </Reveal>

        {/* Vast Knowledge — scattered rotated pills, fully inside */}
        <Reveal delay={0.1} className="h-full">
          <div className="flex h-[270px] flex-col rounded-[24px] border border-line bg-white p-6 shadow-sm">
            <h3 className="text-[17px] font-bold text-ink">Vast Knowledge</h3>
            <p className="mt-1 text-sm text-[#666]">Broad expertise across the stack — one person can carry a project end to end.</p>
            <div className="mt-5 flex flex-wrap gap-1.5 px-1">
              {["Full-Stack", "Agentic AI", "Next.js", "n8n", "Supabase", "WordPress", "SEO", "APIs"].map((p, i) => (
                <span
                  key={p}
                  className="inline-block rounded-full border border-line bg-neutral-50 px-3.5 py-1.5 text-[13px] font-semibold text-neutral-600"
                  style={{ transform: `rotate(${[-18, 12, -8, 16, -14, 8, -20, 10][i]}deg) translateY(${[0, 3, -2, 4, -3, 2, 0, -2][i]}px)` }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full items-start gap-5 rounded-[24px] border border-line bg-white p-6 shadow-sm">
            <ClockArt />
            <div>
              <h3 className="text-[17px] font-bold text-ink">Fast Execution</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#666]">Delivering working, tested builds on tight timelines — without cutting corners on quality.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05} className="h-full">
          <div className="flex h-full items-start gap-5 rounded-[24px] border border-line bg-white p-6 shadow-sm">
            <CollabArt />
            <div>
              <h3 className="text-[17px] font-bold text-ink">Collaboration</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#666]">Clear communication and partnership throughout the project — you always know where things stand.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
