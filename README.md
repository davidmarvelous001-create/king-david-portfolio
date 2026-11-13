# KING DAVID. Portfolio Vol. 02

A four-page portfolio for **David Olufemi**, a design lead and graphic designer in Port Harcourt, Nigeria.
Editorial display type, a black / grey / white monochrome system and generous whitespace,
built with plain HTML, CSS and JavaScript, with no framework and no build step.

Design references: [fatfish.ca](https://fatfish.ca/en/) for the typography and home/projects
frames, [Ameer Bamigbayan](https://ameerbamigbayan.com/) for the monochrome fluency and the
about/contact frames. Content reference: [designerhq.app](https://designerhq.app/) for
problem-first, plain-language copy.

## Pages

| File | Layout |
| --- | --- |
| `index.html` | Home. Full-height portrait hero with ghost name, floating cards and a moving Flicko client marquee; then the rotating discipline words (Branding / Campaigns / Packaging) with ghost echoes, selected work, dark stats block and monochrome CTA |
| `projects.html` | Projects. Split hero with a bleed image and hand-written note, sticky text filters with counts, two-column uniform grid of 21 projects where every image box is 4:5, See More paging and a See the full archive link |
| `about.html` | About. Full-height dark hero, portrait and short bio, a grey skills accordion, two experience rows and a moving tool logo banner |
| `contact.html` | Contact. Full-height dark hero, contact details including WhatsApp, and a mailto form |

## Run it

Open `index.html` directly, or serve the folder:

```bash
npx serve .
# or
python -m http.server 5173
```

## Deploy on Vercel

1. Push the repository to GitHub.
2. In Vercel, choose **Add New Project** and import the repo.
3. Set **Framework Preset** to **Other**, leave the build command empty and set the output
   directory to the repository root.
4. Deploy. Every push to `main` redeploys automatically.

## Content

The bio, project list, case-study details and metrics come from the supplied portfolio PDFs:

- Design lead at Velox Real Estate, with select freelance work across drinks, food and Web3.
- 6 years of practice, 100+ projects, 64% returning clients.
- 4.2-day average turnaround from approved brief to first round.
- 8% rise in property enquiries in three weeks after the Cadenza billboard.
- Delight Hibiscus label delivered print-ready in 24 hours.

Availability is written as **Available for new projects** across the site. The three testimonial
cards on Home are placeholders in `index.html`, marked with `PLACEHOLDER` comments. The section
is currently hidden (the `hidden` attribute on `section.testimonials`); replace the quotes,
names and roles, then remove `hidden` to bring it back.

The latest project images were refreshed from the shared Drive folder. The branding set now
includes Lovely Love Treats (chocolate cake, meatpie and chinchin), Velox Vest merch and the
Delight lifestyle campaign, alongside the existing Delight packaging and bottle range work.
The Projects hero uses the Velox Vest hoodie mockup. The Cadenza Brochure
card was removed because no clean brochure image was available.

Real contact details: `david4ayomipo@gmail.com`, `+234 814 788 2426`, Port Harcourt, Nigeria.
WhatsApp opens a chat at `wa.me/2348147882426` and is linked from the mobile menu, the footer
contact column on every page, the Contact detail cards, the Contact social row, the Home CTA
and the WhatsApp icon beside “See the work” on the rotating Home hero.

## The 60-second edit

- **Name / brand** `KING DAVID` and `King David` in the headers, preloaders, menu and footers.
- **Email and phone** `david4ayomipo@gmail.com` and `+234 814 788 2426` on all four pages.
- **Social links** Instagram (`instagram.com/king_david_olufemi`), Behance
  (`behance.net/davidolufemi1`) and LinkedIn (`linkedin.com/in/king-david-olufemi`) are
  wired in the footers and on the Contact page as icon buttons, opening in a new tab.
- **WhatsApp** `wa.me/2348147882426` in the menu, footers, Contact cards, Home CTA and the icon beside “See the work”.
- **Copy** hero lines, stats, project titles and the short about bio.
- **Meta** titles and descriptions in each page's `<head>`.

## Design tokens

Dark is the default theme. `styles.css` opens with the dark palette on `:root`, and the
light palette lives under `html[data-theme="light"]`:

```css
:root {
  --paper: #0c0c0b;
  --paper-2: #151514;
  --panel: #111110;      /* feature bands: hero, statement, CTA, footer, page heroes */
  --panel-2: #191917;
  --panel-fg: #f4f4f1;
  --ink: #f4f4f1;
  --ink-2: #cfcfc8;
  --ink-soft: rgba(244, 244, 241, 0.58);
  --grey: #8b8b84;
  --pad: clamp(20px, 4.4vw, 72px);
}
```

`--paper` is the page surface and `--ink` is the text on it, so both flip together. Feature
bands use the `--panel` / `--panel-fg` pair, which flips to a light grey surface with dark
text under `html[data-theme="light"]`, so no section is left dark in light mode.

Text and borders inside those bands read from the matching panel ramp instead of hardcoded
white-alpha values, so they invert with the surface:

| Token | Role |
| --- | --- |
| `--panel-strong` / `--panel-muted` | body copy, ledes |
| `--panel-soft` / `--panel-faint` | kickers, meta rows, captions |
| `--panel-dim` | col headings, footer baseline |
| `--panel-line` / `--panel-line-strong` | hairlines and rules |
| `--panel-stroke` | outlined display type |

Two surfaces stay intentionally dark in both themes: `.lightbox` and `.reel__frame` (the
video frame and its overlay/controls). They re-declare the dark panel tokens locally so media
and controls keep their light-on-dark treatment.

Glow layers read from `--glow`, `--glow-soft` and `--glow-strong`; sticky chrome reads from
`--glass`.

The original accent variables (`--red`, `--lime`, `--cobalt`, `--tangerine`, `--plum`,
`--pink`) are kept so existing rules still work, but they now resolve to greys, paper or ink.

### Theme switch

Each page has an inline script in `<head>` that applies `data-theme="light"` before first
paint (no flash), then `script.js` handles the header toggle:

- Button: `.theme-toggle` with sun/moon SVGs, marked `data-theme-toggle`, placed after
  "Let's chat" in `.header-right`.
- Persistence: `localStorage` key `kd-theme` (`dark` or `light`).
- Transition: a `startViewTransition` radial wipe from the button centre, with a class-based
  colour fade fallback where the API is unavailable.
- `meta[name="theme-color"]` is updated to match the active surface.

Type is two families. **Flicko** handles all display work (H1s, section heads, nav, filters,
project titles, stat figures; Regular for primary lines, Italic for accent words).
**Gilroy** does everything else, self-hosted as WOFF2 in five weights: Light (300), Regular
(400), Medium (500/600), Bold (700) and Heavy (800). The `--heavy` token points at a
single-weight "Gilroy Heavy" alias and `--hand` at "Gilroy Light", so the small uppercase
labels and the annotation notes keep their own voice without a second family. No Google Fonts
request, and Flicko + Gilroy Regular are preloaded for a clean first paint.

## Adding work

Projects live in two places:

1. **`projects.html`** one `<button class="project" data-work="key" data-cat="category">`
   per card. `data-cat` is a space-separated list used by the filters
   (`branding`, `advertising`, `digital`, `web3`).
2. **`script.js`** the `PROJECTS` object holds the lightbox title, category, year,
   image, alt text and description for each `data-work` key.

The home page reuses four of the same keys in `index.html`. To add a new project, copy a
card in both files and add a matching entry to `PROJECTS`. Update the numbers inside the
filter buttons (`.filter__count`) if the category totals change.

The Projects grid shows **6 at a time** out of 21. The See More button reveals another 6 and
reports how many are left; hidden cards are excluded from the lightbox. Changing a filter
resets the grid to 6.

## Assets

```
assets/favicon.svg                asterisk mark
assets/tool-icons.svg             SVG sprite for Photoshop, Illustrator, InDesign, Figma, Webflow and Canva
assets/fonts/Flicko-Regular.woff  display face
assets/fonts/Flicko-Italic.woff   display italic, used for accent words
assets/img/portrait-hero.webp     background-free hero portrait
assets/img/portrait-1.jpg         portrait, royal blue suit (source)
assets/img/portrait-2.jpg         second portrait
assets/img/work-*.jpg             optimised project images
```

Images are pre-resized and compressed. Keep new work around 1400 to 1600px on the long edge.

## Interactions

- Intro preloader with a percentage counter (skipped within a session).
- Word-by-word text reveals on display headings, with a blur / lift stagger.
- Ambient radial glow on the feature bands, a slow drifting light on the statement, CTA and page heroes, a pointer-follow spotlight in the home hero and soft hover glows on cards and buttons.
- Flicko italic accents inside the display H1s (preloaders, home name, projects, about, contact, statement, CTA and footer).
- Clip-path media reveals on cards, the projects feature image and the about portrait.
- Page-to-page curtain transition plus a soft page entrance after load.
- Scroll progress line, animated section rules, image parallax and counter animations.
- Flicko header with a sliding highlight that follows hover, rolling nav labels, a pulsing "Let's chat" button with a shine sweep, a live scroll progress line and a permanently sticky bar.
- Light / dark toggle in the header with a radial wipe transition, saved in `localStorage` and applied before first paint.
- Footer with sitemap, contact and social columns above a full-width `KING DAVID.` baseline wordmark, a single bottom meta row, and a `KING / DAVID.` stack on phones.
- Mouse drift on the intro hero portrait and ghost name, drift on the rotating hero words, cursor-following card image drift and magnetic links.
- Every page's main headings lean toward the pointer, with a faint counter-drift on outlined and italic words. Off on touch and reduced-motion.
- Client testimonial cards on Home with a subtle hover lift; hidden until real quotes arrive (remove `hidden` on `section.testimonials`).
- Cursor that grows into a labelled bubble ("View", "Email", "Call") over key targets.
- Rotating home hero words with generated ghost tracks and hover dimming of siblings.
- Infinite client marquee in Flicko with an edge fade, hover pause and drag-to-scrub with spring back, including Lovely Love Treats.
- Skills accordion on About: Flicko titles, one open at a time, short explanations and `aria-expanded` state.
- About reel that autoplays muted when it enters view, pauses when it leaves, and shows overlaid pause and sound controls with a live state line.
- Tool logo banner on About: 36 icon tiles in a seamless marquee with an edge fade, hover pause, hover lift and reduced-motion fallback.
- Floating Photoshop, Illustrator, InDesign, Figma, Webflow and Canva discs around the About portrait.
- Sticky project filters with URL sync (`?filter=web3`), animated active underline and an empty state.
- See More paging on Projects, 6 cards per click, with a live remaining count.
- Project lightbox with keyboard navigation, Esc, focus return and body scroll lock.
- Fullscreen mobile menu with scroll lock and underline hover treatments.
- Contact form that composes a `mailto:` message in the visitor's email client.
- `prefers-reduced-motion` support, a skip link and visible focus styles.

## Files

```
index.html      home structure and copy
projects.html   hero, filters, 21 project cards, See More and lightbox
about.html      hero, bio, skills accordion, experience and tool marquee
contact.html    contact details and form
styles.css      design system, monochrome tokens, layouts, motion and responsive rules
script.js       preloader, menu, split text, reveals, parallax, cursor, lightbox, filters,
                See More, accordion, counters, rotator, page transitions and mailto form
assets/         favicon, tool icon sprite, fonts and optimised images
```

## Notes

- Pages work without JavaScript: the preloader and reveals are hidden by `<noscript>` rules,
  and all content remains in the HTML.
- No external JavaScript dependencies; Google Fonts is the only third-party request.
- The form does not send anything to a server. It opens the visitor's email app.
