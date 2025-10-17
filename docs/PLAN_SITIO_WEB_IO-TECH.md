# PLAN ESTRATÉGICO SITIO WEB IO-TECH 2025

## ÍNDICE

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Arquitectura del Sitio](#arquitectura-del-sitio)
3. [Estructura de Páginas](#estructura-de-páginas)
4. [Sistema de Componentes](#sistema-de-componentes)
5. [Estrategia SEO y Optimización para LLMs](#estrategia-seo-y-optimización-para-llms)
6. [Stack Tecnológico](#stack-tecnológico)
7. [Diseño UI/UX](#diseño-uiux)
8. [Backend .NET](#backend-net)
9. [Optimización de Performance](#optimización-de-performance)
10. [Plan de Implementación](#plan-de-implementación)

---

## RESUMEN EJECUTIVO

IO-TECH es el nuevo frente comercial que atiende a los clientes del consorcio Engine Core. El sitio web debe:

- **Convertir**: Llamadas a acción estratégicas que guíen al usuario hacia la conversión
- **Informar**: Comunicar servicios tecnológicos de forma clara y profesional
- **Posicionar**: SEO optimizado para búsquedas B2B y G2C en tecnología
- **Ser descubrible**: Optimizado para LLMs (Claude, ChatGPT, etc.)
- **Mantener**: Código simple, modular y mantenible con vanilla JS
- **Escalar**: Arquitectura preparada para crecimiento

---

## ARQUITECTURA DEL SITIO

### Mapa del Sitio

```
io-tech.com/
│
├── index.html (Home)
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

### Estructura de Carpetas

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
│   ├── soluciones/
│   ├── nosotros/
│   ├── recursos/
│   └── contacto/
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
│   └── modal.js
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
│   │   └── icons/
│   │
│   └── fonts/
│
├── api/
│   └── (Backend .NET)
│
└── docs/
    └── PLAN_SITIO_WEB_IO-TECH.md
```

---

## ESTRUCTURA DE PÁGINAS

### 1. HOME (index.html)

**Objetivo**: Primera impresión poderosa, comunicar propuesta de valor, convertir visitantes en leads

**Secciones**:

1. **Hero Section**
   - Headline impactante: "Transformamos Ideas en Soluciones Tecnológicas de Alto Impacto"
   - Subheadline: "Más de 7 años impulsando la innovación digital en México"
   - CTA principal: "Solicitar Consultoría Gratuita"
   - CTA secundario: "Ver Casos de Éxito"
   - Imagen/video hero de alta calidad
   - Trust indicators: "+200 especialistas", "+400 certificaciones", "Clientes top"

2. **Value Proposition Strip**
   - 4 pilares visuales con iconos:
     - "Soluciones Escalables"
     - "Certificaciones Internacionales"
     - "Equipo Especializado"
     - "Resultados Medibles"

3. **Servicios Principales** (Grid Cards)
   - 6 tarjetas interactivas (hover effects):
     - Infraestructura y Nube
     - Desarrollo de Software
     - Inteligencia de Negocio
     - Experiencia Digital
     - Ciberseguridad
     - Consultoría
   - Cada card: icono, título, descripción corta, enlace "Conocer más"

4. **Stats Section** (Números que impresionan)
   - Animación counter on scroll:
     - +200 Especialistas Técnicos
     - +400 Certificaciones
     - 7 Años de Experiencia
     - 50+ Clientes Activos

5. **Casos de Éxito Destacados** (Carrusel)
   - 3-5 casos con:
     - Logo del cliente
     - Desafío
     - Solución implementada
     - Resultados (métricas)
     - CTA: "Ver caso completo"

6. **Certificaciones y Partners** (Logo Wall)
   - Logos de certificaciones: ISO 9001, ISO 27001, CMMI DEV/5, etc.
   - Logos de partners tecnológicos: AWS, Azure, Google Cloud, etc.
   - Movimiento sutil (parallax o slide infinito)

7. **Testimonios** (Slider)
   - Testimonios con:
     - Foto del cliente
     - Nombre y cargo
     - Empresa
     - Quote destacado
     - Rating visual

8. **CTA Final Potente**
   - Headline: "¿Listo para transformar tu infraestructura tecnológica?"
   - Formulario corto inline (Nombre, Email, Teléfono)
   - Botón: "Agendar Consultoría"
   - Nota de privacidad

9. **Blog/Recursos Recientes**
   - Últimos 3 artículos del blog
   - CTA: "Ver todos los recursos"

**Optimizaciones SEO**:
- Title: "IO-TECH | Soluciones Tecnológicas Empresariales México | Infraestructura, Desarrollo, Ciberseguridad"
- Meta description: "Transformamos organizaciones con soluciones tecnológicas escalables. +200 especialistas certificados. Infraestructura, desarrollo, BI, ciberseguridad y más."
- Schema.org: Organization, LocalBusiness, Service
- Open Graph completo
- Canonical URL

---

### 2. SERVICIOS OVERVIEW (servicios/index.html)

**Objetivo**: Presentar portfolio completo de servicios, facilitar navegación a detalles

**Secciones**:

1. **Hero Interno**
   - Breadcrumb: Home > Servicios
   - H1: "Servicios Integrales de Transformación Digital"
   - Descripción: Párrafo que posicione la amplitud de servicios
   - Visual: Gráfico de ecosistema de servicios

2. **Grid de Servicios** (6 cards expandibles)
   - Cada servicio con:
     - Icono distintivo
     - Título del servicio
     - Descripción de 2-3 líneas
     - Lista de "Verticales" principales (ej: Almacenamiento, Respaldos, Virtualización)
     - Beneficios clave (bullets)
     - CTA: "Ver detalles" → link a página específica

3. **Metodología de Trabajo**
   - Visual de proceso en 5 pasos:
     1. Diagnóstico
     2. Diseño de Solución
     3. Implementación
     4. Optimización
     5. Soporte Continuo

4. **Industrias que Atendemos**
   - Gobierno
   - Banca y Finanzas
   - Salud
   - Retail
   - Telecomunicaciones
   - Manufactura

5. **CTA Section**
   - "¿No encuentras lo que buscas?"
   - Formulario de contacto rápido

**SEO**:
- Title: "Servicios de Transformación Digital | Infraestructura, Desarrollo, BI, Ciberseguridad"
- Schema: Service, ItemList

---

### 3. SERVICIO ESPECÍFICO - INFRAESTRUCTURA Y NUBE (servicios/infraestructura-nube.html)

**Estructura tipo para cada servicio**:

1. **Hero Específico**
   - Breadcrumb: Home > Servicios > Infraestructura y Nube
   - H1: "Infraestructura y Nube"
   - Tagline: "Transformamos la infraestructura tecnológica con soluciones que escalan con seguridad"
   - CTA: "Solicitar Evaluación Gratuita"

2. **Descripción del Servicio**
   - 2-3 párrafos expandidos
   - Highlighted quote del portafolio

3. **Grandes Retos** (Empatía)
   - Cards con los 6 retos que mencionan:
     - Optimización de Costos
     - Capital Humano Especializado
     - Complejidad Multi-nube
     - Modernización Tecnológica
     - Seguridad y Cumplimiento
     - Continuidad del Negocio
   - Cada uno con icono y descripción

4. **Nuestra Solución** (Visual de capas/stack)
   - Verticales del Centro de Datos:
     - Almacenamiento, Respaldos, Virtualización
     - Sistemas Operativos, Bases de Datos
     - Capa Media, Aplicativo
     - Inteligencia de Negocio
     - Contenedores, DevOps
     - Redes, Seguridad, Monitoreo
     - Mesa de Servicio, DRP y BCP

5. **Beneficios Clave** (Icons + Descripción)
   - Atención experta con visión estratégica
   - Administración continua y flexible
   - Alta disponibilidad y continuidad
   - Reducción de riesgos

6. **Casos de Éxito Relacionados**
   - 2-3 casos específicos de este servicio

7. **Tecnologías y Partners**
   - Logos de tecnologías: AWS, Azure, Google Cloud, VMware, etc.

8. **FAQ del Servicio**
   - 5-7 preguntas frecuentes con Schema FAQ

9. **CTA Final**
   - Formulario especializado para este servicio
   - Checkboxes: "Migración a nube", "Optimización de costos", "DRP", etc.

**Repetir estructura similar para**:
- desarrollo-software.html
- inteligencia-negocio.html
- experiencia-digital.html
- ciberseguridad.html
- consultoria.html

**SEO por servicio**:
- Title específico: "Infraestructura y Nube | Migración, Administración, Multi-cloud | IO-TECH"
- Schema: Service con descripción extendida
- Internal linking hacia casos de éxito relacionados

---

### 4. SOLUCIONES POR INDUSTRIA (soluciones/index.html)

**Objetivo**: Segmentar por vertical de industria, mostrar expertise sectorial

**Secciones**:

1. **Hero**
   - H1: "Soluciones Tecnológicas por Industria"
   - "Expertise probado en sectores clave de México"

2. **Industrias** (Tabs o Accordion)

   **A. Gobierno**
   - Descripción de experiencia en sector público
   - Clientes destacados: FGR, SICT, SEP, Banco Bienestar, etc.
   - Servicios más demandados:
     - Modernización de sistemas legados
     - Infraestructura crítica
     - Ciberseguridad gubernamental
     - Cumplimiento normativo
   - Casos de éxito: 2-3 destacados

   **B. Sector Privado**
   - Sub-segmentos:
     - Banca y Finanzas
     - Telecomunicaciones
     - Retail
     - Salud
     - Manufactura
   - Clientes: Telmex, Axtel, AT&T, Banorte, Cruz Roja, etc.
   - Enfoque en transformación digital

3. **Casos de Éxito** (Grid filtrable)
   - Filtros: Por industria, por servicio
   - Cards con: Logo, industria, desafío, solución, resultados

4. **CTA**: "¿Tu industria no está aquí? Contáctanos"

**SEO**:
- Title: "Soluciones Tecnológicas por Industria | Gobierno, Banca, Salud, Retail"
- Schema: ItemList de industrias

---

### 5. CASOS DE ÉXITO (soluciones/casos-exito.html)

**Estructura**:

1. **Hero con filtros**
   - Filtros interactivos:
     - Por industria
     - Por servicio
     - Por tecnología

2. **Grid de Casos** (Lazy load)
   - Cada caso card:
     - Thumbnail/imagen
     - Logo del cliente
     - Título del proyecto
     - Industria tag
     - Servicios tags
     - Excerpt de resultados
     - CTA: "Leer caso completo"

3. **Modal o página individual por caso**:
   - Cliente y contexto
   - Desafío (problema a resolver)
   - Solución implementada (detalle técnico)
   - Tecnologías utilizadas
   - Resultados cuantificados (métricas)
   - Testimonial del cliente
   - CTA: "¿Necesitas algo similar?"

**SEO**:
- Title: "Casos de Éxito | Proyectos Tecnológicos Implementados | IO-TECH"
- Schema: Article por cada caso individual

---

### 6. QUIÉNES SOMOS (nosotros/index.html)

**Objetivo**: Generar confianza, humanizar la marca, mostrar credenciales

**Secciones**:

1. **Hero**
   - H1: "Somos IO-TECH"
   - Tagline: "El motor tecnológico que impulsa tu evolución"

2. **Nuestra Historia**
   - Texto adaptado del portafolio:
     - 7 años de crecimiento acelerado
     - Consorcio de empresas mexicanas
     - Transformación digital en sector público y privado
   - Timeline visual (opcional)

3. **Propuesta de Valor**
   - Las 3 declaraciones del portafolio en formato visual:
     - "Organización líder en el ecosistema tecnológico regional"
     - "Portafolio integral: modernización a tecnologías emergentes"
     - "Soluciones robustas, escalables y personalizadas"

4. **Nuestro Equipo** (Stats)
   - +200 Especialistas Técnicos
   - +400 Certificaciones profesionales
   - Áreas de expertise:
     - SCRUM, PMP, CISSP, DBA, RHEL, etc.

5. **Compromiso**
   - "Potenciar la grandeza de las organizaciones"
   - Valores: Excelencia, Innovación, Compromiso, Resultados

6. **Empresas del Consorcio** (Visual)
   - Logos de: Mustache Software, TechnoFuze, B Core, Engine Core, IO Tech, The Wise Order, Hackers Central
   - Nota: "IO-TECH es parte de un ecosistema empresarial sólido"

7. **Diferenciadores**
   - Talento humano especializado
   - Procesos certificados
   - Partnerships estratégicos
   - Experiencia en proyectos complejos

**SEO**:
- Title: "Acerca de IO-TECH | Empresa de Soluciones Tecnológicas en México"
- Schema: Organization, AboutPage

---

### 7. CERTIFICACIONES (nosotros/certificaciones.html)

**Secciones**:

1. **Hero**
   - H1: "Certificaciones y Estándares Internacionales"
   - Descripción de compromiso con calidad

2. **Certificaciones Organizacionales** (Grid visual)
   - ISO 9001 (Gestión de Calidad)
   - ISO 15504 (Procesos de Software)
   - ISO 20001 (Gestión de Servicios TI)
   - ISO 22301 (Continuidad del Negocio)
   - ISO 27001 (Seguridad de la Información)
   - ISO 37001 (Anti-soborno)
   - CMMI DEV/5
   - CMMI SVC/5
   - ISTQB Platinum Partner
   - Great Place to Work
   - Best Place to Code

3. **Certificaciones Técnicas del Equipo**
   - Visualización de distribución de certificaciones:
     - Scrum Master, Product Owner
     - PMP
     - CISSP
     - DBA (Oracle, SQL Server, PostgreSQL)
     - RHEL
     - Cloud certifications (AWS, Azure, GCP)

4. **Importancia de las Certificaciones**
   - Texto del portafolio sobre compromiso con excelencia

**SEO**:
- Title: "Certificaciones ISO, CMMI, ISTQB | IO-TECH México"
- Schema: EducationalOrganization (certificaciones)

---

### 8. PARTNERS (nosotros/partners.html)

**Secciones**:

1. **Hero**
   - H1: "Partners Tecnológicos Estratégicos"
   - "Alianzas que potencian nuestras soluciones"

2. **Categorías de Partners**

   **Cloud & Infrastructure**:
   - AWS, Azure, Google Cloud, Oracle Cloud
   - Nutanix, VMware, IBM
   - Huawei, Dell

   **Software & Platforms**:
   - Odoo, SAP, Oracle
   - Aranda Software, A10 Networks

   **Security**:
   - Fortinet, Palo Alto Networks, Red Hat
   - Sophos, Trend Micro
   - Commvault

   **Data & Analytics**:
   - Exabeam, Teldat, WSO2
   - Blanceo, EG Software, Stratosphere

   **Communications**:
   - Carbyne

3. **Beneficios de Nuestras Alianzas**
   - Acceso a tecnología de punta
   - Soporte directo de fabricantes
   - Capacitación continua
   - Pricing competitivo

**SEO**:
- Title: "Partners Tecnológicos | AWS, Azure, Oracle, VMware, Fortinet | IO-TECH"
- Schema: Organization relationships

---

### 9. RECURSOS / BLOG (recursos/index.html)

**Objetivo**: Content marketing, posicionamiento SEO, generación de leads

**Secciones**:

1. **Hero**
   - H1: "Centro de Recursos"
   - "Conocimiento y mejores prácticas en tecnología empresarial"

2. **Featured Post** (Destacado grande)
   - Último artículo principal o más popular

3. **Categorías de Contenido**
   - Infraestructura y Nube
   - Desarrollo de Software
   - Inteligencia de Negocios
   - Ciberseguridad
   - Transformación Digital
   - Tendencias Tecnológicas

4. **Grid de Artículos** (Filtrable, paginado)
   - Thumbnail
   - Categoría tag
   - Título
   - Excerpt
   - Fecha
   - Tiempo de lectura
   - CTA: "Leer más"

5. **Sidebar**
   - Buscador
   - Artículos populares
   - Categorías
   - Newsletter signup
   - CTA de contacto

**Artículos sugeridos para lanzamiento** (10-15):
- "Guía completa de migración a la nube en México"
- "Cómo elegir entre AWS, Azure y Google Cloud"
- "Cumplimiento normativo en ciberseguridad para gobierno"
- "Modernización de sistemas legacy: estrategias probadas"
- "ROI de Business Intelligence: casos reales"
- "DevOps en organizaciones tradicionales: hoja de ruta"
- "Arquitectura de microservicios: cuándo y cómo"
- "Data Governance: marco de trabajo para empresas mexicanas"
- "Zero Trust Security: implementación paso a paso"
- "Continuidad de negocio: DRP y BCP en la práctica"

**SEO por artículo**:
- Keyword research previo
- Title optimizado (60 chars)
- Meta description (155 chars)
- Headers bien estructurados (H2, H3)
- Internal linking
- Schema: Article, BlogPosting
- Imágenes optimizadas con alt text

---

### 10. CONTACTO (contacto/index.html)

**Objetivo**: Maximizar conversiones, captura de leads cualificados

**Secciones**:

1. **Hero**
   - H1: "Hablemos de tu Proyecto"
   - "Agenda una consultoría gratuita con nuestros expertos"

2. **Formulario Principal** (Multi-step para mejor UX)

   **Paso 1: ¿Qué necesitas?**
   - Checkboxes de servicios:
     - Infraestructura y Nube
     - Desarrollo de Software
     - Inteligencia de Negocio
     - Experiencia Digital
     - Ciberseguridad
     - Consultoría
     - Otro (especificar)

   **Paso 2: Cuéntanos más**
   - Textarea: Descripción del proyecto/necesidad
   - Select: Industria
   - Select: Tamaño de empresa
     - 1-50 empleados
     - 51-200
     - 201-1000
     - 1000+
     - Gobierno

   **Paso 3: Tus datos**
   - Nombre completo *
   - Email *
   - Teléfono *
   - Empresa
   - Cargo
   - Checkbox: Acepto aviso de privacidad *
   - reCAPTCHA

   **Paso 4: Confirmación**
   - Mensaje de agradecimiento
   - "Te contactaremos en menos de 24 horas"
   - CTA: "Mientras tanto, descarga nuestro portafolio"

3. **Información de Contacto** (Sidebar o sección)
   - Dirección: Insurgentes Sur 700, Col. del Valle Norte, CP 03103, CDMX
   - Teléfono: 55 5356 7892
   - Email: contacto@io-tech.mx (adaptado)
   - Horario de atención

4. **Mapa de Ubicación**
   - Google Maps embed
   - Direcciones para llegar

5. **Otras Formas de Contacto**
   - WhatsApp Business
   - LinkedIn
   - Agendar videollamada (Calendly integration)

6. **FAQ Rápido**
   - "¿Cuánto tiempo toma una evaluación?"
   - "¿Trabajan con empresas de mi tamaño?"
   - "¿Ofrecen soporte después de implementación?"

**Backend (.NET)**:
- API endpoint: POST /api/contact
- Validaciones server-side
- Email notifications (al equipo de ventas)
- Integración CRM (opcional: Salesforce, HubSpot, Zoho)
- Auto-responder al cliente
- Almacenamiento en BD
- Anti-spam measures

**SEO**:
- Title: "Contacto | Solicita una Consultoría Gratuita | IO-TECH"
- Schema: ContactPage, Organization

---

## SISTEMA DE COMPONENTES

### Filosofía de Componentes

Crear componentes reutilizables con **Web Components** (Custom Elements) o **Vanilla JS Modules** que se puedan instanciar en cualquier página.

### Componentes Core

#### 1. Header Component (`components/header.js`)

**Funcionalidades**:
- Logo linkeable
- Navegación principal (desktop)
- Hamburger menu (mobile)
- CTA button destacado: "Contacto"
- Sticky on scroll
- Active state en página actual
- Mega menu para "Servicios" (dropdown con iconos)

**HTML Structure**:
```html
<header class="site-header" data-component="header">
  <div class="container">
    <div class="header-wrapper">
      <a href="/" class="logo">
        <img src="/assets/img/logo-iotech.svg" alt="IO-TECH">
      </a>

      <nav class="main-nav" aria-label="Navegación principal">
        <ul class="nav-list">
          <li><a href="/">Inicio</a></li>
          <li class="has-dropdown">
            <a href="/servicios/">Servicios</a>
            <div class="mega-menu">
              <!-- Grid de servicios con iconos -->
            </div>
          </li>
          <li><a href="/soluciones/">Soluciones</a></li>
          <li><a href="/nosotros/">Nosotros</a></li>
          <li><a href="/recursos/">Recursos</a></li>
        </ul>
      </nav>

      <a href="/contacto/" class="btn btn-primary">Contacto</a>

      <button class="hamburger" aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</header>
```

**JS Pattern**:
```javascript
// components/header.js
class Header {
  constructor(element) {
    this.element = element;
    this.hamburger = element.querySelector('.hamburger');
    this.nav = element.querySelector('.main-nav');
    this.init();
  }

  init() {
    this.setupStickyHeader();
    this.setupMobileMenu();
    this.setupMegaMenu();
    this.setActiveNavItem();
  }

  setupStickyHeader() {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        this.element.classList.add('is-sticky');
      } else {
        this.element.classList.remove('is-sticky');
      }

      // Hide/show on scroll direction
      if (currentScroll > lastScroll && currentScroll > 300) {
        this.element.classList.add('is-hidden');
      } else {
        this.element.classList.remove('is-hidden');
      }

      lastScroll = currentScroll;
    });
  }

  setupMobileMenu() {
    this.hamburger.addEventListener('click', () => {
      this.nav.classList.toggle('is-open');
      this.hamburger.classList.toggle('is-active');
      document.body.classList.toggle('menu-open');
    });
  }

  setupMegaMenu() {
    const dropdowns = this.element.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('is-active');
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('is-active');
      });
    });
  }

  setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = this.element.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('is-active');
      }
    });
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-component="header"]');
  if (header) new Header(header);
});
```

---

#### 2. Footer Component (`components/footer.js`)

**Secciones**:
- Logo e info de empresa
- Links de navegación (columnas)
- Redes sociales
- Newsletter signup
- Copyright y aviso de privacidad
- Badges de certificaciones

**HTML Structure**:
```html
<footer class="site-footer" data-component="footer">
  <div class="container">
    <div class="footer-main">
      <div class="footer-col footer-brand">
        <img src="/assets/img/logo-iotech-white.svg" alt="IO-TECH">
        <p>Transformando organizaciones con tecnología de clase mundial</p>
        <div class="social-links">
          <a href="#" aria-label="LinkedIn"><i class="icon-linkedin"></i></a>
          <a href="#" aria-label="Twitter"><i class="icon-twitter"></i></a>
          <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Servicios</h4>
        <ul>
          <li><a href="/servicios/infraestructura-nube/">Infraestructura y Nube</a></li>
          <li><a href="/servicios/desarrollo-software/">Desarrollo de Software</a></li>
          <li><a href="/servicios/inteligencia-negocio/">Inteligencia de Negocio</a></li>
          <li><a href="/servicios/experiencia-digital/">Experiencia Digital</a></li>
          <li><a href="/servicios/ciberseguridad/">Ciberseguridad</a></li>
          <li><a href="/servicios/consultoria/">Consultoría</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Empresa</h4>
        <ul>
          <li><a href="/nosotros/">Quiénes Somos</a></li>
          <li><a href="/nosotros/certificaciones/">Certificaciones</a></li>
          <li><a href="/nosotros/partners/">Partners</a></li>
          <li><a href="/soluciones/casos-exito/">Casos de Éxito</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Recursos</h4>
        <ul>
          <li><a href="/recursos/">Blog</a></li>
          <li><a href="/recursos/whitepapers/">Whitepapers</a></li>
          <li><a href="/contacto/">Contacto</a></li>
        </ul>
      </div>

      <div class="footer-col footer-newsletter">
        <h4>Newsletter</h4>
        <p>Recibe tendencias y mejores prácticas</p>
        <form class="newsletter-form" data-component="newsletter">
          <input type="email" placeholder="Tu email" required>
          <button type="submit">Suscribir</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-certifications">
        <img src="/assets/img/cert-iso9001.svg" alt="ISO 9001">
        <img src="/assets/img/cert-iso27001.svg" alt="ISO 27001">
        <img src="/assets/img/cert-cmmi.svg" alt="CMMI DEV 5">
      </div>

      <div class="footer-legal">
        <p>&copy; 2025 IO-TECH. Todos los derechos reservados.</p>
        <a href="/aviso-privacidad/">Aviso de Privacidad</a>
        <a href="/terminos/">Términos y Condiciones</a>
      </div>
    </div>
  </div>
</footer>
```

---

#### 3. Service Card Component (`components/service-card.js`)

**Uso**: Grids de servicios en homepage y páginas de servicios

**HTML Template**:
```html
<div class="service-card" data-component="service-card">
  <div class="service-card__icon">
    <img src="{iconUrl}" alt="{title}">
  </div>
  <h3 class="service-card__title">{title}</h3>
  <p class="service-card__description">{description}</p>
  <ul class="service-card__features">
    <li>{feature1}</li>
    <li>{feature2}</li>
    <li>{feature3}</li>
  </ul>
  <a href="{url}" class="service-card__cta">Conocer más →</a>
</div>
```

**JS**:
```javascript
// components/service-card.js
class ServiceCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    return `
      <div class="service-card">
        <div class="service-card__icon">
          <img src="${this.data.icon}" alt="${this.data.title}">
        </div>
        <h3 class="service-card__title">${this.data.title}</h3>
        <p class="service-card__description">${this.data.description}</p>
        ${this.renderFeatures()}
        <a href="${this.data.url}" class="service-card__cta">Conocer más →</a>
      </div>
    `;
  }

  renderFeatures() {
    if (!this.data.features) return '';
    const items = this.data.features.map(f => `<li>${f}</li>`).join('');
    return `<ul class="service-card__features">${items}</ul>`;
  }
}

// Usage
const services = [
  {
    icon: '/assets/img/icons/cloud.svg',
    title: 'Infraestructura y Nube',
    description: 'Transformamos la infraestructura con soluciones escalables',
    features: ['Migración a nube', 'Multi-cloud', 'Alta disponibilidad'],
    url: '/servicios/infraestructura-nube/'
  },
  // ... más servicios
];

const container = document.querySelector('.services-grid');
services.forEach(service => {
  const card = new ServiceCard(service);
  container.innerHTML += card.render();
});
```

---

#### 4. CTA Section Component (`components/cta-section.js`)

**Uso**: Secciones de llamada a acción distribuidas en las páginas

**Variantes**:
- CTA con formulario inline
- CTA con botón primario
- CTA con descarga de recurso

**HTML Template**:
```html
<section class="cta-section" data-variant="{variant}">
  <div class="container">
    <div class="cta-content">
      <h2>{headline}</h2>
      <p>{description}</p>
    </div>
    <div class="cta-action">
      <!-- Variant: form | button | download -->
    </div>
  </div>
</section>
```

---

#### 5. Contact Form Component (`components/contact-form.js`)

**Funcionalidades**:
- Validación client-side
- Multi-step (wizard)
- Envío a API .NET
- Loading states
- Success/error messages
- reCAPTCHA integration

**JS Structure**:
```javascript
class ContactForm {
  constructor(formElement) {
    this.form = formElement;
    this.currentStep = 1;
    this.totalSteps = 4;
    this.formData = {};
    this.init();
  }

  init() {
    this.setupSteps();
    this.setupValidation();
    this.setupSubmit();
  }

  setupSteps() {
    const nextButtons = this.form.querySelectorAll('.btn-next');
    const prevButtons = this.form.querySelectorAll('.btn-prev');

    nextButtons.forEach(btn => {
      btn.addEventListener('click', () => this.nextStep());
    });

    prevButtons.forEach(btn => {
      btn.addEventListener('click', () => this.prevStep());
    });
  }

  nextStep() {
    if (this.validateStep(this.currentStep)) {
      this.saveStepData(this.currentStep);
      this.currentStep++;
      this.updateStepUI();
    }
  }

  prevStep() {
    this.currentStep--;
    this.updateStepUI();
  }

  validateStep(step) {
    const stepElement = this.form.querySelector(`[data-step="${step}"]`);
    const inputs = stepElement.querySelectorAll('input[required], textarea[required], select[required]');

    let isValid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        this.showError(input, 'Este campo es requerido');
      } else {
        this.clearError(input);
      }
    });

    return isValid;
  }

  async setupSubmit() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!this.validateStep(this.currentStep)) return;

      this.saveStepData(this.currentStep);

      // Show loading
      this.setLoading(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          this.showSuccess();
          this.resetForm();
        } else {
          throw new Error('Error en el envío');
        }
      } catch (error) {
        this.showError(null, 'Hubo un error. Por favor intenta de nuevo.');
      } finally {
        this.setLoading(false);
      }
    });
  }

  showError(input, message) {
    // Implementation
  }

  clearError(input) {
    // Implementation
  }

  showSuccess() {
    // Show success message, maybe redirect to thank you page
  }

  setLoading(isLoading) {
    const submitBtn = this.form.querySelector('[type="submit"]');
    submitBtn.disabled = isLoading;
    submitBtn.textContent = isLoading ? 'Enviando...' : 'Enviar';
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-component="contact-form"]');
  if (form) new ContactForm(form);
});
```

---

#### 6. Stats Counter Component (`components/stats.js`)

**Funcionalidad**: Números que cuentan cuando entran en viewport

**HTML**:
```html
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item" data-target="200">
        <span class="stat-number">0</span>
        <span class="stat-suffix">+</span>
        <p class="stat-label">Especialistas Técnicos</p>
      </div>
      <div class="stat-item" data-target="400">
        <span class="stat-number">0</span>
        <span class="stat-suffix">+</span>
        <p class="stat-label">Certificaciones</p>
      </div>
      <div class="stat-item" data-target="7">
        <span class="stat-number">0</span>
        <span class="stat-suffix"></span>
        <p class="stat-label">Años de Experiencia</p>
      </div>
      <div class="stat-item" data-target="50">
        <span class="stat-number">0</span>
        <span class="stat-suffix">+</span>
        <p class="stat-label">Clientes Activos</p>
      </div>
    </div>
  </div>
</section>
```

**JS**:
```javascript
class StatsCounter {
  constructor(element) {
    this.element = element;
    this.hasAnimated = false;
    this.init();
  }

  init() {
    this.observeElement();
  }

  observeElement() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateStats();
          this.hasAnimated = true;
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.element);
  }

  animateStats() {
    const statItems = this.element.querySelectorAll('.stat-item');

    statItems.forEach(item => {
      const target = parseInt(item.dataset.target);
      const numberElement = item.querySelector('.stat-number');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          numberElement.textContent = target;
          clearInterval(timer);
        } else {
          numberElement.textContent = Math.floor(current);
        }
      }, 16);
    });
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  const stats = document.querySelector('.stats-section');
  if (stats) new StatsCounter(stats);
});
```

---

#### 7. Modal Component (`components/modal.js`)

**Uso**: Casos de éxito, videos, formularios emergentes

**HTML**:
```html
<div class="modal" data-modal="caso-exito-1" aria-hidden="true">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__container" role="dialog" aria-modal="true">
    <button class="modal__close" data-modal-close aria-label="Cerrar">×</button>
    <div class="modal__content">
      <!-- Dynamic content -->
    </div>
  </div>
</div>
```

**JS**:
```javascript
class Modal {
  constructor() {
    this.modals = document.querySelectorAll('.modal');
    this.init();
  }

  init() {
    // Triggers
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-modal-trigger]');
      if (trigger) {
        const modalId = trigger.dataset.modalTrigger;
        this.open(modalId);
      }

      const close = e.target.closest('[data-modal-close]');
      if (close) {
        const modal = close.closest('.modal');
        this.close(modal);
      }
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.is-open');
        if (openModal) this.close(openModal);
      }
    });
  }

  open(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (!modal) return;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Focus trap
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length) {
      focusableElements[0].focus();
    }
  }

  close(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }
}

new Modal();
```

---

#### 8. Lazy Load Images Component (`components/lazy-load.js`)

**Funcionalidad**: Cargar imágenes cuando entran en viewport

**HTML**:
```html
<img data-src="/assets/img/case-study-1.jpg"
     src="/assets/img/placeholder.jpg"
     alt="Caso de éxito"
     class="lazy">
```

**JS**:
```javascript
class LazyLoad {
  constructor() {
    this.images = document.querySelectorAll('img.lazy');
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            this.observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '50px'
      });

      this.images.forEach(img => this.observer.observe(img));
    } else {
      // Fallback for older browsers
      this.images.forEach(img => this.loadImage(img));
    }
  }

  loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    img.src = src;
    img.classList.remove('lazy');
    img.classList.add('loaded');
  }
}

new LazyLoad();
```

---

### Componentes Adicionales

- **Testimonial Slider** (`components/testimonial-slider.js`)
- **Logo Wall** (`components/logo-wall.js`) - para partners/clientes
- **Accordion** (`components/accordion.js`) - para FAQs
- **Tabs** (`components/tabs.js`) - para soluciones por industria
- **Filter Grid** (`components/filter-grid.js`) - para casos de éxito
- **Breadcrumbs** (`components/breadcrumbs.js`)
- **Back to Top** (`components/back-to-top.js`)
- **Cookie Consent** (`components/cookie-consent.js`)
- **Search** (`components/search.js`) - para blog

---

## ESTRATEGIA SEO Y OPTIMIZACIÓN PARA LLMs

### SEO On-Page

#### 1. Estructura HTML Semántica

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>Título Optimizado 50-60 chars | IO-TECH</title>
  <meta name="title" content="Título Optimizado">
  <meta name="description" content="Descripción atractiva 150-160 chars que incluye keyword principal y secundarias">
  <meta name="keywords" content="keyword1, keyword2, keyword3">
  <meta name="robots" content="index, follow">
  <meta name="language" content="Spanish">
  <meta name="author" content="IO-TECH">

  <!-- Canonical -->
  <link rel="canonical" href="https://io-tech.mx/page/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://io-tech.mx/page/">
  <meta property="og:title" content="Título para redes sociales">
  <meta property="og:description" content="Descripción para redes sociales">
  <meta property="og:image" content="https://io-tech.mx/assets/img/og-image.jpg">
  <meta property="og:locale" content="es_MX">
  <meta property="og:site_name" content="IO-TECH">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://io-tech.mx/page/">
  <meta property="twitter:title" content="Título para Twitter">
  <meta property="twitter:description" content="Descripción para Twitter">
  <meta property="twitter:image" content="https://io-tech.mx/assets/img/twitter-image.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.json">

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://www.google-analytics.com">

  <!-- DNS Prefetch -->
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/assets/css/main.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IO-TECH",
    "url": "https://io-tech.mx",
    "logo": "https://io-tech.mx/assets/img/logo.png",
    "description": "Empresa líder en soluciones tecnológicas empresariales en México",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Insurgentes Sur 700",
      "addressLocality": "Benito Juárez",
      "addressRegion": "CDMX",
      "postalCode": "03103",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-55-5356-7892",
      "contactType": "Sales",
      "email": "contacto@io-tech.mx",
      "availableLanguage": ["Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/io-tech",
      "https://twitter.com/iotech",
      "https://www.facebook.com/iotech"
    ]
  }
  </script>
</head>
<body>
  <!-- Content -->
</body>
</html>
```

#### 2. Jerarquía de Headers

```html
<h1>Solo un H1 por página - Keyword principal</h1>

<h2>Secciones principales - Keywords secundarias</h2>

<h3>Subsecciones</h3>

<h4>Detalles específicos</h4>
```

**Reglas**:
- Solo 1 H1 por página
- H1 debe contener keyword principal
- H2-H6 en orden jerárquico
- Incluir variaciones de keywords en H2-H3

#### 3. Schema Markup por Tipo de Página

**Homepage - Organization + WebSite**:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "IO-TECH",
      "url": "https://io-tech.mx",
      "logo": {
        "@type": "ImageObject",
        "url": "https://io-tech.mx/assets/img/logo.png"
      },
      "description": "Organización líder en soluciones tecnológicas empresariales",
      "foundingDate": "2018",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 200
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Insurgentes Sur 700",
        "addressLocality": "Ciudad de México",
        "addressRegion": "CDMX",
        "postalCode": "03103",
        "addressCountry": "MX"
      }
    },
    {
      "@type": "WebSite",
      "name": "IO-TECH",
      "url": "https://io-tech.mx",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://io-tech.mx/buscar?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

**Página de Servicio - Service**:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Infraestructura y Nube",
  "description": "Transformamos la infraestructura tecnológica con soluciones integrales de centro de datos y nube",
  "provider": {
    "@type": "Organization",
    "name": "IO-TECH"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Mexico"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Infraestructura y Nube",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Migración a Nube"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Administración Multi-cloud"
        }
      }
    ]
  }
}
```

**Artículo de Blog - Article**:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título del Artículo",
  "image": "https://io-tech.mx/assets/img/blog/article-image.jpg",
  "author": {
    "@type": "Person",
    "name": "Nombre del Autor"
  },
  "publisher": {
    "@type": "Organization",
    "name": "IO-TECH",
    "logo": {
      "@type": "ImageObject",
      "url": "https://io-tech.mx/assets/img/logo.png"
    }
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-01-20",
  "description": "Meta descripción del artículo"
}
```

**FAQ Page - FAQPage**:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma migrar a la nube?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo de migración depende de la complejidad de tu infraestructura. Proyectos pequeños pueden tomar 2-4 semanas, mientras que migraciones empresariales complejas pueden extenderse de 3 a 6 meses."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué proveedores de nube soportan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con los principales proveedores: AWS, Microsoft Azure, Google Cloud Platform, Oracle Cloud e IBM Cloud. También ofrecemos soluciones multi-cloud híbridas."
      }
    }
  ]
}
```

**Caso de Éxito - Case Study (Article)**:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Migración de Infraestructura Crítica para Gobierno Federal",
  "image": "https://io-tech.mx/assets/img/casos/gobierno-cloud.jpg",
  "author": {
    "@type": "Organization",
    "name": "IO-TECH"
  },
  "publisher": {
    "@type": "Organization",
    "name": "IO-TECH",
    "logo": {
      "@type": "ImageObject",
      "url": "https://io-tech.mx/assets/img/logo.png"
    }
  },
  "datePublished": "2024-11-10",
  "articleBody": "Descripción completa del caso de éxito..."
}
```

#### 4. Keywords Research y Estrategia

**Keywords Principales** (Alto volumen, alta competencia):
- soluciones tecnológicas empresariales
- empresa de tecnología méxico
- servicios de TI empresariales
- transformación digital méxico
- consultoría tecnológica

**Keywords Secundarias** (Volumen medio):
- migración a la nube méxico
- desarrollo de software a medida
- ciberseguridad empresarial
- infraestructura en la nube
- business intelligence méxico
- modernización de sistemas legacy

**Long-tail Keywords** (Bajo volumen, baja competencia, alta conversión):
- "migración de sap a aws méxico"
- "empresa certificada iso 27001 méxico"
- "consultoría devops ciudad de méxico"
- "desarrollo de software gobierno"
- "cmmi nivel 5 méxico"

**Keywords por Servicio**:

*Infraestructura y Nube*:
- migración a aws méxico
- administración de nube híbrida
- disaster recovery plan méxico
- backup y recuperación empresarial
- virtualización de servidores

*Desarrollo de Software*:
- fábrica de software méxico
- desarrollo ágil scrum
- modernización aplicaciones legacy
- desarrollo de microservicios
- devops méxico

*Inteligencia de Negocio*:
- implementación power bi
- data warehouse méxico
- analítica predictiva empresarial
- gobierno de datos
- big data consulting

*Ciberseguridad*:
- soc centro operaciones seguridad
- pentesting méxico
- gestión de vulnerabilidades
- cumplimiento iso 27001
- ethical hacking

**Implementación en Contenido**:
- Keyword principal en: Title, H1, primer párrafo, URL
- Keywords secundarias en: H2, H3, alt text de imágenes
- Long-tail en: contenido de párrafos, FAQs, blog posts
- Densidad: 1-2% (natural, no keyword stuffing)

#### 5. Optimización de URLs

**Estructura**:
```
✅ BIEN:
https://io-tech.mx/servicios/infraestructura-nube/
https://io-tech.mx/blog/migracion-nube-guia-completa/
https://io-tech.mx/casos-exito/gobierno-modernizacion/

❌ MAL:
https://io-tech.mx/page.php?id=123
https://io-tech.mx/servicios/servicio1.html
https://io-tech.mx/blog/post-2025-01-15-v2/
```

**Reglas**:
- Usar guiones (-) no guiones bajos (_)
- Minúsculas
- Keywords relevantes
- Cortas y descriptivas
- Sin parámetros innecesarios
- Trailing slash consistente

#### 6. Internal Linking Strategy

**Hub Pages** (pilares de contenido):
- /servicios/ → enlaza a las 6 páginas de servicios
- /soluciones/ → enlaza a industrias y casos
- /recursos/ → enlaza a artículos del blog

**Spoke Pages** (contenido específico):
- Cada página de servicio enlaza de vuelta a /servicios/
- Enlaza a casos de éxito relevantes
- Enlaza a artículos de blog relacionados

**Anchor Text**:
- Usar keywords descriptivas
- Evitar "click aquí" o "más información"
- Variar los anchor texts

**Ejemplo**:
```html
<!-- ❌ MAL -->
<a href="/servicios/ciberseguridad/">Haz click aquí</a> para conocer más.

<!-- ✅ BIEN -->
Conoce nuestros <a href="/servicios/ciberseguridad/">servicios de ciberseguridad empresarial</a>.
```

#### 7. Optimización de Imágenes

**Nombres de archivo**:
```
✅ BIEN: infraestructura-nube-aws-azure.jpg
❌ MAL: IMG_0012.jpg
```

**Alt text**:
```html
<img src="/assets/img/servicios/infraestructura-nube.jpg"
     alt="Diagrama de arquitectura de infraestructura en la nube con AWS y Azure">
```

**Formatos**:
- WebP para web moderna (con fallback JPEG/PNG)
- SVG para logos e iconos
- Lazy loading para imágenes below the fold

**Compresión**:
- JPEG: 85% quality
- PNG: TinyPNG o similar
- WebP: 80% quality

**Tamaños**:
- Hero images: max 1920px width, <200KB
- Content images: max 1200px width, <100KB
- Thumbnails: max 600px width, <50KB

**Responsive images**:
```html
<picture>
  <source type="image/webp" srcset="/assets/img/hero-800.webp 800w,
                                     /assets/img/hero-1200.webp 1200w,
                                     /assets/img/hero-1920.webp 1920w">
  <source type="image/jpeg" srcset="/assets/img/hero-800.jpg 800w,
                                     /assets/img/hero-1200.jpg 1200w,
                                     /assets/img/hero-1920.jpg 1920w">
  <img src="/assets/img/hero-1200.jpg"
       alt="Equipo de IO-TECH trabajando en soluciones de nube"
       loading="lazy">
</picture>
```

---

### Optimización para LLMs (Large Language Models)

#### 1. Structured Data Comprehensivo

Los LLMs como ChatGPT, Claude, Gemini extraen información de sitios web para responder preguntas. Facilitar esta extracción:

**Datos Estructurados**:
- Schema.org markup completo
- JSON-LD en cada página
- Microdata donde sea relevante

**Ejemplo de datos para LLM**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "IO-TECH",
  "description": "IO-TECH es una empresa mexicana especializada en soluciones tecnológicas empresariales, con más de 200 especialistas certificados. Ofrecemos servicios de infraestructura y nube, desarrollo de software, inteligencia de negocios, experiencia digital, ciberseguridad y consultoría.",
  "slogan": "Transformamos organizaciones con tecnología de clase mundial",
  "url": "https://io-tech.mx",
  "telephone": "+52-55-5356-7892",
  "email": "contacto@io-tech.mx",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Insurgentes Sur 700",
    "addressLocality": "Ciudad de México",
    "addressRegion": "CDMX",
    "postalCode": "03103",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.3687",
    "longitude": "-99.1711"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "knowsAbout": [
    "Cloud Computing",
    "Software Development",
    "Business Intelligence",
    "Cybersecurity",
    "Digital Transformation",
    "IT Consulting",
    "DevOps",
    "Data Analytics",
    "Infrastructure as a Service",
    "Managed IT Services"
  ],
  "award": [
    "Certificación ISO 9001",
    "Certificación ISO 27001",
    "CMMI DEV Nivel 5",
    "CMMI SVC Nivel 5",
    "Great Place to Work",
    "Best Place to Code"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "Engine Core Consortium"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios IO-TECH",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Infraestructura y Nube",
        "description": "Servicios de migración, administración y optimización de infraestructura en la nube (AWS, Azure, Google Cloud)",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Migración a Nube" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Administración Multi-cloud" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Disaster Recovery" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Desarrollo de Software",
        "description": "Desarrollo de software a medida, modernización de aplicaciones legacy, metodologías ágiles",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desarrollo de Software a Medida" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Modernización de Aplicaciones Legacy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps y CI/CD" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Inteligencia de Negocio",
        "description": "Business Intelligence, Data Analytics, Data Governance, Machine Learning",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Implementación de BI" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Analytics" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Machine Learning" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Ciberseguridad",
        "description": "SOC, pentesting, gestión de vulnerabilidades, cumplimiento normativo",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Centro de Operaciones de Seguridad (SOC)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pentesting y Ethical Hacking" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gestión de Vulnerabilidades" } }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Consultoría",
        "description": "Gobierno de TI, PMO, arquitectura empresarial, gestión del cambio",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gobierno de TI" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oficina de Gestión de Proyectos (PMO)" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Arquitectura Empresarial" } }
        ]
      }
    ]
  }
}
</script>
```

#### 2. Contenido Natural y Conversacional

Los LLMs prefieren contenido que responde preguntas directamente.

**Formato de Pregunta-Respuesta**:
```html
<section class="faq" itemscope itemtype="https://schema.org/FAQPage">
  <h2>Preguntas Frecuentes sobre Infraestructura y Nube</h2>

  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">¿Qué es la infraestructura como servicio (IaaS)?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">
        La Infraestructura como Servicio (IaaS) es un modelo de computación en la nube que proporciona recursos de TI virtualizados a través de Internet. En IO-TECH, ayudamos a las empresas a migrar su infraestructura física a proveedores como AWS, Azure y Google Cloud, permitiéndoles escalar recursos según demanda, reducir costos de capital y mejorar la agilidad operacional.
      </p>
    </div>
  </div>

  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">¿Cuánto cuesta migrar a la nube?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">
        El costo de migración a la nube varía según la complejidad de tu infraestructura actual, el volumen de datos, y el proveedor de nube seleccionado. En IO-TECH realizamos una evaluación gratuita para estimar costos de manera precisa. Proyectos típicos oscilan entre $50,000 y $500,000 USD para empresas medianas, con ROI positivo en 12-18 meses gracias a la reducción de gastos operativos.
      </p>
    </div>
  </div>
</section>
```

#### 3. Datos de Contacto Claramente Estructurados

```html
<footer>
  <div itemscope itemtype="https://schema.org/Organization">
    <h3 itemprop="name">IO-TECH</h3>
    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
      <p>
        <span itemprop="streetAddress">Insurgentes Sur 700</span><br>
        <span itemprop="addressLocality">Ciudad de México</span>,
        <span itemprop="addressRegion">CDMX</span>
        <span itemprop="postalCode">03103</span><br>
        <span itemprop="addressCountry">México</span>
      </p>
    </div>
    <p>
      Teléfono: <span itemprop="telephone">+52 55 5356 7892</span><br>
      Email: <a href="mailto:contacto@io-tech.mx" itemprop="email">contacto@io-tech.mx</a>
    </p>
  </div>
</footer>
```

#### 4. Breadcrumbs para Contexto

```html
<nav aria-label="Breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
  <ol class="breadcrumb">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/" itemprop="item">
        <span itemprop="name">Inicio</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/servicios/" itemprop="item">
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

#### 5. Metadata para Entidades

Ayudar a los LLMs a entender relaciones entre entidades:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IO-TECH",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Engine Core"
  },
  "employee": [
    {
      "@type": "OrganizationRole",
      "roleName": "Especialistas Técnicos",
      "numberOfPositions": 200
    }
  ],
  "brand": {
    "@type": "Brand",
    "name": "IO-TECH"
  },
  "serviceType": [
    "Infrastructure as a Service",
    "Software Development",
    "Business Intelligence",
    "Cybersecurity",
    "IT Consulting"
  ],
  "knowsLanguage": {
    "@type": "Language",
    "name": "Spanish",
    "alternateName": "es"
  }
}
```

#### 6. Robots.txt Optimizado

```txt
# robots.txt para io-tech.mx

User-agent: *
Allow: /

# Permitir acceso a crawlers de LLMs
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

# Bloquear solo áreas privadas
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

# Sitemap
Sitemap: https://io-tech.mx/sitemap.xml
```

#### 7. Sitemap.xml Comprensivo

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <url>
    <loc>https://io-tech.mx/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://io-tech.mx/assets/img/hero-home.jpg</image:loc>
      <image:title>IO-TECH Soluciones Tecnológicas</image:title>
    </image:image>
  </url>

  <url>
    <loc>https://io-tech.mx/servicios/infraestructura-nube/</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Más URLs... -->

</urlset>
```

---

### SEO Técnico

#### 1. Performance Optimization

**Core Web Vitals**:
- **LCP (Largest Contentful Paint)**: < 2.5s
  - Optimizar hero images
  - Preload critical resources
  - Use CDN

- **FID (First Input Delay)**: < 100ms
  - Minimizar JavaScript
  - Code splitting
  - Defer non-critical JS

- **CLS (Cumulative Layout Shift)**: < 0.1
  - Reservar espacio para imágenes (width/height attributes)
  - Evitar insertar contenido dinámico above the fold
  - Web fonts con font-display: swap

**Tools**:
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- WebPageTest

#### 2. Mobile-First

```css
/* Mobile first approach */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 3rem;
  }
}
```

**Viewport**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 3. HTTPS

- SSL/TLS certificado válido
- Forzar HTTPS con redirects 301
- HSTS (HTTP Strict Transport Security)

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

#### 4. XML Sitemap + HTML Sitemap

- XML sitemap para crawlers (/sitemap.xml)
- HTML sitemap para usuarios (/mapa-sitio.html)
- Submit sitemap a Google Search Console

#### 5. Canonical URLs

Evitar contenido duplicado:

```html
<link rel="canonical" href="https://io-tech.mx/servicios/infraestructura-nube/">
```

---

### Link Building Strategy

#### 1. Internal Links

- Cada página debe tener al menos 3-5 internal links
- Footer links a páginas principales
- Contextual links en contenido
- Related content sections

#### 2. External Links (Backlinks)

**Estrategias**:
1. **Guest blogging** en sitios tech relevantes
2. **Casos de éxito** con clientes (pedir backlink)
3. **Partnerships** con AWS, Azure (partner directories)
4. **Press releases** en medios especializados
5. **Directorios** de empresas tech en México
6. **Certificaciones** (ISO, CMMI websites mencionan partners)
7. **Events** y webinars (speaker bios con link)
8. **Open source contributions** (GitHub profile)

**Quality over Quantity**:
- Priorizar DA (Domain Authority) > 40
- Relevancia temática (tech, business, IT)
- Diversificar anchor texts

---

## STACK TECNOLÓGICO

### Frontend

**Core**:
- HTML5 semántico
- CSS3 (Variables custom properties)
- Vanilla JavaScript (ES6+)

**NO usar**:
- React, Vue, Angular
- jQuery
- Heavy frameworks

**CSS Architecture**:
- BEM methodology para naming
- CSS Variables para theming
- Mobile-first responsive
- CSS Grid + Flexbox

**JS Architecture**:
- ES6 Modules
- Class-based components
- Async/await para API calls
- No dependencies externas (excepto analytics)

**Build Tools** (opcional, para producción):
- **Vite** o **Parcel** (bundler ligero)
- PostCSS (autoprefixer)
- Minificación CSS/JS
- Image optimization

**Fonts**:
- Google Fonts (1-2 font families max)
- Font-display: swap para performance
- Subset fonts (solo caracteres necesarios)

**Icons**:
- SVG sprites
- Inline SVG para iconos críticos
- Lazy load para iconos decorativos

---

### Backend

**.NET Stack**:

**API**:
- ASP.NET Core 8.0 (LTS)
- Web API (RESTful)
- Minimal APIs para endpoints simples

**Database**:
- SQL Server (primary)
- Entity Framework Core
- Migrations

**Authentication** (si necesario):
- JWT tokens
- ASP.NET Core Identity

**Email Service**:
- SendGrid o SMTP
- Email templates (Razor)

**File Structure**:
```
API/
├── Controllers/
│   └── ContactController.cs
├── Models/
│   ├── ContactRequest.cs
│   └── EmailTemplate.cs
├── Services/
│   ├── IEmailService.cs
│   ├── EmailService.cs
│   ├── IContactService.cs
│   └── ContactService.cs
├── Data/
│   ├── ApplicationDbContext.cs
│   └── Migrations/
├── DTOs/
│   └── ContactDTO.cs
├── Validators/
│   └── ContactRequestValidator.cs
└── Program.cs
```

**Example: Contact Controller**:
```csharp
// Controllers/ContactController.cs
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;
        private readonly ILogger<ContactController> _logger;

        public ContactController(IContactService contactService, ILogger<ContactController> logger)
        {
            _contactService = contactService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitContact([FromBody] ContactRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _contactService.ProcessContactRequest(request);

                if (result.Success)
                {
                    return Ok(new { message = "Gracias por contactarnos. Te responderemos pronto." });
                }
                else
                {
                    return StatusCode(500, new { message = "Error al procesar tu solicitud." });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing contact request");
                return StatusCode(500, new { message = "Error interno del servidor." });
            }
        }
    }
}
```

**Models/ContactRequest.cs**:
```csharp
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class ContactRequest
    {
        [Required(ErrorMessage = "El nombre es requerido")]
        [StringLength(100)]
        public string FullName { get; set; }

        [Required(ErrorMessage = "El email es requerido")]
        [EmailAddress(ErrorMessage = "Email no válido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "El teléfono es requerido")]
        [Phone(ErrorMessage = "Teléfono no válido")]
        public string Phone { get; set; }

        [StringLength(100)]
        public string Company { get; set; }

        [StringLength(100)]
        public string JobTitle { get; set; }

        [Required(ErrorMessage = "Selecciona al menos un servicio")]
        public List<string> Services { get; set; }

        [Required(ErrorMessage = "La descripción es requerida")]
        [StringLength(1000)]
        public string Description { get; set; }

        public string Industry { get; set; }

        public string CompanySize { get; set; }

        [Required]
        public bool AcceptsPrivacyPolicy { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
```

**Security**:
- Rate limiting (prevenir spam)
- CORS configurado correctamente
- Input validation
- SQL injection prevention (EF Core)
- XSS prevention
- CSRF tokens

**Example Rate Limiting**:
```csharp
// Program.cs
builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("contact", opt =>
    {
        opt.Window = TimeSpan.FromMinutes(1);
        opt.PermitLimit = 5;
    });
});

app.UseRateLimiter();
```

---

### Hosting & Infrastructure

**Opciones recomendadas**:

1. **Azure App Service** (preferido por .NET)
   - Web App para frontend (HTML/CSS/JS estáticos)
   - API App para backend .NET
   - Azure SQL Database
   - Azure CDN para assets estáticos
   - Application Insights para monitoreo

2. **AWS**
   - S3 + CloudFront para frontend
   - Elastic Beanstalk para API .NET
   - RDS SQL Server
   - Route 53 para DNS

3. **Hybrid**
   - Netlify/Vercel para frontend (deployment automático)
   - Azure/AWS para backend API

**CI/CD**:
- GitHub Actions
- Azure DevOps Pipelines

**Monitoring**:
- Application Insights (Azure)
- Google Analytics 4
- Hotjar (heatmaps, session recordings)

---

## DISEÑO UI/UX

### Principios de Diseño

1. **Claridad**: Comunicación directa, sin ambigüedad
2. **Consistencia**: Patrones repetibles, UI predecible
3. **Jerarquía Visual**: Guiar la atención del usuario
4. **Feedback**: Estados interactivos claros
5. **Performance**: Carga rápida, interacciones fluidas
6. **Accesibilidad**: WCAG 2.1 AA compliance

### Design System

#### Color Palette

**Colores Primarios** (basados en Engine Core):
```css
:root {
  /* Primary - Azul corporativo */
  --color-primary-50: #E3F2FD;
  --color-primary-100: #BBDEFB;
  --color-primary-200: #90CAF9;
  --color-primary-300: #64B5F6;
  --color-primary-400: #42A5F5;
  --color-primary-500: #1976D2; /* Main */
  --color-primary-600: #1565C0;
  --color-primary-700: #0D47A1;
  --color-primary-800: #0A3D91;
  --color-primary-900: #063371;

  /* Accent - Celeste vibrante */
  --color-accent-500: #00BCD4;
  --color-accent-600: #00ACC1;

  /* Neutrals */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EEEEEE;
  --color-gray-300: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;

  /* Semantic */
  --color-success: #4CAF50;
  --color-warning: #FF9800;
  --color-error: #F44336;
  --color-info: #2196F3;

  /* Text */
  --color-text-primary: var(--color-gray-900);
  --color-text-secondary: var(--color-gray-600);
  --color-text-light: var(--color-gray-500);
  --color-text-inverse: #FFFFFF;

  /* Background */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: var(--color-gray-50);
  --color-bg-dark: var(--color-gray-900);
}
```

#### Typography

```css
:root {
  /* Font Families */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-headings: 'Poppins', var(--font-primary);
  --font-mono: 'Fira Code', 'Courier New', monospace;

  /* Font Sizes - Type Scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}

/* Typography Classes */
h1, .h1 {
  font-family: var(--font-headings);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  margin-bottom: 1rem;
}

h2, .h2 {
  font-family: var(--font-headings);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  margin-bottom: 0.875rem;
}

h3, .h3 {
  font-family: var(--font-headings);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  margin-bottom: 0.75rem;
}

body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--color-text-primary);
}

.text-lead {
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
}
```

#### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

#### Shadows & Elevation

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

#### Border Radius

```css
:root {
  --radius-sm: 0.25rem;  /* 4px */
  --radius-base: 0.375rem; /* 6px */
  --radius-md: 0.5rem;   /* 8px */
  --radius-lg: 0.75rem;  /* 12px */
  --radius-xl: 1rem;     /* 16px */
  --radius-full: 9999px;
}
```

#### Transitions

```css
:root {
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Component Styling Examples

#### Buttons

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  line-height: var(--leading-none);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  text-decoration: none;
}

.btn:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.btn-primary {
  background-color: var(--color-primary-500);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-600);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary-500);
  border-color: var(--color-primary-500);
}

.btn-secondary:hover {
  background-color: var(--color-primary-50);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}
```

#### Cards

```css
.card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-base);
  padding: var(--space-6);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.card__header {
  margin-bottom: var(--space-4);
}

.card__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-2);
}

