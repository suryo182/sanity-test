const UTM_STORAGE_KEY = 'utm_params';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
}

export function parseUTMParams(search: string): UTMParams {
  const params = new URLSearchParams(search);
  const utmParams: UTMParams = {};

  const source = params.get('utm_source');
  const medium = params.get('utm_medium');

  if (source) utmParams.utm_source = source;
  if (medium) utmParams.utm_medium = medium;

  return utmParams;
}

export function storeUTMParams(utmParams: UTMParams): void {
  if (typeof window === 'undefined') return;
  
  const existingParams = getStoredUTMParams();
  const updatedParams = { ...existingParams, ...utmParams };
  
  localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(updatedParams));
}

export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading UTM params from localStorage:', error);
    return {};
  }
}