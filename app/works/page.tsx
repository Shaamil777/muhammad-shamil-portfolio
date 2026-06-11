'use client';
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import TransitionLink from '../components/TransitionLink';

const projects = [
  { name: 'OJAS THEERAM', slug: 'ojastheeram', category: 'AYURVEDIC WELLNESS', image: '/projects/Ojas/1.png' },
  { name: 'AUTONEXIS', slug: 'autonexis', category: 'EVENT-DRIVEN SYSTEMS', image: '/projects/AutoNexis/1.png' },
  { name: 'MICROSTORE', slug: 'microstore', category: 'MICROSERVICES ARCHITECTURE', image: null },
  { name: 'NOOZI', slug: 'noozi', category: 'CREATIVE STUDIO', image: '/projects/noozi/1.png' },
  { name: 'DEVLOOM', slug: 'devloom', category: 'PUBLISHING PLATFORM', image: '/projects/devloom/1.png' },
  { name: 'AMRITHA', slug: 'amrithaheritage', category: 'HOSPITALITY', image: '/projects/amritha/01.webp' },
  { name: 'OPEN DOOR', slug: 'opendoor', category: 'EDUCATION CONSULTANCY', image: '/projects/opendoor/hero-section.webp' },
  { name: 'URBANWORN', slug: 'urbanworn', category: 'E-COMMERCE DEVELOPMENT', image: null },
  { name: 'LAPO', slug: 'lapo', category: 'CAMPAIGN SERVICES', image: '/projects/lapo/01.webp' },
  { name: 'DRAVO', slug: 'cafco', category: 'E-COMMERCE DEVELOPMENT', image: '/projects/cafco/01.png' },
  { name: 'EVENTO', slug: 'evento', category: 'EVENT VENUE', image: null },
  { name: 'AI DOC CHAT', slug: 'aidocchat', category: 'AI APPLICATION', image: '/projects/aidocchat/1.png' }
];

export default function Works() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="works-container">
      <div className="works-left content-reveal works-reveal-1">
        <h2 className="works-label">WORK</h2>
        <p className="works-description">
          This is a showcase of my best work in a variety
          of fields including Graphic and Web Design,
          No-Code Development, Product Design and
          Product Management.
        </p>
        <p className="works-description works-description-secondary">
          The world of digital design and development
          is constantly evolving and so has my role
          throughout my career.
        </p>
      </div>

      <div className="works-right">
        {projects.map((project, index) => (
          <div 
            key={project.slug} 
            className={`works-project-item content-reveal works-reveal-${index + 1}`}
            onMouseEnter={() => setHoveredImage(project.image)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <TransitionLink href={`/works/${project.slug}`} className="works-project-name font-cormorant">
              {project.name}
            </TransitionLink>
            <span className="works-project-category">– {project.category}</span>
          </div>
        ))}
      </div>

      {mounted && hoveredImage && createPortal(
        <div 
          className="pointer-events-none fixed z-50 overflow-hidden rounded-lg shadow-2xl transition-transform duration-100 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '350px',
            height: '250px'
          }}
        >
          <img 
            src={hoveredImage} 
            alt="Work preview" 
            className="w-full h-full object-cover"
          />
        </div>,
        document.body
      )}
    </div>
  );
}