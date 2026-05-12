'use client';

import { useEffect, useState } from 'react';

interface LoadingOverlayProps {
  children: React.ReactNode;
}

export default function LoadingOverlay({ children }: LoadingOverlayProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-10"
        style={{
          backgroundColor: 'var(--framer-link-text-color, #ddd8af)',
        }}
      />

      <div
        className={`relative z-20 min-h-screen transition-transform duration-1000 ease-in-out ${isLoaded ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {children}
      </div>
    </>
  );
}