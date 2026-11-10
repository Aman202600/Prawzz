# Prawzz — Product Development, Design & AI Systems Suite

A production-grade React application delivering three modular, responsive, and thoughtfully designed digital experiences:

1. **Part 1 (`/animals`)** — **Practo for Animals**: Animal-care discovery platform MVP with advanced filtering, verified provider profiles, and appointment enquiry flows.
2. **Part 2 (`/education`)** — **FutureSkill AI Academy**: Premium course landing page for an AI & digital skills education platform with interactive syllabi, student capstone showcases, and lead capture.
3. **Part 3 (`/content-system`)** — **AI-Powered Content Creation System**: SaaS dashboard and workflow demonstration empowering founders to produce professional LinkedIn/Instagram carousels without graphic designers.

---

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 18 + Vite 5
- **Styling & Design System**: Tailwind CSS 3.4 (Custom color palettes: Forest Green, Warm Cream, Terracotta, Midnight Slate, Electric Indigo)
- **Icons**: Lucide React
- **Animations & Celebrations**: Framer Motion & Canvas Confetti
- **Routing**: React Router DOM 6 with persistent shared navigation switcher
- **Data Persistence**: React state & structured mock data (Strictly zero MongoDB / backend bloat)

---

## 🚀 Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized production bundle in the `dist/` folder with zero warnings.

---

## 🧭 Navigation & Deliverables Overview

A persistent **Master Navigation Bar** is anchored at the top of every page, enabling one-click switching between the three product modules:

| Route | Deliverable | Description |
| :--- | :--- | :--- |
| `/animals` | **Practo for Animals** | Veterinary clinics, hospitals, boarding retreats, animal diagnostics, ambulances, and NGOs discovery. |
| `/education` | **AI Education Platform** | FutureSkill AI course landing page, 5 specialized tracks, hands-on labs, capstone showcase, and lead enquiry. |
| `/content-system` | **AI Content Creation Studio** | 6-stage AI carousel production workflow, interactive preview studio (4:5 / 1:1), live text editor, and export pipelines. |

---

## 📋 Comprehensive Feature Breakdown

### Part 1: Practo for Animals
- **Hero & Search Interface**: Dual-input search engine (service keywords + location dropdown) with quick category pills.
- **Popular Services**: 6 categories with iconography, provider counts, and click-to-filter interactions.
- **Real-Time Filter Engine**: React state-driven filtering by search query, service category, location, rating, distance slider, "Open Now", and "24/7 Emergency Only".
- **Provider Cards & Detail Modal**: Comprehensive clinical profiles with verified badges, fees, doctor qualifications, infrastructure checklists, and sample reviews.
- **Appointment Booking Flow**: Validated modal capturing pet parent info, pet type, date, and preferred slot with reference ID confirmation and confetti.
- **Provider Registration ("List Your Business")**: Onboarding modal with veterinary council licensing validation.
- **Submit a Correction**: Community data accuracy form allowing users to report outdated numbers or moved clinics.
- **Why Choose Us & Footer**: Pet parent trust guarantees, 24/7 emergency hotline, and complete service directory.

### Part 2: AI Education — Course Landing Page
- **Hero & Trust Metrics**: High-contrast dark theme with interactive Python terminal code card and 4 verified learner metrics.
- **5 Specialized Tracks**: Artificial Intelligence & ML, Generative AI & LLMs, Data Analytics, Full Stack Web & AI, Python for Automation.
- **Detailed Syllabus Modal**: Week-by-week module topics, prerequisites, and capstone project breakdowns.
- **Why Choose Us**: 5 pillars + comparison table contrasting passive recorded courses with FutureSkill's project-first model.
- **4-Step Learning Roadmap**: Clear visual milestone progression from diagnostic to capstone defense.
- **Curriculum Preview**: Interactive track switcher tabs showing weekly phases and learning outcomes.
- **Capstone Projects Showcase**: Real-world student projects with tech tags and domain filters.
- **FAQ Accordion & Lead Capture**: Expandable accordion answering eligibility, prerequisites, and duration + validated enquiry form with reference ID generation.

### Part 3: AI-Powered Content Creation System
- **Stage 1 (Idea Input)**: Founder inputs raw brain dump, topic, audience, platform, tone, and configurable slide count (5–10).
- **Stage 2 (Research & Structure)**: AI research engine extracting key insights, core angle, and a 5-to-10 slide storytelling arc.
- **Stage 3 (Headline & Slide Copy)**: Structured slide copywriting with editable headlines and subheadlines.
- **Stage 4 (Visual Direction)**: 4 brand themes (*Obsidian Tech, Cyber Violet, Editorial Cream, Cobalt Enterprise*), typography pairing guidance, layout standards, and DALL-E / Midjourney image prompts.
- **Stage 5 (Carousel Studio & Editor)**: Interactive live canvas preview with real-time text binding, previous/next controls, jump dots, and aspect ratio switcher (4:5 Portrait vs. 1:1 Square).
- **Stage 6 (Export & Publishing)**: Copy social post markdown, download structured JSON schema, download printable HTML deck, and simulate Make.com / n8n webhook triggers.
- **Master Sample Carousel**: Complete 8-slide deck on *"5 Ways Artificial Intelligence Is Changing the Future of Work"*.
- **Workflow Architecture & Integrations Hub**: 9-stage workflow diagram and guide to connecting ChatGPT/Claude, Canva, Make/n8n, and Google Drive into a zero-code automated pipeline.

---

## 🔒 Integrity & Compliance Statement
- **Zero Database / MongoDB Dependencies**: As instructed, no database connections or schemas were introduced.
- **Sample Data Transparency**: All clinic ratings, alumni reviews, and provider credentials are clearly labeled as realistic sample/illustrative data.
- **Clean Architecture**: Reusable, modular React components styled with utility-first Tailwind CSS.

