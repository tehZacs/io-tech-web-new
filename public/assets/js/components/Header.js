/**
 * Header Component
 *
 * Sticky navigation header with:
 * - Scroll-based sticky behavior
 * - Active page highlighting
 * - Mobile menu toggle
 * - Smooth background transition on scroll
 */

import BaseComponent from './BaseComponent.js';
import { throttle } from '../utils/dom.js';

export default class Header extends BaseComponent {
  static defaults = {
    stickyClass: 'is-sticky',
    scrollThreshold: 50,
    activeClass: 'is-active',
    mobileBreakpoint: 1024
  };

  init() {
    // Get references to important elements
    this.nav = this.$('nav');
    this.navLinks = this.$$('.nav-link');
    this.mobileMenuButton = this.$('[data-mobile-menu-toggle]');

    // Initialize state
    this.setState({
      isSticky: false,
      currentPath: window.location.pathname,
      isMobile: window.innerWidth < this.options.mobileBreakpoint
    }, true);

    // Setup
    this.setupEventListeners();
    this.highlightActivePage();
    this.checkScrollPosition();
  }

  setupEventListeners() {
    // Throttled scroll handler for better performance
    const handleScroll = throttle(() => {
      this.checkScrollPosition();
    }, 100);

    this.on(window, 'scroll', handleScroll, { passive: true });

    // Mobile menu toggle
    if (this.mobileMenuButton) {
      this.on(this.mobileMenuButton, 'click', this.handleMobileMenuToggle);
    }

    // Navigation link clicks
    this.navLinks.forEach(link => {
      this.on(link, 'click', this.handleNavClick);
    });

    // Window resize handler
    const handleResize = throttle(() => {
      this.setState({
        isMobile: window.innerWidth < this.options.mobileBreakpoint
      });
    }, 200);

    this.on(window, 'resize', handleResize, { passive: true });

    // Smooth scroll for anchor links
    const anchorLinks = this.$$('a[href^="#"]');
    anchorLinks.forEach(link => {
      this.on(link, 'click', this.handleAnchorClick);
    });
  }

  /**
   * Check scroll position and update sticky state
   */
  checkScrollPosition() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const shouldBeSticky = scrollY > this.options.scrollThreshold;

    if (shouldBeSticky !== this.state.isSticky) {
      this.setState({ isSticky: shouldBeSticky });
    }
  }

  /**
   * Handle state changes
   */
  onStateChange(oldState, newState) {
    // Update sticky class
    if (oldState.isSticky !== newState.isSticky) {
      this.toggleClass(this.options.stickyClass, newState.isSticky);
      this.emit('stickyChange', { isSticky: newState.isSticky });
    }

    // Update mobile state
    if (oldState.isMobile !== newState.isMobile) {
      this.emit('mobileChange', { isMobile: newState.isMobile });
    }
  }

  /**
   * Highlight the active page in navigation
   */
  highlightActivePage() {
    const currentPath = this.state.currentPath;

    this.navLinks.forEach(link => {
      try {
        // Get the href attribute
        const href = link.getAttribute('href');

        // Skip if no href or if it's an anchor link
        if (!href || href.startsWith('#')) {
          return;
        }

        // Create URL object, handling both absolute and relative URLs
        const linkUrl = new URL(href, window.location.origin);
        const linkPath = linkUrl.pathname;

        // Check if this link matches the current page
        const isActive = linkPath === currentPath ||
                        (linkPath !== '/' && currentPath.startsWith(linkPath));

        if (isActive) {
          link.classList.add(this.options.activeClass);
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove(this.options.activeClass);
          link.removeAttribute('aria-current');
        }
      } catch (error) {
        // Invalid URL, skip this link
        console.warn('Invalid URL in navigation link:', link.href);
      }
    });
  }

  /**
   * Handle navigation link clicks
   */
  handleNavClick(event) {
    const link = event.currentTarget;

    // Track navigation click
    this.emit('navClick', {
      href: link.href,
      text: link.textContent.trim()
    });
  }

  /**
   * Handle mobile menu toggle button click
   */
  handleMobileMenuToggle(event) {
    event.preventDefault();

    const isExpanded = this.mobileMenuButton.getAttribute('aria-expanded') === 'true';
    this.mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

    // Emit event for MobileMenu component to handle
    this.emit('mobileMenuToggle', { isOpen: !isExpanded });
  }

  /**
   * Handle anchor link clicks (smooth scroll)
   */
  handleAnchorClick(event) {
    const link = event.currentTarget;
    const href = link.getAttribute('href');

    // Only handle links that start with #
    if (!href || !href.startsWith('#')) return;

    event.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate offset (account for sticky header)
      const headerHeight = this.element.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerHeight - 20; // 20px extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL without triggering scroll
      if (history.pushState) {
        history.pushState(null, null, href);
      }

      // Focus the target element for accessibility
      targetElement.focus({ preventScroll: true });
    }
  }

  /**
   * Show header
   */
  show() {
    super.show();
    this.element.style.transform = 'translateY(0)';
  }

  /**
   * Hide header (slide up)
   */
  hide() {
    this.element.style.transform = 'translateY(-100%)';
  }

  /**
   * Get current scroll position
   */
  getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /**
   * Check if header is sticky
   */
  isSticky() {
    return this.state.isSticky;
  }

  /**
   * Force update sticky state
   */
  updateStickyState() {
    this.checkScrollPosition();
  }
}
