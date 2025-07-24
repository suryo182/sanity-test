'use client';

import { useEffect, useState } from 'react';
import { getStoredUTMParams } from '@/lib/utm';

export default function UTMFooter() {
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');

  useEffect(() => {
    const storedParams = getStoredUTMParams();
    setUtmSource(storedParams.utm_source || '');
    setUtmMedium(storedParams.utm_medium || '');
  }, []);

  return (
    <footer className="w-full p-4 bg-gray-800 text-white text-center">
      <p>UTM Source: {utmSource || 'N/A'}</p>
      <p>UTM Medium: {utmMedium || 'N/A'}</p>
    </footer>
  );
}