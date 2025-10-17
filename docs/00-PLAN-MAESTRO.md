# PLAN MAESTRO - SITIO WEB IO-TECH 2025

## Resumen Ejecutivo

IO-TECH es el nuevo frente comercial que atiende a los clientes del consorcio Engine Core. Este plan maestro documenta la estrategia completa para el desarrollo del sitio web corporativo.

### Objetivos del Sitio

1. **Convertir** - Generar leads calificados mediante CTAs estratégicos
2. **Informar** - Comunicar servicios tecnológicos de forma clara y profesional
3. **Posicionar** - Ser encontrados en búsquedas B2B y G2C en tecnología
4. **Ser Descubrible** - Optimizado para LLMs (ChatGPT, Claude, Gemini)
5. **Mantener** - Código simple, modular y mantenible
6. **Escalar** - Arquitectura preparada para crecimiento

---

## Documentación del Proyecto

Este plan se divide en documentos modulares para facilitar la navegación y mantenimiento:

### 📋 Documentos Principales

| # | Documento | Descripción | Estado |
|---|-----------|-------------|--------|
| 00 | **PLAN-MAESTRO.md** (este) | Índice general y resumen ejecutivo | ✅ |
| 01 | [**ARQUITECTURA-SITIO.md**](01-ARQUITECTURA-SITIO.md) | Mapa del sitio y estructura de carpetas | ✅ |
| 02 | [**ESTRUCTURA-PAGINAS.md**](02-ESTRUCTURA-PAGINAS.md) | Detalle de cada página con secciones | ✅ |
| -- | [**TEMPLATE-REFERENCE.md**](TEMPLATE-REFERENCE.md) | Análisis templates Untitled UI y patrones | ✅ |
| 03 | [**SISTEMA-COMPONENTES.md**](03-SISTEMA-COMPONENTES.md) | Componentes vanilla JS reutilizables | ⏳ |
| 04 | [**ESTRATEGIA-SEO.md**](04-ESTRATEGIA-SEO.md) | SEO y optimización para LLMs | ⏳ |
| 05 | [**STACK-TECNOLOGICO.md**](05-STACK-TECNOLOGICO.md) | Frontend, Backend, Hosting | ⏳ |
| 06 | [**DESIGN-SYSTEM.md**](06-DESIGN-SYSTEM.md) | UI/UX, colores, tipografía, componentes | ⏳ |
| 07 | [**BACKEND-NET.md**](07-BACKEND-NET.md) | Arquitectura .NET y APIs | ⏳ |
| 08 | [**PERFORMANCE.md**](08-PERFORMANCE.md) | Optimización de performance | ⏳ |
| 09 | [**PLAN-IMPLEMENTACION.md**](09-PLAN-IMPLEMENTACION.md) | Fases, timeline y checklist | ⏳ |

---

## Principios de Diseño

### Stack Tecnológico

- **Frontend**: HTML5 + CSS3 + Vanilla JavaScript (ES6+)
- **Backend**: .NET Core 8.0 (API RESTful)
- **Base de Datos**: SQL Server
- **Hosting**: Azure App Service / Netlify

### Arquitectura

- **Componentes reutilizables** con vanilla JS (NO React/Vue/Angular)
- **Mobile-first** responsive design
- **Progressive enhancement**
- **SEO-first** desde el inicio
- **Accesibilidad** WCAG 2.1 AA

---

## Estructura del Sitio (Resumen)

```
io-tech.com/
│
├── index.html (Home)
├── servicios/
│   ├── index.html
│   ├── infraestructura-nube.html
│   ├── desarrollo-software.html
│   ├── inteligencia-negocio.html
│   ├── experiencia-digital.html
│   ├── ciberseguridad.html
│   └── consultoria.html
│
├── soluciones/
│   ├── index.html
│   ├── gobierno.html
│   ├── sector-privado.html
│   └── casos-exito.html
│
├── nosotros/
│   ├── index.html
│   ├── certificaciones.html
│   └── partners.html
│
├── recursos/
│   ├── index.html (blog)
│   └── blog/
│
└── contacto/
    └── index.html
```

Ver detalles completos en [01-ARQUITECTURA-SITIO.md](01-ARQUITECTURA-SITIO.md)

---

## Servicios de IO-TECH

Basados en el portafolio de Engine Core:

1. **Infraestructura y Nube**
   - Migración a nube (AWS, Azure, Google Cloud)
   - Administración multi-cloud
   - DRP y BCP

2. **Desarrollo de Software**
   - Software a medida
   - Modernización de aplicaciones legacy
   - DevOps y CI/CD

3. **Inteligencia de Negocio**
   - Business Intelligence
   - Data Analytics
   - Machine Learning

4. **Experiencia Digital**
   - CRM y Contact Center
   - ERP (SAP, Oracle, Odoo)
   - Sistemas de gestión inteligente

5. **Ciberseguridad**
   - SOC (Security Operations Center)
   - Pentesting
   - Gestión de vulnerabilidades

6. **Consultoría**
   - Gobierno de TI
   - PMO
   - Arquitectura empresarial

