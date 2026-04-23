'use client';

import TransitionLink from '../components/TransitionLink';

const projects = [
  { name: 'OPEN DOOR', slug: 'opendoor', category: 'EDUCATION CONSULTANCY' },
  { name: 'AMRITHA', slug: 'amrithaheritage', category: 'HOSPITALITY' },
  { name: 'URBANWORN', slug: 'urbanworn', category: 'E-COMMERCE DEVELOPMENT' },
  { name: 'LAPO', slug: 'lapo', category: 'CAMPAIGN SERVICES' },
  { name: 'CAFCO', slug: 'cafco', category: 'E-COMMERCE DEVELOPMENT' },
  { name: 'EVENTO', slug: 'evento', category: 'EVENT VENUE' },
  { name: 'AI DOC CHAT', slug: 'aidocchat', category: 'AI APPLICATION' },
  { name: 'DEVLOOM', slug: 'devloom', category: 'PUBLISHING PLATFORM' },
  { name: 'NOOZI', slug: 'noozi', category: 'CREATIVE STUDIO' },
  { name: 'AUTONEXIS', slug: 'autonexis', category: 'EVENT-DRIVEN SYSTEMS' }
];

export default function Works() {
  return (
    <div className="works-container">
      {/* Left side - Description */}
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

      {/* Right side - Project Names */}
      <div className="works-right">
        {projects.map((project, index) => (
          <div key={project.slug} className={`works-project-item content-reveal works-reveal-${index + 1}`}>
            <TransitionLink href={`/works/${project.slug}`} className="works-project-name font-cormorant">
              {project.name}
            </TransitionLink>
            <span className="works-project-category">– {project.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}