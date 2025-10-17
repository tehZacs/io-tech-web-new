# 04 - ESTRATEGIA SEO - IO-TECH

## 📋 Índice

1. [Estrategia General](#estrategia-general)
2. [SEO On-Page](#seo-on-page)
3. [SEO Técnico](#seo-técnico)
4. [Schema Markup](#schema-markup)
5. [Optimización para LLMs](#optimización-para-llms)
6. [Contenido y Keywords](#contenido-y-keywords)
7. [Performance y Core Web Vitals](#performance-y-core-web-vitals)
8. [Monitoreo y Métricas](#monitoreo-y-métricas)

---

## Estrategia General

### Objetivos SEO

1. **Ranking B2B**: Posicionar en búsquedas de servicios tecnológicos empresariales
2. **Ranking G2C**: Ser encontrados por entidades de gobierno
3. **LLM Discovery**: Optimizar para que Claude, ChatGPT, Gemini puedan encontrarnos y recomendarnos
4. **Local SEO**: Posicionamiento en México (CDMX y zonas metropolitanas)
5. **Long-tail keywords**: Capturar tráfico específico de servicios especializados

### Keywords Principales

**Categoría 1: Servicios Cloud**
- migración a la nube México
- administración multi-cloud
- servicios AWS Azure México
- disaster recovery cloud

**Categoría 2: Desarrollo Software**
- desarrollo software a medida
- modernización aplicaciones legacy
- DevOps México
- consultoría desarrollo software

**Categoría 3: Inteligencia de Negocio**
- business intelligence México
- data analytics empresarial
- machine learning empresas
- big data consultoría

**Categoría 4: Ciberseguridad**
- SOC servicios México
- pentesting empresarial
- ciberseguridad empresas México
- consultoría seguridad informática

**Categoría 5: Consultoría**
- consultoría TI México
- gobierno de TI
- PMO tecnología
- arquitectura empresarial México

---

## SEO On-Page

### 1. Meta Tags Template

```html
<!-- Homepage -->
<title>IO-TECH | Soluciones Tecnológicas Empresariales en México</title>
<meta name="description" content="Especialistas en transformación digital con +200 expertos certificados. Servicios de cloud, desarrollo, ciberseguridad y consultoría TI para empresas y gobierno en México.">

<!-- Service Page Template -->
<title>[Servicio] | Servicios de [Categoría] | IO-TECH</title>
<meta name="description" content="[Descripción del servicio en 150-160 caracteres con beneficios clave y call to action]">

<!-- Ejemplo: Infraestructura y Nube -->
<title>Infraestructura y Nube | Migración Multi-Cloud | IO-TECH</title>
<meta name="description" content="Servicios de migración y administración multi-cloud (AWS, Azure, Google Cloud). DRP, optimización y soporte 24/7 con +7 años de experiencia en México.">
```

### 2. Open Graph (Redes Sociales)

```html
<!-- OG Tags -->
<meta property="og:site_name" content="IO-TECH">
<meta property="og:type" content="website">
<meta property="og:url" content="https://io-tech.com.mx/[página]">
<meta property="og:title" content="[Título optimizado para social]">
<meta property="og:description" content="[Descripción social 150-160 chars]">
<meta property="og:image" content="https://io-tech.com.mx/assets/img/og-image.jpg">
<meta property="og:image:alt" content="IO-TECH - Soluciones Tecnológicas">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@iotech_mx">
<meta name="twitter:title" content="[Título]">
<meta name="twitter:description" content="[Descripción]">
<meta name="twitter:image" content="https://io-tech.com.mx/assets/img/og-image.jpg">
```

### 3. Canonical URLs

```html
<link rel="canonical" href="https://io-tech.com.mx/[página-actual]">
```

### 4. Headings Structure

```html
<!-- Homepage -->
<h1>Transformamos Ideas en Soluciones Tecnológicas de Alto Impacto</h1>
  <h2>Nuestros Servicios</h2>
    <h3>Infraestructura y Nube</h3>
    <h3>Desarrollo de Software</h3>
    <!-- ... -->
  <h2>Por Qué IO-TECH</h2>
    <h3>Experiencia Comprobada</h3>
    <!-- ... -->

<!-- Service Page -->
<h1>Infraestructura y Nube - Servicios Multi-Cloud</h1>
  <h2>¿Qué ofrecemos?</h2>
    <h3>Migración a la Nube</h3>
    <h3>Administración Multi-Cloud</h3>
    <!-- ... -->
  <h2>Beneficios</h2>
  <h2>Casos de Éxito</h2>
```

**Reglas:**
- Solo un `<h1>` por página
- Jerarquía lógica (no saltar niveles)
- Keywords naturalmente integradas
- Descriptivos pero concisos

### 5. Internal Linking

```html
<!-- Contextual links -->
<p>
  Nuestros servicios de <a href="/servicios/infraestructura-nube/" title="Infraestructura y Nube">infraestructura cloud</a>
  incluyen <a href="/servicios/ciberseguridad/" title="Ciberseguridad">ciberseguridad avanzada</a>.
</p>

<!-- Breadcrumbs -->
<nav aria-label="breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Inicio</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/servicios/">
        <span itemprop="name">Servicios</span>
      </a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">Infraestructura y Nube</span>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
```

### 6. Alt Text para Imágenes

```html
<!-- Descriptivo y con keywords cuando aplique -->
<img
  src="/assets/img/services/infraestructura-nube.jpg"
  alt="Diagrama de arquitectura multi-cloud con AWS, Azure y Google Cloud para IO-TECH"
  loading="lazy"
  width="800"
  height="600"
>

<!-- Logo -->
<img
  src="/assets/img/logo-io-tech-color.svg"
  alt="IO-TECH - Soluciones Tecnológicas"
  width="200"
  height="50"
>

<!-- Decorativo -->
<img
  src="/assets/img/decorative-pattern.svg"
  alt=""
  aria-hidden="true"
>
```

---

## SEO Técnico

### 1. robots.txt

```txt
# robots.txt para IO-TECH

User-agent: *
Allow: /

# Permitir crawlers de LLMs
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

# Disallow admin y privado
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

Sitemap: https://io-tech.com.mx/sitemap.xml
```

### 2. Sitemap XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Homepage -->
  <url>
    <loc>https://io-tech.com.mx/</loc>
    <lastmod>2025-10-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Services Overview -->
  <url>
    <loc>https://io-tech.com.mx/servicios/</loc>
    <lastmod>2025-10-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Individual Services -->
  <url>
    <loc>https://io-tech.com.mx/servicios/infraestructura-nube/</loc>
    <lastmod>2025-10-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Más URLs... -->
</urlset>
```

### 3. HTTPS y Seguridad

```html
<!-- Configuración de headers HTTP (server-side) -->
```

**Headers requeridos:**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com;
Referrer-Policy: strict-origin-when-cross-origin
```

### 4. Structured Data (JSON-LD)

Ver sección completa de Schema Markup abajo.

---

## Schema Markup

### 1. Organization Schema (Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IO-TECH",
  "legalName": "IO-TECH Soluciones Tecnológicas S.A. de C.V.",
  "url": "https://io-tech.com.mx",
  "logo": "https://io-tech.com.mx/assets/img/logo-io-tech-color.svg",
  "foundingDate": "2018",
  "description": "Empresa líder en transformación digital con más de 7 años de experiencia en México. Especialistas en cloud, desarrollo de software, ciberseguridad y consultoría TI.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MX",
    "addressLocality": "Ciudad de México",
    "addressRegion": "CDMX"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+52-55-XXXX-XXXX",
    "contactType": "ventas",
    "areaServed": "MX",
    "availableLanguage": ["es", "en"]
  }],
  "sameAs": [
    "https://www.linkedin.com/company/iotech-mx",
    "https://twitter.com/iotech_mx"
  ],
  "knowsAbout": [
    "Cloud Computing",
    "Software Development",
    "Cybersecurity",
    "Business Intelligence",
    "IT Consulting"
  ],
  "slogan": "Transformamos Ideas en Soluciones Tecnológicas de Alto Impacto"
}
</script>
```

### 2. Service Schema (Service Pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Infraestructura y Nube",
  "provider": {
    "@type": "Organization",
    "name": "IO-TECH",
    "url": "https://io-tech.com.mx"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://io-tech.com.mx/contacto/"
  },
  "description": "Servicios de migración a la nube, administración multi-cloud (AWS, Azure, Google Cloud), disaster recovery y optimización de infraestructura.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "MXN",
      "price": "Cotización a medida"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Infraestructura Cloud",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Migración a la Nube",
          "description": "Migración segura de aplicaciones y datos a AWS, Azure o Google Cloud"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Administración Multi-Cloud",
          "description": "Gestión integral de infraestructura en múltiples proveedores cloud"
        }
      }
    ]
  }
}
</script>
```

### 3. FAQPage Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Qué servicios de cloud computing ofrecen?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ofrecemos servicios de migración a la nube, administración multi-cloud (AWS, Azure, Google Cloud), disaster recovery planning, optimización de costos y soporte 24/7."
    }
  }, {
    "@type": "Question",
    "name": "¿Tienen experiencia con el sector gobierno?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sí, contamos con más de 7 años de experiencia trabajando con entidades gubernamentales mexicanas como FGR, SICT, SEP, Banco Bienestar, SEGOB, entre otras."
    }
  }, {
    "@type": "Question",
    "name": "¿Cuántos especialistas certificados tienen?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Contamos con más de 200 especialistas técnicos certificados y más de 400 certificaciones profesionales en tecnologías como AWS, Azure, Google Cloud, VMware, Fortinet y más."
    }
  }]
}
</script>
```

### 4. BreadcrumbList Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Inicio",
    "item": "https://io-tech.com.mx/"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Servicios",
    "item": "https://io-tech.com.mx/servicios/"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "Infraestructura y Nube",
    "item": "https://io-tech.com.mx/servicios/infraestructura-nube/"
  }]
}
</script>
```

