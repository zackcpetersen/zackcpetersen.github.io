# Handoff: zackcpetersen.com

Written 2026-09-07 after the cutover. Read this first in a new session, then `design/voice.md` before touching copy.

## Where things stand

- The new site is live at https://www.zackcpetersen.com. `main` is the source; every push to `main` builds, tests, and deploys through `.github/workflows/deploy.yml`. Pull requests build and test only.
- Pages source is GitHub Actions. Custom domain `www.zackcpetersen.com`, HTTPS enforced. Do not clear and re-enter the domain in Settings > Pages; that re-provisions the certificate.
- The old Create React App site is still available as the `gh-pages` branch and the `pre-rebuild` tag. Rollback: Settings > Pages, Source back to "Deploy from a branch", branch `gh-pages`, folder `/`. Delete both after about 2026-09-14 if nothing has gone wrong.
- The design record is `design/README.md`. The mockup that picked the direction is `design/mockups/directions.html`. The plan that built it is at `~/.claude/plans/this-is-my-personal-snazzy-bentley.md`.

## Working on the copy

Everything the site says lives in one file: `src/data/site.ts`. Edit it, run `npm run dev`, look at http://localhost:4321, push to `main`.

Rules are in `design/voice.md`. The short version: full sentences, first person, outcome then the reason, spell out abbreviations on first use per page, every number keeps its resume qualifier ("up to 76%"). Never em-dashes, hedges, hype, or slogan fragments. The copy that shipped was drafted from the Medium articles and the soul page, then judged and linted, but Zack has not edited it yet. Places most likely to need his hand:

1. `hero.headline` and `hero.subhead` on the home page.
2. The three `work[].paragraph` entries on `/work/`. Neutron is the longest.
3. `about.paragraphs`, especially the first one about how he works.
4. `sayHi.heading` ("Tell me what you are building.").

Before pushing, scan the file for: `—`, honestly, genuinely, try, hope, maybe, might, helped, worked on, passionate, driven, cutting-edge, innovative, thrive, excited, seamless, robust, scalable, `!`, emoji. The Playwright suite fails on emoji and em-dashes in rendered text; it does not check the other words.

## Outstanding items

1. **Photo captions are placeholders.** `about.captions` in `site.ts`: "On a trail above a river.", "Up high, hood on.", "A trout, briefly." Only Zack knows where these were taken. The hero alt text says "on the Bonneville Salt Flats", which is a guess from the background.
2. **Tool icons under each job were inferred, not taken from the resume.** Check `work[].tools` in `site.ts`. The weakest guesses: Google Cloud, Kubernetes, Kafka, and Datadog under Merit; LangChain under Reserv; Postgres under Neutron. The four stack rows on the home page came from the old site's skill list and are fine.
3. **Elevation readout: keep or drop.** The number in the header climbs from 4,226 ft to 11,253 ft with scroll. It is `aria-hidden`, has a `title` and a footer legend. To remove it: delete the `.elev` span in `src/components/Header.astro`, the readout lines in `src/scripts/rail.ts` (search `readout`), and the legend in `src/layouts/Base.astro` and `site.ts`.
4. **Deprecation warning in the workflow.** Every run logs: "Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/upload-artifact@v4". Fix in `.github/workflows/deploy.yml`: bump `actions/upload-artifact@v4` to `@v7` (latest is v7.0.1). While there, `actions/checkout@v5` and `actions/setup-node@v5` can go to `@v7` (both v7.0.x); `withastro/action@v6` and `actions/deploy-pages@v5` are current. Push, confirm the run is green and the annotation is gone.
5. **Delete the rollback refs after a week.** `git push origin --delete gh-pages` and `git push origin --delete pre-rebuild`, then remove the rollback sentence from `CLAUDE.md` and this file.
6. **The 2020 token in git history is dead.** Commit `3dcc665` added a `.env` with a GitHub token; it returns 401 as of 2026-09-07. Nothing to do. History was kept on purpose.
7. **No analytics.** The old Universal Analytics property was dead and was not replaced. If wanted, Plausible or GA4 is a script tag in `src/layouts/Base.astro`; note the site currently makes zero third-party requests, which is worth keeping.
8. **Search.** Nothing was submitted anywhere. `https://www.zackcpetersen.com/sitemap-index.xml` exists; Search Console can have it whenever.
9. **Resume link** points at the S3 PDF from September 2025 (`site.resume`). Update the PDF in S3 when the resume changes; the link stays the same.

## Facts that must not drift

- Career starts May 2020 at Neutron Interactive, so "six years" through 2026.
- Adjuster Copilot: "doubled claims accuracy", "40+ hours a month" (the resume also says "up to 10 hours weekly" and "over 40 hours weekly" in different places; the site uses the monthly figure on purpose), "28%" faster dbt runs, Docker images "up to 76%" smaller.
- Merit: "more than 250,000 users", "60%" more integration test coverage, "more than 3 million records a day", notifications "can send millions of messages a day" (a capacity claim, keep the "can").
- Neutron: "75%" shorter release cycles, "over 10 features", matching algorithm behind "over 80% of company revenue", "over 80% code coverage", "two junior engineers".
- timecard: "over 30,000 entries since May 2021".
- Education: University of Utah, Bachelor of Science in Business, 2017.

## Working with this repo from Claude Code

- Pushing over SSH only works with the Bash sandbox disabled; inside the sandbox the SSH agent is unreachable. The `gh` token lacks the `workflow` scope, so an HTTPS push that touches `.github/workflows/` is rejected. Either push with the sandbox off or run `gh auth refresh -h github.com -s workflow` once.
- Zack's Chrome runs a dark-mode extension (the recolored values match Dark Reader). It repaints the site and hides the indigo rail. Disable it for localhost and the live domain when reviewing, or check with Playwright screenshots (`npm test` saves them as attachments on the desktop project).
- `npm run build` runs `astro check` first; a type error in `tests/` fails the build too.
- `npm run brand` regenerates favicons and `og.png` from `src/brand/mark.svg`; commit the outputs.
