'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // To avoid a flash on initial load, we can use a check.
    // This is not perfect but works for client-side navigations.
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Adjust timeout to match your page load times

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
          <Logo />
          <div className="absolute top-0 left-0 h-full w-full bg-background animate-pulse"></div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Loading page...</p>
    </div>
  );
}
