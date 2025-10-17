# 03 - SISTEMA DE COMPONENTES - Vanilla JavaScript

## 📋 Índice

1. [Arquitectura de Componentes](#arquitectura-de-componentes)
2. [Componentes Base](#componentes-base)
3. [Componentes de Navegación](#componentes-de-navegación)
4. [Componentes de Formularios](#componentes-de-formularios)
5. [Componentes de Contenido](#componentes-de-contenido)
6. [Utilidades y Helpers](#utilidades-y-helpers)
7. [Gestión de Estado](#gestión-de-estado)
8. [Sistema de Eventos](#sistema-de-eventos)

---

## Arquitectura de Componentes

### Principios

1. **Vanilla JavaScript** - Sin frameworks (NO React, Vue, Angular)
2. **Basados en clases ES6** - Reutilizables y mantenibles
3. **Progressive Enhancement** - Funcionan sin JS, mejoran con JS
4. **Web Standards** - Usan APIs modernas del navegador
5. **Accesibilidad** - ARIA labels, keyboard navigation, focus management

### Estructura de Archivos

```
assets/js/
├── app.js                 # Entry point, inicializa componentes
├── components/
│   ├── Header.js          # Header sticky con menú mobile
│   ├── MobileMenu.js      # Menú hamburguesa
│   ├── Accordion.js       # FAQ accordion
│   ├── Tabs.js            # Tabs component
│   ├── Modal.js           # Modal/Dialog
│   ├── Carousel.js        # Testimonials carousel
│   ├── ContactForm.js     # Multi-step form
│   ├── ServiceCard.js     # Service cards
│   └── Newsletter.js      # Newsletter signup
├── utils/
│   ├── dom.js             # DOM helpers
│   ├── validation.js      # Form validation
│   ├── api.js             # API calls
│   └── animations.js      # Animation utilities
└── lib/
    └── observer.js        # Intersection Observer wrapper
```

---

## Componentes Base

### 1. Base Component Class

Clase base que extienden todos los componentes:

```javascript
// assets/js/components/BaseComponent.js

class BaseComponent {
  constructor(element, options = {}) {
    if (!element) {
      throw new Error('Element is required');
    }

    this.element = element;
    this.options = {
      ...this.constructor.defaults,
      ...options
    };

    this.state = {};
    this.boundEvents = [];

    this.init();
  }

  /**
   * Initialize component - Override in subclasses
   */
  init() {
    // To be implemented by subclasses
  }

  /**
   * Add event listener and track for cleanup
   */
  on(target, event, handler, options) {
    const boundHandler = handler.bind(this);
    target.addEventListener(event, boundHandler, options);

    this.boundEvents.push({
      target,
      event,
      handler: boundHandler,
      options
    });

    return this;
  }

  /**
   * Remove all event listeners
   */
  destroy() {
    this.boundEvents.forEach(({ target, event, handler, options }) => {
      target.removeEventListener(event, handler, options);
    });

    this.boundEvents = [];
  }

  /**
   * Update component state
   */
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  /**
   * Render component - Override in subclasses
   */
  render() {
    // To be implemented by subclasses
  }

  /**
   * Query selector within component
   */
  $(selector) {
    return this.element.querySelector(selector);
  }

  /**
   * Query selector all within component
   */
  $$(selector) {
    return Array.from(this.element.querySelectorAll(selector));
  }

  /**
   * Default options - Override in subclasses
   */
  static get defaults() {
    return {};
  }
}

export default BaseComponent;
```

---

## Componentes de Navegación

### 2. Header Component

Header sticky con scroll behavior:

```javascript
// assets/js/components/Header.js

import BaseComponent from './BaseComponent.js';

class Header extends BaseComponent {
  static get defaults() {
    return {
      scrollThreshold: 50,
      stickyClass: 'is-sticky',
      hiddenClass: 'is-hidden'
    };
  }

  init() {
    this.lastScroll = 0;
    this.ticking = false;

    this.on(window, 'scroll', this.handleScroll);
  }

  handleScroll() {
    this.lastScroll = window.scrollY;

    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.updateHeader(this.lastScroll);
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  updateHeader(scrollY) {
    const { scrollThreshold, stickyClass, hiddenClass } = this.options;

    // Add sticky class when scrolled past threshold
    if (scrollY > scrollThreshold) {
      this.element.classList.add(stickyClass);
    } else {
      this.element.classList.remove(stickyClass);
    }

    // Hide header when scrolling down, show when scrolling up
    if (scrollY > this.lastScrollY && scrollY > 100) {
      this.element.classList.add(hiddenClass);
    } else {
      this.element.classList.remove(hiddenClass);
    }

    this.lastScrollY = scrollY;
  }

  destroy() {
    super.destroy();
    this.element.classList.remove(this.options.stickyClass, this.options.hiddenClass);
  }
}

export default Header;
```

**HTML:**
```html
<header data-header class="header">
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
      <a href="/contacto/" class="btn btn-primary">Solicitar Consultoría</a>
      <button data-mobile-menu-trigger class="md:hidden" aria-label="Abrir menú">
        <svg class="w-6 h-6"><!-- hamburger icon --></svg>
      </button>
    </div>
  </nav>
</header>
```

**CSS:**
```css
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-bg-primary);
  border-bottom: 1px solid var(--color-border-secondary);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.header.is-sticky {
  box-shadow: var(--shadow-md);
}

.header.is-hidden {
  transform: translateY(-100%);
}
```

---

### 3. Mobile Menu Component

Menú hamburguesa con animación:

```javascript
// assets/js/components/MobileMenu.js

import BaseComponent from './BaseComponent.js';

class MobileMenu extends BaseComponent {
  static get defaults() {
    return {
      openClass: 'is-open',
      bodyLockClass: 'menu-open'
    };
  }

  init() {
    this.trigger = document.querySelector('[data-mobile-menu-trigger]');
    this.closeBtn = this.$('[data-mobile-menu-close]');
    this.overlay = this.$('[data-mobile-menu-overlay]');

    if (!this.trigger) {
      console.warn('Mobile menu trigger not found');
      return;
    }

    this.isOpen = false;

    // Event listeners
    this.on(this.trigger, 'click', this.toggle);

    if (this.closeBtn) {
      this.on(this.closeBtn, 'click', this.close);
    }

    if (this.overlay) {
      this.on(this.overlay, 'click', this.close);
    }

    // Close on ESC key
    this.on(document, 'keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Close on link click
    this.$$('a').forEach(link => {
      this.on(link, 'click', () => {
        if (this.isOpen) {
          this.close();
        }
      });
    });
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.element.classList.add(this.options.openClass);
    document.body.classList.add(this.options.bodyLockClass);

    // Update ARIA
    this.trigger.setAttribute('aria-expanded', 'true');
    this.element.setAttribute('aria-hidden', 'false');

    // Focus first link
    const firstLink = this.$('a');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 300);
    }
  }

  close() {
    this.isOpen = false;
    this.element.classList.remove(this.options.openClass);
    document.body.classList.remove(this.options.bodyLockClass);

    // Update ARIA
    this.trigger.setAttribute('aria-expanded', 'false');
    this.element.setAttribute('aria-hidden', 'true');
  }
}

export default MobileMenu;
```

**HTML:**
```html
<div data-mobile-menu class="mobile-menu" aria-hidden="true">
  <div data-mobile-menu-overlay class="mobile-menu__overlay"></div>

  <div class="mobile-menu__content">
    <div class="flex items-center justify-between p-4 border-b">
      <img src="/assets/img/logo-io-tech-color.svg" alt="IO-TECH" class="h-8">
      <button data-mobile-menu-close aria-label="Cerrar menú">
        <svg class="w-6 h-6"><!-- close icon --></svg>
      </button>
    </div>

    <nav class="p-4">
      <a href="/servicios/" class="mobile-menu__link">Servicios</a>
      <a href="/soluciones/" class="mobile-menu__link">Soluciones</a>
      <a href="/nosotros/" class="mobile-menu__link">Nosotros</a>
      <a href="/recursos/" class="mobile-menu__link">Recursos</a>
      <a href="/contacto/" class="mobile-menu__link mobile-menu__link--cta">Contacto</a>
    </nav>
  </div>
</div>
```

**CSS:**
```css
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s;
}

.mobile-menu.is-open {
  visibility: visible;
  opacity: 1;
}

.mobile-menu__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.mobile-menu__content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 400px;
  background-color: var(--color-bg-primary);
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-menu.is-open .mobile-menu__content {
  transform: translateX(0);
}

.mobile-menu__link {
  display: block;
  padding: 1rem 0;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid var(--color-border-tertiary);
  transition: color 0.2s;
}

.mobile-menu__link:hover {
  color: var(--color-text-primary);
}

.mobile-menu__link--cta {
  color: var(--color-brand-600);
  font-weight: 600;
}

body.menu-open {
  overflow: hidden;
}
```

---

### 4. Accordion Component (FAQ)

```javascript
// assets/js/components/Accordion.js

import BaseComponent from './BaseComponent.js';

class Accordion extends BaseComponent {
  static get defaults() {
    return {
      allowMultiple: false,  // Allow multiple panels open
      openClass: 'is-open'
    };
  }

  init() {
    this.items = this.$$('[data-accordion-item]');
    this.triggers = this.$$('[data-accordion-trigger]');
    this.panels = this.$$('[data-accordion-panel]');

    // Set initial ARIA attributes
    this.triggers.forEach((trigger, index) => {
      const panelId = `accordion-panel-${index}`;
      const panel = this.panels[index];

      trigger.setAttribute('aria-controls', panelId);
      trigger.setAttribute('aria-expanded', 'false');
      panel.setAttribute('id', panelId);
      panel.setAttribute('role', 'region');
      panel.style.maxHeight = '0';
    });

    // Event listeners
    this.triggers.forEach((trigger, index) => {
      this.on(trigger, 'click', () => this.toggle(index));
    });
  }

  toggle(index) {
    const isOpen = this.triggers[index].getAttribute('aria-expanded') === 'true';

    if (!this.options.allowMultiple) {
      // Close all other panels
      this.closeAll();
    }

    if (isOpen) {
      this.close(index);
    } else {
      this.open(index);
    }
  }

  open(index) {
    const trigger = this.triggers[index];
    const panel = this.panels[index];
    const item = this.items[index];

    trigger.setAttribute('aria-expanded', 'true');
    item.classList.add(this.options.openClass);
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }

  close(index) {
    const trigger = this.triggers[index];
    const panel = this.panels[index];
    const item = this.items[index];

    trigger.setAttribute('aria-expanded', 'false');
    item.classList.remove(this.options.openClass);
    panel.style.maxHeight = '0';
  }

  closeAll() {
    this.triggers.forEach((_, index) => {
      this.close(index);
    });
  }
}

export default Accordion;
```

**HTML:**
```html
<div data-accordion class="accordion">
  <div data-accordion-item class="accordion__item">
    <button data-accordion-trigger class="accordion__trigger">
      <span>¿Qué servicios ofrecen?</span>
      <svg class="accordion__icon"><!-- chevron icon --></svg>
    </button>
    <div data-accordion-panel class="accordion__panel">
      <div class="accordion__content">
        <p>Ofrecemos 6 servicios principales: Infraestructura y Nube, Desarrollo de Software, Inteligencia de Negocio, Experiencia Digital, Ciberseguridad y Consultoría Tecnológica.</p>
      </div>
    </div>
  </div>

  <!-- Más items -->
</div>
```

**CSS:**
```css
.accordion__item {
  border-bottom: 1px solid var(--color-border-secondary);
}

.accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 0;
  text-align: left;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}

.accordion__trigger:hover {
  color: var(--color-brand-600);
}

.accordion__icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.accordion__item.is-open .accordion__icon {
  transform: rotate(180deg);
}

.accordion__panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion__content {
  padding-bottom: 1.5rem;
  color: var(--color-text-tertiary);
}
```

---

## Componentes de Formularios

### 5. Contact Form (Multi-step)

```javascript
// assets/js/components/ContactForm.js

import BaseComponent from './BaseComponent.js';
import { validateEmail, validatePhone, validateRequired } from '../utils/validation.js';
import { submitForm } from '../utils/api.js';

class ContactForm extends BaseComponent {
  static get defaults() {
    return {
      apiEndpoint: '/api/contact',
      successMessage: '¡Gracias! Nos pondremos en contacto pronto.',
      errorMessage: 'Ocurrió un error. Por favor intenta nuevamente.'
    };
  }

  init() {
    this.currentStep = 0;
    this.steps = this.$$('[data-step]');
    this.nextBtn = this.$('[data-next]');
    this.prevBtn = this.$('[data-prev]');
    this.submitBtn = this.$('[data-submit]');
    this.progressBar = this.$('[data-progress-bar]');
    this.stepIndicators = this.$$('[data-step-indicator]');

    this.formData = {};

    // Event listeners
    this.on(this.element, 'submit', this.handleSubmit);

    if (this.nextBtn) {
      this.on(this.nextBtn, 'click', this.nextStep);
    }

    if (this.prevBtn) {
      this.on(this.prevBtn, 'click', this.prevStep);
    }

    // Track input changes
    this.on(this.element, 'input', this.handleInput);
    this.on(this.element, 'blur', this.handleBlur, true);

    this.showStep(0);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.formData[name] = value;

    // Clear error on input
    this.clearError(e.target);
  }

  handleBlur(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      this.validateField(e.target);
    }
  }

  validateField(field) {
    const { name, value, type } = field;
    let error = null;

    // Required validation
    if (field.hasAttribute('required') && !validateRequired(value)) {
      error = 'Este campo es requerido';
    }

    // Email validation
    if (type === 'email' && value && !validateEmail(value)) {
      error = 'Ingresa un email válido';
    }

    // Phone validation
    if (type === 'tel' && value && !validatePhone(value)) {
      error = 'Ingresa un teléfono válido';
    }

    if (error) {
      this.showError(field, error);
      return false;
    } else {
      this.clearError(field);
      return true;
    }
  }

  validateStep() {
    const currentStepEl = this.steps[this.currentStep];
    const fields = currentStepEl.querySelectorAll('input[required], select[required], textarea[required]');

    let isValid = true;

    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  showError(field, message) {
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');

    let errorEl = field.parentElement.querySelector('.error-text');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'error-text';
      field.parentElement.appendChild(errorEl);
    }

    errorEl.textContent = message;
  }

  clearError(field) {
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');

    const errorEl = field.parentElement.querySelector('.error-text');
    if (errorEl) {
      errorEl.remove();
    }
  }

  nextStep() {
    if (!this.validateStep()) {
      return;
    }

    if (this.currentStep < this.steps.length - 1) {
      this.showStep(this.currentStep + 1);
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.showStep(this.currentStep - 1);
    }
  }

  showStep(index) {
    // Hide all steps
    this.steps.forEach(step => {
      step.classList.add('hidden');
    });

    // Show current step
    this.steps[index].classList.remove('hidden');
    this.currentStep = index;

    // Update buttons
    if (this.prevBtn) {
      this.prevBtn.style.display = index === 0 ? 'none' : 'block';
    }

    if (this.nextBtn) {
      this.nextBtn.style.display = index === this.steps.length - 1 ? 'none' : 'block';
    }

    if (this.submitBtn) {
      this.submitBtn.style.display = index === this.steps.length - 1 ? 'block' : 'none';
    }

    // Update progress bar
    if (this.progressBar) {
      const progress = ((index + 1) / this.steps.length) * 100;
      this.progressBar.style.width = `${progress}%`;
    }

    // Update step indicators
    this.stepIndicators.forEach((indicator, i) => {
      if (i < index) {
        indicator.classList.add('completed');
        indicator.classList.remove('active');
      } else if (i === index) {
        indicator.classList.add('active');
        indicator.classList.remove('completed');
      } else {
        indicator.classList.remove('active', 'completed');
      }
    });

    // Focus first input
    const firstInput = this.steps[index].querySelector('input, select, textarea');
    if (firstInput) {
      firstInput.focus();
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateStep()) {
      return;
    }

    // Disable submit button
    if (this.submitBtn) {
      this.submitBtn.disabled = true;
      this.submitBtn.textContent = 'Enviando...';
    }

    try {
      const response = await submitForm(this.options.apiEndpoint, this.formData);

      if (response.ok) {
        this.showSuccess();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      this.showErrorMessage();
    } finally {
      if (this.submitBtn) {
        this.submitBtn.disabled = false;
        this.submitBtn.textContent = 'Enviar';
      }
    }
  }

  showSuccess() {
    this.element.innerHTML = `
      <div class="text-center py-8">
        <svg class="w-16 h-16 mx-auto text-success-600 mb-4">
          <!-- checkmark icon -->
        </svg>
        <h3 class="text-display-sm font-semibold mb-2">¡Mensaje Enviado!</h3>
        <p class="text-tertiary">${this.options.successMessage}</p>
      </div>
    `;
  }

  showErrorMessage() {
    const messageEl = document.createElement('div');
    messageEl.className = 'alert alert-error';
    messageEl.textContent = this.options.errorMessage;

    this.element.insertBefore(messageEl, this.element.firstChild);

    setTimeout(() => {
      messageEl.remove();
    }, 5000);
  }
}

export default ContactForm;
```

**HTML:**
```html
<form data-contact-form class="contact-form">
  <!-- Progress bar -->
  <div class="progress-bar">
    <div data-progress-bar class="progress-bar__fill"></div>
  </div>

  <!-- Step indicators -->
  <div class="flex justify-center gap-2 mb-8">
    <div data-step-indicator class="step-indicator"></div>
    <div data-step-indicator class="step-indicator"></div>
    <div data-step-indicator class="step-indicator"></div>
  </div>

  <!-- Step 1: Contact Info -->
  <div data-step>
    <h3 class="text-display-sm mb-6">Información de Contacto</h3>

    <div class="form-group">
      <label for="name" class="label">Nombre completo</label>
      <input
        type="text"
        id="name"
        name="name"
        class="input"
        required
        aria-required="true"
      >
    </div>

    <div class="form-group">
      <label for="email" class="label">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        class="input"
        required
        aria-required="true"
      >
    </div>

    <div class="form-group">
      <label for="phone" class="label">Teléfono</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        class="input"
        required
        aria-required="true"
      >
    </div>
  </div>

  <!-- Step 2: Company Info -->
  <div data-step class="hidden">
    <h3 class="text-display-sm mb-6">Información de Empresa</h3>

    <div class="form-group">
      <label for="company" class="label">Empresa</label>
      <input
        type="text"
        id="company"
        name="company"
        class="input"
        required
      >
    </div>

    <div class="form-group">
      <label for="industry" class="label">Industria</label>
      <select id="industry" name="industry" class="input select" required>
        <option value="">Selecciona una opción</option>
        <option value="gobierno">Gobierno</option>
        <option value="financiero">Sector Financiero</option>
        <option value="telecomunicaciones">Telecomunicaciones</option>
        <option value="retail">Retail</option>
        <option value="otro">Otro</option>
      </select>
    </div>
  </div>

  <!-- Step 3: Project Details -->
  <div data-step class="hidden">
    <h3 class="text-display-sm mb-6">Detalles del Proyecto</h3>

    <div class="form-group">
      <label for="service" class="label">Servicio de Interés</label>
      <select id="service" name="service" class="input select" required>
        <option value="">Selecciona un servicio</option>
        <option value="infraestructura">Infraestructura y Nube</option>
        <option value="desarrollo">Desarrollo de Software</option>
        <option value="bi">Inteligencia de Negocio</option>
        <option value="experiencia">Experiencia Digital</option>
        <option value="ciberseguridad">Ciberseguridad</option>
        <option value="consultoria">Consultoría</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message" class="label">Mensaje</label>
      <textarea
        id="message"
        name="message"
        class="input textarea"
        rows="5"
        required
      ></textarea>
    </div>
  </div>

  <!-- Navigation buttons -->
  <div class="flex justify-between mt-8">
    <button type="button" data-prev class="btn btn-secondary" style="display: none;">
      Anterior
    </button>
    <button type="button" data-next class="btn btn-primary">
      Siguiente
    </button>
    <button type="submit" data-submit class="btn btn-primary" style="display: none;">
      Enviar
    </button>
  </div>
</form>
```

---

## Componentes de Contenido

### 6. Service Card Component

```javascript
// assets/js/components/ServiceCard.js

class ServiceCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'card fade-in-up';

    card.innerHTML = `
      <div class="featured-icon mb-6">
        <img src="${this.data.icon}" alt="" class="icon-lg">
      </div>
      <h3 class="text-xl font-semibold text-primary mb-4">${this.data.title}</h3>
      <p class="text-tertiary mb-6">${this.data.description}</p>
      <a href="${this.data.link}" class="btn btn-tertiary">
        <span>Ver más</span>
        <svg class="icon-sm"><!-- arrow icon --></svg>
      </a>
    `;

    return card;
  }

  static renderAll(services, container) {
    services.forEach(serviceData => {
      const card = new ServiceCard(serviceData);
      container.appendChild(card.render());
    });
  }
}

export default ServiceCard;
```

**Uso:**
```javascript
// app.js
import ServiceCard from './components/ServiceCard.js';

const services = [
  {
    title: 'Infraestructura y Nube',
    description: 'Migración, administración multi-cloud y disaster recovery',
    icon: '/assets/img/services/infraestructura-nube.svg',
    link: '/servicios/infraestructura-nube/'
  },
  // ... más servicios
];

const container = document.querySelector('[data-services-grid]');
ServiceCard.renderAll(services, container);
```

---

## Utilidades y Helpers

### 7. DOM Utilities

```javascript
// assets/js/utils/dom.js

/**
 * Query selector helper
 */
export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

/**
 * Query selector all helper
 */
export const $$ = (selector, context = document) => {
  return Array.from(context.querySelectorAll(selector));
};

/**
 * Create element with attributes
 */
export const createElement = (tag, attributes = {}, children = []) => {
  const el = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      el.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        el.dataset[dataKey] = dataValue;
      });
    } else {
      el.setAttribute(key, value);
    }
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });

  return el;
};

/**
 * Debounce function
 */
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

/**
 * Throttle function
 */
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
```

---

### 8. Validation Utilities

```javascript
// assets/js/utils/validation.js

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.trim() !== '';
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  // Mexican phone format: 10 digits
  const re = /^\d{10}$/;
  return re.test(phone.replace(/\D/g, ''));
};

export const validateMin = (value, min) => {
  return value.length >= min;
};

export const validateMax = (value, max) => {
  return value.length <= max;
};

export const validatePattern = (value, pattern) => {
  const re = new RegExp(pattern);
  return re.test(value);
};
```

---

### 9. API Utilities

```javascript
// assets/js/utils/api.js

/**
 * Submit form data to API
 */
export const submitForm = async (endpoint, data) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * GET request
 */
export const get = async (endpoint) => {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
```

---

### 10. Animation Utilities

```javascript
// assets/js/utils/animations.js

/**
 * Intersection Observer for scroll animations
 */
export class ScrollAnimations {
  constructor(options = {}) {
    this.options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.options
    );
  }

  observe(elements) {
    if (typeof elements === 'string') {
      elements = document.querySelectorAll(elements);
    }

    elements.forEach(el => this.observer.observe(el));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        this.observer.unobserve(entry.target);
      }
    });
  }

  destroy() {
    this.observer.disconnect();
  }
}

/**
 * Smooth scroll to element
 */
export const scrollTo = (target, options = {}) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) return;

  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    ...options
  };

  element.scrollIntoView(defaultOptions);
};
```

---

## Entry Point (app.js)

```javascript
// assets/js/app.js

import Header from './components/Header.js';
import MobileMenu from './components/MobileMenu.js';
import Accordion from './components/Accordion.js';
import ContactForm from './components/ContactForm.js';
import ServiceCard from './components/ServiceCard.js';
import { ScrollAnimations } from './utils/animations.js';

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Header
  const header = document.querySelector('[data-header]');
  if (header) {
    new Header(header);
  }

  // Mobile Menu
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (mobileMenu) {
    new MobileMenu(mobileMenu);
  }

  // Accordions
  document.querySelectorAll('[data-accordion]').forEach(accordion => {
    new Accordion(accordion);
  });

  // Contact Form
  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    new ContactForm(contactForm);
  }

  // Scroll Animations
  const scrollAnimations = new ScrollAnimations();
  scrollAnimations.observe('.fade-in-up');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('✅ IO-TECH App initialized');
});
```

---

## Module Loading

**En HTML:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- ... -->
</head>
<body>
  <!-- Content -->

  <!-- Load app as module -->
  <script src="/assets/js/app.js" type="module"></script>
</body>
</html>
```

---

## Testing Components

### Manual Testing Checklist

- [ ] Header sticky behavior funciona
- [ ] Mobile menu abre/cierra correctamente
- [ ] Accordion expande/colapsa items
- [ ] Form valida campos requeridos
- [ ] Form muestra errores apropiados
- [ ] Form navega entre steps
- [ ] Form se envía correctamente
- [ ] Animaciones se activan on scroll
- [ ] Todos los componentes son accesibles (teclado, screen readers)
- [ ] No hay errores en consola

---

## Performance Best Practices

1. **Lazy load components** - Cargar solo cuando se necesitan
2. **Use event delegation** - Para listas grandes de elementos
3. **Debounce/throttle** - Para eventos de scroll/resize
4. **RequestAnimationFrame** - Para animaciones suaves
5. **Intersection Observer** - Para scroll animations (mejor que scroll listeners)
6. **Clean up listeners** - Usar método `destroy()` cuando componentes se eliminan

---

**Última actualización**: Octubre 2025
**Versión**: 1.0
**Estado**: Sistema de componentes completo - Listo para implementación

---

✨ **Componentes Vanilla JS para IO-TECH** ✨
