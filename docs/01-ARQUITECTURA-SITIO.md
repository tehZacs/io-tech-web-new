# 01 - ARQUITECTURA DEL SITIO

← [Volver al Plan Maestro](00-PLAN-MAESTRO.md)

---

## Mapa del Sitio

### Estructura Completa

```
io-tech.com/
│
├── index.html (Home)
│
├── servicios/
│   ├── index.html (Servicios Overview)
│   ├── infraestructura-nube.html
│   ├── desarrollo-software.html
│   ├── inteligencia-negocio.html
│   ├── experiencia-digital.html
│   ├── ciberseguridad.html
│   └── consultoria.html
│
├── soluciones/
│   ├── index.html (Soluciones por Industria)
│   ├── gobierno.html
│   ├── sector-privado.html
│   └── casos-exito.html
│
├── nosotros/
│   ├── index.html (Quiénes Somos)
│   ├── equipo.html
│   ├── certificaciones.html
│   └── partners.html
│
├── recursos/
│   ├── index.html (Centro de Recursos)
│   ├── blog/
│   │   └── index.html
│   ├── whitepapers.html
│   └── webinars.html
│
├── contacto/
│   └── index.html
│
└── assets/
    ├── css/
    ├── js/
    ├── img/
    └── fonts/
```

---

## Estructura de Carpetas del Proyecto

```
io-tech-web/
│
├── index.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── humans.txt
│
├── pages/
│   ├── servicios/
│   │   ├── index.html
│   │   ├── infraestructura-nube.html
│   │   ├── desarrollo-software.html
│   │   ├── inteligencia-negocio.html
│   │   ├── experiencia-digital.html
│   │   ├── ciberseguridad.html
│   │   └── consultoria.html
│   │
│   ├── soluciones/
│   │   ├── index.html
│   │   ├── gobierno.html
│   │   ├── sector-privado.html
│   │   └── casos-exito.html
│   │
│   ├── nosotros/
│   │   ├── index.html
│   │   ├── equipo.html
│   │   ├── certificaciones.html
│   │   └── partners.html
│   │
│   ├── recursos/
│   │   ├── index.html
│   │   ├── blog/
│   │   │   └── index.html
│   │   ├── whitepapers.html
│   │   └── webinars.html
│   │
│   └── contacto/
│       └── index.html
│
├── components/
│   ├── header.js
│   ├── footer.js
│   ├── nav.js
│   ├── hero.js
│   ├── service-card.js
│   ├── cta-section.js
│   ├── testimonial.js
│   ├── stats.js
│   ├── contact-form.js
│   ├── modal.js
│   ├── lazy-load.js
│   ├── accordion.js
│   ├── tabs.js
│   └── filter-grid.js
│
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── variables.css
│   │   ├── components.css
│   │   ├── utilities.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── app.js (Inicializador principal)
│   │   ├── router.js (SPA routing opcional)
│   │   ├── components.js (Registro de componentes)
│   │   ├── utils.js
│   │   ├── analytics.js
│   │   └── lazy-load.js
│   │
│   ├── img/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── team/
│   │   ├── clients/
│   │   ├── partners/
│   │   ├── certifications/
│   │   ├── cases/
│   │   └── icons/
│   │
│   └── fonts/
│       ├── inter/
│       ├── poppins/
│       └── fira-code/
│
├── api/
│   └── (Backend .NET - ver 07-BACKEND-NET.md)
│
└── docs/
    ├── 00-PLAN-MAESTRO.md
    ├── 01-ARQUITECTURA-SITIO.md (este)
    ├── 02-ESTRUCTURA-PAGINAS.md
    ├── 03-SISTEMA-COMPONENTES.md
    ├── 04-ESTRATEGIA-SEO.md
    ├── 05-STACK-TECNOLOGICO.md
    ├── 06-DESIGN-SYSTEM.md
    ├── 07-BACKEND-NET.md
    ├── 08-PERFORMANCE.md
    └── 09-PLAN-IMPLEMENTACION.md
```

---

## Jerarquía de Páginas

### Nivel 1: Homepage
- `/` - Página principal

### Nivel 2: Secciones principales
- `/servicios/` - Portafolio de servicios
- `/soluciones/` - Soluciones por industria
- `/nosotros/` - Acerca de IO-TECH
- `/recursos/` - Centro de recursos (blog)
- `/contacto/` - Contacto

### Nivel 3: Páginas específicas

**Servicios (6 páginas)**:
- `/servicios/infraestructura-nube/`
- `/servicios/desarrollo-software/`
- `/servicios/inteligencia-negocio/`
- `/servicios/experiencia-digital/`
- `/servicios/ciberseguridad/`
- `/servicios/consultoria/`

