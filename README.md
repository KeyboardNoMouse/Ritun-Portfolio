# samurai-portfolio

A katana/sakura-themed portfolio site. React + Vite + Tailwind CSS, animated with
GSAP (ScrollTrigger) and Framer Motion, smooth-scrolled with Lenis.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

Deploys as a static site anywhere (Vercel, Netlify, GitHub Pages, etc.) —
just point the host at `npm run build` with `dist/` as the output directory.

## Before you launch — things left as placeholders

- **`src/data/projects.js`** — NVMe-Health-Core, Sky, and Ritun OS v3.0 all
  have placeholder descriptions and `github` links pointing at
  `github.com/keyboardnomouse/<guessed-repo-name>`. Swap in the real
  one-liners, tech tags, and links (add a `live` URL too if any of them have
  a deployed demo — the card will show a "Live" link automatically once
  `live` is non-null).
- **`src/components/Contact.jsx`** — the `EMAIL` constant is a placeholder
  (`your.email@example.com`).
- **`src/data/experience.js`** — only your NIE entry is in there. Add more
  objects to the array (internships, hackathons, roles) in the same shape.
- **`src/components/About.jsx`** — the second paragraph is a stand-in; worth
  replacing with something in your own voice.
- **`index.html`** — page `<title>` and meta description are generic; update
  once you know the final domain/branding.

## What's built where

```
src/
  components/
    Hero.jsx           the katana-slash intro (GSAP timeline) + sakura canvas
    SakuraCanvas.jsx    hand-rolled canvas petal field, repelled by the cursor
    CustomCursor.jsx    pink dot -> sakura flower / shuriken on hover targets
    ProjectCard.jsx     "unsheathe" hover: border sweep + synthesised sound
    SectionHeading.jsx  reusable eyebrow + mask-reveal title (scroll-triggered)
    Reveal.jsx          reusable scroll-triggered fade/stagger wrapper
    Navbar.jsx, Footer.jsx, About.jsx, Skills.jsx, Projects.jsx,
    Experience.jsx, Contact.jsx
  data/
    projects.js, skills.js, experience.js   — edit content here, not in JSX
  lib/
    LenisProvider.jsx   Lenis <-> GSAP ScrollTrigger wiring + scrollTo context
    sound.js            Web Audio synthesised "blade shing" (no audio file)
```

## Notes on a few implementation choices

- **Sakura petals are a hand-rolled canvas system**, not a `tsparticles`
  preset — better performance and it doesn't have the generic
  "particle library" look. It's contained to the hero section only; other
  sections stay calm so the effect reads as a moment, not wallpaper.
- **The hover "metal" sound is synthesised** via the Web Audio API
  (`src/lib/sound.js`) rather than a shipped audio file — no licensing
  question, no asset to load, and it's a one-line volume tweak if you want
  it louder/softer/off.
- **Reduced motion is respected** throughout — the slash intro, petal field,
  and scroll reveals all check `prefers-reduced-motion` and fall back to a
  simple fade.
- **The custom cursor only replaces the native one on fine-pointer devices**
  (`pointer: fine`), so touch/mobile gets the normal cursor behavior instead
  of a hidden one.
