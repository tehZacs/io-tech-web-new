/**
 * BaseComponent
 *
 * Foundation class for all JavaScript components in the IO-TECH website.
 * Provides common functionality including:
 * - Automatic event listener management with cleanup
 * - State management
 * - Lifecycle hooks
 * - DOM utility methods
 *
 * @example
 * class MyComponent extends BaseComponent {
 *   static defaults = {
 *     autoInit: true,
 *     animationSpeed: 300
 *   };
 *
 *   init() {
 *     this.setupEventListeners();
 *   }
 *
 *   setupEventListeners() {
 *     this.on(this.element, 'click', this.handleClick);
 *   }
 *
 *   handleClick(event) {
 *     console.log('Clicked!', this.state);
 *   }
 * }
 */

export default class BaseComponent {
  /**
   * Default options for the component
   * Override this in subclasses
   */
  static defaults = {};

  /**
   * Creates a new component instance
   *
   * @param {HTMLElement} element - The DOM element for this component
   * @param {Object} options - Configuration options
   */
  constructor(element, options = {}) {
    if (!element) {
      throw new Error('BaseComponent requires a DOM element');
    }

    this.element = element;
    this.options = { ...this.constructor.defaults, ...options };
    this.state = {};
    this.boundEvents = [];
    this._isDestroyed = false;

    // Auto-initialize if option is set
    if (this.options.autoInit !== false) {
      this.init();
    }
  }

  /**
   * Initialize the component
   * Override this in subclasses to set up your component
   */
  init() {
    // To be implemented by subclasses
  }