**Soluciones (3 páginas)**:
- `/soluciones/gobierno/`
- `/soluciones/sector-privado/`
- `/soluciones/casos-exito/`

**Nosotros (3 páginas)**:
- `/nosotros/equipo/`
- `/nosotros/certificaciones/`
- `/nosotros/partners/`

**Recursos**:
- `/recursos/blog/` (artículos dinámicos)
- `/recursos/whitepapers/`
- `/recursos/webinars/`

---

## Convenciones de Nomenclatura

### URLs

**Formato**: Lowercase, guiones, sin caracteres especiales

```
✅ CORRECTO:
/servicios/infraestructura-nube/
/soluciones/casos-exito/
/blog/migracion-nube-aws/

❌ INCORRECTO:
/Servicios/Infraestructura_Nube/
/soluciones/casosExito/
/blog/Migraci%C3%B3n-Nube-AWS/
```

### Archivos

**HTML**: kebab-case
```
infraestructura-nube.html
casos-exito.html
```

**CSS**: kebab-case
```
main.css
variables.css
design-system.css
```

**JavaScript**: kebab-case para archivos, camelCase para código
```
contact-form.js (archivo)
class ContactForm {} (código)
```

**Imágenes**: kebab-case, descriptivo
```
hero-home-1920.webp
service-cloud-icon.svg
client-logo-telmex.png
```

---

## Organización de Assets

### CSS

```
assets/css/
├── variables.css      # Variables CSS (colores, fuentes, etc.)
├── reset.css          # CSS reset/normalize
├── typography.css     # Estilos de tipografía
├── layout.css         # Grid, containers, spacing
├── components.css     # Estilos de componentes
├── utilities.css      # Clases utilitarias
├── responsive.css     # Media queries
└── main.css           # Import de todos los anteriores
```

### JavaScript

```
assets/js/
├── app.js             # Inicializador principal
├── config.js          # Configuración global
├── utils.js           # Funciones utilitarias
├── api.js             # Llamadas a API
├── analytics.js       # Google Analytics, tracking
└── components/
    ├── header.js
    ├── footer.js
    ├── contact-form.js
    └── ...
```

### Imágenes

```
assets/img/
├── hero/
│   ├── home-hero-1920.webp
│   ├── home-hero-1920.jpg (fallback)
│   ├── home-hero-1200.webp
│   └── ...
│
├── services/
│   ├── infraestructura-nube.svg
│   ├── desarrollo-software.svg
│   └── ...
│
├── team/
│   ├── ceo-photo.jpg
│   └── ...
│
├── clients/
│   ├── logo-telmex.svg
│   ├── logo-banorte.svg
│   └── ...
│
├── partners/
│   ├── logo-aws.svg
│   ├── logo-azure.svg
│   └── ...
│
├── certifications/
│   ├── iso-9001.svg
│   ├── iso-27001.svg
│   └── ...
│
└── icons/
    ├── arrow-right.svg
    ├── check.svg
    └── ...
```

---

## Navegación del Sitio

### Navegación Principal (Header)

```
├── Inicio (/)
├── Servicios ▼ (mega menu)
│   ├── Ver todos los servicios (/servicios/)
│   ├── Infraestructura y Nube
│   ├── Desarrollo de Software
│   ├── Inteligencia de Negocio
│   ├── Experiencia Digital
│   ├── Ciberseguridad
│   └── Consultoría
│
├── Soluciones ▼
│   ├── Por Industria (/soluciones/)
│   ├── Gobierno
│   ├── Sector Privado
│   └── Casos de Éxito
│
├── Nosotros ▼
│   ├── Quiénes Somos (/nosotros/)
│   ├── Certificaciones
│   └── Partners
│
├── Recursos (/recursos/)
│
└── [Contacto] (botón CTA)
```

### Navegación Footer

**Columna 1: Servicios**
- Infraestructura y Nube
- Desarrollo de Software
- Inteligencia de Negocio
- Experiencia Digital
- Ciberseguridad
- Consultoría

**Columna 2: Empresa**
- Quiénes Somos
- Certificaciones
- Partners
- Casos de Éxito

**Columna 3: Recursos**
- Blog
- Whitepapers
- Contacto

**Columna 4: Legal**
- Aviso de Privacidad
- Términos y Condiciones

---

## Flujos de Usuario

### Usuario Nuevo (Primera Visita)

