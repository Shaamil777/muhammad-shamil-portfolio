'use client';

import React from 'react';
import { usePageTransition } from './PageTransition';

interface TransitionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    color?: string;
    direction?: 'down' | 'up';
    style?: React.CSSProperties;
}

export default function TransitionLink({ href, children, className, color, direction, style }: TransitionLinkProps) {
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
            style={style}
        >
            {children}
        </a>
    );
}
