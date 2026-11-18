"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import { profile, timeSlots } from "@/lib/data";

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export default function Contact() {
  const [tab, setTab] = useState<"call" | "message">("call");
  const now = useMemo(() => new Date(), []);
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthName = now.toLocaleString("en-US", { month: "long", year: "numeric" });
  const firstWeekday = new Date(year, month, 1).getDay(); // 0 = Sunday
  const totalDays = daysInMonth(year, month);
  const today = now.getDate();

  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];

  const dateLabel = selectedDay
    ? new Date(year, month, selectedDay).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "";

  const mailtoCall = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Intro call request — ${dateLabel} at ${selectedTime ?? ""} PKT`
  )}&body=${encodeURIComponent(
    `Hi Mubasher,\n\nI'd like to book a 30-min intro call on ${dateLabel} at ${selectedTime} PKT (Google Meet or Zoom).\n\nThanks!`
  )}`;

  const mailtoMessage = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Message from ${name || "your portfolio"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <div
          className="overflow-hidden rounded-[28px] p-8 sm:p-12"
          style={{
            background:
              "repeating-linear-gradient(90deg, #f97316 0 60px, #ef4444 60px 120px, #e11d48 120px 180px, #9333ea 180px 240px, #7c3aed 240px 300px)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="text-white">
              <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">Let&apos;s start something great together.</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
                Have a project in mind, or want to talk about web development and AI automation? I&apos;d love to hear from you.
              </p>
              <div className="mt-8 space-y-3 text-sm font-medium">
                <p>
                  Email:{" "}
                  <a href={`mailto:${profile.email}`} className="font-bold underline underline-offset-4">
                    {profile.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href={profile.phoneHref} className="font-bold underline underline-offset-4">
                    {profile.phone}
                  </a>
                </p>
                <p>
                  {profile.location} · {profile.timezone}
                </p>
                <p>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="font-bold underline underline-offset-4">
                    LinkedIn →
                  </a>
                </p>
              </div>
            </div>

            {/* Booking card */}
            <div className="rounded-[24px] bg-neutral-950 p-6 text-white shadow-2xl">
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

                  <p className="mt-5 text-sm font-bold">{monthName}</p>
                  <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-white/50">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <span key={d} className="py-1">{d}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {cells.map((d, i) =>
                      d === null ? (
                        <span key={i} />
                      ) : (
                        <button
                          key={i}
                          disabled={d < today}
                          onClick={() => { setSelectedDay(d); setSelectedTime(null); setConfirmed(false); }}
                          className={`rounded-lg py-2 text-sm font-semibold transition ${
                            d < today
                              ? "cursor-not-allowed text-white/20"
                              : selectedDay === d
                                ? "bg-[#ff6b00] text-white"
                                : "text-white hover:bg-white/15"
                          }`}
                        >
                          {d}
                        </button>
                      )
                    )}
                  </div>

                  {selectedDay && (
                    <div className="mt-4">
                      <p className="text-sm font-bold">{dateLabel} — pick a time (PKT)</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            onClick={() => { setSelectedTime(t); setConfirmed(false); }}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
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
                        {selectedTime ? "Confirm time" : "Pick a time to continue"}
                      </button>
                      {confirmed && selectedTime && (
                        <div className="mt-4 rounded-2xl bg-white/10 p-4">
                          <p className="text-sm font-bold">✓ {dateLabel} at {selectedTime} PKT</p>
                          <p className="mt-1 text-sm text-white/70">
                            This site has no booking backend — confirming here just prepares your email. Send it to lock the time in.
                          </p>
                          <a
                            href={mailtoCall}
                            className="mt-3 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink"
                          >
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
                  <input
                    value={name} onChange={(e) => setName(e.target.value)} required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
                  <input
                    value={email} onChange={(e) => setEmail(e.target.value)} required type="email"
                    placeholder="Your email"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
                  <textarea
                    value={message} onChange={(e) => setMessage(e.target.value)} required rows={4}
                    placeholder="Tell me about your project…"
                    className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
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