.card__description {
  color: var(--color-text-secondary);
  font-size: var(--text-base);
}
```

### Layout Patterns

#### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}
```

#### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Accessibility

#### Focus States

```css
:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

#### Skip Links

```html
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary-500);
  color: white;
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

#### ARIA Labels

```html
<button aria-label="Cerrar modal" class="modal-close">
  <svg aria-hidden="true">...</svg>
</button>

<nav aria-label="Navegación principal">...</nav>

<section aria-labelledby="services-heading">
  <h2 id="services-heading">Nuestros Servicios</h2>
  ...
</section>
```

### Animations & Micro-interactions

#### Scroll Animations (Intersection Observer)

```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}
```

#### Loading States

```css
.loading {
  position: relative;
  pointer-events: none;
  opacity: 0.6;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: -10px 0 0 -10px;
  border: 2px solid var(--color-primary-500);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## OPTIMIZACIÓN DE PERFORMANCE

### Estrategias de Carga

#### 1. Critical CSS

Inline CSS crítico en `<head>` para primera renderización:

```html
<head>
  <style>
    /* Critical CSS - above the fold */
    body { margin: 0; font-family: sans-serif; }
    .header { background: #1976D2; }
    .hero { min-height: 80vh; }
    /* ... */
  </style>

  <!-- Non-critical CSS load async -->
  <link rel="preload" href="/assets/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/assets/css/main.css"></noscript>
</head>
```

#### 2. Resource Hints

```html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://www.google-analytics.com">

<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://cdn.example.com">

<!-- Preload critical resources -->
<link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/img/hero-home.webp" as="image">

<!-- Prefetch likely next page -->
<link rel="prefetch" href="/servicios/">
```

#### 3. Image Optimization

**Lazy Loading**:
```html
<img src="/assets/img/placeholder.jpg"
     data-src="/assets/img/service-cloud.jpg"
     alt="Infraestructura en la nube"
     loading="lazy"
     class="lazy">
```

**Responsive Images**:
```html
<picture>
  <source media="(min-width: 1024px)" srcset="/assets/img/hero-1920.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="/assets/img/hero-1200.webp" type="image/webp">
  <source media="(min-width: 1024px)" srcset="/assets/img/hero-1920.jpg" type="image/jpeg">
  <source media="(min-width: 768px)" srcset="/assets/img/hero-1200.jpg" type="image/jpeg">
  <img src="/assets/img/hero-800.jpg" alt="Hero" loading="lazy">
</picture>
```

#### 4. JavaScript Loading Strategy

```html
<!-- Critical JS: inline or async -->
<script async src="/assets/js/analytics.js"></script>

<!-- Non-critical JS: defer -->
<script defer src="/assets/js/app.js"></script>

<!-- Third-party scripts: load with delay -->
<script>
  // Load after page interactive
  window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = 'https://widget.example.com/script.js';
    document.body.appendChild(script);
  });
