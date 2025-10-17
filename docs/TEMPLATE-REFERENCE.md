# TEMPLATE-REFERENCE - Untitled UI React Components

## 📋 Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Estructura de Color y Temas](#estructura-de-color-y-temas)
3. [Inventario de Componentes](#inventario-de-componentes)
4. [Patrones de Diseño](#patrones-de-diseño)
5. [Adaptación para IO-TECH](#adaptación-para-io-tech)
6. [Conversión React → Vanilla JS](#conversión-react--vanilla-js)
7. [Ejemplos de Implementación](#ejemplos-de-implementación)

---

## Resumen Ejecutivo

Los templates de la carpeta `template_example/` son ejemplos de **Untitled UI** para React/Next.js con **Tailwind CSS**. Estos templates sirven como **referencia visual y de componentes**, pero NO se usará React en el proyecto IO-TECH.

### ✅ Qué SÍ usar de los templates:
- **Diseño visual** y disposición de elementos
- **Clases de Tailwind CSS** (migrar a vanilla CSS)
- **Patrones de componentes** (hero, features, CTAs, etc.)
- **Estructura de color** (adaptando "brand" a los colores de IO-TECH)
- **Responsive patterns** (breakpoints y mobile-first)

### ❌ Qué NO usar:
- React components (convertir a vanilla JS)
- Next.js patterns (usar HTML estático)
- Framer Motion (convertir a CSS animations o vanilla JS)
- React hooks (useState, useEffect → vanilla JS equivalents)

---

## Estructura de Color y Temas

### Color System (Basado en theme.css)

Los templates usan un sistema de colores robusto con **variables CSS** que incluye:

#### 1. Brand Colors (Purple - Template)
```css
/* Template usa purple como color de marca */
--color-brand-50: rgb(249 245 255);
--color-brand-100: rgb(244 235 255);
--color-brand-200: rgb(233 215 254);
--color-brand-300: rgb(214 187 251);
--color-brand-400: rgb(182 146 246);
--color-brand-500: rgb(158 119 237);  /* Brand principal */
--color-brand-600: rgb(127 86 217);   /* Brand hover */
--color-brand-700: rgb(105 65 198);
--color-brand-800: rgb(83 56 158);
--color-brand-900: rgb(66 48 125);
--color-brand-950: rgb(44 28 95);
```

#### 2. Adaptación a IO-TECH (Cyan/Blue)

**Mapeo de colores IO-TECH → Template:**

| IO-TECH Color | Hex | Template Equivalent | Uso |
|---------------|-----|---------------------|-----|
| Primary Light | `#27aee5` (Cyan) | `--color-brand-500` | Brand principal, CTAs |
| Primary Dark | `#174681` (Blue) | `--color-brand-900` | Text brand, headings |
| Accent | `#127abf` (Blue Medium) | `--color-brand-700` | Hover states, accents |

**Nueva paleta generada para IO-TECH:**
```css
/* IO-TECH Brand Colors - Basados en logo */
--color-brand-50: rgb(227 247 253);    /* #e3f7fd - Muy claro */
--color-brand-100: rgb(184 236 250);   /* #b8ecfa */
--color-brand-200: rgb(139 224 247);   /* #8be0f7 */
--color-brand-300: rgb(94 212 244);    /* #5ed4f4 */
--color-brand-400: rgb(58 203 241);    /* #3acbf1 */
--color-brand-500: rgb(39 174 229);    /* #27aee5 - Logo celeste */
--color-brand-600: rgb(30 154 208);    /* #1e9ad0 */
--color-brand-700: rgb(18 122 191);    /* #127abf - Logo accent */
--color-brand-800: rgb(20 95 149);     /* #145f95 */
--color-brand-900: rgb(23 70 129);     /* #174681 - Logo azul oscuro */
--color-brand-950: rgb(15 46 86);      /* #0f2e56 - Muy oscuro */
```

#### 3. Semantic Colors

Los templates incluyen colores semánticos que se mantendrán:

```css
/* Success (Green) */
--color-success-600: rgb(7 148 85);

/* Error (Red) */
--color-error-600: rgb(217 45 32);

/* Warning (Yellow) */
--color-warning-600: rgb(220 104 3);

/* Grays */
--color-gray-50: rgb(250 250 250);
--color-gray-900: rgb(24 29 39);
--color-gray-950: rgb(10 13 18);
```

#### 4. Text Colors (Semantic)

```css
/* Basados en context */
--color-text-primary: var(--color-gray-900);        /* Títulos */
--color-text-secondary: var(--color-gray-700);      /* Subtítulos */
--color-text-tertiary: var(--color-gray-600);       /* Body text */
--color-text-brand-primary: var(--color-brand-900); /* Text con brand */
--color-text-brand-secondary: var(--color-brand-700);
```

#### 5. Background Colors

```css
--color-bg-primary: var(--color-white);             /* Fondo principal */
--color-bg-secondary: var(--color-gray-50);         /* Fondo secundario */
--color-bg-brand-solid: var(--color-brand-600);     /* Botones sólidos */
--color-bg-brand-primary: var(--color-brand-50);    /* Backgrounds suaves */
```

### Dark Mode Support

Los templates incluyen soporte para dark mode con inversión de colores:

```css
.dark-mode {
  --color-text-primary: var(--color-gray-50);
  --color-bg-primary: var(--color-gray-950);
  /* etc. */
}
```

**Para IO-TECH:** Implementar dark mode es opcional en MVP, pero la estructura ya está preparada.

---

## Inventario de Componentes

### Componentes Disponibles en Templates

Basados en los archivos encontrados y la documentación de [untitledui.com/react/marketing](https://www.untitledui.com/react/marketing):

#### 1. **Header & Navigation** (20 componentes)

**Ejemplo en lp-17:**
```tsx
// template_example/lp-17/src/components/marketing/header-navigation/dropdown-header-navigation.tsx

<header className="sticky top-0 z-50 bg-primary border-b border-secondary">
  <nav className="mx-auto flex max-w-container items-center justify-between px-4 md:px-8 py-4">
    <Logo />
    <div className="hidden md:flex items-center gap-8">
      <NavLinks />
    </div>
    <div className="flex items-center gap-3">
      <Button color="secondary">Log in</Button>
      <Button color="primary">Sign up</Button>
    </div>
  </nav>
</header>
```

**Patrones identificados:**
- Sticky header (`position: sticky; top: 0`)
- Responsive menu (hamburger en mobile)
- Dropdown menus
- CTA buttons en header
- Logo con link a home

**Para IO-TECH:**
- Header sticky con logo IO-TECH
- Nav: Servicios, Soluciones, Nosotros, Recursos, Contacto
- CTA: "Solicitar Consultoría"

---

#### 2. **Hero Sections** (44 componentes)

**Ejemplo de landing-page-12.tsx:**
```tsx
<section className="relative overflow-hidden pt-16 md:pb-24">
  <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8">
    <div className="flex flex-col gap-6 text-center">
      <h1 className="text-display-md font-semibold text-primary md:text-display-lg">
        Banking, but for digital creators
      </h1>
      <p className="text-lg text-tertiary md:text-xl">
        The future of banking is here. Manage your finances with ease.
      </p>
    </div>

    <Form className="mt-8 flex w-full flex-col items-stretch gap-4">
      <Input size="md" name="phone" placeholder="+1 (555) 000-0000" />
      <Button type="submit" size="xl">Text me a link</Button>
    </Form>

    <div className="relative">
      <IPhoneMockup />
    </div>
  </div>
</section>
```

**Patrones Hero identificados:**
1. **Text-centered** con CTA
2. **Text + Image** (split 50/50)
3. **Hero con mockup** (device mockup)
4. **Hero con video background**
5. **Hero con form** (lead capture)
6. **Hero con stats** (trust indicators)

**Para IO-TECH Homepage Hero:**
```html
<section class="hero bg-gradient-primary py-24 md:py-32">
  <div class="container mx-auto px-4 md:px-8">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-display-lg font-semibold text-white">
        Transformamos Ideas en Soluciones Tecnológicas de Alto Impacto
      </h1>
      <p class="mt-6 text-xl text-white/80">
        Más de 7 años impulsando la innovación digital en México con +200 especialistas certificados
      </p>
      <div class="mt-8 flex gap-4 justify-center">
        <button class="btn-primary-solid">Solicitar Consultoría Gratuita</button>
        <button class="btn-secondary-outline">Ver Casos de Éxito</button>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-12 flex gap-8 justify-center text-white">
        <div>
          <p class="text-4xl font-bold">+200</p>
          <p class="text-sm opacity-80">Especialistas</p>
        </div>
        <div>
          <p class="text-4xl font-bold">+400</p>
          <p class="text-sm opacity-80">Certificaciones</p>
        </div>
        <div>
          <p class="text-4xl font-bold">7+</p>
          <p class="text-sm opacity-80">Años de experiencia</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

#### 3. **Features Sections** (42 componentes)

**Patrones encontrados:**
- **Grid layout** (2, 3, 4 columnas)
- **Tabbed features** (tabs para alternar features)
- **Feature cards** con iconos
- **Feature list** con checks
- **Feature comparison** (tabla)

**Ejemplo de estructura:**
```tsx
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center mb-12">
      <h2 className="text-display-md font-semibold">Everything you need</h2>
      <p className="mt-4 text-lg text-tertiary">Powerful features for modern teams</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(feature => (
        <div className="flex flex-col gap-4">
          <div className="w-12 h-12 rounded-lg bg-brand-primary flex items-center justify-center">
            <Icon className="w-6 h-6 text-brand-solid" />
          </div>
          <h3 className="text-xl font-semibold">{feature.title}</h3>
          <p className="text-tertiary">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

**Para IO-TECH - 6 Servicios:**
```html
<section class="py-24 bg-secondary">
  <div class="container mx-auto px-4">
    <h2 class="text-center text-display-md">Nuestros Servicios</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
      <!-- Servicio 1: Infraestructura y Nube -->
      <div class="card p-8">
        <img src="/assets/img/services/infraestructura-nube.svg" alt="" class="w-16 h-16">
        <h3 class="text-xl font-semibold mt-6">Infraestructura y Nube</h3>
        <p class="mt-4 text-tertiary">Migración, administración multi-cloud y disaster recovery</p>
        <a href="/servicios/infraestructura-nube/" class="mt-6 btn-link">Ver más →</a>
      </div>

      <!-- Repetir para 5 servicios más -->
    </div>
  </div>
</section>
```

---

#### 4. **CTA Sections** (20 componentes)

**Patrones:**
- **Centered CTA** (simple)
- **Split CTA** (text + image)
- **Card-based CTA** (con borde/sombra)
- **Full-width banner** (color sólido)

**Ejemplo:**
```tsx
<section className="py-16 bg-brand-section">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-display-sm font-semibold text-primary-on-brand">
      Ready to get started?
    </h2>
    <p className="mt-4 text-xl text-secondary-on-brand">
      Join thousands of companies already using our platform
    </p>
    <div className="mt-8 flex gap-4 justify-center">
      <Button color="white" size="xl">Get started</Button>
      <Button color="secondary-on-brand" size="xl">Learn more</Button>
    </div>
  </div>
</section>
```

**Para IO-TECH:**
- CTAs en cada página de servicio: "Solicitar Evaluación Gratuita"
- CTA en homepage: "Solicitar Consultoría"
- CTA en casos de éxito: "¿Necesitas algo similar?"

---

#### 5. **Testimonials** (26 componentes)

**Patrones:**
- **Carousel** (slider de testimonios)
- **Grid** (3 columnas)
- **Featured testimonial** (uno destacado + varios pequeños)
- **Video testimonials**

**Para IO-TECH:**
Testimonios de clientes como FGR, SICT, Telmex, Banorte.

---

#### 6. **Footer** (40 componentes)

**Estructura típica:**
```tsx
<footer className="bg-gray-900 py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Logo + descripción */}
      <div className="col-span-1">
        <Logo variant="white" />
        <p className="mt-4 text-sm text-gray-300">
          Transformamos organizaciones con tecnología de clase mundial
        </p>
      </div>

      {/* Links */}
      <div>
        <h4 className="font-semibold text-white">Servicios</h4>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white">Infraestructura</a></li>
          {/* ... */}
        </ul>
      </div>

      {/* Repetir columnas */}
    </div>

    <div className="mt-12 pt-8 border-t border-gray-700">
      <p className="text-center text-sm text-gray-400">
        © 2025 IO-TECH. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>
```

---

#### 7. **FAQ Sections** (16 componentes)

**Patrón Accordion:**
```tsx
<Accordion>
  <AccordionItem>
    <AccordionTrigger>¿Qué servicios ofrecen?</AccordionTrigger>
    <AccordionContent>
      Ofrecemos 6 servicios principales: Infraestructura y Nube...
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

**Vanilla JS equivalente:**
```javascript
class Accordion {
  constructor(element) {
    this.element = element;
    this.triggers = element.querySelectorAll('[data-accordion-trigger]');
    this.init();
  }

  init() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', () => this.toggle(trigger));
    });
  }

  toggle(trigger) {
    const content = trigger.nextElementSibling;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    // Close all
    this.triggers.forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      t.nextElementSibling.style.maxHeight = '0';
    });

    // Open clicked if it was closed
    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
}

// Initialize all accordions
document.querySelectorAll('[data-accordion]').forEach(el => {
  new Accordion(el);
});
```

---

#### 8. **Pricing Sections** (22 componentes)

**Patrón típico:**
- 3 tiers (Basic, Pro, Enterprise)
- Feature comparison
- Toggle monthly/yearly

**Para IO-TECH:**
No aplica pricing público (servicios enterprise), pero se puede usar el patrón para comparar planes de servicio.

---

#### 9. **Metrics/Stats** (16 componentes)

**Ejemplo:**
```tsx
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <p className="text-5xl font-bold text-brand-solid">200+</p>
        <p className="mt-2 text-tertiary">Especialistas</p>
      </div>
      {/* ... */}
    </div>
  </div>
</section>
```

**Para IO-TECH:**
- +200 especialistas
- +400 certificaciones
- 7+ años de experiencia
- +50 clientes enterprise

---

#### 10. **Contact Forms** (36 componentes)

**Patrón multi-step para IO-TECH:**
```javascript
class MultiStepForm {
  constructor(formElement) {
    this.form = formElement;
    this.steps = Array.from(formElement.querySelectorAll('[data-step]'));
    this.currentStep = 0;
    this.init();
  }

  init() {
    this.showStep(0);
    this.form.querySelector('[data-next]').addEventListener('click', () => this.next());
    this.form.querySelector('[data-prev]').addEventListener('click', () => this.prev());
  }

  showStep(index) {
    this.steps.forEach((step, i) => {
      step.classList.toggle('hidden', i !== index);
    });
    this.currentStep = index;
  }

  next() {
    if (this.validateStep()) {
      if (this.currentStep < this.steps.length - 1) {
        this.showStep(this.currentStep + 1);
      }
    }
  }

  prev() {
    if (this.currentStep > 0) {
      this.showStep(this.currentStep - 1);
    }
  }

  validateStep() {
    const currentStepEl = this.steps[this.currentStep];
    const inputs = currentStepEl.querySelectorAll('input[required], select[required]');

    for (let input of inputs) {
      if (!input.validity.valid) {
        input.reportValidity();
        return false;
      }
    }
    return true;
  }
}
```

---

## Patrones de Diseño

### 1. **Responsive Breakpoints**

Los templates usan Tailwind breakpoints:

```css
/* Breakpoints estándar */
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

**Clases Tailwind:**
- `md:text-display-lg` - Solo en pantallas ≥ 768px
- `lg:grid-cols-3` - 3 columnas en desktop
- `max-lg:hidden` - Ocultar en mobile/tablet

**Convertir a vanilla CSS:**
```css
/* Mobile first */
.hero-title {
  font-size: var(--text-display-md);
}

/* Desktop */
@media (min-width: 768px) {
  .hero-title {
    font-size: var(--text-display-lg);
  }
}
```

---

### 2. **Layout Patterns**

#### Container
```css
.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

#### Grid System
```css
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### 3. **Typography Scale**

Basado en `typography.css`:

```css
/* Text sizes */
--text-xs: calc(var(--spacing) * 3);     /* 12px */
--text-sm: calc(var(--spacing) * 3.5);   /* 14px */
--text-md: calc(var(--spacing) * 4);     /* 16px */
--text-lg: calc(var(--spacing) * 4.5);   /* 18px */
--text-xl: calc(var(--spacing) * 5);     /* 20px */

/* Display sizes (headings) */
--text-display-xs: calc(var(--spacing) * 6);    /* 24px */
--text-display-sm: calc(var(--spacing) * 7.5);  /* 30px */
--text-display-md: calc(var(--spacing) * 9);    /* 36px */
--text-display-lg: calc(var(--spacing) * 12);   /* 48px */
--text-display-xl: calc(var(--spacing) * 15);   /* 60px */
--text-display-2xl: calc(var(--spacing) * 18);  /* 72px */
```

**Line heights correspondientes:**
```css
--text-md--line-height: calc(var(--spacing) * 6);  /* 24px para 16px text */
```

**Usar en IO-TECH:**
```css
h1 {
  font-size: var(--text-display-lg);
  line-height: var(--text-display-lg--line-height);
  font-weight: 600;
  letter-spacing: -0.96px;
}
```

---

### 4. **Spacing System**

Basado en `--spacing: 4px` (unidad base):

```css
:root {
  --spacing: 4px;
}

/* Usar múltiplos */
.mt-2 { margin-top: calc(var(--spacing) * 2); }  /* 8px */
.mt-4 { margin-top: calc(var(--spacing) * 4); }  /* 16px */
.mt-8 { margin-top: calc(var(--spacing) * 8); }  /* 32px */
.mt-16 { margin-top: calc(var(--spacing) * 16); } /* 64px */
```

---

### 5. **Button Patterns**

Los templates tienen múltiples variantes de botones:

```css
/* Primary button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);

  font-size: var(--text-md);
  font-weight: 600;
  line-height: 1.5;

  background-color: var(--color-bg-brand-solid);
  color: var(--color-text-primary_on-brand);
  border: 1px solid transparent;

  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: var(--color-bg-brand-solid_hover);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Secondary button */
.btn-secondary {
  background-color: transparent;
  color: var(--color-text-brand-secondary);
  border: 1px solid var(--color-border-secondary);
}

.btn-secondary:hover {
  background-color: var(--color-bg-secondary);
}
```

**Sizes:**
```css
.btn-sm { padding: 0.5rem 1rem; font-size: var(--text-sm); }
.btn-md { padding: 0.75rem 1.5rem; font-size: var(--text-md); }
.btn-lg { padding: 1rem 2rem; font-size: var(--text-lg); }
.btn-xl { padding: 1.25rem 2.5rem; font-size: var(--text-xl); }
```

---

### 6. **Card Pattern**

```css
.card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--radius-xl);
  padding: 2rem;

  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

---

### 7. **Animation Patterns**

**Convertir Framer Motion a CSS:**

Framer Motion (React):
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

CSS + Intersection Observer (Vanilla JS):
```css
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// Intersection Observer para animaciones on scroll
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', observeElements);
```

---

## Adaptación para IO-TECH

### 1. Color Mapping

**Reemplazar en todas las clases Tailwind:**

| Template Class | IO-TECH Class | Color |
|----------------|---------------|-------|
| `bg-brand-solid` | `bg-brand-solid` | `#27aee5` |
| `text-brand-secondary` | `text-brand-secondary` | `#127abf` |
| `text-brand-primary` | `text-brand-primary` | `#174681` |
| `bg-brand-primary` | `bg-brand-primary` | `#e3f7fd` (light cyan) |

### 2. Typography

**Fuentes para IO-TECH:**
```css
:root {
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-display: 'Poppins', -apple-system, sans-serif;
  --font-mono: 'Fira Code', monospace;
}

body {
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}

code, pre {
  font-family: var(--font-mono);
}
```

### 3. Componentes Prioritarios para IO-TECH

**Fase 1 (MVP):**
1. Header con nav
2. Footer
3. Hero section (homepage)
4. Service cards (grid de 6 servicios)
5. CTA sections
6. Contact form (multi-step)

**Fase 2:**
7. Testimonials carousel
8. Stats/metrics section
9. FAQ accordion
10. Blog card grid

**Fase 3:**
11. Tabbed features (para páginas de servicios)
12. Case study cards
13. Team cards
14. Partners logos grid

---

## Conversión React → Vanilla JS

### Guía de Conversión de Patrones

#### 1. **Estado (useState)**

React:
```tsx
const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
```

Vanilla JS:
```javascript
class MobileMenu {
  constructor(buttonEl, menuEl) {
    this.button = buttonEl;
    this.menu = menuEl;
    this.isOpen = false;

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.menu.classList.toggle('hidden', !this.isOpen);
    this.button.setAttribute('aria-expanded', this.isOpen);
  }
}
```

---

#### 2. **Efectos (useEffect)**

React:
```tsx
useEffect(() => {
  document.addEventListener('scroll', handleScroll);
  return () => document.removeEventListener('scroll', handleScroll);
}, []);
```

Vanilla JS:
```javascript
class StickyHeader {
  constructor(headerEl) {
    this.header = headerEl;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const scrolled = window.scrollY > 50;
    this.header.classList.toggle('scrolled', scrolled);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-header]');
  new StickyHeader(header);
});
```

---

#### 3. **Formularios Controlados**

React:
```tsx
const [email, setEmail] = useState('');

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

Vanilla JS:
```javascript
class ContactForm {
  constructor(formEl) {
    this.form = formEl;
    this.data = {};

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.form.addEventListener('input', (e) => this.handleInput(e));
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.data[name] = value;
    this.validate(name, value);
  }

  validate(name, value) {
    const input = this.form.querySelector(`[name="${name}"]`);
    const isValid = input.checkValidity();

    input.classList.toggle('invalid', !isValid);
    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.form.checkValidity()) {
      this.form.reportValidity();
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.data)
      });

      if (response.ok) {
        this.showSuccess();
      } else {
        this.showError();
      }
    } catch (error) {
      this.showError(error.message);
    }
  }

  showSuccess() {
    this.form.innerHTML = '<p class="text-success-primary">¡Mensaje enviado!</p>';
  }

  showError(message = 'Error al enviar') {
    alert(message);
  }
}
```

---

#### 4. **Componentes Reutilizables**

React:
```tsx
function ServiceCard({ title, description, icon, link }) {
  return (
    <div className="card">
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Ver más →</a>
    </div>
  );
}
```

Vanilla JS con Templates:
```javascript
class ServiceCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${this.data.icon}" alt="" class="w-16 h-16" />
      <h3 class="text-xl font-semibold mt-6">${this.data.title}</h3>
      <p class="mt-4 text-tertiary">${this.data.description}</p>
      <a href="${this.data.link}" class="mt-6 btn-link">Ver más →</a>
    `;

    return card;
  }
}

// Uso
const services = [
  {
    title: 'Infraestructura y Nube',
    description: 'Migración y administración multi-cloud',
    icon: '/assets/img/services/infraestructura-nube.svg',
    link: '/servicios/infraestructura-nube/'
  },
  // ...
];

const container = document.querySelector('[data-services-grid]');
services.forEach(service => {
  const card = new ServiceCard(service);
  container.appendChild(card.render());
});
```

