'use client';

import { useEffect, useState } from 'react';

interface LoadingOverlayProps {
  children: React.ReactNode;
}

export default function LoadingOverlay({ children }: LoadingOverlayProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start the slide-down animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fixed solid color background */}
      <div
        className="fixed inset-0 z-10"
        style={{
          backgroundColor: 'var(--framer-link-text-color, #ddd8af)',
        }}
      />

      {/* Content that slides down from top */}
      <div
        className={`relative z-20 min-h-screen transition-transform duration-1000 ease-in-out ${isLoaded ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {children}
      </div>
    </>
  );
}