/**
 * Animation Utility Functions
 * Helpers for scroll animations, transitions, and effects
 */

/**
 * Animate element on scroll into view using Intersection Observer
 * @param {Element|string} target - Element or selector
 * @param {Object} options - Animation options
 * @returns {IntersectionObserver}
 *
 * @example
 * animateOnScroll('.card', {
 *   animationClass: 'animate-slide-up',
 *   threshold: 0.2,
 *   once: true
 * });
 */
export const animateOnScroll = (target, options = {}) => {
  const defaults = {
    animationClass: 'animate-fade-in',
    threshold: 0.1,
    rootMargin: '0px',
    once: true, // Animation triggers only once
    delay: 0
  };

  const config = { ...defaults, ...options };
  const elements = typeof target === 'string'
    ? document.querySelectorAll(target)
    : [target];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(config.animationClass);

          if (config.once) {
            observer.unobserve(entry.target);
          }
        }, config.delay * index);
      } else if (!config.once) {
        entry.target.classList.remove(config.animationClass);
      }
    });
  }, {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  });

  elements.forEach(element => {
    if (element && element instanceof Element) {
      observer.observe(element);
    }
  });

  return observer;
};

/**
 * Stagger animations for multiple elements
 * @param {NodeList|Array<Element>} elements
 * @param {Object} options
 */
export const staggerAnimation = (elements, options = {}) => {
  const defaults = {
    animationClass: 'animate-slide-up',
    delay: 100, // Delay between each element (ms)
    threshold: 0.1
  };

  const config = { ...defaults, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(elements).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add(config.animationClass);
        }, config.delay * index);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: config.threshold
  });

  elements.forEach(element => {
    if (element && element instanceof Element) {
      observer.observe(element);
    }
  });

  return observer;
};

/**
 * Fade in element
 * @param {Element} element
 * @param {number} duration - Animation duration (ms)
 * @returns {Promise}
 */
export const fadeIn = (element, duration = 300) => {
  return new Promise((resolve) => {
    element.style.opacity = '0';
    element.style.display = 'block';
    element.style.transition = `opacity ${duration}ms ease-in-out`;

    setTimeout(() => {
      element.style.opacity = '1';
    }, 10);

    setTimeout(() => {
      element.style.transition = '';
      resolve();
    }, duration);
  });
};

/**
 * Fade out element
 * @param {Element} element
 * @param {number} duration - Animation duration (ms)
 * @returns {Promise}
 */
