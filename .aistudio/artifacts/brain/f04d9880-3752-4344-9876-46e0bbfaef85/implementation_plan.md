# AIR NEETwork — Theme & Landing Page Visual Exploration

A purely static, front-end landing page to evaluate and preview the visual themes for **AIR NEETwork**, directly incorporating the uploaded copyrighted brand logos across **Dark Mode** and **Electric Blue** colorways.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> As instructed, this revision focuses **strictly on the themes and visual aesthetics** for the landing page with **zero backend**. Everything is client-side and static so you can evaluate the exact look, feel, typography, and contrast of both themes before adding further features.

- **Strict Focus**: Visual themes & static landing page design exploration only.
- **No Backend**: 100% static React frontend, no server routes, no external database or auth.
- **Theme Switcher**: An interactive preview toggle allowing you to switch between:
  1. **Electric Blue Theme** (`#0066FF` vibrant background matching your second logo).
  2. **Dark / Noir Theme** (`#0A0D14` obsidian black background matching your first logo).
- **Logo Integration**: Accurate SVG vector rendering matching the exact geometry of the AIR NEETwork logo (mortarboard cap, stylized italic "AIR", and geometric "NEETWORK" lettering) in crisp high-contrast white.

---

## 1. Overview & Core Concept

- **What It Does**: Renders a clean, aesthetic preview of the AIR NEETwork landing page to evaluate typography, color balance, logo fidelity, and section composition.
- **Primary Goal**: Allow you to test and validate whether the visual theme, contrast, and layout align with your vision for the brand.

---

## 2. Visual Identity & Theme Preview

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Logo] AIR NEETwork                               [ Theme: Electric Blue | Dark ] │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   Cracking NEET Is Not Just About Hard Work.                           │
│   It Is About The Right AIR Strategy.                                  │
│                                                                        │
│   Personalized 1-on-1 mentoring by top All India Rankers from AIIMS & │
│   premier medical colleges.                                            │
│                                                                        │
│   [Book Free Strategy Session]   [View AIR Mentors]                    │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  AIR NEETwork Metrics Strip (Tabular Numbers & Proof)                  │
├────────────────────────────────────────────────────────────────────────┤
│  Core Methodology Cards (Clean editorial styling & whitespace)        │
├────────────────────────────────────────────────────────────────────────┤
│  Sample AIR Mentor Profile Card                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Theme 1: Electric Blue (Vibrant & Energetic)
- **Canvas**: Pure electric cobalt blue (`#0066FF`), directly sampled from your uploaded light Canva logo.
- **Foreground**: Pure white (`#FFFFFF`) typography and white SVG logo lockup.
- **Surface Accents**: Soft translucent white borders (`rgba(255, 255, 255, 0.15)`) and glass-subtle card surfaces.
- **Buttons**: Crisp white button with electric blue text for primary CTA, transparent bordered button for secondary.

### Theme 2: Obsidian Dark (High-Contrast & Serious)
- **Canvas**: Deep dark obsidian (`#0A0D14`), matching your uploaded dark Canva logo.
- **Foreground**: High-contrast white (`#FFFFFF`) and muted slate (`#94A3B8`).
- **Accent**: Electric cobalt blue (`#0066FF`) highlights and borders.
- **Cards**: Subtle dark charcoal surfaces (`#121620`) with hairline borders (`#1E293B`).

### Typography & Polish
- Display: `Plus Jakarta Sans` with tight tracking for bold presence.
- Body: `DM Sans` for clean, natural readability.
- Zero-Pill discipline: Unboxed metadata using typographic dot separators (`·`).

---

## 3. Scope & Boundaries

- **In Scope**:
  - Interactive theme switcher pinned in the navbar to test both themes live.
  - Header with exact AIR NEETwork logo lockup.
  - Hero section showcasing headline, subcopy, and primary CTA.
  - Value strip with sample quantitative metrics (AIR ranks, mock score uplift).
  - 3-card methodology layout showcasing the mentorship model.
  - 1-card mentor sample showcasing profile layout.
- **Out of Scope (Explicitly Deferred)**:
  - No backend, no API endpoints, no database.
  - No complex multi-step forms or third-party integrations until you approve the theme.

---

## 4. Technical Structure (Static Client-Side)

```
┌──────────────────────────────────────────────┐
│                  App.tsx                     │
│  State: activeTheme ('electric-blue' | 'dark')│
├──────────────────────────────────────────────┤
│  ├── Navbar (Logo + Theme Switcher)          │
│  ├── Hero (Headline + CTA buttons)           │
│  ├── TrustStrip (Clean metrics)              │
│  ├── MethodologySection (3 pillars)          │
│  ├── MentorSpotlight (1-on-1 card preview)   │
│  └── Footer (Quiet brand copyright)          │
└──────────────────────────────────────────────┘
```
