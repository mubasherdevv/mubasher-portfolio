"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

/** English/Urdu language toggle for the Urdu words on the site (name + location).
    Default is English. The preloader does NOT use this — it always renders Urdu.
    The choice persists in localStorage ("mubasher-lang"). */
export type Lang = "en" | "ur";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
});

const STORAGE_KEY = "mubasher-lang";

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "ur" ? "ur" : "en";
  } catch {
    return "en";
  }
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readStoredLang());
  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };
  const toggleLang = () => setLang(lang === "en" ? "ur" : "en");
  return <LangContext.Provider value={{ lang, setLang, toggleLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
