# Design record: Waypoint

Decided 2026-09-06. This is the design zackcpetersen.com is built to. If the site and this file disagree, `src/styles/tokens.css` and the components win for values; this file wins for intent.

## The idea

One indigo line runs down the left gutter of every page. It draws as far as you have scrolled plus about 40% of the viewport, and everything it reaches flips from hollow to filled: job markers, tool icons, section labels. A small mono readout in the header climbs from 4,226 ft (Salt Lake City) to 11,253 ft (Lone Peak) as you read. Nothing on the page moves unless you scroll.

Why this one: the motion carries information (where you are, what you have read) instead of decorating. That is the difference between "alive" and "cheesy". The hiking motif is Zack's without any mountain art. It behaves the same on a phone, where most first visits from LinkedIn land.

Mockup: `mockups/directions.html`. Open it in a browser, pick the "1 Waypoint" tab, scroll. The other two tabs are the directions that lost (see the end of this file).

## Who it is for

Hiring managers and recruiters first, engineers who want to see how he works second. Lead with what he does, how senior he is, and what shipped, with numbers he would defend in an interview. Personality is balanced: professional spine, real voice, Salt Lake City and the Wasatch as the personal motifs, the trail photo as the only image.

## Pages

Headings are plain and the same everywhere: **Work**, **What I use**, **Writing**, **About**, **Say hi**.

Every page has: a sticky translucent header (origin dot and wordmark, links Work / AI / Writing / About / Say hi, the elevation readout with a `title` explaining the two numbers, the theme toggle), the rail, a Say hi block the line ends in (email as the large link, then GitHub, LinkedIn, Medium, Resume in mono), and a one-line mono footer (year, Salt Lake City, source link, the readout legend).

- `/` hero (mono eyebrow, headline, subhead with what he is doing right now, "See the work" button, Resume / GitHub / LinkedIn text links, trail photo at 4:5 on the right; single column on mobile with a 96px round photo above the eyebrow), What I use (five labeled rows of tool beads, one node each), Work (three company blocks, one or two sentences each, one node each, link to `/work/`), Working with AI (eyebrow, heading, one paragraph on the Claude Code harness, one node, link to `/ai/`), Say hi.
- `/work/` one block per company, newest first: company and dates on one line, role in mono, a first-person paragraph with the outcome and the reason, two or three metric chips, a bead row. Adjuster Copilot lives inside Reserv, Merit Notifications inside Merit. Then Kiyote, ai-code-reviewer, timecard as side blocks off the rail. Say hi.
- `/ai/` the Claude Code page: eyebrow, h1, two intro paragraphs, then the loop from ticket to production as seven numbered steps, each on its own small node with a mono number in the gutter of the content column, then the rules the machine enforces, each on its own small node, then a paragraph on agents monitoring production, a paragraph on what is still done by hand, and a portable-parts block with one link to the public setup repo. Say hi.
- `/writing/` one intro sentence, the Medium posts as a plain list (title, mono date), "More on Medium".
- `/about/` the photo full column with a mono caption, a few paragraphs (how he works, Salt Lake City, education in one line, how to reach him). Say hi.
- `/404` one line and a link home, rail fully drawn.

URLs end in a slash (`trailingSlash: 'always'`); links are written that way so nothing redirects.

## The system

### Rail and nodes

Two-column grid on every page: gutter (48px desktop, 24px mobile) and content. The line is an absolutely positioned full-height div in the gutter, scaled on Y with `transform: scaleY(var(--reach))`, origin top, so it never triggers layout. Every node is a grid child in the gutter column, so the line cannot drift off a node. A node flips hollow to filled in 120ms when the line head passes it and never unfills. Beads under a row or a job fill when their node fills.

### Motion budget

Position-driven, never time-driven. What moves: line length (1:1 with scroll, no easing), node fill (120ms linear), the readout (400ms, tabular-nums), hover color (150ms). On load: text readable at 0ms, origin dot at 150ms, line draws to 40vh over 450ms, then stops. Nothing idles: no loops, no parallax, no fade-in-on-scroll, no typewriter, no counters, no Lottie, no canvas.

Implementation notes: node offsets are measured once on load, on debounced resize, and after `document.fonts.ready`; the scroll handler reads `scrollY` and cached offsets and writes `--reach` inside `requestAnimationFrame`. Viewport height comes from `window.visualViewport.height` so the iOS URL bar does not snap the line. If the page is not taller than the viewport, the line renders full and every node fills on load. The loop pauses on `document.hidden`.

### No JavaScript, reduced motion

The default state is filled. The hollow state and the zero-length line exist only under `html.js`, and the `js` class is added by the same inline head script that sets the theme, before first paint. With JavaScript off the page is complete and filled. With `prefers-reduced-motion`, the script exits early: every node filled, line full, readout static, hover transitions 0ms, identical layout.

