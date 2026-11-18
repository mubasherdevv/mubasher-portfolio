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

const colors: Record<string, string> = {
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "React": "#61DAFB",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  "Supabase": "#3ECF8E",
  "OpenAI API": "#10A37F",
  "Gemini API": "#4285F4",
  "n8n": "#EA4B71",
  "REST APIs": "#F05033",
  "WordPress": "#21759B",
  // Next.js + GitHub stay black-on-light / white-on-dark (brand colour is black)
};

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="fade-x overflow-hidden py-2">
      <div className={`flex w-max items-center gap-12 pr-12 ${reverse ? "animate-marquee-tech-rev" : "animate-marquee-tech"}`}>
        {doubled.map((t, i) => {
          const Icon = icons[t];
          const brand = colors[t];
          return (
            <span key={i} className="flex items-center gap-2.5 whitespace-nowrap text-ink dark:text-[#f5f5f5]">
              {Icon && (brand ? <Icon size={20} style={{ color: brand }} aria-hidden="true" /> : <Icon size={20} className="text-[#111] dark:text-white" aria-hidden="true" />)}
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
