/**
 * DOM Utility Functions
 * Helper functions for common DOM operations
 */

/**
 * Query selector shorthand
 * @param {string} selector - CSS selector
 * @param {Element} context - Context element (default: document)
 * @returns {Element|null}
 */
export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

/**
 * Query selector all shorthand
 * @param {string} selector - CSS selector
 * @param {Element} context - Context element (default: document)
 * @returns {Array<Element>}
 */
export const $$ = (selector, context = document) => {
  return Array.from(context.querySelectorAll(selector));
};

/**
 * Create a new DOM element with optional attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attrs - Attributes to set on the element
 * @param {Array|string|Element} children - Child elements or text
 * @returns {Element}
 *
 * @example
 * const div = createElement('div', { class: 'container' }, [
 *   createElement('h1', {}, 'Title'),
 *   createElement('p', {}, 'Paragraph')
 * ]);
 */
export const createElement = (tag, attrs = {}, children = []) => {
  const element = document.createElement(tag);

  // Set attributes
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') {
      element.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (key.startsWith('data-')) {
      const dataKey = key.slice(5);
      element.dataset[dataKey] = value;
    } else {
      element.setAttribute(key, value);
    }
  });

  // Append children
  const childArray = Array.isArray(children) ? children : [children];
  childArray.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Element) {
      element.appendChild(child);
    }
  });

  return element;
};

/**
 * Add one or more CSS classes to an element
 * @param {Element} element
 * @param {string|Array<string>} classes
 */
export const addClass = (element, classes) => {
  const classList = Array.isArray(classes) ? classes : [classes];
  element.classList.add(...classList);
};

/**
 * Remove one or more CSS classes from an element
 * @param {Element} element
 * @param {string|Array<string>} classes
 */
export const removeClass = (element, classes) => {
  const classList = Array.isArray(classes) ? classes : [classes];
  element.classList.remove(...classList);
};

/**
 * Toggle a CSS class on an element
 * @param {Element} element
 * @param {string} className
 * @param {boolean} force - Force add (true) or remove (false)
 * @returns {boolean} True if class is now present
 */
export const toggleClass = (element, className, force) => {
  return element.classList.toggle(className, force);
};

/**
 * Check if element has a CSS class
 * @param {Element} element
 * @param {string} className
 * @returns {boolean}
 */
export const hasClass = (element, className) => {
  return element.classList.contains(className);
};

/**
 * Get or set element attributes
 * @param {Element} element
 * @param {string|Object} attr - Attribute name or object of attributes
 * @param {string} value - Attribute value (if attr is string)
 * @returns {string|void}
 */
export const attr = (element, attr, value) => {
  if (typeof attr === 'object') {
    Object.entries(attr).forEach(([key, val]) => {
      element.setAttribute(key, val);
    });
  } else if (value !== undefined) {
    element.setAttribute(attr, value);
  } else {
    return element.getAttribute(attr);
  }
};

/**
 * Remove attribute from element
 * @param {Element} element
 * @param {string} attr - Attribute name
 */
export const removeAttr = (element, attr) => {
  element.removeAttribute(attr);
};

/**
 * Get computed style property of an element
 * @param {Element} element
 * @param {string} property - CSS property name
 * @returns {string}
 */
export const getStyle = (element, property) => {
  return window.getComputedStyle(element).getPropertyValue(property);
};

/**
 * Set inline styles on an element
 * @param {Element} element
 * @param {Object} styles - Object of CSS properties
 *
 * @example
 * setStyle(el, { display: 'flex', color: 'red' });
 */
export const setStyle = (element, styles) => {
  Object.assign(element.style, styles);
};

/**
 * Show an element
 * @param {Element} element
 * @param {string} display - Display value (default: 'block')
 */
export const show = (element, display = 'block') => {
  element.style.display = display;
};

/**
 * Hide an element
 * @param {Element} element
 */
export const hide = (element) => {
  element.style.display = 'none';
};

/**
 * Toggle element visibility
 * @param {Element} element
 * @param {boolean} force - Force show (true) or hide (false)
 */
export const toggle = (element, force) => {
  const shouldShow = force !== undefined
    ? force
    : element.style.display === 'none' || !element.offsetParent;

  shouldShow ? show(element) : hide(element);
};

