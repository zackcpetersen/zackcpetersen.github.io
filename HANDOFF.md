# Handoff: zackcpetersen.com

Written 2026-09-07 after the cutover. Read this first in a new session, then `design/voice.md` before touching copy.

## Where things stand

- The new site is live at https://www.zackcpetersen.com. `main` is the source; every push to `main` builds, tests, and deploys through `.github/workflows/deploy.yml`. Pull requests build and test only.
- Pages source is GitHub Actions. Custom domain `www.zackcpetersen.com`, HTTPS enforced. Do not clear and re-enter the domain in Settings > Pages; that re-provisions the certificate.
- The old Create React App site is still available as the `gh-pages` branch and the `pre-rebuild` tag. Rollback: Settings > Pages, Source back to "Deploy from a branch", branch `gh-pages`, folder `/`. Delete both after about 2026-09-14 if nothing has gone wrong.
- The design record is `design/README.md`. The mockup that picked the direction is `design/mockups/directions.html`. The plan that built it is at `~/.claude/plans/this-is-my-personal-snazzy-bentley.md`.

## Working on the copy

Everything the site says lives in one file: `src/data/site.ts`. Edit it, run `npm run dev`, look at http://localhost:4321, push to `main`.

Rules are in `design/voice.md`, including the revision from the evening of 2026-09-07: Zack rejected the casual register and asked for professional, easy-to-read copy with industry terms only where they apply. The copy was rewritten to that direction the same day, with the Reserv work summary folded in.

Before pushing, scan the file for: `—`, honestly, genuinely, try, hope, maybe, might, helped, worked on, passionate, driven, cutting-edge, innovative, thrive, excited, seamless, robust, scalable, `!`, emoji, and the uncontracted forms "I am", "do not", "cannot", "it is" (contract them). The Playwright suite fails on emoji and em-dashes in rendered text; it does not check the other words.

## Outstanding items

1. **Photo captions: done 2026-09-07.** Zack confirmed the locations: the Firehole River in Yellowstone, a trail above Jackson Hole, and a cutthroat from the Bob Marshall Wilderness in Montana. The hero alt text still says "on the Bonneville Salt Flats", a read of the background he has not contradicted.
2. **Some tool icons under each job are still inferred.** Terraform and Datadog under Reserv are resume-backed as of 2026-09-07. Zack chose to keep LangChain under Reserv and Google Cloud, Kubernetes, and Kafka under Merit. The AI tooling row (Claude Code, LangChain, Cursor) comes from the resume's tools list.
3. **Elevation readout: keep or drop.** The number in the header climbs from 4,226 ft to 11,253 ft with scroll. It is `aria-hidden`, has a `title` and a footer legend. To remove it: delete the `.elev` span in `src/components/Header.astro`, the readout lines in `src/scripts/rail.ts` (search `readout`), and the legend in `src/layouts/Base.astro` and `site.ts`.
4. **Deprecation warning: done 2026-09-07.** `actions/checkout`, `actions/setup-node`, and `actions/upload-artifact` are on `@v7`; the run was green with no annotations.
5. **Delete the rollback refs after a week.** `git push origin --delete gh-pages` and `git push origin --delete pre-rebuild`, then remove the rollback sentence from `CLAUDE.md` and this file.
6. **The 2020 token in git history is dead.** Commit `3dcc665` added a `.env` with a GitHub token; it returns 401 as of 2026-09-07. Nothing to do. History was kept on purpose.
7. **No analytics.** The old Universal Analytics property was dead and was not replaced. If wanted, Plausible or GA4 is a script tag in `src/layouts/Base.astro`; note the site currently makes zero third-party requests, which is worth keeping.
8. **Search.** Nothing was submitted anywhere. `https://www.zackcpetersen.com/sitemap-index.xml` exists; Search Console can have it whenever.
9. **Resume link** points at the S3 PDF (`site.resume`). The S3 file is byte-identical to `~/Desktop/Zachary Petersen, Backend Engineer.pdf` (September 2025) as of 2026-09-07. Update the PDF in S3 when the resume changes; the link stays the same.
10. **Kiyote's committed dev environment file: closed.** Zack confirmed on 2026-09-07 that the values are unused dev-only settings. The site does not link to that repo.
11. **timecard's end date is not in the code.** The card now says it "ran from May 2021 into 2024". Evidence: the last commits (2024-02-06) resized ECS and upgraded Postgres, which only happens on a running service; the Wayback Machine's last capture is 2023-12-26; the domain is still registered but has no DNS (checked 2026-09-07). If Zack knows the real end date, change that one sentence in `projects[timecard].text`.
12. **ai-code-reviewer was dropped from the site** on 2026-09-07 (Zack: obsolete). Its README still says GPT-4 while the code uses `gpt-4o-mini`; nothing on the site depends on it now.
13. **The copy proposal** (`design/copy-proposal.md`) was deleted after its casual register was rejected; nothing depends on it.
14. **claude-setup is public** as of 2026-09-07 and linked from `/work/` and `/ai/`. Two leftovers: the personal Notion voice-page URL is still in that repo's history (commit `504b060`; an identifier that needs auth, not a secret; removing it means a history rewrite and force push), and `claude-md/MANIFESTO.md` plus three command files contain em-dashes that contradict the repo's own `CLAUDE.md`.
15. **Kiyote's one-line description under Neutron** ("the platform the work above went into") is an inference from the old site and the resume's "SaaS platform" wording. Zack should confirm or reword it in `work[Neutron].project.text`.

