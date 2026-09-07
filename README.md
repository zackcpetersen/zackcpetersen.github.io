# zackcpetersen.com

Zack Petersen's site. Static, built with Astro, served from GitHub Pages at https://www.zackcpetersen.com.

The design is recorded in `design/README.md`; the writing rules in `design/voice.md`. All copy lives in `src/data/site.ts`.

## Run it

```
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check, then build to dist/
npm run preview    # serve dist/
npm test           # Playwright smoke tests against the preview server
npm run brand      # regenerate favicons and og.png from src/brand/mark.svg
```

Pushes to `main` deploy through GitHub Actions.

The code is MIT licensed. The writing and the photo are not: all rights reserved.