---

## Optimización para LLMs

### 1. Markdown-Friendly Content

LLMs (Claude, ChatGPT, Gemini) procesan mejor contenido estructurado:

```html
<article class="prose" itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">Infraestructura y Nube - Servicios Multi-Cloud</h1>

  <div itemprop="articleBody">
    <h2>¿Qué es la Infraestructura Cloud?</h2>
    <p>
      La infraestructura cloud es un modelo de computación que permite el acceso
      bajo demanda a recursos tecnológicos compartidos (servidores, almacenamiento,
      redes) a través de internet.
    </p>

    <h2>Nuestros Servicios</h2>
    <ul>
      <li><strong>Migración a la Nube:</strong> Transición segura de aplicaciones legacy a AWS, Azure o Google Cloud</li>
      <li><strong>Administración Multi-Cloud:</strong> Gestión unificada de infraestructura en múltiples proveedores</li>
      <li><strong>Disaster Recovery:</strong> Planes de continuidad de negocio con RPO y RTO optimizados</li>
    </ul>

    <h2>Beneficios Clave</h2>
    <ol>
      <li><strong>Reducción de Costos:</strong> Hasta 40% en OPEX mediante optimización cloud</li>
      <li><strong>Escalabilidad:</strong> Infraestructura que crece con tu negocio</li>
      <li><strong>Seguridad:</strong> Cumplimiento de ISO 27001 y mejores prácticas</li>
    </ol>
  </div>
</article>
```

