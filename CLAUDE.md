# CLAUDE.md

Guidance for Claude Code when working in this repository. `HANDOFF.md` lists the outstanding work and the facts that must not drift; read it at the start of a session.

## What this is

Zack Petersen's personal site, https://www.zackcpetersen.com. A static Astro site with no client framework, served from GitHub Pages through GitHub Actions. Rebuilt from scratch in September 2026; the design direction is "Waypoint" and is recorded in `design/README.md`. The writing rules are in `design/voice.md`. Read both before changing anything visible.

## Commands

- `npm run dev` starts the dev server at http://localhost:4321.
- `npm run build` runs `astro check` (type-check) then `astro build` into `dist/`.
- `npm run preview` serves `dist/`.
- `npm test` runs the Playwright smoke suite against the preview server (build first).
- `npm run brand` regenerates favicons, `site.webmanifest`, and `og.png` from `src/brand/mark.svg`. Commit the outputs.

## Where things live

- `src/data/site.ts` is the only place copy lives. Every number in it traces to a resume bullet with its qualifier intact ("up to 76%"). Edit copy here, nowhere else.
- `src/styles/tokens.css` holds every color, type size, spacing, and motion duration. `src/styles/global.css` has the base styles, the rail, and the beads.
- `src/layouts/Base.astro` is the one layout: head, theme script, header, rail, Say hi block, footer.
- `src/components/` are small and single-purpose: `RailRow` (one grid row with a node), `Bead`/`Beads` (tech icons), `Icon` (inlines an SVG from `src/icons/`), `Job`, `Project`, `Header`, `ThemeToggle`, `SayHi`.
- `src/pages/ai.astro` is the Claude Code page at `/ai/`: the loop, the rules the machine enforces, agents on call, what is still done by hand, and the public setup repo. It describes method only and names no employer, product, or metrics; `design/voice.md` has the rule.
- `src/scripts/rail.ts` is the only behavior on the site: the reach line, node fill, and the elevation readout.
- `src/icons/*.svg` are Simple Icons files. Brand hexes sit next to the tool names in `site.ts`.
- `public/` is served as-is: `CNAME`, fonts, generated brand assets, `robots.txt`.
- `tests/smoke.spec.ts` is the Playwright suite. It asserts behavior (links, theme, rail, reduced motion, no-JS, no emoji), never screenshots.

## Rules that are not negotiable

- No emojis anywhere. No em-dashes in copy. No proficiency bars. No Lottie, no canvas, no animation library.
- Motion is position-driven. The line moves with scroll, nodes fill once, hover changes color only. Nothing loops. `prefers-reduced-motion` renders the finished page. With JavaScript off the page renders complete and filled (the hollow state only exists under `html.js`).
- Indigo is the only saturated color at rest. The accent is legal on the readout number and the `now` marker only.
- Light and dark are both real palettes in `tokens.css`, switched by `data-theme` with `prefers-color-scheme` as the default. Never style a color outside the token system.
- Mobile first: check 360px before desktop. Nav stays visible text links, never a hamburger.
- Internal links end in a slash (`/work/`). `trailingSlash` is `always`.
- Copy follows `design/voice.md`: full sentences, first person, outcome and reason, spelled-out abbreviations on first use per page, no hedges, no hype, no slogan fragments.

## Deploy

Pushes to `main` build, test, and deploy through `.github/workflows/deploy.yml` (Pages source: GitHub Actions). Pull requests build and test only. The custom domain is set in Settings > Pages and mirrored in `public/CNAME`; do not clear and re-enter it, that re-provisions the certificate. Rollback: set the Pages source back to the `gh-pages` branch, which is kept for that purpose. The old Create React App site is tagged `pre-rebuild`.
