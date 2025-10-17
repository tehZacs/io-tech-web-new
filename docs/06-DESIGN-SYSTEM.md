# 06 - DESIGN SYSTEM - IO-TECH

## 📋 Índice

1. [Introducción](#introducción)
2. [Sistema de Colores](#sistema-de-colores)
3. [Tipografía](#tipografía)
4. [Espaciado y Grid](#espaciado-y-grid)
5. [Componentes UI](#componentes-ui)
6. [Iconografía](#iconografía)
7. [Imágenes y Media](#imágenes-y-media)
8. [Animaciones](#animaciones)
9. [Responsive Design](#responsive-design)
10. [Accesibilidad](#accesibilidad)

---

## Introducción

El Design System de IO-TECH está basado en los patrones de **Untitled UI** adaptados a la identidad visual de la marca. Utiliza **CSS Custom Properties** para mantener consistencia y facilitar el mantenimiento.

### Principios de Diseño

1. **Consistencia** - Uso sistemático de colores, tipografía y espaciados
2. **Accesibilidad** - WCAG 2.1 AA como estándar mínimo
3. **Responsive** - Mobile-first approach
4. **Performance** - Optimización de assets y animaciones
5. **Mantenibilidad** - Variables CSS y clases reutilizables

---

## Sistema de Colores

### Paleta de Marca (Brand Colors)

Basados en el logo de IO-TECH ([logo-io-tech-color.svg](../assets/img/logo-io-tech-color.svg)):

```css
:root {
  /* Brand Colors - Cyan/Blue de IO-TECH */
  --color-brand-50: rgb(227, 247, 253);    /* #e3f7fd - Muy claro */
  --color-brand-100: rgb(184, 236, 250);   /* #b8ecfa - Claro */
  --color-brand-200: rgb(139, 224, 247);   /* #8be0f7 */
  --color-brand-300: rgb(94, 212, 244);    /* #5ed4f4 */
  --color-brand-400: rgb(58, 203, 241);    /* #3acbf1 */
  --color-brand-500: rgb(39, 174, 229);    /* #27aee5 - CYAN PRINCIPAL (logo) */
  --color-brand-600: rgb(30, 154, 208);    /* #1e9ad0 */
  --color-brand-700: rgb(18, 122, 191);    /* #127abf - AZUL MEDIO (logo) */
  --color-brand-800: rgb(20, 95, 149);     /* #145f95 */
  --color-brand-900: rgb(23, 70, 129);     /* #174681 - AZUL OSCURO (logo) */
  --color-brand-950: rgb(15, 46, 86);      /* #0f2e56 - Muy oscuro */
}
```

**Uso:**
- `brand-500`: Color principal (botones primarios, links, CTA)
- `brand-700`: Hover states, accents
- `brand-900`: Headings, texto con color de marca
- `brand-50/100`: Backgrounds suaves

---

### Colores Semánticos

#### Success (Verde)
```css
:root {
  --color-success-50: rgb(236, 253, 243);
  --color-success-100: rgb(220, 250, 230);
  --color-success-200: rgb(171, 239, 198);
  --color-success-300: rgb(117, 224, 167);
  --color-success-400: rgb(71, 205, 137);
  --color-success-500: rgb(23, 178, 106);
  --color-success-600: rgb(7, 148, 85);   /* Principal */
  --color-success-700: rgb(6, 118, 71);
  --color-success-800: rgb(8, 93, 58);
  --color-success-900: rgb(7, 77, 49);
  --color-success-950: rgb(5, 51, 33);
}
```

#### Error (Rojo)
```css
:root {
  --color-error-50: rgb(254, 243, 242);
  --color-error-100: rgb(254, 228, 226);
  --color-error-200: rgb(254, 205, 202);
  --color-error-300: rgb(253, 162, 155);
  --color-error-400: rgb(249, 112, 102);
  --color-error-500: rgb(240, 68, 56);
  --color-error-600: rgb(217, 45, 32);    /* Principal */
  --color-error-700: rgb(180, 35, 24);
  --color-error-800: rgb(145, 32, 24);
  --color-error-900: rgb(122, 39, 26);
  --color-error-950: rgb(85, 22, 12);
}
```

#### Warning (Amarillo/Naranja)
```css
:root {
  --color-warning-50: rgb(255, 250, 235);
  --color-warning-100: rgb(254, 240, 199);
  --color-warning-200: rgb(254, 223, 137);
  --color-warning-300: rgb(254, 200, 75);
  --color-warning-400: rgb(253, 176, 34);
  --color-warning-500: rgb(247, 144, 9);
  --color-warning-600: rgb(220, 104, 3);   /* Principal */
  --color-warning-700: rgb(181, 71, 8);
  --color-warning-800: rgb(147, 55, 13);
  --color-warning-900: rgb(122, 46, 14);
  --color-warning-950: rgb(78, 29, 9);
}
```

---

### Grises (Gray Scale)

```css
:root {
  --color-gray-25: rgb(253, 253, 253);
  --color-gray-50: rgb(250, 250, 250);     /* Backgrounds muy suaves */
  --color-gray-100: rgb(245, 245, 245);    /* Backgrounds suaves */
  --color-gray-200: rgb(233, 234, 235);    /* Borders sutiles */
  --color-gray-300: rgb(213, 215, 218);    /* Borders */
  --color-gray-400: rgb(164, 167, 174);    /* Iconos deshabilitados */
  --color-gray-500: rgb(113, 118, 128);    /* Placeholder text */
  --color-gray-600: rgb(83, 88, 98);       /* Secondary text */
  --color-gray-700: rgb(65, 70, 81);       /* Body text */
  --color-gray-800: rgb(37, 43, 55);       /* Headings secundarios */
  --color-gray-900: rgb(24, 29, 39);       /* Headings principales */
  --color-gray-950: rgb(10, 13, 18);       /* Negro (casi) */
}
```

---

### Colores Base

```css
:root {
  --color-white: rgb(255, 255, 255);
  --color-black: rgb(0, 0, 0);
  --color-transparent: rgb(0 0 0 / 0);
}
```

---

### Colores Semánticos de Uso (Mapped Colors)

Estos se mapean a los colores anteriores para uso contextual:

```css
:root {
  /* TEXT COLORS */
  --color-text-primary: var(--color-gray-900);         /* Títulos principales */
  --color-text-secondary: var(--color-gray-700);       /* Subtítulos */
  --color-text-tertiary: var(--color-gray-600);        /* Body text */
  --color-text-quaternary: var(--color-gray-500);      /* Text muy suave */
  --color-text-disabled: var(--color-gray-500);        /* Disabled text */
  --color-text-placeholder: var(--color-gray-500);     /* Placeholders */

  --color-text-brand-primary: var(--color-brand-900);  /* Texto con brand */
  --color-text-brand-secondary: var(--color-brand-700);
  --color-text-primary-on-brand: var(--color-white);   /* Texto sobre brand sólido */

  --color-text-error-primary: var(--color-error-600);
  --color-text-success-primary: var(--color-success-600);
  --color-text-warning-primary: var(--color-warning-600);

  /* BACKGROUND COLORS */
  --color-bg-primary: var(--color-white);              /* Fondo principal */
  --color-bg-secondary: var(--color-gray-50);          /* Fondo secundario */
  --color-bg-tertiary: var(--color-gray-100);          /* Fondo terciario */
  --color-bg-quaternary: var(--color-gray-200);

  --color-bg-brand-solid: var(--color-brand-600);      /* Botones primarios */
  --color-bg-brand-primary: var(--color-brand-50);     /* Backgrounds suaves */
  --color-bg-brand-secondary: var(--color-brand-100);

  --color-bg-error-primary: var(--color-error-50);
  --color-bg-success-primary: var(--color-success-50);
  --color-bg-warning-primary: var(--color-warning-50);

  --color-bg-disabled: var(--color-gray-100);
  --color-bg-overlay: var(--color-gray-950);           /* Modal overlays */

  /* BORDER COLORS */
  --color-border-primary: var(--color-gray-300);       /* Borders principales */
  --color-border-secondary: var(--color-gray-200);     /* Borders sutiles */
  --color-border-tertiary: var(--color-gray-100);      /* Borders muy sutiles */
  --color-border-disabled: var(--color-gray-300);

  --color-border-brand: var(--color-brand-500);
  --color-border-error: var(--color-error-500);
  --color-border-success: var(--color-success-500);

  /* FOCUS RING */
  --color-focus-ring: var(--color-brand-500);
  --color-focus-ring-error: var(--color-error-500);
}
```

---

### Gradientes

```css
:root {
  /* Gradiente principal IO-TECH */
  --gradient-primary: linear-gradient(135deg, var(--color-brand-600) 0%, var(--color-brand-900) 100%);

  /* Gradiente suave para backgrounds */
  --gradient-soft: linear-gradient(180deg, var(--color-brand-50) 0%, var(--color-white) 100%);

  /* Gradiente overlay */
  --gradient-overlay: linear-gradient(180deg, rgb(0 0 0 / 0) 0%, rgb(0 0 0 / 0.6) 100%);
}
```

**Uso:**
```css
.hero {
  background: var(--gradient-primary);
}

.hero-section {
  background-image: url('/hero-bg.jpg'), var(--gradient-overlay);
}
```

---

## Tipografía

### Fuentes

```css
:root {
  /* Font Families */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-display: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Fira Code', ui-monospace, 'Roboto Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace;
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

**Fuentes a cargar:**
- **Inter**: 400, 500, 600, 700 (body text)
- **Poppins**: 600, 700 (headings)
- **Fira Code**: 400 (code snippets)

**CDN:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&family=Fira+Code:wght@400&display=swap" rel="stylesheet">
```

---

### Escala Tipográfica

Basada en `--spacing: 4px`:

```css
:root {
  --spacing: 4px;

  /* TEXT SIZES - Body/Content */
  --text-xs: 12px;       /* calc(var(--spacing) * 3) */
  --text-xs-lh: 18px;    /* Line height */

  --text-sm: 14px;       /* calc(var(--spacing) * 3.5) */
  --text-sm-lh: 20px;

  --text-md: 16px;       /* calc(var(--spacing) * 4) - BASE */
  --text-md-lh: 24px;

  --text-lg: 18px;       /* calc(var(--spacing) * 4.5) */
  --text-lg-lh: 28px;

  --text-xl: 20px;       /* calc(var(--spacing) * 5) */
  --text-xl-lh: 30px;

  /* DISPLAY SIZES - Headings */
  --text-display-xs: 24px;    /* calc(var(--spacing) * 6) */
  --text-display-xs-lh: 32px;

  --text-display-sm: 30px;    /* calc(var(--spacing) * 7.5) */
  --text-display-sm-lh: 38px;

  --text-display-md: 36px;    /* calc(var(--spacing) * 9) */
  --text-display-md-lh: 44px;
  --text-display-md-ls: -0.72px;  /* Letter spacing */

  --text-display-lg: 48px;    /* calc(var(--spacing) * 12) */
  --text-display-lg-lh: 60px;
  --text-display-lg-ls: -0.96px;

  --text-display-xl: 60px;    /* calc(var(--spacing) * 15) */
  --text-display-xl-lh: 72px;
  --text-display-xl-ls: -1.2px;

  --text-display-2xl: 72px;   /* calc(var(--spacing) * 18) */
  --text-display-2xl-lh: 90px;
  --text-display-2xl-ls: -1.44px;
}
```

---

### Estilos de Texto

#### Headings

```css
h1, .text-display-2xl {
  font-family: var(--font-display);
  font-size: var(--text-display-2xl);
  line-height: var(--text-display-2xl-lh);
  letter-spacing: var(--text-display-2xl-ls);
  font-weight: 700;
  color: var(--color-text-primary);
}

h2, .text-display-xl {
  font-family: var(--font-display);
  font-size: var(--text-display-xl);
  line-height: var(--text-display-xl-lh);
  letter-spacing: var(--text-display-xl-ls);
  font-weight: 700;
  color: var(--color-text-primary);
}

h3, .text-display-lg {
  font-family: var(--font-display);
  font-size: var(--text-display-lg);
  line-height: var(--text-display-lg-lh);
  letter-spacing: var(--text-display-lg-ls);
  font-weight: 600;
  color: var(--color-text-primary);
}

h4, .text-display-md {
  font-family: var(--font-display);
  font-size: var(--text-display-md);
  line-height: var(--text-display-md-lh);
  letter-spacing: var(--text-display-md-ls);
  font-weight: 600;
  color: var(--color-text-primary);
}

h5, .text-display-sm {
  font-family: var(--font-display);
  font-size: var(--text-display-sm);
  line-height: var(--text-display-sm-lh);
  font-weight: 600;
  color: var(--color-text-primary);
}

h6, .text-display-xs {
  font-family: var(--font-display);
  font-size: var(--text-display-xs);
  line-height: var(--text-display-xs-lh);
  font-weight: 600;
  color: var(--color-text-primary);
}
```

#### Body Text

```css
body {
  font-family: var(--font-body);
  font-size: var(--text-md);
  line-height: var(--text-md-lh);
  color: var(--color-text-tertiary);
}

.text-xl {
  font-size: var(--text-xl);
  line-height: var(--text-xl-lh);
}

.text-lg {
  font-size: var(--text-lg);
  line-height: var(--text-lg-lh);
}

.text-md {
  font-size: var(--text-md);
  line-height: var(--text-md-lh);
}

.text-sm {
  font-size: var(--text-sm);
  line-height: var(--text-sm-lh);
}

.text-xs {
  font-size: var(--text-xs);
  line-height: var(--text-xs-lh);
}
```

#### Font Weights

```css
.font-regular { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
```

---

### Utility Classes

```css
/* Text Colors */
.text-primary { color: var(--color-text-primary); }
.text-secondary { color: var(--color-text-secondary); }
.text-tertiary { color: var(--color-text-tertiary); }
.text-brand { color: var(--color-text-brand-primary); }
.text-error { color: var(--color-text-error-primary); }
.text-success { color: var(--color-text-success-primary); }
.text-white { color: var(--color-white); }

/* Text Alignment */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Text Transform */
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }
```

---

## Espaciado y Grid

### Sistema de Espaciado

Basado en `--spacing: 4px`:

```css
:root {
  --spacing: 4px;

  /* Espacios comunes */
  --space-0: 0;
  --space-1: 4px;      /* 1 × 4px */
  --space-2: 8px;      /* 2 × 4px */
  --space-3: 12px;     /* 3 × 4px */
  --space-4: 16px;     /* 4 × 4px */
  --space-5: 20px;     /* 5 × 4px */
  --space-6: 24px;     /* 6 × 4px */
  --space-8: 32px;     /* 8 × 4px */
  --space-10: 40px;    /* 10 × 4px */
  --space-12: 48px;    /* 12 × 4px */
  --space-16: 64px;    /* 16 × 4px */
  --space-20: 80px;    /* 20 × 4px */
  --space-24: 96px;    /* 24 × 4px */
  --space-32: 128px;   /* 32 × 4px */
}
```

**Utility Classes:**

```css
/* Margin */
.m-0 { margin: 0; }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
.m-4 { margin: var(--space-4); }
.m-6 { margin: var(--space-6); }
.m-8 { margin: var(--space-8); }
/* ... hasta m-32 */

/* Margin Top */
.mt-0 { margin-top: 0; }
.mt-2 { margin-top: var(--space-2); }
.mt-4 { margin-top: var(--space-4); }
.mt-6 { margin-top: var(--space-6); }
.mt-8 { margin-top: var(--space-8); }
.mt-12 { margin-top: var(--space-12); }
.mt-16 { margin-top: var(--space-16); }
.mt-24 { margin-top: var(--space-24); }
/* Similar para mb-, ml-, mr- */

/* Padding */
.p-0 { padding: 0; }
.p-2 { padding: var(--space-2); }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }
/* ... hasta p-32 */

/* Padding específicos */
.py-16 { padding-top: var(--space-16); padding-bottom: var(--space-16); }
.py-24 { padding-top: var(--space-24); padding-bottom: var(--space-24); }
.px-4 { padding-left: var(--space-4); padding-right: var(--space-4); }
.px-8 { padding-left: var(--space-8); padding-right: var(--space-8); }
```

---

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;  /* var(--max-width-container) */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;  /* 16px */
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 2rem;  /* 32px */
    padding-right: 2rem;
  }
}
```

---

### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-8);
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive grid */
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

---

### Flex Utilities

```css
.flex { display: flex; }
.inline-flex { display: inline-flex; }

.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }

.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }

.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }

.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }
```

---

## Componentes UI

### Botones (Buttons)

#### Tamaños

```css
:root {
  --btn-height-sm: 36px;
  --btn-height-md: 44px;
  --btn-height-lg: 52px;
  --btn-height-xl: 60px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;

  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  cursor: pointer;

  transition: all 0.2s ease;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.btn-sm {
  height: var(--btn-height-sm);
  padding: 0 1rem;
  font-size: var(--text-sm);
}

.btn-md {
  height: var(--btn-height-md);
  padding: 0 1.5rem;
  font-size: var(--text-md);
}

.btn-lg {
  height: var(--btn-height-lg);
  padding: 0 2rem;
  font-size: var(--text-lg);
}

.btn-xl {
  height: var(--btn-height-xl);
  padding: 0 2.5rem;
  font-size: var(--text-xl);
}
```

#### Variantes

```css
/* Primary - Solid Brand */
.btn-primary {
  background-color: var(--color-bg-brand-solid);
  color: var(--color-text-primary-on-brand);
}

.btn-primary:hover {
  background-color: var(--color-brand-700);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Secondary - Outline */
.btn-secondary {
  background-color: transparent;
  color: var(--color-text-brand-secondary);
  border-color: var(--color-border-secondary);
}

.btn-secondary:hover {
  background-color: var(--color-bg-secondary);
  border-color: var(--color-border-primary);
}

/* Tertiary - Ghost */
.btn-tertiary {
  background-color: transparent;
  color: var(--color-text-secondary);
}

.btn-tertiary:hover {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

/* White - Para backgrounds oscuros */
.btn-white {
  background-color: var(--color-white);
  color: var(--color-brand-900);
}

.btn-white:hover {
  background-color: var(--color-gray-50);
}

/* Destructive */
.btn-destructive {
  background-color: var(--color-error-600);
  color: var(--color-white);
}

.btn-destructive:hover {
  background-color: var(--color-error-700);
}
```

#### Con Iconos

```html
<button class="btn btn-primary btn-lg">
  <svg class="w-5 h-5"><!-- icon --></svg>
  <span>Solicitar Consultoría</span>
</button>

<button class="btn btn-secondary btn-md">
  <span>Ver más</span>
  <svg class="w-5 h-5"><!-- arrow icon --></svg>
</button>
```

---

### Cards

```css
:root {
  --radius-sm: 0.25rem;  /* 4px */
  --radius-md: 0.375rem; /* 6px */
  --radius-lg: 0.5rem;   /* 8px */
  --radius-xl: 0.75rem;  /* 12px */
  --radius-2xl: 1rem;    /* 16px */
  --radius-3xl: 1.5rem;  /* 24px */
  --radius-full: 9999px;

  --shadow-sm: 0px 1px 3px rgba(10, 13, 18, 0.1), 0px 1px 2px -1px rgba(10, 13, 18, 0.1);
  --shadow-md: 0px 4px 6px -1px rgba(10, 13, 18, 0.1), 0px 2px 4px -2px rgba(10, 13, 18, 0.06);
  --shadow-lg: 0px 12px 16px -4px rgba(10, 13, 18, 0.08), 0px 4px 6px -2px rgba(10, 13, 18, 0.03);
  --shadow-xl: 0px 20px 24px -4px rgba(10, 13, 18, 0.08), 0px 8px 8px -4px rgba(10, 13, 18, 0.03);
}

.card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);

  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-elevated {
  box-shadow: var(--shadow-md);
}

.card-elevated:hover {
  box-shadow: var(--shadow-xl);
}

.card-flat {
  box-shadow: none;
  border: 1px solid var(--color-border-primary);
}
```

---

### Inputs y Forms

```css
.input {
  width: 100%;
  height: 44px;
  padding: 0 1rem;

  font-family: var(--font-body);
  font-size: var(--text-md);
  line-height: 1.5;
  color: var(--color-text-primary);

  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--radius-lg);

  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input::placeholder {
  color: var(--color-text-placeholder);
}

.input:focus {
  outline: none;
  border-color: var(--color-border-brand);
  box-shadow: 0 0 0 3px rgba(39, 174, 229, 0.1);
}

.input:disabled {
  background-color: var(--color-bg-disabled);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.input.error {
  border-color: var(--color-border-error);
}

.input.error:focus {
  box-shadow: 0 0 0 3px rgba(217, 45, 32, 0.1);
}

/* Textarea */
.textarea {
  min-height: 120px;
  padding: 0.75rem 1rem;
  resize: vertical;
}

/* Select */
.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

/* Label */
.label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
}

/* Hint/Error Text */
.hint-text {
  display: block;
  margin-top: 0.5rem;
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.error-text {
  display: block;
  margin-top: 0.5rem;
  font-size: var(--text-sm);
  color: var(--color-text-error-primary);
}
```

---

### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-full);

  font-size: var(--text-xs);
  font-weight: 500;
  line-height: 1.5;
}

.badge-brand {
  background-color: var(--color-bg-brand-primary);
  color: var(--color-text-brand-primary);
}

.badge-success {
  background-color: var(--color-bg-success-primary);
  color: var(--color-text-success-primary);
}

.badge-error {
  background-color: var(--color-bg-error-primary);
  color: var(--color-text-error-primary);
}

.badge-gray {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
}
```

---

## Iconografía

### Sistema de Iconos

IO-TECH usa iconos SVG inline para máximo control y performance.

**Tamaños estándar:**

```css
.icon-xs { width: 16px; height: 16px; }
.icon-sm { width: 20px; height: 20px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

**Featured Icons** (con background):

```css
.featured-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: var(--radius-xl);

  background-color: var(--color-bg-brand-primary);
}

.featured-icon svg {
  width: 24px;
  height: 24px;
  color: var(--color-brand-600);
}

.featured-icon-lg {
  width: 64px;
  height: 64px;
}

.featured-icon-lg svg {
  width: 32px;
  height: 32px;
}
```

---

## Imágenes y Media

### Imágenes

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}

.img-rounded {
  border-radius: var(--radius-lg);
}

.img-rounded-full {
  border-radius: var(--radius-full);
}

/* Aspect ratios */
.aspect-video {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.aspect-square {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
```

### Lazy Loading

```html
<img
  src="placeholder.jpg"
  data-src="actual-image.jpg"
  alt="Description"
  loading="lazy"
  class="lazy-image"
>
```

---

## Animaciones

### Transiciones Base

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}

.transition {
  transition: all var(--transition-base);
}
```

### Animaciones de Entrada

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

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

**JavaScript para activar:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
```

---

## Responsive Design

### Breakpoints

```css
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large */
}
```

### Media Queries

```css
/* Mobile first approach */
@media (min-width: 640px) {
  /* sm: styles */
}

@media (min-width: 768px) {
  /* md: styles */
}

@media (min-width: 1024px) {
  /* lg: styles */
}

@media (min-width: 1280px) {
  /* xl: styles */
}
```

### Utility Classes Responsive

```css
/* Display */
.hidden { display: none; }
.block { display: block; }

@media (min-width: 768px) {
  .md\:hidden { display: none; }
  .md\:block { display: block; }
  .md\:flex { display: flex; }
}

/* Text alignment */
.text-center { text-align: center; }

@media (min-width: 768px) {
  .md\:text-left { text-align: left; }
}
```

---

## Accesibilidad

### Focus States

```css
*:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-brand-600);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### ARIA Labels

Siempre incluir:
- `aria-label` en iconos sin texto
- `aria-expanded` en menus y accordions
- `aria-hidden="true"` en iconos decorativos
- `role` apropiado cuando sea necesario

---

## Archivo CSS Principal

### Estructura de `main.css`

```css
/* 1. Variables y Tokens */
@import 'tokens/colors.css';
@import 'tokens/typography.css';
@import 'tokens/spacing.css';
@import 'tokens/shadows.css';

/* 2. Base Styles */
@import 'base/reset.css';
@import 'base/typography.css';

/* 3. Layout */
@import 'layout/container.css';
@import 'layout/grid.css';

/* 4. Components */
@import 'components/buttons.css';
@import 'components/cards.css';
@import 'components/forms.css';
@import 'components/badges.css';

/* 5. Utilities */
@import 'utilities/spacing.css';
@import 'utilities/display.css';
@import 'utilities/text.css';

/* 6. Animations */
@import 'animations/transitions.css';
```

---

## Checklist de Implementación

- [ ] Cargar fuentes (Inter, Poppins, Fira Code)
- [ ] Crear archivo `tokens/colors.css` con paleta IO-TECH
- [ ] Crear archivo `tokens/typography.css` con escalas
- [ ] Implementar componentes base (Button, Card, Input)
- [ ] Crear utilities de spacing y layout
- [ ] Implementar animaciones con Intersection Observer
- [ ] Testing de accesibilidad (contraste, focus states)
- [ ] Testing responsive en todos los breakpoints

---

**Última actualización**: Octubre 2025
**Versión**: 1.0
**Estado**: Design System completo - Listo para implementación

---

✨ **Design System IO-TECH basado en Untitled UI** ✨
