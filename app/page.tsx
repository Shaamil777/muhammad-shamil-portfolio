'use client';

import { useEffect, useState } from 'react';
import TransitionLink from "./components/TransitionLink";

export default function Home() {
  const [isReturn, setIsReturn] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisitedHome');
    if (hasVisited) {
      setIsReturn(true);
    } else {
      sessionStorage.setItem('hasVisitedHome', 'true');
    }
  }, []);

  const r = (n: number) => `content-reveal ${isReturn ? `content-reveal-fast-${n}` : `content-reveal-${n}`}`;

  return (
    <div className="home-container min-h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 pt-24 md:p-12 md:pt-110 flex items-center justify-center">
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

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-0 pr-0 md:pr-55 space-y-4 md:space-y-6">
        <TransitionLink href="/works" className={`${r(3)} nav-link text-[4.5rem] sm:text-[7rem] md:text-[12rem] pr-0 md:pr-90 tracking-wider leading-none`}>
          WORK
        </TransitionLink>

        <TransitionLink href="/about" className={`${r(4)} nav-link text-[4.5rem] sm:text-[7rem] md:text-[12rem] pr-0 md:pr-65 tracking-wider leading-none`}>
          ABOUT
        </TransitionLink>

        <TransitionLink href="/contact" className={`${r(5)} nav-link text-[4.5rem] sm:text-[7rem] md:text-[12rem] pr-0 md:pr-0 tracking-wider leading-none`}>
          CONTACT
        </TransitionLink>
      </div>
    </div>
  );
}