## Facts that must not drift

- Career starts May 2020 at Neutron Interactive, so "six years" through 2026.
- Copilot: "doubled claims accuracy", "40+ hours a month" (the resume also says "up to 10 hours weekly" and "over 40 hours weekly" in different places; the site uses the monthly figure on purpose), "28%" faster dbt runs, Docker images "up to 76%" smaller.
- Merit: "more than 250,000 users", "60%" more integration test coverage, "more than 3 million records a day", notifications "can send millions of messages a day" (a capacity claim, keep the "can").
- Neutron: "75%" shorter release cycles, "over 10 features", matching algorithm behind "over 80% of company revenue", "over 80% code coverage", "two junior engineers".
- timecard: "over 30,000 entries", "from May 2021 into 2024" (see item 11).
- AI page: method only, by Zack's instruction. It names no employer, product, or business, and carries no metrics.
- Reserv, from the Reserv work summary (Notion, "Reserv work summary - til sept 2026", pasted 2026-09-07), kept generic by Zack's instruction on 2026-09-07: accomplishments only, no vendor names or pricing, no architecture, framework, or protocol names, no internal tool details, nothing that could be considered Reserv IP. On the site: "primary engineer behind Adjuster Copilot"; "four codebases"; "about 20 agent tools"; "raised retrieval accuracy by 64.3 percentage points on de-identified production fixtures"; "four-repository protocol migration"; "about 20 insurance carriers"; "built most of the team's Datadog alerting" (Datadog is on the resume). The product is called "Adjuster Copilot" on the site by Zack's instruction; the summary calls it Copilot.
- Education: University of Utah, Bachelor of Science in Business, 2017.

## Working with this repo from Claude Code

- Pushing over SSH only works with the Bash sandbox disabled; inside the sandbox the SSH agent is unreachable. The `gh` token lacks the `workflow` scope, so an HTTPS push that touches `.github/workflows/` is rejected. Either push with the sandbox off or run `gh auth refresh -h github.com -s workflow` once.
- Zack's Chrome runs a dark-mode extension (the recolored values match Dark Reader). It repaints the site and hides the indigo rail. Disable it for localhost and the live domain when reviewing, or check with Playwright screenshots (`npm test` saves them as attachments on the desktop project).
- `npm run build` runs `astro check` first; a type error in `tests/` fails the build too.
- `npm run brand` regenerates favicons and `og.png` from `src/brand/mark.svg`; commit the outputs.
