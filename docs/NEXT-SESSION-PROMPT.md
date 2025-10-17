# PROMPT FOR NEXT SESSION - IO-TECH WEBSITE PROJECT

## Project Context

You are continuing work on the **IO-TECH website project**, a corporate website for a Mexican technology consulting company specializing in digital transformation, cloud computing, software development, and cybersecurity.

**Previous Sessions Summary:**
- **Session 1-2:** Created comprehensive planning documentation (11 MD files, ~210KB total)
- **Current Status:** Documentation phase is COMPLETE, ready to begin implementation
- **Next Phase:** Start actual code implementation following Week 1-2 of the implementation plan

---

## Project Overview

**Client:** IO-TECH (Mexican technology consulting firm)
**Website URL:** https://io-tech.com.mx
**Project Type:** Corporate website (informational, lead generation)
**Target Audience:** Mexican enterprises seeking digital transformation
**Primary Goal:** Generate qualified leads for technology consulting services

---

## Technology Stack (CRITICAL - DO NOT DEVIATE)

### Frontend
- **HTML5 + CSS3 + Vanilla JavaScript ES6+** (NO React/Vue/Angular)
- **Tailwind CSS** (build-time configuration, NOT CDN)
- **ES6 Modules** for component architecture
- **Progressive Enhancement** approach

### Backend
- **ASP.NET Core 8.0 LTS**
- **Entity Framework Core** with SQL Server
- **Clean Architecture** (Domain, Application, Infrastructure, API layers)
- **RESTful API** for contact forms and newsletter

### Hosting & Deployment
- **Frontend:** Netlify (static site hosting)
- **Backend:** Azure App Service
- **Database:** Azure SQL Database
- **CI/CD:** GitHub Actions

### Key Dependencies
```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "cssnano": "^6.0.2",
    "vite": "^5.0.8"
  }
}
```

---

## Design System (MUST USE THESE EXACT VALUES)

### Brand Colors
```css
:root {
  /* Primary Brand Colors - IO-TECH */
  --color-brand-50: rgb(227, 247, 253);    /* #e3f7fd - Lightest */
  --color-brand-500: rgb(39, 174, 229);    /* #27aee5 - CYAN PRINCIPAL */
  --color-brand-600: rgb(30, 154, 208);    /* #1e9ad0 - Cyan Dark */
  --color-brand-700: rgb(18, 122, 191);    /* #127abf - AZUL MEDIO */
  --color-brand-900: rgb(23, 70, 129);     /* #174681 - AZUL OSCURO */

  /* Grayscale */
  --color-gray-50: rgb(249, 250, 251);
  --color-gray-900: rgb(17, 24, 39);
}
```

### Typography
- **Body Font:** Inter (Google Fonts)
- **Display Font:** Poppins (headings, hero titles)
- **Code Font:** Fira Code (technical content)
- **Base Size:** 16px
- **Display Sizes:** 24px, 30px, 36px, 48px, 60px, 72px

### Spacing System
- **Base Unit:** 4px
- **Scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160px

---

## Complete Documentation Reference

