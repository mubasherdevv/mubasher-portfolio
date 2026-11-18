import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { SiGithub, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1180px] px-4 pb-8">
      <Reveal>
        <div className="rounded-[24px] bg-[#f7f7f7] px-8 pt-12 sm:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <p className="text-[20px] font-bold leading-snug text-ink">
                Do You have any questions? Feel free to email me
              </p>
              <a href={`mailto:${profile.email}`} className="mt-2 inline-block text-[15px] font-medium text-neutral-600 underline underline-offset-4 hover:text-ink">
                {profile.email}
              </a>
              <div className="mt-5 flex gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-[13px] font-extrabold text-ink transition hover:border-ink"
                >
                  in
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-ink transition hover:border-ink"
                >
                  <SiGithub size={18} />
                </a>
                <a
                  href={profile.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-ink transition hover:border-ink"
                >
                  <SiYoutube size={18} />
                </a>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[16px] font-bold text-ink">Contact me</p>
              <a href={profile.phoneHref} className="mt-1 block text-[15px] text-neutral-600 hover:text-ink">
                {profile.phone}
              </a>
              <p className="mt-4 text-[16px] font-bold text-ink">Location</p>
              <p className="mt-1 text-[15px] text-neutral-600">{profile.location}</p>
            </div>
          </div>

          <div className="mt-10 border-t border-neutral-200 pt-5">
            <p className="text-right text-sm text-neutral-500">© 2026 <span className="font-urdu">{profile.name}</span>. All rights reserved</p>
          </div>

          {/* Giant wordmark — Urdu name in Nastaliq; tall line-height so glyphs never clip */}
          <div className="overflow-hidden pb-6 pt-6" aria-hidden="true">
            <p className="wordmark wordmark-urdu font-urdu select-none text-center font-bold tracking-tight" style={{ fontSize: "clamp(64px, 12vw, 150px)" }}>
              محمد مبشر
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-neutral-500">
            <span>Made with ♥ by <span className="font-urdu">محمد مبشر</span></span>
            <span>
              Thank you <span className="font-bold text-[#ff6b00]">For scrolling</span>
            </span>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