### 2. Rich Snippets y Entidades

Usar **marcado semántico** para que LLMs identifiquen entidades:

```html
<p>
  <span itemscope itemtype="https://schema.org/Organization">
    <span itemprop="name">IO-TECH</span>
  </span>
  cuenta con
  <span itemscope itemtype="https://schema.org/QuantitativeValue">
    <span itemprop="value">+200</span>
    <span itemprop="description">especialistas certificados</span>
  </span>
  y más de
  <span itemscope itemtype="https://schema.org/QuantitativeValue">
    <span itemprop="value">7</span>
    <span itemprop="unitText">años</span>
  </span>
  de experiencia.
</p>
```

### 3. Contexto Claro y Explícito

LLMs necesitan contexto explícito:

```html
<!-- ❌ MAL -->
<p>Trabajamos con FGR, SICT y SEP.</p>

<!-- ✅ BIEN -->
<p>
  IO-TECH ha trabajado con importantes entidades del gobierno mexicano como:
  <strong>Fiscalía General de la República (FGR)</strong>,
  <strong>Secretaría de Infraestructura, Comunicaciones y Transportes (SICT)</strong>, y
  <strong>Secretaría de Educación Pública (SEP)</strong>.
</p>
```

### 4. Q&A Format

Formato de preguntas/respuestas ayuda a LLMs:

