/**
 * API Utility Functions
 * Helpers for making HTTP requests to the backend API
 */

/**
 * API configuration
 */
const API_CONFIG = {
  baseURL: 'https://api.io-tech.com.mx/api',
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

/**
 * Custom API Error class
 */
export class APIError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Make an HTTP request
 * @param {string} endpoint - API endpoint (relative to baseURL)
 * @param {Object} options - Fetch options
 * @returns {Promise<any>}
 */
const request = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.baseURL}${endpoint}`;

  const config = {
    ...options,
    headers: {
      ...API_CONFIG.headers,
      ...options.headers
    }
  };

  // Add timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
  config.signal = controller.signal;

  try {
    const response = await fetch(url, config);
    clearTimeout(timeoutId);

    // Parse response
    const contentType = response.headers.get('content-type');
    const data = contentType && contentType.includes('application/json')
      ? await response.json()
      : await response.text();

    // Handle HTTP errors
    if (!response.ok) {
      throw new APIError(
        data.message || `HTTP Error: ${response.status}`,
        response.status,
        data
      );
    }

    return data;

  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new APIError('Request timeout', 408);
    }

    if (error instanceof APIError) {
      throw error;
    }

    throw new APIError(
      error.message || 'Network error occurred',
      0,
      { originalError: error }
    );
  }
};

/**
 * GET request
 * @param {string} endpoint
 * @param {Object} params - Query parameters
 * @returns {Promise<any>}
 */
export const get = async (endpoint, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${endpoint}?${queryString}` : endpoint;

  return request(url, {
    method: 'GET'
  });
};

/**
 * POST request
 * @param {string} endpoint
 * @param {Object} data - Request body
 * @returns {Promise<any>}
 */
export const post = async (endpoint, data = {}) => {
  return request(endpoint, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

/**
 * PUT request
 * @param {string} endpoint
 * @param {Object} data - Request body
 * @returns {Promise<any>}
 */
export const put = async (endpoint, data = {}) => {
  return request(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
};

/**
 * DELETE request
 * @param {string} endpoint
 * @returns {Promise<any>}
 */
export const del = async (endpoint) => {
  return request(endpoint, {
    method: 'DELETE'
  });
};

/**
 * Submit contact form
 * @param {Object} formData
 * @returns {Promise<Object>}
 *
 * @example
 * const response = await submitContactForm({
 *   name: 'Juan Pérez',
 *   email: 'juan@example.com',
 *   phone: '5512345678',
 *   company: 'Empresa S.A.',
 *   industry: 'Technology',
 *   service: 'CloudComputing',
 *   message: 'Necesito información sobre servicios cloud'
 * });
 */
export const submitContactForm = async (formData) => {
  return post('/contact', formData);
};

/**
 * Subscribe to newsletter
 * @param {string} email
 * @returns {Promise<Object>}
 *
 * @example
 * const response = await subscribeNewsletter('user@example.com');
 */
export const subscribeNewsletter = async (email) => {
  return post('/newsletter', { email });
};

/**
 * Get service information
 * @param {string} serviceId - Service identifier
 * @returns {Promise<Object>}
 */
export const getServiceInfo = async (serviceId) => {
  return get(`/services/${serviceId}`);
};

/**
 * Download resource (PDF, whitepaper, etc.)
 * @param {string} resourceId
 * @param {string} email - User email for tracking
 * @returns {Promise<Blob>}
 */
export const downloadResource = async (resourceId, email) => {
  const response = await fetch(`${API_CONFIG.baseURL}/resources/${resourceId}/download`, {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify({ email })
  });

  if (!response.ok) {
    throw new APIError(`Download failed: ${response.status}`, response.status);
  }

  return response.blob();
};

/**
 * Track page view (analytics)
 * @param {Object} data - Page view data
 */
export const trackPageView = async (data) => {
  try {
    await post('/analytics/pageview', {
      ...data,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    });
  } catch (error) {
    // Silent fail for analytics
    console.warn('Analytics tracking failed:', error);
  }
};

/**
 * Track event (analytics)
 * @param {string} eventName
 * @param {Object} eventData
 */
export const trackEvent = async (eventName, eventData = {}) => {
  try {
    await post('/analytics/event', {
      event: eventName,
      data: eventData,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });
  } catch (error) {
    // Silent fail for analytics
    console.warn('Event tracking failed:', error);
  }
};

/**
 * Health check - verify API is available
 * @returns {Promise<boolean>}
 */
export const healthCheck = async () => {
  try {
    await get('/health');
    return true;
  } catch {
    return false;
  }
};

/**
 * Retry a failed request
 * @param {Function} requestFn - Request function to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} delay - Delay between retries (ms)
 * @returns {Promise<any>}
 */
export const retryRequest = async (requestFn, maxRetries = 3, delay = 1000) => {
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      lastError = error;

      // Don't retry client errors (4xx), only server errors (5xx) and network errors
      if (error instanceof APIError && error.status >= 400 && error.status < 500) {
        throw error;
      }

      // Wait before retrying
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
      }
    }
  }

  throw lastError;
};

