# 🚀 ALPHINIX WEBSITE — MASTER PLAN

> **Single source of truth.** Ye file Alphinix website ki har decision, har tool, har page, har strategy ko consolidate karti hai. Claude Code aur kisi bhi AI agent ko ye file primary context ke roop me deni hai.

> **Status:** Phase 1 Complete — Planning Locked
> **Next Phase:** Implementation Files (`AI_CONTEXT/`, `DESIGN_SYSTEM.md`, `UI_BRIEF.md`)
> **Last Updated:** April 2026

---

## 📑 TABLE OF CONTENTS

1. [Project DNA](#1-project-dna)
2. [Tech Stack — Locked](#2-tech-stack--locked)
3. [Site Architecture](#3-site-architecture)
4. [Page-by-Page Specification](#4-page-by-page-specification)
5. [URL Structure & Routing](#5-url-structure--routing)
6. [Forms & Lead Pipeline](#6-forms--lead-pipeline)
7. [UI/UX Philosophy](#7-uiux-philosophy)
8. [Design System Foundation](#8-design-system-foundation)
9. [Animation Strategy](#9-animation-strategy)
10. [Content Strategy](#10-content-strategy)
11. [SEO + AEO + GEO Strategy](#11-seo--aeo--geo-strategy)
12. [Performance Targets](#12-performance-targets)
13. [Security Hardening](#13-security-hardening)
14. [Accessibility (WCAG 2.2 AA)](#14-accessibility)
15. [Legal & Compliance (DPDP + IT Act)](#15-legal--compliance)
16. [Analytics & Monitoring](#16-analytics--monitoring)
17. [Deployment & DevOps](#17-deployment--devops)
18. [AI Agent Context Files](#18-ai-agent-context-files)
19. [Folder Structure](#19-folder-structure)
20. [Build Phases & Realistic Timeline](#20-build-phases--realistic-timeline)
21. [Pre-Launch QA Matrix](#21-pre-launch-qa-matrix)
22. [Post-Launch Operations](#22-post-launch-operations)
23. [Risk Register](#23-risk-register)
24. [Open Items / Pending Decisions](#24-open-items)

---

## 1. PROJECT DNA

### 1.1 What Alphinix Is
A Pune-based technology platform serving **5 equally-weighted audience segments**:

| # | Segment | Primary Outcome |
|---|---|---|
| 1 | **Students** (Engg/BCA/MCA/BSc/Diploma) | Industry readiness + placement |
| 2 | **Colleges** (Engg + Polytechnic) | Better placements + accreditation + infra |
| 3 | **Schools (K-12)** | Future-tech literacy (AI/IoT/STEM/ATL) |
| 4 | **Businesses & Startups** | Digital tech solutions |
| 5 | **Hiring Managers** | Skilled candidate supply |

### 1.2 What This Website Is
- **Pure static marketing site** — branding, services, lead capture, SEO
- **NOT a portal** — LMS, ERP, Admin Panel are **separate independent products**
- **Lead-generation engine** that feeds the separate admin panel

### 1.3 Quality Bar
**"Better than Stripe."** This is non-negotiable. Every decision is benchmarked against premium global SaaS sites — not against typical Indian education sites.

### 1.4 Constraints
- Budget: ~₹0 ongoing (existing domain + Zoho mail only)
- Hosting: Hostinger (locked)
- Build Tool: Claude Code
- Maintenance: Must run **1+ year without bugs**, zero ongoing engineering effort
- Team: Solo + AI

---

## 2. TECH STACK — LOCKED

### 2.1 Core Framework Layer
```
Vite 5+              Build tool, dev server (fastest in industry)
React 19             UI framework (best ecosystem, mainstream)
TanStack Router      Type-safe file-based routing with static export
TypeScript (strict)  Type safety, eliminates 90% runtime bugs
pnpm                 Package manager (faster, smaller node_modules)
```

### 2.2 Styling Layer
```
Tailwind CSS v4      Utility-first styling, JIT compiled
clsx + tailwind-merge  Class composition utilities
CSS variables        Theme tokens (colors, spacing, radius)
PostCSS              CSS transforms (auto-prefixer, etc.)
```

### 2.3 UI Component Layer (free + premium-quality)
```
shadcn/ui            Foundation (buttons, dialogs, forms, accordions)
Aceternity UI        Hero animations, spotlight, beams, sparkles
Magic UI             Marquees, animated borders, shimmer buttons
HextaUI              Backup component library
```
> All four are **copy-paste based** (not npm dependencies). We own the code, no version-lock issues, no breaking changes ever.

### 2.4 Animation Layer
```
Motion (ex-Framer)   Primary animation library — declarative, free
GSAP (free core)     Complex timeline animations, scroll-triggered
Lenis                Smooth scroll
Auto-Animate         Automatic layout animations
CSS native           View Transitions API, scroll-driven animations
```

### 2.5 Content Layer
```
MDX                  Markdown + React components (blog, case studies)
Rehype + Remark      MDX plugins (syntax highlight, slugs, TOC)
Shiki                Code block syntax highlighting (free)
```

### 2.6 Forms & Validation
```
React Hook Form      Form state management (uncontrolled, fast)
Zod                  Schema validation (TypeScript-native)
Cloudflare Turnstile Invisible captcha (free, privacy-friendly)
Honeypot fields      Bot trap (no UX cost)
```

### 2.7 Icons & Visual Assets
```
Lucide React         Primary icon set (1000+, beautiful, lightweight)
Phosphor Icons       Backup for variety
Iconify              On-demand icon access (millions)
unDraw               Open-source illustrations (recolorable to brand blue)
Real photography     Pexels/Unsplash + Alphinix's own photos (preferred)
```

### 2.8 Typography
```
Fontshare            Indian foundry, premium feel, free commercial use
  └─ Display: Cabinet Grotesk OR Author OR Switzer
  └─ Body:    Satoshi OR General Sans
Google Fonts         Backup (self-hosted via Fontsource for privacy + speed)
Variable fonts       Single file, multiple weights (smaller payload)
```

### 2.9 Content Management
- **No CMS.** Content lives in repo as MDX/JSON.
- Editing flow: Open repo → edit `.mdx` file → commit → auto-deploy.
- Future: Decap CMS or Sanity if non-dev editing becomes a need.

### 2.10 What We Explicitly REJECTED & Why
| Tool | Why Rejected |
|---|---|
| Next.js | Heavy bundle, slower, overkill for static |
| Astro | Smaller community comfort gap, Less UI library access |
| Gatsby | Declining ecosystem, abandoned-feel |
| WordPress | Bloated, "better than Stripe" UI hard |
| Email transactional services | Site is fully static, no server-side email needed |
| Live chat widgets | Distracting, off-brand for premium feel |
| WhatsApp sticky button | Not on homepage; reserved for contact page only |
| Newsletter platforms | No newsletter feature in v1 |

---

## 3. SITE ARCHITECTURE

### 3.1 Architecture Type
**Static Multi-Page Application (MPA)** with React island components.
- Each page is its own HTML file at build time
- React hydrates only interactive components (forms, menus, animations)
- Default behavior: zero JavaScript needed for content consumption
- Result: instant page loads, perfect SEO, indestructible reliability

### 3.2 The "Hub & Spoke" Service Model

```
                    /services (master hub)
                           │
        ┌────────────┬─────┴─────┬────────────┬──────────────┐
        ▼            ▼           ▼            ▼              ▼
   /students    /colleges    /schools    /businesses     /hiring
   (hub)        (hub)        (hub)       (hub)           (hub)
        │            │           │            │              │
   ┌────┼────┐  ┌────┼────┐ ┌────┼────┐  ┌────┼────┐    ┌────┼────┐
   ▼    ▼    ▼  ▼    ▼    ▼ ▼    ▼    ▼  ▼    ▼    ▼    ▼    ▼    ▼
  [25+ individual sub-service pages — one per offering]
```

**Why hub-spoke:** SEO authority concentrates at hubs, sub-services rank for specific long-tail keywords, internal linking creates topical authority graph.

### 3.3 Site Type Confirmation
- ✅ Static (build-time HTML generation)
- ✅ Multi-page (every page own URL)
- ✅ React-based (interactive islands)
- ✅ No server, no DB, no auth on this site
- ✅ Forms POST to external Google Apps Script
- ✅ Login button → redirects to external LMS/ERP/Admin

---

## 4. PAGE-BY-PAGE SPECIFICATION

### 🏠 4.1 HOME PAGE — *"The Front Door"*

**Brief:** Compact, high-impact, creative. NOT a long scrolling brochure. Goal: position Alphinix uniquely + push visitor to the right segment hub within 30 seconds.

**Length target:** Approx 5-6 punchy sections. Max page weight target: <80KB initial HTML.

**What's IN:**
1. **Hero** — Bold, type-led, creative (NOT centered "big heading + 2 buttons"). Specific creative direction TBD with friend's research.
2. **Audience selector** — 5 cards/blocks for the 5 segments. Visitor self-identifies → routes to relevant hub. *This replaces the generic "What We Do" section.*
3. **Capability strip** — Marquee/horizontal scroll of capabilities with subtle motion (NOT a generic feature grid).
4. **Signature moment** — One unexpected creative section that becomes the page's "memory hook" (specific direction TBD with UI references).
5. **Trust indicators** — Logos of partner colleges/companies (no generic gray strip — treated as design element).
6. **Final CTA band** — Single, clear action. Routes to contact or chosen segment.

**What's OUT (explicit):**
- ❌ No "Who We Are" generic block
- ❌ No "What We Do" feature grid
- ❌ No testimonials on homepage (testimonials live on inner pages where they belong)
- ❌ No newsletter signup
- ❌ No pricing
- ❌ No "trusted by" gray logo strip done lazily
- ❌ No long story scroll
- ❌ No team photos here (they belong on /about)

**Conversion goal:** Visitor lands → understands Alphinix is multi-segment → clicks into their segment hub OR contacts.

---

### 👥 4.2 ABOUT PAGE — `/about`

- Origin story (concise, narrative-driven, not bullet points)
- Mission + philosophy
- **One single team group photo** (as decided)
- Founders block (names + roles + LinkedIn)
- Why Pune / why Alphinix exists
- Office address (exact — trust signal)
- "What we believe" — values section, creatively presented

---

### 🛠️ 4.3 SERVICES HUB — `/services`

- All 5 segments displayed as equal pillars (no education-heavy bias)
- Each pillar links to its segment hub
- Cross-segment overlaps highlighted (e.g., "We train students, then place them with our hiring partners")

---

### 🎓 4.4 STUDENTS HUB — `/students`

Lists all student-facing services, links to sub-service pages:
- `/students/industrial-training`
- `/students/internships`
- `/students/placement-prep`
- `/students/certifications`
- `/students/career-guidance`
- `/students/coding-programs`
- `/students/webinars` (links to main /webinars filtered)
- `/students/skill-development`

Hub page has segment-specific testimonials, success stats, CTA to enquire.

---

### 🏛️ 4.5 COLLEGES HUB — `/colleges`

Sub-services:
- `/colleges/campus-training`
- `/colleges/placement-drives`
- `/colleges/pre-placement-training`
- `/colleges/faculty-development` (FDP)
- `/colleges/naac-nba-support`
- `/colleges/lms-erp-systems`
- `/colleges/ai-iot-cloud-labs`
- `/colleges/curriculum-consulting`

Tone: formal, credibility-focused, decision-makers (HOD/Principal). Heavy use of stats, partner logos, accreditation context.

---

### 🏫 4.6 SCHOOLS HUB — `/schools`

Sub-services:
- `/schools/ai-robotics-education`
- `/schools/iot-lab-setup`
- `/schools/coding-education`
- `/schools/stem-atl-labs`
- `/schools/hardware-kits` (Arduino/Pi/drones)
- `/schools/teacher-training`

Tone: friendly, parent-trust, safety mentions. Mention NEP 2020 alignment + ATL guidelines.

---

### 💼 4.7 BUSINESSES HUB — `/businesses`

Sub-services:
- `/businesses/website-development`
- `/businesses/mobile-app-development`
- `/businesses/ai-solutions`
- `/businesses/automation-systems`
- `/businesses/cloud-infrastructure`
- `/businesses/digital-marketing`
- `/businesses/technology-consulting`

Tone: corporate, ROI-focused, case-study-led. Include tech stacks, methodology, delivery process.

---

### 🤝 4.8 HIRING HUB — `/hiring`

Sub-services:
- `/hiring/permanent-recruitment`
- `/hiring/contract-staffing`
- `/hiring/intern-supply`
- `/hiring/technical-assessments`
- `/hiring/recruitment-outsourcing` (RPO)
- `/hiring/bulk-hiring-drives`

Tone: efficiency-focused, speed signals, process clarity. Big numbers (TAT, hire counts).

---

### 📝 4.9 BLOG — `/blog`

- Day-1 launch (mandatory — SEO momentum)
- 3-5 placeholder articles to begin
- MDX-based, content lives in `/src/content/blog/*.mdx`
- Tags + topic clusters
- Author block on every article
- Reading time, share buttons
- Related articles section
- Newsletter signup: **NO** (per decision)

---

### 💼 4.10 CAREERS — `/careers`

- Alphinix's own hiring page
- Open positions list (driven by simple JSON or MDX)
- Why work at Alphinix (culture, perks)
- Application form → POSTs to Google Apps Script → "Careers" sheet tab
- Resume upload via direct upload to Google Drive (Apps Script handles)

---

### 🎤 4.11 WEBINARS — `/webinars`

- **Future-only dates** (5-6 months ahead and beyond)
- No past webinars listed
- Each upcoming webinar: title, date, presenter, topic, register button
- Registration form → Google Sheets
- Auto-hides past webinars after date passes (build-time check on next build, OR client-side filter)

---

### 📚 4.12 RESOURCES — `/resources`

- Free downloadable lead magnets:
  - Career roadmaps (PDF)
  - Course syllabi
  - College brochures
  - Industry reports
- Email-gated downloads (form submission → email auto-sends link via Apps Script)
- Categorized by segment (student resources, college resources, etc.)

---

### 🎯 4.13 CASE STUDIES — `/case-studies`

- Success stories from each segment
- MDX-based, repeatable template
- Metrics-led ("Placed 200+ students at TCS in 6 months")
- Before/after structure
- Segment filter

---

### 📞 4.14 CONTACT — `/contact`

- Multiple form variants (one base form with segment selector)
- Office address + map embed (Google Maps via lazy iframe)
- Phone numbers (click-to-call on mobile)
- Email addresses
- WhatsApp link (NOT sticky, just on this page)
- Office hours
- LinkedIn / Insta links

---

### 🔐 4.15 LOGIN — Header Dropdown

**Word choice (suggested final):** **"Portal"** ← creative, professional, neutral
*Alternatives if you reject: "My Alphinix" / "Access" / "Hub"*

**Dropdown destinations** (pending your final list):
- 🎓 Student LMS → external URL
- 🏛️ College ERP → external URL
- ⚙️ Admin Panel → external URL
- (Add more if needed)

Dropdown is a styled menu with brief descriptions for each option.

---

### ⚖️ 4.16 LEGAL PAGES (mandatory)

- `/privacy-policy` — DPDP Act 2023 compliant
- `/terms-of-service` — India jurisdiction (Pune courts)
- `/cookie-policy` — what cookies, why, consent
- `/refund-policy` — even if "no refunds applicable" stated
- `/disclaimer` — general
- `/grievance` — Grievance Officer details (DPDP mandatory)

---

### 🛠️ 4.17 UTILITY PAGES

- `/404` — custom, on-brand, helpful
- `/500` — custom error
- `/thank-you` — post form submission
- `/sitemap.xml` — auto-generated
- `/robots.txt` — auto-generated
- `/llms.txt` — for AI crawlers (AEO)
- `/.well-known/security.txt` — vulnerability disclosure
- `/sitemap.html` — human-visible sitemap (footer link)

---

## 5. URL STRUCTURE & ROUTING

### 5.1 Rules
- **Lowercase, hyphenated, no trailing slash** (configure consistently)
- Hierarchical: `/segment/sub-service`
- Stable forever (URLs are forever — design carefully now)
- No URL parameters for content (only for tracking via UTMs)

### 5.2 Redirect Strategy
| Old | New | Status |
|---|---|---|
| `index.html` | `/` | 301 |
| `/services.html` | `/services` | 301 |
| Trailing slash variants | Canonical | 301 |
| `www` | `apex` (or vice versa, pick one) | 301 |
| `http` | `https` | 301 + HSTS |

`_redirects` file or `.htaccess` (Hostinger uses Apache) for redirects.

### 5.3 Canonical Strategy
- Every page has `<link rel="canonical">`
- Self-referencing for unique pages
- Aliases (e.g., tag pages) point to source

---

## 6. FORMS & LEAD PIPELINE

### 6.1 The Mechanism

```
[Custom-designed form on Alphinix site]
        ↓ fetch POST (CORS-enabled)
[Google Apps Script Web App]
        ↓ writes row + sends optional auto-reply
[Google Sheet — "Alphinix Leads" with multiple tabs]
        ↓ later (when admin panel ready)
[Admin Panel imports via Sheets API or CSV polling]
```

### 6.2 Sheet Structure

One Google Sheet, multiple tabs:
- `students_leads`
- `colleges_leads`
- `schools_leads`
- `businesses_leads`
- `hiring_leads`
- `careers_applications`
- `webinar_registrations`
- `resource_downloads`
- `general_contact`

Each tab columns: `timestamp | source_page | utm_source | utm_medium | utm_campaign | name | email | phone | segment | message | metadata_json`

### 6.3 Form Best Practices Implemented
- Honeypot field (hidden, bots fill it, we discard)
- Cloudflare Turnstile (invisible captcha)
- Server-side validation in Apps Script (re-validate Zod schema)
- Client-side validation (UX)
- Rate limiting in Apps Script (one IP, max N requests/hour)
- Inline error messages
- Loading state on submit button
- Success state inline + redirect to `/thank-you`
- Mobile-optimized inputs (correct keyboards: `tel`, `email`)
- Multi-step wizards for long forms (career application)
- CSRF protection via Apps Script token rotation
- Auto-save drafts (long forms, localStorage)

### 6.4 Migration Path to Admin Panel
When admin panel is ready, only one change: form `action` URL changes from Apps Script URL → admin panel webhook URL. Zero refactor on the website side.

---

## 7. UI/UX PHILOSOPHY

> **Note:** Specific layout/reference details will come later from your friend's research. This section locks the **principles**.

### 7.1 The Anti-Generic Manifesto

**We will NOT do:**
- ❌ Centered "Big Heading + Subtext + 2 Buttons" hero
- ❌ Generic 3-column "icon-on-top, title, description" feature grid
- ❌ Gray "Trusted by" logo strip
- ❌ Numbered process with circles (1 → 2 → 3)
- ❌ "Who we are" + "What we do" sections with stock copy
- ❌ Photo + quote testimonial cards
- ❌ Purple-to-blue gradient backgrounds
- ❌ Glassmorphism overuse
- ❌ Storyset illustrations (everyone uses them, instantly recognizable)
- ❌ Generic Lottie animations
- ❌ "Empower your team" type taglines
- ❌ `hover:scale-105 hover:shadow-xl` (the "AI-website" tell)

### 7.2 What We WILL Do

**Layout language:**
- **Editorial / magazine layouts** — asymmetric, type-led, intentional whitespace
- **Bento grids** — varying sizes, content-led
- **Horizontal scroll showcases** for services
- **Sticky scroll storytelling**
- **Marquee bands** between sections (subtle motion, breaks visual monotony)
- **Diagonal cuts / curves** between sections
- **Big numbers as design elements** — typography as art

**Visual language:**
- **Type-led design** (typography itself becomes art — Stripe, Linear, Vercel use this heavily)
- **Real photography** wherever possible (Alphinix's own events, students)
- **Custom illustrations** — unDraw recolored to brand blue + AI-generated where unique
- **Hand-drawn SVG accents** — underlines, arrows, circles
- **Editorial badges/stamps** treated as visual elements
- **Subtle noise texture** for tactile feel (not busy)
- **Mixed grid + flow** (not always grid)

**Color use:**
- Blue (brand) as **anchor**, not flood
- Generous white space (premium signal)
- **One accent color** (warm — coral/orange/yellow) for CTA pop
- Grayscale photography overlay for depth

**Typography hierarchy:**
- Display font for headings (distinctive, memorable)
- Body font for reading (clean, modern)
- Big-bigger-biggest scale (confidence in type)
- Variable font weight transitions on hover

### 7.3 Mobile-First Reality
- Design starts at 375px, expands up
- Touch targets ≥44×44px
- Thumb-zone CTAs
- No hover-dependent interactions
- Tap states explicit
- Performance non-negotiable (Indian mobile = 4G/3G reality)

### 7.4 The "Friend's Research" Hook
Specific layout references, exact section designs, and visual moodboard will be plugged in via a separate `UI_BRIEF.md` once your friend completes research. This master plan stays framework-agnostic on visual specifics.

---

## 8. DESIGN SYSTEM FOUNDATION

> Full design tokens defined in separate `DESIGN_SYSTEM.md` post-research. Below is the skeleton.

### 8.1 Color Tokens (placeholders, refined post-logo SVG)
```
--brand-blue-50  through --brand-blue-950   (10 shades)
--accent-warm-500    (single warm accent for CTAs)
--neutral-0  through --neutral-950          (grayscale)
--success / --warning / --error / --info    (semantic)
```

### 8.2 Spacing Scale
4px base — `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192`

### 8.3 Typography Scale
`12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96, 128` (px equivalents in rem)

### 8.4 Radius Scale
`0, 4, 6, 8, 12, 16, 24, 9999`

### 8.5 Shadow Scale
**Restricted use** — minimal, only for elevation cues. No shadow-on-hover overuse.

### 8.6 Breakpoints
```
sm: 640px   md: 768px   lg: 1024px   xl: 1280px   2xl: 1536px
```

### 8.7 Component Inventory (built once, reused)
- Button (primary, secondary, ghost, link, icon-only)
- Input (text, email, tel, textarea)
- Select / Combobox
- Checkbox / Radio / Switch
- Badge / Tag / Chip
- Card (service, blog, case study, team)
- Accordion / Collapsible
- Tabs
- Dialog / Modal
- Sheet (side panel)
- Toast / Notification
- Tooltip
- Breadcrumb
- Pagination
- Skeleton (loading states)
- Avatar
- Marquee
- Spotlight (Aceternity)
- Animated border (Magic UI)
- Bento grid

---

## 9. ANIMATION STRATEGY

### 9.1 Cliché List (Banned)
- ❌ `hover:scale-105 hover:shadow-xl`
- ❌ Generic "fade up on scroll" everywhere
- ❌ Card lift on hover
- ❌ Lottie generic checkmark / loading
- ❌ Cursor blob effect (overused)

### 9.2 Approved Animation Patterns

**Microinteractions:**
- **Magnetic hover** — elements gently pull toward cursor
- **Underline draw** L→R on link hover (replaces shadow)
- **Color invert** on hover (bg + text swap smoothly)
- **Border-draw** — corners draw out to form full border
- **Letter-by-letter** weight/color shift on hover
- **Number counter** on viewport entry (stats)
- **SVG path draw** — arrows/underlines self-draw on view
- **Icon morph** — Lucide icons swap with smooth transition

**Section-level:**
- **Marquee** — auto-scroll text bands (CSS-only)
- **Sticky scroll** — text scrolls, image transitions through stages
- **Horizontal scroll** — vertical input → horizontal scroll (CSS scroll-snap)
- **Reveal masks** — text reveals through animated mask (not fade)
- **Stagger reveals** — list items appear with offset timing

**Page-level:**
- **View Transitions API** (browser-native, free, app-like feel)
- **Scroll-driven animations** (CSS native, no JS)
- **Subtle parallax** on backgrounds only

### 9.3 Performance Rules
- **Only animate** `transform` + `opacity` (GPU-accelerated, 60fps)
- **Never animate** `width/height/margin/top/left` (jank)
- **Respect `prefers-reduced-motion`** (accessibility mandatory)
- **Performance budget:** all animations 60fps minimum
- **Lazy initialize** GSAP timelines (load on demand)

---

## 10. CONTENT STRATEGY

### 10.1 Voice & Tone
**Voice:** Confident-professional with warm undertone.
**Tense:** Active voice, present tense.
**Pronoun:** "We" (humanizing, not "Alphinix" third-person).
**Audience pronoun:** "You" (direct address).

### 10.2 Per-Segment Tone Variation

| Segment | Tone Keywords | Don't Sound Like |
|---|---|---|
| Students | Energetic, encouraging, real-talk | Patronizing |
| Colleges | Formal, credible, data-driven | Casual |
| Schools | Friendly, parent-trust, safe | Edgy, slangy |
| Businesses | Corporate, ROI-focused, sharp | Fluffy, motivational |
| Hiring | Efficient, numbers-first, fast | Slow, indirect |

### 10.3 The "We Say / We Don't Say" Rules

**We DON'T say:**
- "Empower"
- "Revolutionary"
- "Cutting-edge"
- "Disrupting"
- "Game-changing"
- "Synergy"
- "Holistic"
- "Solution provider"
- "End-to-end" (unless literal)
- "World-class"
- "Best-in-class"

**We DO say:**
- Specific outcomes ("placed at TCS")
- Specific numbers ("500+ students")
- Specific names (real partners)
- Specific timeframes ("in 6 months")
- Direct claims ("we set up your AI lab in 30 days")

### 10.4 Content Templates (Pre-Built)
- Service page template
- Sub-service page template
- Case study template
- Blog post template
- FAQ template
- Hub page template

### 10.5 Word Count Targets
- Homepage: 400–600 words (compact, per your brief)
- Hub pages: 800–1200 words
- Sub-service pages: 1200–2000 words (SEO depth)
- Blog posts: 1500–2500 words
- Case studies: 800–1500 words

### 10.6 AI Content Generation Workflow
1. Use this plan + glossary + voice guide as Claude prompt context
2. Generate per page
3. Manual review for: facts, numbers, claims accuracy
4. **Never publish AI content unverified**

---

## 11. SEO + AEO + GEO STRATEGY

### 11.1 Traditional SEO (On-Page)
- Unique `<title>` per page (50–60 chars)
- Unique `<meta description>` (150–160 chars)
- Single `<h1>` per page
- Logical heading hierarchy (`h1` → `h2` → `h3`)
- Semantic HTML (`<article>`, `<section>`, `<nav>`, `<aside>`)
- Internal linking (hub-spoke topology)
- Image alt text (descriptive, not stuffed)
- Open Graph + Twitter Card meta tags
- Canonical tags
- Schema.org structured data (see 11.4)
- Breadcrumbs (visible + structured data)

### 11.2 Technical SEO
- `sitemap.xml` (auto-generated at build)
- `robots.txt` (allow all, point to sitemap)
- Clean URLs (lowercase, hyphenated)
- Mobile-first responsive
- HTTPS everywhere (HSTS)
- Core Web Vitals targets (see Performance section)
- 301 redirect strategy (no chains)
- No duplicate content
- `hreflang` (only `en` for now, future-ready structure)
- Compression (Brotli + Gzip fallback)

### 11.3 Off-Page SEO (Post-Launch Strategy)
- Google Business Profile (mandatory for Pune local SEO)
- Bing Places
- Justdial, Sulekha, IndiaMART listings
- College directory listings
- Guest posting on edu blogs
- HARO (Help A Reporter Out) for backlinks
- Educational citations
- LinkedIn company page activity

### 11.4 Schema Markup (All Implemented)
- `Organization` (sitewide)
- `LocalBusiness` (with address, hours, geo)
- `WebSite` (with SearchAction)
- `BreadcrumbList` (every page)
- `Service` (each sub-service)
- `Course` (training programs)
- `FAQPage` (FAQ sections)
- `Article` (blog posts)
- `Person` (founders/authors)
- `JobPosting` (careers)
- `Event` (webinars)

### 11.5 AEO — Answer Engine Optimization (NEW, Critical)
For ChatGPT, Perplexity, Gemini, Claude search citations:

- **`/llms.txt`** at root — emerging standard for AI crawlers
- **`/llms-full.txt`** — full content version
- **Q&A format** content blocks (FAQs everywhere)
- **Direct answer paragraphs** — first 50 words answer the question
- **Definition-led writing** (AI engines cite definitions)
- **Citation-worthy structure** — clear claims, sourced statements
- **E-E-A-T signals** — author bios, expertise indicators, trust badges
- **Statistics + data points** (AI loves numbers)
- **Comparison tables** (AI cites these heavily)
- **Year-stamped content** (freshness signals)

### 11.6 GEO — Generative Engine Optimization
- Step-by-step content
- Listicle format (selectively)
- Expert quotes
- Case study format with metrics
- Long-tail conversational queries

### 11.7 Voice Search Optimization
- Conversational keywords ("how do I get placement training in Pune")
- Question-based H2s
- Featured snippet targeting
- Natural language headings

### 11.8 Local SEO (Pune-Critical)
- Google Business Profile (mandatory)
- NAP consistency across all listings
- Pune-specific landing page variants
- Local citations
- Reviews strategy (Google reviews + Justdial)
- "Near me" optimization
- Maharashtra educational directories

### 11.9 SEO Tooling (All Free)
| Tool | Purpose |
|---|---|
| Google Search Console | Indexing, queries, CWV |
| Bing Webmaster Tools | Bing + ChatGPT search use Bing |
| Ahrefs Webmaster Tools | Free for site owners |
| Screaming Frog | 500 URL audit free |
| Sitebulb Lite | Free auditor |
| Google Keyword Planner | Keyword research |
| Google Trends | Topical trends |
| AnswerThePublic | Question research (limited free) |
| PageSpeed Insights | CWV + Lighthouse |
| Rich Results Test | Schema validation |
| Mobile-Friendly Test | Mobile audit |

---

## 12. PERFORMANCE TARGETS

### 12.1 Core Web Vitals
| Metric | Target | Stripe Reference |
|---|---|---|
| LCP (Largest Contentful Paint) | < 1.5s | ~1.2s |
| INP (Interaction to Next Paint) | < 200ms | ~100ms |
| CLS (Cumulative Layout Shift) | < 0.05 | ~0.01 |
| TTFB (Time to First Byte) | < 200ms | ~150ms |
| FCP (First Contentful Paint) | < 1.0s | ~0.8s |
| TBT (Total Blocking Time) | < 150ms | ~80ms |
| Speed Index | < 2.5s | ~2.0s |

### 12.2 Lighthouse Targets
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### 12.3 Optimization Techniques
- Critical CSS inline
- Font subsetting + `font-display: swap` + preload
- Self-hosted fonts (Fontsource)
- Image optimization (AVIF + WebP fallback)
- Lazy loading for below-fold images
- Above-fold images preloaded
- Async/defer on non-critical JS
- Resource hints (`preconnect`, `dns-prefetch`)
- Code splitting per route
- Tree shaking (Vite default)
- Minification (CSS, JS, HTML)
- Brotli compression (Hostinger supports)
- Cache headers (immutable for hashed assets)
- HTTP/2 / HTTP/3 (via Cloudflare in front)
- CDN (Cloudflare free)
- Service Worker (optional, repeat-visit speedup)

### 12.4 Bundle Size Budgets
- Initial HTML: < 30KB
- Initial CSS: < 20KB
- Initial JS (per route): < 50KB
- Total page weight: < 500KB (above-fold)
- Image weight: < 200KB per image (LCP image)

---

## 13. SECURITY HARDENING

### 13.1 HTTP Security Headers (All Implemented)
```
Content-Security-Policy            (strict, nonce-based for inline)
Strict-Transport-Security          max-age=63072000; includeSubDomains; preload
X-Content-Type-Options             nosniff
X-Frame-Options                    DENY
Referrer-Policy                    strict-origin-when-cross-origin
Permissions-Policy                 (disable unused features)
Cross-Origin-Embedder-Policy       require-corp (or unsafe-none if needed)
Cross-Origin-Opener-Policy         same-origin
Cross-Origin-Resource-Policy       same-origin
```

### 13.2 SSL/TLS
- Hostinger SSL (Let's Encrypt)
- Cloudflare in front (additional layer)
- TLS 1.3 only
- HSTS with preload submission
- DNSSEC enabled (Hostinger setting)
- CAA records (only authorized CAs)

### 13.3 Form Security
- Cloudflare Turnstile (invisible captcha)
- Honeypot fields
- Rate limiting in Apps Script
- Server-side Zod re-validation
- Input sanitization
- CSRF token rotation
- Origin verification in Apps Script

### 13.4 Static Site = Inherent Security
- No DB to hack
- No server runtime to exploit
- No user accounts on this site
- No payment processing on this site
- Attack surface: only forms (mitigated above)

### 13.5 Email Security (Zoho — separate but related)
- SPF record
- DKIM record
- DMARC record (start with `p=none`, escalate)
- BIMI (optional, brand visibility in Gmail)

### 13.6 Other
- `security.txt` at `/.well-known/security.txt`
- Subresource Integrity (SRI) on third-party scripts
- No `.env` in repo (`.env.example` only)
- GitHub secret scanning enabled
- Dependabot enabled
- CodeQL enabled (free for public)
- Cookie flags: `Secure`, `HttpOnly`, `SameSite=Lax`
- Bot fight mode (Cloudflare free)
- WAF basics (Cloudflare free)

### 13.7 Post-Launch Security Audits
- [securityheaders.com](https://securityheaders.com) → A+ target
- [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/) → A+ target
- OWASP ZAP scan (free)
- Lighthouse "Best Practices" → 100

---

## 14. ACCESSIBILITY (WCAG 2.2 AA)

### 14.1 Targets
- **WCAG 2.2 Level AA compliance**
- **Lighthouse Accessibility score: 100**
- **Manual testing** with NVDA + VoiceOver

### 14.2 Implementation Checklist
- Semantic HTML (no `<div>` soup)
- Single `<h1>` per page, logical hierarchy
- Alt text on every image (descriptive, not "image of...")
- ARIA labels where semantic fails
- Skip-to-content link
- Focus indicators visible (custom, on-brand)
- Keyboard navigation tested (every interactive element reachable)
- No keyboard traps
- Tab order logical (matches visual order)
- Color contrast 4.5:1 (text), 3:1 (large text + UI)
- Don't rely on color alone (icons + text)
- Form labels associated (`<label for>` or wrap)
- Error messages programmatic (announced by SR)
- Error identification (which field, what's wrong)
- Reduced motion preference respected
- Touch targets ≥ 44×44px
- Resizable text up to 200% without loss
- Language declared (`<html lang="en">`)
- Page titles unique and descriptive

### 14.3 Tools
- axe DevTools (Chrome extension)
- Wave (browser extension)
- Lighthouse audit
- NVDA (free Windows screen reader)
- VoiceOver (Mac/iOS, built-in)
- Keyboard-only testing (unplug mouse)

---

## 15. LEGAL & COMPLIANCE

### 15.1 DPDP Act 2023 (Mandatory for India)
- Privacy Policy with DPDP-required clauses:
  - Categories of personal data collected
  - Purpose of processing
  - Lawful basis (consent / legitimate use)
  - Data Principal rights (access, correct, erase, withdraw consent, grievance)
  - Retention period
  - Cross-border transfer disclosures
  - Children's data handling (especially K-12 segment)
- **Grievance Officer** named with email + address (mandatory)
- **Consent management** — explicit, granular, revocable
- Cookie consent banner (CookieYes free or custom)
- Children's data — parental consent flows for K-12 leads

### 15.2 IT Act 2000 + SPDI Rules
- Reasonable Security Practices (Section 43A)
- SPDI (Sensitive Personal Data) handling protocols
- Privacy policy on website (mandatory)

### 15.3 Required Pages
- Privacy Policy (DPDP-compliant)
- Terms of Service (Pune jurisdiction clause)
- Cookie Policy
- Refund Policy
- Disclaimer
- Acceptable Use Policy
- Anti-Spam Policy
- Grievance Redressal Page

### 15.4 GDPR Awareness
Even though India-focused, EU traffic possible. Privacy Policy includes:
- Right to access
- Right to erasure
- Right to data portability
- Right to object
- Lawful basis statement

### 15.5 Compliance Tooling (Free)
- **CookieYes** (free tier — GDPR + DPDP banner)
- **Termly** (free policy generator — review + customize)
- **iubenda** (free tier — alternative)
- **Custom-written** policies (recommended — generic generators are weak)

### 15.6 Trademark & IP
- Alphinix wordmark — register (separate from website task)
- All site content © Alphinix
- No copyrighted images/illustrations used (verified per asset)
- Attribution where required (e.g., Storyset alternatives)

---

## 16. ANALYTICS & MONITORING

### 16.1 Analytics Stack (All Free)
| Tool | Purpose |
|---|---|
| **Google Analytics 4** | Primary analytics |
| **Google Search Console** | SEO performance |
| **Bing Webmaster Tools** | Bing/ChatGPT search |
| **Microsoft Clarity** | Heatmaps + session recordings (FREE always) |
| **Cloudflare Web Analytics** | Privacy-friendly traffic |
| **PostHog** | Funnels + events (1M events/month free) |
| **Google Tag Manager** | Centralized tag management |

### 16.2 Events Tracked
- Page view (auto)
- Form start (per form)
- Form submit success
- Form submit error
- CTA clicks (named)
- Outbound link clicks (LMS, ERP)
- Scroll depth (25/50/75/100%)
- Resource downloads
- Webinar registrations
- Career applications
- 404 occurrences
- Search queries (if added)

### 16.3 Conversion Tracking
- Each form submission = goal in GA4
- UTM parameters preserved through funnel
- Source/medium/campaign attribution

### 16.4 Uptime Monitoring (Free)
- **UptimeRobot** (50 monitors free, 5-min interval)
- **Better Stack** (10 monitors free)
- Status page: **Instatus** (free tier — public status page = professional touch)

### 16.5 Error Tracking
- **Sentry** (5K errors/month free) — JS errors, performance issues
- Console error monitoring
- Failed form submission tracking

### 16.6 Performance Monitoring
- **Google PageSpeed Insights** (manual)
- **WebPageTest** (manual)
- **Lighthouse CI** (automated in GitHub Actions)
- Web Vitals reporting (sent to GA4)

---

## 17. DEPLOYMENT & DEVOPS

### 17.1 Repository Setup
- **GitHub** (free, private repo)
- Branch strategy:
  - `main` → production (auto-deploy to Hostinger)
  - `develop` → staging (auto-deploy to Cloudflare Pages preview)
  - `feature/*` → feature branches
- Branch protection on `main` (no direct push, PR required)
- PR template + Issue templates

### 17.2 CI/CD via GitHub Actions
**Workflows:**
1. **`pr-checks.yml`** — on PR open/update
   - TypeScript type-check
   - ESLint / Biome lint
   - Prettier format check
   - Unit tests (Vitest)
   - Build check
   - Lighthouse CI (preview URL)
   - Bundle size check (size-limit)
   - Accessibility audit (axe-core)
   - Link checker
2. **`deploy-prod.yml`** — on push to `main`
   - Build
   - Run all checks
   - Deploy via FTP to Hostinger
   - Purge Cloudflare cache
   - Ping uptime monitor (deploy event)
3. **`deploy-staging.yml`** — on push to `develop`
   - Build
   - Deploy to Cloudflare Pages (preview URL)
4. **`scheduled-audit.yml`** — weekly cron
   - Lighthouse audit on production
   - Broken link check
   - Security headers check
   - Report to GitHub Issues if regression

### 17.3 Hostinger Deployment Specifics
- FTP credentials in GitHub Secrets
- Build output: `dist/` folder
- Deploy via `SamKirkland/FTP-Deploy-Action` (popular, free)
- `.htaccess` for redirects, headers, caching
- HTTPS forced via `.htaccess`

### 17.4 Cloudflare in Front of Hostinger (Recommended)
- Free Cloudflare account
- Add domain → change nameservers (or DNS proxy)
- Benefits:
  - Global CDN (200+ edge locations)
  - Free SSL (additional layer)
  - DDoS protection
  - Bot fight mode
  - WAF basics
  - Free analytics
  - Brotli compression
  - HTTP/3 support
  - Page rules for caching

### 17.5 DNS Configuration
- A record: `@` → Hostinger IP
- CNAME: `www` → apex (or vice versa)
- MX records: Zoho mail
- TXT: SPF, DKIM, DMARC
- CAA: Let's Encrypt (or Cloudflare CA)

### 17.6 Backup Strategy
- GitHub repo = code backup (always)
- Hostinger automatic backups (built-in, paid plan)
- Manual snapshots before major releases
- Google Sheets (form data) — Google Takeout monthly

### 17.7 Rollback Strategy
- `git revert` + push to main → auto-redeploy
- Previous build artifacts kept for 7 days
- Emergency: manual FTP upload of last-good build

---

## 18. AI AGENT CONTEXT FILES

> **Critical for your workflow.** Claude Code and other AI agents lose context over long sessions. These files are loaded as context at the start of every session.

### 18.1 Core Files (in `AI_CONTEXT/` folder)

| File | Purpose |
|---|---|
| **`CLAUDE.md`** | Top-level Claude Code rules + project context (Claude Code reads this automatically) |
| **`AGENTS.md`** | Generic agent standard (Cursor, Aider, Devin support this) |
| **`PROJECT_CONTEXT.md`** | Alphinix business context, audience, goals (this file's summary) |
| **`TECH_STACK.md`** | Locked stack with exact versions (no improvisation) |
| **`CONVENTIONS.md`** | Naming, code style, folder structure, commit messages |
| **`CONSTRAINTS.md`** | "NEVER do" list — don't change stack, don't delete files, don't commit secrets, don't bypass tests |
| **`GLOSSARY.md`** | Alphinix terms (FDP, NAAC, NBA, ATL, K-12, RPO, etc.) |
| **`DESIGN_SYSTEM.md`** | Tokens, components, do/don't visual rules |
| **`CONTENT_GUIDE.md`** | Voice, tone, "we say / we don't say" |
| **`PROGRESS.md`** | Living state — what's done, what's pending (AI updates this) |
| **`TASKS.md`** | Current sprint, prioritized |
| **`DECISIONS.md`** | ADRs (Architecture Decision Records) — why we picked what |
| **`PROMPTS.md`** | Reusable AI prompts library (page generation, content, refactor) |

### 18.2 Per-Folder `README.md`
Each major folder gets its own `README.md` explaining purpose, conventions for that folder. Local context = AI doesn't drift.

### 18.3 Per-Component Header Comments
Every component file starts with:
```typescript
/**
 * @component Button
 * @purpose Primary CTA element across site
 * @props variant, size, leadingIcon, trailingIcon, loading
 * @usage <Button variant="primary" size="lg">Get Started</Button>
 * @notes Supports magnetic hover when isMagnetic=true
 */
```

---

## 19. FOLDER STRUCTURE

```
alphinix-web/
├── .github/
│   ├── workflows/              # GitHub Actions
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── AI_CONTEXT/                 # All AI agent context files
│   ├── CLAUDE.md
│   ├── AGENTS.md
│   ├── PROJECT_CONTEXT.md
│   ├── TECH_STACK.md
│   ├── CONVENTIONS.md
│   ├── CONSTRAINTS.md
│   ├── GLOSSARY.md
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT_GUIDE.md
│   ├── PROGRESS.md
│   ├── TASKS.md
│   ├── DECISIONS.md
│   └── PROMPTS.md
├── public/
│   ├── images/
│   ├── illustrations/
│   ├── icons/
│   ├── fonts/
│   ├── robots.txt
│   ├── llms.txt
│   ├── llms-full.txt
│   ├── sitemap.xml             (generated)
│   └── .well-known/
│       └── security.txt
├── src/
│   ├── routes/                 # TanStack Router file-based routes
│   │   ├── __root.tsx
│   │   ├── index.tsx           # Home
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── students/
│   │   │   ├── index.tsx
│   │   │   ├── industrial-training.tsx
│   │   │   └── ... (sub-services)
│   │   ├── colleges/
│   │   ├── schools/
│   │   ├── businesses/
│   │   ├── hiring/
│   │   ├── blog/
│   │   ├── careers.tsx
│   │   ├── webinars.tsx
│   │   ├── resources.tsx
│   │   ├── case-studies/
│   │   ├── contact.tsx
│   │   ├── thank-you.tsx
│   │   ├── privacy-policy.tsx
│   │   ├── terms.tsx
│   │   ├── cookie-policy.tsx
│   │   ├── refund-policy.tsx
│   │   ├── grievance.tsx
│   │   └── 404.tsx
│   ├── components/
│   │   ├── ui/                 # shadcn/ui base
│   │   ├── aceternity/         # Aceternity components
│   │   ├── magic/              # Magic UI components
│   │   ├── sections/           # Page sections (Hero, AudienceSelector, etc.)
│   │   ├── layout/             # Header, Footer, Nav
│   │   ├── forms/              # Form components
│   │   └── animations/         # Custom animation wrappers
│   ├── content/
│   │   ├── blog/               # MDX blog posts
│   │   ├── case-studies/       # MDX case studies
│   │   ├── webinars.json       # Webinar data
│   │   ├── careers.json        # Job openings
│   │   └── resources.json      # Lead magnets
│   ├── data/
│   │   ├── services.ts         # Service catalog
│   │   ├── segments.ts         # 5 segments data
│   │   ├── nav.ts              # Navigation config
│   │   └── seo.ts              # SEO defaults per route
│   ├── hooks/
│   ├── lib/
│   │   ├── utils.ts            # cn(), formatters
│   │   ├── analytics.ts        # GA4, Clarity, PostHog
│   │   ├── forms.ts            # Form submission to Apps Script
│   │   └── seo.ts              # Schema.org generators
│   ├── styles/
│   │   ├── globals.css
│   │   └── tokens.css          # CSS variables
│   └── main.tsx
├── scripts/
│   ├── generate-sitemap.ts
│   ├── generate-llms-txt.ts
│   └── check-links.ts
├── tests/
│   ├── e2e/                    # Playwright (optional)
│   └── unit/                   # Vitest
├── .editorconfig
├── .gitignore
├── .nvmrc
├── .prettierrc / biome.json
├── eslint.config.js
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
├── README.md
├── ARCHITECTURE.md
├── CONTRIBUTING.md
├── DEPLOYMENT.md
├── CHANGELOG.md
└── LICENSE
```

---

## 20. BUILD PHASES & REALISTIC TIMELINE

> **Reality check:** Quality "better than Stripe" can't happen in 1 day. Realistic phased plan below. AI accelerates but doesn't bypass quality.

### Phase 0 — Setup (Day 1)
- Repo init, GitHub setup
- Vite + React + TanStack Router scaffold
- Tailwind + design tokens
- ESLint + Prettier + Husky
- GitHub Actions CI skeleton
- AI_CONTEXT/ files written
- Logo SVG (or PNG fallback) integrated
- Color palette finalized (with logo)
- Typography setup (Fontshare integration)
- Component library scaffolded (shadcn/ui base)

### Phase 1 — Design System (Day 2-3)
- Token system locked
- Core components built (Button, Input, Card, etc.)
- Layout primitives (Container, Grid, Stack)
- Header + Footer (final)
- Navigation system (mega menu for 5 segments)
- Login dropdown ("Portal")
- Cookie consent banner

### Phase 2 — Home + Critical Pages (Day 4-6)
- Home page (with creative direction from your friend's research)
- About page (with team photo)
- Services hub
- Contact page
- 404 page

### Phase 3 — Segment Hubs (Day 7-9)
- 5 segment hub pages (Students, Colleges, Schools, Businesses, Hiring)
- Reusable hub template
- Segment-specific tone in copy

### Phase 4 — Sub-Service Pages (Day 10-14)
- 25+ sub-service pages
- Reusable sub-service template
- SEO-optimized per page

### Phase 5 — Content Pages (Day 15-17)
- Blog system (MDX)
- 3-5 launch blog posts
- Case studies system
- 2-3 case studies
- Resources page (lead magnets)
- Webinars page (future-only)
- Careers page

### Phase 6 — Forms & Integration (Day 18-19)
- Google Apps Script setup
- Google Sheet structure
- Form components
- Submit flow + success states
- Cloudflare Turnstile integration
- Thank-you page

### Phase 7 — SEO + Polish (Day 20-21)
- Schema.org markup all pages
- Sitemap generation
- llms.txt generation
- Meta tags audit
- OG images per page
- Internal linking pass

### Phase 8 — Legal & Compliance (Day 22)
- All legal pages drafted
- DPDP review
- Grievance officer setup
- Cookie policy

### Phase 9 — QA + Performance (Day 23-25)
- Lighthouse audit (95+ all categories)
- Accessibility audit
- Cross-browser testing
- Mobile real-device testing
- Form testing (every variant)
- Link checker
- Security headers
- SSL audit

### Phase 10 — Launch (Day 26)
- DNS final config
- Cloudflare setup
- GSC + Bing submission
- GA4 verification
- Clarity setup
- Launch! 🚀

### Phase 11 — Post-Launch (Day 27+)
- Monitor for 48 hours
- Fix any post-launch issues
- Submit to directories (Justdial, IndiaMART, etc.)
- Set up Google Business Profile
- Announce on social channels

**Realistic total: ~3-4 weeks for full quality.** With AI assistance, this compresses but quality demands review cycles.

---

## 21. PRE-LAUNCH QA MATRIX

### 21.1 Content QA
- [ ] Every page proofread (no typos, grammar issues)
- [ ] Brand voice consistent
- [ ] Phone numbers correct
- [ ] Email addresses correct
- [ ] Office address correct
- [ ] Social links correct
- [ ] Founder names correct
- [ ] No placeholder Lorem ipsum left

### 21.2 Functional QA
- [ ] Every form submits successfully
- [ ] Form validation works (client + server)
- [ ] Honeypot + Turnstile working
- [ ] Email confirmations work (where applicable)
- [ ] Login dropdown links work
- [ ] Footer links all functional
- [ ] Internal navigation correct
- [ ] External links open in new tab where appropriate
- [ ] 404 page works
- [ ] Search (if implemented) works

### 21.3 Visual QA
- [ ] Logo displays correctly all pages
- [ ] Favicon present
- [ ] Apple touch icon present
- [ ] OG image renders (test with [opengraph.xyz](https://www.opengraph.xyz))
- [ ] Twitter card renders
- [ ] All images load
- [ ] No broken images
- [ ] Animations smooth (60fps)
- [ ] Responsive on 320px, 375px, 768px, 1024px, 1440px, 2560px
- [ ] Print stylesheet (optional)

### 21.4 Performance QA
- [ ] Lighthouse Performance ≥ 95
- [ ] LCP < 1.5s on 4G
- [ ] CLS < 0.05
- [ ] INP < 200ms
- [ ] Bundle size within budgets
- [ ] No render-blocking resources
- [ ] Images optimized (AVIF/WebP)

### 21.5 SEO QA
- [ ] Every page unique title + meta description
- [ ] Single H1 per page
- [ ] Schema.org valid (Rich Results Test)
- [ ] sitemap.xml accessible
- [ ] robots.txt correct
- [ ] llms.txt correct
- [ ] Canonical tags correct
- [ ] OG tags on every page
- [ ] No duplicate content
- [ ] Internal links work

### 21.6 Accessibility QA
- [ ] Lighthouse Accessibility = 100
- [ ] Keyboard navigation works
- [ ] Screen reader test (NVDA / VoiceOver)
- [ ] Color contrast 4.5:1 minimum
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] Form labels associated
- [ ] Skip-to-content works

### 21.7 Security QA
- [ ] securityheaders.com → A+
- [ ] ssllabs.com → A+
- [ ] No mixed content warnings
- [ ] No console errors
- [ ] No sensitive data in client bundle
- [ ] Forms protected (Turnstile + honeypot)
- [ ] CSP not blocking legitimate resources

### 21.8 Cross-Browser
- [ ] Chrome (latest)
- [ ] Safari (latest, macOS + iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Samsung Internet (Android)
- [ ] Opera (latest)

### 21.9 Cross-Device (Real Devices)
- [ ] iPhone (latest 2 generations)
- [ ] Android (Samsung, Xiaomi mid-range — Indian market reality)
- [ ] iPad
- [ ] Desktop (1080p, 1440p, 4K)

### 21.10 Legal QA
- [ ] Privacy Policy live
- [ ] Terms live
- [ ] Cookie banner works
- [ ] Cookie preferences savable
- [ ] Grievance Officer info live
- [ ] All legal pages linked from footer

---

## 22. POST-LAUNCH OPERATIONS

### 22.1 Daily (First 2 Weeks)
- Check Sentry for errors
- Check uptime monitor
- Review form submissions in Sheet
- Monitor GA4 traffic anomalies

### 22.2 Weekly
- GSC errors review
- Blog post (1 per week minimum for SEO momentum)
- Social media activity
- Lead funnel review (where are leads coming from)

### 22.3 Monthly
- Lighthouse audit (regression check)
- Dependency updates (Dependabot PRs)
- GA4 deep-dive (top pages, conversions, drop-offs)
- Content audit (which pages need refresh)
- Performance review
- New case study (1 per month)
- Backup Sheets data

### 22.4 Quarterly
- Full SEO audit (Screaming Frog + manual)
- Security audit
- Accessibility audit (WCAG regression)
- A/B test results review (if running)
- Competitor analysis
- Tech debt review
- Content calendar refresh

### 22.5 Yearly
- Major rebrand consideration
- Tech stack version upgrades (with full QA)
- Trademark renewal
- Domain renewal
- Annual report content piece

---

## 23. RISK REGISTER

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Apps Script rate limits hit | Low | Medium | Rate limit on form, fallback to email |
| Hostinger downtime | Medium | High | Cloudflare cache front, status page |
| Logo SVG conversion issues | Low | Low | High-res PNG fallback ready |
| Content takes longer than estimated | High | Medium | Phased launch — go live with core pages, add over time |
| AI-generated content factually wrong | High | High | Mandatory human review before publish |
| DPDP non-compliance | Low | Very High | Legal review of policies before launch |
| Performance regression over time | Medium | Medium | Lighthouse CI in PR checks |
| GitHub Actions free minutes exhausted | Low | Low | Optimize workflows, fewer cron jobs |
| Form spam | High | Low | Turnstile + honeypot + rate limit |
| SEO ranking takes longer than expected | High | Medium | 6-month patience window, content velocity |

---

## 24. OPEN ITEMS — DECISIONS PENDING

### 24.1 Things You Need to Confirm Before Build Starts

1. **Logo SVG** — Will you arrange SVG version? Or proceed with PNG?
2. **Login word** — "Portal" (my recommendation) or different choice?
3. **Login dropdown destinations** — Final list of LMS, ERP, Admin, etc. URLs (placeholders OK for now)
4. **Office address** — Exact address to display
5. **Phone numbers** — Primary, WhatsApp number
6. **Founder details** — Names, roles, LinkedIn URLs, photo (one group photo as decided)
7. **Stats numbers** — "500+ students", "50+ colleges" — actual numbers or placeholder ranges?
8. **Existing social media links** — LinkedIn, Insta, etc.
9. **Webinar topics** — At least 2-3 future webinar ideas to populate page

### 24.2 Pending External Inputs

1. **Friend's UI research** — Reference sites, layout direction, visual moodboard
2. **Brand color exact hex codes** — Locked from logo
3. **Photography assets** — Real Alphinix event/student photos (preferred over stock)

### 24.3 Defaults I'm Taking If You Don't Specify

- **Tone:** Confident-professional with warm undertone
- **Login word:** "Portal"
- **Cookie banner:** Custom-built (CookieYes free tier as fallback)
- **Stats:** Placeholder ranges with "+" suffix until real numbers given
- **Office address:** Pune, Maharashtra (area-level until exact provided)
- **Blog posts:** 3 launch articles, AI-drafted, you review before publish
- **Webinars:** Page launches with "Coming soon — first webinar [date]" if no specifics
- **Case studies:** Template ready, populate as content available

---

## 🎯 QUICK START FOR AI AGENT (Claude Code)

When you open this project, read in this order:

1. **`AI_CONTEXT/CLAUDE.md`** (auto-loaded)
2. **`AI_CONTEXT/PROJECT_CONTEXT.md`** (business context)
3. **`AI_CONTEXT/TECH_STACK.md`** (stack rules)
4. **`AI_CONTEXT/CONVENTIONS.md`** (code style)
5. **`AI_CONTEXT/CONSTRAINTS.md`** (never-do list)
6. **`AI_CONTEXT/PROGRESS.md`** (where we are)
7. **`AI_CONTEXT/TASKS.md`** (what's next)
8. **This file** (full plan reference)

Update `PROGRESS.md` after every meaningful change.

---

## ✅ SIGN-OFF CHECKLIST

Before starting build, confirm:

- [ ] Logo SVG available (or PNG with awareness of trade-off)
- [ ] Login word + destinations confirmed
- [ ] All open items in §24.1 answered
- [ ] Friend's UI research compiled (separate `UI_BRIEF.md` to be added)
- [ ] You've read this entire document
- [ ] You agree with all locked decisions
- [ ] Phase 1 (Setup) approved to start

---

> **One last thing.** This is a living document. If anything changes — add to `DECISIONS.md` with a date and rationale, and update this master plan. Don't lose history.

> **Next deliverable:** Once you approve this plan + your friend's UI research arrives, I'll generate the `AI_CONTEXT/` folder contents (all 13 files) so Claude Code can start building.

---

*— End of Master Plan —*
