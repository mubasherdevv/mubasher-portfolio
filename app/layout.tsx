import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-caveat" });

// NOTE: the Urdu name font is NOT a next/font Google font any more — the
// full Noto Nastaliq Urdu arabic subset is 239 KB and was the mobile LCP
// bottleneck. It is replaced by a hand-subset woff2
// (public/fonts/nastaliq-subset.woff2, 80 KB, only the 17 codepoints the
// site renders) declared via @font-face in globals.css and preloaded below.

/** Runs before first paint: applies the saved theme (localStorage
    "mubasher-theme") or the OS preference, so there is no light-flash. */
const themeScript = `(function(){try{var t=localStorage.getItem("mubasher-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export const metadata: Metadata = {
  title: "محمد مبشر — Full-Stack Developer | Agentic AI Developer",
  description:
    "Full-stack developer focused on building modern web applications and exploring agentic AI systems. React, Next.js, TypeScript, Node.js, Supabase, OpenAI & Gemini APIs, n8n automation.",
  openGraph: {
    title: "محمد مبشر — Full-Stack Developer | Agentic AI Developer",
    description:
      "Building modern web apps and intelligent AI workflows — from idea to live product.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/nastaliq-subset.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${caveat.variable} font-sans dark:bg-[#0a0a0a] dark:text-[#f5f5f5]`}>{children}</body>
    </html>
  );
}
