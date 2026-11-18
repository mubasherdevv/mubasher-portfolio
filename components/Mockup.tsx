"use client";

/** CSS-built screen/phone mockups — no copied images, Twambi-style
    solid-colour panels with a centred device. */
export default function Mockup({
  kind,
  lines,
  dark = false,
}: {
  kind: "browser" | "phone" | "flow" | "sheet";
  lines: string[];
  dark?: boolean;
}) {
  if (kind === "phone") {
    return (
      <div className="mx-auto flex w-40 flex-col overflow-hidden rounded-[2rem] border-4 border-neutral-900 bg-white shadow-xl">
        <div className="flex items-center justify-center bg-neutral-900 py-1.5">
          <span className="h-2 w-14 rounded-full bg-neutral-700" />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <p className="text-[11px] font-bold leading-tight text-ink">{lines[0]}</p>
          <div className="rounded-lg bg-emerald-100 px-2 py-1.5 text-[10px] font-medium text-emerald-800">{lines[1]}</div>
          <div className="rounded-lg bg-neutral-100 px-2 py-1.5 text-[10px] text-neutral-600">{lines[2]}</div>
          <div className="mt-auto rounded-full bg-emerald-500 py-1.5 text-center text-[10px] font-bold text-white">Order on WhatsApp</div>
        </div>
      </div>
    );
  }
  if (kind === "flow") {
    return (
      <div className="mx-auto w-full max-w-xs rounded-2xl bg-white/95 p-4 shadow-xl">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-violet-600 px-2.5 py-1.5 text-[11px] font-bold text-white">AI API</span>
          <span className="text-neutral-400">→</span>
          <span className="rounded-lg bg-neutral-900 px-2.5 py-1.5 text-[11px] font-bold text-white">n8n</span>
          <span className="text-neutral-400">→</span>
          <span className="rounded-lg bg-emerald-500 px-2.5 py-1.5 text-[11px] font-bold text-white">Action</span>
        </div>
        <p className="mt-3 text-[11px] font-semibold text-ink">{lines[0]}</p>
        <p className="text-[11px] text-neutral-500">{lines[1]}</p>
      </div>
    );
  }
  if (kind === "sheet") {
    return (
      <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex gap-1.5 bg-neutral-100 px-3 py-2">
          {["Business", "Contact", "Website"].map((h) => (
            <span key={h} className="rounded bg-white px-2 py-1 text-[10px] font-bold text-neutral-700 shadow-sm">{h}</span>
          ))}
        </div>
        <div className="space-y-1.5 p-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex gap-1.5">
              <span className="h-3 flex-1 rounded bg-emerald-100" />
              <span className="h-3 flex-1 rounded bg-neutral-100" />
              <span className="h-3 flex-1 rounded bg-neutral-100" />
            </div>
          ))}
        </div>
        <p className="border-t px-3 py-2 text-[11px] font-semibold text-ink">{lines[1]}</p>
      </div>
    );
  }
  // browser
  return (
    <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="flex items-center gap-1.5 bg-neutral-100 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-2 flex-1 rounded-md bg-white px-2 py-1 text-[10px] text-neutral-400 shadow-sm">mubasher.dev</span>
      </div>
      <div className="space-y-2 p-4">
        <p className="text-sm font-extrabold text-ink">{lines[0]}</p>
        <div className="h-2 w-3/4 rounded bg-neutral-200" />
        <div className="h-2 w-1/2 rounded bg-neutral-200" />
        <p className="text-[11px] text-neutral-500">{lines[1] ?? ""}</p>
        {lines[2] && <p className="text-[11px] font-medium text-neutral-600">{lines[2]}</p>}
        <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold text-white ${dark ? "bg-neutral-900" : "bg-[#ff6b00]"}`}>
          View project
        </span>
      </div>
    </div>
  );
}
