'use client';

import { useEffect, useState, createContext, useContext, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionContextType {
    startTransition: (href: string, color?: string, direction?: 'down' | 'up') => void;
    isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
    startTransition: () => { },
    isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

const pageColors: Record<string, string> = {
    '/about': '#ddd8af',
    '/works': '#ddd8af',
    '/contact': '#ddd8af',
    '/': '#1a1a18',
};

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
    const [overlayState, setOverlayState] = useState<'hidden' | 'ready' | 'entering' | 'covering' | 'exiting'>('hidden');
    const previousPathRef = useRef(pathname);

    const startTransition = useCallback((href: string, color?: string, direction?: 'down' | 'up') => {
        if (href === pathname || isTransitioning) return;

        const isProjectDetail = href.startsWith('/works/') && href !== '/works';
        const defaultColor = isProjectDetail ? '#1a1a18' : (pageColors[href] || '#ddd8af');
        const defaultDirection = isProjectDetail ? 'down' : (pageDirections[href] || 'down');

        const newDirection = direction || defaultDirection;
        console.log('Starting transition to:', href, 'direction:', newDirection);

        setIsTransitioning(true);
        setTransitionColor(color || defaultColor);
        setTransitionDirection(newDirection);

        setOverlayState('ready');

        setTimeout(() => {
            setOverlayState('entering');
        }, 50);

        setTimeout(() => {
            console.log('Overlay covered, navigating...');
            setOverlayState('covering');
            router.push(href);
        }, 700);
    }, [pathname, isTransitioning, router]);

    useEffect(() => {
        if (previousPathRef.current !== pathname && overlayState === 'covering') {
            console.log('Navigation complete, starting exit animation');
            setTimeout(() => {
                setOverlayState('exiting');
            }, 100);
        }
        previousPathRef.current = pathname;
    }, [pathname, overlayState]);

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