---

#### 5. **Tabs Component**

React:
```tsx
function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-list">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {items[activeTab].content}
      </div>
    </div>
  );
}
```

Vanilla JS:
```javascript
class Tabs {
  constructor(tabsEl) {
    this.tabs = tabsEl;
    this.buttons = Array.from(tabsEl.querySelectorAll('[data-tab-button]'));
    this.panels = Array.from(tabsEl.querySelectorAll('[data-tab-panel]'));
    this.activeIndex = 0;

    this.init();
  }

  init() {
    this.buttons.forEach((button, index) => {
      button.addEventListener('click', () => this.setActive(index));
    });

    this.setActive(0);
  }

  setActive(index) {
    // Deactivate all
    this.buttons.forEach(btn => {
      btn.setAttribute('aria-selected', 'false');
      btn.classList.remove('active');
    });
    this.panels.forEach(panel => {
      panel.setAttribute('hidden', '');
      panel.classList.remove('active');
    });

    // Activate selected
    this.buttons[index].setAttribute('aria-selected', 'true');
    this.buttons[index].classList.add('active');
    this.panels[index].removeAttribute('hidden');
    this.panels[index].classList.add('active');

    this.activeIndex = index;
  }
}

// HTML structure
/*
<div data-tabs>
  <div role="tablist">
    <button data-tab-button role="tab">Tab 1</button>
    <button data-tab-button role="tab">Tab 2</button>
  </div>

  <div data-tab-panel role="tabpanel">Content 1</div>
  <div data-tab-panel role="tabpanel" hidden>Content 2</div>
</div>
*/
```