All documentation is located in `c:\Users\antro\OneDrive\Documentos\Proyectos\Source\io-tech web\docs\`

### Planning & Architecture
1. **[00-PLAN-MAESTRO.md](docs/00-PLAN-MAESTRO.md)** - Master plan with all documentation index
2. **[01-ARQUITECTURA-SITIO.md](docs/01-ARQUITECTURA-SITIO.md)** - Site architecture and information hierarchy
3. **[02-ESTRUCTURA-PAGINAS.md](docs/02-ESTRUCTURA-PAGINAS.md)** - Detailed wireframes for all 10+ pages

### Design & Components
4. **[TEMPLATE-REFERENCE.md](docs/TEMPLATE-REFERENCE.md)** (54KB) - Untitled UI template analysis and React → Vanilla JS conversion guides
5. **[06-DESIGN-SYSTEM.md](docs/06-DESIGN-SYSTEM.md)** (42KB) - Complete design system (colors, typography, components, utilities)
6. **[03-SISTEMA-COMPONENTES.md](docs/03-SISTEMA-COMPONENTES.md)** (48KB) - Vanilla JS component system with full code examples
   - BaseComponent class
   - Header, MobileMenu, Accordion, ContactForm components
   - Utility functions (DOM, validation, API, animations)

### SEO & Performance
7. **[04-ESTRATEGIA-SEO.md](docs/04-ESTRATEGIA-SEO.md)** (35KB) - SEO strategy including LLM optimization
8. **[08-PERFORMANCE.md](docs/08-PERFORMANCE.md)** - Performance optimization (Core Web Vitals, lazy loading, caching)

### Technical Implementation
9. **[05-STACK-TECNOLOGICO.md](docs/05-STACK-TECNOLOGICO.md)** (32KB) - Complete tech stack with cost estimates
10. **[07-BACKEND-NET.md](docs/07-BACKEND-NET.md)** - ASP.NET Core backend with complete code examples
11. **[09-PLAN-IMPLEMENTACION.md](docs/09-PLAN-IMPLEMENTACION.md)** - 10-week implementation timeline

### Project Files
12. **[README.md](README.md)** - Project overview and documentation index
13. **[ESTRUCTURA-CARPETAS.md](docs/ESTRUCTURA-CARPETAS.md)** - Folder structure specification

---

## Site Structure (10 Pages)

### Main Pages
1. **Homepage** (`/index.html`) - Hero, services overview, stats, CTA
2. **Services** (`/servicios.html`) - All 4 service categories
3. **About** (`/nosotros.html`) - Company story, team, values
4. **Contact** (`/contacto.html`) - Multi-step contact form

### Service Detail Pages
5. **Cloud Computing** (`/servicios/cloud-computing.html`)
6. **Software Development** (`/servicios/desarrollo-software.html`)
7. **Cybersecurity** (`/servicios/ciberseguridad.html`)
8. **Business Intelligence** (`/servicios/business-intelligence.html`)

### Solution Pages
9. **Digital Transformation** (`/soluciones/transformacion-digital.html`)
10. **Technology Consulting** (`/soluciones/consultoria-tecnologica.html`)

### Additional Pages
11. **Privacy Policy** (`/privacidad.html`)
12. **Terms of Service** (`/terminos.html`)

---

## Component Architecture (Vanilla JS)

### BaseComponent Pattern
```javascript
// All components extend BaseComponent
class BaseComponent {
  constructor(element, options = {}) {
    this.element = element;
    this.options = { ...this.constructor.defaults, ...options };
    this.state = {};
    this.boundEvents = [];
    this.init();
  }

  // Automatic event cleanup
  on(target, event, handler, options) {
    const boundHandler = handler.bind(this);
    target.addEventListener(event, boundHandler, options);
    this.boundEvents.push({ target, event, handler: boundHandler, options });
    return this;
  }

  destroy() {
    this.boundEvents.forEach(({ target, event, handler, options }) => {
      target.removeEventListener(event, handler, options);
    });
    this.boundEvents = [];
  }

  $(selector) { return this.element.querySelector(selector); }
  $$(selector) { return Array.from(this.element.querySelectorAll(selector)); }
}
```

### Core Components to Implement
1. **Header** - Sticky navigation with mobile menu
2. **MobileMenu** - Slide-in mobile navigation
3. **Accordion** - For FAQs and service details
4. **ContactForm** - Multi-step form with validation
5. **ServiceCard** - Service presentation cards
6. **StatsCounter** - Animated statistics
7. **LazyLoader** - Image lazy loading

---

## Implementation Plan - START HERE

### WEEK 1: Project Setup & Design System (Days 1-5)

#### Day 1-2: Environment Setup
```bash
# Initialize project
npm init -y
npm install -D tailwindcss autoprefixer postcss vite cssnano

# Create Tailwind config
npx tailwindcss init -p

