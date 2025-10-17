# 08 - PERFORMANCE Y OPTIMIZACIÓN

## 📋 Índice

1. [Core Web Vitals](#core-web-vitals)
2. [Optimización de Imágenes](#optimización-de-imágenes)
3. [Optimización CSS](#optimización-css)
4. [Optimización JavaScript](#optimización-javascript)
5. [Caching Strategy](#caching-strategy)
6. [CDN y Edge Computing](#cdn-y-edge-computing)
7. [Database Optimization](#database-optimization)
8. [Bundle Size Optimization](#bundle-size-optimization)
9. [Lazy Loading](#lazy-loading)
10. [Monitoring y Alerts](#monitoring-y-alerts)

---

## Core Web Vitals

### Targets

| Métrica | Target | Descripción |
|---------|--------|-------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Tiempo hasta que el contenido principal carga |
| **FID** (First Input Delay) | < 100ms | Tiempo hasta primera interacción |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Estabilidad visual durante carga |
| **FCP** (First Contentful Paint) | < 1.8s | Tiempo hasta primer contenido visible |
| **TTFB** (Time to First Byte) | < 600ms | Tiempo de respuesta del servidor |
| **INP** (Interaction to Next Paint) | < 200ms | Responsividad a interacciones |

---

### Optimización LCP (< 2.5s)

#### 1. Preconnect a Orígenes Críticos

```html
<head>
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- CDN (si se usa) -->
  <link rel="preconnect" href="https://cdn.io-tech.com.mx">

  <!-- API -->
  <link rel="dns-prefetch" href="https://api.io-tech.com.mx">
</head>
```

#### 2. Preload Recursos Críticos

```html
<!-- Hero image (LCP element) -->
<link rel="preload" as="image" href="/assets/img/hero-background.jpg" fetchpriority="high">

<!-- Critical fonts -->
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/inter-600.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/poppins-700.woff2" crossorigin>

<!-- Critical CSS (inline en production) -->
<link rel="preload" as="style" href="/assets/css/critical.css">
```

#### 3. Optimizar Imágenes Hero

```html
<!-- Responsive hero image con WebP -->
<picture>
  <source
    srcset="
      /assets/img/hero-background-640.webp 640w,
      /assets/img/hero-background-1280.webp 1280w,
      /assets/img/hero-background-1920.webp 1920w
    "
    sizes="100vw"
    type="image/webp"
  >
  <source
    srcset="
      /assets/img/hero-background-640.jpg 640w,
      /assets/img/hero-background-1280.jpg 1280w,
      /assets/img/hero-background-1920.jpg 1920w
    "
    sizes="100vw"
    type="image/jpeg"
  >
  <img
    src="/assets/img/hero-background-1280.jpg"
    alt="IO-TECH - Soluciones Tecnológicas"
    width="1920"
    height="1080"
    loading="eager"
    fetchpriority="high"
    decoding="async"
  >
</picture>
```

#### 4. Server-Side Rendering Parcial (Crítico)

```html
<!-- Inline critical CSS para evitar render-blocking -->
<style>
  /* Critical CSS - Solo estilos above-the-fold */
  :root {
    --color-brand-600: #1e9ad0;
    --font-display: 'Poppins', sans-serif;
  }

  .hero {
    background: linear-gradient(135deg, #1e9ad0 0%, #174681 100%);
    padding: 6rem 1rem;
  }

  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3rem);
    color: white;
  }
</style>

<!-- Load full CSS async -->
<link rel="stylesheet" href="/assets/css/main.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/assets/css/main.css"></noscript>
```

---

### Optimización FID/INP (< 100ms)

#### 1. Defer/Async JavaScript No Crítico

```html
<!-- Critical JS inline (< 14KB) -->
<script>
  // Theme detection (evitar FOUC)
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.add(theme);
</script>

<!-- Main app JS - defer -->
<script src="/assets/js/app.js" type="module" defer></script>

<!-- Analytics - async -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

#### 2. Debounce/Throttle Event Handlers

```javascript
// utils/performance.js

export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Usage
import { throttle } from './utils/performance.js';

window.addEventListener('scroll', throttle(() => {
  // Scroll handler logic
}, 100));
```

#### 3. RequestAnimationFrame para Animaciones

```javascript
// Smooth scroll handler con RAF
class SmoothScroll {
  constructor() {
    this.lastScrollY = 0;
    this.ticking = false;

    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    this.lastScrollY = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.update(this.lastScrollY);
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  update(scrollY) {
    // Update DOM based on scroll position
  }
}
```

---

### Optimización CLS (< 0.1)

#### 1. Dimensiones Explícitas para Imágenes

```html
<!-- ❌ MAL - causa layout shift -->
<img src="logo.svg" alt="IO-TECH">

<!-- ✅ BIEN - reserva espacio -->
<img
  src="logo.svg"
  alt="IO-TECH"
  width="200"
  height="50"
  style="max-width: 100%; height: auto;"
>
```

#### 2. Aspect Ratio para Contenedores

```css
/* Reservar espacio para imágenes responsive */
.image-container {
  aspect-ratio: 16 / 9;
  background-color: #f0f0f0; /* Placeholder color */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

#### 3. Font Display Swap

```css
/* Evitar FOIT (Flash of Invisible Text) */
@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/inter-600.woff2') format('woff2');
  font-weight: 600;
  font-display: swap; /* Usa fallback hasta que custom font cargue */
}
```

#### 4. Evitar Content Shifts Dinámicos

```css
/* Reservar espacio para banners/alerts */
.banner {
  min-height: 60px;
  transition: min-height 0.3s ease;
}

.banner.hidden {
  min-height: 0;
  overflow: hidden;
}
```

---

## Optimización de Imágenes

### Formatos Modernos

**Orden de prioridad:**
1. **AVIF** (mejor compresión, soporte limitado)
2. **WebP** (excelente compresión, buen soporte)
3. **JPEG/PNG** (fallback)

```html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Responsive Images

```html
<img
  srcset="
    /assets/img/hero-640.jpg 640w,
    /assets/img/hero-1280.jpg 1280w,
    /assets/img/hero-1920.jpg 1920w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1280px) 80vw,
    1280px
  "
  src="/assets/img/hero-1280.jpg"
  alt="Hero"
  loading="lazy"
>
```

### Compresión

**Herramientas:**
- **Squoosh** (online): https://squoosh.app/
- **Sharp** (Node.js): Automatizar conversión

```javascript
// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));

  // WebP
  await sharp(inputPath)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, `${filename}-1920.webp`));

  await sharp(inputPath)
    .resize(1280, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, `${filename}-1280.webp`));

  await sharp(inputPath)
    .resize(640, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(outputDir, `${filename}-640.webp`));

  console.log(`✓ Optimized: ${filename}`);
}

// Usage
optimizeImage('./assets/img/hero.jpg', './assets/img/optimized/');
```

### Lazy Loading

```html
<!-- Native lazy loading -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- IntersectionObserver para más control -->
<img
  data-src="image.jpg"
  alt="Description"
  class="lazy-image"
>
```

```javascript
// Intersection Observer para lazy loading
const lazyImages = document.querySelectorAll('.lazy-image');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy-image');
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '50px 0px' // Start loading 50px before visible
});

lazyImages.forEach(img => imageObserver.observe(img));
```

---

## Optimización CSS

### Critical CSS

Extraer CSS crítico (above-the-fold) e inline en `<head>`:

```html
<style>
  /* Critical CSS inline - Solo estilos visibles sin scroll */
  :root { --color-brand: #27aee5; }
  .header { /* ... */ }
  .hero { /* ... */ }
</style>

<!-- Full CSS carga async -->
<link rel="preload" href="/assets/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

**Herramienta:** Critical
```bash
npm install -g critical

critical index.html --base . --inline --minify --extract > critical.css
```

### Purge Unused CSS

Con Tailwind CSS:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.html",
    "./components/**/*.html",
    "./assets/js/**/*.js"
  ],
  // Solo clases usadas se incluyen en build
}
```

### Minificación

```bash
# CSS Nano
npm install cssnano --save-dev

# postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
```

---

## Optimización JavaScript

### Code Splitting

```javascript
// Lazy load components cuando se necesiten
async function loadContactForm() {
  const { ContactForm } = await import('./components/ContactForm.js');
  return new ContactForm(document.querySelector('[data-contact-form]'));
}

// Load cuando usuario navega a página de contacto
if (window.location.pathname === '/contacto/') {
  loadContactForm();
}
```

### Tree Shaking

Usar ES6 modules para automatic tree shaking:

```javascript
// ❌ MAL - importa todo
import _ from 'lodash';

// ✅ BIEN - solo importa lo necesario
import debounce from 'lodash-es/debounce';
```

### Minificación

```bash
# Terser (para production)
npm install terser --save-dev

terser app.js -o app.min.js --compress --mangle
```

---

## Caching Strategy

### Cache Headers

```nginx
# nginx.conf
location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \.(html)$ {
    expires 1h;
    add_header Cache-Control "public, must-revalidate";
}
```

### Service Worker (Opcional - PWA)

```javascript
// service-worker.js
const CACHE_NAME = 'io-tech-v1';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/js/app.js',
  '/assets/img/logo-io-tech-color.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

### Versioning de Assets

```html
<!-- Cache busting con query params o hash -->
<link rel="stylesheet" href="/assets/css/main.css?v=1.2.3">
<script src="/assets/js/app.js?v=1.2.3"></script>

<!-- Mejor: usar hash en filename (build tool) -->
<link rel="stylesheet" href="/assets/css/main.a3f2b1.css">
<script src="/assets/js/app.8d4c9e.js"></script>
```

---

## CDN y Edge Computing

### Netlify CDN (Frontend)

Configuración automática, pero optimizar con headers:

```toml
# netlify.toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600, must-revalidate"
```

### Cloudflare (Opcional)

Para CDN adicional y DDoS protection:

- **Cache Everything:** Assets estáticos
- **Auto Minify:** HTML, CSS, JS
- **Brotli Compression:** Mejor que Gzip
- **Image Optimization:** Automatic WebP conversion

---

## Database Optimization

### Indexing Strategy

```sql
-- Contacts table indexes
CREATE INDEX IX_Contacts_Email ON Contacts(Email);
CREATE INDEX IX_Contacts_CreatedAt ON Contacts(CreatedAt DESC);
CREATE INDEX IX_Contacts_Status ON Contacts(Status);

-- Composite index para queries comunes
CREATE INDEX IX_Contacts_Status_CreatedAt ON Contacts(Status, CreatedAt DESC);

-- Newsletter
CREATE UNIQUE INDEX IX_Newsletter_Email ON NewsletterSubscriptions(Email);
```

### Query Optimization

```csharp
// ❌ MAL - N+1 query problem
var contacts = await _context.Contacts.ToListAsync();
foreach (var contact in contacts)
{
    var relatedData = await _context.RelatedData.Where(r => r.ContactId == contact.Id).ToListAsync();
}

// ✅ BIEN - Eager loading
var contacts = await _context.Contacts
    .Include(c => c.RelatedData)
    .ToListAsync();
```

### Pagination

```csharp
// API endpoint con paginación
[HttpGet]
public async Task<ActionResult<PagedResult<ContactDto>>> GetContacts(
    [FromQuery] int page = 1,
    [FromQuery] int pageSize = 20)
{
    var totalCount = await _context.Contacts.CountAsync();

    var contacts = await _context.Contacts
        .OrderByDescending(c => c.CreatedAt)
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .Select(c => new ContactDto { /* ... */ })
        .ToListAsync();

    return Ok(new PagedResult<ContactDto>
    {
        Items = contacts,
        TotalCount = totalCount,
        Page = page,
        PageSize = pageSize
    });
}
```

### Caching en Backend

```csharp
// Memory cache para datos que no cambian frecuentemente
services.AddMemoryCache();

public class CachedContactService : IContactService
{
    private readonly IMemoryCache _cache;
    private readonly IContactService _contactService;

    public async Task<IEnumerable<ContactDto>> GetRecentContactsAsync()
    {
        return await _cache.GetOrCreateAsync(
            "recent-contacts",
            async entry =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5);
                return await _contactService.GetRecentContactsAsync();
            });
    }
}
```

---

## Bundle Size Optimization

### Analyze Bundle

```bash
# Webpack Bundle Analyzer (si se usa bundler)
npm install --save-dev webpack-bundle-analyzer

# Ver tamaño de archivos
du -sh assets/css/* assets/js/*
```

### Targets

| Asset Type | Target Size | Max Size |
|------------|-------------|----------|
| HTML (por página) | < 50 KB | 100 KB |
| CSS (total) | < 75 KB | 150 KB |
| JS (total) | < 100 KB | 200 KB |
| Font (por familia) | < 50 KB | 100 KB |

### Estrategias

1. **Inline critical resources** (< 14 KB)
2. **Defer non-critical JS**
3. **Lazy load below fold content**
4. **Use system fonts** como fallback
5. **Minify and compress** todo

---

## Lazy Loading

### Images

```javascript
// Lazy load images con Intersection Observer
class LazyLoader {
  constructor(selector = '[data-lazy]') {
    this.images = document.querySelectorAll(selector);
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      rootMargin: '50px'
    });

    this.images.forEach(img => this.observer.observe(img));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        this.loadImage(img);
        this.observer.unobserve(img);
      }
    });
  }

  loadImage(img) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;

    if (srcset) img.srcset = srcset;
    if (src) img.src = src;

    img.classList.add('loaded');
  }
}

// Initialize
new LazyLoader();
```

### Components

```javascript
// Lazy load components
const loadComponent = async (componentName) => {
  const module = await import(`./components/${componentName}.js`);
  return module.default;
};

// Load when needed
document.querySelectorAll('[data-component]').forEach(async el => {
  const componentName = el.dataset.component;
  const Component = await loadComponent(componentName);
  new Component(el);
});
```

---

## Monitoring y Alerts

### Google PageSpeed Insights API

```bash
# Automatizar auditorías
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://io-tech.com.mx&strategy=mobile"
```

### Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on: [pull_request]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://io-tech.com.mx
            https://io-tech.com.mx/servicios/
          uploadArtifacts: true
```

### WebPageTest

Script automatizado para testing:

```bash
# webpagetest.sh
#!/bin/bash

API_KEY="YOUR_API_KEY"
URL="https://io-tech.com.mx"

# Run test
RESULT=$(curl "https://www.webpagetest.org/runtest.php?url=$URL&k=$API_KEY&f=json")

echo "WebPageTest initiated: $RESULT"
```

### Real User Monitoring (RUM)

```javascript
// Track Core Web Vitals
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to Google Analytics
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

---

## Performance Budget

### Targets por Página

| Página | LCP | FID | CLS | Total Size |
|--------|-----|-----|-----|------------|
| Homepage | < 2.0s | < 80ms | < 0.05 | < 500 KB |
| Servicio | < 2.2s | < 90ms | < 0.08 | < 400 KB |
| Contacto | < 2.5s | < 100ms | < 0.1 | < 350 KB |
| Blog Post | < 2.3s | < 90ms | < 0.1 | < 600 KB |

### Enforcement

```javascript
// performance-budget.json
{
  "budgets": [
    {
      "path": "/*",
      "resourceSizes": [
        {"resourceType": "document", "budget": 50},
        {"resourceType": "stylesheet", "budget": 75},
        {"resourceType": "script", "budget": 100},
        {"resourceType": "image", "budget": 300},
        {"resourceType": "font", "budget": 100},
        {"resourceType": "total", "budget": 500}
      ],
      "timings": [
        {"metric": "first-contentful-paint", "budget": 1800},
        {"metric": "largest-contentful-paint", "budget": 2500},
        {"metric": "interactive", "budget": 3800}
      ]
    }
  ]
}
```

---

## Checklist de Optimización

### Critical Path
- [ ] Preconnect a orígenes críticos
- [ ] Preload recursos críticos
- [ ] Inline critical CSS (< 14KB)
- [ ] Defer non-critical JS
- [ ] Async external scripts

### Images
- [ ] WebP/AVIF para todas las imágenes
- [ ] Responsive images (srcset)
- [ ] Lazy loading (below fold)
- [ ] Dimensiones explícitas (width/height)
- [ ] Compresión optimizada (85% quality)

### CSS
- [ ] Minificación
- [ ] Purge unused CSS
- [ ] Critical CSS inline
- [ ] font-display: swap

### JavaScript
- [ ] Minificación
- [ ] Code splitting
- [ ] Lazy loading de components
- [ ] Debounce/throttle event handlers

### Caching
- [ ] Cache headers configurados
- [ ] Asset versioning
- [ ] CDN configurado
- [ ] Service Worker (opcional)

### Backend
- [ ] Database indexes
- [ ] Query optimization
- [ ] API pagination
- [ ] Response compression

### Monitoring
- [ ] Lighthouse CI setup
- [ ] Core Web Vitals tracking
- [ ] Performance budget defined
- [ ] Alerts configurados

---

**Última actualización**: Octubre 2025
**Versión**: 1.0
**Estado**: Guía de performance completa

---

✨ **Performance Optimization - IO-TECH** ✨