---

#### 6. **Modal/Dialog**

```javascript
class Modal {
  constructor(modalEl) {
    this.modal = modalEl;
    this.overlay = modalEl.querySelector('[data-modal-overlay]');
    this.closeBtn = modalEl.querySelector('[data-modal-close]');

    this.init();
  }

  init() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.hidden) {
        this.close();
      }
    });
  }

  open() {
    this.modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    // Focus first focusable element
    const firstFocusable = this.modal.querySelector('button, a, input, textarea');
    firstFocusable?.focus();
  }

  close() {
    this.modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
}

// Usage
const modal = new Modal(document.querySelector('[data-modal]'));

document.querySelector('[data-modal-trigger]').addEventListener('click', () => {
  modal.open();
});
```

---

## Ejemplos de Implementación

### Homepage Completa - Estructura

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IO-TECH | Soluciones Tecnológicas de Alto Impacto</title>

  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
  <!-- Header -->
  <header data-header class="header sticky top-0 bg-primary border-b border-secondary">
    <nav class="container mx-auto flex items-center justify-between py-4">
      <a href="/" class="logo">
        <img src="/assets/img/logo-io-tech-color.svg" alt="IO-TECH" class="h-10">
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="/servicios/" class="nav-link">Servicios</a>
        <a href="/soluciones/" class="nav-link">Soluciones</a>
        <a href="/nosotros/" class="nav-link">Nosotros</a>
        <a href="/recursos/" class="nav-link">Recursos</a>
      </div>

      <div class="flex items-center gap-4">
        <a href="/contacto/" class="btn-primary">Solicitar Consultoría</a>
        <button data-mobile-menu-trigger class="md:hidden">
          <svg><!-- hamburger icon --></svg>
        </button>
      </div>
    </nav>
  </header>

  <!-- Hero -->
  <section class="hero bg-gradient-primary py-24 md:py-32">
    <div class="container mx-auto text-center">
      <h1 class="text-display-lg font-semibold text-white fade-in-up">
        Transformamos Ideas en Soluciones Tecnológicas de Alto Impacto
      </h1>
      <p class="mt-6 text-xl text-white/80 fade-in-up" style="animation-delay: 0.1s">
        Más de 7 años impulsando la innovación digital en México
      </p>

      <div class="mt-8 flex gap-4 justify-center fade-in-up" style="animation-delay: 0.2s">
        <a href="/contacto/" class="btn-primary-solid">Solicitar Consultoría Gratuita</a>
        <a href="/soluciones/casos-exito/" class="btn-secondary-outline">Ver Casos de Éxito</a>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-16 flex gap-12 justify-center text-white fade-in-up" style="animation-delay: 0.3s">
        <div>
          <p class="text-5xl font-bold">+200</p>
          <p class="text-sm opacity-80">Especialistas Certificados</p>
        </div>
        <div>
          <p class="text-5xl font-bold">+400</p>
          <p class="text-sm opacity-80">Certificaciones</p>
        </div>
        <div>
          <p class="text-5xl font-bold">7+</p>
          <p class="text-sm opacity-80">Años de Experiencia</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Value Proposition -->
  <section class="py-24">
    <div class="container mx-auto text-center">
      <h2 class="text-display-sm font-semibold">¿Por qué IO-TECH?</h2>
      <p class="mt-4 text-lg text-tertiary max-w-2xl mx-auto">
        Somos el partner tecnológico que tu organización necesita
      </p>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card text-center fade-in-up">
          <div class="w-16 h-16 mx-auto rounded-full bg-brand-primary flex items-center justify-center">
            <svg class="w-8 h-8 text-brand-solid"><!-- icon --></svg>
          </div>
          <h3 class="mt-6 text-xl font-semibold">Experiencia Comprobada</h3>
          <p class="mt-4 text-tertiary">7+ años trabajando con gobierno y sector privado</p>
        </div>

        <!-- Repetir 2 más -->
      </div>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="py-24 bg-secondary">
    <div class="container mx-auto">
      <h2 class="text-center text-display-sm font-semibold">Nuestros Servicios</h2>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-services-grid>
        <!-- Services will be injected by JS -->
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 bg-brand-section">
    <div class="container mx-auto text-center">
      <h2 class="text-display-sm font-semibold text-primary-on-brand">
        ¿Listo para transformar tu organización?
      </h2>
      <p class="mt-4 text-xl text-secondary-on-brand">
        Agenda una consultoría gratuita con nuestros expertos
      </p>
      <div class="mt-8">
        <a href="/contacto/" class="btn-white-solid">Solicitar Consultoría</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 py-12 text-white">
    <!-- Footer content -->
  </footer>

  <script src="/assets/js/app.js" type="module"></script>
