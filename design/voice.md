# Voice guide for zackcpetersen.com

Source: Zack's Notion "soul" page (fetched 2026-09-06) and his feedback on the first copy draft, which "sounds like it was written with AI". The reference for how he actually writes is his Medium articles. Read them before drafting anything.

## Do

- Full sentences, first person, talking to one reader. Say what you built, what it did, and why it worked. "because" is welcome.
- Opinionated with reasoning. Commit to a position and say why.
- Warm and collaborative. "we" when it was a team, "I" when it was you.
- Concrete. Every claim ships with a number or an example. Every number appears in the resume with its qualifier intact: "up to 76%", not "76%". Where the resume contradicts itself, use the conservative figure: 40+ hours a month, not a week.
- Spell out abbreviations on first use per page, then abbreviate: "artificial intelligence (AI)", "Infrastructure as Code (IaC)", "continuous integration and delivery (CI/CD)". Product names stand alone: dbt, AWS, Postgres, GitHub.
- Plain headings: Work, What I use, Writing, About, Say hi.
- Momentum. Short kickers are fine when they are how he writes ("Let's get going."), not when they are slogans.
- Enthusiasm is earned encouragement and pace, never superlatives or exclamation marks.

## Never

- Em-dashes. Use "-" or a comma.
- "honestly", "genuinely".
- Hedges: "try", "hope", "maybe", "might", "helped", "worked on".
- Hype: "passionate", "driven", "cutting-edge", "innovative", "thrive", "excited", "seamless", "robust", "scalable" (say what scaled to what instead).
- Vague quantifiers: "a pile of", "tons of", "countless".
- Bare acronyms, filler, jargon where plain English works, emojis.
- Metaphor vocabulary in headings or nav: no "summit", "trailhead", "stage", "now".
- The AI tics from the first draft: aphorism headlines ("Systems that hold up under load."), three-beat fragments ("Six years, three teams, one pattern."), X. Y. Z. slogan rhythm, clever kickers as section titles, "not X, but Y", "the kind of", noun-stack taglines.

## Self-check before any copy ships

Scan for: `—`, `–`, honestly, genuinely, try, hope, maybe, might, helped, worked on, passionate, driven, cutting-edge, innovative, thrive, excited, seamless, robust, scalable, `!`, emoji, "not X but Y", "the kind of", and any number without a source bullet. Fix every hit. The lead sentence must carry the point.

## Frozen example of the target register

Not live copy. Live copy lives only in `src/data/site.ts`. This is here so future drafts have a fixed reference point.

> I build the backend and data systems a product runs on. Senior backend engineer in Salt Lake City, six years in Python, Go, and Postgres, most of it on AWS. Right now I am building artificial intelligence (AI) claims tooling at Reserv.

> I own the data side of Adjuster Copilot, the AI tool that reads a claim file so the adjuster does not have to. We doubled claims accuracy and gave adjusters back 40+ hours a month, mostly by getting clean rows in front of the model: an AWS Textract pipeline into the warehouse, then dbt models on top. Along the way I cut dbt runtimes by 28% and shrank our Docker images by up to 76%, which also removed the vulnerabilities that shipped inside them.

## Revision, 2026-09-07 (evening)

Zack reviewed the "professional but casual" rewrite and rejected the register: "keep it professional and easy to read and understand. use buzzwords where appropriate, but only if they actually apply." The rules above still hold (full sentences, first person, concrete numbers with qualifiers, no em-dashes, no hedges, no hype, spell out abbreviations on first use per page). These replace the earlier casual additions:

- Professional and plain. No jokes, asides, kickers, or rhetorical questions. No "Let's", no "In my opinion", no deadpan lines.
- Contractions sparingly. "I am" and "it is" are fine; do not force either way.
- Results over activity. Lead with the outcome, then the method. Raw activity counts do not go on the site.
- Industry terms are welcome when they are accurate: production, observability, CI/CD, infrastructure as code, event-driven, idempotent, human-in-the-loop, SaaS, LLM. Never as decoration.
- Headings are plain nouns or plain statements: "Background", "Get in touch.", "What the machine enforces".
- The AI page describes method only. It names no employer, product, or business, and carries no metrics.
- The work page calls the personal repositories "public code".
- Every claim about Reserv traces to the resume or to the Reserv work summary (September 2026), recorded in `HANDOFF.md`.
- Reserv copy stays generic: accomplishments only, no vendor names or pricing, no architecture, framework, or protocol names, no internal tool details, nothing that could be considered Reserv IP. The product is "Adjuster Copilot".
