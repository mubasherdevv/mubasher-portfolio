"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { profile, timeSlots } from "@/lib/data";

function firstAvailableDay(year: number, month: number): number | null {
  const today = new Date();
  const days = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= days; d++) {
    const dt = new Date(year, month, d);
    if (dt < new Date(today.getFullYear(), today.getMonth(), today.getDate())) continue;
    if (dt.getDay() !== 0 && dt.getDay() !== 6) return d;
  }
  return null;
}

export default function Contact() {
  const [tab, setTab] = useState<"call" | "message">("call");
  const now = useMemo(() => new Date(), []);
  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() });
  const monthName = new Date(view.y, view.m, 1).toLocaleString("en-US", { month: "long", year: "numeric" });

  // Monday-first grid
  const first = new Date(view.y, view.m, 1);
  const leading = (first.getDay() + 6) % 7;
  const totalDays = new Date(view.y, view.m + 1, 0).getDate();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  const [selectedDay, setSelectedDay] = useState<number | null>(() =>
    firstAvailableDay(now.getFullYear(), now.getMonth())
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const selectedDate = selectedDay ? new Date(view.y, view.m, selectedDay) : null;
  const dateLabel = selectedDate
    ? selectedDate.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "";

  const shiftMonth = (delta: number) => {
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
    setSelectedDay(null);
    setSelectedTime(null);
    setConfirmed(false);
  };
  const isCurrentMonth = view.y === now.getFullYear() && view.m === now.getMonth();

  const cells: (number | null)[] = [
    ...Array.from({ length: leading }, () => null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  const mailtoCall = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Intro call request — ${dateLabel} at ${selectedTime ?? ""} PKT`
  )}&body=${encodeURIComponent(
    `Hi Mubasher,\n\nI'd like to book a 30-min intro call on ${dateLabel} at ${selectedTime} PKT (Google Meet or Zoom).\n\nThanks!`
  )}`;
  const mailtoMessage = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Message from ${name || "your portfolio"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-4 py-24">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[32px] p-8 sm:p-12"
          style={{
            background:
              "linear-gradient(180deg,#ef4444 0%,#f97316 28%,#ec4899 58%,#8b5cf6 82%,#7c3aed 100%)",
          }}
        >
          {/* fine vertical stripe overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{ background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 7px)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-[48px] font-bold leading-[1.05] tracking-tight sm:text-[56px]">
                Let&apos;s start something great together.
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/85">
                Have a project in mind, or want to talk about web development and AI automation? I&apos;d love to hear from you.
              </p>
              <p className="mt-8 text-[18px] font-bold">
                <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
                  {profile.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-white/80">
                {profile.location} · {profile.timezone}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-[120px] items-center justify-center rounded-full border border-white/70 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={profile.phoneHref}
                  className="flex h-9 items-center justify-center rounded-full border border-white/70 px-4 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            {/* Booking card */}
            <div className="rounded-[24px] bg-[#2b0a1e]/90 p-6 text-white shadow-2xl backdrop-blur">
              <div className="flex gap-2">
                {(["call", "message"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      tab === t ? "bg-white text-ink" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {t === "call" ? "Book a call" : "Send a message"}
                  </button>
                ))}
              </div>

              {tab === "call" ? (
                <div className="mt-5">
                  <p className="text-base font-bold">30-min intro call</p>
                  <p className="text-sm text-white/60">Google Meet or Zoom · Free</p>

                  <div className="mt-5 flex items-center justify-between">
                    <button onClick={() => shiftMonth(-1)} disabled={isCurrentMonth} aria-label="Previous month" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition enabled:hover:bg-white/20 disabled:opacity-30">
                      ‹
                    </button>
                    <p className="text-sm font-bold">{monthName}</p>
                    <button onClick={() => shiftMonth(1)} aria-label="Next month" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                      ›
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-white/50">
                    {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
                      <span key={d} className="py-1">{d}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {cells.map((d, i) => {
                      if (d === null) return <span key={i} />;
                      const dt = new Date(view.y, view.m, d);
                      const past = dt.getTime() < todayStart;
                      const weekend = dt.getDay() === 0 || dt.getDay() === 6;
                      const disabled = past || weekend;
                      const selected = selectedDay === d;
                      return (
                        <button
                          key={i}
                          disabled={disabled}
                          onClick={() => { setSelectedDay(d); setSelectedTime(null); setConfirmed(false); }}
                          className={`flex h-10 items-center justify-center rounded-lg text-sm font-semibold transition ${
                            disabled
                              ? "cursor-not-allowed text-white/20"
                              : selected
                                ? "bg-[#ff6b00] text-white"
                                : "text-white underline decoration-[#ff6b00] decoration-2 underline-offset-4 hover:bg-white/15"
                          }`}
                        >
                          {d}
                        </button>
                      );
                    })}
                  </div>

                  {selectedDay && (
                    <div className="mt-4">
                      <p className="text-sm font-bold">{dateLabel} — pick a time (PKT)</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => { setSelectedTime(t); setConfirmed(false); }}
                            className={`h-11 w-[110px] rounded-xl text-sm font-semibold transition ${
                              selectedTime === t ? "bg-white text-ink" : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <button
                        disabled={!selectedTime}
                        onClick={() => setConfirmed(true)}
                        className="mt-4 w-full rounded-full bg-[#ff6b00] py-3 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-40 hover:bg-orange-600"
                      >
                        {selectedTime ? "Confirm time →" : "Pick a time to continue →"}
                      </button>
                      {confirmed && selectedTime && (
                        <div className="mt-4 rounded-2xl bg-white/10 p-4">
                          <p className="text-sm font-bold">✓ {dateLabel} at {selectedTime} PKT</p>
                          <p className="mt-1 text-sm text-white/70">
                            This site has no booking backend — confirming here just prepares your email. Send it to lock the time in.
                          </p>
                          <a href={mailtoCall} className="mt-3 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink">
                            Email Mubasher to book →
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <form
                  className="mt-5 space-y-3"
                  onSubmit={(e) => { e.preventDefault(); window.location.href = mailtoMessage; }}
                >
                  <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none" />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Your email"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none" />
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} placeholder="Tell me about your project…"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none" />
                  <button type="submit" className="w-full rounded-full bg-[#ff6b00] py-3 text-sm font-bold text-white hover:bg-orange-600">
                    Send via email →
                  </button>
                  <p className="text-center text-xs text-white/50">Opens your email app addressed to {profile.email} — no data is stored anywhere.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
