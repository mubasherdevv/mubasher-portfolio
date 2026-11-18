"use client";

import { useState } from "react";

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
      className="group relative block overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition hover:text-ink"
    >
      {/* doubled-label rollover */}
      <span className="block transition-transform duration-300 group-hover:-translate-y-[110%]">{label}</span>
      <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center px-4 transition-transform duration-300 group-hover:translate-y-0 translate-y-[110%] text-ink">
        {label}
      </span>
    </a>
  );
}

/** Floating pill nav ~440×64px, centred. No black Contact button (Twambi has none). */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav className="flex h-16 w-[440px] max-w-full items-center justify-between rounded-2xl border border-neutral-200/80 bg-white/95 px-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md">
        <a href="#home" className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-xl font-extrabold tracking-tight text-ink" aria-label="Home">
          m<span className="text-[#ff6b00]">.</span>
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <NavLink key={l.href} label={l.label} href={l.href} />
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold text-ink hover:bg-neutral-100 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
        <span className="hidden w-12 sm:block" aria-hidden="true" />
      </nav>
      {open && (
        <div className="absolute top-[72px] w-full max-w-[440px] rounded-3xl border border-line bg-white p-3 shadow-xl sm:hidden">
          {links.map((l) => (
            <NavLink key={l.href} label={l.label} href={l.href} onClick={() => setOpen(false)} />
          ))}
        </div>
      )}
    </header>
  );
}
