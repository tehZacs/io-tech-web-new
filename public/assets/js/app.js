/**
 * IO-TECH Website - Main Application Entry Point
 *
 * This file initializes all components and sets up the application.
 */

import Header from './components/Header.js';
import MobileMenu from './components/MobileMenu.js';
import { ready } from './utils/dom.js';
import { animateOnScroll } from './utils/animations.js';

/**
 * Application class
 */
class App {
  constructor() {
    this.components = new Map();
    this.isInitialized = false;
  }

  /**
   * Initialize the application
   */
  init() {
    if (this.isInitialized) {
      console.warn('App is already initialized');
      return;
    }

    console.log('🚀 Initializing IO-TECH Website...');

    // Initialize components
    this.initHeader();
    this.initMobileMenu();
    this.initScrollAnimations();
    this.initSmoothScroll();
    this.initExternalLinks();

    this.isInitialized = true;
    console.log('✅ IO-TECH Website initialized successfully');

    // Emit custom event
    document.dispatchEvent(new CustomEvent('app:ready'));
  }

  /**
   * Initialize Header component
   */
  initHeader() {
    const headerElement = document.querySelector('[data-component="header"]');

    if (headerElement) {
      const header = new Header(headerElement, {
        stickyClass: 'is-sticky',
        scrollThreshold: 50
      });

      this.components.set('header', header);
      console.log('✓ Header component initialized');
    }
  }

  /**
   * Initialize MobileMenu component
   */
  initMobileMenu() {
    const mobileMenuElement = document.querySelector('[data-component="mobile-menu"]');

    if (mobileMenuElement) {
      const mobileMenu = new MobileMenu(mobileMenuElement, {
        animationDuration: 300,
        closeOnOutsideClick: true,
        closeOnEscape: true,
        lockBodyScroll: true
      });

      this.components.set('mobileMenu', mobileMenu);
      console.log('✓ Mobile menu component initialized');
    }
  }

  /**
   * Initialize scroll animations for elements
   */
  initScrollAnimations() {
    // Animate cards on scroll
    const cards = document.querySelectorAll('[data-animate="card"]');
    if (cards.length > 0) {
      animateOnScroll(cards, {
        animationClass: 'animate-slide-up',
        threshold: 0.1,
        once: true,
        delay: 100
      });
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('[data-animate="section"]');
    if (sections.length > 0) {
      animateOnScroll(sections, {
        animationClass: 'animate-fade-in',
        threshold: 0.15,
        once: true
      });
    }

    // Animate headings on scroll
    const headings = document.querySelectorAll('[data-animate="heading"]');
    if (headings.length > 0) {
      animateOnScroll(headings, {
        animationClass: 'animate-slide-up',
        threshold: 0.2,
        once: true
      });
    }

    console.log('✓ Scroll animations initialized');
  }

  /**
   * Initialize smooth scroll for anchor links
   */
  initSmoothScroll() {
    // Add smooth scroll behavior to HTML element
    document.documentElement.style.scrollBehavior = 'smooth';

    console.log('✓ Smooth scroll initialized');
  }

  /**
   * Initialize external links (open in new tab with security)
   */
  initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(link => {
      // Skip links to the same domain
      if (link.hostname === window.location.hostname) {
        return;
      }

      // Add target="_blank" and security attributes
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');

      // Add external link icon (optional)
      if (link.dataset.externalIcon !== 'false') {
        link.classList.add('external-link');
      }
    });

    console.log('✓ External links initialized');
  }

  /**
   * Get a component instance by name
   * @param {string} name
   * @returns {BaseComponent|null}
   */
  getComponent(name) {
    return this.components.get(name) || null;
  }

  /**
   * Destroy all components and cleanup
   */
  destroy() {
    console.log('🧹 Cleaning up IO-TECH Website...');

    // Destroy all components
    this.components.forEach((component, name) => {
      if (component && typeof component.destroy === 'function') {
        component.destroy();
        console.log(`✓ ${name} component destroyed`);
      }
    });

    this.components.clear();
    this.isInitialized = false;

    console.log('✅ Cleanup complete');
  }
}

/**
 * Create and export app instance
 */
const app = new App();

/**
 * Initialize app when DOM is ready
 */
ready(() => {
  app.init();
});

/**
 * Export app instance for global access
 */
export default app;

/**
 * Expose app to window for debugging (only in development)
 */
if (import.meta.env?.MODE === 'development' || process.env.NODE_ENV === 'development') {
  window.ioTechApp = app;
  console.log('💡 App instance available at window.ioTechApp');
}