/**
 * Check if element is visible
 * @param {Element} element
 * @returns {boolean}
 */
export const isVisible = (element) => {
  return element.offsetParent !== null;
};

/**
 * Get element offset relative to document
 * @param {Element} element
 * @returns {{top: number, left: number}}
 */
export const offset = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
};

/**
 * Get element position relative to offset parent
 * @param {Element} element
 * @returns {{top: number, left: number}}
 */
export const position = (element) => {
  return {
    top: element.offsetTop,
    left: element.offsetLeft
  };
};

/**
 * Get element dimensions
 * @param {Element} element
 * @returns {{width: number, height: number}}
 */
export const dimensions = (element) => {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

/**
 * Find the closest parent element matching a selector
 * @param {Element} element
 * @param {string} selector
 * @returns {Element|null}
 */
export const closest = (element, selector) => {
  return element.closest(selector);
};

/**
 * Get siblings of an element
 * @param {Element} element
 * @returns {Array<Element>}
 */
export const siblings = (element) => {
  return Array.from(element.parentNode.children).filter(child => child !== element);
};

/**
 * Get next sibling element
 * @param {Element} element
 * @returns {Element|null}
 */
export const next = (element) => {
  return element.nextElementSibling;
};

/**
 * Get previous sibling element
 * @param {Element} element
 * @returns {Element|null}
 */
export const prev = (element) => {
  return element.previousElementSibling;
};

/**
 * Get parent element
 * @param {Element} element
 * @returns {Element|null}
 */
export const parent = (element) => {
  return element.parentElement;
};

/**
 * Remove element from DOM
 * @param {Element} element
 */
export const remove = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

/**
 * Empty element (remove all children)
 * @param {Element} element
 */
export const empty = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

/**
 * Insert element before another element
 * @param {Element} newElement
 * @param {Element} referenceElement
 */
export const insertBefore = (newElement, referenceElement) => {
  referenceElement.parentNode.insertBefore(newElement, referenceElement);
};

/**
 * Insert element after another element
 * @param {Element} newElement
 * @param {Element} referenceElement
 */
export const insertAfter = (newElement, referenceElement) => {
  referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
};

/**
 * Prepend element as first child
 * @param {Element} parent
 * @param {Element} child
 */
export const prepend = (parent, child) => {
  parent.insertBefore(child, parent.firstChild);
};

/**
 * Append element as last child
 * @param {Element} parent
 * @param {Element} child
 */
export const append = (parent, child) => {
  parent.appendChild(child);
};

/**
 * Wrap element with another element
 * @param {Element} element
 * @param {Element} wrapper
 */
export const wrap = (element, wrapper) => {
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);
};

/**
 * Unwrap element (remove parent, keep element)
 * @param {Element} element
 */
export const unwrap = (element) => {
  const parent = element.parentNode;
  if (parent !== document.body) {
    parent.parentNode.insertBefore(element, parent);
    parent.parentNode.removeChild(parent);
  }
};

/**
 * Wait for DOM to be ready
 * @param {Function} callback
 */
export const ready = (callback) => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    callback();
  }
};

/**
 * Debounce a function
 * @param {Function} func
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
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
 * Throttle a function
 * @param {Function} func
 * @param {number} limit - Limit time in milliseconds
 * @returns {Function}
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Scroll to element smoothly
 * @param {Element} element
 * @param {Object} options
 */
export const scrollTo = (element, options = {}) => {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  };
  element.scrollIntoView({ ...defaultOptions, ...options });
};

/**
 * Get scroll position
 * @returns {{x: number, y: number}}
 */
export const getScrollPosition = () => {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
};

/**
 * Lock body scroll (useful for modals)
 */
export const lockScroll = () => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
};

/**
 * Unlock body scroll
 */
export const unlockScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

/**
 * Trap focus within an element (for accessibility)
 * @param {Element} element
 * @returns {Function} Cleanup function
 */
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  };

  element.addEventListener('keydown', handleTabKey);

  // Return cleanup function
  return () => {
    element.removeEventListener('keydown', handleTabKey);
  };
};
