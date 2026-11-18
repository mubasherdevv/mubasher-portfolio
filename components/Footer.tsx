"use client";

import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { useLang } from "./LanguageContext";
import { SiGithub, SiYoutube } from "react-icons/si";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="w-full">
      <Reveal>
        <div className="bg-[#f7f7f7] px-8 pt-12 sm:px-12 lg:px-16 dark:bg-[#161616]">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <p className="text-[20px] font-bold leading-snug text-ink dark:text-[#f5f5f5]">
                Do You have any questions? Feel free to email me
              </p>
              <a href={`mailto:${profile.email}`} className="mt-2 inline-block text-[15px] font-medium text-neutral-600 underline underline-offset-4 hover:text-ink dark:text-neutral-400 dark:hover:text-[#ff6b00]">
                {profile.email}
              </a>
              <div className="mt-5 flex gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-[13px] font-extrabold text-ink transition hover:border-ink dark:border-[#262626] dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:hover:border-[#ff6b00] dark:hover:text-[#ff6b00]"
                >
                  in
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-ink transition hover:border-ink dark:border-[#262626] dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:hover:border-[#ff6b00] dark:hover:text-[#ff6b00]"
                >
                  <SiGithub size={18} />
                </a>
                <a
                  href={profile.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-ink transition hover:border-ink dark:border-[#262626] dark:bg-[#1a1a1a] dark:text-[#f5f5f5] dark:hover:border-[#ff6b00] dark:hover:text-[#ff6b00]"
                >
                  <SiYoutube size={18} />
                </a>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[16px] font-bold text-ink dark:text-[#f5f5f5]">Contact me</p>
              <a href={profile.phoneHref} className="mt-1 block text-[15px] text-neutral-600 hover:text-ink dark:text-neutral-400 dark:hover:text-[#ff6b00]">
                {profile.phone}
              </a>
              <p className="mt-4 text-[16px] font-bold text-ink dark:text-[#f5f5f5]">Location</p>
              <p className="mt-1 text-[15px] text-neutral-600 dark:text-neutral-400">{lang === "ur" ? profile.location : profile.locationEn}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-5 dark:border-[#262626]">
            <p className="text-right text-sm text-neutral-500 dark:text-neutral-400">© 2026 {lang === "ur" ? <span className="font-urdu">{profile.name}</span> : profile.nameEn}. All rights reserved</p>
          </div>

          {/* Giant wordmark — Urdu name in Nastaliq in 'ur' mode, bold sans
              uppercase in 'en' mode; orange + subtle glow in both. */}
          <div className="overflow-hidden pb-6 pt-6" aria-hidden="true">
            {lang === "ur" ? (
              <p className="wordmark wordmark-urdu font-urdu select-none text-center font-bold tracking-tight" style={{ fontSize: "clamp(64px, 12vw, 150px)" }}>
                محمد مبشر
              </p>
            ) : (
              <p className="wordmark select-none whitespace-nowrap text-center font-bold uppercase tracking-tight" style={{ fontSize: "clamp(32px, 7vw, 110px)", lineHeight: 1.05 }}>
                Muhammad Mubasher
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-neutral-500 dark:text-neutral-400">
            <span>Made with ♥ by <a href={profile.github} target="_blank" rel="noreferrer" className={`${lang === "ur" ? "font-urdu" : ""} underline-offset-4 hover:text-[#ff6b00] hover:underline`}>{lang === "ur" ? profile.name : profile.nameEn}</a></span>
            <span>
              Thank you <span className="font-bold text-[#ff6b00]">For scrolling</span>
            </span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
