'use client'



export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Main content grid */}
      <div className="about-content">
        {/* Left Section - Title and Notes */}
        <div className="about-left pl-0 md:pl-30">
          <h1 className="about-title font-cormorant content-reveal about-reveal-1">About</h1>

          <h2 className="about-subtitle font-cormorant content-reveal about-reveal-2">
            I design and build full-stack web applications for real-world use.
          </h2>

          <div className="about-notes content-reveal about-reveal-3">
            <p className="about-paragraph">
              I started building software in 2023, driven by curiosity and a determination to understand how the web works end to end. What began with learning core programming concepts and building small projects quickly turned into designing and developing real websites and applications. I wasn't interested in just learning syntax—I wanted to build things that actually worked and could be used by others.
            </p>

            <p className="about-paragraph">
              Over time, this led me into full-stack development and freelance work, where I've collaborated with small businesses, startups, and individuals. I've worked on e-commerce platforms, landing pages, business websites, and personal portfolios, handling both complete builds and specific parts of larger projects. My work spans frontend, backend, and databases, along with authentication, payments, APIs, and real-time features.
            </p>

            <p className="about-paragraph">
              What motivates me most is building clean, fast, and reliable web applications that serve a real purpose. I focus on clear UI, performance, and shipping efficiently—learning from real usage and improving through iteration. For me, development isn't about flashy demos or buzzwords, but about delivering practical solutions that work in the real world.
            </p>
          </div>

          {/* Quote Section */}
          <div className="about-quote-section content-reveal about-reveal-4">
            <p className="about-quote-intro">
              This is how I approach building software:
            </p>

            <blockquote className="about-quote font-cormorant">
              "I don't build features just because they're possible.
              I build only what needs to exist.""
            </blockquote>

            <p className="about-quote-explanation">
              I'm not interested in writing code for the sake of complexity or visual appeal alone.
              Every decision I make—architecture, features, performance—is driven by real use cases and real constraints. I focus on building software that solves actual problems, scales when needed, and delivers measurable value in the real world.
            </p>
          </div>

          {/* Experience Section */}
          <div className="about-experience-section content-reveal about-reveal-5">
            <h3 className="about-section-title font-cormorant">Experience</h3>

            <div className="about-experience-item">
              <h4 className="about-experience-degree">Self-Taught Full-Stack Developer</h4>
              <p className="about-experience-description">
                1+ year of hands-on freelance experience building real-world web applications for small businesses, startups, and individual clients.
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
            <h3 className="about-section-title font-cormorant">Skills</h3>

            <p className="about-skills-list">
              MERN Stack Development / JavaScript & TypeScript / React & Next.js / Node.js & Express.js / MongoDB & SQL Databases / REST API Development / Authentication & Authorization (JWT, Roles) / Redux & Context API / Admin Dashboards & Role-Based Systems / Payment Integration (Razorpay) / Real-Time Features / Database Design / Responsive UI Development / Git & Version Control / Deployment & Hosting (Vercel, Render, AWS, Nginx)
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="about-right content-reveal about-reveal-3">
          <div className="about-image-container">
            {/* Image placeholder — add your image here later */}
            <div className="about-image" style={{ width: 400, height: 520, backgroundColor: '#1a1a18' }} />
          </div>
        </div>
      </div>
    </div>
  )
}