```html
<section itemscope itemtype="https://schema.org/FAQPage">
  <h2>Preguntas Frecuentes</h2>

  <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">¿IO-TECH tiene experiencia con empresas del sector financiero?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">
        Sí, IO-TECH tiene experiencia comprobada trabajando con instituciones financieras
        líderes en México como Banorte, implementando soluciones de ciberseguridad, cloud
        computing y desarrollo de aplicaciones bancarias.
      </p>
    </div>
  </div>
</section>
```

### 5. Datos Estructurados Clave para LLMs

```json
{
  "company": "IO-TECH",
  "industry": "Technology Services",
  "headquarters": "Ciudad de México, México",
  "founded": 2018,
  "employees": "200+ technical specialists",
  "certifications": "400+ professional certifications",
  "standards": ["ISO 9001", "ISO 27001", "CMMI DEV/5", "CMMI SVC/5"],
  "services": [
    "Cloud Infrastructure",
    "Software Development",
    "Business Intelligence",
    "Digital Experience",
    "Cybersecurity",
    "IT Consulting"
  ],
  "clients": {
    "government": ["FGR", "SICT", "SEP", "SEGOB", "Banco Bienestar"],
    "private": ["Telmex", "Banorte", "AT&T", "Farmacias del Ahorro"]
  },
  "cloud_partners": ["AWS", "Azure", "Google Cloud", "Oracle Cloud"],
  "contact": "https://io-tech.com.mx/contacto/"
}
```

---

## Contenido y Keywords

### Keyword Research

| Keyword | Volume | Difficulty | Intención |
|---------|--------|------------|-----------|
| servicios cloud México | 880 | Media | Comercial |
| migración nube empresas | 590 | Media | Transaccional |
| desarrollo software a medida | 1200 | Alta | Comercial |
| consultoría TI México | 720 | Media | Informacional |
| ciberseguridad empresarial | 1400 | Alta | Comercial |
| business intelligence México | 960 | Media | Comercial |

### Content Strategy

**Pilar 1: Servicios (Páginas de Dinero)**
- `/servicios/infraestructura-nube/`
- `/servicios/desarrollo-software/`
- `/servicios/inteligencia-negocio/`
- (etc.)

**Pilar 2: Soluciones por Industria**
- `/soluciones/gobierno/`
- `/soluciones/sector-financiero/`
- `/soluciones/telecomunicaciones/`

**Pilar 3: Casos de Éxito**
- `/soluciones/casos-exito/migracion-cloud-fgr/`
- `/soluciones/casos-exito/soc-banorte/`

**Pilar 4: Blog/Recursos** (SEO y Lead Generation)
- `/recursos/blog/como-migrar-nube/`
- `/recursos/blog/ciberseguridad-empresas-2025/`
- `/recursos/blog/beneficios-multi-cloud/`

