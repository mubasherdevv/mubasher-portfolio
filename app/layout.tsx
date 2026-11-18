import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-caveat" });

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
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>{children}</body>
    </html>
  );
}
