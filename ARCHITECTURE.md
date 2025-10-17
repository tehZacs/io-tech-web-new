# Arquitectura del Proyecto IO-TECH Web

## Principio de Consistencia

**IMPORTANTE**: Este proyecto prioriza la **consistencia** por encima de todo. Todos los componentes compartidos deben estar centralizados y reutilizarse en todas las páginas.

## Estructura de Componentes

### Componentes de Layout (Globales)

Estos componentes se usan en **TODAS** las páginas y están definidos en `src/App.jsx`:

#### 1. Header (Navegación Principal)
- **Ubicación**: `src/components/navigation/Header.jsx`
- **Uso**: Importado en `App.jsx` - se muestra en todas las rutas
- **Características**:
  - Transparente al inicio (`bg-transparent`)
  - Sólido al hacer scroll > 50px (`bg-white`)
  - Logo cambia de blanco a color según scroll
  - Mega menú de servicios con dropdown
  - Navegación responsive con menú móvil
  - **NUNCA** duplicar este componente

#### 2. Footer
- **Ubicación**: `src/components/navigation/Footer.jsx` (si existe)
- **Uso**: Importado en `App.jsx` - se muestra en todas las rutas

### Componentes de Secciones (Reutilizables)

Estos componentes se usan en múltiples páginas:

#### Hero Sections
- `ImprovedHeroSection.jsx` - Hero principal con slideshow de imágenes
- Se usa en: HomePage

#### Service Cards
- `ServicesSection.jsx` - Grid de tarjetas de servicios
- Se usa en: HomePage
- **Variante Protocol**: Tarjetas con patrón diagonal, bordes gradient

#### Certificaciones
- `CertificationsSection.jsx` - Logos de certificaciones
- Se usa en: HomePage
- Hover effects con escala reducida

#### CTA (Call to Action)
- `CTASection.jsx` - Sección de llamada a la acción
- Fondo con animated gradient mesh (5 blobs orgánicos)
- Se usa en: HomePage, ServiciosPage

### Componentes Base (Primitivos)

Ubicados en `src/components/base/`:

#### Card
- Ubicación: `src/components/base/Card.jsx`
- Variantes disponibles:
  - `default` - Tarjeta blanca básica
  - `protocol` - Fondo dark con patrón diagonal y bordes cyan
- Props:
  - `variant` - tipo de tarjeta
  - `hover` - habilita efectos hover
  - `className` - clases adicionales

#### Button
- Ubicación: `src/components/base/Button.jsx`
- Variantes: primary, secondary, etc.

## Páginas

### HomePage (`/`)
- Componentes: ImprovedHeroSection + ServicesSection + CertificationsSection + CTASection

### ServiciosPage (`/servicios`)
- Hero con imagen de fondo (datacenter-001.jpg)
- Grid de servicios con Cards variant="protocol"
- Fondo oscuro (`bg-gray-900`)
- CTASection al final

### Otras páginas
- Por definir siguiendo el mismo patrón de consistencia

## Reglas de Desarrollo

### ❌ NO HACER
1. **NO** crear componentes Header duplicados en carpetas diferentes
2. **NO** crear estilos inline que sobrescriban el sistema de diseño
3. **NO** duplicar lógica entre componentes
4. **NO** usar diferentes variantes de componentes base sin justificación

### ✅ HACER
1. **SÍ** reutilizar componentes existentes
2. **SÍ** mantener consistencia visual entre páginas
3. **SÍ** documentar cambios arquitectónicos en este archivo
4. **SÍ** consultar este documento antes de crear nuevos componentes

## Sistema de Diseño

### Colores
- **Brand**: Cyan/Teal (`brand-*`)
- **Accent**: Cyan más brillante (`accent-*`)
- **Fondos oscuros**: `bg-gray-900`
- **Textos en oscuro**: `text-white`, `text-gray-300`, `text-cyan-400`

### Efectos
- **Transparencia en scroll**: Header cambia a 50px de scroll
- **Hover animations**: `transition-all`, `hover:scale-*`, `hover:gap-*`
- **Blur effects**: `backdrop-blur-*` para glassmorphism

### Patrones Visuales
- **Protocol Style**: Diagonal grid pattern con SVG, bordes gradient cyan/blue
- **Gradient Mesh**: 5 blobs animados con diferentes velocidades
- **Card Shadows**: `shadow-sm`, `hover:shadow-md`

## Historial de Cambios

### 2025-10-16
- ❌ Eliminado: `src/components/layout/Header.jsx` (duplicado)
- ✅ Header único en: `src/components/navigation/Header.jsx`
- ✅ Cambio de `sticky` a `fixed` en Header
- ✅ Threshold de scroll aumentado de 20px a 50px
- ✅ ServiciosPage actualizada con fondo oscuro y Cards protocol

---

**Última actualización**: 2025-10-16
**Mantenedor**: Claude Code
**Principio guía**: CONSISTENCIA
