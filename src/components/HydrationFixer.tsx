// components/HydrationFixer.tsx
"use client";

import { useEffect, useState } from 'react';

export default function HydrationFixer({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Remove extension attributes
    const cleanup = () => {
      const body = document.body;
      body.removeAttribute('data-new-gr-c-s-check-loaded');
      body.removeAttribute('data-gr-ext-installed');
      body.removeAttribute('cz-shortcut-listen');
    };

    setIsHydrated(true);
    cleanup();
    
    // Some extensions add attributes after initial load
    const timeout = setTimeout(cleanup, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // This prevents the mismatch by not rendering until hydration is complete
  return isHydrated ? children : null;
}