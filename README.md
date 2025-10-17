# IO-TECH Website

Sitio web corporativo de IO-TECH desarrollado con React, Vite y Tailwind CSS, optimizado para rendimiento máximo y SEO.

## 🚀 Características

- **React 19**: Framework moderno y eficiente
- **Vite**: Build tool ultra-rápido con HMR
- **Tailwind CSS v4**: Utility-first CSS framework
- **Optimizado para Performance**:
  - Code splitting automático
  - Lazy loading de componentes
  - Minificación avanzada
  - CSS optimizado
- **SEO Optimizado**:
  - Meta tags completos
  - Open Graph y Twitter Cards
  - Schema.org structured data
  - Optimización para AI search engines
- **Diseño Responsivo**: Mobile-first approach
- **Accesibilidad**: WCAG 2.1 AA compliant

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── base/           # Componentes base reutilizables
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── layout/         # Componentes de layout
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/       # Secciones de la página
│       ├── HeroSection.jsx
│       ├── ServicesSection.jsx
│       └── CertificationsSection.jsx
├── App.jsx            # Componente principal
├── main.jsx          # Entry point
└── index.css         # Estilos globales
```

## 🎨 Diseño

El diseño está inspirado en los mejores templates de Tailwind UI:
- **Spotlight**: Para el hero section moderno
- **Protocol**: Para la estructura de documentación
- **Radiant**: Para efectos visuales y gradientes

### Paleta de Colores

```css
Brand Blue:
- 50:  #E6F2FF
- 100: #CCE5FF
- 500: #007BFF (Primary)
- 600: #0062CC
- 700: #004A99
```

## ⚡ Optimizaciones de Performance

### Componentes
- Sin event handlers innecesarios
- Transiciones CSS puras (no JavaScript)
- Memoización cuando es necesario
- Minimal re-renders

### Build
- Code splitting por vendor
- Tree shaking automático
- Minificación con Terser
- Assets optimizados

### SEO
- Meta tags completos
- Structured data (Schema.org)
- Canonical URLs
- Sitemap XML (pendiente)

## 🔧 Configuración

### Tailwind CSS
El proyecto usa Tailwind CSS v4 con configuración personalizada en `tailwind.config.js`:
- Colores de marca personalizados
- Tipografía optimizada (Inter + Plus Jakarta Sans)
- Animaciones sutiles
- Utilidades personalizadas

### Vite
Configurado para máximo rendimiento en `vite.config.js`:
- Code splitting optimizado
- Minificación avanzada
- Source maps deshabilitados en producción
- Optimización de dependencias

## 📱 Responsividad

Breakpoints de Tailwind CSS:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## 🌐 SEO y AI Optimization

El sitio está optimizado para:
- Google Search
- Bing
- ChatGPT search
- Perplexity AI
- Other AI search engines

Incluye:
- Meta tags específicos para AI
- Structured data completo
- Semántica HTML5 correcta
- Accessibilidad mejorada

## 📄 Licencia

© 2025 IO-TECH. Todos los derechos reservados.

## 🚀 Deploy

El sitio está listo para deploy en:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

```bash
# Build para producción
npm run build

# El directorio dist/ contiene los archivos estáticos optimizados
```

## 🤝 Contribución

Este es un proyecto privado de IO-TECH. Para consultas contactar a: contacto@io-tech.com.mx