---

## Performance y Core Web Vitals

### 1. Largest Contentful Paint (LCP)

**Target:** < 2.5s

**Optimizaciones:**
```html
<!-- Preconnect a recursos externos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload recursos críticos -->
<link rel="preload" as="image" href="/assets/img/hero-background.jpg">
<link rel="preload" as="font" href="/assets/fonts/inter.woff2" type="font/woff2" crossorigin>

<!-- Lazy loading para imágenes no críticas -->
<img src="hero.jpg" loading="eager" fetchpriority="high" alt="...">
<img src="feature.jpg" loading="lazy" alt="...">
```

### 2. First Input Delay (FID)

**Target:** < 100ms

**Optimizaciones:**
- JavaScript mínimo en el critical path
- Defer/async para scripts no críticos
- Code splitting por página

```html
<script src="/assets/js/critical.js"></script>
<script src="/assets/js/app.js" type="module" defer></script>
```

### 3. Cumulative Layout Shift (CLS)

**Target:** < 0.1

**Optimizaciones:**
```html
<!-- Siempre especificar width y height -->
<img src="logo.svg" alt="IO-TECH" width="200" height="50">

<!-- Reservar espacio para contenido dinámico -->
<div class="ad-container" style="min-height: 250px;">
  <!-- Ad content -->
</div>
```

### 4. Compression y Minificación

```
# Server config (Apache/Nginx)
- Gzip/Brotli compression
- Minify HTML, CSS, JS
- Cache headers (1 year para assets con hash)
```

---

## Monitoreo y Métricas

### Herramientas

1. **Google Search Console**
   - Monitorear indexación
   - Identificar errores de crawl
   - Analizar queries y CTR

2. **Google Analytics 4**
   - Tráfico orgánico
   - Conversiones desde SEO
   - Páginas de entrada

3. **PageSpeed Insights**
   - Core Web Vitals
   - Performance score
   - Recomendaciones

4. **Ahrefs / SEMrush**
   - Keyword tracking
   - Backlinks monitoring
   - Competitor analysis

### KPIs SEO

| Métrica | Target Mes 3 | Target Mes 6 |
|---------|--------------|--------------|
| Organic Traffic | 1,000 visitas/mes | 3,000 visitas/mes |
| Keywords Ranking (Top 10) | 15 keywords | 40 keywords |
| Domain Authority | 25 | 35 |
| Page Speed Score | 85+ | 90+ |
| Conversion Rate (Organic) | 2% | 3.5% |

---

## Checklist de Implementación

### On-Page
- [ ] Titles optimizados (50-60 chars)
- [ ] Meta descriptions (150-160 chars)
- [ ] Headings structure (H1-H6)
- [ ] Alt text en imágenes
- [ ] Internal linking
- [ ] Canonical URLs
- [ ] Open Graph tags
- [ ] Schema markup (Organization, Service, FAQPage)

### Technical
- [ ] HTTPS configurado
- [ ] robots.txt optimizado (incluir LLM bots)
- [ ] sitemap.xml generado
- [ ] 404 page personalizada
- [ ] redirects 301 configurados
- [ ] Core Web Vitals < targets
- [ ] Mobile-friendly (responsive)
- [ ] Structured data sin errores

### Content
- [ ] Keywords research completo
- [ ] Content plan para blog
- [ ] FAQs en cada página de servicio
- [ ] Casos de éxito documentados
- [ ] CTAs claros en cada página

### Monitoring
- [ ] Google Search Console configurado
- [ ] Google Analytics 4 instalado
- [ ] Tracking de conversiones
- [ ] PageSpeed monitoring
- [ ] Rank tracking configurado

---

**Última actualización**: Octubre 2025
**Versión**: 1.0
**Estado**: Estrategia SEO completa - Lista para implementación

---

✨ **SEO y Optimización para LLMs - IO-TECH** ✨
