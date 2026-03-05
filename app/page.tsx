'use client';

import { useEffect, useState } from 'react';
import TransitionLink from "./components/TransitionLink";

export default function Home() {
  const [isReturn, setIsReturn] = useState(false);

  useEffect(() => {
    // Check if the site has been loaded before (i.e., this is a return visit)
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    if (hasVisited) {
      setIsReturn(true);
    } else {
      // Mark that the initial load has happened
      sessionStorage.setItem('hasVisitedHome', 'true');
    }
  }, []);

  // Use fast delays on return, slow delays on initial load
  const r = (n: number) => `content-reveal ${isReturn ? `content-reveal-fast-${n}` : `content-reveal-${n}`}`;

  return (
    <div className="home-container h-screen w-full flex">
      {/* Left side - Content area for paragraph */}
      <div className="w-1/2 p-12 pt-110 flex items-center justify-center">
        <div className="max-w-md">
          <div className="mb-8">
            <h2 className={`${r(1)} text-1xl mb-4 text-white font-normal`}>
              MUHAMMAD SHAMIL
            </h2>
            <p className={`${r(2)} description-text text-md leading-relaxed`}>
              Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.
            </p>
            <p className={`${r(3)} description-text text-md leading-relaxed mt-4`}>
              Full-stack Web Developer · MERN
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Navigation Links */}
      <div className="w-1/2 flex flex-col justify-center items-center pr-55 space-y-6">
        <TransitionLink href="/works" className={`${r(3)} nav-link text-[12rem] pr-90 tracking-wider leading-none`}>
          WORK
        </TransitionLink>

        <TransitionLink href="/about" className={`${r(4)} nav-link text-[12rem] pr-65 tracking-wider leading-none`}>
          ABOUT
        </TransitionLink>

        <TransitionLink href="/contact" className={`${r(5)} nav-link text-[12rem] tracking-wider leading-none`}>
          CONTACT
        </TransitionLink>
      </div>
    </div>
  );
}