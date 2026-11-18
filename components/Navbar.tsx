"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-xl items-center justify-between rounded-full border border-line bg-white/90 py-2 pl-5 pr-2 shadow-lg shadow-black/5 backdrop-blur-md">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-ink" aria-label="Home">
          m<span className="text-[#ff6b00]">.</span>
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:block"
          >
            Contact me
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full px-3 py-2 text-sm font-semibold text-ink hover:bg-neutral-100 sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>
      {open && (
        <div className="absolute top-16 w-full max-w-xl rounded-3xl border border-line bg-white p-3 shadow-xl sm:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cvHref}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block rounded-2xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
          >
            View my CV
          </a>
        </div>
      )}
    </header>
  );
}
