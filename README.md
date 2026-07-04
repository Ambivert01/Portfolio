# Portfolio — full build (100% sections implemented)

Next.js 14 App Router + TypeScript + Tailwind. Content-driven — edit /content/*.ts only.

## Pages
/ /work /work/[slug] /about /experience /research /writing /achievements /stack /resume /contact /changelog /legal/privacy /legal/license

## Global
Cmd+K palette · "?" keyboard shortcuts panel · dark/light toggle · accessibility menu (font scale, reduce motion) · signal indicators · journey timeline.

## Content files (34 files — every [bracket] is a placeholder to fill)
site-config, projects (6, incl. heroImage+gallery fields), experience, education, research,
achievements, certifications, speaking, testimonials, codingProfiles, faq, about, writing,
openSource, life, vision, press, changelog, leadership, languages, funfacts, courses, media, consuming

## Images
No real image assets included. ImagePlaceholder component (components/ui/ImagePlaceholder.tsx)
marks every photo/gallery/screenshot slot — replace with next/image + real files when ready.

## Honest-by-design (no fake backend)
- Newsletter/Feedback: mailto-based, clearly labeled "no backend yet" — sends to your email, not stored.
- GitHub/LeetCode/etc stats: static text fields — wire to live APIs later if wanted.

## Intentionally excluded
Visitor counter, visitor map, guestbook, public analytics, language switcher — privacy/spam/maintenance cost, no upside. Documented in design doc.

## Add project #7 / any list item
Add one object to the relevant content/*.ts array — component renders it automatically.

## Before deploy
Fill every [bracket]. Add public/resume.pdf, favicon.ico, OG image, real photos. Update siteConfig.url.

## Motion system (added)
- Hero: animated mesh-gradient bg, word-by-word stagger reveal, parallax photo (mouse-tracked), magnetic CTAs
- ProjectCard: 3D tilt on hover (TiltCard) + scroll reveal
- Global: scroll progress bar, cursor spotlight (desktop), page-transition fade on route change
- Stack/Testimonials: glass cards + staggered scroll reveal
- All motion respects `prefers-reduced-motion` and the in-app reduce-motion toggle
- Primitives: components/ui/{RevealOnScroll,StaggerReveal,Magnetic,TiltCard,CursorSpotlight,ScrollProgress,PageTransition,Skeleton}.tsx — reuse anywhere