</script>
```

#### 5. Service Worker (PWA - Optional)

```javascript
// sw.js
const CACHE_NAME = 'io-tech-v1';
const urlsToCache = [
  '/',
  '/assets/css/main.css',
  '/assets/js/app.js',
  '/assets/img/logo.svg'
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

Register in main HTML:
```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
</script>
```

---

## PLAN DE IMPLEMENTACIÓN

### Fase 1: Fundación (Semanas 1-2)

**Deliverables**:
- [x] Documento de planeación (este MD)
- [ ] Setup de repositorio GitHub
- [ ] Estructura de carpetas y archivos base
- [ ] Design system (CSS variables, typography, colors)
- [ ] Componentes core:
  - Header
  - Footer
  - Buttons
  - Cards
  - Forms base
- [ ] Homepage (estructura HTML)
- [ ] Setup backend .NET API básico
- [ ] Database schema

**Tareas**:
1. Crear repositorio GitHub
2. Setup estructura de carpetas
3. Crear `variables.css` con design system
4. Implementar header component
5. Implementar footer component
6. Crear homepage HTML básico
7. Setup proyecto .NET Core API
8. Crear modelo `ContactRequest`
9. Implementar endpoint `/api/contact`

### Fase 2: Páginas Core (Semanas 3-4)

**Deliverables**:
- [ ] Homepage 100% funcional con:
  - Hero section
  - Servicios grid
  - Stats counter
  - Casos de éxito slider
  - Certificaciones
  - CTA sections
- [ ] Servicios overview page
- [ ] 6 páginas de servicios individuales (templates)
- [ ] Contacto page con formulario funcional
- [ ] Integración backend-frontend (formulario)

**Tareas**:
1. Completar homepage con todos los componentes
2. Implementar componentes faltantes:
   - Service cards
   - Stats counter
   - Testimonial slider
   - Logo wall
3. Crear página /servicios/
4. Crear template de servicio individual
5. Duplicar template para 6 servicios
6. Implementar formulario de contacto multi-step
7. Conectar formulario con API .NET
8. Testing de formulario

### Fase 3: Contenido y SEO (Semanas 5-6)

**Deliverables**:
- [ ] Todas las páginas con contenido real (no placeholders)
- [ ] SEO on-page completo:
  - Meta tags
  - Schema markup
  - Open Graph
  - Sitemap.xml
  - Robots.txt
- [ ] 10-15 artículos de blog iniciales
- [ ] Casos de éxito (5 mínimo)
- [ ] Página de partners
- [ ] Página de certificaciones

**Tareas**:
1. Redactar contenido para todas las páginas
2. Implementar Schema.org markup en todas las páginas
3. Crear sitemap.xml
4. Configurar robots.txt
5. Crear 10-15 artículos de blog (keyword research previo)
6. Implementar blog listing page
7. Implementar template de artículo individual
8. Crear 5 casos de éxito completos

### Fase 4: Optimización y Testing (Semana 7)

**Deliverables**:
- [ ] Performance optimization:
  - Core Web Vitals < threshold
  - Images optimizadas
  - CSS/JS minificados
  - Lazy loading implementado
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Mobile responsive testing
- [ ] Form validation testing
- [ ] SEO audit

**Tareas**:
1. Lighthouse audit y optimizaciones
2. Comprimir todas las imágenes
3. Implementar lazy loading en todas las imágenes
4. Minificar CSS/JS
5. Accessibility testing (axe DevTools)
6. Corregir issues de accesibilidad
7. Testing en Chrome, Firefox, Safari, Edge
8. Testing responsive en múltiples dispositivos
9. Testing de formularios (validaciones, errores, success)
10. SEO audit con Screaming Frog

### Fase 5: Deploy y Post-Launch (Semana 8)

**Deliverables**:
- [ ] Sitio en producción (Azure/AWS)
- [ ] SSL configurado
- [ ] DNS configurado
- [ ] Google Analytics 4 configurado
- [ ] Google Search Console configurado
- [ ] Bing Webmaster Tools configurado
- [ ] Sitemap enviado a motores de búsqueda
- [ ] Monitoring configurado
- [ ] Backup strategy implementada
- [ ] Documentación de mantenimiento

**Tareas**:
1. Deploy frontend a Azure/Netlify
2. Deploy backend API a Azure App Service
3. Configurar base de datos en producción
4. Configurar SSL certificate
5. Configurar DNS records
6. Setup Google Analytics 4
7. Setup Google Search Console
8. Submit sitemap a Google
9. Submit sitemap a Bing
10. Configurar Application Insights / monitoring
11. Setup automated backups
12. Crear documentación de mantenimiento

### Post-Launch: Mejora Continua

**Actividades continuas**:
- [ ] Publicar 2-4 artículos de blog por mes
- [ ] Actualizar casos de éxito trimestralmente
- [ ] Monitorear analytics y ajustar estrategia
- [ ] A/B testing de CTAs
- [ ] Link building mensual
- [ ] Performance monitoring semanal
- [ ] SEO ranking tracking mensual
- [ ] Actualizar contenido basado en feedback

---

## MÉTRICAS DE ÉXITO

### KPIs Técnicos

**Performance**:
- Lighthouse Score > 90 (Performance, Accessibility, Best Practices, SEO)
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Time to Interactive < 3.5s

**SEO**:
- Páginas indexadas: 100%
- Errores de crawl: 0
- Backlinks: +50 en 6 meses
- Domain Authority: > 30 en 1 año

**Conversión**:
- Form submission rate: > 3%
- Bounce rate: < 50%
- Average session duration: > 2 min
- Pages per session: > 3

### KPIs de Negocio

- Leads generados por mes: > 50
- Costo por lead: < $100 USD
- Lead-to-customer rate: > 10%
- Organic traffic growth: +30% MoM

---

## ANEXOS

### A. Checklist de Lanzamiento

```
PRE-LAUNCH CHECKLIST

□ Contenido
  □ Todos los textos revisados y aprobados
  □ Sin lorem ipsum o placeholders
  □ Todos los links funcionando (no broken links)
  □ Imágenes con alt text
  □ Videos con subtítulos

□ SEO
  □ Meta titles y descriptions en todas las páginas
  □ Schema markup implementado
  □ Sitemap.xml generado
  □ Robots.txt configurado
  □ Canonical URLs configurados
  □ Open Graph tags completos
  □ 404 page personalizada

□ Performance
  □ Lighthouse score > 90 en todas las métricas
  □ Imágenes optimizadas (WebP + fallbacks)
  □ CSS/JS minificados
  □ Lazy loading implementado
  □ CDN configurado

□ Funcionalidad
  □ Formularios funcionando correctamente
  □ Validaciones client-side y server-side
  □ Emails de confirmación enviándose
  □ CRM integration funcionando (si aplica)
  □ Analytics tracking funcionando
  □ Mobile menu funcionando
  □ Modals/popups funcionando

□ Compatibility
  □ Testing en Chrome, Firefox, Safari, Edge
  □ Testing en iOS Safari y Chrome
  □ Testing en Android Chrome
  □ Responsive en móvil, tablet, desktop

□ Security
  □ SSL certificate instalado
  □ HTTPS forzado (redirects)
  □ HSTS header configurado
  □ CORS configurado correctamente
  □ Rate limiting en formularios
  □ reCAPTCHA funcionando

□ Legal
  □ Aviso de privacidad publicado
  □ Términos y condiciones publicados
  □ Cookie consent banner (si aplica)

□ Infrastructure
  □ DNS records configurados
  □ Email configuration (SPF, DKIM)
  □ Backup strategy configurada
  □ Monitoring/alertas configuradas
  □ Error logging configurado

□ Analytics
  □ Google Analytics 4 instalado
  □ Google Search Console verificado
  □ Sitemap enviado a Google
  □ Bing Webmaster Tools configurado

□ Post-Launch
  □ Social media posts preparados
  □ Email announcement preparado
  □ Press release (si aplica)
  □ Update company signature con nuevo URL
```

### B. Glosario de Términos

- **LCP**: Largest Contentful Paint - métrica de performance
- **FID**: First Input Delay - tiempo de respuesta a primera interacción
- **CLS**: Cumulative Layout Shift - estabilidad visual
- **Schema.org**: Vocabulario de datos estructurados
- **Open Graph**: Protocol para meta tags en redes sociales
- **Canonical URL**: URL preferida para contenido duplicado
- **Lazy Loading**: Carga diferida de recursos
- **CDN**: Content Delivery Network
- **HSTS**: HTTP Strict Transport Security
- **CORS**: Cross-Origin Resource Sharing
- **SPF/DKIM**: Protocolos de autenticación de email

---

## CONCLUSIÓN

Este plan detallado proporciona una hoja de ruta completa para el desarrollo del sitio web de IO-TECH. Los principios clave son:

1. **Simplicidad técnica**: Vanilla JS y HTML para mantenibilidad
2. **SEO primero**: Optimización desde el inicio, no como afterthought
3. **Conversión orientada**: CTAs estratégicos en todo el sitio
4. **Performance obsesivo**: Carga rápida = mejor UX + mejor SEO
5. **LLM-friendly**: Structured data para ser descubiertos por ChatGPT, Claude, etc.
6. **Escalabilidad**: Backend .NET robusto que puede crecer

El resultado será un sitio web que no solo se ve bien, sino que convierte visitantes en leads calificados, posiciona a IO-TECH como líder tecnológico, y está optimizado para los motores de búsqueda y LLMs del futuro.

---

**Documento generado para**: IO-TECH
**Fecha**: Enero 2025
**Versión**: 1.0
**Autor**: Claude (Anthropic)
**Revisión**: Pendiente

---

# FIN DEL DOCUMENTO
