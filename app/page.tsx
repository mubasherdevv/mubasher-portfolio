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
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import CursorDot from "@/components/CursorDot";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <CursorDot />
      <Preloader />
      <Navbar />
      <Hero />
      <TechStack />
      <IntroStatement />
      <Projects />
      <Experience />
      <Process />
      <Services />
      <WhyChooseMe />
      <Tools />
      <About />
      <FAQ />

      {/* Quote — static alternating two-tone: lines 1 & 3 black, 2 & 4 pale */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <Reveal>
          <p className="text-[40px] font-bold leading-tight tracking-tight">
            <span className="text-[#111]">Great things in Business</span>
            <br />
            <span className="text-[#cfcfcf]">are never done by one person.</span>
            <br />
            <span className="text-[#111]">They&apos;re done by a skilled</span>
            <br />
            <span className="text-[#cfcfcf]">Team of people.</span>
          </p>
          <p className="mt-4 text-sm font-medium text-neutral-500">~ Steve Jobs</p>
          <a href="#contact" className="mt-6 inline-block text-base font-bold text-ink underline decoration-[#ff6b00] decoration-2 underline-offset-8 hover:text-[#ff6b00]">
            Let&apos;s Collaborate --&gt;
          </a>
        </Reveal>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