/**
 * Batch multiple requests
 * @param {Array<Function>} requests - Array of request functions
 * @returns {Promise<Array<any>>}
 */
export const batchRequests = async (requests) => {
  return Promise.all(requests.map(req => req()));
};

/**
 * Cache manager for API responses
 */
class CacheManager {
  constructor() {
    this.cache = new Map();
    this.ttl = 5 * 60 * 1000; // 5 minutes default TTL
  }

  set(key, value, ttl = this.ttl) {
    this.cache.set(key, {
      value,
      expiry: Date.now() + ttl
    });
  }

  get(key) {
    const item = this.cache.get(key);

    if (!item) return null;

    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.value;
  }

  has(key) {
    return this.get(key) !== null;
  }

  clear() {
    this.cache.clear();
  }

  delete(key) {
    this.cache.delete(key);
  }
}

export const cache = new CacheManager();

/**
 * Make a cached request
 * @param {string} cacheKey - Unique cache key
 * @param {Function} requestFn - Request function
 * @param {number} ttl - Cache TTL in milliseconds
 * @returns {Promise<any>}
 */
export const cachedRequest = async (cacheKey, requestFn, ttl) => {
  // Check cache first
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // Make request
  const data = await requestFn();

  // Store in cache
  cache.set(cacheKey, data, ttl);

  return data;
};

/**
 * Handle common API errors
 * @param {Error} error
 * @returns {string} User-friendly error message in Spanish
 */
export const handleAPIError = (error) => {
  if (!(error instanceof APIError)) {
    return 'Ha ocurrido un error inesperado. Por favor intente nuevamente.';
  }

  switch (error.status) {
    case 400:
      return 'Los datos enviados son incorrectos. Por favor verifique la información.';
    case 401:
      return 'No está autorizado para realizar esta acción.';
    case 403:
      return 'No tiene permisos para acceder a este recurso.';
    case 404:
      return 'El recurso solicitado no fue encontrado.';
    case 408:
      return 'La solicitud ha excedido el tiempo de espera. Por favor intente nuevamente.';
    case 409:
      return 'Ya existe un registro con estos datos.';
    case 422:
      return 'Los datos proporcionados no son válidos.';
    case 429:
      return 'Ha excedido el límite de solicitudes. Por favor espere un momento.';
    case 500:
      return 'Error en el servidor. Nuestro equipo ha sido notificado.';
    case 503:
      return 'El servicio no está disponible temporalmente. Por favor intente más tarde.';
    default:
      return error.message || 'Ha ocurrido un error. Por favor intente nuevamente.';
  }
};

/**
 * Set API base URL (useful for development/production environments)
 * @param {string} url
 */
export const setBaseURL = (url) => {
  API_CONFIG.baseURL = url;
};

/**
 * Set default headers
 * @param {Object} headers
 */
export const setDefaultHeaders = (headers) => {
  Object.assign(API_CONFIG.headers, headers);
};

/**
 * Get current API configuration
 * @returns {Object}
 */
export const getConfig = () => {
  return { ...API_CONFIG };
};

export default {
  get,
  post,
  put,
  del,
  submitContactForm,
  subscribeNewsletter,
  getServiceInfo,
  downloadResource,
  trackPageView,
  trackEvent,
  healthCheck,
  retryRequest,
  batchRequests,
  cachedRequest,
  handleAPIError,
  setBaseURL,
  setDefaultHeaders,
  getConfig,
  APIError
};
