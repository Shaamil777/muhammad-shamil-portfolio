'use client';

import { useEffect, useState, createContext, useContext, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Context to manage page transitions
interface TransitionContextType {
    startTransition: (href: string, color?: string) => void;
    isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
    startTransition: () => { },
    isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

// Define colors for different pages
const pageColors: Record<string, string> = {
    '/about': '#ddd8af',
    '/works': '#ddd8af',
    '/contact': '#ddd8af',
    '/': '#1a1a18',
};

interface PageTransitionProviderProps {
    children: React.ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionColor, setTransitionColor] = useState('#ddd8af');
    const [overlayState, setOverlayState] = useState<'hidden' | 'entering' | 'covering' | 'exiting'>('hidden');
    const previousPathRef = useRef(pathname);

    const startTransition = useCallback((href: string, color?: string) => {
        // Don't transition if already on the same page or already transitioning
        if (href === pathname || isTransitioning) return;

        console.log('Starting transition to:', href);
        setIsTransitioning(true);
        setTransitionColor(color || pageColors[href] || '#ddd8af');
        setOverlayState('entering');

        // After overlay covers the screen, navigate
        setTimeout(() => {
            console.log('Overlay covered, navigating...');
            setOverlayState('covering');
            router.push(href);
        }, 600);
    }, [pathname, isTransitioning, router]);

    // Watch for pathname changes to trigger exit animation
    useEffect(() => {
        if (previousPathRef.current !== pathname && overlayState === 'covering') {
            console.log('Navigation complete, starting exit animation');
            // Small delay to ensure page has rendered
            setTimeout(() => {
                setOverlayState('exiting');
            }, 100);
        }
        previousPathRef.current = pathname;
    }, [pathname, overlayState]);

    // Handle exit animation completion
    useEffect(() => {
        if (overlayState === 'exiting') {
            const timer = setTimeout(() => {
                console.log('Transition complete');
                setOverlayState('hidden');
                setIsTransitioning(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [overlayState]);

    return (
        <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
            {children}

            {/* Page Transition Overlay - slides DOWN from top, then continues DOWN to exit */}
            <div
                className={`page-transition-overlay ${overlayState}`}
                style={{
                    backgroundColor: transitionColor,
                }}
                aria-hidden="true"
            />
        </TransitionContext.Provider>
    );
}
