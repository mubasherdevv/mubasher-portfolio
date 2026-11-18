"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-[1180px] px-4 py-24">
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-[#111] dark:text-[#f5f5f5] sm:text-[40px]">
            Frequently Asked <span className="text-[#cfcfcf] dark:text-[#555]">Questions</span>
          </h2>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#666] dark:text-[#a3a3a3]">
            Answers to common questions about my work, process and services.
          </p>
          <a href="#contact" className="mt-6 inline-block rounded-full bg-[#111] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-[#f5f5f5] dark:text-[#111] dark:hover:bg-white">
            Contact me +
          </a>
        </Reveal>
        <div className="space-y-3 md:col-span-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`rounded-2xl border bg-white transition dark:bg-[#161616] ${isOpen ? "border-neutral-300 shadow-sm dark:border-[#404040]" : "border-line dark:border-[#262626]"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-sm font-bold text-neutral-400">{i + 1}.</span>
                      <span className="text-[15px] font-semibold text-ink dark:text-[#f5f5f5]">{f.q}</span>
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold transition ${isOpen ? "bg-ink text-white dark:bg-[#f5f5f5] dark:text-[#111]" : "bg-neutral-100 text-ink dark:bg-[#262626] dark:text-[#f5f5f5]"}`}>
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
                        <p className="px-5 pb-5 pl-12 pr-4 text-sm leading-relaxed text-[#666] dark:text-[#a3a3a3]">{f.a}</p>
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
