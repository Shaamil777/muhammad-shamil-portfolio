'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Large Hello Title */}
      <h1 className="contact-title content-reveal contact-reveal-1 uppercase font-black italic text-black tracking-widest" style={{ fontFamily: 'var(--font-inter)' }}>
        Hello.
      </h1>

      {/* Description text */}
      <p className="contact-description content-reveal contact-reveal-2">
        Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.
      </p>

      {/* Email */}
      <div className="contact-info content-reveal contact-reveal-3">
        <span className="contact-label">Email: </span>
        <Link href="mailto:shamilm2324@gmail.com" className="contact-link">
          shamilm2324@gmail.com
        </Link>
      </div>

      {/* WhatsApp */}
      <div className="contact-info content-reveal contact-reveal-4">
        <span className="contact-label">WhatsApp: </span>
        <Link
          href="https://wa.me/916282763376?text=Hi%20Shamil!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Message me on WhatsApp
        </Link>
      </div>

      {/* Social Links */}
      <div className="contact-info content-reveal contact-reveal-5">
        <span className="contact-label">On the Internet: </span>
        <Link href="https://www.linkedin.com/in/muhammad-shamil-4b42a8329/" target="_blank" rel="noopener noreferrer" className="contact-link">
          Linkedin
        </Link>
        <span className="contact-separator"> / </span>
        <Link href="https://www.instagram.com/_sh4mill/" target="_blank" rel="noopener noreferrer" className="contact-link">
          Instagram
        </Link>
        <span className="contact-separator"> / </span>
        <Link href="https://www.threads.com/@_sh4mill?xmt=AQF0cpeRAcMzY0Sqqa1BNsnG0lvOdskpK4zfjTuB21zFAgM" target="_blank" rel="noopener noreferrer" className="contact-link">
          Threads
        </Link>
        <span className="contact-separator"> / </span>
        <Link href="https://github.com/Shaamil777" target="_blank" rel="noopener noreferrer" className="contact-link">
          Github
        </Link>
      </div>
    </div>
  );
}