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

## v3 animation corrections (2026-11-18) — corrected Twambi motion language

A careful live scroll study of twambimusukwa.com corrected v2's assumptions:

- **Static two-tone headings.** Section headings are NOT word-by-word reveals: first part solid black, last word(s) stay pale grey forever (e.g. "Choose Me", "Questions", "Ideas to Life"). The Steve Jobs quote is static alternating two-tone (lines 1 & 3 black, 2 & 4 pale). `WordReveal.tsx` was deleted.
- **Intro statement is the ONLY scroll scrub.** It is a pinned ~200vh section: the text stays fixed while scrolling and its words turn pale grey → solid black one by one (scrolling back reverses it). The yellow "web apps" and gradient "AI workflows" pills stay coloured throughout. Corner tiles moved fully into the side gutters (negative offsets, xl+ only) so they can never cover the text.
- **Entrances are once-only fade + small rise (~20–40px, 0.6–0.8s)**, with tiny stagger (≤0.1s) inside groups. No scale, no rotation, no blur on scroll entrances. Scrolling back up does not replay them.
- **Tools rebuilt:** 8 colourful brand icons (real brand hex) in 4 pairs flanking the centred heading — row 1 above (inset), row 2 level with heading (far edges), row 3 below subtitle (far edges), row 4 bottom (inset). Icons fade+rise per row, then stay static.
- **Why Choose Me entry:** heading first, then row 1 of 3 cards together (≤0.1s stagger), then row 2 of 2 as a pair. Popular Services uses a 4-column grid of colourful brand icons; Vast Knowledge pills are static, rotated −20°…+20°.
- **Nav hides on scroll down, reappears on scroll up** (~0.3s slide). Hero floating pills are static; hero heading keeps a load-in blur→sharpen only.
- **Footer wordmark** reduced to clamp(80px, 14vw, 180px) so "Mubasher" fits inside the 1180px card without overflow.

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
