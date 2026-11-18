import Reveal, { SectionLabel } from "./Reveal";
import { techStackRow1, techStackRow2 } from "@/lib/data";
import {
  SiCss, SiGit, SiGithub, SiGooglegemini, SiHtml5, SiJavascript, SiN8N,
  SiNextdotjs, SiNodedotjs, SiChatbot, SiReact, SiSupabase, SiTailwindcss,
  SiTypescript, SiWordpress,
} from "react-icons/si";
import type { IconType } from "react-icons";

const icons: Record<string, IconType> = {
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "HTML": SiHtml5,
  "CSS": SiCss,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Supabase": SiSupabase,
  "OpenAI API": SiChatbot,
  "Gemini API": SiGooglegemini,
  "n8n": SiN8N,
  "REST APIs": SiGit,
  "Git & GitHub": SiGithub,
  "WordPress": SiWordpress,
};

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="fade-x overflow-hidden py-2">
      <div className={`flex w-max items-center gap-12 pr-12 ${reverse ? "animate-marquee-tech-rev" : "animate-marquee-tech"}`}>
        {doubled.map((t, i) => {
          const Icon = icons[t];
          return (
            <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-[#b0b0b0]">
              {Icon && <Icon size={20} />}
              <span className="text-[17px] font-medium">{t}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-20">
      <Reveal className="text-center">
        <SectionLabel>My Tech Stack</SectionLabel>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <Row items={techStackRow1} />
        <div className="h-9" />
        <Row items={techStackRow2} reverse />
      </Reveal>
    </section>
  );
}
