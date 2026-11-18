import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-8">
      <Reveal>
        <div className="overflow-hidden rounded-[28px] bg-neutral-100 px-8 pb-0 pt-12 text-center sm:px-12">
          <p className="text-xl font-bold text-ink sm:text-2xl">
            Do You have any questions? Feel free to email me{" "}
            <a href={`mailto:${profile.email}`} className="text-[#ff6b00] underline underline-offset-4">
              {profile.email}
            </a>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-600">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="font-semibold hover:text-ink">
              LinkedIn →
            </a>
            <a href={profile.phoneHref} className="font-semibold hover:text-ink">
              Contact me {profile.phone}
            </a>
            <span>Location {profile.location}</span>
          </div>
          <p className="mt-6 text-sm text-neutral-500">© 2026 {profile.name}. All rights reserved</p>
          <p className="mt-10 bg-gradient-to-r from-blue-600 via-violet-500 to-orange-500 bg-clip-text text-[22vw] font-extrabold leading-[0.8] tracking-tight text-transparent opacity-90 sm:text-[11rem]">
            Mubasher
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 py-4 text-xs text-neutral-500">
            <span>Made with ♥ by Mubasher</span>
            <span>
              Thank you <span className="font-bold text-[#ff6b00]">For scrolling</span>
            </span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
