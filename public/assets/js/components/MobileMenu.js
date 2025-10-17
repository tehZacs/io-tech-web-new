/**
 * MobileMenu Component
 *
 * Slide-in mobile navigation with:
 * - Smooth slide animation
 * - Body scroll lock when open
 * - Close on outside click
 * - Focus trap for accessibility
 * - ESC key to close
 */

import BaseComponent from './BaseComponent.js';
import { lockScroll, unlockScroll, trapFocus } from '../utils/dom.js';

export default class MobileMenu extends BaseComponent {
  static defaults = {
    openClass: 'is-open',
    overlayClass: 'mobile-menu-overlay',
    animationDuration: 300,
    closeOnOutsideClick: true,
    closeOnEscape: true,
    lockBodyScroll: true
  };

  init() {
    // Get references
    this.menuPanel = this.element;
    this.closeButton = this.$('[data-mobile-menu-close]');
    this.navLinks = this.$$('.mobile-nav-link');
    this.overlay = null;
    this.focusTrap = null;

    // Initialize state
    this.setState({
      isOpen: false,
      wasOpenedByKeyboard: false
    }, true);

    // Create overlay element
    this.createOverlay();

    // Setup event listeners
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Close button
    if (this.closeButton) {
      this.on(this.closeButton, 'click', this.close);
    }

    // Navigation links - close menu when clicked
    this.navLinks.forEach(link => {
      this.on(link, 'click', () => {
        this.close();
      });
    });

    // Listen for toggle event from Header component
    this.on(document, 'mobileMenuToggle', (event) => {
      if (event.detail.isOpen) {
        this.open();
      } else {
        this.close();
      }
    });

    // Close on ESC key
    if (this.options.closeOnEscape) {
      this.on(document, 'keydown', this.handleEscapeKey);
    }

    // Close on outside click
    if (this.options.closeOnOutsideClick && this.overlay) {
      this.on(this.overlay, 'click', this.close);
    }

    // Handle page navigation (close menu on browser back/forward)
    this.on(window, 'popstate', this.close);
  }

  /**
   * Create overlay element
   */
  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = this.options.overlayClass;
    this.overlay.setAttribute('aria-hidden', 'true');
    this.overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity ${this.options.animationDuration}ms ease-in-out;
      z-index: 1299;
      display: none;
    `;

    // Insert overlay before menu in DOM
    this.element.parentNode.insertBefore(this.overlay, this.element);
  }

  /**
   * Open mobile menu
   */
  open() {
    if (this.state.isOpen) return;

    // Update state
    this.setState({ isOpen: true });

    // Show overlay
    if (this.overlay) {
      this.overlay.style.display = 'block';
      // Force reflow for animation
      this.overlay.offsetHeight;
      this.overlay.style.opacity = '1';
    }

    // Show menu panel
    this.addClass(this.options.openClass);
    this.setAttribute('aria-hidden', 'false');

    // Lock body scroll
    if (this.options.lockBodyScroll) {
      lockScroll();
    }

    // Setup focus trap
    this.focusTrap = trapFocus(this.element);

    // Focus first focusable element or close button
    setTimeout(() => {
      const firstFocusable = this.$('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) {
        firstFocusable.focus();
      } else if (this.closeButton) {
        this.closeButton.focus();
      }
    }, this.options.animationDuration);

    // Emit event
    this.emit('open');
  }

  /**
   * Close mobile menu
   */
  close() {
    if (!this.state.isOpen) return;

    // Update state
    this.setState({ isOpen: false });

    // Hide overlay
    if (this.overlay) {
      this.overlay.style.opacity = '0';
      setTimeout(() => {
        this.overlay.style.display = 'none';
      }, this.options.animationDuration);
    }

    // Hide menu panel
    this.removeClass(this.options.openClass);
    this.setAttribute('aria-hidden', 'true');

    // Unlock body scroll
    if (this.options.lockBodyScroll) {
      unlockScroll();
    }

    // Remove focus trap
    if (this.focusTrap) {
      this.focusTrap();
      this.focusTrap = null;
    }

    // Return focus to toggle button if it was opened by keyboard
    if (this.state.wasOpenedByKeyboard) {
      const toggleButton = document.querySelector('[data-mobile-menu-toggle]');
      if (toggleButton) {
        toggleButton.focus();
      }
    }

    // Emit event
    this.emit('close');
  }

  /**
   * Toggle mobile menu
   */
  toggle() {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Handle ESC key press
   */
  handleEscapeKey(event) {
    if (event.key === 'Escape' && this.state.isOpen) {
      this.close();
    }
  }

  /**
   * Check if menu is open
   */
  isOpen() {
    return this.state.isOpen;
  }

  /**
   * Cleanup on destroy
   */
  onDestroy() {
    // Remove overlay
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }

    // Unlock scroll if locked
    if (this.state.isOpen && this.options.lockBodyScroll) {
      unlockScroll();
    }

    // Remove focus trap
    if (this.focusTrap) {
      this.focusTrap();
    }
  }
}
