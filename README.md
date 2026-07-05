# Portfolio

Personal portfolio — Next.js 15 · TypeScript · Tailwind CSS · Framer Motion.  
Live: **[portfolio-six-ashy-71.vercel.app](https://portfolio-six-ashy-71.vercel.app)**

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion v11 |
| Icons | Lucide React |
| Validation | Zod |
| Deploy | Vercel |

---

## Project Structure

```
portfolio/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home (/)
│   ├── about/                  # /about
│   ├── achievements/           # /achievements
│   ├── changelog/              # /changelog
│   ├── contact/                # /contact
│   ├── experience/             # /experience
│   ├── legal/license/          # /legal/license
│   ├── legal/privacy/          # /legal/privacy
│   ├── research/               # /research
│   ├── resume/                 # /resume
│   ├── stack/                  # /stack
│   ├── work/                   # /work
│   ├── work/[slug]/            # /work/:slug (case studies)
│   └── writing/                # /writing
├── components/
│   ├── layout/
│   │   ├── Nav.tsx             # Sticky navbar, mobile menu, Cmd+K trigger
│   │   └── Footer.tsx          # Sitemap links, social links, track-rule divider
│   ├── sections/               # One component per content section (29 total)
│   └── ui/                     # Reusable primitives (18 total)
├── content/                    # All site data — edit only these files
├── styles/
│   └── globals.css             # CSS variables, theme tokens, animations
├── lib/
│   └── cn.ts                   # clsx + tailwind-merge utility
└── public/
    ├── Profile.png             # Hero profile photo
    └── resume.pdf              # Downloadable resume (add before deploy)
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, Featured Work, Stack, Testimonials, Journey Timeline, Contact CTA |
| `/work` | All projects grid |
| `/work/[slug]` | Case study — problem, architecture, metrics, stack, gallery |
| `/about` | Bio, education, languages, fun facts, life, vision |
| `/experience` | Work timeline, certifications, leadership, courses |
| `/research` | Research papers and publications |
| `/writing` | Blog posts and articles |
| `/achievements` | Awards, recognitions, speaking, press, open source |
| `/stack` | Tech stack grouped by category |
| `/resume` | Resume viewer + download |
| `/contact` | Contact form (mailto), FAQ, coding profiles, feedback |
| `/changelog` | Site update history |
| `/legal/privacy` | Privacy policy |
| `/legal/license` | License |

---

## Content Files

All content lives in `/content/*.ts`. Edit these — components render automatically.

| File | What it controls |
|---|---|
| `site-config.ts` | Name, role, tagline, email, social links, resume URL |
| `projects.ts` | Projects (name, slug, stack, metrics, links, gallery) |
| `experience.ts` | Work history timeline |
| `education.ts` | Degrees and institutions |
| `skills.ts` | Tech stack grouped by category |
| `achievements.ts` | Awards and recognitions |
| `certifications.ts` | Certs with credential URLs |
| `research.ts` | Papers and publications |
| `writing.ts` | Blog posts / articles |
| `speaking.ts` | Talks and conferences |
| `testimonials.ts` | Quotes with name, title, initials |
| `codingProfiles.ts` | LeetCode, Codeforces, etc. stats |
| `openSource.ts` | OSS contributions |
| `press.ts` | Press mentions |
| `leadership.ts` | Leadership roles |
| `languages.ts` | Spoken languages |
| `courses.ts` | Courses and certifications |
| `media.ts` | Podcast / video appearances |
| `consuming.ts` | Books, podcasts, tools you follow |
| `life.ts` | Personal interests / hobbies |
| `vision.ts` | Long-term goals |
| `funfacts.ts` | Fun facts |
| `faq.ts` | Frequently asked questions |
| `about.ts` | Extended bio |
| `changelog.ts` | Site changelog entries |

---

## UI Components

### Primitives (`components/ui/`)

| Component | Description |
|---|---|
| `Button` | `primary` (gradient), `secondary`, `ghost` variants |
| `Card` | Glass morphism card with accent hover glow |
| `Badge` | `neutral`, `active`, `amber` tones |
| `StatBlock` | Metric display — label + value |
| `SignalIndicator` | Blinking dot — amber/green/red status |
| `ThemeToggle` | Dark/light toggle |
| `AccessibilityMenu` | Font scale + reduce motion controls |
| `CommandPalette` | Cmd+K search palette |
| `KeyboardShortcuts` | `?` keyboard shortcuts panel |
| `ImagePlaceholder` | Slot for real images — replace with next/image |
| `Skeleton` | Loading skeleton |

### Motion Primitives (`components/ui/`)

| Component | Description |
|---|---|
| `RevealOnScroll` | Fade+slide in on scroll |
| `StaggerReveal` | Staggered children reveal |
| `TiltCard` | 3D tilt on hover |
| `Magnetic` | Magnetic pull on hover |
| `CursorSpotlight` | Accent glow follows cursor (desktop) |
| `ScrollProgress` | Gradient progress bar at top |
| `PageTransition` | Fade on route change |

---

## Color System

Two themes — toggled via `.light` class on `<html>`.

### Dark (default)
| Token | Value | Usage |
|---|---|---|
| `--accent` | `hsl(262 90% 66%)` | Electric violet — buttons, links, focus rings |
| `--accent2` | `hsl(188 90% 52%)` | Cyan — gradient pair with accent |
| `--bg` | Deep space navy | Page background |
| `--bg-elevated` | Slightly lighter | Cards, nav |
| `--bg-inset` | Slightly darker | Inputs, inset areas |

### Light
| Token | Value | Usage |
|---|---|---|
| `--accent` | `hsl(248 80% 58%)` | Rich indigo |
| `--accent2` | `hsl(174 72% 40%)` | Teal |
| `--bg` | Warm slate `94%` | Page background |
| `--bg-elevated` | Near white `98%` | Cards float above bg |
| `--bg-inset` | Slightly darker `88%` | Inputs |

Signal dots (amber/green/red) are semantic — not replaced by accent.

---

## Motion System

All motion respects `prefers-reduced-motion` and the in-app reduce-motion toggle.

- **Hero** — animated mesh-gradient bg (violet+cyan blobs), word-by-word stagger reveal, parallax photo (mouse-tracked), magnetic CTAs
- **ProjectCard** — 3D tilt on hover + scroll reveal
- **Global** — scroll progress bar (gradient), cursor spotlight, page-transition fade
- **Stack / Testimonials** — glass cards + staggered scroll reveal

---

## Getting Started

```bash
# install
npm install

# dev server
npm run dev

# production build
npm run build
```

---

## Before Deploy Checklist

- [ ] Fill all `[bracket]` placeholders in `content/site-config.ts`
- [ ] Fill all content files in `content/`
- [ ] Add `public/resume.pdf`
- [ ] Add real profile photo at `public/Profile.png`
- [ ] Add `favicon.ico` to `public/`
- [ ] Add OG image to `public/`
- [ ] Update `siteConfig.url` to your live domain

---

## Deploy (Vercel)

Deployed on Vercel — zero config needed for Next.js.

```bash
# push to main → auto deploys
git push origin main
```

Or manually via Vercel dashboard → **Deployments** → **Redeploy**.

---

## Adding Content

**New project** — add one object to `content/projects.ts`:
```ts
{
  slug: "my-project",
  name: "My Project",
  oneLiner: "One line description",
  status: "active",
  stack: ["Next.js", "TypeScript"],
  metrics: [{ label: "Users", value: "10k+" }],
  links: [{ label: "Live", href: "https://..." }],
  problem: "...",
}
```

Same pattern for any other content array — component renders it automatically.

---

## Intentionally Excluded

- Visitor counter / map — privacy + spam risk
- Guestbook — maintenance overhead
- Public analytics — privacy
- Language switcher — no multi-language content
- Real newsletter backend — mailto-based, labeled clearly

---

## License

MIT