```
1. Landing en Home
   ↓
2. Hero: Entiende propuesta de valor
   ↓
3. Scroll: Ve servicios principales
   ↓
4. Click: Servicio de interés
   ↓
5. Lee: Detalles del servicio
   ↓
6. Decide: CTA "Solicitar Consultoría"
   ↓
7. Completa: Formulario de contacto
   ↓
8. Confirmación: Thank you page
```

### Usuario Retornante (Investigación)

```
1. Landing en Home/Búsqueda
   ↓
2. Navegación: Casos de Éxito
   ↓
3. Filtra: Por industria/servicio
   ↓
4. Lee: Caso específico
   ↓
5. Explora: Más servicios
   ↓
6. Descarga: Whitepaper (lead magnet)
   ↓
7. Newsletter: Suscripción
```

### Usuario Decisor (Listo para contratar)

```
1. Landing directa: /contacto/ (desde email/ad)
   ↓
2. Completa: Formulario detallado
   ↓
3. Agendar: Videollamada con equipo
```

---

## Patrones de URLs

### Páginas Estáticas

```
/                                    # Home
/servicios/                          # Servicios overview
/servicios/{nombre-servicio}/        # Servicio específico
/soluciones/                         # Soluciones overview
/soluciones/{industria}/             # Industria específica
/nosotros/                           # About
/contacto/                           # Contact
```

### Contenido Dinámico (Blog)

```
/recursos/                           # Blog home
/recursos/blog/                      # Blog listing
/recursos/blog/{slug}/               # Artículo individual
/recursos/blog/categoria/{nombre}/   # Categoría
```

### Casos de Éxito

```
/soluciones/casos-exito/             # Listing
/soluciones/casos-exito/{slug}/      # Caso individual
```

---

## Breadcrumbs

Implementar breadcrumbs en todas las páginas (excepto home) para:
- Navegación mejorada
- SEO (Schema.org BreadcrumbList)
- Contexto de ubicación

**Ejemplos**:

```
Home > Servicios > Infraestructura y Nube

Home > Soluciones > Casos de Éxito > Migración Cloud Gobierno

Home > Recursos > Blog > Guía de Migración a AWS
```

---

## Sitemap Visual

```
                    ┌─────────┐
                    │  HOME   │
                    └────┬────┘
                         │
      ┌──────────────────┼──────────────────┐
      │                  │                  │
 ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
 │SERVICIOS│       │SOLUCIO. │       │NOSOTROS │
 └────┬────┘       └────┬────┘       └────┬────┘
      │                  │                  │
 ┌────┼────┐        ┌───┼───┐         ┌───┼───┐
 │    │    │        │   │   │         │   │   │
 6 Servicios   Industrias  Casos   Equipo Cert Partners
```

---

## Prioridades de Desarrollo

### Fase 1 (Crítico)
1. Home
2. Servicios overview
3. 1-2 páginas de servicios (templates)
4. Contacto

### Fase 2 (Importante)
5. Restantes páginas de servicios
6. Nosotros
7. Soluciones overview
8. Casos de éxito (2-3 ejemplos)

### Fase 3 (Nice to have)
9. Blog structure
10. Primeros artículos (5-10)
11. Certificaciones
12. Partners

---

## Redirects y URLs Canónicas

### Redirects 301 (Permanentes)

```
# Trailing slash consistency
/servicios → /servicios/
/contacto → /contacto/

# HTTPS enforcement
http://io-tech.mx → https://io-tech.mx

# WWW consistency (elegir uno)
www.io-tech.mx → io-tech.mx
```

### Canonical URLs

Todas las páginas deben tener tag canonical:

```html
<link rel="canonical" href="https://io-tech.mx/servicios/infraestructura-nube/">
```

---

## Notas de Implementación

### Single Page App (SPA) vs Multi-Page

**Decisión**: Multi-Page Application (MPA) tradicional

**Razones**:
- ✅ Mejor SEO out-of-the-box
- ✅ Más simple de mantener
- ✅ No requiere framework pesado
- ✅ Progressive enhancement
- ✅ Works sin JavaScript

**Opcional**: Usar router ligero vanilla JS para transiciones suaves

---

## Próximos Pasos

1. ✅ Revisar arquitectura propuesta
2. 📄 Ver estructura detallada de páginas → [02-ESTRUCTURA-PAGINAS.md](02-ESTRUCTURA-PAGINAS.md)
3. 🧩 Revisar componentes → [03-SISTEMA-COMPONENTES.md](03-SISTEMA-COMPONENTES.md)
4. 🔍 Revisar estrategia SEO → [04-ESTRATEGIA-SEO.md](04-ESTRATEGIA-SEO.md)

---

← [Volver al Plan Maestro](00-PLAN-MAESTRO.md)
