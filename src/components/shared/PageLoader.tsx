'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  useEffect(() => {
    if (previousPath !== pathname) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setPreviousPath(pathname);
      }, 700); // This duration simulates the page load

      return () => clearTimeout(timer);
    }
  }, [pathname, previousPath]);

  // This effect handles the very first page load.
  // We can start with loading true and set it to false after mount.
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
        setInitialLoad(false);
      }, 500);
      return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm transition-opacity duration-300 ${
        (loading || initialLoad) ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
          <Logo />
          <div className={`absolute top-0 left-0 h-full w-full bg-background ${ (loading || initialLoad) ? 'animate-pulse' : ''}`}></div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Loading page...</p>
    </div>
  );
}
