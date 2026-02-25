'use client';

import { useEffect, useState, createContext, useContext, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Context to manage page transitions
interface TransitionContextType {
    startTransition: (href: string, color?: string, direction?: 'down' | 'up') => void;
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

// Define default directions for different pages
const pageDirections: Record<string, 'down' | 'up'> = {
    '/about': 'down',
    '/works': 'up',
    '/contact': 'up',
    '/': 'down',
};

interface PageTransitionProviderProps {
    children: React.ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionColor, setTransitionColor] = useState('#ddd8af');
    const [transitionDirection, setTransitionDirection] = useState<'down' | 'up'>('down');
    // Added 'ready' state: positions overlay without animation before entering
    const [overlayState, setOverlayState] = useState<'hidden' | 'ready' | 'entering' | 'covering' | 'exiting'>('hidden');
    const previousPathRef = useRef(pathname);

    const startTransition = useCallback((href: string, color?: string, direction?: 'down' | 'up') => {
        // Don't transition if already on the same page or already transitioning
        if (href === pathname || isTransitioning) return;

        // Handle dynamic project detail routes
        const isProjectDetail = href.startsWith('/works/') && href !== '/works';
        const defaultColor = isProjectDetail ? '#1a1a18' : (pageColors[href] || '#ddd8af');
        const defaultDirection = isProjectDetail ? 'down' : (pageDirections[href] || 'down');

        const newDirection = direction || defaultDirection;
        console.log('Starting transition to:', href, 'direction:', newDirection);

        setIsTransitioning(true);
        setTransitionColor(color || defaultColor);
        setTransitionDirection(newDirection);

        // Set to 'ready' state first - this positions the overlay without animation
        setOverlayState('ready');

        // After overlay is positioned, trigger the entering animation
        setTimeout(() => {
            setOverlayState('entering');
        }, 50);

        // After overlay covers the screen, navigate
        setTimeout(() => {
            console.log('Overlay covered, navigating...');
            setOverlayState('covering');
            router.push(href);
        }, 700);
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

            {/* Page Transition Overlay - direction determines slide direction */}
            <div
                className={`page-transition-overlay page-transition-overlay-${transitionDirection} ${overlayState}`}
                style={{
                    backgroundColor: transitionColor,
                }}
                aria-hidden="true"
            />
        </TransitionContext.Provider>
    );
}
