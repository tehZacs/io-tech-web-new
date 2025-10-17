/**
 * Validation Utility Functions
 * Form validation helpers
 */

/**
 * Validation error messages in Spanish (for Mexican audience)
 */
export const ERROR_MESSAGES = {
  required: 'Este campo es obligatorio',
  email: 'Por favor ingrese un correo electrónico válido',
  phone: 'Por favor ingrese un número de teléfono válido',
  minLength: (min) => `Debe tener al menos ${min} caracteres`,
  maxLength: (max) => `No debe exceder ${max} caracteres`,
  pattern: 'El formato ingresado no es válido',
  min: (min) => `El valor mínimo es ${min}`,
  max: (max) => `El valor máximo es ${max}`,
  url: 'Por favor ingrese una URL válida',
  match: 'Los campos no coinciden'
};

/**
 * Email validation
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Mexican phone number validation
 * Accepts formats: 5512345678, 55-1234-5678, (55) 1234-5678, +52 55 1234 5678
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');

  // Mexican numbers: 10 digits or 12 digits with country code (52)
  if (cleaned.length === 10) {
    return /^[0-9]{10}$/.test(cleaned);
  } else if (cleaned.length === 12 && cleaned.startsWith('52')) {
    return /^52[0-9]{10}$/.test(cleaned);
  }

  return false;
};

/**
 * URL validation
 * @param {string} url
 * @returns {boolean}
 */
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if string is empty or whitespace
 * @param {string} value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
  return !value || value.trim().length === 0;
};

/**
 * Check minimum length
 * @param {string} value
 * @param {number} min
 * @returns {boolean}
 */
export const hasMinLength = (value, min) => {
  return value && value.length >= min;
};

/**
 * Check maximum length
 * @param {string} value
 * @param {number} max
 * @returns {boolean}
 */
export const hasMaxLength = (value, max) => {
  return !value || value.length <= max;
};

/**
 * Check if value matches a pattern
 * @param {string} value
 * @param {RegExp|string} pattern
 * @returns {boolean}
 */
export const matchesPattern = (value, pattern) => {
  const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
  return regex.test(value);
};

/**
 * Check if number is within range
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export const isInRange = (value, min, max) => {
  const num = parseFloat(value);
  return !isNaN(num) && num >= min && num <= max;
};

/**
 * Check if two values match (for password confirmation)
 * @param {string} value1
 * @param {string} value2
 * @returns {boolean}
 */
export const valuesMatch = (value1, value2) => {
  return value1 === value2;
};

/**
 * Sanitize HTML to prevent XSS
 * @param {string} html
 * @returns {string}
 */
export const sanitizeHTML = (html) => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Validate a single field based on rules
 * @param {string} value - Field value
 * @param {Object} rules - Validation rules
 * @param {Object} formData - All form data (for match validation)
 * @returns {{valid: boolean, errors: Array<string>}}
 *
 * @example
 * const result = validateField(email, {
 *   required: true,
 *   email: true
 * });
 */