export const fadeOut = (element, duration = 300) => {
  return new Promise((resolve) => {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms ease-in-out`;

    setTimeout(() => {
      element.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      element.style.display = 'none';
      element.style.transition = '';
      resolve();
    }, duration);
  });
};

/**
 * Slide down element (expand)
 * @param {Element} element
 * @param {number} duration - Animation duration (ms)
 * @returns {Promise}
 */
export const slideDown = (element, duration = 300) => {
  return new Promise((resolve) => {
    element.style.display = 'block';
    element.style.height = '0';
    element.style.overflow = 'hidden';
    element.style.transition = `height ${duration}ms ease-out`;

    const height = element.scrollHeight;

    setTimeout(() => {
      element.style.height = height + 'px';
    }, 10);

    setTimeout(() => {
      element.style.height = '';
      element.style.overflow = '';
      element.style.transition = '';
      resolve();
    }, duration);
  });
};

/**
 * Slide up element (collapse)
 * @param {Element} element
 * @param {number} duration - Animation duration (ms)
 * @returns {Promise}
 */
export const slideUp = (element, duration = 300) => {
  return new Promise((resolve) => {
    element.style.height = element.scrollHeight + 'px';
    element.style.overflow = 'hidden';
    element.style.transition = `height ${duration}ms ease-out`;

    setTimeout(() => {
      element.style.height = '0';
    }, 10);

    setTimeout(() => {
      element.style.display = 'none';
      element.style.height = '';
      element.style.overflow = '';
      element.style.transition = '';
      resolve();
    }, duration);
  });
};

/**
 * Slide toggle element
 * @param {Element} element
 * @param {number} duration - Animation duration (ms)
 * @returns {Promise}
 */
export const slideToggle = (element, duration = 300) => {
  const isHidden = element.style.display === 'none' || !element.offsetParent;
  return isHidden ? slideDown(element, duration) : slideUp(element, duration);
};

/**
 * Parallax scroll effect
 * @param {Element|string} target - Element or selector
 * @param {Object} options
 * @returns {Function} Cleanup function
 */
export const parallax = (target, options = {}) => {
  const defaults = {
    speed: 0.5, // 0 = no movement, 1 = normal scroll speed
    direction: 'vertical' // 'vertical' or 'horizontal'
  };

  const config = { ...defaults, ...options };
  const element = typeof target === 'string' ? document.querySelector(target) : target;

  if (!element) return () => {};

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * config.speed;

    if (config.direction === 'vertical') {
      element.style.transform = `translateY(${rate}px)`;
    } else {
      element.style.transform = `translateX(${rate}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * Count up animation for numbers
 * @param {Element} element
 * @param {number} end - End value
 * @param {Object} options
 * @returns {Promise}
 */
export const countUp = (element, end, options = {}) => {
  return new Promise((resolve) => {
    const defaults = {
      start: 0,
      duration: 2000,
      decimals: 0,
      separator: ',',
      prefix: '',
      suffix: ''
    };

    const config = { ...defaults, ...options };
    const startTime = performance.now();
    const range = end - config.start;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / config.duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = config.start + (range * easeOut);

      // Format number
      let formatted = current.toFixed(config.decimals);

      // Add thousands separator
      if (config.separator) {
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, config.separator);
        formatted = parts.join('.');
      }

      element.textContent = config.prefix + formatted + config.suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(animate);
  });
};

/**
 * Type writer effect
 * @param {Element} element
 * @param {string} text
 * @param {Object} options
 * @returns {Promise}
 */
export const typeWriter = (element, text, options = {}) => {
  return new Promise((resolve) => {
    const defaults = {
      speed: 50, // ms per character
      cursor: true,
      cursorChar: '|'
    };

    const config = { ...defaults, ...options };
    let index = 0;

    element.textContent = '';

    if (config.cursor) {
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      cursor.textContent = config.cursorChar;
      cursor.style.animation = 'blink 1s step-end infinite';
      element.appendChild(cursor);
    }

    const type = () => {
      if (index < text.length) {
        const char = text.charAt(index);
        const textNode = document.createTextNode(char);

        if (config.cursor) {
          element.insertBefore(textNode, element.lastChild);
        } else {
          element.appendChild(textNode);
        }

        index++;
        setTimeout(type, config.speed);
      } else {
        if (config.cursor) {
          element.removeChild(element.lastChild);
        }
        resolve();
      }
    };

    type();
  });
};

/**
 * Smooth scroll to element or position
 * @param {Element|number} target - Element to scroll to or Y position
 * @param {Object} options
 * @returns {Promise}
 */
export const smoothScroll = (target, options = {}) => {
  return new Promise((resolve) => {
    const defaults = {
      duration: 600,
      offset: 0,
      behavior: 'smooth'
    };

    const config = { ...defaults, ...options };

    let targetY;
    if (typeof target === 'number') {
      targetY = target;
    } else {
      const rect = target.getBoundingClientRect();
      targetY = window.pageYOffset + rect.top - config.offset;
    }

    window.scrollTo({
      top: targetY,
      behavior: config.behavior
    });

    setTimeout(resolve, config.duration);
  });
};

/**
 * Ripple effect (Material Design style)
 * @param {Element} element
 * @param {Event} event
 */
export const rippleEffect = (element, event) => {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();

  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.className = 'ripple';

  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};

/**
 * Add CSS for ripple effect
 */
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }

    .typewriter-cursor {
      display: inline-block;
      margin-left: 2px;
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Observe element visibility and trigger callback
 * @param {Element} element
 * @param {Function} callback
 * @param {Object} options
 * @returns {IntersectionObserver}
 */
export const onVisible = (element, callback, options = {}) => {
  const defaults = {
    threshold: 0.1,
    rootMargin: '0px'
  };

  const config = { ...defaults, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        if (options.once) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, config);

  observer.observe(element);
  return observer;
};

/**
 * Loading animation for buttons
 * @param {Element} button
 * @param {boolean} isLoading
 */
export const setButtonLoading = (button, isLoading) => {
  if (isLoading) {
    button.disabled = true;
    button.dataset.originalContent = button.innerHTML;

    const spinner = '<span class="spinner"></span>';
    button.innerHTML = spinner + ' Cargando...';
    button.classList.add('is-loading');
  } else {
    button.disabled = false;
    button.innerHTML = button.dataset.originalContent || button.innerHTML;
    button.classList.remove('is-loading');
    delete button.dataset.originalContent;
  }
};

/**
 * Pulse animation
 * @param {Element} element
 * @param {number} duration
 */
export const pulse = (element, duration = 1000) => {
  element.style.animation = `pulse ${duration}ms ease-in-out`;

  setTimeout(() => {
    element.style.animation = '';
  }, duration);
};

/**
 * Shake animation (for errors)
 * @param {Element} element
 * @param {number} duration
 */
export const shake = (element, duration = 500) => {
  element.style.animation = `shake ${duration}ms ease-in-out`;

  setTimeout(() => {
    element.style.animation = '';
  }, duration);
};

// Add pulse and shake keyframes
if (typeof document !== 'undefined') {
  const keyframesStyle = document.createElement('style');
  keyframesStyle.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
  `;
  document.head.appendChild(keyframesStyle);
}

export default {
  animateOnScroll,
  staggerAnimation,
  fadeIn,
  fadeOut,
  slideDown,
  slideUp,
  slideToggle,
  parallax,
  countUp,
  typeWriter,
  smoothScroll,
  rippleEffect,
  onVisible,
  setButtonLoading,
  pulse,
  shake
};
