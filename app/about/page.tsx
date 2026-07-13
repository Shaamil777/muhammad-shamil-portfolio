'use client'
/* eslint-disable react/no-unescaped-entities */



export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Main content grid */}
      <div className="about-content">
        {/* Left Section - Title and Notes */}
        <div className="about-left pl-0 md:pl-30">
          <div className="about-notes content-reveal about-reveal-3">
            <p className="about-paragraph text-black font-semibold">
              Every project starts with a simple question: How can this be better for the person using it? I enjoy building products that feel simple, fast, and reliable because that's what people remember—not the technology behind them.
            </p>

            <p className="about-paragraph text-black font-semibold">
              I'm Shamil. I love working with modern technologies, learning new stacks, and solving problems that push me to think differently. Building across the full stack lets me see the bigger picture, from the user experience on the frontend to the systems that power everything behind the scenes.
            </p>

            <p className="about-paragraph text-black font-semibold">
              For me, success isn't measured by how much code I write or how many frameworks I know. It's measured by whether the final product makes life easier for users and gives clients confidence that they made the right choice. That's the kind of software I enjoy building.
            </p>
          </div>

          {/* Experience Section */}
          <div className="about-experience-section content-reveal about-reveal-5">
            <h3 className="about-section-title uppercase font-black italic text-black tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>Experience</h3>

            <div className="about-experience-item">
              <h4 className="about-experience-degree">Self-Taught Full-Stack Developer</h4>
              <p className="about-experience-description">
                1.5+ years of hands-on freelance experience building real-world web applications for small businesses, startups, and individual clients.
              </p>
            </div>

            <p className="about-experience-summary">
              Within this experience, I have worked on:
            </p>

            <ul className="about-experience-list">
              <li>Building responsive front-end interfaces using React, Next.js, HTML, CSS, and Tailwind</li>
              <li>Developing back-end systems with Node.js, Express, REST APIs, and authentication</li>
              <li>Working with databases including MongoDB and SQL-based systems</li>
              <li>Delivering complete projects independently—from planning and development to deployment</li>
              <li>Collaborating with non-technical clients to translate business needs into functional products</li>
              <li>Maintaining and improving existing applications based on real user feedback</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="about-skills-section content-reveal about-reveal-6">
            <h3 className="about-section-title uppercase font-black italic text-black tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>Skills</h3>

            <p className="about-skills-list">
              MERN Stack Development / JavaScript & TypeScript / React & Next.js / Node.js, Express.js & NestJS / Django REST API / MongoDB, PostgreSQL & Prisma ORM / REST API Development / Authentication (JWT, NextAuth, Roles) / State Management (Redux, Context API, TanStack Query) / Admin Dashboards & Role-Based Systems / UI & Animations (Tailwind CSS, Framer Motion, GSAP, Lenis, 3D Scroll Animations) / Payment Integration (Razorpay) / AI & Vector DBs (Gemini, ChromaDB, RAG) / Event-Driven Architecture (n8n) / Docker & Containerization / API Documentation (Swagger) / Data Validation (Zod) / Real-Time Features / Database Design / Git & Version Control / Deployment & Hosting (Vercel, Render, AWS, Nginx)
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}