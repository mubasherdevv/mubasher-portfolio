# Muhammad Mubasher — Portfolio

A Next.js 14 (App Router, TypeScript, Tailwind CSS, framer-motion) portfolio for
Muhammad Mubasher — Full-Stack Developer | Agentic AI Developer.

The design, layout and animations recreate the portfolio at
https://twambimusukwa.com/ (Twambi): clean white minimal style, floating pill
nav, Figma-style intro preloader, hero project marquee, tech-stack marquees,
scroll-reveal, custom "VIEW" cursor on project cards, animated counters,
booking calendar, and gradient contact/footer. Only the design language and
structure were recreated — no photos, project images, or personal content
were copied from that site.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Content

All text lives in `lib/data.ts` — edit that one file to change copy.
The CV is served at `/Muhammad_Mubasher_CV.pdf` and the avatar at `/me.jpg`
(both in `public/`).

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

## One design fix vs Twambi

Twambi's floating pill nav covers headings when scrolling / anchor-jumping.
Here every anchored section has `scroll-margin-top: 110px` (see
`app/globals.css`), so headings always land fully below the nav. Body copy
also uses higher-contrast greys, and the layout has no horizontal overflow
at desktop or mobile widths.
