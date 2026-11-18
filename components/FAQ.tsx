"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Frequent Asked <span className="text-neutral-300">Questions</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600">Answers to common questions about my work, process and services.</p>
          <a href="#contact" className="mt-5 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800">
            Contact me +
          </a>
        </Reveal>
        <div className="md:col-span-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-line py-1 last:border-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-sm font-bold text-neutral-400">{i + 1}.</span>
                      <span className="text-base font-bold text-ink">{f.q}</span>
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold transition ${isOpen ? "bg-ink text-white" : "bg-neutral-100 text-ink"}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-7 pr-4 text-sm leading-relaxed text-neutral-600">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