  /**
   * Add an event listener with automatic cleanup tracking
   * The listener will be automatically bound to the component instance
   *
   * @param {EventTarget} target - The element to attach the listener to
   * @param {string} event - The event name
   * @param {Function} handler - The event handler function
   * @param {Object|boolean} options - Event listener options
   * @returns {BaseComponent} Returns this for chaining
   *
   * @example
   * this.on(this.element, 'click', this.handleClick);
   * this.on(window, 'resize', this.handleResize, { passive: true });
   */
  on(target, event, handler, options = {}) {
    if (this._isDestroyed) {
      console.warn('Cannot add event listener to destroyed component');
      return this;
    }

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
   * Remove a specific event listener
   *
   * @param {EventTarget} target - The element to remove the listener from
   * @param {string} event - The event name
   * @param {Function} handler - The original handler function (unbound)
   * @returns {BaseComponent} Returns this for chaining
   */
  off(target, event, handler) {
    const index = this.boundEvents.findIndex(item =>
      item.target === target &&
      item.event === event
    );

    if (index !== -1) {
      const { target: t, event: e, handler: h, options } = this.boundEvents[index];
      t.removeEventListener(e, h, options);
      this.boundEvents.splice(index, 1);
    }

    return this;
  }

  /**
   * Emit a custom event from the component element
   *
   * @param {string} eventName - Name of the event to emit
   * @param {*} detail - Data to pass with the event
   * @returns {boolean} Returns false if event was cancelled
   *
   * @example
   * this.emit('itemSelected', { id: 123, name: 'Item' });
   */
  emit(eventName, detail = {}) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      cancelable: true
    });

    return this.element.dispatchEvent(event);
  }

  /**
   * Update component state
   *
   * @param {Object} newState - State updates to merge
   * @param {boolean} silent - If true, won't trigger stateChange event
   * @returns {BaseComponent} Returns this for chaining
   *
   * @example
   * this.setState({ isOpen: true, count: 5 });
   */
  setState(newState, silent = false) {
    const oldState = { ...this.state };
    this.state = { ...this.state, ...newState };

    if (!silent) {
      this.emit('stateChange', { oldState, newState: this.state });
      this.onStateChange(oldState, this.state);
    }

    return this;
  }

  /**
   * Hook called when state changes
   * Override this in subclasses to react to state changes
   *
   * @param {Object} oldState - Previous state
   * @param {Object} newState - New state
   */
  onStateChange(oldState, newState) {
    // To be implemented by subclasses
  }

  /**
   * Query selector shorthand - find one element within component
   *
   * @param {string} selector - CSS selector
   * @returns {HTMLElement|null}
   *
   * @example
   * const button = this.$('.submit-button');
   */
  $(selector) {
    return this.element.querySelector(selector);
  }

  /**
   * Query selector all shorthand - find all elements within component
   *
   * @param {string} selector - CSS selector
   * @returns {Array<HTMLElement>}
   *
   * @example
   * const buttons = this.$$('.menu-item');
   */
  $$(selector) {
    return Array.from(this.element.querySelectorAll(selector));
  }

  /**
   * Add a CSS class to the component element
   *
   * @param {string} className - Class name to add
   * @returns {BaseComponent} Returns this for chaining
   */
  addClass(className) {
    this.element.classList.add(className);
    return this;
  }

  /**
   * Remove a CSS class from the component element
   *
   * @param {string} className - Class name to remove
   * @returns {BaseComponent} Returns this for chaining
   */
  removeClass(className) {
    this.element.classList.remove(className);
    return this;
  }

  /**
   * Toggle a CSS class on the component element
   *
   * @param {string} className - Class name to toggle
   * @param {boolean} force - Force add (true) or remove (false)
   * @returns {BaseComponent} Returns this for chaining
   */
  toggleClass(className, force) {
    this.element.classList.toggle(className, force);
    return this;
  }

  /**
   * Check if component element has a CSS class
   *
   * @param {string} className - Class name to check
   * @returns {boolean}
   */
  hasClass(className) {
    return this.element.classList.contains(className);
  }

  /**
   * Set an attribute on the component element
   *
   * @param {string} name - Attribute name
   * @param {string} value - Attribute value
   * @returns {BaseComponent} Returns this for chaining
   */
  setAttribute(name, value) {
    this.element.setAttribute(name, value);
    return this;
  }

  /**
   * Get an attribute from the component element
   *
   * @param {string} name - Attribute name
   * @returns {string|null}
   */
  getAttribute(name) {
    return this.element.getAttribute(name);
  }

  /**
   * Remove an attribute from the component element
   *
   * @param {string} name - Attribute name
   * @returns {BaseComponent} Returns this for chaining
   */
  removeAttribute(name) {
    this.element.removeAttribute(name);
    return this;
  }

  /**
   * Get a data attribute value
   *
   * @param {string} key - Data attribute key (without 'data-' prefix)
   * @returns {string|null}
   *
   * @example
   * <div data-component="header" data-sticky="true"></div>
   * this.getData('sticky') // returns "true"
   */
  getData(key) {
    return this.element.dataset[key];
  }

  /**
   * Set a data attribute value
   *
   * @param {string} key - Data attribute key (without 'data-' prefix)
   * @param {string} value - Value to set
   * @returns {BaseComponent} Returns this for chaining
   */
  setData(key, value) {
    this.element.dataset[key] = value;
    return this;
  }

  /**
   * Show the component element
   *
   * @param {string} display - Display value (default: 'block')
   * @returns {BaseComponent} Returns this for chaining
   */
  show(display = 'block') {
    this.element.style.display = display;
    this.setAttribute('aria-hidden', 'false');
    return this;
  }

  /**
   * Hide the component element
   *
   * @returns {BaseComponent} Returns this for chaining
   */
  hide() {
    this.element.style.display = 'none';
    this.setAttribute('aria-hidden', 'true');
    return this;
  }

  /**
   * Toggle visibility of the component element
   *
   * @param {boolean} force - Force show (true) or hide (false)
   * @returns {BaseComponent} Returns this for chaining
   */
  toggle(force) {
    const shouldShow = force !== undefined
      ? force
      : this.element.style.display === 'none';

    return shouldShow ? this.show() : this.hide();
  }

  /**
   * Check if component element is visible
   *
   * @returns {boolean}
   */
  isVisible() {
    return this.element.style.display !== 'none' &&
           this.element.offsetParent !== null;
  }

  /**
   * Destroy the component and clean up all resources
   * Removes all event listeners and marks component as destroyed
   */
  destroy() {
    if (this._isDestroyed) {
      return;
    }

    // Remove all event listeners
    this.boundEvents.forEach(({ target, event, handler, options }) => {
      target.removeEventListener(event, handler, options);
    });

    // Clear bound events array
    this.boundEvents = [];

    // Call lifecycle hook
    this.onDestroy();

    // Emit destroy event
    this.emit('destroy');

    // Mark as destroyed
    this._isDestroyed = true;

    // Clear references
    this.element = null;
    this.state = null;
    this.options = null;
  }

  /**
   * Hook called when component is destroyed
   * Override this in subclasses for custom cleanup
   */
  onDestroy() {
    // To be implemented by subclasses
  }

  /**
   * Check if component has been destroyed
   *
   * @returns {boolean}
   */
  isDestroyed() {
    return this._isDestroyed;
  }
}