</body>
</html>
```

---

## Recursos Adicionales

### Documentación Oficial
- **Untitled UI React Docs**: [untitledui.com/react/docs](https://www.untitledui.com/react/docs/introduction)
- **Untitled UI Marketing Components**: [untitledui.com/react/marketing](https://www.untitledui.com/react/marketing)
- **Tailwind CSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

### Carpetas de Templates
- `template_example/lp12/` - Landing Page 12
- `template_example/lp-17/` - Landing Page 17
- `template_example/bp-04/` - Business Page 04
- `template_example/untitled-ui/` - Untitled UI base
- `template_example/untitledui-nextjs-starter-kit/` - Starter kit

### Archivos Clave
- `template_example/lp12/src/styles/theme.css` - Sistema de colores completo
- `template_example/lp12/src/styles/typography.css` - Sistema tipográfico
- `template_example/lp12/src/app/landing-page-12.tsx` - Ejemplo de página completa

---

## Próximos Pasos

1. **Crear variables CSS adaptadas** con colores IO-TECH
2. **Implementar componentes base** (Button, Card, Container)
3. **Desarrollar Header y Footer** reutilizables
4. **Crear página Homepage** usando patrones de templates
5. **Implementar sistema de componentes JS** (vanilla)
6. **Optimizar performance** (lazy loading, intersection observer)

---

**Última actualización**: Octubre 2025
**Versión**: 1.0
**Estado**: Documentación completa - Lista para implementación

---

✨ **Templates analizados y listos para adaptar a IO-TECH** ✨
