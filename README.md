# KING DAVID — Portfolio Vol. 02

A four-page portfolio for **David Olufemi**, a graphic designer in Port Harcourt, Nigeria.
Editorial display type, a black / grey / white monochrome system and generous whitespace,
built with plain HTML, CSS and JavaScript — no framework, no build step.

Design references: [fatfish.ca](https://fatfish.ca/en/) for the typography and home/projects
frames, [Ameer Bamigbayan](https://ameerbamigbayan.com/) for the monochrome fluency and the
about/contact frames.

## Pages

| File | Layout |
| --- | --- |
| `index.html` | Home — full-height portrait hero with ghost name, floating cards and a moving Flicko client marquee; then the rotating discipline words (Branding / Campaigns / Packaging) with ghost echoes, selected work, dark stats block and monochrome CTA |
| `projects.html` | Projects — split hero with a bleed image and hand-written note, sticky text filters with counts, two-column uniform grid of 18 projects — every image box is 4:5 |
| `about.html` | About — full-height dark hero, portrait and short bio, grey skills block, two experience rows and tools |
| `contact.html` | Contact — full-height dark hero, contact details and a mailto form |

## Run it

Open `index.html` directly, or serve the folder:

```bash
npx serve .
# or
python -m http.server 5173
```

## Content

The bio, project list, case-study details and metrics come from the supplied portfolio PDFs:

- 6 years of practice, 100+ projects, 64% returning clients.
- 4.2-day average turnaround, 3.1 revision rounds.
- 8% rise in property enquiries in three weeks after the Cadenza billboard.
- Delight Hibiscus label delivered print-ready in 24 hours.
- Cadenza sales brochure: 13 pages.

Real contact details: `david4ayomipo@gmail.com`, `+234 814 788 2426`, Port Harcourt, Nigeria.

## The 60-second edit

- **Name / brand** — `KING DAVID`, `King David`, `King David®` in the headers, preloaders, menu and footers.
- **Email and phone** — `david4ayomipo@gmail.com` and `+234 814 788 2426` on all four pages.
- **Social links** — Instagram (`instagram.com/king_david_olufemi`), Behance
  (`behance.net/davidolufemi1`) and LinkedIn (`linkedin.com/in/king-david-olufemi`) are
  wired in the footers and on the Contact page, opening in a new tab.
- **Copy** — hero lines, stats, project titles and the short about bio.
- **Meta** — titles and descriptions in each page's `<head>`.

## Design tokens

Top of `styles.css`:

```css
:root {
  --paper: #f4f4f1;
  --paper-2: #e8e8e4;
  --ink: #111110;
  --ink-2: #1d1d1b;
  --ink-soft: #6b6b66;
  --grey: #8b8b84;
  --pad: clamp(20px, 4.4vw, 72px);
}
```

The original accent variables (`--red`, `--lime`, `--cobalt`, `--tangerine`, `--plum`,
`--pink`) are kept so existing rules still work, but they now resolve to greys, paper or ink.

Type: **Flicko** (display and H1s — Regular for primary lines, Italic for accent words),
**Archivo Black** (subheads, card titles and section heads), **Roboto Slab** (body, 200–700)
and **Caveat** (hand-written notes). Flicko ships with the project in `assets/fonts/`;
the other faces load from Google Fonts.

## Adding work

Projects live in two places:

1. **`projects.html`** — one `<button class="project" data-work="key" data-cat="category">`
   per card. `data-cat` is a space-separated list used by the filters
   (`branding`, `advertising`, `digital`, `web3`, `print`).
2. **`script.js`** — the `PROJECTS` object holds the lightbox title, category, year,
   image, alt text and description for each `data-work` key.

The home page reuses four of the same keys in `index.html`. To add a new project, copy a
card in both files and add a matching entry to `PROJECTS`. Update the filter counts in
`projects.html` if the totals change.

## Assets

```
assets/favicon.svg                — asterisk mark
assets/fonts/Flicko-Regular.woff  — display face
assets/fonts/Flicko-Italic.woff   — display italic, used for accent words
assets/img/portrait-hero.webp     — background-free hero portrait
assets/img/portrait-1.jpg         — portrait, royal blue suit (source)
assets/img/portrait-2.jpg         — second portrait
assets/img/work-*.jpg             — 21 optimised project images
```

Images are pre-resized and compressed. Keep new work around 1400–1600px on the long edge.

## Interactions

- Intro preloader with a percentage counter (skipped within a session).
- Word-by-word text reveals on display headings, with a blur / lift stagger.
- Flicko italic accents inside the display H1s (preloaders, home name, projects, about, contact, statement, CTA and footer).
- Clip-path media reveals on cards, the projects feature image and the about portrait.
- Page-to-page curtain transition plus a soft page entrance after load.
- Scroll progress line, animated section rules, image parallax and counter animations.
- Mouse drift on the intro hero portrait and ghost name, drift on the rotating hero words, cursor-following card image drift and magnetic links.
- Cursor that grows into a labelled bubble ("View", "Email", "Call") over key targets.
- Rotating home hero words with generated ghost tracks and hover dimming of siblings.
- Infinite client marquee in Flicko with an edge fade, hover-pause and drag-to-scrub.
- Sticky project filters with URL sync (`?filter=web3`), animated active underline and an empty state.
- Project lightbox with keyboard navigation, Esc, focus return and body scroll lock.
- Fullscreen mobile menu with scroll lock and underline hover treatments.
- Contact form that composes a `mailto:` message in the visitor's email client.
- `prefers-reduced-motion` support, a skip link and visible focus styles.

## Files

```
index.html      — home structure and copy
projects.html   — hero, filters and 18 project cards
about.html      — hero, bio, skills, experience and tools
contact.html    — contact details and form
styles.css      — design system, monochrome tokens, layouts, motion and responsive rules
script.js       — preloader, menu, split text, reveals, parallax, cursor, lightbox, filters,
                  counters, rotator, page transitions and mailto form
assets/         — favicon and optimised images
```

## Notes

- Pages work without JavaScript: the preloader and reveals are hidden by `<noscript>` rules,
  and all content remains in the HTML.
- No external JavaScript dependencies; Google Fonts is the only third-party request.
- The form does not send anything to a server — it opens the visitor's email app.
