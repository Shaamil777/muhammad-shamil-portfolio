'use client';

import { useParams } from 'next/navigation';
import { getProject } from '../projectData';
import TransitionLink from '../../components/TransitionLink';

export default function ProjectDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProject(slug);

    if (!project) {
        return (
            <div className="pd-container">
                <div className="pd-not-found">
                    <h1 className="pd-not-found-title font-cormorant">Project Not Found</h1>
                    <p className="pd-not-found-text">The project you're looking for doesn't exist.</p>
                    <TransitionLink href="/works" className="pd-back-link">
                        ← Back to Works
                    </TransitionLink>
                </div>
            </div>
        );
    }

    return (
        <div className="pd-container">

            {/* 1. Hero Section */}
            <section className="pd-hero" id="pd-hero">
                <div className="pd-hero-inner">
                    <p className="pd-hero-label content-reveal pd-reveal-1">PROJECT</p>
                    <h1 className="pd-hero-title font-cormorant content-reveal pd-reveal-1">
                        {project.title}
                    </h1>
                    <p className="pd-hero-summary content-reveal pd-reveal-2">
                        {project.summary}
                    </p>

                    {/* Badges */}
                    <div className="pd-badges content-reveal pd-reveal-2">
                        {project.badges.map((badge) => (
                            <div key={badge.label} className="pd-badge">
                                <span className="pd-badge-label">{badge.label}</span>
                                <span className="pd-badge-value">{badge.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="pd-tech-tags content-reveal pd-reveal-3">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="pd-tech-tag">{tech}</span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pd-actions content-reveal pd-reveal-3">
                        {project.actions.map((action) => (
                            <a
                                key={action.label}
                                href={action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`pd-action-btn ${action.type === 'primary' ? 'pd-action-primary' : 'pd-action-secondary'}`}
                            >
                                {action.type === 'primary' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                )}
                                {action.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Visual Showcase */}
            <section className="pd-showcase content-reveal pd-reveal-4" id="pd-showcase">
                {project.gallery.length > 0 && (
                    <div className="pd-showcase-featured">
                        <img
                            src={project.gallery[0].src}
                            alt={project.gallery[0].alt}
                            className="pd-showcase-featured-img"
                        />
                    </div>
                )}
                {project.gallery.length > 1 && (
                    <div className="pd-showcase-gallery">
                        {project.gallery.slice(1).map((img, index) => (
                            <div key={index} className={`pd-gallery-item ${img.type === 'mobile' ? 'pd-gallery-mobile' : 'pd-gallery-desktop'}`}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="pd-gallery-img"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Content sections wrapper */}
            <div className="pd-content-wrapper">

                {/* 3. Project Overview */}
                <section className="pd-section" id="pd-overview">
                    <div className="pd-section-header">
                        <span className="pd-section-number">01</span>
                        <h2 className="pd-section-title font-cormorant">Project Overview</h2>
                    </div>
                    <div className="pd-section-body pd-overview-grid">
                        <div className="pd-overview-main">
                            <p className="pd-body-text">{project.overview.description}</p>
                        </div>
                        <div className="pd-overview-meta">
                            <div className="pd-overview-item">
                                <h4 className="pd-overview-label">Target Audience</h4>
                                <p className="pd-body-text-sm">{project.overview.audience}</p>
                            </div>
                            <div className="pd-overview-item">
                                <h4 className="pd-overview-label">Business Goal</h4>
                                <p className="pd-body-text-sm">{project.overview.goal}</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* 6. Key Features */}
                <section className="pd-section" id="pd-features">
                    <div className="pd-section-header">
                        <span className="pd-section-number">02</span>
                        <h2 className="pd-section-title font-cormorant">Key Features</h2>
                    </div>
                    <div className="pd-section-body">
                        <div className="pd-features-grid">
                            {project.features.map((f, i) => (
                                <div key={i} className="pd-feature-card">
                                    <span className="pd-feature-icon">{f.icon}</span>
                                    <h4 className="pd-feature-title">{f.title}</h4>
                                    <p className="pd-feature-desc">{f.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Technology Stack */}
                <section className="pd-section" id="pd-stack">
                    <div className="pd-section-header">
                        <span className="pd-section-number">03</span>
                        <h2 className="pd-section-title font-cormorant">Technology Stack</h2>
                    </div>
                    <div className="pd-section-body">
                        <div className="pd-stack-grid">
                            {Object.entries(project.stack).map(([category, techs]) => {
                                if (!techs || techs.length === 0) return null;
                                return (
                                    <div key={category} className="pd-stack-group">
                                        <h4 className="pd-stack-category">
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </h4>
                                        <div className="pd-stack-tags">
                                            {techs.map((t: string) => (
                                                <span key={t} className="pd-stack-tag">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>



                {/* 10. Project Navigation */}
                <section className="pd-navigation" id="pd-navigation">
                    <div className="pd-nav-inner">
                        <div className="pd-nav-side pd-nav-prev">
                            {project.navigation.prev ? (
                                <TransitionLink href={`/works/${project.navigation.prev.slug}`} className="pd-nav-link">
                                    <span className="pd-nav-direction">← Previous Project</span>
                                    <span className="pd-nav-project-name font-cormorant">
                                        {project.navigation.prev.title}
                                    </span>
                                </TransitionLink>
                            ) : (
                                <div />
                            )}
                        </div>

                        <TransitionLink href="/works" className="pd-nav-back">
                            All Projects
                        </TransitionLink>

                        <div className="pd-nav-side pd-nav-next">
                            {project.navigation.next ? (
                                <TransitionLink href={`/works/${project.navigation.next.slug}`} className="pd-nav-link pd-nav-link-next">
                                    <span className="pd-nav-direction">Next Project →</span>
                                    <span className="pd-nav-project-name font-cormorant">
                                        {project.navigation.next.title}
                                    </span>
                                </TransitionLink>
                            ) : (
                                <div />
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
