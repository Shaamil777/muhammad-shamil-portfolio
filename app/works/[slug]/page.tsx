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
                <div className="pd-showcase-featured">
                    <div className="pd-showcase-placeholder">
                        <div className="pd-placeholder-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                        </div>
                        <p className="pd-placeholder-text">Featured Project Image</p>
                        <p className="pd-placeholder-hint">Replace with your project screenshot or mockup</p>
                    </div>
                </div>
                <div className="pd-showcase-gallery">
                    {project.gallery.map((img, index) => (
                        <div key={index} className={`pd-gallery-item ${img.type === 'mobile' ? 'pd-gallery-mobile' : 'pd-gallery-desktop'}`}>
                            <div className="pd-gallery-placeholder">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    {img.type === 'mobile' ? (
                                        <>
                                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                            <line x1="12" y1="18" x2="12.01" y2="18" />
                                        </>
                                    ) : (
                                        <>
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                            <line x1="8" y1="21" x2="16" y2="21" />
                                            <line x1="12" y1="17" x2="12" y2="21" />
                                        </>
                                    )}
                                </svg>
                                <span className="pd-gallery-label">{img.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
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

                {/* 4. Problem / Challenge */}
                <section className="pd-section" id="pd-problem">
                    <div className="pd-section-header">
                        <span className="pd-section-number">02</span>
                        <h2 className="pd-section-title font-cormorant">Problem &amp; Challenge</h2>
                    </div>
                    <div className="pd-section-body">
                        <p className="pd-body-text pd-problem-text">{project.problem.issue}</p>
                        <div className="pd-constraints">
                            <h4 className="pd-constraints-label">Key Constraints</h4>
                            <ul className="pd-constraints-list">
                                {project.problem.constraints.map((c, i) => (
                                    <li key={i} className="pd-constraints-item">{c}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 5. Solution & Approach */}
                <section className="pd-section" id="pd-solution">
                    <div className="pd-section-header">
                        <span className="pd-section-number">03</span>
                        <h2 className="pd-section-title font-cormorant">Solution &amp; Approach</h2>
                    </div>
                    <div className="pd-section-body">
                        <p className="pd-body-text">{project.solution.approach}</p>
                        <div className="pd-decisions">
                            <h4 className="pd-constraints-label">Key Decisions</h4>
                            <div className="pd-decisions-grid">
                                {project.solution.decisions.map((d, i) => (
                                    <div key={i} className="pd-decision-card">
                                        <span className="pd-decision-index">{String(i + 1).padStart(2, '0')}</span>
                                        <p className="pd-decision-text">{d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Key Features */}
                <section className="pd-section" id="pd-features">
                    <div className="pd-section-header">
                        <span className="pd-section-number">04</span>
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
                        <span className="pd-section-number">05</span>
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

                {/* 8. Results / Impact */}
                <section className="pd-section" id="pd-results">
                    <div className="pd-section-header">
                        <span className="pd-section-number">06</span>
                        <h2 className="pd-section-title font-cormorant">Results &amp; Impact</h2>
                    </div>
                    <div className="pd-section-body">
                        <div className="pd-results-grid">
                            {project.results.map((r, i) => (
                                <div key={i} className="pd-result-card">
                                    <h3 className="pd-result-metric font-cormorant">{r.metric}</h3>
                                    <p className="pd-result-desc">{r.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. Lessons Learned */}
                {project.lessons.length > 0 && (
                    <section className="pd-section" id="pd-lessons">
                        <div className="pd-section-header">
                            <span className="pd-section-number">07</span>
                            <h2 className="pd-section-title font-cormorant">Lessons &amp; Highlights</h2>
                        </div>
                        <div className="pd-section-body">
                            <div className="pd-lessons-list">
                                {project.lessons.map((l, i) => (
                                    <div key={i} className="pd-lesson-item">
                                        <div className="pd-lesson-marker">
                                            <div className="pd-lesson-dot" />
                                            {i < project.lessons.length - 1 && <div className="pd-lesson-line" />}
                                        </div>
                                        <p className="pd-lesson-text">{l}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

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