---

## Diferenciadores Clave

### Certificaciones

- ISO 9001, 15504, 20001, 22301, 27001, 37001
- CMMI DEV/5, CMMI SVC/5
- ISTQB Platinum Partner
- Great Place to Work
- Best Place to Code

### Equipo

- **+200** Especialistas Técnicos
- **+400** Certificaciones profesionales
- **7 años** de experiencia
- Metodologías ágiles (Scrum, PMP)

### Partners Tecnológicos

- **Cloud**: AWS, Azure, Google Cloud, Oracle Cloud
- **Software**: SAP, Oracle, Odoo
- **Security**: Fortinet, Palo Alto, Sophos, Trend Micro
- **Infrastructure**: VMware, Nutanix, Dell, IBM

---

## Métricas de Éxito

### KPIs Técnicos

| Métrica | Target |
|---------|--------|
| Lighthouse Score | > 90 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Páginas indexadas | 100% |

### KPIs de Negocio

| Métrica | Target |
|---------|--------|
| Leads por mes | > 50 |
| Conversion rate | > 3% |
| Bounce rate | < 50% |
| Organic traffic growth | +30% MoM |

---

## Timeline del Proyecto

| Fase | Duración | Entregables Clave |
|------|----------|-------------------|
| **Fase 1: Fundación** | Semanas 1-2 | Design system, componentes core, homepage estructura |
| **Fase 2: Páginas Core** | Semanas 3-4 | Homepage completa, servicios, contacto funcional |
| **Fase 3: Contenido y SEO** | Semanas 5-6 | Todo el contenido, blog, casos de éxito, SEO |
| **Fase 4: Optimización** | Semana 7 | Performance, accessibility, testing |
| **Fase 5: Deploy** | Semana 8 | Producción, analytics, monitoring |

**Total: 8 semanas**

Ver plan detallado en [09-PLAN-IMPLEMENTACION.md](09-PLAN-IMPLEMENTACION.md)

---

## Componentes Principales

Sistema de componentes reutilizables en vanilla JavaScript:

- **Header** - Navegación sticky con mega menu
- **Footer** - Multi-columna con newsletter
- **Service Card** - Tarjetas de servicios
- **CTA Section** - Llamadas a acción
- **Contact Form** - Formulario multi-step
- **Stats Counter** - Números animados
- **Modal** - Para casos de éxito
- **Lazy Load** - Imágenes diferidas

Ver documentación completa en [03-SISTEMA-COMPONENTES.md](03-SISTEMA-COMPONENTES.md)

---

## Estrategia SEO

### On-Page SEO

- Meta titles optimizados (50-60 chars)
- Meta descriptions atractivas (150-160 chars)
- Headers jerárquicos (H1 único, H2-H6)
- URLs amigables y descriptivas
- Schema.org markup (Organization, Service, Article, FAQ)
- Internal linking strategy

### Optimización para LLMs

- Structured data comprehensivo
- Contenido en formato pregunta-respuesta
- Breadcrumbs para contexto
- Metadata de entidades
- robots.txt con permisos para GPTBot, ClaudeBot, etc.

Ver estrategia completa en [04-ESTRATEGIA-SEO.md](04-ESTRATEGIA-SEO.md)

---

## Design System

### Colores Primarios

- **Primary Blue**: #1976D2 (basado en Engine Core)
- **Accent**: #00BCD4 (celeste vibrante)
- **Neutrals**: Escala de grises
- **Semantic**: Success, Warning, Error, Info

### Tipografía

- **Headings**: Poppins (bold, semibold)
- **Body**: Inter (regular, medium)
- **Code**: Fira Code

### Componentes UI

- Buttons (primary, secondary, sizes)
- Cards (con hover effects)
- Forms (inputs, selects, textareas)
- Modals y overlays
- Loaders y estados

Ver design system completo en [06-DESIGN-SYSTEM.md](06-DESIGN-SYSTEM.md)

---

## Backend .NET

### API Endpoints

```
POST /api/contact
GET  /api/blog/posts
GET  /api/blog/posts/{slug}
POST /api/newsletter/subscribe
```

### Arquitectura

- ASP.NET Core 8.0
- Entity Framework Core
- SQL Server
- SendGrid para emails
- JWT para autenticación (si necesario)

Ver arquitectura completa en [07-BACKEND-NET.md](07-BACKEND-NET.md)

---

## Próximos Pasos

1. ✅ **Revisar este plan maestro**
2. 📖 **Leer documentos específicos** según área de interés
3. 🎨 **Aprobar design system** (colores, tipografía)
4. 📝 **Revisar contenido** de páginas principales
5. 🚀 **Iniciar Fase 1** - Fundación

---

## Contacto del Proyecto

**Cliente**: IO-TECH
**Basado en**: Portafolio Engine Core 2025
**Fecha**: Enero 2025
**Versión**: 1.0

---

## Changelog

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2025-01-XX | Creación del plan maestro y documentos modulares |

---

**Navega a los documentos específicos para ver el detalle de cada área del proyecto.**
