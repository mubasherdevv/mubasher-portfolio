import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Mubasher — Full-Stack Developer | Agentic AI Developer",
  description:
    "Full-stack developer focused on building modern web applications and exploring agentic AI systems. React, Next.js, TypeScript, Node.js, Supabase, OpenAI & Gemini APIs, n8n automation.",
  openGraph: {
    title: "Muhammad Mubasher — Full-Stack Developer | Agentic AI Developer",
    description:
      "Building modern web apps and intelligent AI workflows — from idea to live product.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
