# 🖥️ Ritun Jain — Personal Portfolio

> **PASSPORT** — A terminal-inspired personal portfolio built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, just clean code and a lot of attention to detail.

🔗 **Live Site:** [ritun.space](https://ritun.space)

---

## ✨ Features

- **Boot sequence** — click-to-boot loading screen with a animated progress log before the main UI appears
- **Ambient canvas** — floating particle system rendered on a background canvas
- **Custom cursor** — dot + ring cursor that reacts to hoverable elements
- **CRT scanline overlay** — subtle retro aesthetic effect
- **Keyboard navigation** — press `1`–`5` to jump between sections instantly
- **Lightbox gallery** — per-project screenshot galleries with a fullscreen lightbox viewer
- **Archive section** — tabbed panel with separate Certifications and Achievements sub-sections
- **Scroll reveal** — cards animate in as they enter the viewport
- **Typewriter effect** — name types out on load
- **Copy email** — one-click clipboard copy on the Network page
- **Back to top** — appears on scroll, smooth-scrolls to top
- **Mobile responsive** — hamburger nav, stacked layouts, touch-friendly

---

## 🗂️ Structure

```
.
├── index.html          # Main HTML — all sections, nav, boot screen
├── styles.css          # All styles — variables, layout, components, animations
├── script.js           # All logic — data, rendering, interactions
├── pfp.jpg             # Profile photo
└── images/
    ├── bytecoders/     # Karnataka Biosecurity Network screenshots
    ├── architecture1.png
    ├── architecture2.png
    ├── screenshot1.png
    ├── screenshot2.png
    ├── image1.png – image4.png
    └── ...
```

---

## 🧭 Sections

| # | Tab | Description |
|---|-----|-------------|
| 01 | **Identity** | About, skill cards, tech stack, education |
| 02 | **Projects** | Build log with screenshot galleries |
| 03 | **Archive** | Certifications + Achievements (tabbed) |
| 04 | **Experience** | Roles and extracurriculars |
| 05 | **Network** | Social links and contact |

---

## 🛠️ How to Run Locally

No build step required. Just open `index.html` in a browser:

```bash
git clone https://github.com/KeyboardNoMouse/Ritun-Portfolio.git
cd Ritun-Portfolio
open index.html   # macOS
# or just drag index.html into your browser
```

For local development with live reload, a simple server works great:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## 📦 Deploying

### GitHub Pages
1. Push to a repo named `<yourusername>.github.io` — it auto-deploys to the root.
2. Or go to **Settings → Pages → Source → Deploy from branch → `main` / `root`**.

### Custom Domain
The `CNAME` file in the repo root handles the custom domain mapping. Update it with your own domain if needed.

---

## 🎨 Customization

All content lives in the top of `script.js` — no digging through HTML needed:

```js
const PROJECTS = [ ... ];      // Add/edit projects
const EXPERIENCES = [ ... ];   // Add/edit experience
const CERTS = [ ... ];         // Add/edit certifications
const ACHIEVEMENTS = [ ... ];  // Add/edit achievements
const BOOT_LOG = [ ... ];      // Customize boot messages
```

Colors and fonts are CSS variables at the top of `styles.css`:

```css
:root {
  --accent: #38bdf8;
  --font-mono: 'Space Mono', monospace;
  --font-sans: 'Syne', sans-serif;
  ...
}
```
*Built with zero frameworks and too much caffeine.*
