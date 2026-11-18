import Reveal, { SectionHeading } from "./Reveal";
import { tools } from "@/lib/data";
import {
  SiCss, SiGit, SiGithub, SiGooglegemini, SiHtml5, SiJavascript, SiN8N,
  SiNextdotjs, SiNodedotjs, SiChatbot, SiReact, SiSupabase, SiTailwindcss,
  SiTypescript, SiWordpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

const icons: Record<string, IconType> = {
  "React": SiReact, "Next.js": SiNextdotjs, "TypeScript": SiTypescript, "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss, "Node.js": SiNodedotjs, "Supabase": SiSupabase, "OpenAI API": SiChatbot,
  "Gemini API": SiGooglegemini, "n8n": SiN8N, "Git": SiGit, "GitHub": SiGithub,
  "WordPress": SiWordpress,
};

/** Scattered floating tool icons around the centred heading — no text-pill grid. */
export default function Tools() {
  const positions = [
    { left: "4%", top: "18%", r: -8, d: "0s" }, { left: "16%", top: "62%", r: 6, d: "0.6s" },
    { left: "30%", top: "12%", r: 5, d: "1.1s" }, { left: "66%", top: "14%", r: -6, d: "0.3s" },
    { left: "80%", top: "58%", r: 8, d: "0.9s" }, { left: "90%", top: "20%", r: -5, d: "1.4s" },
    { left: "10%", top: "42%", r: 4, d: "1.8s" }, { left: "88%", top: "42%", r: -7, d: "0.2s" },
    { left: "44%", top: "76%", r: 6, d: "1.2s" }, { left: "58%", top: "78%", r: -4, d: "0.7s" },
    { left: "24%", top: "82%", r: -6, d: "1.6s" }, { left: "74%", top: "80%", r: 5, d: "0.4s" },
  ];
  return (
    <section className="relative mx-auto max-w-[1180px] overflow-hidden px-4 py-24">
      <Reveal className="relative z-10 text-center">
        <SectionHeading dark="A Collection of Tools I Use to" pale="Bring Ideas to Life" />
        <p className="mt-4 text-[15px] text-[#666]">Designing &amp; Crafting — The Tools That Bring Ideas to Life</p>
      </Reveal>
      <div className="relative mx-auto mt-4 h-[340px] max-w-[900px]">
        {tools.slice(0, 12).map((t, i) => {
          const Icon = icons[t];
          const p = positions[i % positions.length];
          if (!Icon) return null;
          return (
            <span
              key={t}
              title={t}
              className="absolute flex h-16 w-16 animate-floaty items-center justify-center rounded-2xl border border-line bg-white text-neutral-500 shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
              style={{ left: p.left, top: p.top, ["--r" as string]: `${p.r}deg`, animationDelay: p.d }}
            >
              <Icon size={30} />
            </span>
          );
        })}
      </div>
    </section>
  );
}
