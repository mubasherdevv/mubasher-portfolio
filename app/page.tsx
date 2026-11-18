import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import IntroStatement from "@/components/IntroStatement";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Tools from "@/components/Tools";
import About from "@/components/About";
import GitHubStats from "@/components/GitHubStats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CursorDot from "@/components/CursorDot";
import ScrollProgress from "@/components/ScrollProgress";
import { LangProvider } from "@/components/LanguageContext";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink dark:bg-[#0a0a0a] dark:text-[#f5f5f5]">
      <LangProvider>
      <CursorDot />
      <ScrollProgress />
      <Preloader />
      <Navbar />
      <Hero />
      <TechStack />
      <IntroStatement />
      <About />
      <GitHubStats />
      <Projects />
      <Experience />
      <Process />
      <Services />
      <WhyChooseMe />
      <Tools />
      <FAQ />

      {/* Quote — static alternating two-tone: lines 1 & 3 black, 2 & 4 pale */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <Reveal>
          <p className="text-[28px] font-bold leading-tight tracking-tight sm:text-[40px]">
            <span className="text-[#111] dark:text-[#f5f5f5]">Great things in Business</span>
            <br />
            <span className="text-[#cfcfcf] dark:text-[#ff6b00]">are never done by one person.</span>
            <br />
            <span className="text-[#111] dark:text-[#f5f5f5]">They&apos;re done by a skilled</span>
            <br />
            <span className="text-[#cfcfcf] dark:text-[#ff6b00]">Team of people.</span>
          </p>
          <p className="mt-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">~ Steve Jobs</p>
          <a href="#contact" className="mt-6 inline-block text-base font-bold text-ink underline dark:text-[#ff6b00] decoration-[#ff6b00] decoration-2 underline-offset-8 hover:text-[#ff6b00]">
            Let&apos;s Collaborate --&gt;
          </a>
        </Reveal>
      </section>

      <Contact />
      <Footer />
      </LangProvider>
    </main>
  );
}
