'use client';

import React from 'react';
import { usePageTransition } from './PageTransition';

interface TransitionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    color?: string;
    direction?: 'down' | 'up';
}

export default function TransitionLink({ href, children, className, color, direction }: TransitionLinkProps) {
    const { startTransition, isTransitioning } = usePageTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (!isTransitioning) {
            startTransition(href, color, direction);
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
}
