"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useLang } from "./LanguageContext";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative block overflow-hidden whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-neutral-600 transition hover:text-ink dark:text-neutral-400 dark:hover:text-[#f5f5f5]"
    >
      {/* doubled-label rollover */}
      <span className="block whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-[110%]">{label}</span>
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center whitespace-nowrap px-3 transition-transform duration-300 group-hover:translate-y-0 translate-y-[110%] text-ink dark:text-[#ff6b00]">
        {label}
      </span>
    </a>
  );
}

/** Language toggle — "EN | اردو" pill, active language bold orange.
    Switches the site's name/location strings instantly, persists in
    localStorage ("mubasher-lang"). Default is English. */
function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "Switch to Urdu" : "Switch to English"}
      className="flex h-10 shrink-0 items-center gap-1 rounded-full border border-neutral-200 px-2.5 text-[12px] font-bold transition hover:bg-neutral-100 dark:border-[#262626] dark:hover:bg-[#262626]"
    >
      <span className={lang === "en" ? "text-[#ff6b00]" : "text-neutral-400 dark:text-neutral-500"}>EN</span>
      <span className="text-neutral-300 dark:text-neutral-600">|</span>
      <span className={lang === "ur" ? "text-[#ff6b00]" : "text-neutral-400 dark:text-neutral-500"}>اردو</span>
    </button>
  );
}

/** Moon/sun theme toggle — flips the "dark" class on <html> and persists the
    choice in localStorage ("mubasher-theme"). Reads the live class (via a
    MutationObserver) so multiple instances never drift out of sync. */
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(el.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("mubasher-theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition hover:bg-neutral-100 dark:text-[#f5f5f5] dark:hover:bg-[#262626]"
    >
      {dark ? <FiSun size={18} className="text-[#ff6b00]" /> : <FiMoon size={18} />}
    </button>
  );
}

/** Floating pill nav ~440×64px, centred. No black Contact button (Twambi has none).
    Hides while scrolling down, reappears when scrolling up. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const prevY = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = prevY.current;
    if (y > prev && y > 140) setHidden(true);
    else if (y < prev) setHidden(false);
    prevY.current = y;
  });
  return (
    <motion.header
      animate={{ y: hidden ? "-130%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-4"
    >
      <nav className="flex h-16 w-[520px] max-w-full items-center justify-between rounded-2xl border border-neutral-200/80 bg-white/95 px-3 dark:border-[#262626]/80 dark:bg-[#161616]/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md">
        <a href="#home" className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-xl font-extrabold tracking-tight text-ink dark:border-[#262626] dark:bg-[#1a1a1a] dark:text-[#f5f5f5]" aria-label="Home">
          m<span className="text-[#ff6b00]">.</span>
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <NavLink key={l.href} label={l.label} href={l.href} />
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-ink hover:bg-neutral-100 sm:hidden dark:text-[#f5f5f5] dark:hover:bg-[#262626]"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
        <span className="hidden shrink-0 items-center gap-1 sm:flex">
          <LangToggle />
          <ThemeToggle />
        </span>
      </nav>
      {open && (
        <div className="absolute inset-x-4 top-[72px] rounded-3xl border border-line bg-white p-3 shadow-xl sm:hidden dark:border-[#262626] dark:bg-[#161616]">
          {links.map((l) => (
            <NavLink key={l.href} label={l.label} href={l.href} onClick={() => setOpen(false)} />
          ))}
          <div className="mt-1 flex items-center justify-between border-t border-line px-3 pt-2 dark:border-[#262626]">
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Language</span>
            <LangToggle />
          </div>
          <div className="mt-1 flex items-center justify-between border-t border-line px-3 pt-2 dark:border-[#262626]">
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Dark mode</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </motion.header>
  );
}
