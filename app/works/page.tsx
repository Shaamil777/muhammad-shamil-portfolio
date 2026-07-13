'use client';
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useCallback } from 'react';
import TransitionLink from '../components/TransitionLink';
import projectDataMap from './projectData';

const projects = [
  { name: 'OJAS THEERAM', slug: 'ojastheeram', category: 'AYURVEDIC WELLNESS', image: '/projects/Ojas/1.png' },
  { name: 'NOOZI', slug: 'noozi', category: 'CREATIVE STUDIO', image: '/projects/noozi/1.png' },
  { name: 'DRAVO', slug: 'cafco', category: 'E-COMMERCE DEVELOPMENT', image: '/projects/cafco/01.png' },
  { name: 'LAPO', slug: 'lapo', category: 'CAMPAIGN SERVICES', image: '/projects/lapo/01.webp' },
  { name: 'AMRITHA', slug: 'amrithaheritage', category: 'HOSPITALITY', image: '/projects/amritha/02.webp' },
  { name: 'OPEN DOOR', slug: 'opendoor', category: 'EDUCATION CONSULTANCY', image: '/projects/opendoor/hero-section.webp' },
  { name: 'AUTONEXIS', slug: 'autonexis', category: 'EVENT-DRIVEN SYSTEMS', image: '/projects/AutoNexis/1.png' },
  { name: 'MICROSTORE', slug: 'microstore', category: 'MICROSERVICES ARCHITECTURE', image: null },
  { name: 'DEVLOOM', slug: 'devloom', category: 'PUBLISHING PLATFORM', image: '/projects/devloom/1.png' },
  { name: 'URBANWORN', slug: 'urbanworn', category: 'E-COMMERCE DEVELOPMENT', image: null },
  { name: 'EVENTO', slug: 'evento', category: 'EVENT VENUE', image: null },
  { name: 'AI DOC CHAT', slug: 'aidocchat', category: 'AI APPLICATION', image: '/projects/aidocchat/1.png' }
];

const ITEMS_PER_PAGE = 4;
const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

export default function Works() {
  const [visible, setVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
  }, []);

  const goToPage = useCallback((page: number) => {
    if (page === currentPage || page < 1 || page > totalPages) return;
    setAnimating(true);

    // Brief fade-out, then switch page and fade-in
    setTimeout(() => {
      setCurrentPage(page);
      setAnimating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }, [currentPage]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="works-page">
      {/* Page header */}
      <div className={`works-header ${visible ? 'works-animate' : ''}`}>
        <span className="works-header-label font-bold text-black tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>WORK</span>
        <h1 className="works-header-title uppercase font-black italic text-black" style={{ fontFamily: 'var(--font-inter)' }}>Selected Projects</h1>
        <p className="works-header-desc text-black font-semibold">
          A showcase of my best work across web design, full-stack development,
          and product engineering — each project tells a story.
        </p>
      </div>

      {/* Project cards */}
      <div className={`works-list ${animating ? 'works-list-exit' : ''}`}>
        {currentProjects.map((project, index) => {
          const globalIndex = startIndex + index;
          const detail = projectDataMap[project.slug];
          const summary = detail?.summary || '';
          const number = String(globalIndex + 1).padStart(2, '0');

          return (
            <TransitionLink
              key={project.slug}
              href={`/works/${project.slug}`}
              className={`works-card ${visible && !animating ? 'works-animate' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Text side */}
              <div className="works-card-text text-black">
                <span className="works-card-number uppercase font-black italic tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>{number}</span>
                <h2 className="works-card-name uppercase font-black italic tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>{project.name}</h2>
                <span className="works-card-category font-bold tracking-widest uppercase">— {project.category}</span>
                {summary && (
                  <p className="works-card-summary">{summary}</p>
                )}
                <span className="works-card-cta">
                  View Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>

              {/* Image side */}
              <div className="works-card-image-wrap">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="works-card-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="works-card-placeholder border-4 border-black bg-yellow-400">
                    <span className="works-card-placeholder-text uppercase font-black italic text-black" style={{ fontFamily: 'var(--font-inter)' }}>
                      {project.name}
                    </span>
                    <span className="works-card-placeholder-sub text-black font-bold uppercase tracking-widest">Backend Project</span>
                  </div>
                )}
              </div>
            </TransitionLink>
          );
        })}
      </div>

      {/* Pagination */}
      <div className={`works-pagination ${visible ? 'works-animate' : ''}`} style={{ animationDelay: '0.5s' }}>
        <button
          className="works-pagination-arrow"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`works-pagination-btn ${page === currentPage ? 'active' : ''}`}
            onClick={() => goToPage(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {String(page).padStart(2, '0')}
          </button>
        ))}

        <button
          className="works-pagination-arrow"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}