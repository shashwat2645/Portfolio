# Shashwat — Personal Portfolio

Personal portfolio website for Shashwat, a final-year B.Tech CSE (AI & ML) student at PSIT Kanpur targeting **Backend Developer** roles.

**Live site:** https://shashwat.dev/ *(update this once deployed)*

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **Vite** | Build tool & dev server |
| **React 18** | UI framework |
| **Tailwind CSS v3** | Class-based styling + dark mode |
| **lucide-react** | Icon library |
| **Netlify** | Hosting + Forms |

Fonts loaded from Google Fonts: **Playfair Display** (hero/band), **Space Grotesk** (headings), **Inter** (body), **JetBrains Mono** (eyebrows/badges).

---

## Local Development

### Prerequisites

- Node.js ≥ 18 (v20+ recommended)
- npm ≥ 9

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/shashwat2645/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server (hot reload)
npm run dev
```

The site will be available at **http://localhost:5173**.

### Build for Production

```bash
npm run build
```

The output goes into the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

---

## Netlify Deployment

### First Deploy (via Netlify UI)

1. Push the repository to GitHub (or GitLab / Bitbucket).
2. Log in to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Select your repository.
4. Netlify auto-detects settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

### Enable Netlify Forms

After the first successful deploy:
1. In the Netlify dashboard, go to **Site configuration → Forms**.
2. The `contact` form will appear automatically — Netlify detects it from the hidden HTML `<form>` in `index.html` at build time.
3. To receive email notifications: **Forms → contact → Form notifications → Add email notification** → enter your email.

> [!NOTE]
> The contact form uses `fetch POST` to `"/"` with the `application/x-www-form-urlencoded` content type. This works seamlessly on Netlify's CDN without any server-side code.

### Updating the Site

```bash
git add .
git commit -m "update: ..."
git push
```

Netlify auto-deploys on every push to the connected branch.

---

## Customising Content

**All text content** lives in one file: [`src/data/content.js`](src/data/content.js).

Components only *render* from this file — never hard-code text in components.

### Theme

Dark/light tokens are CSS variables defined at the top of [`src/index.css`](src/index.css). Both themes are there: `:root` (light) and `.dark` (dark). The toggle saves the preference to `localStorage` and a no-flash script in `index.html` applies it before first paint.

---

## Photo & Resume Assets

| Asset | Location | Notes |
|---|---|---|
| Profile photo | `public/images/profile.webp` | Transparent-bg cutout, head + shoulders, ~1200px tall, < 300 KB |
| Resume PDF | `public/resume.pdf` | Linked from navbar and hero |

If `profile.webp` is missing, the hero renders a neutral silhouette placeholder automatically.

---

## Remaining TODOs in `src/data/content.js`

The following fields need to be filled in before the portfolio is complete:

| Field | Location in content.js | Action needed |
|---|---|---|
| **Surname** | `personal.surname` | Add surname, or leave blank if not wanted |
| **Class XII year** | `education.items[1].period` | Add year of passing |
| **Class X year** | `education.items[2].period` | Add year of passing |
| **Decentralized AI Marketplace** GitHub URL | `projects.items[0].githubUrl` | Add when repo is public |
| **Decentralized AI Marketplace** demo URL | `projects.items[0].demoUrl` | Add when hosted |
| **Decentralized AI Marketplace** tech tags | `projects.items[0].tags` | Verify correct stack |
| **LexFile** GitHub URL | `projects.items[1].githubUrl` | Add when ready |
| **LexFile** demo URL | `projects.items[1].demoUrl` | Add when hosted |
| **LexFile** tech tags | `projects.items[1].tags` | Verify correct stack |
| **WorkSync** GitHub URL | `projects.items[2].githubUrl` | Add when initiated |
| **WorkSync** tech tags | `projects.items[2].tags` | Verify correct stack |
| **Oracle Agentic AI** credential verify URL | `certifications.items[0].verifyUrl` | Add verification link |
| **Wipro TalentNext** credential verify URL | `certifications.items[1].verifyUrl` | Add verification link |
| **AWS Academy Generative AI** credential verify URL | `certifications.items[2].verifyUrl` | Add verification link |
| **Oracle AI Foundations** credential verify URL | `certifications.items[3].verifyUrl` | Add verification link |
| **Newgen** placement role | `achievements.placementsGroup.items[0].rolePlaceholder` | Add role title |
| **Newgen** placement year | `achievements.placementsGroup.items[0].yearPlaceholder` | Add year |
| **LTM** placement role | `achievements.placementsGroup.items[1].rolePlaceholder` | Add role title |
| **LTM** placement year | `achievements.placementsGroup.items[1].yearPlaceholder` | Add year |
| **OG / canonical URL** | `index.html` meta tags | Update `og:url` and `canonical` to actual deployed domain |

---

## Adjusting Hero Outline Letters

The hero name has three layers: solid letters behind the photo, the photo, and outline letters on top.

The `heroOutlineLetters` array in `content.js` controls which letter **indexes** (zero-based, `S=0 H=1 A=2 S=3 H=4 W=5 A=6 T=7`) render as outlines over the face:

```js
heroOutlineLetters: [3, 4] // "S" and "H" at positions 3 and 4
```

After uploading your photo, adjust these indexes until the outline letters align naturally with where your head sits.

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # S-monogram SVG favicon
│   ├── resume.pdf           # Linked resume
│   └── images/
│       └── profile.webp     # Hero photo (transparent background)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navbar + mobile drawer + theme toggle
│   │   ├── Hero.jsx         # Full-bleed hero + 3-layer name + statement band
│   │   ├── About.jsx        # Two-column about + fact cards
│   │   ├── Skills.jsx       # 6-card skill grid (no bars/ratings)
│   │   ├── Projects.jsx     # Featured card + LexFile + WorkSync
│   │   ├── Education.jsx    # Vertical timeline with rail + dots
│   │   ├── Certifications.jsx # 2×2 cert cards with verify links
│   │   ├── Achievements.jsx # Placements + Hackathons groups
│   │   ├── Contact.jsx      # Link rows + Netlify form
│   │   ├── ClosingCard.jsx  # Glass CTA card with glow + grid
│   │   ├── Footer.jsx       # Slim footer + floating back-to-top
│   │   ├── SectionWrapper.jsx # Scroll-reveal wrapper
│   │   └── SectionHeader.jsx  # Eyebrow + gradient heading
│   ├── data/
│   │   └── content.js       # ← ALL text content lives here
│   ├── hooks/
│   │   └── useScrollReveal.js # IntersectionObserver reveal hook
│   ├── App.jsx              # Root component — section order
│   ├── main.jsx             # React entry point
│   └── index.css            # Design tokens, global styles, animations
├── index.html               # Entry HTML, OG tags, no-flash script, Netlify form
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml             # Build: npm run build, Publish: dist
└── .gitignore
```

---

*Built with Vite + React + Tailwind CSS. Deployed on Netlify.*
