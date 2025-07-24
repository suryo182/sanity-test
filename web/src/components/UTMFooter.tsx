'use client';

import { useEffect, useState } from 'react';
import { parseUTMParams, storeUTMParams, getStoredUTMParams } from '@/lib/utm';

export default function UTMFooter() {
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');

  useEffect(() => {
    const updateUTM = () => {
      const urlParams = parseUTMParams(window.location.search);
      
      // If new UTM parameters are in URL, update stored values
      if (urlParams.utm_source || urlParams.utm_medium) {
        storeUTMParams(urlParams);
      }
      
      // Always display current stored values
      const storedParams = getStoredUTMParams();
      setUtmSource(storedParams.utm_source || '');
      setUtmMedium(storedParams.utm_medium || '');
    };

    updateUTM();

    // Check for URL changes on navigation
    const handleNavigation = () => updateUTM();
    
    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleNavigation);
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  return (
    <footer className="w-full p-4 bg-gray-800 text-white text-center">
      <p>UTM Source: {utmSource || 'N/A'}</p>
      <p>UTM Medium: {utmMedium || 'N/A'}</p>
    </footer>
  );
}