export const validateField = (value, rules = {}, formData = {}) => {
  const errors = [];

  // Required validation
  if (rules.required && isEmpty(value)) {
    errors.push(ERROR_MESSAGES.required);
    return { valid: false, errors }; // Stop if required and empty
  }

  // Skip other validations if field is empty and not required
  if (isEmpty(value) && !rules.required) {
    return { valid: true, errors: [] };
  }

  // Email validation
  if (rules.email && !isValidEmail(value)) {
    errors.push(ERROR_MESSAGES.email);
  }

  // Phone validation
  if (rules.phone && !isValidPhone(value)) {
    errors.push(ERROR_MESSAGES.phone);
  }

  // URL validation
  if (rules.url && !isValidURL(value)) {
    errors.push(ERROR_MESSAGES.url);
  }

  // Min length validation
  if (rules.minLength && !hasMinLength(value, rules.minLength)) {
    errors.push(ERROR_MESSAGES.minLength(rules.minLength));
  }

  // Max length validation
  if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
    errors.push(ERROR_MESSAGES.maxLength(rules.maxLength));
  }

  // Pattern validation
  if (rules.pattern && !matchesPattern(value, rules.pattern)) {
    errors.push(rules.patternMessage || ERROR_MESSAGES.pattern);
  }

  // Min value validation
  if (rules.min !== undefined && parseFloat(value) < rules.min) {
    errors.push(ERROR_MESSAGES.min(rules.min));
  }

  // Max value validation
  if (rules.max !== undefined && parseFloat(value) > rules.max) {
    errors.push(ERROR_MESSAGES.max(rules.max));
  }

  // Match validation (for password confirmation)
  if (rules.match && !valuesMatch(value, formData[rules.match])) {
    errors.push(ERROR_MESSAGES.match);
  }

  // Custom validation function
  if (rules.custom && typeof rules.custom === 'function') {
    const customError = rules.custom(value, formData);
    if (customError) {
      errors.push(customError);
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Validate entire form based on validation schema
 * @param {Object} formData - Form data object
 * @param {Object} schema - Validation schema
 * @returns {{valid: boolean, errors: Object, fields: Array<string>}}
 *
 * @example
 * const result = validateForm(
 *   { email: 'test@example.com', name: 'John' },
 *   {
 *     email: { required: true, email: true },
 *     name: { required: true, minLength: 2 }
 *   }
 * );
 */
export const validateForm = (formData, schema) => {
  const errors = {};
  const invalidFields = [];

  Object.entries(schema).forEach(([fieldName, rules]) => {
    const value = formData[fieldName];
    const result = validateField(value, rules, formData);

    if (!result.valid) {
      errors[fieldName] = result.errors;
      invalidFields.push(fieldName);
    }
  });

  return {
    valid: invalidFields.length === 0,
    errors,
    fields: invalidFields
  };
};

/**
 * Get form data as object
 * @param {HTMLFormElement} form
 * @returns {Object}
 */
export const getFormData = (form) => {
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    // Handle multiple values (checkboxes with same name)
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }

  return data;
};

/**
 * Display validation error on a field
 * @param {HTMLElement} field - Input element
 * @param {string|Array<string>} errors - Error message(s)
 */
export const showFieldError = (field, errors) => {
  const errorMessages = Array.isArray(errors) ? errors : [errors];

  // Add error class to field
  field.classList.add('error');
  field.setAttribute('aria-invalid', 'true');

  // Find or create error message element
  let errorElement = field.parentElement.querySelector('.form-error');

  if (!errorElement) {
    errorElement = document.createElement('span');
    errorElement.className = 'form-error';
    errorElement.setAttribute('role', 'alert');
    field.parentElement.appendChild(errorElement);
  }

  errorElement.textContent = errorMessages[0]; // Show first error
  errorElement.style.display = 'block';
};

/**
 * Clear validation error from a field
 * @param {HTMLElement} field - Input element
 */
export const clearFieldError = (field) => {
  field.classList.remove('error');
  field.removeAttribute('aria-invalid');

  const errorElement = field.parentElement.querySelector('.form-error');
  if (errorElement) {
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  }
};

/**
 * Clear all validation errors from a form
 * @param {HTMLFormElement} form
 */
export const clearFormErrors = (form) => {
  const errorFields = form.querySelectorAll('.error');
  errorFields.forEach(field => clearFieldError(field));
};

/**
 * Show validation errors on form fields
 * @param {HTMLFormElement} form
 * @param {Object} errors - Errors object from validateForm
 */
export const showFormErrors = (form, errors) => {
  Object.entries(errors).forEach(([fieldName, fieldErrors]) => {
    const field = form.elements[fieldName];
    if (field) {
      showFieldError(field, fieldErrors);
    }
  });
};

/**
 * Real-time validation for a field
 * @param {HTMLElement} field - Input element
 * @param {Object} rules - Validation rules
 * @param {Function} callback - Optional callback when validation changes
 * @returns {Function} Cleanup function
 */
export const enableRealtimeValidation = (field, rules, callback) => {
  const validate = () => {
    const result = validateField(field.value, rules);

    if (result.valid) {
      clearFieldError(field);
    } else {
      showFieldError(field, result.errors);
    }

    if (callback) {
      callback(result);
    }
  };

  // Validate on blur (when user leaves field)
  field.addEventListener('blur', validate);

  // Validate on input (as user types) - only if field was previously invalid
  const handleInput = () => {
    if (field.classList.contains('error')) {
      validate();
    }
  };
  field.addEventListener('input', handleInput);

  // Return cleanup function
  return () => {
    field.removeEventListener('blur', validate);
    field.removeEventListener('input', handleInput);
  };
};
