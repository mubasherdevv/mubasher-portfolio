# Muhammad Mubasher — Portfolio

A Next.js 14 (App Router, TypeScript, Tailwind CSS, framer-motion) portfolio for
Muhammad Mubasher — Full-Stack Developer | Agentic AI Developer.

The design, layout and animations recreate the portfolio at
https://twambimusukwa.com/ (Twambi): clean white minimal style, floating pill
nav, Figma-style intro preloader, hero project marquee, tech-stack marquees,
scroll-reveal, custom cursor, animated counters, booking calendar, and
gradient contact/footer. Only the design language and structure were
recreated — no photos, project images, or personal content were copied from
that site.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Content

All text lives in `lib/data.ts` — edit that one file to change copy.

## v2 rebuild (2026-11-18) — closer Twambi clone

- **Fonts:** Inter (400–800) + Caveat (handwritten "Lets Chat!") via
  `next/font/google`, used everywhere.
- **Preloader (~4.5s):** dotted grid, bold black "Hi, I'm Mubasher." in a
  thin blue selection box with corner/midpoint handles, "Hello" label, drawn
  ruler lines (329 / 598), "You" / "Mubasher" fake cursors, and a % counter
  climbing 0→100, then the box expands to a full-viewport frame and fades.
- **Hero:** pure-CSS "M" monogram avatar (no photo), "Hi I am Mubasher"
  pill, all-black H1 at ~54px, Mubasher's own subtext, Caveat "Lets Chat!"
  with a hand-drawn curved SVG arrow, white floating pills with coloured
  text, and a very slow (~120s) large-card project marquee.
- **Custom cursor:** small black dot trailing the pointer site-wide; over
  project cards it grows into a dark-navy "VIEW" circle.
- **Scroll reveal:** fade + slide-up only — the blur was removed. Headings
  use a word-by-word pale-to-black `WordReveal`; accent words stay pale,
  the rest settle solid black.
- **Tech Stack / Tools:** `react-icons` Simple Icons, low-contrast grey,
  opposite-direction marquees (Tech Stack) and scattered floating icons
  (Tools) — no text-pill grids.
- **Intro statement:** plain centred text, no grey card; clickable toggle
  (orange-red gradient + mint knob when on); "web apps" yellow pill and
  "AI workflows" gradient pill never overlap neighbouring words; four
  tilted gradient tiles frame the text without covering it.
- **Selected Work:** 2-column grid, equal-height cards, ~550×420px image
  areas, outline tag pills, grey filter bar with white active pill,
  "View all projects →" link.
- **Experience / Education:** stacked full-width rows with a right column
  (dates / type / location). Red Vision LLC shows "Full time · Remote"
  with **no date** — the CV lists none, and none was invented.
- **Process:** white cards with giant pale numbers. **Services:** light-grey
  image areas with flat CSS illustrations. **Why Choose Me:** bento grid
  with icon grid, black iridescent-lightning card, rotated pills fully
  inside their card, CSS clock (no emoji) and abstract collaboration art.
- **About:** gradient "M" monogram portrait panel with floating tool-icon
  squares — no photo anywhere. Fast (0.7s) count-up stats.
- **FAQ:** white bordered cards with dividers. **Contact:** smooth
  multi-stop gradient (red → orange → pink → purple) with a fine-stripe
  overlay; calendar is Monday-first with prev/next months, and the first
  available weekday is pre-selected so time slots show immediately.
- **Footer:** giant "Mubasher" wordmark (clamp up to 300px) fading to
  white, with the "Made with ♥" line below it — no divider cuts through
  the letters.
- **Nav fix (kept from v1):** floating pill nav (~440×64px, no Contact
  button, doubled-label rollover) never covers headings —
  `scroll-margin-top: 110px` on all anchored sections.

## ⚠️ Photo & CV on Vercel — read before deploying

- **There is no photo in this project.** `public/me.jpg` was deleted:
  it was never his photo (a night-sky "Alhamdulillah" image), and it was
  never pushed to GitHub (the push tool is text-only, binaries excluded),
  so on Vercel it 404'd and showed broken-image alt text. The hero avatar
  and About portrait are now pure CSS monograms. To use a real headshot,
  add the photo to the repo and point the avatar at it — do not reuse
  `me.jpg`.
- **CV PDF:** `public/Muhammad_Mubasher_CV.pdf` is in this folder, but it
  is **not in the GitHub repo** for the same binary reason, so "View my
  CV" 404s on Vercel until the file is uploaded to the repo via the
  GitHub website (into the `public/` folder) and redeployed.

## Deliberately omitted vs Twambi (no fake content)

- **Testimonials — omitted.** The CV has no testimonials, so none were invented.
- **Client marquee — omitted.** No client list in the CV; no fake client names.
- **Random Pictures — omitted.** No personal photo gallery was available.
- **Stats — honest only.** About shows 4 Selected Projects, 15+ Tools &
  Technologies, 2 Languages — all derived from the CV. Twambi's "25+
  products / 4+ years / 99% satisfaction" were NOT copied.
- **Pricing — no invented rate.** The FAQ says pricing depends on scope and
  is agreed after discussing requirements.
- **Booking — no fake confirmation.** The calendar lets you pick a date and a
  time, then prepares a `mailto:` email to withm345@gmail.com. There is no
  backend and no fake "booked" state. The message form likewise opens the
  user's email app — nothing is stored.
