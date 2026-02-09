'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Large Hello Title */}
      <h1 className="contact-title content-reveal contact-reveal-1 font-cormorant">
        Hello.
      </h1>

      {/* Description text */}
      <p className="contact-description content-reveal contact-reveal-2">
        Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.
      </p>

      {/* Email */}
      <div className="contact-info content-reveal contact-reveal-3">
        <span className="contact-label">Email: </span>
        <Link href="mailto:legendarywaller@gmail.com" className="contact-link">
          legendarywaller@gmail.com
        </Link>
      </div>

      {/* Social Links */}
      <div className="contact-info content-reveal contact-reveal-4">
        <span className="contact-label">On the Internet: </span>
        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          Linkedin
        </Link>
        <span className="contact-separator"> / </span>
        <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          Dribbble
        </Link>
        <span className="contact-separator"> / </span>
        <Link href="https://threads.net" target="_blank" rel="noopener noreferrer" className="contact-link">
          Threads
        </Link>
        <span className="contact-separator"> / </span>
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
          Github
        </Link>
      </div>
    </div>
  );
}