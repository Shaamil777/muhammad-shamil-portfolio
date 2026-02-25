'use client';

import Link from 'next/link';

const projects = [
  { name: 'WARD', category: 'WEBFLOW DEVELOPMENT' },
  { name: 'SUPERLINK', category: 'FRAMER DEVELOPMENT' },
  { name: 'OKALPHA', category: 'WEBFLOW DEVELOPMENT' },
  { name: 'KAROO', category: 'WEBFLOW DEVELOPMENT' },
  { name: 'KAROO', category: 'WEBFLOW DEVELOPMENT' },
  { name: 'KAROO', category: 'WEBFLOW DEVELOPMENT' },
  { name: 'KAROO', category: 'WEBFLOW DEVELOPMENT' },
  { name: 'KAROO', category: 'WEBFLOW DEVELOPMENT' },
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
          <div key={project.name} className={`works-project-item content-reveal works-reveal-${index + 1}`}>
            <Link href="#" className="works-project-name font-cormorant">
              {project.name}
            </Link>
            <span className="works-project-category">– {project.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}