# Setup Git
git init
git add .
git commit -m "Initial project setup"
```

**Deliverables:**
- `package.json` with all dependencies
- `tailwind.config.js` configured with IO-TECH colors
- `postcss.config.js` with autoprefixer and cssnano
- `.gitignore` file
- Folder structure created (see ESTRUCTURA-CARPETAS.md)

#### Day 3-5: Design System Implementation
**Files to Create:**
1. `assets/css/design-system.css` - CSS variables and design tokens
2. `assets/css/components.css` - Button, card, form component styles
3. `assets/css/utilities.css` - Helper classes
4. `assets/css/main.css` - Main entry point

**Reference:** [06-DESIGN-SYSTEM.md](docs/06-DESIGN-SYSTEM.md) for complete design system

**Critical CSS Variables to Implement:**
```css
/* assets/css/design-system.css */
:root {
  /* Colors */
  --color-brand-500: #27aee5;
  --color-brand-700: #127abf;
  --color-brand-900: #174681;

  /* Typography */
  --font-display: 'Poppins', sans-serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;

  --text-display-lg: 48px;
  --text-display-md: 36px;
  --text-xl: 20px;
  --text-md: 16px;

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

### WEEK 2: Core Components (Days 6-10)

#### Day 6-7: Header Component
**File:** `components/header/Header.js`

**Features:**
- Sticky header on scroll
- Active page highlighting
- Mobile menu toggle
- Smooth scroll to sections

**Reference:** [03-SISTEMA-COMPONENTES.md](docs/03-SISTEMA-COMPONENTES.md) lines 45-180

#### Day 8: Mobile Menu Component
**File:** `components/header/MobileMenu.js`

**Features:**
- Slide-in animation
- Close on outside click
- Focus trap for accessibility
- Body scroll lock when open

#### Day 9-10: Base Utilities
**Files:**
- `assets/js/utils/dom.js` - DOM helpers
- `assets/js/utils/validation.js` - Form validation
- `assets/js/utils/api.js` - API calls
- `assets/js/utils/animations.js` - Scroll animations
- `assets/js/app.js` - Application initialization

**Reference:** [03-SISTEMA-COMPONENTES.md](docs/03-SISTEMA-COMPONENTES.md) lines 600-850

---

## Key Implementation Guidelines

### 1. Tailwind Configuration (CRITICAL)
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.html",
    "./components/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#e3f7fd',
          500: '#27aee5',  // PRIMARY
          600: '#1e9ad0',
          700: '#127abf',  // ACCENT
          900: '#174681',  // DARK
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      },
      fontSize: {
        'display-2xl': ['72px', { lineHeight: '90px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['60px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['48px', { lineHeight: '60px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-sm': ['30px', { lineHeight: '38px', fontWeight: '600' }],
        'display-xs': ['24px', { lineHeight: '32px', fontWeight: '600' }],
      }
    }
  },
  plugins: []
}
```

### 2. Component Naming Convention
- **File naming:** PascalCase for JS (e.g., `Header.js`, `ContactForm.js`)
- **Class naming:** PascalCase for classes (e.g., `class Header extends BaseComponent`)
- **CSS naming:** BEM methodology (e.g., `.header__nav`, `.header__nav--active`)
- **Data attributes:** kebab-case (e.g., `data-component="header"`)

### 3. SEO Requirements (From 04-ESTRATEGIA-SEO.md)
Every HTML page MUST include:

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>IO-TECH - [Page Title] | Transformación Digital México</title>
  <meta name="title" content="IO-TECH - [Page Title]">
  <meta name="description" content="[150-160 character description]">
  <meta name="keywords" content="[relevant keywords]">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://io-tech.com.mx/">
  <meta property="og:title" content="IO-TECH - [Page Title]">
  <meta property="og:description" content="[description]">
  <meta property="og:image" content="https://io-tech.com.mx/assets/img/og-image.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://io-tech.com.mx/">
  <meta property="twitter:title" content="IO-TECH - [Page Title]">
  <meta property="twitter:description" content="[description]">
  <meta property="twitter:image" content="https://io-tech.com.mx/assets/img/og-image.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">

  <!-- CSS -->
  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
  <!-- Content -->

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IO-TECH",
    "url": "https://io-tech.com.mx",
    "logo": "https://io-tech.com.mx/assets/img/logo-io-tech-color.svg"
  }
  </script>

  <!-- JavaScript -->
  <script type="module" src="/assets/js/app.js"></script>
</body>
</html>
```

### 4. Performance Targets (From 08-PERFORMANCE.md)
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **Total Bundle Size:** < 200KB (JS + CSS combined, gzipped)
- **Image Format:** WebP with JPEG fallback
- **Critical CSS:** Inline above-the-fold styles

### 5. Accessibility Requirements
- **Semantic HTML5** elements (nav, main, section, article, aside, footer)
- **ARIA labels** for interactive elements
- **Keyboard navigation** support (Tab, Enter, Escape)
- **Focus management** (visible focus indicators)
- **Alt text** for all images
- **Color contrast** WCAG AA compliant (4.5:1 for normal text)

---

## File Structure to Create

```
io-tech-web/
├── pages/
│   ├── index.html                          # Homepage
│   ├── servicios.html                      # Services overview
│   ├── nosotros.html                       # About
│   ├── contacto.html                       # Contact
│   ├── servicios/
│   │   ├── cloud-computing.html
│   │   ├── desarrollo-software.html
│   │   ├── ciberseguridad.html
│   │   └── business-intelligence.html
│   ├── soluciones/
│   │   ├── transformacion-digital.html
│   │   └── consultoria-tecnologica.html
│   └── legal/
│       ├── privacidad.html
│       └── terminos.html
├── components/
│   ├── header/
│   │   ├── header.html
│   │   └── mobile-menu.html
│   └── footer/
│       └── footer.html
├── assets/
│   ├── css/
│   │   ├── design-system.css              # START HERE
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── main.css
│   ├── js/
│   │   ├── components/
│   │   │   ├── BaseComponent.js           # START HERE
│   │   │   ├── Header.js
│   │   │   ├── MobileMenu.js
│   │   │   ├── Accordion.js
│   │   │   ├── ContactForm.js
│   │   │   └── ServiceCard.js
│   │   ├── utils/
│   │   │   ├── dom.js
│   │   │   ├── validation.js
│   │   │   ├── api.js
│   │   │   └── animations.js
│   │   └── app.js                         # Main entry point
│   └── img/
│       ├── logo-io-tech-color.svg
│       ├── logo-io-tech-white.svg
│       └── (other images)
├── docs/                                   # All documentation (already complete)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .gitignore
└── README.md
```

---

## Important Assets

### Logo Files (Already Exist)
- **Color version:** `assets/img/logo-io-tech-color.svg`
- **White version:** `assets/img/logo-io-tech-white.svg`

**Logo Usage:**
- Header: White version on gradient background
- Footer: White version
- Other contexts: Color version

### Logo Analysis (From Previous Session)
- **Colors:** Cyan (#27aee5), Blue (#127abf, #174681)
- **Style:** Modern, geometric, tech-focused
- **Text:** "IO-TECH" in bold sans-serif
- **Icon:** Abstract geometric shape suggesting connectivity

---

## Backend API Endpoints (For Contact Form)

### Contact Form Endpoint
```
POST https://api.io-tech.com.mx/api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "phone": "string",
  "company": "string",
  "industry": "Technology|Finance|Healthcare|Retail|Manufacturing|Government|Other",
  "service": "CloudComputing|SoftwareDevelopment|Cybersecurity|BusinessIntelligence|Other",
  "message": "string"
}

Response 200 OK:
{
  "success": true,
  "message": "Mensaje enviado exitosamente",
  "ticketId": "CT-20250114-0001"
}
```

### Newsletter Endpoint
```
POST https://api.io-tech.com.mx/api/newsletter
Content-Type: application/json

{
  "email": "string"
}

Response 200 OK:
{
  "success": true,
  "message": "Suscripción exitosa"
}
```

**Reference:** [07-BACKEND-NET.md](docs/07-BACKEND-NET.md) for complete backend implementation

---

## Template References

### Untitled UI React Templates (FOR REFERENCE ONLY)
Located in `template_example/` folder:
- `lp12/` - Landing page with hero, features, FAQ
- `lp-17/` - Alternative starter template
- `bp-04/` - Business presentation template

**Important:** These are REACT templates. DO NOT copy React code directly.

**Usage:**
1. Read [TEMPLATE-REFERENCE.md](docs/TEMPLATE-REFERENCE.md) for conversion guides
2. Extract design patterns (layout, spacing, colors)
3. Convert React patterns to Vanilla JS using BaseComponent pattern

**Example Conversion:**
```javascript
// ❌ DON'T: Copy React code
const [isOpen, setIsOpen] = useState(false);

// ✅ DO: Convert to Vanilla JS
class MobileMenu extends BaseComponent {
  constructor(element) {
    super(element);
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.element.classList.toggle('is-open', this.isOpen);
  }
}
```

---

## Testing Checklist (Before Deployment)

### Functionality
- [ ] All navigation links work
- [ ] Mobile menu opens/closes correctly
- [ ] Contact form validates input
- [ ] Contact form submits successfully
- [ ] Accordion components expand/collapse
- [ ] All images load (with lazy loading)

### Performance
- [ ] Lighthouse score > 90 (all categories)
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 200KB gzipped

### SEO
- [ ] All pages have unique titles and descriptions
- [ ] robots.txt allows all crawlers
- [ ] sitemap.xml generated
- [ ] Schema.org markup on all pages
- [ ] OpenGraph and Twitter meta tags

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast WCAG AA compliant
- [ ] All images have alt text
- [ ] Focus indicators visible

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Critical Success Factors

### 1. NO FRAMEWORKS
- This project MUST use Vanilla JavaScript
- NO React, Vue, Angular, or any other framework
- Use native Web APIs (Intersection Observer, Fetch, etc.)

### 2. EXACT BRAND COLORS
- PRIMARY: `#27aee5` (cyan)
- ACCENT: `#127abf` (blue medium)
- DARK: `#174681` (blue dark)
- DO NOT use purple or other colors from templates

### 3. TAILWIND BUILD-TIME
- Tailwind CSS MUST be processed at build time
- DO NOT use Tailwind CDN
- Use `npm run build` to generate production CSS

### 4. PERFORMANCE FIRST
- Optimize images (WebP format)
- Lazy load below-the-fold content
- Inline critical CSS
- Minimize JavaScript bundle

### 5. SEO OPTIMIZED
- Semantic HTML
- Meta tags on every page
- Schema.org markup
- Allow LLM crawlers (GPTBot, ClaudeBot)

---

## Commands Reference

### Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build Tailwind CSS
npm run build:css

# Watch Tailwind CSS
npm run watch:css

# Build production
npm run build

# Preview production build
npm run preview
```

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/header-component

# Commit changes
git add .
git commit -m "feat: implement sticky header component"

# Push to remote
git push origin feature/header-component
```

---

## Next Session Starting Point

### IMMEDIATE TASKS (Start Here)

1. **Setup Project (1-2 hours)**
   - Run `npm init -y`
   - Install Tailwind CSS and dependencies
   - Create `tailwind.config.js` with IO-TECH colors
   - Create basic folder structure

2. **Design System CSS (2-3 hours)**
   - Create `assets/css/design-system.css` with CSS variables
   - Implement color palette, typography, spacing
   - Reference: [06-DESIGN-SYSTEM.md](docs/06-DESIGN-SYSTEM.md)

3. **BaseComponent Class (1-2 hours)**
   - Create `assets/js/components/BaseComponent.js`
   - Implement event management, state, lifecycle
   - Reference: [03-SISTEMA-COMPONENTES.md](docs/03-SISTEMA-COMPONENTES.md) lines 1-100

4. **Header Component (3-4 hours)**
   - Create `components/header/header.html`
   - Create `assets/js/components/Header.js`
   - Implement sticky behavior and active state
   - Reference: [03-SISTEMA-COMPONENTES.md](docs/03-SISTEMA-COMPONENTES.md) lines 45-180

5. **Test & Iterate**
   - Test header on different screen sizes
   - Verify sticky behavior works
   - Check accessibility (keyboard navigation)

---

## Questions to Ask If Clarification Needed

1. **API Endpoints:** Should I implement backend API now or use mock data for frontend development?
2. **Images:** Do you have actual images/photos ready, or should I use placeholders?
3. **Content:** Is the Spanish copy (text content) ready for each page?
4. **Analytics:** Do you have Google Analytics 4 tracking ID for integration?
5. **Email Service:** Which SMTP service should backend use (SendGrid, Azure, Gmail)?

---

## Success Criteria for Week 1-2

By end of Week 2, you should have:

✅ **Repository Setup**
- Git initialized with proper `.gitignore`
- All dependencies installed
- Folder structure created

✅ **Design System**
- `design-system.css` with all CSS variables
- `components.css` with button, card, form styles
- `utilities.css` with helper classes
- Tailwind config with IO-TECH brand colors

✅ **Core Components**
- `BaseComponent.js` - Base class for all components
- `Header.js` - Sticky header with mobile menu
- `MobileMenu.js` - Slide-in mobile navigation
- `app.js` - Application initialization

✅ **First HTML Page**
- `pages/index.html` - Homepage structure (can be unstyled skeleton)
- Includes header, hero section placeholder, footer placeholder
- All meta tags and SEO elements present

✅ **Development Environment**
- Vite dev server running
- Hot reload working
- Tailwind CSS building successfully

---

## Documentation Quick Reference

| Topic | Document | Key Sections |
|-------|----------|--------------|
| **Project Overview** | [README.md](README.md) | Project goals, tech stack |
| **Master Plan** | [00-PLAN-MAESTRO.md](docs/00-PLAN-MAESTRO.md) | All documentation index |
| **Site Architecture** | [01-ARQUITECTURA-SITIO.md](docs/01-ARQUITECTURA-SITIO.md) | Site map, user flows |
| **Page Wireframes** | [02-ESTRUCTURA-PAGINAS.md](docs/02-ESTRUCTURA-PAGINAS.md) | Detailed page layouts |
| **Component System** | [03-SISTEMA-COMPONENTES.md](docs/03-SISTEMA-COMPONENTES.md) | BaseComponent, all components code |
| **SEO Strategy** | [04-ESTRATEGIA-SEO.md](docs/04-ESTRATEGIA-SEO.md) | Keywords, meta tags, schema markup |
| **Tech Stack** | [05-STACK-TECNOLOGICO.md](docs/05-STACK-TECNOLOGICO.md) | Technologies, costs, configs |
| **Design System** | [06-DESIGN-SYSTEM.md](docs/06-DESIGN-SYSTEM.md) | Colors, typography, components |
| **Backend API** | [07-BACKEND-NET.md](docs/07-BACKEND-NET.md) | .NET Core code, controllers, services |
| **Performance** | [08-PERFORMANCE.md](docs/08-PERFORMANCE.md) | Optimization strategies |
| **Implementation Plan** | [09-PLAN-IMPLEMENTACION.md](docs/09-PLAN-IMPLEMENTACION.md) | 10-week timeline |
| **Template Reference** | [TEMPLATE-REFERENCE.md](docs/TEMPLATE-REFERENCE.md) | React → JS conversion guides |
| **Folder Structure** | [ESTRUCTURA-CARPETAS.md](docs/ESTRUCTURA-CARPETAS.md) | Directory layout |

---

## Contact Information

**Project Owner:** IO-TECH
**Website:** https://io-tech.com.mx
**Location:** México

---

## Final Notes

### What's Already Complete
✅ All planning documentation (~210KB)
✅ Design system specification
✅ Component architecture design
✅ Backend API specification
✅ Implementation plan (10 weeks)
✅ Logo assets analyzed

### What Needs to Be Built
⏳ Actual HTML/CSS/JS implementation
⏳ Backend API development (.NET Core)
⏳ Database setup (SQL Server)
⏳ Testing and QA
⏳ Deployment to Netlify + Azure

### Priority Order
1. **HIGHEST:** Project setup + Design system CSS + BaseComponent
2. **HIGH:** Header + MobileMenu + Homepage HTML
3. **MEDIUM:** Service pages + Contact form
4. **LOW:** Backend API (can be done in parallel)

---

## How to Use This Prompt

1. **Read this entire document first** - Understand the full context
2. **Start with Week 1 tasks** - Setup project, design system, BaseComponent
3. **Reference documentation** - All answers are in the 11 MD files in `docs/`
4. **Follow guidelines strictly** - Brand colors, no frameworks, Tailwind build-time
5. **Test frequently** - Check responsive design, accessibility, performance

**Remember:** The goal is a fast, accessible, SEO-optimized corporate website using vanilla JavaScript and Tailwind CSS. Quality over speed. Performance matters. Accessibility is not optional.

---

**LAST UPDATED:** 2025-01-14
**DOCUMENTATION VERSION:** 1.0
**READY FOR IMPLEMENTATION:** ✅ YES

---

# START NEXT SESSION WITH:

"I'm ready to begin implementing the IO-TECH website. I've reviewed all documentation. Let's start with Week 1: Project Setup and Design System. Should I proceed with creating the package.json and Tailwind configuration?"
