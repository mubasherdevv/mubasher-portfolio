"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  SiGithub, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact,
  SiSupabase, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

/**
 * Tools — Twambi layout: 8 colourful brand icons in 4 pairs FLANKING the
 * centred heading (not a grid below it). Compact field (~480px tall):
 * row 1 above the heading (inset ~24%), row 2 level with the heading
 * (inset ~8%), row 3 below the subtitle (inset ~8%), row 4 at the bottom
 * (inset ~24%). Heading is two lines exactly like Twambi's.
 * Icons fade+rise per row (top first), then stay completely static.
 */
const rows: { left: { Icon: IconType; color: string; darkColor?: string; name: string }; right: { Icon: IconType; color: string; darkColor?: string; name: string }; inset: boolean }[] = [
  { left: { Icon: SiReact, color: "#61DAFB", name: "React" }, right: { Icon: SiNextdotjs, color: "#000000", darkColor: "#f5f5f5", name: "Next.js" }, inset: true },
  { left: { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" }, right: { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" }, inset: false },
  { left: { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" }, right: { Icon: SiNodedotjs, color: "#339933", name: "Node.js" }, inset: false },
  { left: { Icon: SiSupabase, color: "#3ECF8E", name: "Supabase" }, right: { Icon: SiGithub, color: "#181717", darkColor: "#f5f5f5", name: "GitHub" }, inset: true },
];

/** Brand icon in a tile. Icon colour comes from CSS vars so black icons
    (Next.js, GitHub) flip to near-white in dark mode instead of vanishing. */
function ToolTile({ Icon, color, darkColor, name }: { Icon: IconType; color: string; darkColor?: string; name: string }) {
  return (
    <span
      title={name}
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white text-[var(--ic)] shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition dark:border-[#262626] dark:bg-[#1a1a1a] dark:text-[var(--ic-dark)] dark:hover:border-orange-500/50 dark:hover:shadow-[0_8px_24px_rgba(255,107,0,0.15)] lg:h-[54px] lg:w-[54px]"
      style={{ "--ic": color, "--ic-dark": darkColor ?? color } as CSSProperties}
    >
      <Icon size={32} className="h-7 w-7 lg:h-8 lg:w-8" />
    </span>
  );
}

export default function Tools() {
  return (
    <section className="relative mx-auto max-w-[1180px] px-4 py-20">
      {/* Below lg: heading sits ABOVE the icons in normal flow (the
          overlay would collide with the flanking icons below ~1024px wide).
          lg+ keeps the exact Twambi overlay. */}
      <div className="relative mx-auto flex flex-col justify-between gap-6 lg:h-[480px] lg:gap-0">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className={`flex items-center justify-between ${row.inset ? "px-[24%]" : "px-[8%]"}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ToolTile {...row.left} />
            <ToolTile {...row.right} />
          </motion.div>
        ))}

        {/* Heading + subtitle centred in the middle of the icon field.
            Two lines exactly like Twambi's: "A Collection of Tools I Use" /
            "to Bring Ideas to Life" (only "Ideas to Life" pale). */}
        <div className="pointer-events-none static order-first flex flex-col items-center justify-center text-center lg:absolute lg:inset-0 lg:order-none">
          <Reveal>
            <h2 className="text-[26px] font-bold leading-[1.15] tracking-tight text-ink dark:text-[#f5f5f5] md:text-4xl lg:text-5xl lg:leading-[1.08]">
              A Collection of Tools I Use
              <br />
              to Bring <span className="text-[#cfcfcf] dark:text-[#ff6b00]">Ideas to Life</span>
            </h2>
            <p className="mt-4 text-[13px] text-[#666] dark:text-[#a3a3a3] sm:text-[15px]">Designing &amp; Crafting — The Tools That Bring Ideas to Life</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
