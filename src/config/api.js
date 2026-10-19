/**
 * Frontend API Configuration
 * Supports environment-based configuration for local and production deployment.
 */

export const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? 'https://api.gssdubai.com' : 'http://localhost:8000')
).replace(/\/+$/, '');

export const API_ENDPOINTS = {
  services: `${API_BASE_URL}/api/services/`,
  serviceDetail: (id) => `${API_BASE_URL}/api/services/${id}/`,
  team: `${API_BASE_URL}/api/team/`,
  testimonials: `${API_BASE_URL}/api/testimonials/`,
  inquiries: `${API_BASE_URL}/api/inquiries/`,
};

export const resolveMediaUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  return `${API_BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};
