"use client";

import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";
import {
  SiGithub, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact,
  SiSupabase, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

/**
 * Tools — Twambi layout: 8 colourful brand icons in 4 pairs FLANKING the
 * centred heading (not a grid below it). Row 1 above the heading (inset),
 * row 2 level with the heading (far edges), row 3 below the subtitle
 * (far edges), row 4 at the bottom (inset). ~150px between rows.
 * Icons fade+rise per row (top first), then stay completely static.
 */
const rows: { left: { Icon: IconType; color: string; name: string }; right: { Icon: IconType; color: string; name: string }; inset: boolean }[] = [
  { left: { Icon: SiReact, color: "#61DAFB", name: "React" }, right: { Icon: SiNextdotjs, color: "#000000", name: "Next.js" }, inset: true },
  { left: { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" }, right: { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" }, inset: false },
  { left: { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" }, right: { Icon: SiNodedotjs, color: "#339933", name: "Node.js" }, inset: false },
  { left: { Icon: SiSupabase, color: "#3ECF8E", name: "Supabase" }, right: { Icon: SiGithub, color: "#181717", name: "GitHub" }, inset: true },
];

function ToolTile({ Icon, color, name }: { Icon: IconType; color: string; name: string }) {
  return (
    <span
      title={name}
      className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-line bg-white shadow-[0_8px_24px_rgba(0,0,0,0.07)]"
    >
      <Icon size={34} color={color} />
    </span>
  );
}

export default function Tools() {
  return (
    <section className="relative mx-auto max-w-[1180px] px-4 py-24">
      <div className="relative mx-auto flex h-[660px] flex-col justify-between">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className={`flex items-center justify-between ${row.inset ? "px-[16%]" : "px-0"}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ToolTile {...row.left} />
            <ToolTile {...row.right} />
          </motion.div>
        ))}

        {/* Heading + subtitle centred in the middle of the icon field */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <Reveal>
            <SectionHeading dark="A Collection of Tools I Use to" pale="Bring Ideas to Life" />
            <p className="mt-4 text-[15px] text-[#666]">Designing &amp; Crafting — The Tools That Bring Ideas to Life</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