### Color

Custom properties on `:root`, switched by `data-theme`, `prefers-color-scheme` as the default. Snapshot on 2026-09-06; `src/styles/tokens.css` is the source of truth.

| Role | Light | Dark |
|---|---|---|
| background | #FAFAFA | #0B0B12 |
| surface | #FFFFFF | #14141F |
| text | #18181B | #ECECF1 |
| muted | #5B5B6B | #9C9CB0 |
| primary (line, fills, links) | #4F46E5 | #818CF8 |
| accent (readout number and the `now` marker only) | #B45309 | #FBBF24 |
| hairline | #E4E4EA | #26263A |

Indigo is the only saturated color at rest. Accent lives on exactly two selectors. No gradients, no glows, no colored shadows. Theme swap transitions color for 200ms and retriggers nothing. `theme-color` is set per theme.

### Type

Two families, self-hosted latin subsets as variable woff2: Inter (headings at 600 with letter-spacing -0.03em and line-height 1.05; body at 400 and 500, line-height 1.55, max measure 62ch) and JetBrains Mono (400 and 500 for labels, dates, chips, the readout, bead names). Ladder: h1 `clamp(2.5rem, 5.5vw, 4.25rem)`, h2 2rem, h3 1.25rem, lead 1.125rem, body 1rem (1.0625rem above 1024px), label 0.8125rem. Headings left-aligned, sentence case, never centered, never all caps. Mono eyebrow labels may be uppercase with letter-spacing. Tabular numerals on any column of numbers.

### Tech icons

Simple Icons SVGs committed to `src/icons/`, inlined at build, `fill: currentColor`. Brand hexes live next to the tool names in `src/data/site.ts`. A bead is a 44px circle: 1.5px hairline ring, 20px glyph in muted. Reached: ring and glyph indigo. Hover or focus: 8% indigo fill and the glyph takes its brand hex, 150ms, no movement. Mono name under every bead on mobile, on hover on desktop, `aria-label` always. The same bead at 32px with no name sits under each job and project. No proficiency bars, no percentages: where a tool appears under which job is the proficiency signal.

### Rules that hold everywhere

- No emojis anywhere. Icons are real brand marks.
- Hover changes color only. No translate, no scale, no shadow growth. Anything hover-only has a visible equivalent on touch.
- Mobile first: 360px is designed and checked before desktop. Nav is visible text links on mobile, no hamburger. Tap targets 44px.
- Photos are real and un-ornamented: one in the hero, a few on About, fixed dimensions, no rings or badges, no illustrations.
- Every in-page anchor has `scroll-margin-top` equal to the header height plus 16px.
- Copy follows `voice.md`.

### Brand mark

One source SVG at `src/brand/mark.svg`: a filled indigo circle (the reached node) on the theme background. `scripts/brand.mjs` generates `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`, and `og.png` (1200x630) from it. Run it by hand when the mark or palette changes and commit the outputs. The old favicon set was the template author's and is gone.

## What was rejected and why

Seven concepts went through three judges (a design critic, a hiring manager, a frontend engineer). The three survivors are in the mockup.

- **Quiet Shell** (a modern CLI on warm paper, `$ zack --help` as the hero). Cheapest to build. Lost because "engineer made a terminal site" is a recognized genre and it reads cold to non-engineer readers.
- **Broadsheet** (magazine opening spread, giant serif sentence, rules that draw themselves). The most designed and the quietest. Lost because editorial serif portfolios are close to a designer house style and it was the least alive of the three. Its copy register was the closest to Zack's voice and that carried into `voice.md`.
- **Living pipeline diagram**: a measured SVG path through every node drifts off them on font swap, resize, and the iOS URL bar. Waypoint keeps the reveal idea and drops the measured path.
- **Topographic contour hero**: a 2026 cliche that needs a week of visual tuning a backend engineer does not want. Waypoint keeps the elevation readout and drops the map.
- **Depth and light** (glass, glow, tilt): reads as a crypto landing page.
- **Illustrated companion** (a hiker mascot): mascot risk. Its icon treatment (monochrome at rest, one brand color at a time on hover) survived.
- **Kinetic minimalism**: its "reach" reveal (content never hidden, things flip hollow to filled when a scroll-linked head passes them) is the core of Waypoint.

## What was deleted from the old site

Lottie illustrations (five looping files, 484 KB), the cursive signature wordmark, proficiency bars, card grids with hover lifts, fade-in-on-scroll on every section, the splash screen, the scroll-to-top button, emoji bullets, the GitHub API fetch and token, the Medium RSS fetch, the template author's achievements, talks, podcast, and favicon set, and the phone number (it was never rendered).
